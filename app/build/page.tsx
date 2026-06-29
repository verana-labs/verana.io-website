import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button } from "../components/ui";
import PageHero from "../components/PageHero";
import { LINKS } from "../lib/site";

export const metadata: Metadata = {
  title: "Build",
  description:
    "The developer onramp: first steps by interface (API, MCP, SDKs), then a hand-off to the full reference and tutorials at docs.verana.io.",
};

const BLOCKS: { title: string; body: string }[] = [
  {
    title: "Start in 5 minutes",
    body: "Spin up a Service Wallet and make your first trust resolution, then continue in the docs for the full guide.",
  },
  {
    title: "By interface",
    body: "API, MCP server, and SDKs. Entry points and quickstarts, each linking into the docs.",
  },
  {
    title: "Implement the standards",
    body: "The Verifiable Trust and VPR specs for implementers, the TRQP query interface, and interop notes (OID4VC/EUDIW, DIDComm, MOSIP, credo-ts).",
  },
  {
    title: "Run the open source",
    body: "The reference implementations (Apache 2.0), issue trackers, and contribution pointers. Deeper community and working-group participation lives at the Foundation.",
  },
];

export default function Build() {
  return (
    <>
      <PageHero
        eyebrow="Build"
        title="Your first step on Verana"
        intro="A launchpad, not a tutorial silo. Get the first steps here, then the full reference and tutorials live at docs.verana.io."
      />
      <Section>
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {BLOCKS.map((b) => (
              <div key={b.title} className="card p-6">
                <h2 className="display text-lg text-ink">{b.title}</h2>
                <p className="mt-2 text-sm text-muted">{b.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 card p-6 sm:p-8">
            <SectionHeading
              eyebrow="Reference & support"
              title="Full reference and tutorials live at docs.verana.io"
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={LINKS.docs} external>
                Open the docs
              </Button>
              <Button href={LINKS.github} variant="ghost" external>
                GitHub
              </Button>
              <Button href={LINKS.trustSpec} variant="ghost" external>
                Verifiable Trust spec
              </Button>
              <Button href={LINKS.vprSpec} variant="ghost" external>
                VPR spec
              </Button>
              <Button href="/integrators" variant="ghost">
                Talk to an integrator
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
