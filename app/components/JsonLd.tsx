import {
  SITE_URL,
  SITE_NAME,
  SITE_DESCRIPTION,
  LINKS,
  SOCIAL_LINKS,
} from "../lib/site";

/**
 * schema.org structured data, adapted from the previous verana.io site's
 * JSON-LD graph: the Organization, this WebSite, the Trust Resolver software,
 * and the Verifiable Trust specification.
 */
export default function JsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        sameAs: [...SOCIAL_LINKS, LINKS.docs, LINKS.council],
        logo: `${SITE_URL}/logo.svg`,
      },
      {
        "@type": "WebSite",
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      },
      {
        "@type": "SoftwareApplication",
        name: "Verana Trust Resolver",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Cross-platform",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        url: LINKS.docs,
        downloadUrl: LINKS.github,
        description:
          "Resolve DIDs, verify credentials, query and build trust registries, trust networks, digital ecosystems per the Verifiable Trust spec.",
      },
      {
        "@type": "TechArticle",
        headline: "Verifiable Trust Specification",
        url: LINKS.trustSpec,
        author: { "@type": "Organization", name: "Verana Foundation" },
        about: [
          "Verifiable Credentials",
          "Decentralized Identifiers",
          "Trust Registries",
          "Verifiable Services",
          "Verifiable User Agents",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be embedded raw; content is entirely from our constants.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
