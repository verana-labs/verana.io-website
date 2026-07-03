// The three connection flows (spec-v2 §3.3), as step-through data for the
// FlowPlayer. Same facts as the v1 sequence diagrams, paced one message at a
// time with a plain-language caption per step.

export type FlowActor = { id: string; label: string };

export type FlowStep = {
  from: string;
  to: string;
  label: string;
  caption: string;
};

export type Flow = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  actors: FlowActor[];
  steps: FlowStep[];
};

export const FLOWS: Flow[] = [
  {
    id: "vua-vs",
    eyebrow: "Verifiable User Agent to Verifiable Service",
    title: "1. A person connects to a service",
    intro:
      "An AG-UI compatible frontend (a Verifiable User Agent) connects to an enterprise AI agent (a Verifiable Service). Both sides verify before anything else happens.",
    actors: [
      { id: "user", label: "User" },
      { id: "vua", label: "Frontend (VUA)" },
      { id: "vs", label: "AI Agent (VS)" },
      { id: "vpr", label: "Public Registry" },
    ],
    steps: [
      {
        from: "vua",
        to: "vs",
        label: "resolve DID, read DID Document",
        caption:
          "The frontend resolves the agent's DID and reads its DID Document: its endpoints and credentials are public.",
      },
      {
        from: "vs",
        to: "vua",
        label: "Linked VPs (ECS-Service + ECS-Org)",
        caption:
          "The agent presents its credentials as Linked Verifiable Presentations: one identifies the service, one the organization (or person) behind it.",
      },
      {
        from: "vua",
        to: "vpr",
        label: "trust resolution (TRQP)",
        caption:
          "The frontend now asks the public registry: are the issuers of these credentials accredited?",
      },
      {
        from: "vpr",
        to: "vua",
        label: "verified, recursive to the root",
        caption:
          "The registry answers, recursively up to the ecosystem root. The whole chain checks out.",
      },
      {
        from: "vua",
        to: "user",
        label: "show Proof-of-Trust",
        caption:
          "The user sees the Proof-of-Trust before the first message is exchanged: who the service is and who stands behind it.",
      },
      {
        from: "user",
        to: "vua",
        label: "accept",
        caption: "The user accepts. Only now does a connection open.",
      },
      {
        from: "vua",
        to: "vs",
        label: "open DIDComm session",
        caption:
          "A secure, peer-to-peer DIDComm session opens between the frontend and the agent.",
      },
      {
        from: "vs",
        to: "vua",
        label: "request ECS-UserAgent",
        caption:
          "Trust is mutual: the agent now asks the frontend to prove it is a genuine user agent.",
      },
      {
        from: "vua",
        to: "vs",
        label: "present ECS-UserAgent (+ ECS-Badge)",
        caption:
          "The frontend presents its ECS-UserAgent credential, and optionally an ECS-Badge identifying the human.",
      },
      {
        from: "vs",
        to: "vpr",
        label: "verify issuer accredited",
        caption:
          "The agent checks the registry: is the issuer of that ECS-UserAgent credential accredited?",
      },
      {
        from: "vpr",
        to: "vs",
        label: "verified, genuine VUA",
        caption: "Verified. Both parties now know exactly who they are talking to.",
      },
      {
        from: "vua",
        to: "vs",
        label: "bootstrap AG-UI over DIDComm",
        caption:
          "The AG-UI session bootstraps over the verified DIDComm channel. Verify first, then connect.",
      },
    ],
  },
  {
    id: "vs-vs",
    eyebrow: "Verifiable Service to Verifiable Service",
    title: "2. A service connects to another service",
    intro:
      "An AI agent from Company A connects to an AI agent from Company B. Each verifies the other; the A2A session starts only if both agree.",
    actors: [
      { id: "a", label: "AI Agent A" },
      { id: "b", label: "AI Agent B" },
      { id: "vpr", label: "Public Registry" },
    ],
    steps: [
      {
        from: "a",
        to: "b",
        label: "resolve DID, read DID Document",
        caption:
          "Agent A resolves Agent B's DID and reads its DID Document.",
      },
      {
        from: "b",
        to: "a",
        label: "Linked VPs (ECS-Service + ECS-Org)",
        caption:
          "Agent B presents its credentials: the service and the company behind it.",
      },
      {
        from: "b",
        to: "a",
        label: "resolve DID, read DID Document",
        caption:
          "Symmetrically, Agent B resolves Agent A's DID. There is no client/server asymmetry.",
      },
      {
        from: "a",
        to: "b",
        label: "Linked VPs (ECS-Service + ECS-Org)",
        caption: "Agent A presents its own credentials in return.",
      },
      {
        from: "a",
        to: "vpr",
        label: "trust resolution: B accredited?",
        caption:
          "Agent A verifies Agent B's credential chain against the public registry.",
      },
      {
        from: "b",
        to: "vpr",
        label: "trust resolution: A accredited?",
        caption: "Agent B does the same for Agent A.",
      },
      {
        from: "vpr",
        to: "a",
        label: "verified",
        caption: "The registry confirms to Agent A: Agent B checks out.",
      },
      {
        from: "vpr",
        to: "b",
        label: "verified",
        caption: "And to Agent B: Agent A checks out. Both agree.",
      },
      {
        from: "a",
        to: "b",
        label: "open DIDComm session",
        caption: "A DIDComm session opens between the two verified agents.",
      },
      {
        from: "a",
        to: "b",
        label: "bootstrap A2A over DIDComm",
        caption:
          "The A2A session bootstraps over it: two companies' agents, mutually verified, at machine speed.",
      },
    ],
  },
  {
    id: "vua-vua",
    eyebrow: "Verifiable User Agent to Verifiable User Agent",
    title: "3. Two people open a private connection",
    intro:
      "Alice and Bob use a chat application (each a Verifiable User Agent) and want a private, peer-to-peer connection.",
    actors: [
      { id: "alice", label: "Alice's VUA" },
      { id: "bob", label: "Bob's VUA" },
      { id: "vpr", label: "Public Registry" },
    ],
    steps: [
      {
        from: "alice",
        to: "bob",
        label: "show QR (out-of-band invitation)",
        caption:
          "Alice shows a QR code: an out-of-band DIDComm invitation.",
      },
      {
        from: "bob",
        to: "alice",
        label: "scan, establish DIDComm",
        caption:
          "Bob scans it and a DIDComm connection is established between the two user agents.",
      },
      {
        from: "alice",
        to: "bob",
        label: "request ECS-UserAgent",
        caption:
          "Alice's agent asks Bob's to prove it is a genuine user agent.",
      },
      {
        from: "bob",
        to: "alice",
        label: "present ECS-UserAgent",
        caption: "Bob's agent presents its ECS-UserAgent credential.",
      },
      {
        from: "alice",
        to: "vpr",
        label: "verify issuer accredited",
        caption:
          "Alice's agent checks the registry: is the credential's issuer accredited?",
      },
      {
        from: "vpr",
        to: "alice",
        label: "verified",
        caption: "Verified: Bob is using a legitimate user agent.",
      },
      {
        from: "bob",
        to: "alice",
        label: "request ECS-UserAgent",
        caption: "Bob's agent asks the same of Alice's. Trust is mutual.",
      },
      {
        from: "alice",
        to: "bob",
        label: "present ECS-UserAgent",
        caption: "Alice's agent presents its own credential.",
      },
      {
        from: "bob",
        to: "vpr",
        label: "verify issuer accredited",
        caption: "Bob's agent verifies it against the registry.",
      },
      {
        from: "vpr",
        to: "bob",
        label: "verified",
        caption:
          "Both sides are now verified as genuine user agents.",
      },
      {
        from: "alice",
        to: "bob",
        label: "share credentials, then chat",
        caption:
          "They can optionally share more credentials over the private channel, then chat. No platform in the middle.",
      },
    ],
  },
];
