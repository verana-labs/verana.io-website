import { Suspense } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSitemap,
  faShieldHalved,
  faDiagramProject,
  faArrowRightLong,
  faLandmark,
  faBuilding,
  faMicrochip,
  faRobot,
  faLink,
  faKey,
  faMagnifyingGlass,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Section, SectionHeading, Button } from "./components/ui";
import HeroGlobe from "./components/HeroGlobe";
import LatestEcosystems from "./components/LatestEcosystems";
import ResolveDid from "./components/ResolveDid";
import SolvesVisual from "./components/SolvesVisual";
import { HERO, THREE_PARTS, USE_CASES, SOLVES } from "./lib/content";
import { LINKS, SITE_TAGLINE, SITE_DESCRIPTION } from "./lib/site";
import { buildMetadata } from "./lib/seo";
import { NETWORK_NAME } from "./lib/verana";

export const metadata = buildMetadata({
  title: SITE_TAGLINE,
  description: SITE_DESCRIPTION,
  path: "/",
});

// Live widgets read the testnet; regenerate in the background every 10 min.
export const revalidate = 600;

const PART_ICONS = [faSitemap, faShieldHalved, faDiagramProject];

const USE_CASE_ICONS = [faLandmark, faBuilding, faMicrochip, faRobot];

// Icons and tone colors for the "What Verana solves" rows; tones echo the
// three-part spine (ecosystems = primary, identity = accent, discovery =
// success) so each solve quietly points back at the part that delivers it.
const SOLVE_ICONS = [faShieldHalved, faSitemap, faLink, faKey, faMagnifyingGlass];
const SOLVE_TONE = {
  primary: "text-primary",
  accent: "text-accent",
  success: "text-success-ink",
} as const;

export default function Home() {
  return (
    <>
      {/* Hero: the "verify first, then connect" animation is the backdrop */}
      <section className="hero-glow relative overflow-hidden border-b border-rule">
        <HeroGlobe />
        <Container className="relative z-10 py-24 sm:py-32">
          <p className="eyebrow reveal">[ {HERO.eyebrow} ]</p>
          <h1 className="display reveal mt-5 max-w-4xl text-4xl sm:text-6xl text-ink">
            {HERO.headline}
          </h1>
          <p className="reveal mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            {HERO.subhead}
          </p>
          <div className="reveal mt-8 flex flex-wrap gap-3">
            <Button href="/ecosystems">See how it works</Button>
            <Button href={LINKS.docs} variant="ghost" external>
              Build on Verana
            </Button>
          </div>
          <p className="reveal mt-10 font-mono text-xs tracking-wide text-muted">
            open standards · W3C DIDs · W3C Verifiable Credentials · DIDComm ·
            OpenID4VC · TRQP
          </p>
        </Container>
      </section>

      {/* The three parts: the organizing spine, in reading order */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Verana, in three parts"
            title="Ecosystems, identity, discovery"
            intro="Three parts, one mechanism: sovereign ecosystems define who is accredited, verifiable identity proves it before any connection, and the Trust Graph makes it discoverable."
          />
          <div className="reveal-stagger mt-8 grid gap-4 md:grid-cols-3">
            {THREE_PARTS.map((p, i) => (
              <Link
                key={p.name}
                href={p.href}
                className="card group flex flex-col p-6 transition-colors hover:border-primary"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow">{`${i + 1} · ${p.label}`}</span>
                  <FontAwesomeIcon
                    icon={PART_ICONS[i]}
                    className="h-4 w-4 text-primary"
                  />
                </div>
                <h3 className="display mt-3 text-xl text-ink">{p.name}</h3>
                <p className="mt-1 font-mono text-[11px] text-muted">
                  {p.audience}
                </p>
                <p className="mt-2 flex-1 text-sm text-muted">{p.body}</p>
                {p.signature ? (
                  <p className="mt-3 font-mono text-xs text-success-ink">
                    {p.signature}
                  </p>
                ) : null}
                <span className="mt-4 inline-flex items-center gap-2 text-sm text-accent">
                  Explore
                  <FontAwesomeIcon
                    icon={faArrowRightLong}
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* What Verana solves: one problem, one answer, breadth as proof */}
      <Section className="border-t border-rule bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Why Verana"
            title="What Verana solves"
            intro="Online, nothing proves who is behind a service, an app, or an AI agent. So everyone re-verifies everything, or just trusts."
          />
          <p className="reveal mt-5 max-w-3xl text-lg leading-relaxed text-muted">
            <strong className="text-ink">
              Verana is the public infrastructure that fixes this.
            </strong>{" "}
            Ecosystems issue verifiable credentials to their participants, and
            anyone can check any of them, in one query. And identification is
            only the start:
          </p>
          <div className="reveal-stagger mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {SOLVES.map((s, i) => (
              <div key={s.title} className="flex gap-3.5">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-rule bg-surface-2">
                  <FontAwesomeIcon
                    icon={SOLVE_ICONS[i]}
                    className={`h-4 w-4 ${SOLVE_TONE[s.tone]}`}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-ink">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="card reveal mt-8 overflow-hidden">
            <div className="overflow-x-auto p-4 sm:p-5">
              <SolvesVisual />
            </div>
          </div>
          <div className="reveal-stagger mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {USE_CASES.map((u, i) => (
              <Link
                key={u.name}
                href="/use-cases"
                className="card group p-5 transition-colors hover:border-primary"
              >
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon
                    icon={USE_CASE_ICONS[i]}
                    className="h-4 w-4 text-accent"
                  />
                  <h3 className="font-semibold text-ink">{u.name}</h3>
                </div>
                <p className="mt-2 text-sm text-muted">{u.outcome}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Governance: openness and no ownership, summarized from /about */}
      <Section className="border-t border-rule">
        <Container>
          <SectionHeading
            eyebrow="Governance"
            title="Owned by no one"
            intro="Open standards, open-source code, a permissionless public network. Two non-profits answer for the commons by name, and the model is built so that no single party can own the trust layer."
          />
          <div className="reveal-stagger mt-8 grid gap-4 sm:grid-cols-2">
            <Link
              href="/about"
              className="card group flex flex-col p-6 transition-colors hover:border-primary"
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow">The steward</span>
                <FontAwesomeIcon icon={faLandmark} className="h-4 w-4 text-primary" />
              </div>
              <h3 className="display mt-3 text-xl text-ink">Verana Foundation</h3>
              <p className="mt-1 font-mono text-[11px] text-muted">
                veranafoundation.org
              </p>
              <p className="mt-2 flex-1 text-sm text-muted">
                The non-profit steward of the commons: it owns and maintains
                the Verifiable Trust and Verifiable Public Registry
                specifications and stewards the open-source reference
                implementations. Its work happens in public working groups,
                and everything it produces stays open: openly licensed specs,
                open-source code.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm text-accent">
                Learn more
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
            <Link
              href="/about"
              className="card group flex flex-col p-6 transition-colors hover:border-primary"
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow">The governor</span>
                <FontAwesomeIcon icon={faScaleBalanced} className="h-4 w-4 text-primary" />
              </div>
              <h3 className="display mt-3 text-xl text-ink">Verana Council</h3>
              <p className="mt-1 font-mono text-[11px] text-muted">
                veranacouncil.org
              </p>
              <p className="mt-2 flex-1 text-sm text-muted">
                A neutral, non-profit Swiss association that governs and
                secures the live network and the ECS identity baseline. Up to
                25 seats, one member one vote, membership free of charge, and
                every member runs a validator node. It governs only the
                constitutional commons: no instrument to reach inside the
                sovereign ecosystems built on the network.
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm text-accent">
                Learn more
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Live proof — verifiable identity, resolve a DID */}
      <Section className="border-t border-rule">
        <Container>
          <SectionHeading
            eyebrow={`Verifiable identity · live from ${NETWORK_NAME}`}
            title="Watch verify-first work"
            intro="This is the second part above, running for real. Resolve a real DID and see its Proof-of-Trust: the service, the organization behind it, and the verified chain up to the ecosystem root."
          />
          <div className="reveal mt-6">
            <ResolveDid compact />
          </div>
        </Container>
      </Section>

      {/* Live proof — latest trusted ecosystems */}
      <Section className="border-t border-rule">
        <Container>
          <SectionHeading
            eyebrow="Testnet Ecosystems"
            title="Latest trusted ecosystems"
            intro="The newest ecosystems that trust-resolve as TRUSTED against the public registry."
          />
          <div className="reveal mt-6">
            <Suspense
              fallback={
                <div className="card p-6 font-mono text-xs text-muted">
                  querying the network...
                </div>
              }
            >
              <LatestEcosystems limit={5} />
            </Suspense>
          </div>
        </Container>
      </Section>

      {/* Open & public + closing CTA */}
      <Section className="border-t border-rule bg-surface">
        <Container className="text-center">
          <p className="display reveal mx-auto max-w-3xl text-2xl sm:text-3xl text-ink">
            Open standards, Apache-2.0 code, a permissionless public network,
            neutral governance. Owned by no one.
          </p>
          <div className="reveal mt-8 flex flex-wrap justify-center gap-3">
            <Button href={LINKS.docs} external>
              Start building
            </Button>
            <Button href={LINKS.github} variant="ghost" external>
              github.com/verana-labs
            </Button>
            <Button href="/contact" variant="ghost">
              Talk to us
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
