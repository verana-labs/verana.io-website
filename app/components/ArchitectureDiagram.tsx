const LAYERS: {
  label: string;
  items: string;
  note?: string;
  tone?: "primary" | "accent" | "success";
}[] = [
  {
    label: "Edge / client",
    items: "Mobile Wallet SDK · wallets · AI agents",
    note: "e.g. Hologram Messaging",
  },
  {
    label: "Service",
    items: "Service Wallet (issue, verify, run a service) · Ecosystem Management",
    tone: "accent",
  },
  {
    label: "Ecosystem",
    items: "ecosystems · credential schemas · accreditation · business model",
    tone: "primary",
  },
  {
    label: "Query / index",
    items: "Trust Resolver · Trust Graph",
    note: "permissionless, derived from the ledger",
    tone: "success",
  },
  {
    label: "Network (L1)",
    items: "Verifiable Public Registry (VPR), a Cosmos-SDK Layer-1",
    note: "governed by the Verana Council",
  },
];

function dot(tone?: string) {
  if (tone === "primary") return "var(--color-primary)";
  if (tone === "accent") return "var(--color-accent)";
  if (tone === "success") return "var(--color-success)";
  return "var(--color-muted)";
}

export default function ArchitectureDiagram() {
  return (
    <div className="card overflow-hidden">
      {/* interfaces + standards bands */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rule bg-surface-2 px-5 py-3">
        <span className="eyebrow">Interfaces, every layer</span>
        <span className="font-mono text-xs text-ink">
          API · MCP server · SDKs
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rule px-5 py-3">
        <span className="eyebrow">Standards</span>
        <span className="font-mono text-xs text-muted">
          VC · DID · DIDComm · OID4VC/EUDIW · TRQP · ECS/EGF
        </span>
      </div>

      {/* layers, top (edge) to bottom (network) */}
      <ul>
        {LAYERS.map((layer, i) => (
          <li
            key={layer.label}
            className={`flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:gap-5 ${
              i < LAYERS.length - 1 ? "border-b border-rule" : ""
            }`}
          >
            <div className="flex w-44 shrink-0 items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: dot(layer.tone) }}
                aria-hidden
              />
              <span className="font-mono text-xs uppercase tracking-wider text-muted">
                {layer.label}
              </span>
            </div>
            <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <span className="text-sm text-ink">{layer.items}</span>
              {layer.note ? (
                <span className="text-xs text-muted">{layer.note}</span>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
