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
} from "@fortawesome/free-solid-svg-icons";
import { Container, Section, SectionHeading, Button } from "./components/ui";
import HeroVerify from "./components/HeroVerify";
import LatestEcosystems from "./components/LatestEcosystems";
import ResolveDid from "./components/ResolveDid";
import { HERO, THREE_PARTS, USE_CASES } from "./lib/content";
import { LINKS } from "./lib/site";
import { NETWORK_NAME } from "./lib/verana";

// Live widgets read the testnet; regenerate in the background every 10 min.
export const revalidate = 600;

const PART_ICONS = [faSitemap, faShieldHalved, faDiagramProject];

const USE_CASE_ICONS = [faLandmark, faBuilding, faMicrochip, faRobot];

export default function Home() {
  return (
    <>
      {/* Hero: the "verify first, then connect" animation is the backdrop */}
      <section className="hero-glow relative overflow-hidden border-b border-rule">
        <HeroVerify />
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
            <Button href="/build" variant="ghost">
              Build on Verana
            </Button>
          </div>
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

      {/* Live proof: the network is real */}
      <Section className="border-t border-rule bg-surface">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow={`Live from ${NETWORK_NAME}`}
              title="Watch verify-first work"
              intro="Resolve a real DID and see its Proof-of-Trust: the service, the organization behind it, and the verified chain up to the ecosystem root."
            />
            <div className="reveal mt-6">
              <ResolveDid compact />
            </div>
          </div>
          <div>
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
          </div>
        </Container>
      </Section>

      {/* Use cases teaser */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Use cases"
            title="One trust infrastructure, many entry points"
            intro="Overlapping lenses, not silos: a bank doing reusable KYC today runs AI agents tomorrow. They all converge on the same verify-first primitive."
          />
          <div className="reveal-stagger mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {USE_CASES.map((u, i) => (
              <Link
                key={u.name}
                href="/use-cases"
                className="card group p-5 transition-colors hover:border-primary"
              >
                <FontAwesomeIcon
                  icon={USE_CASE_ICONS[i]}
                  className="h-4 w-4 text-accent"
                />
                <h3 className="mt-3 font-semibold text-ink">{u.name}</h3>
                <p className="mt-2 text-sm text-muted">{u.pain}</p>
              </Link>
            ))}
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
