---
title: "Verana"
layout: "uxpilot"
meta_title: "Verana | Open Trust Layer for Verifiable Digital Services"
meta_description: "Discover Verana, the open trust layer that turns digital services into verifiable assets with decentralized identity, trust registries, and developer-first tools."
bodyClass: "bg-black text-white overflow-x-hidden font-sans"
hero:
  title_lines:
    - text: "The Open"
      variant: "light"
    - text: "Trust Layer"
      variant: "brand"
    - text: "for the Internet"
      variant: "light"
  description: "Turn digital services into verifiable assets that anyone can find and trust."
  primary_cta:
    label: "Start Building"
    href: "/page/build"
    icon: "rocket"
    icon_style: "solid"
  secondary_cta:
    label: "Explore Documentation"
    href: "https://docs.verana.io"
discover:
  heading: "Discover Verana"
  subheading: "Reclaiming Your Digital World"
  features:
    - title: "Platform Dependency"
      description: "Platforms make you rent content and connections, keeping you dependent on their rules and algorithms."
      icon: "times"
      icon_style: "solid"
      icon_color: "text-red-400"
      icon_bg: "bg-red-500/20"
    - title: "Digital Sovereignty"
      description: "Verana enables true digital ownership through autonomous trust networks and self-sovereign verifiable services."
      icon: "check"
      icon_style: "solid"
      icon_color: "text-verana"
      icon_bg: "bg-verana/20"
    - title: "Fair Discovery"
      description: "Be discovered based on what you actually provide, not what you pay for in advertising."
      icon: "search"
      icon_style: "solid"
      icon_color: "text-verana"
      icon_bg: "bg-verana/20"
  media:
    image: "/images/uxpilot/discovery-marketplace.png"
    alt: "Interactive notebook slides"
    badge_icon: "play"
    badge_icon_style: "solid"
    badge_text: "Watch Demo Video"
    title: "Interactive Notebook Slides"
    description: "Explore how Verana transforms digital interactions through verifiable trust networks."
feature_sections:
  - id: "trust"
    eyebrow: "Trust"
    icon:
      name: "shield-halved"
      style: "solid"
      color: "text-verana"
      bg: "bg-verana/20"
    title: "Don't trust. Verify."
    description: "Communities and institutions create and join decentralized and self-governed ecosystems, to exchange verifiable data with confidence and transparency."
    bullets:
      - "Enforce rules with ecosystem governance frameworks."
      - "Issue and verify credentials across sectors."
      - "Fair, privacy-preserving business models."
    cta:
      label: "Learn About Trust"
      href: "/page/build/trust-networks/"
    image: "/images/purple/trust-photo.webp"
    image_alt: "Cryptographic trust handshake"
  - id: "ownership"
    eyebrow: "Ownership"
    icon:
      name: "key"
      style: "solid"
      color: "text-verana"
      bg: "bg-verana/20"
    title: "Own Your Services."
    description: "Build a new generation of verifiable digital services you fully control, with data, audience, and trust sovereignty."
    bullets:
      - "Own your data and connections."
      - "Prove ownership over your services."
      - "Host anywhere, without lock-in."
    cta:
      label: "Claim Ownership"
      href: "/page/build/verifiable-services/"
    image: "/images/purple/ownership-photo.webp"
    image_alt: "Digital key unlocking"
    align: "left"
  - id: "discovery"
    eyebrow: "Discovery"
    icon:
      name: "compass"
      style: "solid"
      color: "text-verana"
      bg: "bg-verana/20"
    title: "Be found for what you prove, not for what you pay."
    description: "Merit-based discovery that rewards authentic value and verifiable credentials over advertising spend and algorithmic manipulation."
    bullets:
      - "Credential-based ranking and discovery"
      - "Fair competition regardless of budget"
      - "Transparent, verifiable reputation systems"
    cta:
      label: "Be Discoverable"
      href: "/page/trust-engine/trust-resolver"
    image: "/images/purple/discovery-photo.jpg"
    image_alt: "Digital marketplace"
impact:
  heading: "Exploring Real-World Impact"
  description: "Understand how ecosystems across sectors, from finance to telecom, from AI to government digital ID, can use Verana to build trustworthy, interoperable, and privacy-first digital networks and services."
  cards:
    - title: "Government Digital ID"
      description: "Issue verifiable digital IDs that let citizens prove who they are anywhere, without ever exposing more data than necessary."
      image: "/images/purple/civilreg2.webp"
      icon: { name: "id-card", style: "solid", color: "text-blue-400", bg: "bg-blue-500/20" }
      highlights:
        - "Control over issuers & verifiers"
        - "Selective disclosure"
        - "Privacy by design"
      href: "/page/industry-use-cases/government-id"
    - title: "Verifiable Social Channels"
      description: "Give creators portable audiences and cryptographic proof of provenance, so curators can trust every piece of content in their feeds."
      image: "/images/purple/social4.webp"
      icon: { name: "share-nodes", style: "solid", color: "text-purple-400", bg: "bg-purple-500/20" }
      highlights:
        - "Proven channel authenticity"
        - "Sovereign audiences"
        - "Censorship-resilient discovery"
      href: "/page/industry-use-cases/decentralized-social-network"
    - title: "Verifiable AI Agents"
      description: "AI agents carry verifiable identities and exchange credentials, ensuring clear ownership, accountable actions, and trusted agent-to-agent communication everywhere."
      image: "/images/purple/medit1.webp"
      icon: { name: "robot", style: "solid", color: "text-green-400", bg: "bg-green-500/20" }
      highlights:
        - "Verifiable agent ownership"
        - "A2A credential exchange"
        - "Trusted & accountable actions"
      href: "/page/industry-use-cases/ai-agents"
    - title: "Healthcare Workforce Mobility"
      description: "Move clinicians across borders with verifiable licenses, training, and employment credentials."
      image: "/images/purple/healthcare3.webp"
      icon: { name: "user-doctor", style: "solid", color: "text-red-400", bg: "bg-red-500/20" }
      highlights:
        - "Cross-jurisdiction verification"
        - "Real-time revocation checks"
        - "Automated onboarding flows"
      href: "/page/industry-use-cases/healthcare-workforce-mobility"
    - title: "Hotel Discovery"
      description: "Turn PMS software into discoverable hotel services, powering booking engines with no intermediaries."
      image: "/images/purple/hotel1.webp"
      icon: { name: "hotel", style: "solid", color: "text-yellow-400", bg: "bg-yellow-500/20" }
      highlights:
        - "Verifiable hotel profiles"
        - "Direct booking"
        - "Global discoverability"
      href: "/page/industry-use-cases/hotel-management"
#    - title: "Notaries & Legal"
#      description: "Prove documents, power of attorney, and notarizations instantly with machine-verifiable certificates."
#      image: "/images/uxpilot/impact-notaries.png"
#      icon: { name: "stamp", style: "solid", color: "text-indigo-400", bg: "bg-indigo-500/20" }
#      highlights:
#        - "Immutable signing evidence"
#        - "Credentialed professionals"
#        - "Lifecycle audit trail"
technical:
  heading: "Built on Open Standards"
  description: "Verana leverages cutting-edge cryptographic protocols and decentralized technologies to create a truly open and interoperable trust layer."
  pillars:
    - title: "Verifiable Credentials"
      description: "W3C standard implementation for issuing, holding, and verifying digital credentials with cryptographic proof."
      icon: { name: "code", style: "solid", color: "text-verana", bg: "bg-verana/20" }
    - title: "Decentralized Identity"
      description: "Self-sovereign identity management using DIDs for true ownership and control."
      icon: { name: "fingerprint", style: "solid", color: "text-verana", bg: "bg-verana/20" }
    - title: "Trust Networks"
      description: "Interconnected webs of verified relationships and credentials that create transparent trust ecosystems."
      icon: { name: "network-wired", style: "solid", color: "text-verana", bg: "bg-verana/20" }
  developer:
    title: "Developer-First Approach"
    description: "Simple APIs, comprehensive documentation, and powerful SDKs make it easy to integrate Verana's trust layer into any application."
    bullets:
      - "RESTful APIs with OpenAPI specifications"
      - "SDKs for JavaScript, Python, Go, and Rust"
      - "Comprehensive documentation and tutorials"
community:
  heading: "Join the Community"
  description: "Connect with developers, researchers, and organizations building the future of digital trust."
  channels:
    - title: "Discord"
      description: "Join real-time discussions with the community"
      icon: { name: "discord", style: "brands", color: "text-purple-400", bg: "bg-purple-500/20" }
      cta_label: "Join Discord Server"
      href: "https://discord.gg/edjaFn252q"
    - title: "GitHub"
      description: "Contribute to open-source development"
      icon: { name: "github", style: "brands", color: "text-gray-400", bg: "bg-gray-600/20" }
      cta_label: "Verana Repos"
      href: "https://github.com/verana-labs"
    - title: "LinkedIn"
      description: "Professional updates and insights"
      icon: { name: "linkedin", style: "brands", color: "text-blue-400", bg: "bg-blue-500/20" }
      cta_label: "Connect on LinkedIn"
      href: "https://www.linkedin.com/company/verana-verifiable-trust-network"
    - title: "X (Twitter)"
      description: "Latest news and announcements"
      icon: { name: "x-twitter", style: "brands", color: "text-white", bg: "bg-black/20", border: "border border-gray-600" }
      cta_label: "Follow us on X"
      href: "https://x.com/Verana_io"
  cta:
    title: "Get Started Today"
    description: "Ready to build with Verana? Join our testnet and start experimenting with verifiable trust networks."
    primary:
      label: "Build"
      href: "/page/build"
      icon: "rocket"
      icon_style: "solid"
    secondary:
      label: "View Documentation"
      href: "https://docs.verana.io"
---
