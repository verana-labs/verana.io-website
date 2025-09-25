---
title: Service Discovery
subtitle: "Breaking free from centralized platforms that control visibility through advertising budgets and opaque algorithms."
url: "/page/why-verana/discovery"
hero_icon: "fa-solid fa-compass"
disable_content_wrapper: true
sidebar:
  title: Why Verana
  nav:
    - label: Why Discoverability is Broken
      url: "#broken-discovery"
      active: true
    - label: "Service Discovery: Re-distribution of Wealth"
      url: "#verana-solution"
    - label: Key Benefits
      url: "#key-benefits"
    - label: Call to Action
      url: "#page-cta"
  quick_links:
    title: Quick Links
    items:
      - label: Platform Economy
        url: "#broken-discovery"
      - label: Trust Resolver
        url: "#verana-solution"
      - label: Ecosystem Model
        url: "#verana-solution"
problem:
  id: broken-discovery
  title: Why Discoverability is Broken
  description: |
    Today, discoverability of services is dominated by centralized platforms that rank and surface results based on advertising spend, SEO games, and now sponsored AI answers. A handful of companies capture the majority of value while smaller players and consumers absorb the cost.
  model:
    title: Advertising-Driven Discovery Loop
    columns:
      - title: Organizations
        card:
          icon: "fa-solid fa-building"
          icon_bg_class: "bg-blue-500/20"
          icon_color_class: "text-blue-400"
          title: High-Budget Organizations
          description: "Enterprises and funded scale-ups buy visibility through massive ad campaigns."
        items:
          - icon: "fa-solid fa-arrow-right"
            icon_color_class: "text-green-400"
            text: "$$$ ad spend guarantees top placement"
          - icon: "fa-solid fa-store"
            icon_color_class: "text-orange-400"
            class: "text-orange-400"
            text: "Low-budget teams rely on weak ad spend and stay invisible"
        note: "Small budgets ⇒ little or no discoverability. Competing on ads is unsustainable."
      - title: Dominant Platforms
        card:
          icon: "fa-solid fa-crown"
          icon_bg_class: "bg-red-500/20"
          icon_color_class: "text-red-400"
          title: Advertising Platforms
          description: "Control discovery & ranking, siphoning value from both sides."
        items:
          - icon: "fa-solid fa-arrow-right"
            icon_color_class: "text-green-400"
            text: "High spenders secure premium visibility"
          - icon: "fa-solid fa-arrow-right"
            icon_color_class: "text-red-400"
            class: "text-red-400"
            text: "Small orgs are deprioritized or excluded"
        note: "Wealth and audience data concentrate in a few gatekeepers."
      - title: Consumers
        card:
          icon: "fa-solid fa-user"
          icon_bg_class: "bg-gray-500/20"
          icon_color_class: "text-gray-300"
          title: End Users
          description: "Discover what platforms promote—not what best fits their needs."
        items:
          - icon: "fa-solid fa-arrow-right"
            icon_color_class: "text-green-400"
            text: "Find the brands that can afford visibility"
          - icon: "fa-solid fa-arrow-right"
            icon_color_class: "text-red-400"
            class: "text-red-400"
            text: "Rarely see lower-cost alternatives"
        note: "Consumers pay an indirect ad tax every time they choose from sponsored results."
  issues:
    - title: For Small Organizations
      text: "Marketing budgets become the barrier to entry, limiting innovation and competition."
    - title: For Consumers
      text: "Choice shrinks and prices rise as intermediaries capture a disproportionate share of value."
solution:
  id: verana-solution
  title: "Service Discovery: Re-distribution of Wealth"
  intro:
    - "Verana replaces the advertising monopoly with an open, decentralized, and verifiable trust system powered by verifiable credentials."
    - "Any ecosystem can certify claims, service owners attach those credentials to their digital channels, and the Trust Resolver indexes the proofs automatically." 
  features:
    - icon: "fa-solid fa-network-wired"
      icon_bg_class: "bg-verana/20"
      wrapper_class: "bg-verana/10 border border-verana/30"
      title: Ecosystems
      text: "Establish decentralized trust networks that specialize in certifying claims for specific industries or jurisdictions."
    - icon: "fa-solid fa-certificate"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      wrapper_class: "bg-blue-500/10 border border-blue-500/30"
      title: Credentials
      text: "Organizations and individuals obtain verifiable credentials they can attach to every service endpoint."
    - icon: "fa-solid fa-spider"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      wrapper_class: "bg-green-500/10 border border-green-500/30"
      title: Auto-Indexing
      text: "Credentials are crawled, cryptographically verified, and added to the global directory of verifiable data."
    - icon: "fa-solid fa-magnifying-glass"
      icon_bg_class: "bg-purple-500/20"
      icon_color_class: "text-purple-400"
      wrapper_class: "bg-purple-500/10 border border-purple-500/30"
      title: Discovery
      text: "Services surface because of the claims they can prove—not because of who bought ads."
  transformation:
    title: Economic Transformation
    text: "Verana shifts power away from centralized platforms toward a federated economy of ecosystems that compete on trust, authenticity, and credential quality."
  model:
    title: Verana Discovery Model
    columns:
      - title: Organizations
        card_class: "bg-gray-900/50 border border-gray-700"
        icon_block:
          icon: "fa-solid fa-balance-scale"
          icon_bg_class: "bg-verana/20"
          icon_color_class: "text-verana"
        headline: Any-budget organizations
        description: "Equal opportunity for discovery"
        items:
          - icon: "fa-solid fa-arrow-right"
            icon_color_class: "text-blue-400"
            text: "Request credentialing"
          - icon: "fa-solid fa-arrow-right"
            icon_color_class: "text-verana"
            text: "Register service & attach verifiable credentials"
      - title: Ecosystems
        card_class: "bg-blue-900/30 border border-blue-700/50"
        icon_block:
          icon: "fa-solid fa-stamp"
          icon_bg_class: "bg-blue-500/20"
          icon_color_class: "text-blue-400"
        headline: Credential issuers
        description: "Issue verifiable credentials and sustain governance through issuer fees"
        items:
          - icon: "fa-solid fa-arrow-left"
            icon_color_class: "text-blue-400"
            text: "Issuer fees fund the trust framework"
          - icon: "fa-solid fa-arrow-right"
            icon_color_class: "text-green-400"
            text: "Credentials flow to registered services"
      - title: Trust Resolver
        card_class: "bg-verana/20 border border-verana/40"
        icon_block:
          icon: "fa-solid fa-database"
          icon_bg_class: "bg-verana/30"
          icon_color_class: "text-verana"
        headline: Directory & verification
        description: "Auto crawl, verify, and expose a public index of proven claims"
        items:
          - icon: "fa-solid fa-arrow-left"
            icon_color_class: "text-verana"
            text: "Ingest credentials from services"
          - icon: "fa-solid fa-arrow-right"
            icon_color_class: "text-green-400"
            text: "Expose trust-based discovery results"
        note: "Search by proven claims, not by ad budgets."
      - title: Consumers
        card_class: "bg-green-900/30 border border-green-700/50"
        icon_block:
          icon: "fa-solid fa-users"
          icon_bg_class: "bg-green-500/20"
          icon_color_class: "text-green-400"
        headline: End users
        description: "Query the resolver, evaluate proofs locally, and transact directly"
        items:
          - icon: "fa-solid fa-arrow-left"
            icon_color_class: "text-green-400"
            text: "Trust-based discovery"
          - icon: "fa-solid fa-arrow-right"
            icon_color_class: "text-blue-400"
            text: "Find & engage the right service"
        note: "Users pay providers directly—no hidden ad tax."
benefits:
  id: key-benefits
  title: Key Benefits of the Verana Model
  groups:
    - title: For Organizations
      icon: "fa-solid fa-building"
      icon_color_class: "text-blue-400"
      items:
        - "Equal discovery opportunities regardless of marketing budget."
        - "Compete on credentialed trust and service quality, not ad spend."
        - "Maintain direct relationships with customers without intermediaries."
        - "Operate with a transparent, verifiable reputation system."
    - title: For Consumers
      icon: "fa-solid fa-users"
      icon_color_class: "text-purple-400"
      items:
        - "Lower prices without the advertising markup baked into services."
        - "Discover quality offerings from organizations of any size."
        - "Verify every claim with cryptographic proofs."
        - "Escape algorithmic manipulation and dark advertising funnels."
cta:
  id: page-cta
  title: Ready to Transform Discovery?
  text: "Join the movement toward fair, transparent, and trust-based service discovery."
  buttons:
    - label: Start Building
      icon: "fa-solid fa-rocket"
      href: "#"
      class: "bg-verana hover:bg-verana-dark text-white"
    - label: Learn More
      href: "#"
      class: "border-2 border-gray-600 hover:border-verana text-white"
related:
  title: Related Concepts
  items:
    - icon: "fa-solid fa-key"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      title: Digital Ownership
      text: "Own your digital services, audience, and data — not just rent them from platforms."
      link:
        label: Learn More
        href: "/page/why-verana/ownership"
    - icon: "fa-solid fa-shield-halved"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Verifiable Trust
      text: "Know who to trust online with verifiable proof backed by cryptography."
      link:
        label: Explore
        href: "/page/why-verana/trust"
    - icon: "fa-solid fa-magnifying-glass"
      icon_bg_class: "bg-purple-500/20"
      icon_color_class: "text-purple-400"
      title: Trust Resolver
      text: "The search engine of verifiable trust—discover services based on proven claims."
      link:
        label: Discover
        href: "/page/trust-engine/trust-resolver"
---

{{< why-discovery >}}
