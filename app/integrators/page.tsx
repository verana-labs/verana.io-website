import type { Metadata } from "next";
import { Container, Section, SectionHeading, Button } from "../components/ui";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Integrators",
  description:
    "Certified integration and deployment partners on Verana, plus a path to become a partner.",
};

export default function Integrators() {
  return (
    <>
      <PageHero
        eyebrow="Integrators"
        title="Get to production with a partner"
        intro="Companies that provide integration and deployment services on Verana, for adopters who would rather not build it themselves."
      />
      <Section>
        <Container>
          <SectionHeading eyebrow="Partner directory" title="Integration partners" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="card flex h-36 items-center justify-center p-6 text-sm text-muted"
              >
                Partner slot, coming soon
              </div>
            ))}
          </div>

          <div className="mt-12 card p-6 sm:p-8">
            <SectionHeading
              eyebrow="Become a partner"
              title="List your company"
            />
            <p className="mt-4 max-w-2xl text-muted">
              We are building the partner directory now. A formal certification
              program is planned and will be run by the Verana Foundation. To be
              listed, reach out with inquiry type Integrator / partner.
            </p>
            <div className="mt-6">
              <Button href="/contact">Become a partner</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
