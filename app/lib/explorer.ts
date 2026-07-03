// Fixture data for the ecosystem explorer (spec-v2 §3.2): two worked
// examples. "Acme Corp" joins ecosystems (the ECS identity baseline plus an
// ISO certification ecosystem); the "Republic of Andora" builds its own
// (a GovID domain ecosystem with an accreditation tree and business model).

export type NodeKind = "ecosystem" | "service" | "agent" | "people" | "issuer";

export type ExplorerNode = {
  id: string;
  label: string;
  sub?: string;
  kind: NodeKind;
  x: number;
  y: number;
  detail: string[];
};

export type EdgeRole = "holder" | "issuer" | "verifier" | "accredits" | "controls";

export type ExplorerEdge = {
  id: string;
  from: string;
  to: string;
  role: EdgeRole;
  label: string;
  caption: string;
  /** Skip the label pill (edge stays clickable); avoids overlaps in fan-outs. */
  hideLabel?: boolean;
};

export type ExplorerStep = {
  focus: string[]; // node and edge ids highlighted at this step
  caption: string;
};

export type ExplorerFixture = {
  id: string;
  name: string;
  intro: string;
  nodes: ExplorerNode[];
  edges: ExplorerEdge[];
  steps: ExplorerStep[];
};

export const ACME: ExplorerFixture = {
  id: "acme",
  name: "Acme Corp",
  intro:
    "A corporation that joins ecosystems: the ECS Ecosystem identifies everyone, and an ISO certification ecosystem adds a provable domain claim on top.",
  nodes: [
    {
      id: "ecs",
      label: "ECS Ecosystem",
      sub: "identity baseline",
      kind: "ecosystem",
      x: 160,
      y: 80,
      detail: [
        "Root of the five Essential Credential Schemas (ECS).",
        "Every other ecosystem relies on it to identify and mutually verify the parties of an interaction.",
        "Governed by the Verana Council.",
      ],
    },
    {
      id: "iso",
      label: "ISO Certification Ecosystem",
      sub: "domain ecosystem",
      kind: "ecosystem",
      x: 700,
      y: 80,
      detail: [
        "Root of the ISO 9001 Credential schema (a domain schema, not an ECS).",
        "Accredits three independent certification bodies as issuers.",
        "Anyone can verify an ISO 9001 claim against the public registry instead of trusting a logo on a web page.",
      ],
    },
    {
      id: "cert1",
      label: "CertBody A",
      sub: "accredited issuer",
      kind: "issuer",
      x: 590,
      y: 195,
      detail: [
        "Independent certification body, accredited by the ISO Certification Ecosystem to issue ISO 9001 credentials.",
      ],
    },
    {
      id: "cert2",
      label: "CertBody B",
      sub: "accredited issuer",
      kind: "issuer",
      x: 705,
      y: 195,
      detail: [
        "Independent certification body, accredited by the ISO Certification Ecosystem to issue ISO 9001 credentials.",
        "Issued Acme Corp's ISO 9001 credential after auditing it.",
      ],
    },
    {
      id: "cert3",
      label: "CertBody C",
      sub: "accredited issuer",
      kind: "issuer",
      x: 820,
      y: 195,
      detail: [
        "Independent certification body, accredited by the ISO Certification Ecosystem to issue ISO 9001 credentials.",
      ],
    },
    {
      id: "org",
      label: "Main Organization service",
      sub: "Acme Corp",
      kind: "service",
      x: 400,
      y: 240,
      detail: [
        "Holder of ECS-Organization: identifies Acme Corp, the legal organization.",
        "Holder of ECS-Service: identifies this service itself.",
        "Issuer of ECS-Service: identifies Acme's other services.",
        "Issuer of ECS-Badge: identifies Acme's employees.",
        "Holder of an ISO 9001 Credential, issued by CertBody B.",
        "All ECS schemas come from the ECS Ecosystem.",
      ],
    },
    {
      id: "support",
      label: "Customer Support service",
      sub: "holder only",
      kind: "service",
      x: 160,
      y: 430,
      detail: [
        "Holder of ECS-Service, issued by the Main Organization service.",
        "It is identified and verifiable, but it issues and verifies nothing itself.",
      ],
    },
    {
      id: "agent",
      label: "Corporate AI Agent",
      sub: "holder + verifier",
      kind: "agent",
      x: 430,
      y: 445,
      detail: [
        "Holder of ECS-Service, issued by the Main Organization service.",
        "Verifier of ECS-Badge: before an employee can use the agent, it checks their badge against the registry.",
        "Verifier of ECS-UserAgent: it also checks that the software connecting to it is a genuine user agent.",
      ],
    },
    {
      id: "users",
      label: "Employees",
      sub: "badge holders",
      kind: "people",
      x: 720,
      y: 430,
      detail: [
        "Each person holds an ECS-Badge, issued by the Main Organization service.",
        "The software they connect with (their Verifiable User Agent) holds an ECS-UserAgent credential, issued by its product line.",
      ],
    },
  ],
  edges: [
    {
      id: "e-ecs-org",
      from: "ecs",
      to: "org",
      role: "holder",
      label: "ECS-Org + ECS-Service",
      caption:
        "Acme's Main Organization service holds ECS-Organization and ECS-Service credentials. Their schemas come from the ECS Ecosystem, so anyone can verify who Acme is.",
    },
    {
      id: "e-org-support",
      from: "org",
      to: "support",
      role: "issuer",
      label: "issues ECS-Service",
      caption:
        "Acme identifies its own services: the Main Organization service issues an ECS-Service credential to the Customer Support service.",
    },
    {
      id: "e-org-agent",
      from: "org",
      to: "agent",
      role: "issuer",
      label: "issues ECS-Service",
      caption:
        "The Corporate AI Agent is identified the same way: an ECS-Service credential issued by the Main Organization service. The organization stands behind its agent.",
    },
    {
      id: "e-org-users",
      from: "org",
      to: "users",
      role: "issuer",
      label: "issues ECS-Badge",
      caption:
        "Acme identifies its people: the Main Organization service issues ECS-Badge credentials to employees.",
    },
    {
      id: "e-agent-users",
      from: "agent",
      to: "users",
      role: "verifier",
      label: "verifies Badge + UserAgent",
      caption:
        "Before an employee can talk to the Corporate AI Agent, the agent verifies their ECS-Badge and their software's ECS-UserAgent against the registry. Verify first, then connect.",
    },
    {
      id: "e-iso-cert1",
      from: "iso",
      to: "cert1",
      role: "accredits",
      label: "accredits issuer",
      hideLabel: true,
      caption:
        "The ISO Certification Ecosystem accredits three independent certification bodies as issuers of the ISO 9001 credential.",
    },
    {
      id: "e-iso-cert2",
      from: "iso",
      to: "cert2",
      role: "accredits",
      label: "accredits issuer",
      caption:
        "The ISO Certification Ecosystem accredits three independent certification bodies as issuers of the ISO 9001 credential.",
    },
    {
      id: "e-iso-cert3",
      from: "iso",
      to: "cert3",
      role: "accredits",
      label: "accredits issuer",
      hideLabel: true,
      caption:
        "The ISO Certification Ecosystem accredits three independent certification bodies as issuers of the ISO 9001 credential.",
    },
    {
      id: "e-cert2-org",
      from: "cert2",
      to: "org",
      role: "issuer",
      label: "issues ISO 9001",
      caption:
        "CertBody B audited Acme and issued its ISO 9001 credential. Acme now proves its certification with a verifiable credential from an accredited body.",
    },
  ],
  steps: [
    {
      focus: ["org", "e-ecs-org", "ecs"],
      caption:
        "Acme Corp registers its Main Organization service. It holds ECS-Organization and ECS-Service credentials, so anyone can verify who Acme is and who stands behind the service.",
    },
    {
      focus: ["org", "support", "agent", "e-org-support", "e-org-agent"],
      caption:
        "Acme identifies its own actors: the Main Organization service issues ECS-Service credentials to the Customer Support service and the Corporate AI Agent.",
    },
    {
      focus: ["org", "users", "e-org-users"],
      caption:
        "Acme identifies its people too: employees receive ECS-Badge credentials from the Main Organization service.",
    },
    {
      focus: ["agent", "users", "e-agent-users"],
      caption:
        "Services differ by role, not kind: Customer Support only holds, while the AI Agent also verifies. It checks each employee's badge and their software's ECS-UserAgent before any conversation starts.",
    },
    {
      focus: ["iso", "cert1", "cert2", "cert3", "e-iso-cert1", "e-iso-cert2", "e-iso-cert3"],
      caption:
        "A second, domain ecosystem: the ISO Certification Ecosystem defines the ISO 9001 credential schema and accredits three independent certification bodies as issuers.",
    },
    {
      focus: ["cert2", "org", "e-cert2-org"],
      caption:
        "One of them, CertBody B, audits Acme and issues its ISO 9001 credential. The certification is now provable: identity from the ECS Ecosystem, the domain claim from the ISO ecosystem.",
    },
    {
      focus: ["ecs", "iso", "org"],
      caption:
        "One participant, several ecosystems: Acme is a holder, issuer, and verifier in the ECS Ecosystem, and a holder in the ISO Certification Ecosystem, in any combination it needs.",
    },
  ],
};

export const ANDORA: ExplorerFixture = {
  id: "andora",
  name: "Republic of Andora",
  intro:
    "A government that builds its own ecosystem: it publishes a governance framework, defines a GovID credential schema, and accredits who may issue and verify it.",
  nodes: [
    {
      id: "ecs",
      label: "ECS Ecosystem",
      sub: "identity baseline",
      kind: "ecosystem",
      x: 130,
      y: 80,
      detail: [
        "The shared identity baseline. Andora's registry service holds ECS-Organization and ECS-Service credentials, like any other participant.",
      ],
    },
    {
      id: "andora",
      label: "Andora registry service",
      sub: "controls the ecosystem",
      kind: "service",
      x: 130,
      y: 240,
      detail: [
        "The government's own verifiable service.",
        "Holder of ECS-Organization and ECS-Service (from the ECS Ecosystem).",
        "Controls the Andora GovID Ecosystem: publishes its governance framework and its credential schema.",
      ],
    },
    {
      id: "goveco",
      label: "Andora GovID Ecosystem",
      sub: "domain ecosystem",
      kind: "ecosystem",
      x: 460,
      y: 80,
      detail: [
        "Publishes the ecosystem governance framework (EGF).",
        "Defines the GovID credential schema (a domain schema, not an ECS).",
        "Sets who is accredited to issue and verify, through an accreditation tree.",
      ],
    },
    {
      id: "ministry",
      label: "Interior Ministry",
      sub: "issuer grantor",
      kind: "issuer",
      x: 460,
      y: 235,
      detail: [
        "The issuer grantor of the GovID schema: it accredits the regional civil registries that issue GovID credentials.",
      ],
    },
    {
      id: "reg1",
      label: "Civil Registry North",
      sub: "accredited issuer",
      kind: "issuer",
      x: 330,
      y: 370,
      detail: ["Accredited by the Interior Ministry to issue GovID credentials to citizens."],
    },
    {
      id: "reg2",
      label: "Civil Registry South",
      sub: "accredited issuer",
      kind: "issuer",
      x: 560,
      y: 370,
      detail: ["Accredited by the Interior Ministry to issue GovID credentials to citizens."],
    },
    {
      id: "bank",
      label: "Banks",
      sub: "accredited verifiers",
      kind: "service",
      x: 780,
      y: 235,
      detail: [
        "Accredited verifiers of the GovID credential.",
        "They pay a fee per verification, shared up the accreditation tree: the ecosystem's built-in business model.",
      ],
    },
    {
      id: "telco",
      label: "Telcos",
      sub: "accredited verifiers",
      kind: "service",
      x: 780,
      y: 370,
      detail: [
        "Accredited verifiers of the GovID credential, paying per verification like the banks.",
      ],
    },
    {
      id: "citizens",
      label: "Citizens",
      sub: "GovID holders",
      kind: "people",
      x: 460,
      y: 480,
      detail: [
        "Each citizen holds a GovID credential in their wallet and presents it wherever it is accepted: a reusable, verifiable identity.",
      ],
    },
  ],
  edges: [
    {
      id: "a-ecs-andora",
      from: "ecs",
      to: "andora",
      role: "holder",
      label: "ECS-Org + ECS-Service",
      caption:
        "Andora's registry service is itself identified through the ECS Ecosystem: the two credential layers work together.",
    },
    {
      id: "a-andora-goveco",
      from: "andora",
      to: "goveco",
      role: "controls",
      label: "controls",
      caption:
        "Andora controls its own ecosystem: it publishes the governance framework and defines the GovID credential schema.",
    },
    {
      id: "a-goveco-ministry",
      from: "goveco",
      to: "ministry",
      role: "accredits",
      label: "issuer grantor",
      caption:
        "The ecosystem delegates: the Interior Ministry is the issuer grantor, responsible for accrediting issuers.",
    },
    {
      id: "a-ministry-reg1",
      from: "ministry",
      to: "reg1",
      role: "accredits",
      label: "accredits issuer",
      hideLabel: true,
      caption:
        "The ministry accredits the regional civil registries as issuers of the GovID credential.",
    },
    {
      id: "a-ministry-reg2",
      from: "ministry",
      to: "reg2",
      role: "accredits",
      label: "accredits issuer",
      caption:
        "The ministry accredits the regional civil registries as issuers of the GovID credential.",
    },
    {
      id: "a-goveco-bank",
      from: "goveco",
      to: "bank",
      role: "accredits",
      label: "accredits verifier",
      caption:
        "Banks are accredited verifiers. Each verification is paid, and the fee is distributed up the tree: the ecosystem has a built-in business model.",
    },
    {
      id: "a-goveco-telco",
      from: "goveco",
      to: "telco",
      role: "accredits",
      label: "accredits verifier",
      caption:
        "Telcos are accredited verifiers too, paying per verification like the banks.",
    },
    {
      id: "a-reg1-citizens",
      from: "reg1",
      to: "citizens",
      role: "issuer",
      label: "issues GovID",
      hideLabel: true,
      caption:
        "Civil registries issue GovID credentials to citizens, who hold them in their own wallets.",
    },
    {
      id: "a-reg2-citizens",
      from: "reg2",
      to: "citizens",
      role: "issuer",
      label: "issues GovID",
      caption:
        "Civil registries issue GovID credentials to citizens, who hold them in their own wallets.",
    },
    {
      id: "a-bank-citizens",
      from: "bank",
      to: "citizens",
      role: "verifier",
      label: "verifies GovID",
      caption:
        "A citizen opens a bank account with their GovID. The bank verifies the credential against the registry in real time, and pays a verification fee that flows up the tree.",
    },
  ],
  steps: [
    {
      focus: ["ecs", "andora", "a-ecs-andora"],
      caption:
        "Andora starts as a participant like any other: its registry service holds ECS-Organization and ECS-Service credentials from the identity baseline.",
    },
    {
      focus: ["andora", "goveco", "a-andora-goveco"],
      caption:
        "Then it builds: Andora creates the GovID Ecosystem, publishing its governance framework and defining the GovID credential schema.",
    },
    {
      focus: ["goveco", "ministry", "a-goveco-ministry"],
      caption:
        "The ecosystem delegates through an accreditation tree: the Interior Ministry becomes the issuer grantor.",
    },
    {
      focus: ["ministry", "reg1", "reg2", "a-ministry-reg1", "a-ministry-reg2"],
      caption:
        "The ministry accredits the regional civil registries as issuers of the GovID credential.",
    },
    {
      focus: ["goveco", "bank", "telco", "a-goveco-bank", "a-goveco-telco"],
      caption:
        "Banks and telcos join as accredited verifiers. They pay per verification: the business model is built into the ecosystem.",
    },
    {
      focus: ["reg1", "reg2", "citizens", "a-reg1-citizens", "a-reg2-citizens"],
      caption:
        "Citizens receive their GovID credentials and hold them in their own wallets: reusable, portable identity.",
    },
    {
      focus: ["bank", "citizens", "a-bank-citizens"],
      caption:
        "A citizen opens a bank account: the bank verifies the GovID against the registry in real time. Identity from the ECS layer, the domain claim from Andora's own schema.",
    },
  ],
};

export const EXPLORER_FIXTURES = [ACME, ANDORA];
