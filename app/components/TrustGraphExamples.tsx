import { Search } from "lucide-react";

type GraphResult = {
  name: string;
  kind: string;
  detail: string;
  signals: string[];
};
type GraphExample = { query: string; results: GraphResult[] };

const EXAMPLES: GraphExample[] = [
  {
    query: "Show me all the Verifiable Services of Company B",
    results: [
      {
        name: "Customer Support Agent",
        kind: "AI agent",
        detail: "agentic support over MCP and DIDComm",
        signals: ["ECS-Service", "ECS-Org: Company B"],
      },
      {
        name: "company-b.example",
        kind: "Website",
        detail: "public website service endpoint",
        signals: ["ECS-Service", "ECS-Org: Company B"],
      },
      {
        name: "Employee Assistant",
        kind: "AI agent",
        detail: "internal employee-facing agent",
        signals: ["ECS-Service", "ECS-Org: Company B"],
      },
    ],
  },
  {
    query: "Ecommerce site selling baby shoes made in Colombia, delivering to Bogotá",
    results: [
      {
        name: "zapaticos.example",
        kind: "Ecommerce",
        detail: "handmade baby shoes",
        signals: ["Made in Colombia", "Delivers: Bogotá", "high trust deposit"],
      },
      {
        name: "andesbaby.example",
        kind: "Ecommerce",
        detail: "baby footwear",
        signals: ["Made in Colombia", "Delivers: Bogotá", "KYB verified"],
      },
    ],
  },
  {
    query: "Ecosystems that issue an ISO 42001 credential for France",
    results: [
      {
        name: "EU AI Trust Ecosystem",
        kind: "Ecosystem",
        detail: "ISO 42001 AI-management credential schema",
        signals: ["jurisdiction: FR", "3 accredited issuers"],
      },
      {
        name: "AFNOR Certification",
        kind: "Ecosystem",
        detail: "ISO 42001 issuer ecosystem",
        signals: ["jurisdiction: FR", "accredited issuer"],
      },
    ],
  },
];

export default function TrustGraphExamples() {
  return (
    <div className="space-y-6">
      {EXAMPLES.map((ex) => (
        <div key={ex.query} className="card overflow-hidden">
          <div className="flex items-center gap-2 border-b border-rule bg-surface-2 px-4 py-3">
            <Search size={15} className="shrink-0 text-muted" aria-hidden />
            <span className="font-mono text-sm text-ink">{ex.query}</span>
          </div>
          <ul className="divide-y divide-rule">
            {ex.results.map((r) => (
              <li
                key={r.name}
                className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-ink">{r.name}</span>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                      {r.kind}
                    </span>
                  </div>
                  <p className="text-sm text-muted">{r.detail}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {r.signals.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-rule bg-surface px-2 py-0.5 font-mono text-[11px] text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
