import type { Metadata } from "next";
import { Container, Section } from "../components/ui";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "Cookie policy",
  description: "How verana.io uses cookies and local storage.",
};

export default function Cookies() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Cookie policy" />
      <Section>
        <Container className="prose-body max-w-3xl">
          <p>
            We keep cookies and local storage to a minimum. We use local storage
            only to remember your theme choice (light or dark) and whether you
            dismissed the announcement bar. These never leave your browser.
          </p>
          <h2>Analytics</h2>
          <p>
            If analytics are enabled, they are consent-gated and used only to
            understand aggregate usage. They are disabled where no measurement id
            is configured.
          </p>
          <h2>No advertising</h2>
          <p>We do not use advertising or cross-site tracking cookies.</p>
        </Container>
      </Section>
    </>
  );
}
