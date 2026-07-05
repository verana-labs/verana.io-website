import { buildMetadata } from "../lib/seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdBadge,
  faServer,
  faRobot,
  faMicrochip,
  faBuilding,
  faMobileScreen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Section, SectionHeading, Button } from "../components/ui";
import PageHero from "../components/PageHero";
import ResolveDid from "../components/ResolveDid";
import FlowDiagram from "../components/FlowDiagram";
import ConceptPager from "../components/ConceptPager";
import UseCaseScene, { type SceneSpec } from "../components/UseCaseScene";
import { FLOWS } from "../lib/flows";
import { LINKS } from "../lib/site";
import { NETWORK_NAME } from "../lib/verana";

export const metadata = buildMetadata({
  title: "Verifiable identity",
  description:
    "Verify first, then connect: services are resolvable DIDs, peers trust-resolve each other against the public registry, and a Proof-of-Trust is shown before the first interaction.",
  path: "/identity",
});

const PRIMARY = "var(--color-primary)";
const ACCENT = "var(--color-accent)";
const SUCCESS = "var(--color-success)";

// The two kinds of software that meet in every connection (same vocabulary
// as the identity baseline on /ecosystems: Owner/operator, Actor).
const ACTOR_PANELS: {
  index: string;
  title: string;
  tag: string;
  caption: string;
  scene: SceneSpec;
}[] = [
  {
    index: "01",
    title: "Verifiable Service",
    tag: "pattern 1 · combined · one DID",
    caption:
      "The Owner/operator and the Actor share one DID: the service holds ECS-Organization and self-issues its ECS-Service credential. Suits small deployments and one-entity-one-service setups.",
    scene: {
      aria: "Combined pattern: a single Verifiable Service holds the ECS-Organization credential and self-issues its ECS-Service credential under one DID.",
      nodes: [
        {
          id: "vs",
          x: 210,
          y: 168,
          r: 18,
          lit: true,
          icon: faServer,
          color: ACCENT,
          label: "Verifiable Service",
          sub: "Owner/operator + Actor · one DID",
        },
      ],
      edges: [
        {
          path: "M 230,182 C 310,220 310,300 210,300 C 110,300 110,220 190,182",
          kind: "structural",
          color: ACCENT,
          arrow: true,
          pill: { label: "self-issues ECS-Service", x: 210, y: 300 },
        },
        { fromPt: [210, 100], toPt: [210, 142], kind: "structuralDashed" },
      ],
      pills: [
        { label: "holder of ECS-Organization", x: 210, y: 62, color: PRIMARY },
        { label: "holder of ECS-Service", x: 210, y: 90, color: ACCENT },
      ],
      badges: [{ x: 223, y: 155, kind: "check" }],
      steps: [],
    },
  },
  {
    index: "02",
    title: "Verifiable Service",
    tag: "pattern 2 · delegated · production",
    caption:
      "A dedicated Organization service holds ECS-Organization and issues an ECS-Service credential to each Actor it operates: a service, an AI agent, a connected object.",
    scene: {
      aria: "Delegated pattern: a dedicated Organization service holds the ECS-Organization credential and issues ECS-Service credentials to each of its Actors: a service, an AI agent, and a connected object.",
      nodes: [
        {
          id: "org",
          x: 210,
          y: 64,
          r: 18,
          lit: true,
          icon: faBuilding,
          color: ACCENT,
          label: "Organization service",
          sub: "holder of ECS-Organization",
        },
        { id: "svc", x: 90, y: 216, icon: faServer, color: ACCENT, sub: "service" },
        { id: "agent", x: 210, y: 216, icon: faRobot, color: ACCENT, sub: "AI agent" },
        { id: "obj", x: 330, y: 216, icon: faMicrochip, color: ACCENT, sub: "connected object" },
      ],
      edges: [
        { from: "org", to: "svc", kind: "structural", arrow: true },
        {
          from: "org",
          to: "agent",
          kind: "structural",
          arrow: true,
          pill: { label: "issues ECS-Service", x: 210, y: 146 },
        },
        { from: "org", to: "obj", kind: "structural", arrow: true },
      ],
      badges: [
        { x: 101, y: 205, kind: "check" },
        { x: 221, y: 205, kind: "check" },
        { x: 341, y: 205, kind: "check" },
      ],
      steps: [],
      texts: [
        { x: 210, y: 280, text: "the Actor: service · AI agent · connected object", strong: true },
      ],
    },
  },
  {
    index: "03",
    title: "Verifiable User Agent",
    tag: "software operated by humans",
    caption:
      "The software provider (the product line) is the issuer of ECS-UserAgent: every instance of the app receives a credential proving its controller, name, and version. Human users operate VUAs.",
    scene: {
      aria: "A software provider issues an ECS-UserAgent credential to each instance of its app, so the software proves its controller, name and version; human users operate the verifiable user agents.",
      nodes: [
        {
          id: "provider",
          x: 210,
          y: 64,
          r: 18,
          lit: true,
          icon: faBuilding,
          color: ACCENT,
          label: "Software provider",
          sub: "product line · issuer of ECS-UserAgent",
        },
        { id: "app1", x: 130, y: 208, icon: faMobileScreen, color: ACCENT, sub: "app instance" },
        { id: "app2", x: 290, y: 208, icon: faMobileScreen, color: ACCENT, sub: "app instance" },
        { id: "user1", x: 78, y: 312, icon: faUser, color: SUCCESS, label: "Human user" },
        { id: "user2", x: 342, y: 312, icon: faUser, color: SUCCESS, label: "Human user" },
      ],
      edges: [
        {
          from: "provider",
          to: "app1",
          kind: "structural",
          arrow: true,
          pill: { label: "issues ECS-UserAgent", x: 210, y: 140 },
        },
        { from: "provider", to: "app2", kind: "structural", arrow: true },
        {
          from: "user1",
          to: "app1",
          kind: "structural",
          color: SUCCESS,
          arrow: true,
          pill: { label: "operates", x: 78, y: 258 },
        },
        { from: "user2", to: "app2", kind: "structural", color: SUCCESS, arrow: true },
      ],
      badges: [
        { x: 141, y: 197, kind: "check" },
        { x: 301, y: 197, kind: "check" },
      ],
      steps: [],
      texts: [{ x: 210, y: 250, text: "proves controller · name · version" }],
    },
  },
];

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

          {/* the actors: VS + VUA */}
          <div>
            <SectionHeading
              eyebrow="The actors"
              title="Verifiable Services and User Agents"
              intro="Two kinds of software meet in every connection: Verifiable Services (the Actors: services, AI agents, connected objects) and the Verifiable User Agents people operate. Both prove who stands behind them before anything else happens."
            />
            <div className="card reveal mt-6 overflow-hidden">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-rule bg-surface-2 px-4 py-3">
                <span className="eyebrow flex items-center gap-2">
                  <FontAwesomeIcon icon={faIdBadge} className="h-3 w-3" />
                  Who is who
                </span>
                <div className="ml-auto flex flex-wrap items-center gap-3">
                  {[
                    { color: "var(--color-primary)", label: "owner / operator" },
                    { color: "var(--color-accent)", label: "actor · software" },
                    { color: "var(--color-success)", label: "human" },
                  ].map((l) => (
                    <span
                      key={l.label}
                      className="flex items-center gap-1.5 font-mono text-[11px] text-muted"
                    >
                      <span
                        aria-hidden
                        className="h-2 w-2 rounded-full"
                        style={{ background: l.color }}
                      />
                      {l.label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid divide-y divide-rule sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {ACTOR_PANELS.map((p, i) => (
                  <div key={p.index} className="p-5">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-[11px] text-muted">
                        {p.index}
                      </span>
                      <h3 className="font-semibold text-ink">{p.title}</h3>
                    </div>
                    <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                      {p.tag}
                    </p>
                    <div className="mt-4">
                      <UseCaseScene scene={p.scene} index={10 + i} />
                    </div>
                    <p className="mt-3 text-sm text-muted">{p.caption}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2 border-t border-rule px-5 py-3">
                <span className="chip">
                  <FontAwesomeIcon icon={faServer} className="h-3 w-3" />
                  VS · identifies the Actor
                </span>
                <span className="chip">
                  <FontAwesomeIcon icon={faMobileScreen} className="h-3 w-3" />
                  VUA · identifies the software
                </span>
                <span className="chip">
                  <FontAwesomeIcon icon={faUser} className="h-3 w-3" />
                  humans operate VUAs
                </span>
              </div>
            </div>
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
            <Button href={LINKS.docs} variant="ghost" external>
              Build on Verana
            </Button>
          </div>

          <ConceptPager nextHref="/discovery" nextLabel="Discovery" />
        </Container>
      </Section>
    </>
  );
}
