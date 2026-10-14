"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSpinner,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import ProofOfTrustCard from "./ProofOfTrustCard";
import type { ResolvePayload } from "../lib/verana";
import { DEMO_SERVICES } from "../lib/content";

// The Resolve-a-DID widget (spec-v2 §2.3): pick a demo service (or paste a
// DID), resolve it live against the network indexer, and see the
// Proof-of-Trust. The site's signature interactive element: verify-first,
// watched live.

type State =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "done"; result: ResolvePayload }
  | { kind: "error"; message: string };

export default function ResolveDid({ compact = false }: { compact?: boolean }) {
  const [selected, setSelected] = useState(DEMO_SERVICES[0].key);
  const [custom, setCustom] = useState("");
  const [state, setState] = useState<State>({ kind: "idle" });
  const rootRef = useRef<HTMLDivElement | null>(null);
  const autoFired = useRef(false);

  // A pasted DID wins over the selected demo service.
  const query = custom.trim()
    ? `did=${encodeURIComponent(custom.trim())}`
    : `service=${encodeURIComponent(selected)}`;
  const queryRef = useRef(query);
  queryRef.current = query;
  const idleRef = useRef(true);
  idleRef.current = state.kind === "idle";

  async function resolveDid(target: string) {
    setState({ kind: "loading" });
    try {
      const res = await fetch(`/api/resolve?${target}`);
      const data = await res.json();
      if (!res.ok) {
        setState({
          kind: "error",
          message:
            data?.message ?? "The trust resolver could not be reached.",
        });
        return;
      }
      setState({ kind: "done", result: data as ResolvePayload });
    } catch {
      setState({
        kind: "error",
        message: "The trust resolver could not be reached. Try again shortly.",
      });
    }
  }

  function resolve() {
    autoFired.current = true; // manual action supersedes the auto-resolve
    void resolveDid(query);
  }

  // When the widget scrolls into view and nothing has been resolved yet,
  // resolve the selected DID (the first one by default) automatically.
  useEffect(() => {
    const el = rootRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !autoFired.current && idleRef.current) {
            autoFired.current = true;
            void resolveDid(queryRef.current);
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={rootRef} className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row">
        <select
          value={selected}
          onChange={(e) => {
            setSelected(e.target.value);
            setCustom("");
          }}
          aria-label="Choose a service to resolve"
          className="w-full min-w-0 flex-1 rounded-lg border border-rule bg-surface px-3 py-2.5 font-mono text-xs text-ink"
        >
          {DEMO_SERVICES.map((d) => (
            <option key={d.key} value={d.key}>
              {d.label}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={resolve}
          disabled={state.kind === "loading"}
          className="btn btn-primary shrink-0"
        >
          {state.kind === "loading" ? (
            <FontAwesomeIcon icon={faSpinner} spin className="h-4 w-4" />
          ) : (
            <FontAwesomeIcon icon={faMagnifyingGlass} className="h-4 w-4" />
          )}
          Resolve trust
        </button>
      </div>

      {!compact ? (
        <input
          type="text"
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          placeholder="or paste any DID (did:webvh:..., did:web:...)"
          aria-label="Custom DID"
          className="w-full rounded-lg border border-rule bg-surface px-3 py-2.5 font-mono text-xs text-ink placeholder:text-muted"
        />
      ) : null}

      {state.kind === "loading" ? (
        <div className="card flex items-center gap-3 p-5 text-sm text-muted">
          <FontAwesomeIcon icon={faSpinner} spin className="h-4 w-4" />
          Resolving the DID and verifying its credential chain against the
          public registry. First-time resolutions can take a few seconds.
        </div>
      ) : null}

      {state.kind === "error" ? (
        <div className="card flex items-center gap-3 p-5 text-sm text-muted">
          <FontAwesomeIcon
            icon={faTriangleExclamation}
            className="h-4 w-4 shrink-0"
          />
          {state.message}
        </div>
      ) : null}

      {state.kind === "done" ? (
        <ProofOfTrustCard result={state.result} />
      ) : null}
    </div>
  );
}
