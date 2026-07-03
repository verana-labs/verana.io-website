import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faDatabase,
  faDiagramProject,
  faRobot,
  faGlobe,
  faMagnifyingGlass,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
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

// The indexing pipeline, as a simple annotated strip (replaces the v1
// Mermaid diagram; same facts).
function Pipeline() {
  const stages = [
    { icon: faFileLines, label: "DID Documents", sub: "Linked VPs" },
    { icon: faDatabase, label: "Public Registry", sub: "schemas · accreditations · deposits" },
    { icon: faDiagramProject, label: "Trust Graph", sub: "trust-typed index" },
    { icon: faMagnifyingGlass, label: "Query", sub: "API · MCP" },
  ];
  const consumers = [
    { icon: faRobot, label: "AI agents" },
    { icon: faGlobe, label: "Browsers / VUAs" },
    { icon: faMagnifyingGlass, label: "Search engines" },
    { icon: faFileLines, label: "Auditors" },
  ];
  return (
    <div className="card p-6">
      <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
        {stages.map((s, i) => (
          <div key={s.label} className="flex flex-1 items-center gap-3">
            <div className="flex-1 rounded-xl border border-rule bg-surface-2 px-4 py-3 text-center">
              <FontAwesomeIcon icon={s.icon} className="h-4 w-4 text-accent" />
              <p className="mt-1.5 text-sm font-semibold text-ink">{s.label}</p>
              <p className="font-mono text-[10px] text-muted">{s.sub}</p>
            </div>
            {i < stages.length - 1 ? (
              <FontAwesomeIcon
                icon={faArrowRightLong}
                className="hidden h-4 w-4 shrink-0 text-muted lg:block"
              />
            ) : null}
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-2 border-t border-rule pt-4">
        {consumers.map((c) => (
          <span key={c.label} className="chip">
            <FontAwesomeIcon icon={c.icon} className="h-3 w-3" />
            {c.label}
          </span>
        ))}
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
              <Pipeline />
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
