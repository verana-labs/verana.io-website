import type { Metadata } from "next";
import { Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
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
} from "@fortawesome/free-solid-svg-icons";
import { Container, Section, SectionHeading, Button } from "../components/ui";
import PageHero from "../components/PageHero";
import EcosystemExplorer from "../components/EcosystemExplorer";
import LatestEcosystems from "../components/LatestEcosystems";
import ConceptPager from "../components/ConceptPager";
import { ECS, BUSINESS_MODELS } from "../lib/content";
import { LINKS } from "../lib/site";

export const metadata: Metadata = {
  title: "Sovereign ecosystems",
  description:
    "Join or build a trust ecosystem: governance framework, credential schemas, accreditation tree, and a built-in business model, anchored on the Verifiable Public Registry.",
};

// Live widgets read the testnet; regenerate in the background every 10 min.
export const revalidate = 600;

const BUSINESS_ICONS = [faStamp, faCoins, faScaleBalanced];

const ECS_ICONS = [faBuilding, faUserTie, faServer, faIdBadge, faMobileScreen];

/** Renders a Font Awesome icon's raw path inside an SVG (FontAwesomeIcon
 *  itself cannot be positioned in SVG coordinate space). */
function Glyph({
  icon,
  cx,
  cy,
  size,
  color,
}: {
  icon: IconDefinition;
  cx: number;
  cy: number;
  size: number;
  color: string;
}) {
  const [w, h] = icon.icon;
  const d = icon.icon[4];
  const s = size / Math.max(w, h);
  return (
    <g transform={`translate(${cx - (w * s) / 2}, ${cy - (h * s) / 2}) scale(${s})`}>
      <path d={Array.isArray(d) ? d.join(" ") : d} fill={color} />
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
    { x: 480, y: 418, r: 27, color: SUCCESS, icon: faUsers, glyph: 20, label: "Holder", sub: "person · org · AI agent" },
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
    body: "Grantors, issuers, verifiers and holders: exactly the tree above, recorded on the public registry.",
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
            <div className="card reveal mt-6 overflow-hidden">
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
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    className="h-3 w-3"
                    style={{ color: "var(--color-success-ink)" }}
                  />
                  fees flow up
                </span>
              </div>
            </div>

            <span className="eyebrow reveal mt-8 block">
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
          </div>

          {/* business models */}
          <div>
            <span className="eyebrow reveal block">Business models</span>
            <p className="reveal mt-2 max-w-3xl text-sm text-muted">
              Each participant in the tree can charge fees, paid using the
              network and distributed up the tree to the accrediting
              participants:
            </p>
            <div className="reveal-stagger mt-4 grid gap-4 sm:grid-cols-3">
              {BUSINESS_MODELS.map((b, i) => (
                <div key={b.title} className="card p-5">
                  <FontAwesomeIcon
                    icon={BUSINESS_ICONS[i]}
                    className="h-4 w-4 text-accent"
                  />
                  <h3 className="mt-3 font-semibold text-ink">{b.title}</h3>
                  <p className="mt-1 text-sm text-muted">{b.body}</p>
                </div>
              ))}
            </div>
            <p className="reveal mt-3 text-xs text-muted">
              Schemas can also be fully open, with no fees.
            </p>
          </div>

          {/* trust score */}
          <div className="card reveal p-6 sm:p-8">
            <span className="eyebrow flex items-center gap-2">
              <FontAwesomeIcon icon={faScaleBalanced} className="h-3 w-3" />
              Trust score
            </span>
            <h3 className="display mt-2 text-xl text-ink">
              Skin in the game, earned not bought
            </h3>
            <p className="mt-3 text-muted">
              A fraction of every paid trust operation is committed to the
              participant&apos;s trust deposit as Trust Units (TU): a
              non-transferable, non-refundable, fiat-pegged measure of trust.
              The deposit balance is the participant&apos;s{" "}
              <strong className="text-ink">trust score</strong>, so it reflects
              cumulative real usage, not market timing or capital.
            </p>
            <p className="mt-3 text-muted">
              Misbehavior is met with{" "}
              <strong className="text-ink">slashing</strong>: a network or
              ecosystem authority destroys Trust Units, lowering the score, and
              while a slash is unrepaid the participant&apos;s permissions are
              non-trustable. Because trust cannot be transferred or sold, only
              earned, relying parties and the Trust Graph can rank and filter
              by trust score and slashing history to favor accountable parties.
            </p>
          </div>

          {/* b. worked examples: the centerpiece */}
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
              Andora builds a GovID ecosystem of its own.
            </p>
            <div className="reveal mt-6">
              <EcosystemExplorer />
            </div>
          </div>

          {/* c. ECS ecosystem */}
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

          {/* live: the bridge from the model to the real network */}
          <div>
            <SectionHeading
              eyebrow="Live from the network"
              title="Ecosystems being created right now"
              intro="The newest ecosystems on the network that trust-resolve as TRUSTED against the public registry."
            />
            <div className="reveal mt-6">
              <Suspense
                fallback={
                  <div className="card p-6 font-mono text-xs text-muted">
                    querying the network...
                  </div>
                }
              >
                <LatestEcosystems />
              </Suspense>
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
