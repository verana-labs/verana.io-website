import { buildMetadata } from "../lib/seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLandmark,
  faScaleBalanced,
  faCode,
  faFileLines,
  faCubes,
  faServer,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Section, SectionHeading, Button } from "../components/ui";
import PageHero from "../components/PageHero";
import Roadmap from "../components/Roadmap";
import UseCaseScene, { type SceneSpec } from "../components/UseCaseScene";
import { FoundationLogo, CouncilLogo } from "../components/OrgLogos";
import { LINKS } from "../lib/site";

export const metadata = buildMetadata({
  title: "About",
  description:
    "Vision and mission of Verana, the open, public, neutral trust infrastructure; the roles of the Verana Foundation and the Verana Council; owned by no one. Plus the roadmap to mainnet.",
  path: "/about",
});

const PRIMARY = "var(--color-primary)";
const ACCENT = "var(--color-accent)";

// The separation of powers, in the site's node language. Facts as already
// used on /ecosystems and the sister sites; everything deeper links out.
const STEWARDSHIP: SceneSpec = {
  aria: "Separation of powers: the Verana Foundation stewards the specifications and the open-source software; the Verana Council governs and secures the live network and the ECS Ecosystem; independent builders ship products and services on the open protocol.",
  band: { x: 14, y: 10, w: 392, h: 330, label: "OWNED BY NO ONE", lx: 30, ly: 30 },
  nodes: [
    { id: "foundation", x: 80, y: 90, r: 18, lit: true, icon: faLandmark, color: PRIMARY, label: "Foundation", sub: "non-profit steward" },
    { id: "council", x: 210, y: 90, r: 18, lit: true, icon: faScaleBalanced, color: PRIMARY, label: "Council", sub: "Swiss association" },
    { id: "builders", x: 340, y: 90, r: 18, lit: true, icon: faCode, color: ACCENT, label: "Builders", sub: "anyone" },
    { id: "specs", x: 80, y: 250, icon: faFileLines, color: PRIMARY, label: "Specs + software", sub: "open source" },
    { id: "network", x: 210, y: 250, icon: faCubes, color: PRIMARY, label: "Network + ECS", sub: "the live chain" },
    { id: "products", x: 340, y: 250, icon: faServer, color: ACCENT, label: "Products", sub: "services · agents" },
  ],
  edges: [
    { from: "foundation", to: "specs", kind: "structural", arrow: true, pill: { label: "stewards", x: 80, y: 172 } },
    { from: "council", to: "network", kind: "structural", arrow: true, pill: { label: "governs · secures", x: 210, y: 172 } },
    { from: "builders", to: "products", kind: "structural", color: ACCENT, arrow: true, pill: { label: "ship", x: 340, y: 172 } },
  ],
  badges: [],
  steps: [],
};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="The trust layer the internet never had"
        intro="Verana is the open, public, neutral trust infrastructure: the trust layer that lets humans, organizations, services, and AI agents prove who they are and verify each other before they connect."
      />

      <Section>
        <Container className="space-y-14">
          {/* vision & mission */}
          <div>
            <SectionHeading eyebrow="Vision & mission" title="Verify first, then connect" />
            <p className="reveal mt-4 max-w-3xl text-muted">
              The web solved encryption, but never solved verified identity of
              the acting party. Verana&apos;s mission is to make verifiable
              trust public infrastructure, like DNS or the web itself: open
              standards, open-source software, and a permissionless public
              network where anyone can join or build sovereign trust
              ecosystems, and where every service, organization, person, and
              AI agent can be verified before the first interaction.
            </p>
            <p className="reveal mt-3 max-w-3xl text-muted">
              No vendor stack, no consortium chain you must be admitted to, no
              closed identity silo. Owned by no one, with named stewards
              answering for each piece:
            </p>
            <div className="reveal mx-auto mt-8 max-w-2xl">
              <UseCaseScene scene={STEWARDSHIP} index={20} />
            </div>
          </div>

          {/* the Foundation */}
          <div>
            <SectionHeading eyebrow="The steward" title="Verana Foundation" />
            <div className="reveal mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
              <div>
                <p className="text-muted">
                  The Verana Foundation is the non-profit steward of the
                  commons: it owns and maintains the{" "}
                  <a href={LINKS.trustSpec} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    Verifiable Trust
                  </a>{" "}
                  and{" "}
                  <a href={LINKS.vprSpec} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    Verifiable Public Registry
                  </a>{" "}
                  specifications and stewards the open-source reference
                  implementations.
                </p>
                <p className="mt-3 text-muted">
                  Its work happens in public working groups where members
                  advance the specifications and the software together;
                  membership and grants are how organizations and individuals
                  take part. Everything the Foundation produces stays open:
                  the specs are openly licensed and the code is open source.
                </p>
              </div>
              <div className="card flex flex-col p-6">
                <FoundationLogo />
                <p className="mt-3 text-sm text-muted">
                  Working groups, membership, and grants live on the
                  Foundation site.
                </p>
                <a
                  href={LINKS.foundation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-accent hover:underline"
                >
                  veranafoundation.org
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

          {/* the Council */}
          <div>
            <SectionHeading eyebrow="The governor" title="Verana Council" />
            <div className="reveal mt-6 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
              <div>
                <p className="text-muted">
                  The Verana Council is a neutral, non-profit Swiss
                  association that governs and secures the live network and
                  the ECS Ecosystem (the identity baseline every other
                  ecosystem relies on). Its model is built so that no single
                  party can own the trust layer: up to 25 seats, one member
                  one vote, membership free of charge, and every member runs a
                  validator node; only members may.
                </p>
                <p className="mt-3 text-muted">
                  The Council governs only the constitutional commons: it has
                  no instrument to reach inside the sovereign ecosystems built
                  on the network. Seats are held by identified, diverse,
                  term-bound organizations.
                </p>
              </div>
              <div className="card flex flex-col p-6">
                <CouncilLogo />
                <p className="mt-3 text-sm text-muted">
                  The Council has open seats: founding-member recruitment is
                  underway on the Council site.
                </p>
                <a
                  href={LINKS.council}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-accent hover:underline"
                >
                  veranacouncil.org
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

          <p className="reveal text-sm text-muted">
            verana.io is the network and software site. Governance,
            membership, and program questions belong to the Foundation and the
            Council; this page only points the way.
          </p>
        </Container>
      </Section>

      {/* Roadmap: the condensed 5-phase story; the authoritative, detailed
          roadmap is verana-labs/verana-spec/ROADMAP.md, linked below. */}
      <Section id="roadmap" className="pt-0">
        <Container className="space-y-10">
          <div className="reveal">
            <SectionHeading
              eyebrow="Roadmap"
              title="From testnet to the trust layer"
              intro="What has shipped, what is being built now, and the road to mainnet — condensed. The full, detailed roadmap lives with the specifications."
            />
          </div>

          <Roadmap />

          <a
            href={LINKS.roadmap}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal inline-flex items-center gap-2 font-mono text-xs text-accent hover:underline"
          >
            Full roadmap on GitHub
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3 w-3" />
          </a>

          {/* CTA */}
          <div className="reveal flex flex-wrap gap-3">
            <Button href="/contact">Talk to us</Button>
            <Button href="/ecosystems" variant="ghost">
              See how it works
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
