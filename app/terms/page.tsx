import { buildMetadata } from "../lib/seo";
import { Container, Section } from "../components/ui";
import PageHero from "../components/PageHero";

export const metadata = buildMetadata({
  title: "Terms of use",
  description:
    "Terms governing use of verana.io.",
  path: "/terms",
});

export default function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of use" />
      <Section>
        <Container className="prose-body max-w-3xl">
          <p>
            This site provides information about Verana, an open, public, neutral
            trust infrastructure. It is provided on an as-is basis, without
            warranties of any kind.
          </p>
          <h2>No offer, no investment advice</h2>
          <p>
            Nothing on this site is an offer, solicitation, or investment advice
            regarding the VNA token or any equity. The token is described for its
            utility only. No price, returns, or emission schedule is presented
            here.
          </p>
          <h2>Open-source software</h2>
          <p>
            The Verana software referenced here is open source under Apache-2.0 and
            is provided without warranty. See the repositories on GitHub for the
            applicable license terms.
          </p>
          <h2>Trademarks</h2>
          <p>
            The Verana name and logo are brand assets. Usage guidelines are
            available on the brand page and in the press kit.
          </p>
          <h2>Content license</h2>
          <p>
            Unless otherwise noted, the text of this site is licensed under CC
            BY-SA 4.0.
          </p>
        </Container>
      </Section>
    </>
  );
}
