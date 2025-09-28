---
title: Service Discovery
subtitle: "Breaking free from centralized platforms that control visibility through advertising budgets and opaque algorithms."
url: "/page/why-verana/discovery"
meta_title: "Why Verana | Service Discovery Without Ad Monopolies"
meta_description: "Understand how Verana replaces pay-to-play marketplaces with verifiable service discovery that rewards proof, provenance, and ecosystem governance."
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
  quick_links:
    title: Quick Links
    items:
      - label: Documentation
        url: "https://docs.verana.io"
      - label: Discord
        url: "https://discord.gg/edjaFn252q"
      - label: Github
        url: "https://github.com/verana-labs"
problem:
  id: broken-discovery
  title: Why Discoverability is Broken
  description: |
    Today, consumer discoverability of goods and services is controlled by centralized platforms that rely on advertising, opaque SEO algorithms, and now even sponsored AI results.
  cards:
    - wrapper_class: "bg-red-900/20 border border-red-700/50 rounded-2xl p-8"
      icon: "fa-solid fa-building"
      icon_bg_class: "bg-red-500/20"
      icon_color_class: "text-red-400"
      title: Wealth Concentration
      text: "Wealth is concentrated in a handful of dominant companies that control discovery algorithms."
    - wrapper_class: "bg-red-900/20 border border-red-700/50 rounded-2xl p-8"
      icon: "fa-solid fa-seedling"
      icon_bg_class: "bg-red-500/20"
      icon_color_class: "text-red-400"
      title: Stifled Innovation
      text: "Startups and SMEs cannot compete with massive advertising budgets, limiting innovation."
    - wrapper_class: "bg-red-900/20 border border-red-700/50 rounded-2xl p-8"
      icon: "fa-solid fa-dollar-sign"
      icon_bg_class: "bg-red-500/20"
      icon_color_class: "text-red-400"
      title: Higher Prices
      text: "Intermediaries capture disproportionate value, forcing consumers to pay higher prices."
  model:
    title: Current Discovery Model
    wrapper_class: "broken-model border border-red-700/30 rounded-2xl p-12 mb-8"
    columns:
      - title: Organizations
        cards:
          - wrapper_class: "bg-gray-900/50 border border-gray-700 rounded-xl p-6"
            icon: "fa-solid fa-building"
            icon_bg_class: "bg-blue-500/20"
            icon_color_class: "text-blue-400"
            title: High-Budget Organizations
            title_class: "font-semibold text-white"
            subtitle: "Enterprises, funded scale-ups"
            subtitle_class: "text-sm text-gray-300 mb-4"
            rows_wrapper_class: "space-y-2"
            rows:
              - icon: "fa-solid fa-arrow-right"
                icon_color_class: "text-green-400"
                text: "$$$ Ad Spend"
                text_class: "text-green-400 text-sm font-medium"
                class: "flex items-center space-x-2"
          - wrapper_class: "bg-gray-900/50 border border-gray-700 rounded-xl p-6"
            icon: "fa-solid fa-store"
            icon_bg_class: "bg-orange-500/20"
            icon_color_class: "text-orange-400"
            title: Low-Budget Organizations
            title_class: "font-semibold text-white"
            subtitle: "Startups, SMEs"
            subtitle_class: "text-sm text-gray-300 mb-4"
            rows_wrapper_class: "space-y-2"
            rows:
              - icon: "fa-solid fa-arrow-right"
                icon_color_class: "text-red-400"
                text: "$ Weak Ad Spend"
                text_class: "text-red-400 text-sm font-medium opacity-50"
                class: "flex items-center space-x-2 opacity-50"
      - title: Dominant Platforms
        cards:
          - wrapper_class: "bg-red-900/30 border border-red-700/50 rounded-xl p-8 text-center"
            icon: "fa-solid fa-crown"
            icon_bg_class: "bg-red-500/20"
            icon_color_class: "text-red-400"
            icon_wrapper_class: "w-16 h-16 rounded-2xl mx-auto"
            icon_class: "text-2xl"
            header_class: "flex flex-col items-center justify-center gap-4 mb-6"
            title: Advertising Platforms
            title_class: "font-bold text-white"
            subtitle: "Control discovery & ranking"
            subtitle_class: "text-sm text-gray-300 mb-6"
            rows_wrapper_class: "space-y-3"
            rows:
              - text: "High Visibility"
                text_class: "text-green-400 text-sm"
                icon: "fa-solid fa-arrow-right"
                icon_color_class: "text-green-400"
                icon_position: end
                class: "flex items-center justify-between"
              - text: "Low/No Visibility"
                text_class: "text-red-400 text-sm"
                icon: "fa-solid fa-arrow-right"
                icon_color_class: "text-red-400"
                icon_position: end
                class: "flex items-center justify-between opacity-50"
        note:
          wrapper_class: "bg-gray-800/50 border border-gray-600 rounded-lg p-4"
          text: "Wealth concentration at dominant platforms"
          text_class: "text-xs text-gray-400 text-center italic"
      - title: Consumers
        cards:
          - wrapper_class: "bg-gray-900/50 border border-gray-700 rounded-xl p-8 text-center"
            icon: "fa-solid fa-user"
            icon_bg_class: "bg-gray-500/20"
            icon_color_class: "text-gray-400"
            icon_wrapper_class: "w-16 h-16 rounded-2xl mx-auto"
            icon_class: "text-2xl"
            header_class: "flex flex-col items-center justify-center gap-4 mb-6"
            title: End Users
            title_class: "font-semibold text-white"
            subtitle: "Pay higher prices due to ad cost pass-through"
            subtitle_class: "text-sm text-gray-300 mb-6"
            blocks_wrapper_class: "space-y-3"
            blocks:
              - wrapper_class: "bg-green-900/20 border border-green-700/50 rounded-lg p-3"
                text: "Find high-budget services easily"
                text_class: "text-xs text-green-400"
              - wrapper_class: "bg-red-900/20 border border-red-700/50 rounded-lg p-3 opacity-50"
                text: "Rarely discover low-budget alternatives"
                text_class: "text-xs text-red-400"
        note:
          wrapper_class: "bg-gray-800/50 border border-gray-600 rounded-lg p-4"
          text: "Consumers pay higher prices to cover ad spend"
          text_class: "text-xs text-gray-400 text-center italic"
  issues:
    wrapper_class: "mt-12 pt-8 border-t border-red-700/30"
    grid_class: "grid md:grid-cols-2 gap-6"
    items:
      - title: For Small Organizations
        title_class: "font-semibold text-white mb-3"
        text: "Small budgets ⇒ little/no discoverability. Competing on ads is unsustainable."
        text_class: "text-sm text-gray-300"
        wrapper_class: "bg-red-900/20 border border-red-700/50 rounded-xl p-6"
      - title: For Consumers
        title_class: "font-semibold text-white mb-3"
        text: "Limited choice and higher prices due to platform intermediaries capturing value."
        text_class: "text-sm text-gray-300"
        wrapper_class: "bg-red-900/20 border border-red-700/50 rounded-xl p-6"
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
      href: "/page/build"
      class: "bg-verana hover:bg-verana-dark text-white"
    - label: Documentation
      href: "https://docs.verana.io"
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
        href: "/page/trust-engine/overview"
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
