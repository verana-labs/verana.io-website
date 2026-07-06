import { buildMetadata } from "../lib/seo";
import { Container, Section } from "../components/ui";
import PageHero from "../components/PageHero";
import ContactForm from "../components/ContactForm";
import { LINKS } from "../lib/site";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with the Verana team.",
  path: "/contact",
});

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        intro="Building, adopting, integrating, or press. Pick an inquiry type and we will route it to the right people."
      />
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <ContactForm />
          <div className="space-y-6">
            <div className="card p-6">
              <h2 className="font-semibold text-ink">Other ways to reach us</h2>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li>
                  <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    GitHub
                  </a>{" "}
                  for issues and code
                </li>
                <li>
                  <a href={LINKS.docs} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    Documentation
                  </a>{" "}
                  to start building
                </li>
                <li>
                  <a href={LINKS.discord} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                    Discord
                  </a>{" "}
                  to chat with the community
                </li>
                <li>In person at IIW, GDC, DICE and standards venues</li>
                <li>
                  Press kit on the{" "}
                  <a href="/brand" className="text-accent hover:underline">
                    brand page
                  </a>
                </li>
              </ul>
            </div>
            <p className="text-xs text-muted">
              We never publish an email address. Every inquiry goes through this
              form and is routed internally.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
