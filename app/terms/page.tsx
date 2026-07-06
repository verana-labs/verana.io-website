import { buildMetadata } from "../lib/seo";
import { Container, Section } from "../components/ui";
import PageHero from "../components/PageHero";

export const metadata = buildMetadata({
  title: "Terms of use",
  description:
    "Terms of use for verana.io — the network and software site of Verana, operated by the Verana Foundation (in formation, represented by 2060 OÜ).",
  path: "/terms",
});

export default function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of use" />
      <Section>
        <Container className="prose-body max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            Last updated. 2026-07-06
          </p>
          <p>
            This website (<strong>verana.io</strong>) is operated by the{" "}
            <strong>Verana Foundation (in formation)</strong>, represented by{" "}
            <strong>2060 OÜ</strong> pre-incorporation. It is the network and
            software site of Verana: it presents the open trust infrastructure,
            demonstrates it with live widgets reading public Verana networks,
            and links to the documentation and repositories. It has no user
            accounts. By using the site you accept these terms.
          </p>

          <h2>Live network data</h2>
          <p>
            The Resolve-a-DID widget and the ecosystem listings display data
            read from public Verana networks (currently the testnet) at query
            time. Results are protocol evaluations of public registry data at a
            point in time: they may change, and they are not an endorsement of
            any service, organization, or credential by the Foundation. Network
            availability is not guaranteed.
          </p>

          <h2>No offer or advice</h2>
          <p>
            Nothing on this site is an offer, solicitation, or investment
            advice regarding the VNA token or any equity. The VNA token is a
            utility token of a decentralized protocol; the Foundation issues
            and administers it but does not own it. Token economics are
            governed by the protocol specifications, not by this site.
          </p>

          <h2>Open-source software &amp; specifications</h2>
          <p>
            The reference software is licensed under Apache 2.0, except the
            Verifiable Public Registry, which is AGPL-3.0 (copyright held by
            contributors); the specifications are licensed CC BY-SA 4.0. Your
            use of those artifacts is governed by their respective licenses,
            available in their repositories, not by these terms.
          </p>

          <h2>Trademarks and brand assets</h2>
          <p>
            The Verana name and logo are brand assets, licensed{" "}
            <strong>CC-BY 4.0</strong>. Usage guidelines are available on the{" "}
            <a href="/brand">brand page</a> and in the press kit.
          </p>

          <h2>Content license</h2>
          <p>
            Unless otherwise noted, the text of this site is licensed{" "}
            <strong>CC BY-SA 4.0</strong> and this website&rsquo;s own code is
            open source under <strong>Apache 2.0</strong>.
          </p>

          <h2>No warranty; liability</h2>
          <p>
            The site is provided &ldquo;as is&rdquo;, without warranties of any
            kind to the fullest extent permitted by law. Links to third-party
            sites are provided for convenience and are not endorsements. Our
            aggregate liability is limited to the fullest extent permitted by
            law.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of <strong>Estonia</strong>;
            courts of Tallinn have jurisdiction, without prejudice to mandatory
            consumer protections of your country of residence.
          </p>

          <h2>Changes</h2>
          <p>
            These terms may be updated as the Foundation is incorporated and
            the site evolves. The <em>Last updated</em> date reflects the most
            recent change.
          </p>
        </Container>
      </Section>
    </>
  );
}
