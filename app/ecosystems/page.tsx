import type { Metadata } from "next";
import { Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

/** The participant (permission) tree of a credential schema, as a plain SVG. */
function ParticipantTree() {
  const box = (
    x: number,
    y: number,
    label: string,
    accent = false
  ) => (
    <g key={label}>
      <rect
        x={x - 70}
        y={y - 15}
        width={140}
        height={30}
        rx={8}
        fill="var(--color-surface-2)"
        stroke={accent ? "var(--color-primary)" : "var(--color-rule)"}
      />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={11.5}
        fontWeight={600}
        fontFamily="var(--font-display)"
        fill="var(--color-ink)"
      >
        {label}
      </text>
    </g>
  );
  const line = (x1: number, y1: number, x2: number, y2: number) => (
    <line
      key={`${x1}-${y1}-${x2}-${y2}`}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="var(--color-rule)"
      strokeWidth={1.2}
    />
  );
  return (
    <svg viewBox="0 0 460 280" className="h-auto w-full" aria-label="Participant tree: the ecosystem root delegates to grantors, who accredit issuers and verifiers, who issue to holders">
      {line(230, 55, 120, 105)}
      {line(230, 55, 340, 105)}
      {line(120, 135, 120, 185)}
      {line(340, 135, 340, 185)}
      {line(120, 215, 230, 250)}
      {box(230, 40, "Ecosystem (root)", true)}
      {box(120, 120, "Issuer Grantor")}
      {box(340, 120, "Verifier Grantor")}
      {box(120, 200, "Issuer")}
      {box(340, 200, "Verifier")}
      {box(230, 258, "Holder")}
    </svg>
  );
}

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
            <div className="reveal-stagger mt-6 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
              <div className="card p-6">
                <span className="eyebrow flex items-center gap-2">
                  <FontAwesomeIcon icon={faSitemap} className="h-3 w-3" />
                  Participant tree
                </span>
                <div className="mt-3">
                  <ParticipantTree />
                </div>
              </div>
              <div className="card p-6">
                <span className="eyebrow">What an ecosystem holds</span>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  <li>A governance framework (the EGF) and its versions.</li>
                  <li>One or more credential schemas (the credentials it issues).</li>
                  <li>An accreditation tree of grantors, issuers, verifiers, holders.</li>
                  <li>A built-in business model (fees and trust deposits).</li>
                </ul>
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
