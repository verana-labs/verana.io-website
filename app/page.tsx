import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section, SectionHeading, Button, Chip } from "./components/ui";
import Reveal from "./components/Reveal";
import ArchitectureDiagram from "./components/ArchitectureDiagram";
import { LINKS } from "./lib/site";
import {
  HERO,
  THREE_PARTS,
  PILLARS,
  SOFTWARE,
  USE_CASES,
} from "./lib/content";

function toneColor(tone: string) {
  if (tone === "primary") return "var(--color-primary)";
  if (tone === "accent") return "var(--color-accent)";
  if (tone === "success") return "var(--color-success)";
  return "var(--color-muted)";
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grid-mesh border-b border-rule">
        <Container className="py-20 sm:py-28">
          <p className="eyebrow">{HERO.eyebrow}</p>
          <h1 className="display mt-5 max-w-4xl text-4xl sm:text-6xl text-ink">
            {HERO.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-muted leading-relaxed">
            {HERO.subhead}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href={LINKS.docs} external>
              Start building <ArrowRight size={16} />
            </Button>
            <Button href="/playground" variant="ghost">
              Try the demo
            </Button>
          </div>
        </Container>
      </section>

      {/* Verana, in three parts */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="What is Verana"
            title="One trust infrastructure, in three parts"
            intro="Verana is what you join or build on, what verifies before you connect, and what you discover trust through."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {THREE_PARTS.map((p) => (
              <Reveal key={p.name} className="card flex flex-col p-6">
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: toneColor(p.tone) }}
                    aria-hidden
                  />
                  <span className="eyebrow">{p.layer}</span>
                </div>
                <h3 className="display mt-3 text-xl text-ink">{p.name}</h3>
                <p className="mt-3 flex-1 text-muted">{p.body}</p>
                {p.signature ? (
                  <p className="mt-3 font-mono text-sm text-accent">
                    {p.signature}
                  </p>
                ) : null}
                <Link
                  href={p.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm text-ink hover:text-primary"
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* The problem */}
      <Section className="border-y border-rule bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Why now"
            title="Trust is not keeping pace with the internet"
          />
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              "Identity and credentials are fragmented and non-reusable across systems.",
              "Services and connected objects cannot be verified before you connect to them.",
              "AI agents act with no provable identity or accountability.",
            ].map((t) => (
              <div key={t} className="card p-6 text-muted">
                {t}
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-lg text-ink">
            Digital ecosystems cannot scale because trust is not embedded by
            design. Verana embeds it.
          </p>
        </Container>
      </Section>

      {/* What Verana is + architecture */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="The open, public, neutral trust infrastructure"
            intro="One mechanism for humans, organizations, services, and AI agents. Issue and verify any credential, across any ecosystem, interoperably, from KYC to diplomas to machine certificates."
          />
          <div className="mt-10">
            <ArchitectureDiagram />
          </div>
          <div className="mt-6">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-1 text-sm text-ink hover:text-primary"
            >
              See how it works <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </Section>

      {/* Software */}
      <Section className="border-y border-rule bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Software"
            title="Open-source software you run yourself"
            intro="Run-it-yourself reference implementations and SDKs (Apache 2.0), hosted anywhere: your cloud, on-prem, or your own jurisdiction."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {SOFTWARE.map((s) => (
              <Reveal key={s.name} className="card p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="display text-lg text-ink">{s.name}</h3>
                  <span className="font-mono text-xs text-muted">{s.interfaces}</span>
                </div>
                <p className="mt-3 text-sm text-muted">{s.what}</p>
                <p className="mt-4 font-mono text-xs text-muted">{s.speaks}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/software" variant="ghost">
              All software
            </Button>
          </div>
        </Container>
      </Section>

      {/* Use cases */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Use cases"
            title="One trust infrastructure, many entry points"
            intro="Overlapping lenses, not silos. You may recognize yourself in one or several. They all converge on the same verify-first primitive."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {USE_CASES.map((u) => (
              <Reveal key={u.name} className="card p-6">
                <h3 className="display text-lg text-ink">{u.name}</h3>
                <p className="mt-3 text-sm text-muted">{u.body}</p>
                <p className="mt-4 font-mono text-xs text-muted">{u.software}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/use-cases" variant="ghost">
              Explore use cases
            </Button>
          </div>
        </Container>
      </Section>

      {/* Why Verana (pillars) */}
      <Section className="border-y border-rule bg-surface">
        <Container>
          <SectionHeading eyebrow="What makes it unique" title="Why Verana" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.title} className="card p-6">
                <h3 className="font-semibold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm text-muted">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Open & public + See it work */}
      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Open & public"
              title="Owned by no one"
            />
            <p className="mt-4 text-muted">
              Open standards, Apache-2.0 code, a permissionless public network,
              and neutral governance. The specifications are owned by a
              non-profit, the live network is governed by the Verana Council, and
              the VNA token is owned by no one.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={LINKS.github} variant="ghost" external>
                GitHub
              </Button>
              <Button href={LINKS.foundation} variant="ghost" external>
                Verana Foundation
              </Button>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="See it work" title="Try the Playground" />
            <p className="mt-4 text-muted">
              Issue and verify a credential, query the Trust Graph, or watch an AI
              agent authenticate and discover a service over MCP. Each demo ships
              a copy-paste snippet.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Chip verified>verify first, then connect</Chip>
              <Chip>trust graph</Chip>
              <Chip>agentic / MCP</Chip>
            </div>
            <div className="mt-6">
              <Button href="/playground">Open the Playground</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Built on Verana + Start */}
      <Section className="border-t border-rule bg-surface">
        <Container className="text-center">
          <p className="eyebrow">Built on Verana</p>
          <h2 className="display mt-4 text-3xl sm:text-4xl text-ink">
            Start building on the open trust infrastructure
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Independent builders ship on the open protocol today, including 2060's
            Hologram. Your turn.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={LINKS.docs} external>
              Start building <ArrowRight size={16} />
            </Button>
            <Button href="/playground" variant="ghost">
              Try the demo
            </Button>
            <Button href="/integrators" variant="ghost">
              Talk to an integrator
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
