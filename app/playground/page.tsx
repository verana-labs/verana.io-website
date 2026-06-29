import type { Metadata } from "next";
import { Container, Section, Chip, Button } from "../components/ui";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Playground",
  description:
    "Live, low-friction demos: issue and verify a credential, query the Trust Graph, resolve trust, and watch an AI agent discover a service over MCP.",
};

const DEMOS: { title: string; body: string; snippet?: string }[] = [
  {
    title: "Issue and verify a credential",
    body: "Issue a credential from a Service Wallet and verify it as a peer.",
    snippet: "curl -s https://testnet.verana.io/api/issue -d @credential.json",
  },
  {
    title: "Query the Trust Graph",
    body: "Find a service by the credentials it holds.",
    snippet: 'curl -s "https://testnet.verana.io/graph?holds=ecs:service&ecosystem=demo"',
  },
  {
    title: "Trust Resolver",
    body: "Verify a service or organization Proof-of-Trust.",
    snippet: "curl -s https://testnet.verana.io/resolve?did=did:web:acme.example",
  },
  {
    title: "Agentic demo (showpiece)",
    body: "An AI agent authenticates and discovers a service over MCP.",
    snippet: "mcp connect verana://testnet  # then: tools/list",
  },
  {
    title: "EUDIW interop",
    body: "Present and verify against an EUDIW-style OID4VP flow.",
  },
  {
    title: "Connect a real wallet",
    body: "Scan to connect with Hologram Messaging, a real DIDComm wallet.",
  },
];

export default function Playground() {
  return (
    <>
      <PageHero
        eyebrow="Playground"
        title="Verify-first, watch it work"
        intro="Interactive, low-friction demos. Each runs against testnet and ships a copy-paste snippet you can take to the docs."
      />
      <Section>
        <Container>
          <div className="mb-6">
            <Chip>running against testnet</Chip>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {DEMOS.map((d) => (
              <div key={d.title} className="card flex flex-col p-6">
                <h2 className="display text-lg text-ink">{d.title}</h2>
                <p className="mt-2 flex-1 text-sm text-muted">{d.body}</p>
                {d.snippet ? (
                  <pre className="mt-4 overflow-x-auto rounded-lg border border-rule bg-surface-2 p-3 font-mono text-xs text-ink">
                    {d.snippet}
                  </pre>
                ) : null}
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/build">Go from trying it to building it</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
