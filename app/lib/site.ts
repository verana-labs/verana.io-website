// Single source of truth for site-wide identity used by metadata, JSON-LD and
// the footer. Keeps the canonical URL, name, descriptor and social links from
// drifting across the app.

export const SITE_URL = "https://verana.io";

export const SITE_NAME = "Verana";

// Canonical descriptor (the hero headline, footer descriptor and OG-share
// title, all aligned).
export const SITE_TAGLINE = "The Open Trust Infrastructure for the Verifiable Internet";

export const SITE_DESCRIPTION =
  "Verana is the open, public, neutral trust infrastructure for the internet. Build sovereign trust ecosystems on open standards (W3C Verifiable Credentials and DIDs, DIDComm) or join existing ones, verify humans, services, connected objects, and AI agents before you connect, and be found by what you prove. Open source, owned by no one.";

// Default OpenGraph / Twitter image (1200x630). Lives in public/.
export const OG_IMAGE = "/images/og-default.jpg";

// Google Analytics 4 measurement id (optional; empty disables analytics).
// Shared gtag property with veranafoundation.org; empty disables analytics.
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-9H5406F02W";

// Sister and related properties.
export const LINKS = {
  github: "https://github.com/verana-labs",
  docs: "https://docs.verana.io",
  playground: "https://playground.main.demos.testnet.verana.network/",
  foundation: "https://veranafoundation.org",
  council: "https://veranacouncil.org",
  trustSpec: "https://verana-labs.github.io/verifiable-trust-spec/",
  roadmap: "https://github.com/verana-labs/verana-spec/blob/main/ROADMAP.md",
  vprSpec: "https://verana-labs.github.io/verifiable-trust-vpr-spec/",
  company: "https://2060.io",
  hologram: "https://hologram.zone",
  linkedin: "https://www.linkedin.com/company/verana-foundation/",
  x: "https://x.com/Verana_io",
  discord: "https://discord.gg/edjaFn252q",
} as const;

export const SOCIAL_LINKS = [
  LINKS.github,
  LINKS.linkedin,
  LINKS.x,
  LINKS.discord,
  LINKS.foundation,
] as const;
