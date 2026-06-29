import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, SectionHeading, Button } from "../components/ui";
import PageHero from "../components/PageHero";
import ArchitectureDiagram from "../components/ArchitectureDiagram";
import Mermaid from "../components/Mermaid";
import { LINKS } from "../lib/site";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Verana in three parts: Trust Ecosystems, Verifiable Trust, and the Trust Graph, with the Verifiable Public Registry underneath.",
};

const RESOLUTION_FLOW = `sequenceDiagram
  participant U as User Agent / AI agent
  participant S as Verifiable Service (DID)
  participant V as Verifiable Public Registry
  U->>S: resolve DID, request credentials
  S-->>U: present ECS + domain credentials
  U->>V: query (TRQP): is the issuer accredited?
  V-->>U: yes, under ecosystem X
  U->>U: build Proof-of-Trust
  Note over U,S: verify first, then connect`;

export default function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="Verana, in three parts"
        intro="Trust Ecosystems, then Verifiable Trust, then the Trust Graph, with the registry that anchors them underneath. Concepts at adoption altitude; every deep detail links to the specs and docs."
      />

      <Section>
        <Container className="space-y-12">
          {/* Trust Ecosystems */}
          <div>
            <SectionHeading
              eyebrow="Trust Ecosystems, join or build"
              title="Join or build an ecosystem"
            />
            <p className="mt-4 max-w-3xl text-muted">
              Every participant relates to the registry in one of two
              complementary ways, and most do both.{" "}
              <strong className="text-ink">Join (participate):</strong> search
              existing ecosystems and onboard as an accredited issuer, verifier,
              or holder in someone else&apos;s, usually the faster path to
              production.{" "}
              <strong className="text-ink">Build (control):</strong> create your
              own ecosystem, publish a governance framework, define credential
              schemas, and set who is accredited to issue and verify, with
              permission modes from fully open to fully governed.
            </p>
          </div>

          {/* Two layers of credentials */}
          <div className="card p-6">
            <h3 className="display text-xl text-ink">Two layers of credentials</h3>
            <p className="mt-3 text-muted">
              <strong className="text-ink">The identity baseline,</strong> the
              four Essential Credential Schemas (ECS): Service (any service,
              including an AI agent), Organization and Persona (the org or
              individual that operates a service), and UserAgent (the app, wallet,
              or browser a person connects with), plus a future Badge for a human
              end-user&apos;s identity.{" "}
              <strong className="text-ink">Your own domain credentials,</strong>{" "}
              govID, diploma, reusable KYC, employee badge, machine certificate,
              defined per ecosystem as custom schemas. The ECS make everything
              mutually verifiable; the domain schemas are what each ecosystem
              actually issues.
            </p>
          </div>

          {/* Business model */}
          <div className="card p-6">
            <h3 className="display text-xl text-ink">A built-in business model</h3>
            <p className="mt-3 text-muted">
              Ecosystems can charge for issuance, verification, and accreditation.
              Participation is backed by a trust deposit (a refundable, slashable
              stake), so good actors earn and bad actors are economically
              accountable.
            </p>
          </div>

          {/* Verifiable Trust + flow */}
          <div>
            <SectionHeading
              eyebrow="Verifiable Trust"
              title="Verify first, then connect"
            />
            <p className="mt-4 max-w-3xl text-muted">
              Verana inverts &quot;connect first, verify later&quot;. A Verifiable
              Service is identified by a resolvable DID, not an opaque URL. Its DID
              Document exposes a DIDComm bootstrap endpoint and, optionally, MCP,
              A2A, or website endpoints. Peers trust-resolve each other and display
              a Proof-of-Trust before the first interaction, the same way for
              humans, apps, and AI agents.
            </p>
            <div className="mt-8 card p-6">
              <Mermaid chart={RESOLUTION_FLOW} />
            </div>
          </div>

          {/* Trust Graph */}
          <div>
            <SectionHeading eyebrow="The Trust Graph" title="Discover who you can trust" />
            <p className="mt-4 max-w-3xl text-muted">
              Because public credentials are published in DID Documents, the
              registry can be indexed into a trust-typed graph: find services and
              ecosystems by the credentials they hold, scope to an ecosystem, and
              rank by trust signals. A first-class surface for AI-agent discovery.
            </p>
          </div>

          {/* VPR */}
          <div>
            <SectionHeading
              eyebrow="The layer underneath"
              title="The Verifiable Public Registry"
            />
            <p className="mt-4 max-w-3xl text-muted">
              The neutral Layer-1 &quot;registry of registries&quot; that anchors
              ecosystems, schemas, accreditations, and DIDs, and exposes a
              standardized query API (TRQP) for real-time trust resolution. The
              network is secured by the Council&apos;s validators; everything that
              only reads the ledger (resolver, graph, indexers) is permissionless.
            </p>
          </div>

          {/* Architecture diagram */}
          <div>
            <SectionHeading eyebrow="Architecture" title="The whole picture" />
            <div className="mt-8">
              <ArchitectureDiagram />
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button href={LINKS.trustSpec} variant="ghost" external>
              Verifiable Trust spec
            </Button>
            <Button href={LINKS.vprSpec} variant="ghost" external>
              VPR spec
            </Button>
            <Button href="/software">See the software</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
