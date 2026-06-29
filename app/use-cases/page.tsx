import type { Metadata } from "next";
import { Container, Section } from "../components/ui";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { USE_CASES } from "../lib/content";

export const metadata: Metadata = {
  title: "Use cases",
  description:
    "One trust infrastructure, many entry points: governments, enterprise and human credentials, connected objects (IoT), and agentic AI.",
};

export default function UseCases() {
  return (
    <>
      <PageHero
        eyebrow="Use cases"
        title="One trust infrastructure, many entry points"
        intro="Overlapping lenses, not silos. Companies recognize themselves in one or several; a bank doing reusable KYC today runs AI agents tomorrow. They all converge on the same verify-first primitive and the same ECS baseline."
      />

      <Section>
        <Container className="grid gap-6 md:grid-cols-2">
          {USE_CASES.map((u) => (
            <Reveal key={u.name} className="card p-6 sm:p-8">
              <h2 className="display text-xl text-ink">{u.name}</h2>
              <p className="mt-3 text-muted">{u.body}</p>
              <p className="mt-5 font-mono text-xs text-muted">
                <span className="text-ink">software:</span> {u.software}
              </p>
            </Reveal>
          ))}
        </Container>
      </Section>

      <Section className="border-t border-rule bg-surface">
        <Container className="text-center">
          <p className="display text-2xl sm:text-3xl text-ink max-w-3xl mx-auto">
            Whatever you need to trust, a person, an organization, a service, a
            device, or an AI agent, is verified the same way.
          </p>
        </Container>
      </Section>
    </>
  );
}
