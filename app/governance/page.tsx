import type { Metadata } from "next";
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
import { Container, Section, SectionHeading } from "../components/ui";
import PageHero from "../components/PageHero";
import UseCaseScene, { type SceneSpec } from "../components/UseCaseScene";
import { LINKS } from "../lib/site";

export const metadata: Metadata = {
  title: "Governance",
  description:
    "Who stewards what: the Verana Foundation stewards the specs and the open-source software, the Verana Council governs and secures the live network and the ECS Ecosystem, independent builders ship products. Owned by no one.",
};

const PRIMARY = "var(--color-primary)";
const ACCENT = "var(--color-accent)";

// One scene: the separation of powers. Facts as already used on /ecosystems
// and the sister-properties list; everything deeper links out.
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

const BODIES = [
  {
    icon: faLandmark,
    name: "Verana Foundation",
    body: "The non-profit steward of the Verifiable Trust specifications and the open-source software. Membership, grants, and working groups live there.",
    href: LINKS.foundation,
    label: "veranafoundation.org",
  },
  {
    icon: faScaleBalanced,
    name: "Verana Council",
    body: "A neutral, non-profit Swiss association that governs and secures the live network, and the ECS Ecosystem (the identity baseline). Network governance and validator questions live there.",
    href: LINKS.council,
    label: "veranacouncil.org",
  },
  {
    icon: faCode,
    name: "Independent builders",
    body: "Anyone can build on the open protocol, without permission: run the software, join or create ecosystems, ship products and services.",
    href: "/software",
    label: "run the software",
    internal: true,
  },
];

export default function Governance() {
  return (
    <>
      <PageHero
        eyebrow="Governance"
        title="Who stewards what"
        intro="Verana is open, public infrastructure owned by no one. Its pieces have named stewards, with separated powers: no entity holds two roles."
      />

      <Section>
        <Container className="space-y-12">
          <div className="reveal mx-auto max-w-2xl">
            <UseCaseScene scene={STEWARDSHIP} index={20} />
          </div>

          <div className="reveal-stagger grid gap-4 md:grid-cols-3">
            {BODIES.map((b) => (
              <div key={b.name} className="card flex flex-col p-6">
                <FontAwesomeIcon icon={b.icon} className="h-5 w-5 text-primary" />
                <h2 className="display mt-3 text-lg text-ink">{b.name}</h2>
                <p className="mt-2 flex-1 text-sm text-muted">{b.body}</p>
                {b.internal ? (
                  <a
                    href={b.href}
                    className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-accent hover:underline"
                  >
                    {b.label}
                  </a>
                ) : (
                  <a
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-accent hover:underline"
                  >
                    {b.label}
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="h-3 w-3"
                    />
                  </a>
                )}
              </div>
            ))}
          </div>

          <p className="reveal text-sm text-muted">
            verana.io is the network and software site. Governance, membership,
            and program questions belong to the Foundation and the Council;
            this page only points the way.
          </p>
        </Container>
      </Section>
    </>
  );
}
