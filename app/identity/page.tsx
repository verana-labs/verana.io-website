import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button } from "../components/ui";
import PageHero from "../components/PageHero";
import ResolveDid from "../components/ResolveDid";
import FlowDiagram from "../components/FlowDiagram";
import ConceptPager from "../components/ConceptPager";
import { FLOWS } from "../lib/flows";
import { LINKS } from "../lib/site";
import { NETWORK_NAME } from "../lib/verana";

export const metadata: Metadata = {
  title: "Verifiable identity",
  description:
    "Verify first, then connect: services are resolvable DIDs, peers trust-resolve each other against the public registry, and a Proof-of-Trust is shown before the first interaction.",
};

export default function Identity() {
  return (
    <>
      <PageHero
        eyebrow="Verifiable identity · 2 of 3"
        title="Verify first, then connect"
        intro="Verana inverts &quot;connect first, verify later&quot;. A Verifiable Service is identified by a resolvable DID, not an opaque URL. Peers trust-resolve each other, recursively to the ecosystem root, and display a Proof-of-Trust before the first interaction."
      />

      <Section>
        <Container className="space-y-14">
          {/* the concept */}
          <div>
            <p className="reveal max-w-3xl text-muted">
              A Verifiable Service&apos;s DID Document exposes a DIDComm
              bootstrap endpoint and, optionally, MCP, A2A, AG-UI, website, or
              any other service it chooses to expose. Its credentials are
              published as Linked Verifiable Presentations: one identifying the
              service, one identifying the organization or person behind it.
              Anyone can verify the full chain against the public registry
              before saying a word to the service. The same model covers three
              connection types, below.
            </p>
          </div>

          {/* live: resolve a DID */}
          <div>
            <SectionHeading
              eyebrow={`Live from ${NETWORK_NAME}`}
              title="Resolve a real Proof-of-Trust"
              intro="Pick a DID and watch trust resolution happen: the resolver verifies the service's credentials and their issuers, recursively, against the public registry. This is what every peer sees before connecting."
            />
            <div className="reveal mt-6">
              <ResolveDid />
            </div>
          </div>

          {/* the three flows */}
          <div>
            <SectionHeading
              eyebrow="The three connection flows"
              title="One model, three connection types"
              intro="Trust is mutual in all three, with no client/server asymmetry."
            />
            <div className="mt-8 space-y-10">
              {FLOWS.map((flow) => (
                <div key={flow.id} className="reveal">
                  <span className="eyebrow">{flow.eyebrow}</span>
                  <h3 className="display mt-2 text-xl text-ink">{flow.title}</h3>
                  <p className="mt-2 max-w-3xl text-sm text-muted">{flow.intro}</p>
                  <FlowDiagram flow={flow} />
                </div>
              ))}
            </div>
          </div>

          <div className="reveal flex flex-wrap gap-3">
            <Button href={LINKS.trustSpec} variant="ghost" external>
              Verifiable Trust spec
            </Button>
            <Button href="/build" variant="ghost">
              Build on Verana
            </Button>
          </div>

          <ConceptPager nextHref="/discovery" nextLabel="Discovery" />
        </Container>
      </Section>
    </>
  );
}
