import { Search, ShieldCheck, Star, StarHalf } from "lucide-react";

type GraphResult = {
  name: string;
  kind: string;
  did: string;
  detail: string;
  org: string;
  flag: string;
  verified: boolean;
  trustScore: number; // 0 to 5
  deposit: string; // in Trust Units
  protocols?: string[];
  tags?: string[];
};
type GraphExample = { query: string; results: GraphResult[] };

const EXAMPLES: GraphExample[] = [
  {
    query: "Show me all the Verifiable Services of Company B",
    results: [
      {
        name: "Customer Support Agent",
        kind: "AI agent",
        did: "did:webvh:QmRhJB7x2...8Kpr:support.vs.company-b.example",
        detail: "agentic support over MCP and DIDComm",
        org: "Company B",
        flag: "🇩🇪",
        verified: true,
        trustScore: 4.5,
        deposit: "18,200 TU",
        protocols: ["MCP", "A2A", "AG-UI"],
      },
      {
        name: "company-b.example",
        kind: "Website",
        did: "did:webvh:Qm9fK2aZ...3Lmn:www.vs.company-b.example",
        detail: "public website service endpoint",
        org: "Company B",
        flag: "🇩🇪",
        verified: true,
        trustScore: 4,
        deposit: "9,600 TU",
        protocols: ["Website"],
      },
      {
        name: "Employee Assistant",
        kind: "AI agent",
        did: "did:webvh:QmT4pL8wq...QrZ2:hr.vs.company-b.example",
        detail: "internal employee-facing agent",
        org: "Company B",
        flag: "🇩🇪",
        verified: true,
        trustScore: 3.5,
        deposit: "4,100 TU",
        protocols: ["AG-UI", "MCP"],
      },
    ],
  },
  {
    query: "Ecommerce site selling baby shoes made in Colombia, delivering to Bogotá",
    results: [
      {
        name: "zapaticos.example",
        kind: "Ecommerce",
        did: "did:webvh:QmZ7nB4d...kP9x:shop.vs.zapaticos.example",
        detail: "handmade baby shoes",
        org: "Zapaticos SAS",
        flag: "🇨🇴",
        verified: true,
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
        verified: true,
        trustScore: 4,
        deposit: "11,300 TU",
        protocols: ["Website"],
        tags: ["Made in Colombia", "Delivers: Bogotá", "KYB verified"],
      },
    ],
  },
  {
    query: "Ecosystems that issue an ISO 42001 credential for France",
    results: [
      {
        name: "EU AI Trust Ecosystem",
        kind: "Ecosystem",
        did: "did:webvh:QmEu42aT...001a:ecosystem.eu-ai-trust.example",
        detail: "ISO 42001 AI-management credential schema",
        org: "EU AI Trust Foundation",
        flag: "🇪🇺",
        verified: true,
        trustScore: 4.5,
        deposit: "120,000 TU",
        tags: ["jurisdiction: FR", "3 accredited issuers"],
      },
      {
        name: "AFNOR Certification",
        kind: "Ecosystem",
        did: "did:webvh:QmAf42cR...77fr:ecosystem.afnor.example",
        detail: "ISO 42001 issuer ecosystem",
        org: "AFNOR",
        flag: "🇫🇷",
        verified: true,
        trustScore: 5,
        deposit: "300,000 TU",
        tags: ["jurisdiction: FR", "accredited issuer"],
      },
    ],
  },
];

function Stars({ score }: { score: number }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (score >= i)
      stars.push(<Star key={i} size={13} fill="currentColor" aria-hidden />);
    else if (score >= i - 0.5)
      stars.push(<StarHalf key={i} size={13} fill="currentColor" aria-hidden />);
    else
      stars.push(<Star key={i} size={13} className="opacity-25" aria-hidden />);
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

export default function TrustGraphExamples() {
  return (
    <div className="space-y-6">
      {EXAMPLES.map((ex) => (
        <div key={ex.query} className="card overflow-hidden">
          <div className="flex items-center gap-2 border-b border-rule bg-surface-2 px-4 py-3">
            <Search size={15} className="shrink-0 text-muted" aria-hidden />
            <span className="font-mono text-sm text-ink">{ex.query}</span>
          </div>

          <div className="divide-y divide-rule">
            {ex.results.map((r) => (
              <div key={r.name} className="px-4 py-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  {/* identity */}
                  <div className="min-w-0 space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      {r.verified ? (
                        <span className="chip chip-verified">
                          <ShieldCheck size={12} aria-hidden /> Verified
                        </span>
                      ) : null}
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

                  {/* trust score + deposit */}
                  <div className="flex shrink-0 flex-col items-start gap-1 sm:items-end">
                    <Stars score={r.trustScore} />
                    <span className="font-mono text-xs text-muted">
                      {r.deposit}
                    </span>
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
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
