---
title: Trust Resolver
subtitle: "A public, decentralized index where discovery is based on cryptographically verified credentials, not advertising budgets."
url: "/page/trust-engine/trust-resolver"
meta_title: "Verana Trust Resolver | Discover Verifiable Services and Credentials"
meta_description: "See how the Verana Trust Resolver ranks services using verifiable credentials, enabling trustworthy search, advanced queries, and transparent discovery loops."
hero_icon: "fa-solid fa-magnifying-glass"
disable_content_wrapper: true
sidebar:
  title: Trust Resolver
  nav:
    - label: How It Works
      url: "#how-it-works"
      active: true
    - label: Advanced Trust-Based Queries
      url: "#advanced-queries"
    - label: Disrupting the Attention Economy
      url: "#trust-economy"
    - label: "Example #1: Alice's AI Assistant"
      url: "#example-alice"
    - label: "Example #2: Bob's E-commerce"
      url: "#example-bob"
    - label: A Trust-Driven Discovery Loop
      url: "#trust-summary"
  quick_links:
    - label: Documentation
      url: "https://docs.verana.io"
    - label: Discord
      url: "https://discord.gg/edjaFn252q"
    - label: Github
      url: "https://github.com/verana-labs"
intro:
  paragraphs:
    - |
      The internet today is built on **implicit trust**: users rely on search engines, platforms, and intermediaries to decide what is visible and who can be trusted. This model is opaque, advertising-driven, and often unsafe.
    - <br/><br/>
    - |
      The **Verana Trust Resolver** offers a new approach: a **public, decentralized index of services**. Instead of paid rankings or hidden algorithms, discoverability is based solely on **cryptographically verified credentials** issued by trusted ecosystems.
  highlight:
    icon: "fa-solid fa-lightbulb"
    title: In Short
    text: |
      The Trust Resolver is the **search engine of verifiable trust**, open, transparent, and free from centralized control.
how_it_works:
  title: How It Works
  lead: |
    Anyone can register a **DID** (the identifier of a Verifiable Service) in the **DID Directory**. Once registered, services are automatically crawled, their credentials dereferenced and verified, and then indexed in the **Verana Trust Resolver**.
  note: |
    Think of it as the **yellow pages of verifiable data**, but cryptographically guaranteed.
  steps:
    - icon: "fa-solid fa-plus"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      title: Register
      description: |
        Agents register their DID in the Verifiable Service Directory.
    - icon: "fa-solid fa-spider"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Crawl
      description: |
        Credentials are automatically crawled and cryptographically verified.
    - icon: "fa-solid fa-database"
      icon_bg_class: "bg-verana/20"
      icon_color_class: "text-verana"
      title: Index
      description: |
        Verified data is indexed in the public Trust Resolver database.
advanced_queries:
  title: Advanced Trust-Based Queries
  description: |
    With this index in place, users, services, and apps can perform **advanced trust-based queries**, such as:
  items:
    - icon: "fa-solid fa-robot"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      title: AI Assistant Discovery
      text: |
        "Where is Alice's AI Assistant whose attached **AI Assistant Credential** shows the owner name 'Alice'?"
    - icon: "fa-solid fa-share-nodes"
      icon_bg_class: "bg-purple-500/20"
      icon_color_class: "text-purple-400"
      title: Social Network Search
      text: |
        "Which social channels hold a **Blue Network Credential** from **Ecosystem DEF** and have an avatar credential containing **@bob_influencer**?"
    - icon: "fa-solid fa-shopping-cart"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: E-commerce Discovery
      text: |
        "Which services in Bristol, UK present an **E-commerce Retail Credential** from issuers of the **Ecosystem Ecommerce Global Alliance** and sell **baby shoes**?"
    - icon: "fa-solid fa-bed"
      icon_bg_class: "bg-orange-500/20"
      icon_color_class: "text-orange-400"
      title: Hotel Search
      text: |
        "List all services with a valid **Hotel Credential** from **Ecosystem PMS Vendor ABC** located in **France**."
    - icon: "fa-solid fa-wrench"
      icon_bg_class: "bg-red-500/20"
      icon_color_class: "text-red-400"
      title: Professional Agents
      text: |
        "Show certified plumbers AI assistants who hold a **Plumber Credential** from **Ecosystem Verified Workers** in **Bogotá**."
    - icon: "fa-solid fa-id-card"
      icon_bg_class: "bg-yellow-500/20"
      icon_color_class: "text-yellow-400"
      title: Identity Provenance
      text: |
        "Which services present a **Government-Issued Credential** proving a verified headquarters in **Toronto**?"
trust_economy:
  title: Disrupting the Attention Economy
  lead_paragraphs:
    - |
      The **Trust Resolver** ensures search results are based solely on **verifiable data** contained in verifiable credentials, not arbitrary or opaque ranking algorithms.
    - |
      This fundamentally **disrupts today's economy** of advertising-driven visibility (Google Ads, Facebook Ads, etc.) and replaces it with a **decentralized economy of trust**.
  old_model:
    title: "❌ Old Model"
    color: red
    items:
      - Opaque algorithms decide visibility
      - Pay-to-play advertising model
      - Centralized platform control
      - No verification of claims
  trust_model:
    title: "✅ Trust Economy"
    color: green
    items:
      - Ecosystems certify claims and issue credentials
      - Results are transparent and verifiable
      - Compete on trust and authenticity
      - Public, verifiable database of claims
examples:
  - id: alice
    title: "Example #1: Alice's AI Assistant"
    summary:
      icon: "fa-solid fa-robot"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      image: "/images/iuc/alice-ai-assistant.webp"
      image_alt: "Alice operating her AI assistant"
      heading: Alice runs an AI Assistant
      attached_credentials_title: "Attached Verifiable Credentials:"
      description: |
        Alice runs an **AI Assistant Verifiable Service (VS)**, deployed on Amazon Lambda.
      did: did:example:alice-ai-assistant
      credentials:
        columns: 3
        items:
          - icon: "fa-solid fa-user"
            icon_color_class: "text-blue-400"
            label: Person Credential
            text: |
              Proves that Alice is the owner of the AI Assistant.
          - icon: "fa-solid fa-cog"
            icon_color_class: "text-green-400"
            label: Agent Credential
            text: |
              Contains the assistant's name and minimum age requirements.
          - icon: "fa-solid fa-message"
            icon_color_class: "text-purple-400"
            label: Hologram Messaging
            text: |
              Shows the assistant can be reached via the Hologram Messaging VUA.
    steps:
      - title: Making It Discoverable
        icon: "fa-solid fa-plus-circle"
        icon_color_class: "text-verana"
        bullet_color_class: "bg-verana"
        style: "bg-verana/10 border border-verana/30"
        description: |
          Alice executes a transaction on the **Verana network** to register her DID in the **Verifiable Service Directory**.
        bullets:
          - DID is resolved
          - Credentials are crawled and verified
          - Results are indexed in Trust Resolver
      - title: Search in Action
        icon: "fa-solid fa-magnifying-glass"
        icon_color_class: "text-green-400"
        bullet_color_class: "bg-green-400"
        style: "bg-green-900/20 border border-green-700/50"
        description: |
          Alice's AI Assistant is now **automatically discoverable** through Trust Resolver queries:
        bullets:
          - Inside Hologram Messaging App
          - Through search-engine-style interface
  - id: bob
    title: "Example #2: Bob's E-commerce"
    summary:
      icon: "fa-solid fa-store"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      image: "/images/iuc/bob-shoes.webp"
      image_alt: "Bob showcasing children's shoes"
      heading: Bob's Niche E-commerce
      attached_credentials_title: "Attached Verifiable Credentials:"
      description: |
        Bob built an e-commerce business to serve a niche market: **children's shoes**. For his online shop, he chose [<u>Medusa</u>](https://medusajs.com/) as the platform.
      did: did:example:bob-ecommerce-kid-shoes
      credentials:
        columns: 4
        items:
          - icon: "fa-solid fa-building"
            icon_color_class: "text-blue-400"
            label: Organization
            text: |
              Bob Kid Shoes Ltd is the official owner.
          - icon: "fa-solid fa-cog"
            icon_color_class: "text-green-400"
            label: Agent
            text: |
              Shop name and age requirements.
          - icon: "fa-solid fa-bag-shopping"
            icon_color_class: "text-verana"
            label: E-commerce Retail
            text: |
              Describes the products sold and delivery areas covered.
          - icon_image: "/images/logos/medusa-white.svg"
            icon_image_class: "h-5 w-5"
            icon_alt: "Medusa logo"
            label: Medusa Credential
            text: |
              Links Bob's store to Medusa's official list of customers.
    steps:
      - title: Becoming Discoverable
        icon: "fa-solid fa-plus-circle"
        icon_color_class: "text-verana"
        bullet_color_class: "bg-verana"
        style: "bg-verana/10 border border-verana/30"
        description: |
          Bob executes a transaction on the **Verana network** to add his service DID to the **Verifiable Service Directory**.
        bullets:
          - DID is resolved
          - Credentials are crawled and verified
          - Content is indexed in Trust Resolver
      - title: Find My Shop
        icon: "fa-solid fa-magnifying-glass"
        icon_color_class: "text-green-400"
        bullet_color_class: "bg-green-400"
        style: "bg-green-900/20 border border-green-700/50"
        description: |
          Bob's shop can now be found automatically by anyone querying the Trust Resolver:
        bullets:
          - |
            "Which services in Bristol, UK present an **E-commerce Retail Credential** from issuers of the **Ecosystem Ecommerce Global Alliance** and sell **baby shoes**?"
trust_summary:
  title: A Trust-Driven Discovery Loop
  description: |
    The **Verifiable Service Directory** and the **Trust Resolver** fundamentally change how discovery works online.
  items:
    - icon: "fa-solid fa-seedling"
      text: |
        **Ecosystems** issue credentials that define trust frameworks.
    - icon: "fa-solid fa-user-check"
      icon_color_class: "text-green-400"
      icon_bg_class: "bg-green-500/20"
      text: |
        **Holders** attach credentials to their services to prove claims.
    - icon: "fa-solid fa-magnifying-glass"
      text: |
        Being **searchable** depends on verifiable authenticity within ecosystems.
  conclusion: |
    With Verana, discovery becomes fair, transparent, and privacy-preserving, shifting the internet from centralized platforms to a **trust-driven, ecosystem-based economy** where value flows back to those who prove and earn it.
cta:
  title: Ready to Build the Trust Economy?
  text: |
    Start building verifiable services and join the revolution in decentralized discovery.
  primary:
    label: Start Building
    icon: "fa-solid fa-rocket"
    href: "https://docs.verana.io"
  secondary:
    label: Talk to Us
    href: "https://discord.gg/edjaFn252q"
related_components:
  title: Related Trust Engine Components
  items:
    - icon: "fa-solid fa-folder-open"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      title: Verifiable Service Directory
      description: |
        The public registry where verifiable services register their DIDs for discovery.
      cta_label: Learn More
      cta_href: "/page/trust-engine"
    - icon: "fa-solid fa-shield-halved"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Trust Registries
      description: |
        Ecosystem-governed lists of trusted issuers and their credential schemas.
      cta_label: Explore
      cta_href: "/page/trust-engine/trust-registries"
    - icon: "fa-solid fa-check-double"
      icon_bg_class: "bg-purple-500/20"
      icon_color_class: "text-purple-400"
      title: Credential Verification
      description: |
        Cryptographic verification engine that validates credentials against trust registries.
      cta_label: Verify Now
      cta_href: "/page/trust-engine/credential-verification"
---

{{< trust-resolver >}}
