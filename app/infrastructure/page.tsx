import { buildMetadata } from "../lib/seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faCubes,
  faDatabase,
  faShieldHalved,
  faDiagramProject,
  faRobot,
  faChartLine,
  faMagnifyingGlass,
  faFaucetDrip,
  faBuilding,
  faWallet,
  faCodeBranch,
  faGlobe,
  faClock,
  faArrowRightLong,
  faIdBadge,
  faArrowRightArrowLeft,
  faLayerGroup,
  faGears,
  faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Container, Section, SectionHeading, Button } from "../components/ui";
import PageHero from "../components/PageHero";
import PersonalWallets from "../components/PersonalWallets";
import { LINKS } from "../lib/site";

export const metadata = buildMetadata({
  title: "Infrastructure",
  description:
    "The Verana stack, credentials first: build Verifiable Services with VS-Agent, hold and present credentials with the integrated personal wallets, then the network underneath. Open source, run your own instance.",
  path: "/infrastructure",
});

// The personal-wallet list is read live from the playground repo.
export const revalidate = 3600;

type Module = {
  icon: IconDefinition;
  name: string;
  repo?: { label: string; href: string };
  thirdParty?: string;
  comingLater?: boolean;
  testnet?: string[];
  body: string;
};

type Group = {
  title: string;
  intro: string;
  modules: Module[];
};

// The network-side modules (spec-v2 §3.7/§3.8), by role in the stack.
// Everything with a repo is open source and can be run as your own instance.
// The credential-side software (VS-Agent, personal wallets) leads the page
// in its own sections above.
const GROUPS: Group[] = [
  {
    title: "Operate as an organization",
    intro: "The web UI to fully operate Verana as a corporation.",
    modules: [
      {
        icon: faBuilding,
        name: "Frontend",
        repo: { label: "verana-labs/verana-frontend", href: "https://github.com/verana-labs/verana-frontend" },
        testnet: ["app.testnet.verana.network"],
        body: "Create and manage ecosystems, schemas, and accreditations; browse trust registries. Uses the ledger, the indexer and resolver, and the Trust Graph.",
      },
    ],
  },
  {
    title: "Run the network",
    intro:
      "The Verana L1 and its utilities. Validators are members of the Verana Council; anyone can run a non-validator node in their own datacenter.",
    modules: [
      {
        icon: faCubes,
        name: "Ledger",
        repo: { label: "verana-labs/verana-node", href: "https://github.com/verana-labs/verana-node" },
        testnet: ["rpc.testnet.verana.network", "api.testnet.verana.network"],
        body: "The Verana L1: trust registries, credential schemas, permissions, and trust deposits, on chain.",
      },
      {
        icon: faFaucetDrip,
        name: "Faucet",
        repo: {
          label: "verana-labs/verana-faucet-hologram-chatbot",
          href: "https://github.com/verana-labs/verana-faucet-hologram-chatbot",
        },
        testnet: ["faucet-vs.testnet.verana.network"],
        body: "Testnet VNA, dispensed by a conversational Hologram chatbot that is itself a Verifiable Service: it requests an AvatarID credential presentation to limit access to humans.",
      },
    ],
  },
  {
    title: "Serve the trust data",
    intro:
      "The permissionless read side: everything that only reads the ledger can be run by anyone.",
    modules: [
      {
        icon: faDatabase,
        name: "Indexer",
        repo: { label: "verana-labs/verana-indexer", href: "https://github.com/verana-labs/verana-indexer" },
        testnet: ["idx.testnet.verana.network"],
        body: "Tails the chain block by block, indexes all Verana ledger messages, and exposes them over HTTP APIs; feeds the resolver.",
      },
      {
        icon: faShieldHalved,
        name: "Resolver",
        repo: { label: "verana-labs/verana-resolver", href: "https://github.com/verana-labs/verana-resolver" },
        testnet: ["resolver.testnet.verana.network/docs"],
        body: "The verification gate: resolves DIDs, dereferences the credentials presented as Linked VPs, and verifies accreditations per the Verifiable Trust spec. Exposes the trust-resolution REST API and a ToIP TRQP interface.",
      },
    ],
  },
  {
    title: "Discover and observe",
    intro: "Query, explore, and audit the network.",
    modules: [
      {
        icon: faDiagramProject,
        name: "Trust Graph",
        comingLater: true,
        body: "The typed discovery graph built from verified trust results: find services and ecosystems by the credentials they hold.",
      },
      {
        icon: faRobot,
        name: "MCP server",
        comingLater: true,
        body: "Operate Verana over MCP: the agent-native surface for the ledger, the indexer and resolver, and the Trust Graph.",
      },
      {
        icon: faChartLine,
        name: "Visualizer",
        repo: { label: "verana-labs/verana-visualizer", href: "https://github.com/verana-labs/verana-visualizer" },
        testnet: ["vis.testnet.verana.network"],
        body: "Interactive frontend for exploring the trust layer: trust registries, versions, schemas, relationships as a network graph, and analytics computed from real on-chain state.",
      },
      {
        icon: faMagnifyingGlass,
        name: "Explorer",
        thirdParty: "ping.pub",
        testnet: ["explorer.testnet.verana.network"],
        body: "Block explorer for the chain: blocks, transactions, validators.",
      },
    ],
  },
];

// VS-Agent capabilities, aligned with the playground's business-wallets page.
const VS_AGENT_CAPABILITIES: { icon: IconDefinition; title: string; body: string }[] = [
  {
    icon: faIdBadge,
    title: "Holder, issuer, and verifier",
    body: "One runtime plays all three roles under ecosystem accreditation: it holds its own credentials, issues to peers, and verifies presentations, with revocation support on every rail.",
  },
  {
    icon: faArrowRightArrowLeft,
    title: "Dual transport",
    body: "DIDComm (Issue Credential v2, Present Proof v2, vt-flow) and OpenID4VCI / OpenID4VP with SD-JWT VC, DCQL and Presentation Exchange, plus Token Status List revocation.",
  },
  {
    icon: faLayerGroup,
    title: "The right format for each credential",
    body: "Public credentials as JSON-LD Linked VPs with on-chain digest anchoring; AnonCreds where presentations must stay unlinkable; SD-JWT VC for OpenID4VC interop.",
  },
  {
    icon: faGears,
    title: "Ecosystem-driven lifecycle",
    body: "The vt-flow protocol turns on-chain ecosystem actions into wallet actions: onboarding triggers issuance, and a revoked participant means the credential is revoked, pushed to the holder, and cleaned up automatically. No polling.",
  },
  {
    icon: faShieldHalved,
    title: "Trust resolution built in",
    body: "Every DIDComm connection and every OpenID4VP presentation is checked against the Verana registry before it is accepted: Proof-of-Trust on both transports, fail closed.",
  },
  {
    icon: faRobot,
    title: "Any service shape",
    body: "Chat services on Hologram, MCP servers, A2A agents, and plain HTTP APIs, all declared under one DID. Plugin architecture, Docker self-hosting, REST admin API and NestJS / JS clients.",
  },
];

function ModuleCard({ m }: { m: Module }) {
  return (
    <div className="card p-5">
      <div className="flex flex-wrap items-center gap-2">
        <FontAwesomeIcon icon={m.icon} className="h-4 w-4 text-primary" />
        <h3 className="font-semibold text-ink">{m.name}</h3>
        <div className="ml-auto flex flex-wrap items-center gap-1.5">
          {m.comingLater ? (
            <span className="chip">
              <FontAwesomeIcon icon={faClock} className="h-3 w-3" />
              repo published later
            </span>
          ) : null}
          {m.thirdParty ? (
            <span className="chip">
              <FontAwesomeIcon icon={faGlobe} className="h-3 w-3" />
              {m.thirdParty} · third-party
            </span>
          ) : null}
          {m.repo ? (
            <a
              href={m.repo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="chip transition-colors hover:text-accent"
            >
              <FontAwesomeIcon icon={faCodeBranch} className="h-3 w-3" />
              open source
            </a>
          ) : null}
        </div>
      </div>
      <p className="mt-2 text-sm text-muted">{m.body}</p>
      <div className="mt-3 flex flex-col gap-1 border-t border-rule pt-3">
        {m.repo ? (
          <a
            href={m.repo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all font-mono text-[11px] text-accent hover:underline"
          >
            {m.repo.label}
          </a>
        ) : null}
        {m.testnet?.map((t) => (
          <a
            key={t}
            href={`https://${t}`}
            target="_blank"
            rel="noopener noreferrer"
            className="break-all font-mono text-[11px] text-muted hover:text-accent"
          >
            testnet · {t}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Software() {
  return (
    <>
      <PageHero
        eyebrow="Infrastructure"
        title="The stack, credentials first"
        intro="Everything that runs Verana is open source: run the whole stack or any piece of it, in your own datacenter. The credential side comes first: the software that builds Verifiable Services and the wallets people hold credentials with. The network underneath follows."
      />

      <Section>
        <Container className="space-y-12">
          {/* 01 · Build services: VS-Agent, the reference business wallet */}
          <div id="build-services">
            <SectionHeading
              eyebrow="01"
              title="Build services"
              intro="What a builder runs to put a Verifiable Service online: one VS-Agent per service. It is the reference business wallet of the Verana stack, and the runtime behind every demo service in the Verana Playground."
            />
            <div className="card reveal mt-6 overflow-hidden">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-rule bg-surface-2 px-5 py-3.5">
                <FontAwesomeIcon icon={faWallet} className="h-4 w-4 text-primary" />
                <h3 className="display text-xl text-ink">VS-Agent</h3>
                <div className="ml-auto flex flex-wrap items-center gap-1.5">
                  <span className="chip chip-verified">reference implementation</span>
                  <span className="chip">Apache-2.0</span>
                  <span className="chip">self-hosted</span>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <p className="max-w-3xl text-muted">
                  VS-Agent is an open-source container that packs the complete
                  stack of a{" "}
                  <a
                    href={LINKS.trustSpec}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Verifiable Service
                  </a>
                  : it gives a hosted service a resolvable DID, manages its
                  credentials and Linked Verifiable Presentations, resolves
                  trust before every exchange, and runs the registry operations
                  for you.
                </p>
                <div className="reveal-stagger mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {VS_AGENT_CAPABILITIES.map((c) => (
                    <div
                      key={c.title}
                      className="rounded-xl border border-rule bg-surface-2 p-5"
                    >
                      <div className="grid h-9 w-9 place-items-center rounded-lg bg-surface">
                        <FontAwesomeIcon
                          icon={c.icon}
                          className="h-4 w-4 text-primary"
                        />
                      </div>
                      <h4 className="mt-3 font-semibold text-ink">{c.title}</h4>
                      <p className="mt-1.5 text-sm text-muted">{c.body}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 max-w-3xl text-sm text-muted">
                  Other open-source business wallets host Verifiable Services
                  too, natively, with VS-Agent as a sidecar, or by adding trust
                  resolution to an existing OpenID4VC stack. Each integrated
                  wallet runs a live, Verana-verified demo service in the
                  Playground.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 border-t border-rule px-5 py-4">
                <Button href={`${LINKS.playground}/business-wallets`} external>
                  Try it in the Playground
                </Button>
                <Button
                  href="https://github.com/verana-labs/vs-agent"
                  variant="ghost"
                  external
                >
                  Get it on GitHub
                </Button>
                <a
                  href="https://github.com/verana-labs/verana-spec/blob/main/v4/vs-agent/spec.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-accent hover:underline"
                >
                  Read the spec
                </a>
              </div>
            </div>
          </div>

          {/* 02 · Personal wallets: the holder side, live from the playground */}
          <div id="personal-wallets">
            <SectionHeading
              eyebrow="02"
              title="Personal wallets"
              intro="The holder side: the app or browser a person uses to receive, hold, and present verifiable credentials. Each wallet below is integrated with Verana trust resolution: before accepting a credential or sharing a presentation, it checks the issuer or verifier against the public registry and shows the trust card."
            />
            <p className="reveal mt-4 flex items-center gap-2 text-sm text-muted">
              <FontAwesomeIcon
                icon={faMobileScreen}
                className="h-3.5 w-3.5 text-accent"
              />
              This list is built live from the Playground&apos;s wallet
              registry; every wallet passed the demo-credential loop against
              the testnet.
            </p>
            <div className="reveal mt-6">
              <PersonalWallets />
            </div>
            <div className="reveal mt-6 flex flex-wrap items-center gap-3">
              <Button href={`${LINKS.playground}/personal-wallets`} external>
                Try a wallet in the Playground
              </Button>
              <Button
                href={`${LINKS.playground}/integrate`}
                variant="ghost"
                external
              >
                Add your wallet
              </Button>
            </div>
          </div>

          {/* 03+ · The network underneath */}
          {GROUPS.map((g, i) => (
            <div key={g.title}>
              <SectionHeading eyebrow={`0${i + 3}`} title={g.title} intro={g.intro} />
              <div className="reveal-stagger mt-6 grid gap-4 md:grid-cols-2">
                {g.modules.map((m) => (
                  <ModuleCard key={m.name} m={m} />
                ))}
              </div>
            </div>
          ))}

          <div className="reveal flex flex-wrap items-center gap-3">
            <Button href={LINKS.docs} external>
              Build on Verana
            </Button>
            <Button href={LINKS.github} variant="ghost" external>
              github.com/verana-labs
            </Button>
            <Link
              href="/discovery"
              className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
            >
              how the modules fit together
              <FontAwesomeIcon icon={faArrowRightLong} className="h-3.5 w-3.5" />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
