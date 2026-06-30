// Shared content data so the Home page and the dedicated pages stay in sync.
// Copy rule: no em-dashes in rendered strings (use commas, parentheses, or a
// spaced hyphen).

export const HERO = {
  eyebrow: "OPEN · PUBLIC · NEUTRAL",
  headline: "The Open Trust Infrastructure for the Verifiable Internet",
  subhead:
    "Join and build sovereign digital trust ecosystems. Attach verifiable credentials to your services and agents, and make them identifiable, verifiable, and discoverable.",
};

export type ThreePart = {
  name: string;
  label: string;
  tone: "primary" | "accent" | "success";
  layer: string;
  body: string;
  signature?: string;
  href: string;
};

export const THREE_PARTS: ThreePart[] = [
  {
    name: "Trust Ecosystems",
    label: "Sovereign ecosystems",
    tone: "primary",
    layer: "the VPR / credential layer",
    body: "Join or build ecosystems that issue and verify any credential. Each ecosystem self-defines its schemas, governance framework, participants (issuers, verifiers, holders), and business model.",
    href: "/how-it-works",
  },
  {
    name: "Verifiable Trust",
    label: "Verifiable identity",
    tone: "accent",
    layer: "the protocol",
    body: "Identify any service and the organization or person that controls it, and verify it before you connect.",
    signature: "Verify first. Then connect.",
    href: "/how-it-works",
  },
  {
    name: "The Trust Graph",
    label: "Discovery",
    tone: "success",
    layer: "discovery",
    body: "Discover services and ecosystems by the credentials they hold, ranked by trust. A first-class surface for AI-agent discovery.",
    href: "/software",
  },
];

export type Pillar = { title: string; body: string };

export const PILLARS: Pillar[] = [
  {
    title: "The only open, public, neutral trust infrastructure",
    body: "Not a vendor stack, not a consortium chain you must be admitted to, not a closed identity silo. Public infrastructure, like DNS or the web. Owned by no one.",
  },
  {
    title: "Sovereign by design, host it anywhere",
    body: "The software is open source (Apache 2.0) and a service can be deployed anywhere by its owner: your cloud, on-prem, or your own jurisdiction. Nothing is rented. The key difference from SaaS competitors.",
  },
  {
    title: "Verifiable Trust, not just credentials",
    body: "Credentials prove attributes. Verana composes them into Verifiable Trust: verify who you are dealing with, and that they are authorized, before the first interaction.",
  },
  {
    title: "Join or build a trust ecosystem",
    body: "Join an existing ecosystem as an accredited issuer, verifier, or holder, or stand up your own with your own schemas, governance, and accreditation.",
  },
  {
    title: "The Trust Graph",
    body: "The public registry is indexed into an open, trust-typed graph you can query: discover services and ecosystems by the credentials they hold, ranked by trust.",
  },
  {
    title: "Agentic-native",
    body: "Built for the agentic web. Every service is a resolvable DID exposing DIDComm and, optionally, MCP and A2A endpoints. API and MCP on everything you run.",
  },
  {
    title: "Production-grade and open source",
    body: "Real reference implementations (Apache 2.0), a running network (testnet to mainnet), and live demos. Not a whitepaper.",
  },
];

export type Software = {
  name: string;
  what: string;
  interfaces: string;
  speaks: string;
  module: string;
};

export const SOFTWARE: Software[] = [
  {
    name: "Service Wallet",
    what: "A verifiable-service runtime, the service's own wallet: it holds the service's credentials and issues, verifies, and runs the verifiable service. EUDIW-compatible, agentic.",
    interfaces: "API · MCP",
    speaks: "VC · DIDComm · OID4VC/EUDIW",
    module: "VS-Agent",
  },
  {
    name: "Mobile Wallet SDK",
    what: "Build wallets for human users to hold, present, and manage their own credentials. Embed a Verana pre-integrated holder wallet in your own mobile app.",
    interfaces: "SDK (iOS / Android)",
    speaks: "DIDComm · OID4VC",
    module: "Mobile SDK",
  },
  {
    name: "Ecosystem Management",
    what: "Search and join existing ecosystems (onboard as an accredited issuer, verifier, or holder), or stand up and run your own trust ecosystem: schemas, governance, accreditation and onboarding, and the built-in business model.",
    interfaces: "API · Frontend · MCP",
    speaks: "TRQP · VC · ECS/EGF",
    module: "Frontend + VPR",
  },
  {
    name: "Trust Graph",
    what: "Query the open registry: discover services and ecosystems by the credentials they present, scoped to an ecosystem, ranked by trust.",
    interfaces: "API · MCP",
    speaks: "VC · TRQP",
    module: "Trust Graph / Indexer",
  },
];

export type UseCase = {
  name: string;
  body: string;
  software: string;
};

export const USE_CASES: UseCase[] = [
  {
    name: "Governments",
    body: "Issue a national govID: create your ecosystem, define the credential, accredit issuers. Run public trust registries, EUDIW/eIDAS-style issuance and verification, MOSIP integration. Sovereign public infrastructure you host in your own jurisdiction, with no SaaS and no vendor lock-in. Banks, telcos, and agencies join your ecosystem as accredited issuers and verifiers.",
    software: "Ecosystem Management, Service Wallet, Mobile Wallet SDK",
  },
  {
    name: "Enterprise & human credentials",
    body: "Issue employee badges, diplomas, professional certifications, reusable KYC/KYB, and any human credential. Authenticate people, partners, and customers. Verify the organization you transact with. Or simply join an existing ecosystem (for example a government KYC ecosystem) as an accredited issuer or verifier, the fastest path to production. Credentials become portable, controlled, reusable, and valuable.",
    software: "Service Wallet, Ecosystem Management, Mobile Wallet SDK",
  },
  {
    name: "Connected objects (IoT)",
    body: "Devices and systems (energy-grid control, smart home, and more) get verifiable identities and act under verifiable authority. Machine identity and role or capability access anchored to a public registry, verifiable like any service.",
    software: "Service Wallet, VPR",
  },
  {
    name: "Agentic AI",
    body: "AI agents as first-class actors with verifiable identities comparable to a human's. They authenticate, issue, verify, hold and present credentials, join ecosystems, act under delegated and verifiable authority, and discover trusted services via the Trust Graph, all over API and MCP. Every action is attributable to a verified identity: from uncontrolled automation to the foundation for governed, auditable autonomy.",
    software: "Trust Graph, Service Wallet, Mobile Wallet SDK",
  },
];
