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
  C -->|controls| EB["Ecosystem B"]
  C -->|issuer| EC["Ecosystem C"]
  C -->|verifier| ED["Ecosystem D"]
  C -->|holder| EE["Ecosystem E"]`;

// The Essential Credential Schemas, grouped by the role they identify.
const ECS = [
  {
    name: "ECS-Organization",
    role: "Owner / operator",
    body: "Identifies a legal organization that operates one or more verifiable services.",
  },
  {
    name: "ECS-Persona",
    role: "Owner / operator",
    body: "Identifies an individual, a human-controlled avatar, that operates one or more verifiable services.",
  },
  {
    name: "ECS-Service",
    role: "Actor",
    body: "Identifies a service, an AI agent, a connected object, and more: the actor that acts on the network. The service's controller is the issuer of the credential.",
  },
  {
    name: "ECS-Badge",
    role: "Actor",
    body: "Identifies a human actor. Held by a person and issued by a verifiable service, it carries the human's identity and attributes. The holder usually represents an employee of the organization that issued it.",
  },
  {
    name: "ECS-UserAgent",
    role: "User-agent software",
    body: "Identifies the software a person operates (app, wallet, or browser). Its controller, the software product line, is the issuer of the credential.",
  },
];

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
              Verana is public, permissionless infrastructure: anyone can create
              their own ecosystem, or join the ecosystems they want. An ecosystem
              is a governed list of recognized participants authorized to issue,
              verify, or hold certain credentials. It
              publishes a governance framework, defines its credential schemas,
              and sets who is accredited through a{" "}
              <strong className="text-ink">participant tree</strong>: the ecosystem
              is the root and delegates to grantors, who accredit issuers and
              verifiers, who in turn issue to holders. Permission modes range from
              fully open to fully governed.
            </p>
            <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
              <div className="card p-6">
                <span className="eyebrow">Participant tree</span>
                <div className="mt-3">
                  <Mermaid chart={TREE_CHART} />
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

            {/* business models */}
            <span className="eyebrow mt-10 block">Business models</span>
            <p className="mt-2 max-w-3xl text-sm text-muted">
              Each participant in the tree can charge fees, paid using the
              network and distributed up the tree to the accrediting participants:
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="card p-5">
                <h5 className="font-semibold text-ink">Onboarding and accreditation</h5>
                <p className="mt-1 text-sm text-muted">
                  An applicant pays a validation fee to be accredited as an
                  issuer, verifier, or grantor. Renewable each validity period.
                </p>
              </div>
              <div className="card p-5">
                <h5 className="font-semibold text-ink">Pay-per-issuance</h5>
                <p className="mt-1 text-sm text-muted">
                  An issuer pays a fee each time it issues a credential of a
                  schema.
                </p>
              </div>
              <div className="card p-5">
                <h5 className="font-semibold text-ink">Pay-per-verification</h5>
                <p className="mt-1 text-sm text-muted">
                  A verifier pays a fee each time it verifies a credential, shared
                  with the issuer and the rest of the tree.
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs text-muted">
              Schemas can also be fully open, with no fees.
            </p>

            {/* trust score */}
            <div className="mt-8 card p-6">
              <span className="eyebrow">Trust score</span>
              <h5 className="display mt-2 text-lg text-ink">
                Skin in the game, earned not bought
              </h5>
              <p className="mt-3 text-muted">
                A fraction of every paid trust operation is committed to the
                participant&apos;s trust deposit as Trust Units (TU): a
                non-transferable, non-refundable, fiat-pegged measure of trust. The
                deposit balance is the participant&apos;s{" "}
                <strong className="text-ink">trust score</strong>, so it reflects
                cumulative real usage, not market timing or capital.
              </p>
              <p className="mt-3 text-muted">
                Misbehavior is met with{" "}
                <strong className="text-ink">slashing</strong>: a network or
                ecosystem authority destroys Trust Units, lowering the score, and
                while a slash is unrepaid the participant&apos;s permissions are
                non-trustable. Because trust cannot be transferred or sold, only
                earned, relying parties and the Trust Graph can rank and filter by
                trust score and slashing history to favor accountable parties.
              </p>
            </div>

            {/* b. Corporations join and build */}
            <h4 className="display mt-12 text-lg text-ink">
              Corporations join, and build
            </h4>
            <p className="mt-3 max-w-3xl text-muted">
              A corporation registers itself in Verana (its own DID and governance
              framework), then relates to the registry in two complementary ways,
              and most do both: <strong className="text-ink">join</strong> any
              number of ecosystems as an accredited issuer, verifier, or holder,
              and <strong className="text-ink">control</strong> any number of its
              own. A corporation can own and join an unlimited number of
              ecosystems, in any combination.
            </p>
            <div className="mt-6 card p-6">
              <Mermaid chart={CORP_CHART} />
            </div>

            {/* c. ECS ecosystem */}
            <h4 className="display mt-12 text-lg text-ink">
              The ECS Ecosystem, the identity baseline
            </h4>
            <p className="mt-3 max-w-3xl text-muted">
              The ECS Ecosystem is the shared identity baseline of Verana. It
              publishes the Essential Credential Schemas (ECS), the small set of
              credentials that every other ecosystem relies on to identify and
              mutually verify the parties of an interaction. It is governed by the{" "}
              <a
                href={LINKS.council}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Verana Council
              </a>
              , a neutral, non-profit Swiss association that governs and secures
              the live network. On top of this baseline, each ecosystem defines its
              own domain credentials (govID, diploma, reusable KYC, machine
              certificate, and more).
            </p>
            <p className="mt-4 max-w-3xl text-sm text-muted">
              The five ECS cover three roles: the owner or operator behind a
              service, the actor itself, and the user-agent software a person
              connects with.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ECS.map((e) => (
                <div key={e.name} className="card p-5">
                  <span className="eyebrow">{e.role}</span>
                  <h5 className="mt-2 font-mono text-sm font-medium text-ink">
                    {e.name}
                  </h5>
                  <p className="mt-2 text-sm text-muted">{e.body}</p>
                </div>
              ))}
            </div>
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
                  1. A person connects to a service
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
                  2. A service connects to another service
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
