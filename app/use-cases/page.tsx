import { buildMetadata } from "../lib/seo";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLandmark,
  faBuilding,
  faMicrochip,
  faRobot,
  faUsers,
  faTriangleExclamation,
  faCircleCheck,
  faArrowRightLong,
  faCertificate,
  faStamp,
  faUser,
  faMagnifyingGlass,
  faSitemap,
  faServer,
  faDatabase,
  faBolt,
  faTowerBroadcast,
  faGears,
  faScrewdriverWrench,
  faMobileScreen,
  faDiagramProject,
  faWrench,
  faGraduationCap,
  faAward,
  faLocationDot,
  faSimCard,
  faUserDoctor,
  faIdCard,
  faIdBadge,
  faCakeCandles,
  faNewspaper,
  faCar,
  faBoxesStacked,
  faSeedling,
  faRecycle,
  faFileShield,
  faTicket,
  faHouse,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Container, Section, SectionHeading } from "../components/ui";
import PageHero from "../components/PageHero";
import UseCaseScene, { type SceneSpec } from "../components/UseCaseScene";
import { USE_CASES } from "../lib/content";

export const metadata = buildMetadata({
  title: "Use cases",
  description:
    "One trust infrastructure, many entry points: governments, sectorial ecosystems (health, transport, notaries), connected objects (IoT), and agentic AI, told as concrete stories.",
  path: "/use-cases",
});

const ICONS = [faLandmark, faBuilding, faMicrochip, faRobot];

const PRIMARY = "var(--color-primary)";
const ACCENT = "var(--color-accent)";
const SUCCESS = "var(--color-success)";

// One mini-scene per use case (indexed 1:1 with USE_CASES in lib/content.ts;
// the numbered badges match the story steps rendered beside each scene).
const SCENES: SceneSpec[] = [
  // 01 Governments: a sovereign frame around Utopia's GovID tree.
  {
    aria: "Utopia's GovID ecosystem: the Interior Ministry accredits civil registries, registries issue GovID credentials to citizens, and a bank verifies a citizen's GovID in real time, paying a fee that flows up the tree, all inside Utopia's sovereign infrastructure.",
    band: { x: 14, y: 10, w: 392, h: 316, label: "SOVEREIGN INFRASTRUCTURE · UTOPIA", lx: 30, ly: 30 },
    nodes: [
      { id: "eco", x: 210, y: 64, r: 18, lit: true, icon: faLandmark, color: PRIMARY, label: "GovID Ecosystem", sub: "Republic of Utopia" },
      { id: "ministry", x: 105, y: 150, icon: faCertificate, color: PRIMARY, label: "Interior Ministry", sub: "issuer grantor" },
      { id: "registries", x: 105, y: 240, icon: faStamp, color: ACCENT, label: "Civil registries" },
      { id: "citizen", x: 210, y: 300, icon: faUser, color: SUCCESS, label: "Citizen", sub: "GovID in wallet" },
      { id: "bank", x: 315, y: 240, icon: faMagnifyingGlass, color: ACCENT, label: "Bank", sub: "verifier" },
    ],
    edges: [
      { from: "eco", to: "ministry", kind: "structural", arrow: true },
      { from: "ministry", to: "registries", kind: "structural", arrow: true, pill: { label: "accredits", x: 105, y: 208 } },
      { from: "registries", to: "citizen", kind: "structural", arrow: true, pill: { label: "issues GovID", x: 105, y: 284 } },
      { fromPt: [228, 293], toPt: [301, 251], kind: "verify", pill: { label: "presents", x: 272, y: 258 } },
      { path: "M 315,220 C 345,150 300,95 232,72", kind: "fee", pill: { label: "verification fee", x: 330, y: 140 } },
    ],
    badges: [
      { x: 223, y: 51, kind: "coin" },
      { x: 118, y: 137, kind: "coin" },
      { x: 223, y: 287, kind: "check" },
    ],
    steps: [
      { n: 1, x: 243, y: 44 },
      { n: 2, x: 72, y: 195 },
      { n: 3, x: 352, y: 220 },
      { n: 4, x: 388, y: 28 },
    ],
  },
  // 02 Enterprise: hub-and-spoke around Acme.
  {
    aria: "Acme Corp's organization service issues ECS-Service credentials to its services and ECS-Badge credentials to its employees; an accredited certification body issues Acme's ISO 9001 credential; Acme verifies a supplier's organization credential before ordering.",
    nodes: [
      { id: "iso", x: 80, y: 52, icon: faSitemap, color: PRIMARY, label: "ISO Ecosystem", sub: "root" },
      { id: "cert", x: 80, y: 150, icon: faStamp, color: ACCENT, label: "Certification body", sub: "accredited issuer" },
      { id: "acme", x: 225, y: 150, r: 18, lit: true, icon: faBuilding, color: ACCENT, label: "Acme Corp", sub: "organization service" },
      { id: "employees", x: 145, y: 282, icon: faUsers, color: SUCCESS, label: "Employees", sub: "ECS-Badge holders" },
      { id: "services", x: 305, y: 282, icon: faServer, color: ACCENT, label: "Acme services", sub: "ECS-Service" },
      { id: "supplier", x: 350, y: 90, icon: faBuilding, color: ACCENT, label: "Supplier", sub: "org credential" },
    ],
    edges: [
      { from: "iso", to: "cert", kind: "structural", arrow: true },
      { from: "cert", to: "acme", kind: "structural", arrow: true, pill: { label: "issues ISO 9001", x: 152, y: 138 } },
      { from: "acme", to: "employees", kind: "structural", arrow: true, pill: { label: "issues ECS-Badge", x: 172, y: 228 } },
      { from: "acme", to: "services", kind: "structural", arrow: true, pill: { label: "issues ECS-Service", x: 280, y: 228 } },
      { fromPt: [337, 102], toPt: [241, 136], kind: "verify", pill: { label: "presents", x: 283, y: 134 } },
    ],
    badges: [{ x: 363, y: 77, kind: "check" }],
    steps: [
      { n: 1, x: 256, y: 126 },
      { n: 2, x: 118, y: 120 },
      { n: 3, x: 300, y: 68 },
      { n: 4, x: 28, y: 340 },
    ],
    texts: [
      { x: 40, y: 340, text: "same rails: diplomas · certifications · reusable KYC/KYB", anchor: "start" },
    ],
  },
  // 03 IoT: the fleet rail; the impostor stays out.
  {
    aria: "Each smart meter holds an ECS-Service credential issued by the grid operator's organization service, anchored on the public registry; the utility's collector verifies each meter's credential chain before accepting readings, an uncredentialed meter stays unverified; firmware, control, and maintenance services are verified the same way.",
    nodes: [
      { id: "vpr", x: 75, y: 52, icon: faDatabase, color: PRIMARY, label: "Public registry", sub: "VPR" },
      { id: "operator", x: 255, y: 52, r: 18, lit: true, icon: faBolt, color: ACCENT, label: "Grid operator", sub: "organization service" },
      { id: "m1", x: 90, y: 180, r: 13, icon: faMicrochip, color: ACCENT },
      { id: "m2", x: 170, y: 180, r: 13, icon: faMicrochip, color: ACCENT },
      { id: "m3", x: 250, y: 180, r: 13, icon: faMicrochip, color: ACCENT },
      { id: "impostor", x: 330, y: 180, r: 13, dashed: true, icon: faMicrochip, color: ACCENT, sub: "no credential" },
      { id: "collector", x: 170, y: 300, icon: faTowerBroadcast, color: ACCENT, label: "Utility collector", sub: "verifier" },
      { id: "control", x: 385, y: 258, r: 12, icon: faGears, color: "var(--color-muted)", sub: "control" },
      { id: "maintenance", x: 385, y: 312, r: 12, icon: faScrewdriverWrench, color: "var(--color-muted)", sub: "maintenance" },
    ],
    edges: [
      { from: "operator", to: "m1", kind: "structural", arrow: true },
      { from: "operator", to: "m2", kind: "structural", arrow: true, pill: { label: "issues ECS-Service", x: 255, y: 122 } },
      { from: "operator", to: "m3", kind: "structural", arrow: true },
      { from: "operator", to: "vpr", kind: "structuralDashed", pill: { label: "anchored", x: 165, y: 52 } },
      { fromPt: [90, 196], to: "collector", kind: "verify" },
      { fromPt: [170, 196], to: "collector", kind: "verify", pill: { label: "presents", x: 120, y: 250 } },
      { fromPt: [250, 196], to: "collector", kind: "verify" },
      { path: "M 156,288 C 60,240 55,120 72,70", kind: "fee", pill: { label: "checks chain", x: 56, y: 168 } },
      { from: "control", to: "collector", kind: "thin" },
      { from: "maintenance", to: "collector", kind: "thin" },
    ],
    badges: [
      { x: 101, y: 169, kind: "check" },
      { x: 181, y: 169, kind: "check" },
      { x: 261, y: 169, kind: "check" },
      { x: 341, y: 169, kind: "excluded" },
    ],
    steps: [
      { n: 1, x: 308, y: 84 },
      { n: 2, x: 78, y: 264 },
      { n: 3, x: 350, y: 285 },
    ],
    texts: [{ x: 170, y: 212, text: "Smart meters", strong: true }],
  },
  // 04 Agentic AI: the duplex around the corporate agent.
  {
    aria: "Acme's corporate AI agent holds an ECS-Service credential issued by Acme's organization service; it verifies an employee's ECS-Badge and their wallet's ECS-UserAgent before the first message; it discovers a logistics partner through the Trust Graph and opens a verified agent-to-agent session; every action is attributable, over API and MCP.",
    nodes: [
      { id: "org", x: 210, y: 48, icon: faBuilding, color: ACCENT, label: "Acme Corp", sub: "organization service" },
      { id: "agent", x: 210, y: 170, r: 18, lit: true, icon: faRobot, color: ACCENT, label: "Corporate AI Agent", sub: "verifiable service" },
      { id: "employee", x: 75, y: 150, icon: faUser, color: SUCCESS, label: "Employee", sub: "ECS-Badge" },
      { id: "wallet", x: 75, y: 255, icon: faMobileScreen, color: ACCENT, label: "Wallet", sub: "ECS-UserAgent" },
      { id: "graph", x: 345, y: 110, icon: faDiagramProject, color: SUCCESS, label: "Trust Graph", sub: "discovery" },
      { id: "partner", x: 345, y: 255, icon: faRobot, color: ACCENT, label: "Partner agent", sub: "logistics" },
    ],
    edges: [
      { from: "org", to: "agent", kind: "structural", arrow: true, pill: { label: "issues ECS-Service", x: 210, y: 108 } },
      { from: "employee", to: "agent", kind: "verify" },
      { from: "wallet", to: "agent", kind: "verify" },
      { from: "agent", to: "graph", kind: "query", pill: { label: "trust-resolve", x: 264, y: 152 } },
      { from: "agent", to: "partner", kind: "session", pill: { label: "A2A session", x: 287, y: 226 } },
    ],
    pills: [
      { label: "presents", x: 126, y: 214, color: SUCCESS },
      { label: "API", x: 330, y: 340, color: ACCENT },
      { label: "MCP", x: 378, y: 340, color: ACCENT },
    ],
    badges: [
      { x: 88, y: 137, kind: "check" },
      { x: 358, y: 242, kind: "check" },
    ],
    steps: [
      { n: 1, x: 292, y: 80 },
      { n: 2, x: 128, y: 188 },
      { n: 3, x: 300, y: 178 },
      { n: 4, x: 28, y: 340 },
    ],
    texts: [{ x: 40, y: 340, text: "every action attributable", anchor: "start" }],
  },
];

// Concrete ecosystems anyone could stand up on the public registry: a name
// and the credentials it would issue.
const ECOSYSTEM_IDEAS = [
  { icon: faWrench, name: "Trades Certification", creds: "plumbers · electricians · gas fitters" },
  { icon: faGraduationCap, name: "University Ecosystem", creds: "diplomas · transcripts" },
  { icon: faAward, name: "Micro-credentials", creds: "course badges · English C1" },
  { icon: faMicrochip, name: "Device Certification", creds: "device models · safety marks" },
  { icon: faRobot, name: "AI Agent Certification", creds: "agent compliance · ISO 42001" },
  { icon: faLocationDot, name: "Address Certification", creds: "proof of residence · delivery" },
  { icon: faSimCard, name: "Mobile Number (SIM)", creds: "telco-certified numbers" },
  { icon: faUserDoctor, name: "Professional Licensing", creds: "doctors · lawyers · architects" },
  { icon: faIdCard, name: "Reusable KYC", creds: "bank-grade identity, reused" },
  { icon: faIdBadge, name: "Employee Badges", creds: "staff identity · roles" },
  { icon: faCakeCandles, name: "Age Verification", creds: "18+ proofs, nothing more" },
  { icon: faNewspaper, name: "Press Credentials", creds: "accredited journalists" },
  { icon: faCar, name: "Driving & Mobility", creds: "driving licenses · vehicle titles" },
  { icon: faBuilding, name: "Business Registry (KYB)", creds: "company existence · directors" },
  { icon: faBoxesStacked, name: "Supply Chain & Customs", creds: "certificates of origin · AEO" },
  { icon: faSeedling, name: "Food Origin & Safety", creds: "organic · protected origin" },
  { icon: faRecycle, name: "Sustainability (ESG)", creds: "carbon footprint · ISO 14001" },
  { icon: faFileShield, name: "Insurance Certificates", creds: "liability proofs for contractors" },
  { icon: faTicket, name: "Ticketing & Access", creds: "verified tickets · venue access" },
  { icon: faHouse, name: "Real Estate & Tenancy", creds: "tenancy references · titles" },
];

export default function UseCases() {
  return (
    <>
      <PageHero
        eyebrow="Use cases"
        title="One trust infrastructure, many entry points"
        intro="Overlapping lenses, not silos. Companies recognize themselves in one or several; a bank doing reusable KYC today runs AI agents tomorrow. Each lens below is a concrete story, told through the same actors as the worked examples."
      />

      <Section>
        <Container className="space-y-10">
          <p className="reveal text-sm text-muted">
            Every scene follows one arrow convention: accreditation and
            issuance point at who receives them (grantor to issuer, issuer to
            holder), and holders present their credentials to verifiers. Green
            arrows are verified interactions and fees; the numbers in each
            diagram match the steps beside it.
          </p>

          {USE_CASES.map((u, i) => (
            <article key={u.name} className="card reveal overflow-hidden">
              {/* header band */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-rule bg-surface-2 px-5 py-3.5">
                <span className="font-mono text-[11px] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <FontAwesomeIcon icon={ICONS[i]} className="h-4 w-4 text-primary" />
                <h2 className="display text-xl text-ink sm:text-2xl">{u.name}</h2>
                <div className="ml-auto hidden items-center gap-3 sm:flex">
                  {[
                    { color: "var(--color-primary)", label: "ecosystem · authority" },
                    { color: "var(--color-accent)", label: "service · agent" },
                    { color: "var(--color-success)", label: "person · verified" },
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

              <div className="p-5 sm:p-6">
                {/* cast */}
                <p className="flex items-start gap-2 font-mono text-[11px] text-muted">
                  <FontAwesomeIcon icon={faUsers} className="mt-0.5 h-3 w-3 shrink-0" />
                  {u.actors}
                </p>

                {/* today: the before-state, dashed */}
                <div className="mt-4 flex flex-col gap-1.5 rounded-xl border border-dashed border-rule bg-surface-2 px-4 py-3 sm:flex-row sm:items-center sm:gap-3">
                  <span className="eyebrow flex shrink-0 items-center gap-2">
                    <FontAwesomeIcon icon={faTriangleExclamation} className="h-3 w-3" />
                    Today
                  </span>
                  <p className="text-sm text-muted">{u.pain}</p>
                </div>

                {/* the scene + the steps */}
                <div className="mt-5 grid gap-x-8 gap-y-5 lg:grid-cols-[1.15fr_1fr] lg:items-center">
                  <UseCaseScene scene={SCENES[i]} index={i} />
                  <div>
                    <span className="eyebrow flex items-center gap-2">
                      <FontAwesomeIcon icon={faCircleCheck} className="h-3 w-3" />
                      On Verana
                    </span>
                    <ol className="reveal-stagger mt-3 space-y-3">
                      {u.story.map((s, j) => (
                        <li key={j} className="flex gap-3 text-sm text-muted">
                          <span
                            className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border font-mono text-[10px]"
                            style={{
                              borderColor:
                                "color-mix(in srgb, var(--color-accent) 55%, transparent)",
                              color: "var(--color-accent)",
                            }}
                          >
                            {j + 1}
                          </span>
                          {s}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>

              {/* footer: mechanics deep links */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-rule px-5 py-3">
                {u.mechanics.map((m) => (
                  <Link
                    key={m.href + m.label}
                    href={m.href}
                    className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
                  >
                    {m.label}
                    <FontAwesomeIcon icon={faArrowRightLong} className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </article>
          ))}

          {/* ecosystem ideas: the variety wall */}
          <div>
            <SectionHeading
              eyebrow="Ecosystem ideas"
              title="Ecosystems anyone can build"
              intro="Anyone can create an ecosystem on the public registry: define the credential schema, accredit issuers and verifiers, set the business model. A few of the many:"
            />
            <div className="reveal-stagger mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {ECOSYSTEM_IDEAS.map((e) => (
                <div key={e.name} className="card p-4">
                  <div className="flex items-center gap-2.5">
                    <FontAwesomeIcon
                      icon={e.icon}
                      className="h-4 w-4 shrink-0 text-primary"
                    />
                    <h3 className="text-sm font-semibold text-ink">{e.name}</h3>
                  </div>
                  <p className="mt-1.5 font-mono text-[11px] text-muted">
                    {e.creds}
                  </p>
                </div>
              ))}
              <Link
                href="/ecosystems"
                className="card group flex flex-col justify-center p-4 transition-colors hover:border-primary"
              >
                <div className="flex items-center gap-2.5">
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="h-4 w-4 shrink-0 text-accent"
                  />
                  <h3 className="text-sm font-semibold text-ink">...and yours</h3>
                </div>
                <p className="mt-1.5 inline-flex items-center gap-2 font-mono text-[11px] text-accent">
                  build an ecosystem
                  <FontAwesomeIcon
                    icon={faArrowRightLong}
                    className="h-3 w-3 transition-transform group-hover:translate-x-1"
                  />
                </p>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-rule bg-surface">
        <Container className="text-center">
          <p className="display reveal mx-auto max-w-3xl text-2xl sm:text-3xl text-ink">
            Whatever you need to trust, a person, an organization, a service, a
            device, or an AI agent, is verified the same way.
          </p>
        </Container>
      </Section>
    </>
  );
}
