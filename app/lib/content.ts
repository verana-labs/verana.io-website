// Shared content data so the Home page and the dedicated pages stay in sync.
// Copy rule: no em-dashes in rendered strings (use commas, parentheses, or a
// spaced hyphen).

export const HERO = {
  eyebrow: "OPEN · PUBLIC · NEUTRAL",
  headline: "The Open Trust Infrastructure for the Verifiable Internet",
  subhead:
    "Build sovereign trust ecosystems on open standards (W3C Verifiable Credentials and DIDs, DIDComm), or join existing ones. Attach credentials to your services and AI agents, and make them identifiable, verifiable, and discoverable.",
};

export type ThreePart = {
  name: string;
  label: string;
  tone: "primary" | "accent" | "success";
  audience: string;
  body: string;
  signature?: string;
  href: string;
};

// The site's organizing spine: three concept pages, in reading order.
export const THREE_PARTS: ThreePart[] = [
  {
    name: "Trust Ecosystems",
    label: "Sovereign ecosystems",
    tone: "primary",
    audience: "for ecosystem builders and joiners",
    body: "Build ecosystems that issue and verify any credential, with your own schemas, governance framework, participants, and business model. Or join an existing one as an accredited issuer, verifier, or holder.",
    href: "/ecosystems",
  },
  {
    name: "Verifiable Trust",
    label: "Verifiable identity",
    tone: "accent",
    audience: "for services, AI agents, and their operators",
    body: "Identify any service and the organization or person that controls it, and verify it before you connect.",
    signature: "Verify first. Then connect.",
    href: "/identity",
  },
  {
    name: "The Trust Graph",
    label: "Discovery",
    tone: "success",
    audience: "for users, agents, and search",
    body: "Discover services and ecosystems by the credentials they hold, ranked by trust. A first-class surface for AI-agent discovery.",
    href: "/discovery",
  },
];

// The five Essential Credential Schemas, grouped by the role they identify.
export type Ecs = { name: string; role: string; body: string };

export const ECS: Ecs[] = [
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

// Pre-determined DIDs for the Resolve-a-DID widget (spec-v2 §2.3). All
// verified TRUSTED on the testnet resolver, except where noted: an untrusted
// entry is kept deliberately so visitors see what a failed proof looks like.
export type DemoDid = { label: string; did: string };

export const DEMO_DIDS: DemoDid[] = [
  {
    label: "Hologram organization service (2060)",
    did: "did:webvh:QmRhJBzLMF6L3REha9xFpLgxui9X5tFm4TDxHoEHpA8Kpr:organization.vs.hologram.zone",
  },
  {
    label: "University Student Hub (demo org)",
    did: "did:webvh:QmQpPvXGUWaontZ1Jcz1Mf8WvBLT4g2AZARb7uEjonyFiC:organization-vs.orchid-demos.demos.testnet.verana.network",
  },
  {
    label: "MOSIP Pilot Authority (org)",
    did: "did:webvh:QmUNEzd1z2TktGLNhQKYuhNp6ckq4xzetHD5oVdH2YD3PA:organization-vs.mosip.testnet.verana.network",
  },
  {
    label: "Inji Resident ID Issuer (service)",
    did: "did:web:inji-certify-vs.mosip.testnet.verana.network",
  },
  {
    label: "Inji Verify, Resident ID Verifier (service)",
    did: "did:web:inji-verify.mosip.testnet.verana.network:v1:verify",
  },
  {
    label: "ECS trust registry (currently fails verification)",
    did: "did:webvh:QmcTCdA8z7cs7BwCKyrrJrTTmvff3wmxSn7WUZtP2iAM7T:ecs-trust-registry.testnet.verana.network",
  },
];

// Business models of an ecosystem (spec-v2 §3.2).
export type BusinessModel = { title: string; body: string };

export const BUSINESS_MODELS: BusinessModel[] = [
  {
    title: "Onboarding and accreditation",
    body: "An applicant pays a validation fee to be accredited as an issuer, verifier, or grantor. Renewable each validity period.",
  },
  {
    title: "Pay-per-issuance",
    body: "An issuer pays a fee each time it issues a credential of a schema.",
  },
  {
    title: "Pay-per-verification",
    body: "A verifier pays a fee each time it verifies a credential, shared with the issuer and the rest of the tree.",
  },
];

/** The failures of online trust that Verana fixes (home "What Verana solves",
 *  spec-v2 decision 12). Tones map each solve to its part of the three-part
 *  spine: ecosystems = primary, identity = accent, discovery = success. */
export type Solve = {
  title: string;
  body: string;
  tone: "primary" | "accent" | "success";
};

export const SOLVES: Solve[] = [
  {
    title: "Verify each other",
    tone: "accent",
    body: "A service proves who operates it, and verifies who connects to it: humans, services, connected objects, and AI agents, all the same way.",
  },
  {
    title: "Manage trust dynamically",
    tone: "primary",
    body: "An ecosystem's issuers and verifiers are managed live on the public registry, with open standards: no static, closed lists to maintain and distribute.",
  },
  {
    title: "Attach any credential",
    tone: "accent",
    body: "A service publicly attaches credentials from any ecosystem: who operates it, its ISO certificate, its licenses. Anyone can check them.",
  },
  {
    title: "Connect without accounts",
    tone: "accent",
    body: "No more creating an account and pasting an API key just to wire two services together: a service or agent connects by presenting its verifiable credentials, with nothing to provision on the other side.",
  },
  {
    title: "Be found by what you prove",
    tone: "success",
    body: "No search engine can find \u201cthe Accounting Agent of Acme Corp\u201d. The Trust Graph indexes services by their credentials, so humans and AI agents discover each other by proof, not keywords.",
  },
];

// Use cases as concrete, named-actor narratives (spec-v2 §3.5), told through
// the same fictional universe as the worked examples on /ecosystems.
export type UseCase = {
  name: string;
  actors: string;
  /** what goes wrong today (used on /use-cases) */
  pain: string;
  /** the one-line result on Verana (used by the home teaser tiles) */
  outcome: string;
  story: string[];
  mechanics: { label: string; href: string }[];
};

export const USE_CASES: UseCase[] = [
  {
    name: "Governments",
    actors: "The Republic of Utopia, its Interior Ministry, civil registries, banks, telcos, and citizens.",
    pain: "National identity is siloed: every bank and agency re-verifies people from scratch, and the state has no neutral rail to let the private sector rely on its credentials.",
    outcome: "A reusable national ID: citizens prove who they are once, and every service can rely on it.",
    story: [
      "Utopia creates its own GovID Ecosystem on the public registry: it publishes its governance framework, defines the GovID credential schema, and accredits participants.",
      "The Interior Ministry, as issuer grantor, accredits the regional civil registries. They issue GovID credentials to citizens, who hold them in their own wallets.",
      "A citizen opens a bank account in minutes: the bank, an accredited verifier, checks the GovID against the registry in real time and pays a verification fee that flows up the accreditation tree.",
      "Everything runs on sovereign infrastructure Utopia hosts in its own jurisdiction: no SaaS, no vendor lock-in, and MOSIP-based national ID systems plug in directly. The accreditation tree scales to thousands of relying parties without bilateral integrations.",
    ],
    mechanics: [
      { label: "How ecosystems work", href: "/ecosystems" },
      { label: "How verification works", href: "/identity" },
    ],
  },
  {
    name: "Sectorial ecosystems",
    actors: "Acme Corp, its employees, its suppliers, and certification bodies; the same pattern serves health, transport, notaries, and any sector body.",
    pain: "Employee access, partner onboarding, and B2B trust all rest on accounts, PDFs, and claims nobody can verify. An ISO certificate is a logo on a slide.",
    outcome: "Diplomas, ISO certificates, and badges any partner can verify: health, transport, notaries, enterprise.",
    story: [
      "Acme registers its Main Organization service and identifies everything it runs: it issues ECS-Service credentials to its services and ECS-Badge credentials to its employees.",
      "A certification body accredited by an ISO ecosystem audits Acme and issues its ISO 9001 credential. The certification becomes provable, not asserted.",
      "Before ordering, Acme's systems verify the supplier's organization credential against the registry: B2B trust checked in real time, not assumed.",
      "The same rails serve every sector: health, transport, notaries, enterprises extended to their partners. Join an existing sector ecosystem as issuer or verifier, the fastest path to production, or govern your own.",
    ],
    mechanics: [
      { label: "The Acme worked example", href: "/ecosystems" },
      { label: "Discover verified partners", href: "/discovery" },
    ],
  },
  {
    name: "Connected objects (IoT)",
    actors: "A grid operator, its smart meters and control systems, and the utilities that read them.",
    pain: "Millions of devices authenticate with baked-in secrets. When one is compromised or spoofed, nothing distinguishes a genuine meter from a fake one.",
    outcome: "Devices that prove they are genuine before they connect to the network.",
    story: [
      "Each meter is a verifiable service: it holds an ECS-Service credential issued by the grid operator's organization service, anchored to the public registry.",
      "A utility's collector verifies each meter's credential chain before accepting readings: machine identity checked against the registry, not against a shared secret.",
      "Firmware services, control systems, and third-party maintenance tools are verified the same way: one mechanism for every machine actor.",
    ],
    mechanics: [
      { label: "How services are verified", href: "/identity" },
    ],
  },
  {
    name: "Agentic AI",
    actors: "Acme's Corporate AI Agent, its employees, and partner companies' agents.",
    pain: "AI agents act at machine speed with no provable identity: anything can claim to be the support agent of Bank X, and no action is attributable to a responsible party.",
    outcome: "AI agents that prove who operates them and who they act for, before they get access.",
    story: [
      "Acme's AI agent is itself a verifiable service: it holds an ECS-Service credential issued by Acme's organization service. The company visibly stands behind its agent.",
      "An employee connects: the agent verifies their ECS-Badge and their wallet's ECS-UserAgent against the registry before the first message. Verify first, then connect.",
      "The agent needs a logistics partner: it queries the Trust Graph for services holding the right credentials, trust-resolves the best match, and opens a verified A2A session with the partner's agent.",
      "Every action is attributable to a verified identity, over API and MCP: from uncontrolled automation to governed, auditable autonomy.",
    ],
    mechanics: [
      { label: "The connection flows", href: "/identity" },
      { label: "Agent discovery", href: "/discovery" },
    ],
  },
];
