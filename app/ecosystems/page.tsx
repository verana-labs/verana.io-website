import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Glyph from "../components/Glyph";
import {
  faStamp,
  faCoins,
  faScaleBalanced,
  faBuilding,
  faUserTie,
  faServer,
  faIdBadge,
  faMobileScreen,
  faSitemap,
  faCertificate,
  faMagnifyingGlass,
  faUsers,
  faArrowDown,
  faArrowUp,
  faBookOpen,
  faFileLines,
  faGavel,
  faLock,
  faAnchor,
  faHandshakeSlash,
  faStar,
  faFlask,
  faUserPlus,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Container, Section, SectionHeading, Button } from "../components/ui";
import PageHero from "../components/PageHero";
import EcosystemExplorer from "../components/EcosystemExplorer";
import ConceptPager from "../components/ConceptPager";
import { ECS, BUSINESS_MODELS } from "../lib/content";
import { LINKS } from "../lib/site";

export const metadata: Metadata = {
  title: "Sovereign ecosystems",
  description:
    "Join or build a trust ecosystem: governance framework, credential schemas, accreditation tree, and a built-in business model, anchored on the Verifiable Public Registry.",
};

const ECS_ICONS = [faBuilding, faUserTie, faServer, faIdBadge, faMobileScreen];

/** Mono label pill on a surface-colored capsule (shared SVG recipe). */
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

/** The participant (permission) tree of a credential schema: a full-width,
 *  four-tier delegation diagram in the same node/edge language as the
 *  ecosystem explorer below. Static by design; the interactive instance of
 *  this model is the explorer. */
function TierTree() {
  const PRIMARY = "var(--color-primary)";
  const ACCENT = "var(--color-accent)";
  const SUCCESS = "var(--color-success)";

  const tiers = [
    { y: 8, label: "T0 · ROOT", color: PRIMARY },
    { y: 130, label: "T1 · GRANTORS", color: PRIMARY },
    { y: 252, label: "T2 · ISSUERS + VERIFIERS", color: ACCENT },
    { y: 374, label: "T3 · HOLDERS", color: SUCCESS },
  ];

  const nodes = [
    { x: 480, y: 54, r: 34, color: PRIMARY, icon: faSitemap, glyph: 24, label: "Ecosystem", sub: "root of trust" },
    { x: 300, y: 174, r: 27, color: PRIMARY, icon: faCertificate, glyph: 20, label: "Issuer Grantor", sub: "accredits issuers" },
    { x: 660, y: 174, r: 27, color: PRIMARY, icon: faCertificate, glyph: 20, label: "Verifier Grantor", sub: "accredits verifiers" },
    { x: 300, y: 296, r: 27, color: ACCENT, icon: faStamp, glyph: 20, label: "Issuer", sub: "issues credentials" },
    { x: 660, y: 296, r: 27, color: ACCENT, icon: faMagnifyingGlass, glyph: 20, label: "Verifier", sub: "requests proofs" },
    { x: 480, y: 418, r: 27, color: SUCCESS, icon: faUsers, glyph: 20, label: "Holder", sub: "human · service · AI agent · connected object" },
  ];

  const edges: {
    x1: number; y1: number; x2: number; y2: number;
    color: string; label?: string;
  }[] = [
    { x1: 480, y1: 54, x2: 300, y2: 174, color: PRIMARY, label: "accredits" },
    { x1: 480, y1: 54, x2: 660, y2: 174, color: PRIMARY, label: "accredits" },
    { x1: 300, y1: 174, x2: 300, y2: 296, color: PRIMARY },
    { x1: 660, y1: 174, x2: 660, y2: 296, color: PRIMARY },
    { x1: 300, y1: 296, x2: 480, y2: 418, color: PRIMARY, label: "issues to" },
    { x1: 660, y1: 296, x2: 480, y2: 418, color: ACCENT, label: "verifies" },
  ];

  return (
    <svg
      viewBox="0 0 960 500"
      className="h-auto w-full min-w-[560px]"
      role="img"
      aria-label="Participant tree: the ecosystem root accredits issuer and verifier grantors, who accredit issuers and verifiers; issuers issue credentials to holders and verifiers verify holders' credentials."
    >
      {/* tier bands */}
      {tiers.map((t) => (
        <g key={t.label}>
          <rect
            x={8}
            y={t.y}
            width={944}
            height={116}
            rx={12}
            fill="var(--color-surface-2)"
            fillOpacity={0.6}
            stroke="var(--color-rule)"
            strokeWidth={1}
          />
          <rect x={16} y={t.y + 14} width={3} height={88} rx={1.5} fill={t.color} opacity={0.8} />
          <text
            x={28}
            y={t.y + 26}
            fontFamily="var(--font-mono)"
            fontSize={10}
            letterSpacing="0.14em"
            fill="var(--color-muted)"
          >
            {t.label}
          </text>
        </g>
      ))}

      {/* edges */}
      {edges.map((e, i) => {
        const midX = (e.x1 + e.x2) / 2;
        const midY = (e.y1 + e.y2) / 2;
        return (
          <g key={i}>
            <line
              x1={e.x1}
              y1={e.y1}
              x2={e.x2}
              y2={e.y2}
              stroke={e.color}
              strokeWidth={1.5}
              opacity={0.55}
            />
            {e.label ? (
              <g transform={`translate(${midX}, ${midY})`}>
                <rect
                  x={-(e.label.length * 3.1 + 6)}
                  y={-9}
                  width={e.label.length * 6.2 + 12}
                  height={18}
                  rx={9}
                  fill="var(--color-surface)"
                  stroke={e.color}
                  strokeOpacity={0.5}
                />
                <text
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={9.5}
                  fontFamily="var(--font-mono)"
                  fill="var(--color-ink)"
                >
                  {e.label}
                </text>
              </g>
            ) : null}
          </g>
        );
      })}

      {/* nodes */}
      {nodes.map((n) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r={n.r + 4} fill={n.color} opacity={0.12} />
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="var(--color-surface)"
            stroke={n.color}
            strokeWidth={1.5}
          />
          <Glyph icon={n.icon} cx={n.x} cy={n.y} size={n.glyph} color={n.color} />
          <text
            x={n.x}
            y={n.y + n.r + 16}
            textAnchor="middle"
            fontSize={12}
            fontWeight={600}
            fontFamily="var(--font-display)"
            fill="var(--color-ink)"
          >
            {n.label}
          </text>
          <text
            x={n.x}
            y={n.y + n.r + 30}
            textAnchor="middle"
            fontSize={9.5}
            fontFamily="var(--font-mono)"
            fill="var(--color-muted)"
          >
            {n.sub}
          </text>
        </g>
      ))}
    </svg>
  );
}

/** The trust deposit of one participant over time, as a step chart: paid
 *  operations grow it, an authority slashes it, repayment restores it. All
 *  figures illustrative. Static server component; shares the TierTree card
 *  anatomy and pill recipe. */
function DepositChart() {
  const SUCCESS = "var(--color-success)";
  const MUTED = "var(--color-muted)";
  const PRIMARY = "var(--color-primary)";

  return (
    <svg
      viewBox="0 0 960 300"
      className="h-auto w-full min-w-[560px]"
      role="img"
      aria-label="Trust deposit over time: each paid trust operation commits Trust Units to the deposit, growing the trust score; an authority slashes 800 TU for misbehavior, making the participant non-trustable until the slash is repaid; after repayment the deposit and score grow again."
    >
      {/* grid + ticks */}
      {[
        { y: 60, label: "2,000 TU" },
        { y: 160, label: "1,000" },
        { y: 260, label: "0" },
      ].map((t) => (
        <g key={t.y}>
          <line
            x1={56}
            y1={t.y}
            x2={936}
            y2={t.y}
            stroke="var(--color-rule)"
            strokeWidth={1}
          />
          <text
            x={48}
            y={t.y + 3}
            textAnchor="end"
            fontFamily="var(--font-mono)"
            fontSize={10}
            fill={MUTED}
          >
            {t.label}
          </text>
        </g>
      ))}
      <text
        x={936}
        y={282}
        textAnchor="end"
        fontFamily="var(--font-mono)"
        fontSize={10}
        fill={MUTED}
      >
        time →
      </text>

      {/* non-trustable window */}
      <rect
        x={560}
        y={52}
        width={140}
        height={208}
        rx={8}
        fill={MUTED}
        fillOpacity={0.07}
      />

      {/* area washes */}
      <path
        d="M64,260 H100 V245 H160 V230 H220 V210 H280 V195 H340 V175 H400 V150 H460 V125 H520 V100 H560 V260 Z"
        fill={SUCCESS}
        fillOpacity={0.1}
      />
      <path d="M560,260 V180 H700 V260 Z" fill={MUTED} fillOpacity={0.08} />
      <path
        d="M700,260 V100 H780 V90 H920 V260 Z"
        fill={SUCCESS}
        fillOpacity={0.1}
      />

      {/* step lines */}
      <path
        d="M64,260 H100 V245 H160 V230 H220 V210 H280 V195 H340 V175 H400 V150 H460 V125 H520 V100 H560"
        fill="none"
        stroke={SUCCESS}
        strokeWidth={2}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M560,100 V180 H700"
        fill="none"
        stroke={MUTED}
        strokeWidth={2}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M700,180 V100 H780 V90 H920"
        fill="none"
        stroke={SUCCESS}
        strokeWidth={2}
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* the slashing authority */}
      <line
        x1={560}
        y1={84}
        x2={560}
        y2={100}
        stroke={MUTED}
        strokeWidth={1}
        opacity={0.55}
      />
      <circle cx={560} cy={70} r={18} fill={PRIMARY} opacity={0.12} />
      <circle
        cx={560}
        cy={70}
        r={14}
        fill="var(--color-surface)"
        stroke={PRIMARY}
        strokeWidth={1.5}
      />
      <Glyph icon={faGavel} cx={560} cy={70} size={13} color={PRIMARY} />
      <text
        x={560}
        y={42}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize={9.5}
        fill={MUTED}
      >
        authority
      </text>

      {/* annotations */}
      <line
        x1={255}
        y1={157}
        x2={278}
        y2={192}
        stroke={SUCCESS}
        strokeWidth={1}
        opacity={0.5}
      />
      <Pill label="+TU per paid operation" x={250} y={148} color={SUCCESS} />
      <Pill label="slashed -800 TU" x={467} y={70} color={PRIMARY} />
      <Pill label="non-trustable" x={630} y={205} color={MUTED} />
      <Pill label="slash repaid" x={700} y={84} color={SUCCESS} />

      {/* end payoff: the Trust Graph's star + TU rendering */}
      {[852, 866, 880, 894, 908].map((cx, i) => (
        <g key={cx} opacity={i === 4 ? 0.25 : 1}>
          <Glyph icon={faStar} cx={cx} cy={60} size={11} color="#f5b942" />
        </g>
      ))}
      <text
        x={880}
        y={78}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize={10}
        fill="var(--color-ink)"
      >
        1,700 TU
      </text>
      <circle cx={920} cy={90} r={9} fill={SUCCESS} opacity={0.12} />
      <circle
        cx={920}
        cy={90}
        r={5}
        fill={SUCCESS}
        stroke="var(--color-surface)"
        strokeWidth={2}
      />
    </svg>
  );
}

// The three fee-flow panels: the same participant-tree skeleton three times,
// with only the payer and the fee path changing per business model.
type FeePanel = {
  index: string;
  tag: string;
  aria: string;
  payerSlot: "issuer" | "verifier";
  payerIcon: IconDefinition;
  payerLabel: string;
  payerSub?: string;
  payerDashed?: boolean;
  feePill: string;
  shareToIssuer?: boolean;
};

const FEE_PANELS: FeePanel[] = [
  {
    index: "01",
    tag: "per validity period · renewable",
    aria: "Onboarding: an applicant pays a validation fee that flows up to the grantor and the ecosystem root.",
    payerSlot: "issuer",
    payerIcon: faUserPlus,
    payerLabel: "applicant",
    payerSub: "issuer · verifier · grantor",
    payerDashed: true,
    feePill: "validation fee",
  },
  {
    index: "02",
    tag: "per credential issued",
    aria: "Pay-per-issuance: the issuer pays a fee for each credential it issues; the fee flows up to the grantor and the root.",
    payerSlot: "issuer",
    payerIcon: faStamp,
    payerLabel: "issuer",
    feePill: "fee per credential",
  },
  {
    index: "03",
    tag: "per credential verified",
    aria: "Pay-per-verification: the verifier pays a fee for each verification, shared with the issuer and the rest of the tree.",
    payerSlot: "verifier",
    payerIcon: faMagnifyingGlass,
    payerLabel: "verifier",
    feePill: "fee per verification",
    shareToIssuer: true,
  },
];

/** One business model as a mini participant tree: skeleton in muted gray,
 *  the payer lit, green fee arrows flowing up to the accrediting nodes. */
function FeeFlowPanel({ panel, i }: { panel: FeePanel; i: number }) {
  const MUTED = "var(--color-muted)";
  const ACCENT = "var(--color-accent)";
  const SUCCESS = "var(--color-success)";

  const NODES = {
    root: { x: 150, y: 36, icon: faSitemap },
    ig: { x: 86, y: 112, icon: faCertificate },
    vg: { x: 214, y: 112, icon: faCertificate },
    issuer: { x: 86, y: 196, icon: faStamp },
    verifier: { x: 214, y: 196, icon: faMagnifyingGlass },
    holder: { x: 150, y: 272, icon: faUsers },
  } as const;

  const payer = NODES[panel.payerSlot];
  const grantor = panel.payerSlot === "issuer" ? NODES.ig : NODES.vg;
  // fee arrows hug the right side of the payer column; mirror for the verifier
  const side = panel.payerSlot === "issuer" ? 1 : 1;
  const px = payer.x + 12 * side;
  const marker = `fee-arrow-${i}`;

  const skeletonEdges: [keyof typeof NODES, keyof typeof NODES][] = [
    ["root", "ig"],
    ["root", "vg"],
    ["ig", "issuer"],
    ["vg", "verifier"],
    ["issuer", "holder"],
    ["verifier", "holder"],
  ];

  const coinBadge = (n: { x: number; y: number }, key: string) => (
    <g key={key}>
      <circle
        cx={n.x + 13}
        cy={n.y - 13}
        r={7.5}
        fill="var(--color-surface)"
        stroke={SUCCESS}
        strokeWidth={1.25}
      />
      <Glyph
        icon={faCoins}
        cx={n.x + 13}
        cy={n.y - 13}
        size={8}
        color="var(--color-success-ink)"
      />
    </g>
  );

  const recipients = panel.shareToIssuer
    ? [grantor, NODES.root, NODES.issuer]
    : [grantor, NODES.root];

  return (
    <svg viewBox="0 0 300 320" className="mt-4 h-auto w-full" role="img" aria-label={panel.aria}>
      <defs>
        <marker
          id={marker}
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill={SUCCESS} />
        </marker>
      </defs>

      {/* tier ticks */}
      {(["T0", "T1", "T2", "T3"] as const).map((t, r) => (
        <text
          key={t}
          x={8}
          y={[39, 115, 199, 275][r]}
          fontFamily="var(--font-mono)"
          fontSize={8.5}
          fill={MUTED}
        >
          {t}
        </text>
      ))}

      {/* skeleton edges */}
      {skeletonEdges.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
          stroke={MUTED}
          strokeWidth={1.25}
          opacity={0.35}
        />
      ))}

      {/* skeleton nodes (the payer slot is drawn lit below) */}
      {(Object.keys(NODES) as (keyof typeof NODES)[])
        .filter((k) => k !== panel.payerSlot)
        .map((k) => (
          <g key={k}>
            <circle
              cx={NODES[k].x}
              cy={NODES[k].y}
              r={15}
              fill="var(--color-surface)"
              stroke={MUTED}
              strokeOpacity={0.45}
              strokeWidth={1.25}
            />
            <g opacity={0.55}>
              <Glyph icon={NODES[k].icon} cx={NODES[k].x} cy={NODES[k].y} size={11} color={MUTED} />
            </g>
          </g>
        ))}

      {/* the payer, lit */}
      <circle cx={payer.x} cy={payer.y} r={21} fill={ACCENT} opacity={0.12} />
      <circle
        cx={payer.x}
        cy={payer.y}
        r={17}
        fill="var(--color-surface)"
        stroke={ACCENT}
        strokeWidth={2}
        strokeDasharray={panel.payerDashed ? "3 3" : undefined}
      />
      <Glyph icon={panel.payerIcon} cx={payer.x} cy={payer.y} size={14} color={ACCENT} />
      <text
        x={payer.x}
        y={payer.y + 30}
        textAnchor="middle"
        fontSize={9.5}
        fontWeight={600}
        fontFamily="var(--font-mono)"
        fill="var(--color-ink)"
        stroke="var(--color-surface)"
        strokeWidth={3}
        paintOrder="stroke"
      >
        {panel.payerLabel}
      </text>
      {panel.payerSub ? (
        <text
          x={payer.x}
          y={payer.y + 42}
          textAnchor="middle"
          fontSize={8.5}
          fontFamily="var(--font-mono)"
          fill={MUTED}
          stroke="var(--color-surface)"
          strokeWidth={3}
          paintOrder="stroke"
        >
          {panel.payerSub}
        </text>
      ) : null}

      {/* direct fee: payer -> grantor */}
      <path
        d={`M ${px},${payer.y - 18} C ${px + 6},${payer.y - 40} ${px + 6},${
          grantor.y + 38
        } ${px},${grantor.y + 17}`}
        fill="none"
        stroke={SUCCESS}
        strokeWidth={2}
        markerEnd={`url(#${marker})`}
      />
      <Pill label={panel.feePill} x={150} y={154} color={SUCCESS} />

      {/* distribution up the tree: grantor -> root, dashed */}
      <path
        d={`M ${grantor.x + (NODES.root.x > grantor.x ? 11 : -11)},${grantor.y - 11} L ${
          NODES.root.x + (NODES.root.x > grantor.x ? -11 : 11)
        },${NODES.root.y + 11}`}
        fill="none"
        stroke={SUCCESS}
        strokeWidth={1.5}
        strokeDasharray="4 3"
        opacity={0.85}
        markerEnd={`url(#${marker})`}
      />

      {/* verification fee share: verifier -> issuer */}
      {panel.shareToIssuer ? (
        <>
          <path
            d="M 197,205 Q 150,242 103,205"
            fill="none"
            stroke={SUCCESS}
            strokeWidth={1.5}
            strokeDasharray="4 3"
            opacity={0.85}
            markerEnd={`url(#${marker})`}
          />
          <Pill label="share to issuer" x={134} y={238} color={SUCCESS} />
        </>
      ) : null}

      {recipients.map((n, j) => coinBadge(n, `coin-${j}`))}
    </svg>
  );
}

// What an ecosystem holds, as icon tiles (role-colored chips).
const HOLDS = [
  {
    icon: faBookOpen,
    role: "var(--color-primary)",
    ink: "var(--color-primary)",
    title: "Governance framework",
    tag: "EGF · versioned",
    body: "The Ecosystem Governance Framework and each of its published versions, anchored on the registry.",
  },
  {
    icon: faFileLines,
    role: "var(--color-accent)",
    ink: "var(--color-accent)",
    title: "Credential schemas",
    tag: "what it issues",
    body: "One or more credential types the ecosystem defines and issues.",
  },
  {
    icon: faSitemap,
    role: "var(--color-primary)",
    ink: "var(--color-primary)",
    title: "Accreditation tree",
    tag: "who may act",
    body: "Grantors, issuers, verifiers and holders: exactly the tree below, recorded on the public registry.",
  },
  {
    icon: faCoins,
    role: "var(--color-success)",
    ink: "var(--color-success-ink)",
    title: "Built-in business model",
    tag: "fees + trust deposits",
    body: "Fees on trust operations flow up the tree; trust deposits give every participant skin in the game.",
  },
];

export default function Ecosystems() {
  return (
    <>
      <PageHero
        eyebrow="Sovereign ecosystems · 1 of 3"
        title="Join or build an ecosystem"
        intro="Verana is public, permissionless infrastructure: anyone can create their own trust ecosystem, or join the ecosystems they want."
      />

      <Section>
        <Container className="space-y-14">
          {/* a. What is an ecosystem */}
          <div>
            <SectionHeading
              eyebrow="The model"
              title="What is an ecosystem?"
            />
            <p className="reveal mt-4 max-w-3xl text-muted">
              An ecosystem is a governed list of recognized participants
              authorized to issue, verify, or hold certain credentials. It
              publishes a governance framework, defines its credential schemas,
              and sets who is accredited through a{" "}
              <strong className="text-ink">participant tree</strong>: the
              ecosystem is the root and delegates to grantors, who accredit
              issuers and verifiers, who in turn issue to holders. Permission
              modes range from fully open to fully governed.
            </p>
            <span className="eyebrow reveal mt-6 block">
              What an ecosystem holds
            </span>
            <div className="reveal-stagger mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {HOLDS.map((h) => (
                <div key={h.title} className="card p-5">
                  <div
                    className="grid h-9 w-9 place-items-center rounded-lg"
                    style={{
                      background: `color-mix(in srgb, ${h.role} 12%, transparent)`,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={h.icon}
                      className="h-4 w-4"
                      style={{ color: h.ink }}
                    />
                  </div>
                  <h3 className="mt-3 font-semibold text-ink">{h.title}</h3>
                  <p className="mt-1 font-mono text-[11px] text-muted">{h.tag}</p>
                  <p className="mt-1 text-sm text-muted">{h.body}</p>
                </div>
              ))}
            </div>

            <div className="card reveal mt-8 overflow-hidden">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-rule bg-surface-2 px-4 py-3">
                <span className="eyebrow flex items-center gap-2">
                  <FontAwesomeIcon icon={faSitemap} className="h-3 w-3" />
                  Participant tree
                </span>
                <div className="ml-auto flex flex-wrap items-center gap-3">
                  {[
                    { color: "var(--color-primary)", label: "ecosystem · grantor" },
                    { color: "var(--color-accent)", label: "issuer · verifier" },
                    { color: "var(--color-success)", label: "holder" },
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
                <TierTree />
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-1 border-t border-rule px-5 py-3 font-mono text-xs text-muted">
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className="h-3 w-3"
                    style={{ color: "var(--color-primary)" }}
                  />
                  delegation flows down
                </span>
              </div>
            </div>
          </div>

          {/* business models */}
          <div>
            <span className="eyebrow reveal block">Business models</span>
            <p className="reveal mt-2 max-w-3xl text-sm text-muted">
              Each participant in the tree can charge fees, paid using the
              network and distributed up the tree to the accrediting
              participants:
            </p>
            <div className="card reveal mt-4 overflow-hidden">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-rule bg-surface-2 px-4 py-3">
                <span className="eyebrow flex items-center gap-2">
                  <FontAwesomeIcon icon={faCoins} className="h-3 w-3" />
                  Fee flows
                </span>
                <div className="ml-auto flex flex-wrap items-center gap-3">
                  {[
                    { color: "var(--color-accent)", label: "payer" },
                    { color: "var(--color-success)", label: "fee flow" },
                    { color: "var(--color-muted)", label: "participant tree" },
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
              <div className="grid divide-y divide-rule sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {FEE_PANELS.map((panel, i) => (
                  <div key={panel.index} className="p-5">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-[11px] text-muted">
                        {panel.index}
                      </span>
                      <h3 className="font-semibold text-ink">
                        {BUSINESS_MODELS[i].title}
                      </h3>
                    </div>
                    <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                      {panel.tag}
                    </p>
                    <FeeFlowPanel panel={panel} i={i} />
                    <p className="mt-3 text-sm text-muted">
                      {BUSINESS_MODELS[i].body}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-rule px-5 py-3">
                <span className="flex items-center gap-2 font-mono text-xs text-muted">
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    className="h-3 w-3"
                    style={{ color: "var(--color-success-ink)" }}
                  />
                  fees flow up to accrediting participants
                </span>
                <span className="font-mono text-xs text-muted">
                  paid using the network
                </span>
                <span className="chip ml-auto">
                  <FontAwesomeIcon icon={faLockOpen} className="h-3 w-3" />
                  or fully open · no fees
                </span>
              </div>
            </div>
          </div>

          {/* trust score */}
          <div>
            <span className="eyebrow reveal flex items-center gap-2">
              <FontAwesomeIcon icon={faScaleBalanced} className="h-3 w-3" />
              Trust score
            </span>
            <h3 className="display reveal mt-2 text-xl text-ink">
              Skin in the game, earned not bought
            </h3>
            <p className="reveal mt-3 max-w-3xl text-muted">
              A fraction of every paid trust operation is committed to the
              participant&apos;s trust deposit as Trust Units (TU), and the
              deposit balance is the{" "}
              <strong className="text-ink">trust score</strong>.
            </p>

            <div className="card reveal mt-6 overflow-hidden">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-rule bg-surface-2 px-4 py-3">
                <span className="eyebrow flex items-center gap-2">
                  <FontAwesomeIcon icon={faCoins} className="h-3 w-3" />
                  Trust deposit over time
                </span>
                <span className="chip">
                  <FontAwesomeIcon icon={faFlask} className="h-3 w-3" />
                  Illustrative
                </span>
                <div className="ml-auto flex flex-wrap items-center gap-3">
                  {[
                    { color: "var(--color-success)", label: "earning · paid operations" },
                    { color: "var(--color-muted)", label: "slashed · non-trustable" },
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
                <DepositChart />
              </div>
              <div className="flex flex-wrap items-center gap-2 border-t border-rule px-5 py-3">
                <span className="chip">
                  <FontAwesomeIcon icon={faHandshakeSlash} className="h-3 w-3" />
                  non-transferable
                </span>
                <span className="chip">
                  <FontAwesomeIcon icon={faLock} className="h-3 w-3" />
                  non-refundable
                </span>
                <span className="chip">
                  <FontAwesomeIcon icon={faAnchor} className="h-3 w-3" />
                  fiat-pegged
                </span>
                <span className="ml-auto font-mono text-[11px] text-muted">
                  TU = Trust Units
                </span>
              </div>
            </div>

            <p className="reveal mt-3 max-w-3xl text-xs text-muted">
              There is no path in for capital: TU cannot be bought or
              transferred, only earned through real usage. On misbehavior, a
              network or ecosystem authority destroys TU, and while a slash is
              unrepaid the participant&apos;s permissions are non-trustable.
              Relying parties and the Trust Graph rank and filter by trust
              score and slashing history.
            </p>
          </div>

          {/* b. ECS ecosystem: the identity baseline */}
          <div>
            <SectionHeading
              eyebrow="The identity baseline"
              title="The ECS Ecosystem"
            />
            <p className="reveal mt-4 max-w-3xl text-muted">
              The ECS Ecosystem is the shared identity baseline of Verana. It
              publishes the Essential Credential Schemas (ECS), the small set
              of credentials that every other ecosystem relies on to identify
              and mutually verify the parties of an interaction. It is governed
              by the{" "}
              <a
                href={LINKS.council}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Verana Council
              </a>
              , a neutral, non-profit Swiss association that governs and
              secures the live network, and the ECS Ecosystem. On top of this
              baseline, each ecosystem defines its own domain credentials
              (govID, diploma, reusable KYC, machine certificate, and more).
            </p>
            <p className="reveal mt-4 max-w-3xl text-sm text-muted">
              The five ECS cover three roles: the owner or operator behind a
              service, the actor itself, and the user-agent software a person
              connects with.
            </p>
            <div className="reveal-stagger mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ECS.map((e, i) => (
                <div key={e.name} className="card p-5">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow">{e.role}</span>
                    <FontAwesomeIcon
                      icon={ECS_ICONS[i]}
                      className="h-4 w-4 text-primary"
                    />
                  </div>
                  <h3 className="mt-2 font-mono text-sm font-medium text-ink">
                    {e.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{e.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* c. worked examples: the centerpiece */}
          <div>
            <SectionHeading
              eyebrow="Two worked examples"
              title="Corporations join, and governments build"
            />
            <p className="reveal mt-4 max-w-3xl text-muted">
              A corporation registers itself in Verana, then relates to the
              registry in two complementary ways, and most participants do
              both: <strong className="text-ink">join</strong> any number of
              ecosystems as an accredited issuer, verifier, or holder, and{" "}
              <strong className="text-ink">control</strong> any number of its
              own. Explore both patterns: Acme Corp joins the ECS identity
              baseline and an ISO certification ecosystem; the Republic of
              Utopia builds a GovID ecosystem of its own.
            </p>
            <div className="reveal mt-6">
              <EcosystemExplorer />
            </div>
          </div>

          <div className="reveal flex flex-wrap gap-3">
            <Button href={LINKS.vprSpec} variant="ghost" external>
              VPR spec
            </Button>
            <Button href="/build" variant="ghost">
              Build on Verana
            </Button>
          </div>

          <ConceptPager nextHref="/identity" nextLabel="Verifiable identity" />
        </Container>
      </Section>
    </>
  );
}
