import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faFileLines,
  faDatabase,
  faDiagramProject,
  faRobot,
  faMagnifyingGlass,
  faCubes,
  faShieldHalved,
  faFingerprint,
  faSitemap,
  faTableList,
  faIdCard,
  faServer,
  faKey,
  faArrowsRotate,
  faMobileScreen,
  faChartLine,
  faCodeBranch,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Glyph from "../components/Glyph";
import { Container, Section, SectionHeading, Button } from "../components/ui";
import PageHero from "../components/PageHero";
import QueryConsole from "../components/QueryConsole";
import ConceptPager from "../components/ConceptPager";
import { LINKS } from "../lib/site";

export const metadata: Metadata = {
  title: "Discovery",
  description:
    "The Trust Graph: discover services and ecosystems by the credentials they hold, scoped to an ecosystem, ranked by trust. A first-class surface for AI-agent discovery.",
};

const PRIMARY = "var(--color-primary)";
const ACCENT = "var(--color-accent)";
const SUCCESS = "var(--color-success)";
const MUTED = "var(--color-muted)";

/** Mono label pill (shared SVG recipe from the /ecosystems diagrams). */
function Pill({
  label,
  x,
  y,
  color,
}: {
  label: string;
  x: number;
  y: number;
  color: string;
}) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        x={-(label.length * 3.1 + 6)}
        y={-9}
        width={label.length * 6.2 + 12}
        height={18}
        rx={9}
        fill="var(--color-surface)"
        stroke={color}
        strokeOpacity={0.5}
      />
      <text
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={9.5}
        fontFamily="var(--font-mono)"
        fill="var(--color-ink)"
      >
        {label}
      </text>
    </g>
  );
}

/** A circular icon node with halo (TierTree recipe) + mono-halo labels. */
function PipeNode({
  x,
  y,
  r,
  color,
  icon,
  glyph,
  label,
  sub,
}: {
  x: number;
  y: number;
  r: number;
  color: string;
  icon: IconDefinition;
  glyph: number;
  label: string;
  sub?: string;
}) {
  return (
    <g>
      <circle cx={x} cy={y} r={r + 4} fill={color} opacity={0.12} />
      <circle
        cx={x}
        cy={y}
        r={r}
        fill="var(--color-surface)"
        stroke={color}
        strokeWidth={1.5}
      />
      <Glyph icon={icon} cx={x} cy={y} size={glyph} color={color} />
      <text
        x={x}
        y={y + r + 16}
        textAnchor="middle"
        fontSize={12}
        fontWeight={600}
        fontFamily="var(--font-mono)"
        fill="var(--color-ink)"
        stroke="var(--color-surface)"
        strokeWidth={3}
        paintOrder="stroke"
      >
        {label}
      </text>
      {sub ? (
        <text
          x={x}
          y={y + r + 30}
          textAnchor="middle"
          fontSize={9.5}
          fontFamily="var(--font-mono)"
          fill={MUTED}
          stroke="var(--color-surface)"
          strokeWidth={3}
          paintOrder="stroke"
        >
          {sub}
        </text>
      ) : null}
    </g>
  );
}

/**
 * The Trust Graph pipeline (real modules, verified against the verana-graph
 * spec and the indexer/resolver repos): two sources converge through the
 * indexer and the resolver (the verification gate) into the typed graph,
 * queried by four kinds of consumers. Only verified data enters; entries
 * expire with their upstream TTL.
 */
function TrustGraphPipeline() {
  const bands = [
    { y: 8, h: 116, label: "01 · SOURCES", color: PRIMARY },
    { y: 130, h: 128, label: "02 · PIPELINE", color: ACCENT },
    { y: 264, h: 224, label: "03 · TRUST GRAPH", color: SUCCESS },
    { y: 494, h: 116, label: "04 · CONSUMERS", color: ACCENT },
  ];

  const clusterEdges: {
    x1: number; y1: number; x2: number; y2: number;
    color: string; pill?: [string, number, number];
  }[] = [
    { x1: 454, y1: 352, x2: 241, y2: 352, color: PRIMARY, pill: ["member of", 348, 352] },
    { x1: 456, y1: 342, x2: 352, y2: 304, color: PRIMARY, pill: ["authorizes", 404, 322] },
    { x1: 233, y1: 342, x2: 309, y2: 307, color: PRIMARY, pill: ["grants", 272, 322] },
    { x1: 497, y1: 373, x2: 614, y2: 407, color: SUCCESS, pill: ["presents", 556, 390] },
    { x1: 608, y1: 420, x2: 352, y2: 420, color: ACCENT, pill: ["of schema", 480, 420] },
    { x1: 506, y1: 352, x2: 719, y2: 352, color: ACCENT, pill: ["exposes", 612, 352] },
  ];

  const consumers = [
    { x: 240, icon: faMobileScreen, label: "Verifiable User Agents", sub: "browsers · wallets" },
    { x: 400, icon: faRobot, label: "AI agents", sub: "query over MCP" },
    { x: 560, icon: faMagnifyingGlass, label: "Search engines", sub: "index the open graph" },
    { x: 720, icon: faChartLine, label: "Auditors", sub: "analytics · compliance" },
  ];

  return (
    <div className="card overflow-hidden">
      {/* header */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-rule bg-surface-2 px-4 py-3">
        <span className="eyebrow flex items-center gap-2">
          <FontAwesomeIcon icon={faDiagramProject} className="h-3 w-3" />
          Trust Graph pipeline
        </span>
        <span className="chip">
          <FontAwesomeIcon icon={faCodeBranch} className="h-3 w-3" />
          open source
        </span>
        <div className="ml-auto flex flex-wrap items-center gap-3">
          {[
            { color: PRIMARY, label: "chain state" },
            { color: ACCENT, label: "pipeline · APIs" },
            { color: SUCCESS, label: "verified" },
            { color: MUTED, label: "unverified" },
          ].map((l) => (
            <span
              key={l.label}
              className="flex items-center gap-1.5 font-mono text-[11px] text-muted"
            >
              <span
                aria-hidden
                className="h-2 w-2 rounded-full"
                style={{ background: l.color }}
              />
              {l.label}
            </span>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 960 618"
          className="h-auto w-full min-w-[720px]"
          role="img"
          aria-label="The Trust Graph pipeline: the Verana public registry and the DID Documents on the web feed the indexer and the resolver; only verified trust results enter the typed graph of DIDs, registries, schemas, credentials, permissions, and endpoints, which user agents, AI agents, search engines, and auditors query."
        >
          <defs>
            {(
              [
                ["tg-primary", PRIMARY],
                ["tg-accent", ACCENT],
                ["tg-success", SUCCESS],
                ["tg-muted", MUTED],
              ] as const
            ).map(([id, color]) => (
              <marker
                key={id}
                id={id}
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill={color} />
              </marker>
            ))}
            <pattern id="tg-dots" width={24} height={24} patternUnits="userSpaceOnUse">
              <circle cx={2} cy={2} r={1} fill="var(--color-rule)" />
            </pattern>
          </defs>

          {/* bands */}
          {bands.map((b) => (
            <g key={b.label}>
              <rect
                x={8}
                y={b.y}
                width={944}
                height={b.h}
                rx={12}
                fill="var(--color-surface-2)"
                fillOpacity={0.6}
                stroke="var(--color-rule)"
                strokeWidth={1}
              />
              <rect x={16} y={b.y + 14} width={3} height={b.h - 28} rx={1.5} fill={b.color} opacity={0.8} />
              <text
                x={28}
                y={b.y + 26}
                fontFamily="var(--font-mono)"
                fontSize={10}
                letterSpacing="0.14em"
                fill={MUTED}
              >
                {b.label}
              </text>
            </g>
          ))}
          {/* the graph band is a data space */}
          <rect x={8} y={264} width={944} height={224} rx={12} fill="url(#tg-dots)" opacity={0.5} />

          {/* pipeline edges */}
          <line x1={240} y1={92} x2={240} y2={155} stroke={PRIMARY} strokeWidth={1.5} opacity={0.7} markerEnd="url(#tg-primary)" />
          <Pill label="every block" x={240} y={140} color={PRIMARY} />
          <line x1={271} y1={186} x2={444} y2={186} stroke={ACCENT} strokeWidth={1.5} opacity={0.7} markerEnd="url(#tg-accent)" />
          <Pill label="affected-DID events" x={357} y={186} color={ACCENT} />
          <line x1={690} y1={74} x2={517} y2={166} stroke={ACCENT} strokeWidth={1.5} strokeDasharray="4 3" opacity={0.7} markerEnd="url(#tg-accent)" />
          <Pill label="dereferences Linked VPs" x={577} y={134} color={ACCENT} />
          {/* the artery: only verified results enter the graph */}
          <line x1={480} y1={220} x2={480} y2={322} stroke={SUCCESS} strokeWidth={2} opacity={0.7} markerEnd="url(#tg-success)" />
          <Pill label="TrustResult · Proof-of-Trust" x={480} y={268} color={SUCCESS} />
          {/* the fail branch: unverified never enters */}
          <path d="M 451,213 Q 420,244 372,258" fill="none" stroke={MUTED} strokeWidth={1.25} strokeDasharray="4 3" opacity={0.6} markerEnd="url(#tg-muted)" />
          <g opacity={0.6}>
            <Glyph icon={faXmark} cx={426} cy={228} size={9} color={MUTED} />
          </g>
          <Pill label="never enters" x={296} y={260} color={MUTED} />
          {/* resolver REST surface */}
          <line x1={508} y1={202} x2={592} y2={218} stroke={ACCENT} strokeWidth={1} opacity={0.4} />
          <Pill label="REST · Q1-Q4" x={630} y={222} color={ACCENT} />

          {/* band 01: sources */}
          <PipeNode x={240} y={58} r={30} color={PRIMARY} icon={faCubes} glyph={22} label="The VPR" sub="Verana L1 · registries · schemas · permissions · deposits" />
          <PipeNode x={720} y={58} r={30} color={ACCENT} icon={faFileLines} glyph={22} label="DID Documents" sub="Linked Verifiable Presentations · served from the web" />

          {/* band 02: pipeline modules */}
          <PipeNode x={240} y={186} r={27} color={ACCENT} icon={faDatabase} glyph={20} label="verana-indexer" sub="tails the chain · block by block" />
          <circle cx={480} cy={186} r={38} fill="none" stroke={SUCCESS} strokeDasharray="3 4" opacity={0.45} />
          <PipeNode x={480} y={186} r={30} color={SUCCESS} icon={faShieldHalved} glyph={22} label="verana-resolver" sub="verre trust resolution · the verification gate" />

          {/* band 03: the typed graph */}
          {clusterEdges.map((e, i) => (
            <g key={i}>
              <line x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} stroke={e.color} strokeWidth={1.5} opacity={0.55} />
              {e.pill ? <Pill label={e.pill[0]} x={e.pill[1]} y={e.pill[2]} color={e.color} /> : null}
            </g>
          ))}
          <path d="M 330,318 C 288,348 288,368 330,398" fill="none" stroke={PRIMARY} strokeWidth={1.5} opacity={0.55} />
          <PipeNode x={480} y={352} r={26} color={ACCENT} icon={faFingerprint} glyph={19} label="Did" />
          <PipeNode x={330} y={296} r={22} color={PRIMARY} icon={faKey} glyph={15} label="Permission" />
          <PipeNode x={215} y={352} r={22} color={PRIMARY} icon={faSitemap} glyph={15} label="TrustRegistry" />
          <PipeNode x={330} y={420} r={22} color={PRIMARY} icon={faTableList} glyph={15} label="CredentialSchema" />
          <PipeNode x={745} y={352} r={22} color={ACCENT} icon={faServer} glyph={15} label="ServiceEndpoint" />
          <PipeNode x={630} y={420} r={22} color={SUCCESS} icon={faIdCard} glyph={15} label="Credential" />
          {/* TTL badge */}
          <circle cx={868} cy={292} r={17} fill={MUTED} opacity={0.12} />
          <circle cx={868} cy={292} r={13} fill="var(--color-surface)" stroke={MUTED} strokeWidth={1.5} />
          <Glyph icon={faArrowsRotate} cx={868} cy={292} size={11} color={MUTED} />
          <text x={868} y={318} textAnchor="middle" fontFamily="var(--font-mono)" fontSize={9} fill={MUTED} stroke="var(--color-surface)" strokeWidth={3} paintOrder="stroke">
            TTL · never stale
          </text>

          {/* query surface */}
          <line x1={210} y1={472} x2={750} y2={472} stroke={ACCENT} strokeWidth={1.5} opacity={0.5} />
          <Pill label="GraphQL · discovery API" x={350} y={472} color={ACCENT} />
          <Pill label="MCP · AI agents" x={610} y={472} color={ACCENT} />
          {consumers.map((c) => (
            <line key={c.x} x1={c.x} y1={483} x2={c.x} y2={510} stroke={ACCENT} strokeWidth={1.5} opacity={0.7} markerEnd="url(#tg-accent)" />
          ))}

          {/* band 04: consumers */}
          {consumers.map((c) => (
            <PipeNode key={c.label} x={c.x} y={538} r={22} color={ACCENT} icon={c.icon} glyph={15} label={c.label} sub={c.sub} />
          ))}
        </svg>
      </div>

      {/* footer */}
      <div className="flex flex-wrap items-center gap-2 border-t border-rule px-5 py-3">
        <span className="chip">
          <FontAwesomeIcon icon={faShieldHalved} className="h-3 w-3" />
          only verified data enters
        </span>
        <span className="chip">
          <FontAwesomeIcon icon={faArrowsRotate} className="h-3 w-3" />
          expires with upstream TTL
        </span>
        <span className="ml-auto font-mono text-[11px] text-muted">
          GraphQL · REST Q1-Q4 · MCP
        </span>
      </div>
    </div>
  );
}

export default function Discovery() {
  return (
    <>
      <PageHero
        eyebrow="Discovery · 3 of 3"
        title="Discover who you can trust"
        intro="Because public credentials are published in DID Documents, the registry can be indexed into a trust-typed graph: find services and ecosystems by the credentials they hold, scope to an ecosystem, and rank by trust signals."
      />

      <Section>
        <Container className="space-y-14">
          <div>
            <p className="reveal max-w-3xl text-muted">
              The Trust Graph is a first-class surface for AI-agent discovery:
              agents query it over an API or an MCP server, and every result
              carries verifiable provenance, so you can check it before you
              act on it. Discovery ranked by earned trust, instead of ad spend
              or SEO.
            </p>
            <div className="reveal mt-8">
              <TrustGraphPipeline />
            </div>
          </div>

          {/* simulated query console */}
          <div>
            <SectionHeading
              eyebrow="Try it"
              title="Query the Trust Graph"
              intro="Three example queries, simulated with representative data. The first one queries Acme Corp, the corporation from the worked example on the ecosystems page. A live mode against the network indexer will follow."
            />
            <div className="reveal mt-6">
              <QueryConsole />
            </div>
          </div>

          <div className="reveal flex flex-wrap gap-3">
            <Button href={LINKS.docs} variant="ghost" external>
              API and MCP docs
            </Button>
            <Button href="/build" variant="ghost">
              Build on Verana
            </Button>
          </div>

          <ConceptPager nextHref="/use-cases" nextLabel="Use cases" />
        </Container>
      </Section>
    </>
  );
}
