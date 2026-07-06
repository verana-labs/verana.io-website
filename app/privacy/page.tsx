import { buildMetadata } from "../lib/seo";
import { Container, Section } from "../components/ui";
import PageHero from "../components/PageHero";

export const metadata = buildMetadata({
  title: "Privacy policy",
  description:
    "How the Verana Foundation (in formation, represented by 2060 OÜ) handles personal data on verana.io — the contact form, consent-gated analytics, and the live network widgets — and your rights under the GDPR.",
  path: "/privacy",
});

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy" />
      <Section>
        <Container className="prose-body max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            Last updated. 2026-07-06
          </p>
          <p>
            This page explains what personal data the{" "}
            <strong>Verana Foundation (in formation)</strong>, represented by{" "}
            <strong>2060 OÜ</strong>, collects through <strong>verana.io</strong>,
            why we collect it, how long we keep it, and your rights under the EU
            General Data Protection Regulation (GDPR). verana.io is an
            informational site: it has <strong>no user accounts</strong>, and the
            only personal data you can submit is through the contact form. We do
            not sell data and do not run ad targeting or remarketing.
          </p>

          <h2>Data controller</h2>
          <p>
            The Verana Foundation is in formation. Until incorporation, the data
            controller is <strong>2060 OÜ</strong>, Ahtri tn 12, 10151 Tallinn,
            Estonia (registry 16853041), acting as the Foundation&rsquo;s
            steward; thereafter the incorporated Foundation. For privacy
            matters, use the <a href="/contact">contact form</a> and begin the
            message with <em>&ldquo;Legal:&rdquo;</em>.
          </p>

          <h2>What we collect and why</h2>

          <h3>Contact form</h3>
          <p>
            Submissions on <a href="/contact">/contact</a> (inquiry type, name,
            email, message, optional organization/role/links) are stored in our{" "}
            <strong>self-hosted Relaticle CRM</strong>, operated by 2060 OÜ, so
            we can respond. IP address and user-agent are used only for rate
            limiting and abuse detection. <strong>Legal basis.</strong> Our
            legitimate interest in answering the inquiries you send us (GDPR
            Art. 6(1)(f)).
          </p>

          <h3>Live network widgets</h3>
          <p>
            The Resolve-a-DID widget relays the DID you enter to the public
            Verana network&rsquo;s trust resolver, through our server, to answer
            the query. DIDs are public identifiers; we do not store them beyond
            ordinary hosting logs. The ecosystem listings display public
            registry data only.
          </p>

          <h3>Hosting and security</h3>
          <p>
            Hosting logs (IP address, user-agent) serve security and rate
            limiting only. <strong>Legal basis.</strong> Our legitimate interest
            in keeping the site available and abuse-free (Art. 6(1)(f)).
          </p>

          <h2>Cookies and analytics</h2>
          <p>
            The site itself sets <strong>no cookies</strong>; your consent
            choice is kept in your browser&rsquo;s <code>localStorage</code>.
            For analytics we use <strong>Google Analytics 4</strong> (Google
            Ireland Ltd.) to measure aggregate page traffic. It is
            consent-gated: a banner offers <strong>Accept all</strong> or{" "}
            <strong>Essential only</strong>, and the Google Analytics tag loads
            — and its cookies are set — <strong>only after you select
            &ldquo;Accept all&rdquo;</strong>; choosing &ldquo;Essential
            only&rdquo; (or making no choice) loads nothing. The lawful basis is
            your <strong>consent</strong> (Art. 6(1)(a)), which you can withdraw
            at any time by clearing the stored choice or via the banner&rsquo;s
            preferences. IP addresses are anonymized; no ad networks, no
            cross-site trackers, no selling of data. See the{" "}
            <a href="/cookies">cookie policy</a>.
          </p>

          <h2>Processors and where data goes</h2>
          <ul>
            <li>
              <strong>Google (Analytics)</strong> — Google Analytics 4, only
              after you consent to analytics. Aggregate traffic measurement; no
              profile data is shared.
            </li>
            <li>
              <strong>Our hosting provider (EU)</strong> and our self-hosted
              CRM, operated by 2060 OÜ.
            </li>
          </ul>
          <p>
            Cross-border transfers rely on an EC adequacy decision, the EU-US
            Data Privacy Framework, or Standard Contractual Clauses as
            applicable. No third-party marketing platform receives your data.
          </p>

          <h2>How long we keep it</h2>
          <ul>
            <li>
              <strong>Contact-form correspondence</strong> — up to 24 months
              from the last interaction.
            </li>
            <li>
              <strong>Spam/abuse logs</strong> — up to 30 days.
            </li>
            <li>
              <strong>Analytics</strong> — minimum provider retention; aggregate
              reports contain no identifiers.
            </li>
          </ul>

          <h2>Your rights</h2>
          <p>Under the GDPR, you may:</p>
          <ul>
            <li>access the personal data we hold about you;</li>
            <li>rectify inaccurate data;</li>
            <li>erase your data where we have no lawful basis to keep it;</li>
            <li>restrict or object to processing;</li>
            <li>receive a portable copy of the data you gave us;</li>
            <li>
              withdraw consent at any time — without affecting prior processing;
            </li>
            <li>
              lodge a complaint with a supervisory authority — while stewarded
              by 2060 OÜ, the{" "}
              <a href="https://www.aki.ee/en" rel="noopener noreferrer">
                Estonian Data Protection Inspectorate
              </a>
              .
            </li>
          </ul>
          <p>
            To exercise any right, use the <a href="/contact">contact form</a>{" "}
            with the message prefixed <em>&ldquo;Legal:&rdquo;</em>. We respond
            within 30 days.
          </p>

          <h2>Changes</h2>
          <p>
            We update this page when our practices change. The{" "}
            <em>Last updated</em> date reflects the most recent change; prior
            submissions remain governed by the version in force when they were
            sent.
          </p>
        </Container>
      </Section>
    </>
  );
}
