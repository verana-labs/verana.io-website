// The condensed public roadmap: a vertical spine in the network's own history
// colors (shipped green, current-epoch blue, quiet future). The detailed,
// authoritative roadmap lives in verana-labs/verana-spec/ROADMAP.md; this
// component only tells the 5-phase story.

type Status = "shipped" | "progress" | "planned" | "exploring";

const STATUS_CHIP: Record<Status, { label: string; className: string }> = {
  shipped: { label: "SHIPPED", className: "chip-verified" },
  progress: { label: "IN PROGRESS", className: "chip-progress" },
  planned: { label: "PLANNED", className: "" },
  exploring: { label: "EXPLORING", className: "" },
};

const PHASES: {
  when: string;
  title: string;
  status: Status;
  items: string[];
}[] = [
  {
    when: "2025",
    title: "Foundations — protocol v3 on testnet",
    status: "shipped",
    items: ["Testnet live", "Node, indexer, resolver", "Verifiable Service agent"],
  },
  {
    when: "2026 · Q1–Q3",
    title: "Protocol v4 — ecosystems at scale",
    status: "progress",
    items: [
      "Trust graph & indexer APIs",
      "Operator authorization",
      "Business & cloud wallets",
      "Wallet integrations + playground",
    ],
  },
  {
    when: "2026 · Q4",
    title: "Protocol v5 — mainnet readiness",
    status: "planned",
    items: [
      "Council-based governance",
      "vLEI organizational trust",
      "Security audit",
      "Genesis validator rehearsal",
    ],
  },
  {
    when: "2027 · Q1",
    title: "Mainnet launch",
    status: "planned",
    items: [
      "Genesis ceremony",
      "Token generation event",
      "First credential ecosystems live",
    ],
  },
  {
    when: "2027+",
    title: "Protocol v6 — the agentic internet",
    status: "exploring",
    items: [
      "Delegation for AI agents",
      "Enclave & HSM key custody",
      "Trust Spanning Protocol",
      "Personhood interop (OpenVTC)",
    ],
  },
];

export default function Roadmap() {
  return (
    <div className="roadmap-spine reveal-stagger flex flex-col gap-4">
      {PHASES.map((phase) => {
        const chip = STATUS_CHIP[phase.status];
        return (
          <div key={phase.title} data-status={phase.status} className="roadmap-stop">
            <div className="rounded-xl border border-rule bg-surface px-5 py-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs tracking-[0.1em] text-muted">
                  {phase.when}
                </span>
                <span className={`chip ${chip.className}`}>
                  <span className="chip-dot" aria-hidden />
                  {chip.label}
                </span>
              </div>
              <h3 className="display mt-2 text-lg text-ink">{phase.title}</h3>
              <ul className="mt-1.5 flex flex-wrap gap-x-6 gap-y-0.5 text-sm text-muted">
                {phase.items.map((item) => (
                  <li key={item} className="roadmap-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
