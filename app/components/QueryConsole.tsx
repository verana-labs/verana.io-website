"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faShieldHalved,
  faStar,
  faStarHalfStroke,
  faFlask,
} from "@fortawesome/free-solid-svg-icons";

// Simulated Trust Graph query console (spec-v2 §3.4): pick a query, watch the
// results arrive, expand each for its provenance. Clearly labeled simulated;
// a live mode against the indexer is a future flag, not fake liveness.

type GraphResult = {
  name: string;
  kind: string;
  did: string;
  detail: string;
  org: string;
  flag: string;
  trustScore: number; // 0 to 5
  deposit: string; // in Trust Units
  protocols?: string[];
  tags?: string[];
};

type GraphExample = { id: string; query: string; results: GraphResult[] };

const EXAMPLES: GraphExample[] = [
  {
    id: "acme",
    query: "Show me all the Verifiable Services of Acme Corp",
    results: [
      {
        name: "Corporate AI Agent",
        kind: "AI agent",
        did: "did:webvh:QmRhJB7x2...8Kpr:agent.vs.acme.example",
        detail: "agentic support over MCP and DIDComm",
        org: "Acme Corp",
        flag: "🇩🇪",
        trustScore: 4.5,
        deposit: "18,200 TU",
        protocols: ["MCP", "A2A", "AG-UI"],
      },
      {
        name: "acme.example",
        kind: "Website",
        did: "did:webvh:Qm9fK2aZ...3Lmn:www.vs.acme.example",
        detail: "public website service endpoint",
        org: "Acme Corp",
        flag: "🇩🇪",
        trustScore: 4,
        deposit: "9,600 TU",
        protocols: ["Website"],
        tags: ["ISO 9001 certified"],
      },
      {
        name: "Customer Support service",
        kind: "Service",
        did: "did:webvh:QmT4pL8wq...QrZ2:support.vs.acme.example",
        detail: "human customer support",
        org: "Acme Corp",
        flag: "🇩🇪",
        trustScore: 3.5,
        deposit: "4,100 TU",
        protocols: ["AG-UI"],
      },
    ],
  },
  {
    id: "shoes",
    query: "Ecommerce site selling baby shoes made in Colombia, delivering to Bogotá",
    results: [
      {
        name: "zapaticos.example",
        kind: "Ecommerce",
        did: "did:webvh:QmZ7nB4d...kP9x:shop.vs.zapaticos.example",
        detail: "handmade baby shoes",
        org: "Zapaticos SAS",
        flag: "🇨🇴",
        trustScore: 5,
        deposit: "26,000 TU",
        protocols: ["Website", "A2A"],
        tags: ["Made in Colombia", "Delivers: Bogotá"],
      },
      {
        name: "andesbaby.example",
        kind: "Ecommerce",
        did: "did:webvh:QmA3vC9h...mN4t:store.vs.andesbaby.example",
        detail: "baby footwear",
        org: "Andes Baby SA",
        flag: "🇨🇴",
        trustScore: 4,
        deposit: "11,300 TU",
        protocols: ["Website"],
        tags: ["Made in Colombia", "Delivers: Bogotá", "KYB verified"],
      },
    ],
  },
  {
    id: "iso",
    query: "Ecosystems that issue an ISO 42001 credential",
    results: [
      {
        name: "EU AI Trust Ecosystem",
        kind: "Ecosystem",
        did: "did:webvh:QmEu42aT...001a:ecosystem.eu-ai-trust.example",
        detail: "ISO 42001 AI-management credential schema",
        org: "EU AI Trust Foundation",
        flag: "🇪🇺",
        trustScore: 4.5,
        deposit: "120,000 TU",
        tags: ["3 accredited issuers", "35 accredited verifiers"],
      },
      {
        name: "Global AI Assurance",
        kind: "Ecosystem",
        did: "did:webvh:QmUs42tR...90us:ecosystem.global-ai-assurance.example",
        detail: "ISO 42001 credential schema",
        org: "Global AI Assurance Inc",
        flag: "🇺🇸",
        trustScore: 5,
        deposit: "300,000 TU",
        tags: ["7 accredited issuers", "157 accredited verifiers"],
      },
    ],
  },
];

function Stars({ score }: { score: number }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (score >= i)
      stars.push(
        <FontAwesomeIcon key={i} icon={faStar} className="h-3 w-3" aria-hidden />
      );
    else if (score >= i - 0.5)
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStarHalfStroke}
          className="h-3 w-3"
          aria-hidden
        />
      );
    else
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className="h-3 w-3 opacity-25"
          aria-hidden
        />
      );
  }
  return (
    <div
      className="flex items-center gap-0.5"
      style={{ color: "#f5b942" }}
      aria-label={`Trust score ${score} of 5`}
    >
      {stars}
    </div>
  );
}

function ResultRow({ r }: { r: GraphResult }) {
  return (
    <div className="px-4 py-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip chip-verified">
              <FontAwesomeIcon icon={faShieldHalved} className="h-3 w-3" />
              Verified
            </span>
            <span className="font-medium text-ink">{r.name}</span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
              {r.kind}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <span aria-hidden>{r.flag}</span>
            <span className="text-ink">{r.org}</span>
            <span aria-hidden>·</span>
            <span>{r.detail}</span>
          </div>
          <p className="break-all font-mono text-[11px] text-muted opacity-70">
            {r.did}
          </p>
          {r.protocols ? (
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {r.protocols.map((p) => (
                <span
                  key={p}
                  className="rounded border border-rule px-1.5 py-0.5 font-mono text-[10px] text-muted"
                >
                  {p}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        <div className="flex shrink-0 flex-col items-start gap-1 sm:items-end">
          <Stars score={r.trustScore} />
          <span className="font-mono text-xs text-muted">{r.deposit}</span>
        </div>
      </div>
      {r.tags && r.tags.length > 0 ? (
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {r.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-rule bg-surface px-2 py-0.5 font-mono text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function QueryConsole() {
  const [activeId, setActiveId] = useState(EXAMPLES[0].id);
  const [visibleCount, setVisibleCount] = useState(0);
  const timeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  const active = EXAMPLES.find((e) => e.id === activeId)!;

  // Results "arrive" progressively when a query is picked.
  useEffect(() => {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisibleCount(active.results.length);
      return;
    }
    setVisibleCount(0);
    active.results.forEach((_, i) => {
      timeouts.current.push(
        setTimeout(() => setVisibleCount((c) => Math.max(c, i + 1)), 350 + i * 420)
      );
    });
    return () => timeouts.current.forEach(clearTimeout);
  }, [activeId, active.results]);

  return (
    <div className="card overflow-hidden">
      {/* query picker */}
      <div className="border-b border-rule bg-surface-2 px-4 py-3">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="h-3.5 w-3.5 shrink-0 text-muted"
          />
          <span className="font-mono text-sm text-ink">{active.query}</span>
          <span className="chip ml-auto shrink-0">
            <FontAwesomeIcon icon={faFlask} className="h-3 w-3" />
            Simulated
          </span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {EXAMPLES.map((e) => (
            <button
              key={e.id}
              type="button"
              onClick={() => setActiveId(e.id)}
              className={`rounded-full border px-3 py-1 text-left font-mono text-[11px] transition-colors ${
                e.id === activeId
                  ? "border-accent text-ink"
                  : "border-rule text-muted hover:text-ink"
              }`}
            >
              {e.query}
            </button>
          ))}
        </div>
      </div>

      <div className="divide-y divide-rule" aria-live="polite">
        {active.results.slice(0, visibleCount).map((r) => (
          <div key={r.did} className="animate-arrive">
            <ResultRow r={r} />
          </div>
        ))}
        {visibleCount < active.results.length ? (
          <div className="px-4 py-4 font-mono text-xs text-muted">
            querying the trust graph...
          </div>
        ) : null}
      </div>
    </div>
  );
}
