"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSpinner,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import ProofOfTrustCard from "./ProofOfTrustCard";
import type { ResolveResult, PotEnrichment } from "../lib/verana";
import { DEMO_DIDS } from "../lib/content";

type ResolvePayload = ResolveResult & { enrichment?: PotEnrichment };

// The Resolve-a-DID widget (spec-v2 §2.3): pick a DID (or paste one), resolve
// it live against the testnet resolver, and see the Proof-of-Trust. The site's
// signature interactive element: verify-first, watched live.

type State =
  | { kind: "idle" }
  | { kind: "loading"; did: string }
  | { kind: "done"; result: ResolvePayload }
  | { kind: "error"; message: string };

export default function ResolveDid({ compact = false }: { compact?: boolean }) {
  const [selected, setSelected] = useState(DEMO_DIDS[0].did);
  const [custom, setCustom] = useState("");
  const [state, setState] = useState<State>({ kind: "idle" });
  const rootRef = useRef<HTMLDivElement | null>(null);
  const autoFired = useRef(false);

  const did = custom.trim() || selected;
  const didRef = useRef(did);
  didRef.current = did;
  const idleRef = useRef(true);
  idleRef.current = state.kind === "idle";

  async function resolveDid(target: string) {
    setState({ kind: "loading", did: target });
    try {
      const res = await fetch(`/api/resolve?did=${encodeURIComponent(target)}`);
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
    void resolveDid(did);
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
            void resolveDid(didRef.current);
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
          aria-label="Choose a DID to resolve"
          className="w-full min-w-0 flex-1 rounded-lg border border-rule bg-surface px-3 py-2.5 font-mono text-xs text-ink"
        >
          {DEMO_DIDS.map((d) => (
            <option key={d.did} value={d.did}>
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
        <ProofOfTrustCard
          result={state.result}
          enrichment={state.result.enrichment}
        />
      ) : null}
    </div>
  );
}
