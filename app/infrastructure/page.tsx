import type { Metadata } from "next";
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
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Container, Section, SectionHeading, Button } from "../components/ui";
import PageHero from "../components/PageHero";
import { LINKS } from "../lib/site";

export const metadata: Metadata = {
  title: "Infrastructure",
  description:
    "The real modules of the Verana stack, by role: run the network, serve the trust data, discover and observe, operate as an organization, build services. Open source, run your own instance.",
};

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

// The real modules (spec-v2 §3.7/§3.8), by role in the stack. Everything with
// a repo is open source and can be run as your own instance.
const GROUPS: Group[] = [
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
    title: "Build services",
    intro:
      "What a builder runs to put a Verifiable Service online: one VS-Agent per service.",
    modules: [
      {
        icon: faWallet,
        name: "VS-Agent",
        repo: { label: "verana-labs/vs-agent", href: "https://github.com/verana-labs/vs-agent" },
        body: "Container-based framework for building Verifiable Services: the service's cloud wallet. Supports DIDs, DIDComm, OpenID4VC and more (based on OpenWallet Foundation credo-ts). Executes ledger transactions (onboarding, issuing, verifying) and receives event notifications from the indexer and resolver. Accepts connections from VUAs and other VSs.",
      },
    ],
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
        title="The stack, module by module"
        intro="Everything that runs Verana is open source: run the whole stack or any piece of it, in your own datacenter. The testnet instances below are live."
      />

      <Section>
        <Container className="space-y-12">
          {GROUPS.map((g, i) => (
            <div key={g.title}>
              <SectionHeading eyebrow={`0${i + 1}`} title={g.title} intro={g.intro} />
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
