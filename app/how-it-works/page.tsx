import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, SectionHeading, Button } from "../components/ui";
import PageHero from "../components/PageHero";
import ArchitectureDiagram from "../components/ArchitectureDiagram";
import Mermaid from "../components/Mermaid";
import TrustGraphExamples from "../components/TrustGraphExamples";
import { LINKS } from "../lib/site";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Verana in three parts: Trust Ecosystems, Verifiable Trust, and the Trust Graph, with the Verifiable Public Registry underneath.",
};

// 1. A Verifiable User Agent connects to a Verifiable Service.
const FLOW_VUA_VS = `sequenceDiagram
  actor U as User
  participant VUA as Frontend (VUA)
  participant VS as AI Agent (VS)
  participant VPR as Public Registry
  VUA->>VS: resolve DID, read DID Document
  VS-->>VUA: Linked VPs (ECS-Service + ECS-Org/Persona)
  VUA->>VPR: trust resolution (TRQP): issuers accredited?
  VPR-->>VUA: verified, recursive to the ecosystem root
  VUA->>U: show Proof-of-Trust
  U-->>VUA: accept
  VUA->>VS: open DIDComm session
  VS->>VUA: request ECS-UserAgent
  VUA-->>VS: present ECS-UserAgent (+ optional ECS-Badge)
  VS->>VPR: verify ECS-UserAgent issuer accredited
  VPR-->>VS: verified, genuine VUA
  VUA->>VS: bootstrap AG-UI session over DIDComm`;

// 2. A Verifiable Service connects to another Verifiable Service.
const FLOW_VS_VS = `sequenceDiagram
  participant A as AI Agent A (Company A)
  participant B as AI Agent B (Company B)
  participant VPR as Public Registry
  A->>B: resolve DID, read DID Document
  B-->>A: Linked VPs (ECS-Service + ECS-Org/Persona)
  B->>A: resolve DID, read DID Document
  A-->>B: Linked VPs (ECS-Service + ECS-Org/Persona)
  A->>VPR: trust resolution: B issuers accredited?
  B->>VPR: trust resolution: A issuers accredited?
  VPR-->>A: verified
  VPR-->>B: verified
  Note over A,B: both agree
  A->>B: open DIDComm session
  A->>B: bootstrap A2A session over DIDComm`;

// 3. A Verifiable User Agent connects to another Verifiable User Agent.
const FLOW_VUA_VUA = `sequenceDiagram
  participant Alice as Alice's VUA
  participant Bob as Bob's VUA
  participant VPR as Public Registry
  Alice->>Bob: show QR, out-of-band DIDComm invitation
  Bob->>Alice: scan, establish DIDComm connection
  Alice->>Bob: request ECS-UserAgent
  Bob-->>Alice: present ECS-UserAgent
  Alice->>VPR: verify ECS-UserAgent issuer accredited
  VPR-->>Alice: verified
  Bob->>Alice: request ECS-UserAgent
  Alice-->>Bob: present ECS-UserAgent
  Bob->>VPR: verify ECS-UserAgent issuer accredited
  VPR-->>Bob: verified
  Note over Alice,Bob: both verified as genuine VUAs
  Alice->>Bob: optionally share more credentials, then chat`;

// Participant (permission) tree of a credential schema.
const TREE_CHART = `flowchart TD
  E["Ecosystem (root)"]
  E --> IG["Issuer Grantor"]
  E --> VG["Verifier Grantor"]
  IG --> I["Issuer"]
  VG --> V["Verifier"]
  I --> H["Holder"]`;

// A corporation participates in several ecosystems and controls its own.
const CORP_CHART = `flowchart LR
  C["Corporation X"]
  C -->|controls| EA["Ecosystem A"]
  C -->|issuer| EB["Ecosystem B"]
  C -->|verifier| EC["Ecosystem C"]
  C -->|holder| ED["Ecosystem D"]`;

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
          {/* Trust Ecosystems: what / corporations / ECS ecosystem */}
          <div>
            <SectionHeading
              eyebrow="Trust Ecosystems, join or build"
              title="Join or build an ecosystem"
            />

            {/* a. What is an ecosystem */}
            <h4 className="display mt-6 text-lg text-ink">What is an ecosystem?</h4>
            <p className="mt-3 max-w-3xl text-muted">
              An ecosystem is a governed list of recognized participants
              authorized to issue, verify, or hold certain credentials. It
              publishes a governance framework, defines its credential schemas,
              and sets who is accredited through a{" "}
              <strong className="text-ink">participant tree</strong>: the ecosystem
              is the root and delegates to grantors, who accredit issuers and
              verifiers, who in turn issue to holders. Permission modes range from
              fully open to fully governed.
            </p>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="card p-6">
                <span className="eyebrow">Participant tree</span>
                <div className="mt-3">
                  <Mermaid chart={TREE_CHART} />
                </div>
              </div>
              <div className="card p-6">
                <span className="eyebrow">Built-in business model</span>
                <p className="mt-3 text-sm text-muted">
                  Each participant in the tree can set fees: pay-per-issuance,
                  pay-per-verification, or validation subscriptions. Participation
                  is backed by a{" "}
                  <strong className="text-ink">trust deposit</strong>, a
                  refundable, slashable stake, so good actors earn and bad actors
                  are economically accountable. Fees flow up the tree to the
                  accrediting participants.
                </p>
              </div>
            </div>

            {/* b. Corporations join and build */}
            <h4 className="display mt-12 text-lg text-ink">
              Corporations join, and build
            </h4>
            <p className="mt-3 max-w-3xl text-muted">
              A corporation registers itself in Verana (its own DID and governance
              framework), then relates to the registry in two complementary ways,
              and most do both: <strong className="text-ink">join</strong> one or
              several ecosystems as an accredited issuer, verifier, or holder, and{" "}
              <strong className="text-ink">control</strong> its own ecosystem. The
              same corporation can own one ecosystem while participating in others.
            </p>
            <div className="mt-6 card p-6">
              <Mermaid chart={CORP_CHART} />
            </div>

            {/* c. ECS ecosystem */}
            <h4 className="display mt-12 text-lg text-ink">
              The ECS Ecosystem, the identity baseline
            </h4>
            <p className="mt-3 max-w-3xl text-muted">
              One special ecosystem publishes the four Essential Credential
              Schemas: <strong className="text-ink">Service</strong> (any service,
              including an AI agent),{" "}
              <strong className="text-ink">Organization</strong> and{" "}
              <strong className="text-ink">Persona</strong> (the org or individual
              that operates a service), and{" "}
              <strong className="text-ink">UserAgent</strong> (the app, wallet, or
              browser a person connects with), plus a future Badge for a human
              end-user. These make every ecosystem mutually verifiable, and are
              governed by the{" "}
              <a
                href={LINKS.council}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Verana Council
              </a>
              . On top of this baseline, each ecosystem defines its own domain
              credentials (govID, diploma, reusable KYC, machine certificate, and
              more).
            </p>
          </div>

          {/* Verifiable Trust + the three connection flows */}
          <div>
            <SectionHeading
              eyebrow="Verifiable Trust"
              title="Verify first, then connect"
            />
            <p className="mt-4 max-w-3xl text-muted">
              Verana inverts &quot;connect first, verify later&quot;. A Verifiable
              Service is identified by a resolvable DID, not an opaque URL. Its DID
              Document exposes a DIDComm bootstrap endpoint and, optionally, MCP,
              A2A, or website endpoints. Peers trust-resolve each other,
              recursively to the ecosystem root, and display a Proof-of-Trust
              before the first interaction. The same model covers three connection
              types.
            </p>

            <div className="mt-10 space-y-8">
              {/* 1. VUA to VS */}
              <div className="card p-6 sm:p-8">
                <span className="eyebrow">Verifiable User Agent to Verifiable Service</span>
                <h4 className="display mt-2 text-lg text-ink">
                  1. A person connects to an enterprise AI agent
                </h4>
                <p className="mt-3 text-sm text-muted">
                  An AG-UI compatible frontend (a Verifiable User Agent) connects
                  to an enterprise AI agent (a Verifiable Service). The frontend
                  resolves the agent&apos;s DID, checks its ECS-Service and ECS-Org
                  or ECS-Persona credentials and their issuers, and shows a
                  Proof-of-Trust. After the user accepts, it opens a DIDComm
                  session, presents an ECS-UserAgent credential (and optionally an
                  ECS-Badge for the human), then the AG-UI session is bootstrapped
                  over the DIDComm session.
                </p>
                <div className="mt-5">
                  <Mermaid chart={FLOW_VUA_VS} />
                </div>
              </div>

              {/* 2. VS to VS */}
              <div className="card p-6 sm:p-8">
                <span className="eyebrow">Verifiable Service to Verifiable Service</span>
                <h4 className="display mt-2 text-lg text-ink">
                  2. An AI agent connects to another AI agent
                </h4>
                <p className="mt-3 text-sm text-muted">
                  An AI agent from Company A connects to an AI agent from Company B
                  (both Verifiable Services). Each verifies the credentials the
                  other presents in its DID Document (ECS-Service plus ECS-Org or
                  ECS-Persona, as Linked Verifiable Presentations). If both agree, a
                  DIDComm session starts and an A2A session is bootstrapped over it.
                </p>
                <div className="mt-5">
                  <Mermaid chart={FLOW_VS_VS} />
                </div>
              </div>

              {/* 3. VUA to VUA */}
              <div className="card p-6 sm:p-8">
                <span className="eyebrow">Verifiable User Agent to Verifiable User Agent</span>
                <h4 className="display mt-2 text-lg text-ink">
                  3. Two people open a private connection
                </h4>
                <p className="mt-3 text-sm text-muted">
                  Alice and Bob use a chat application (each a Verifiable User
                  Agent) and want a private peer-to-peer DIDComm connection. Alice
                  shows a QR code, an out-of-band DIDComm invitation, that Bob
                  scans. Once connected, both agents present an ECS-UserAgent
                  credential, and each verifies through the public registry that
                  the credential&apos;s issuer is accredited, so each knows the
                  other is a legitimate user agent. They can then optionally share
                  more credentials over the channel.
                </p>
                <div className="mt-5">
                  <Mermaid chart={FLOW_VUA_VUA} />
                </div>
              </div>
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
              Every result carries verifiable provenance, so you can check it
              before you act on it. A few example queries:
            </p>
            <div className="mt-8">
              <TrustGraphExamples />
            </div>
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
