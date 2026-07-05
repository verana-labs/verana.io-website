// The three connection flows (spec-v2 §3.3), rendered as static sequence
// diagrams by components/FlowDiagram in the same visual language as the
// /ecosystems diagrams (icon nodes, mono labels, role colors).

/** Actor kinds map to node colors + icons: person = green, user-agent
 *  software / AI agent = accent blue, the public registry = purple. */
export type ActorKind = "person" | "wallet" | "agent" | "registry";

export type FlowActor = { id: string; label: string; kind: ActorKind };

export type FlowMessage = {
  type: "msg";
  from: string;
  to: string;
  label: string;
  /** msg = request/action (accent), reply = dashed response (accent),
   *  verified = registry confirmation (green), session = channel opens (purple). */
  kind: "msg" | "reply" | "verified" | "session";
};

export type FlowNote = { type: "note"; over: [string, string]; label: string };

export type FlowStep = FlowMessage | FlowNote;

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
      "An AG-UI compatible frontend (a Verifiable User Agent) connects to an enterprise AI agent (a Verifiable Service). The frontend resolves the agent's DID, checks its ECS-Service and ECS-Org or ECS-Persona credentials and their issuers, and shows a Proof-of-Trust. After the user accepts, it opens a DIDComm session, presents an ECS-UserAgent credential (and optionally an ECS-Badge for the human), then the AG-UI session is bootstrapped over the DIDComm session.",
    actors: [
      { id: "user", label: "User", kind: "person" },
      { id: "vua", label: "Frontend (VUA)", kind: "wallet" },
      { id: "vs", label: "AI Agent (VS)", kind: "agent" },
      { id: "vpr", label: "Public Registry", kind: "registry" },
    ],
    steps: [
      { type: "msg", from: "vua", to: "vs", label: "resolve DID, read DID Document", kind: "msg" },
      { type: "msg", from: "vs", to: "vua", label: "Linked VPs (ECS-Service + ECS-Org/Persona)", kind: "reply" },
      { type: "msg", from: "vua", to: "vpr", label: "trust resolution (TRQP): issuers accredited?", kind: "msg" },
      { type: "msg", from: "vpr", to: "vua", label: "verified, recursive to the ecosystem root", kind: "verified" },
      { type: "msg", from: "vua", to: "user", label: "show Proof-of-Trust", kind: "msg" },
      { type: "msg", from: "user", to: "vua", label: "accept", kind: "reply" },
      { type: "msg", from: "vua", to: "vs", label: "open DIDComm session", kind: "session" },
      { type: "msg", from: "vs", to: "vua", label: "request ECS-UserAgent", kind: "msg" },
      { type: "msg", from: "vua", to: "vs", label: "present ECS-UserAgent (+ optional ECS-Badge)", kind: "reply" },
      { type: "msg", from: "vs", to: "vpr", label: "verify ECS-UserAgent issuer accredited", kind: "msg" },
      { type: "msg", from: "vpr", to: "vs", label: "verified, genuine VUA", kind: "verified" },
      { type: "msg", from: "vua", to: "vs", label: "bootstrap AG-UI session over DIDComm", kind: "session" },
    ],
  },
  {
    id: "vs-vs",
    eyebrow: "Verifiable Service to Verifiable Service",
    title: "2. A service connects to another service",
    intro:
      "An AI agent from Company A connects to an AI agent from Company B (both Verifiable Services). Each verifies the credentials the other presents in its DID Document (ECS-Service plus ECS-Org or ECS-Persona, as Linked Verifiable Presentations). If both agree, a DIDComm session starts and an A2A session is bootstrapped over it.",
    actors: [
      { id: "a", label: "AI Agent A (Company A)", kind: "agent" },
      { id: "b", label: "AI Agent B (Company B)", kind: "agent" },
      { id: "vpr", label: "Public Registry", kind: "registry" },
    ],
    steps: [
      { type: "msg", from: "a", to: "b", label: "resolve DID, read DID Document", kind: "msg" },
      { type: "msg", from: "b", to: "a", label: "Linked VPs (ECS-Service + ECS-Org/Persona)", kind: "reply" },
      { type: "msg", from: "b", to: "a", label: "resolve DID, read DID Document", kind: "msg" },
      { type: "msg", from: "a", to: "b", label: "Linked VPs (ECS-Service + ECS-Org/Persona)", kind: "reply" },
      { type: "msg", from: "a", to: "vpr", label: "trust resolution: B issuers accredited?", kind: "msg" },
      { type: "msg", from: "b", to: "vpr", label: "trust resolution: A issuers accredited?", kind: "msg" },
      { type: "msg", from: "vpr", to: "a", label: "verified", kind: "verified" },
      { type: "msg", from: "vpr", to: "b", label: "verified", kind: "verified" },
      { type: "note", over: ["a", "b"], label: "both agree" },
      { type: "msg", from: "a", to: "b", label: "open DIDComm session", kind: "session" },
      { type: "msg", from: "a", to: "b", label: "bootstrap A2A session over DIDComm", kind: "session" },
    ],
  },
  {
    id: "vua-vua",
    eyebrow: "Verifiable User Agent to Verifiable User Agent",
    title: "3. Two people open a private connection",
    intro:
      "Alice and Bob use a chat application (each a Verifiable User Agent) and want a private peer-to-peer DIDComm connection. Alice shows a QR code, an out-of-band DIDComm invitation, that Bob scans. Once connected, both agents present an ECS-UserAgent credential, and each verifies through the public registry that the credential's issuer is accredited, so each knows the other is a legitimate user agent. They can then optionally share more credentials over the channel.",
    actors: [
      { id: "alice", label: "Alice's VUA", kind: "wallet" },
      { id: "bob", label: "Bob's VUA", kind: "wallet" },
      { id: "vpr", label: "Public Registry", kind: "registry" },
    ],
    steps: [
      { type: "msg", from: "alice", to: "bob", label: "show QR, out-of-band DIDComm invitation", kind: "msg" },
      { type: "msg", from: "bob", to: "alice", label: "scan, establish DIDComm connection", kind: "session" },
      { type: "msg", from: "alice", to: "bob", label: "request ECS-UserAgent", kind: "msg" },
      { type: "msg", from: "bob", to: "alice", label: "present ECS-UserAgent", kind: "reply" },
      { type: "msg", from: "alice", to: "vpr", label: "verify ECS-UserAgent issuer accredited", kind: "msg" },
      { type: "msg", from: "vpr", to: "alice", label: "verified", kind: "verified" },
      { type: "msg", from: "bob", to: "alice", label: "request ECS-UserAgent", kind: "msg" },
      { type: "msg", from: "alice", to: "bob", label: "present ECS-UserAgent", kind: "reply" },
      { type: "msg", from: "bob", to: "vpr", label: "verify ECS-UserAgent issuer accredited", kind: "msg" },
      { type: "msg", from: "vpr", to: "bob", label: "verified", kind: "verified" },
      { type: "note", over: ["alice", "bob"], label: "both verified as genuine VUAs" },
      { type: "msg", from: "alice", to: "bob", label: "optionally share more credentials, then chat", kind: "msg" },
    ],
  },
];
