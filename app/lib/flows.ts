// The three connection flows (spec-v2 §3.3), rendered as static Mermaid
// sequence diagrams on /identity.

export type Flow = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  /** Mermaid sequence-diagram source (rendered by components/Mermaid). */
  mermaid: string;
};

export const FLOWS: Flow[] = [
  {
    id: "vua-vs",
    eyebrow: "Verifiable User Agent to Verifiable Service",
    title: "1. A person connects to a service",
    intro:
      "An AG-UI compatible frontend (a Verifiable User Agent) connects to an enterprise AI agent (a Verifiable Service). The frontend resolves the agent's DID, checks its ECS-Service and ECS-Org or ECS-Persona credentials and their issuers, and shows a Proof-of-Trust. After the user accepts, it opens a DIDComm session, presents an ECS-UserAgent credential (and optionally an ECS-Badge for the human), then the AG-UI session is bootstrapped over the DIDComm session.",
    mermaid: `sequenceDiagram
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
  VUA->>VS: bootstrap AG-UI session over DIDComm`,
  },
  {
    id: "vs-vs",
    eyebrow: "Verifiable Service to Verifiable Service",
    title: "2. A service connects to another service",
    intro:
      "An AI agent from Company A connects to an AI agent from Company B (both Verifiable Services). Each verifies the credentials the other presents in its DID Document (ECS-Service plus ECS-Org or ECS-Persona, as Linked Verifiable Presentations). If both agree, a DIDComm session starts and an A2A session is bootstrapped over it.",
    mermaid: `sequenceDiagram
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
  A->>B: bootstrap A2A session over DIDComm`,
  },
  {
    id: "vua-vua",
    eyebrow: "Verifiable User Agent to Verifiable User Agent",
    title: "3. Two people open a private connection",
    intro:
      "Alice and Bob use a chat application (each a Verifiable User Agent) and want a private peer-to-peer DIDComm connection. Alice shows a QR code, an out-of-band DIDComm invitation, that Bob scans. Once connected, both agents present an ECS-UserAgent credential, and each verifies through the public registry that the credential's issuer is accredited, so each knows the other is a legitimate user agent. They can then optionally share more credentials over the channel.",
    mermaid: `sequenceDiagram
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
  Alice->>Bob: optionally share more credentials, then chat`,
  },
];
