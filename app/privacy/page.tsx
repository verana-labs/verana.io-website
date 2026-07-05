import { buildMetadata } from "../lib/seo";
import { Container, Section } from "../components/ui";
import PageHero from "../components/PageHero";

export const metadata = buildMetadata({
  title: "Privacy policy",
  description:
    "How verana.io handles personal data.",
  path: "/privacy",
});

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy" />
      <Section>
        <Container className="prose-body max-w-3xl">
          <p>
            This site is operated for Verana. We process the minimum personal data
            needed to run the site and to respond to inquiries. We do not sell
            personal data and we do not run advertising trackers.
          </p>
          <h2>What we collect</h2>
          <p>
            When you submit the contact form, we process the details you provide
            (name, email, organization, message, and optional fields) to respond
            and to record the inquiry in our CRM. We store a timestamp of your
            consent.
          </p>
          <h2>Analytics</h2>
          <p>
            We may use privacy-respecting, consent-gated analytics to understand
            aggregate usage. Analytics are disabled where no measurement id is
            configured.
          </p>
          <h2>Your rights</h2>
          <p>
            Under the GDPR you may request access to, correction of, or deletion
            of your personal data. Contact us through the contact form to exercise
            these rights.
          </p>
          <h2>Retention</h2>
          <p>
            Inquiry records are retained for as long as needed to handle the
            request and to maintain a record of business contact, then deleted on
            request.
          </p>
        </Container>
      </Section>
    </>
  );
}
