import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlug,
  faRobot,
  faCubes,
  faBook,
  faCodeBranch,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Section, SectionHeading, Button } from "../components/ui";
import PageHero from "../components/PageHero";
import { LINKS } from "../lib/site";

export const metadata: Metadata = {
  title: "Build",
  description:
    "The developer onramp: API, MCP, and SDKs, the open-source reference implementations, and the specifications. Full reference and tutorials live at docs.verana.io.",
};

// Placeholder page (spec-v2 §3.6): a launchpad that hands off to
// docs.verana.io, the specs, and GitHub. To be expanded in a later pass.

const ENTRIES = [
  {
    icon: faPlug,
    title: "API",
    body: "Every module you run exposes an API: resolve trust, query the registry, issue and verify.",
    href: LINKS.docs,
    label: "docs.verana.io",
  },
  {
    icon: faRobot,
    title: "MCP",
    body: "Agent-native from the start: the resolver, the Trust Graph, and the Service Wallet speak MCP.",
    href: LINKS.docs,
    label: "docs.verana.io",
  },
  {
    icon: faCubes,
    title: "SDKs",
    body: "Embed a holder wallet in your mobile app, or add Verifiable Trust to an existing agent.",
    href: LINKS.docs,
    label: "docs.verana.io",
  },
];

const REFERENCES = [
  {
    icon: faBook,
    title: "Documentation",
    body: "Full reference and tutorials live at docs.verana.io.",
    href: LINKS.docs,
    label: "docs.verana.io",
  },
  {
    icon: faCodeBranch,
    title: "Open source",
    body: "The reference implementations, Apache 2.0.",
    href: LINKS.github,
    label: "github.com/verana-labs",
  },
  {
    icon: faFileLines,
    title: "Specifications",
    body: "Implement the standards: Verifiable Trust and the Verifiable Public Registry.",
    href: LINKS.trustSpec,
    label: "Verifiable Trust spec",
  },
];

export default function Build() {
  return (
    <>
      <PageHero
        eyebrow="Build"
        title="Build on Verana"
        intro="The developer onramp. Pick your interface, run the open source, implement the specs. Everything deep lives in the docs."
      />

      <Section>
        <Container className="space-y-12">
          <div>
            <SectionHeading eyebrow="By interface" title="Three ways in" />
            <div className="reveal-stagger mt-6 grid gap-4 sm:grid-cols-3">
              {ENTRIES.map((e) => (
                <a
                  key={e.title}
                  href={e.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group p-6 transition-colors hover:border-primary"
                >
                  <FontAwesomeIcon
                    icon={e.icon}
                    className="h-5 w-5 text-accent"
                  />
                  <h3 className="display mt-3 text-lg text-ink">{e.title}</h3>
                  <p className="mt-2 text-sm text-muted">{e.body}</p>
                  <p className="mt-3 font-mono text-xs text-accent">{e.label}</p>
                </a>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Reference" title="Go deeper" />
            <div className="reveal-stagger mt-6 grid gap-4 sm:grid-cols-3">
              {REFERENCES.map((e) => (
                <a
                  key={e.title}
                  href={e.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group p-6 transition-colors hover:border-primary"
                >
                  <FontAwesomeIcon
                    icon={e.icon}
                    className="h-5 w-5 text-primary"
                  />
                  <h3 className="display mt-3 text-lg text-ink">{e.title}</h3>
                  <p className="mt-2 text-sm text-muted">{e.body}</p>
                  <p className="mt-3 font-mono text-xs text-accent">{e.label}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="reveal flex flex-wrap gap-3">
            <Button href={LINKS.docs} external>
              Start building
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
