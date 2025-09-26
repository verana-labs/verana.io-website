---
title: Verifiable User Agents
subtitle: "A new class of applications that aggregate and interact with decentralized Verifiable Services, making trust-based discovery automatic and verifiable."
url: "/page/build/verifiable-user-agents"
meta_title: "Verifiable User Agents | Discover Trusted Services on Verana"
meta_description: "Design verifiable user agents that query the Verana Trust Resolver to aggregate decentralized services, enforce policies, and deliver trustworthy digital experiences."
hero_icon: "fa-solid fa-users-gear"
disable_content_wrapper: true
sidebar:
  title: Build
  nav:
    - label: Introduction
      url: "#content-intro"
      active: true
    - label: What VUAs Can Be
      url: "#vua-examples"
    - label: Business Models
      url: "#business-models"
    - label: How VUAs Work
      url: "#how-vuas-work"
    - label: VUA Architecture
      url: "#architecture-diagrams"
    - label: Why This Matters
      url: "#why-matters"
    - label: Real-World Example
      url: "#real-example"
  quick_links:  
    title: Quick Links
    items:
      - label: Documentation
        url: "https://docs.verana.io"
      - label: Discord
        url: "https://discord.gg/edjaFn252q"
      - label: Github
        url: "https://github.com/verana-labs"
intro:
  text: |
    **Verifiable User Agents (VUAs)** are a new class of applications that **aggregate and interact with decentralized Verifiable Services (VSs)**. Instead of relying on centralized APIs or walled-garden platforms, these apps query the **Verana Trust Resolver**, making any compatible Verifiable Service instantly visible and usable.
examples:
  title: What VUAs Can Be
  description: "VUAs unlock a wide variety of decentralized apps, for example:"
  cards:
    - icon: "fa-solid fa-share-nodes"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      title: Decentralized Social Networks
      text: "An X-like network built from decentralized Social Channels."
    - icon: "fa-solid fa-robot"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: AI Assistant Browsers
      text: "Apps for discovering and talking with official chat services and AI assistants."
    - icon: "fa-solid fa-video"
      icon_bg_class: "bg-purple-500/20"
      icon_color_class: "text-purple-400"
      title: Decentralized Video Apps
      text: "Streaming apps that aggregate film catalogs published by creators."
    - icon: "fa-solid fa-shopping-cart"
      icon_bg_class: "bg-orange-500/20"
      icon_color_class: "text-orange-400"
      title: E-commerce Aggregators
      text: "Apps that list all businesses using e-commerce Verifiable Services."
    - icon: "fa-solid fa-bed"
      icon_bg_class: "bg-red-500/20"
      icon_color_class: "text-red-400"
      title: Hotel PMS Apps
      text: "Users can book hotels directly through verified PMS-powered services."
    - icon: "fa-solid fa-ellipsis"
      icon_bg_class: "bg-verana/20"
      icon_color_class: "text-verana"
      title: And Many More
      text: "Innovations waiting to be built with trust-based indexing."
  highlight:
    icon: "fa-solid fa-key"
    icon_color_class: "text-verana"
    title: Key Advantage
    text: "Because indexing is trust-based, inclusion is **automatic and verifiable**: no gatekeepers, no paywalls."
business_models:
  title: Business Models for VUA Builders
  intro: "VUA developers can also create their **own ecosystem** within Verana. This allows them to:"
  cards:
    - icon: "fa-solid fa-gavel"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      title: Define Governance
      text: "Create their **Ecosystem Governance Framework (EGF)**."
    - icon: "fa-solid fa-certificate"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Issue Credentials
      text: "Issue or sell credentials to Verifiable Service owners."
    - icon: "fa-solid fa-eye"
      icon_bg_class: "bg-purple-500/20"
      icon_color_class: "text-purple-400"
      title: Control Visibility
      text: "Control how services appear within their VUA app."
  highlight:
    text: "When a service owner attaches such a credential to their Verifiable Service's DID, they **automatically become discoverable** inside the VUA."
  example:
    title: "Example: Blue Network VUA"
    description: "In a \"Blue Network\" VUA, an influencer could:"
    options:
      - icon: "fa-solid fa-gift"
        icon_color_class: "text-green-400"
        title: Free Option
        text: "Get a free credential to appear in the app."
      - icon: "fa-solid fa-crown"
        icon_color_class: "text-yellow-400"
        title: Premium Option
        text: "Purchase a premium credential to guarantee an ad-free experience for followers."
    conclusion: "This creates sustainable, privacy-preserving business models while giving service owners full autonomy over visibility and monetization."
how_it_works:
  title: How VUAs Work
  intro: "A **Verifiable User Agent (VUA)** is software, such as a browser, wallet, or app, that connects to VSs and other VUAs. To establish connections, a VUA must:"
  steps:
    - icon: "fa-solid fa-shield-check"
      icon_bg_class: "bg-verana/20"
      icon_color_class: "text-verana"
      title: Verify Credentials
      text: "Verify the credentials presented by peers to establish trusted connections."
    - icon: "fa-solid fa-search"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Query Network
      text: "Query the Verana Network to confirm credentials were issued by recognized authorities."
  highlight:
    text: "This ensures all connections are based on **verifiable trust**, not assumptions."
  discovery:
    title: VUA Discovery Capabilities
    intro: "In addition, VUAs can query the **Verifiable Service Directory** (indexed by the Trust Resolver) to:"
    items:
      - icon: "fa-solid fa-search"
        icon_bg_class: "bg-blue-500/20"
        icon_color_class: "text-blue-400"
        title: Smart Search
        text: "Let users search for services by credential attributes (e.g., find a social channel linked to an influencer's name)."
      - icon: "fa-solid fa-filter"
        icon_bg_class: "bg-purple-500/20"
        icon_color_class: "text-purple-400"
        title: Policy Enforcement
        text: "Enforce inclusion policies (e.g., only VSs with certain credentials can be listed or promoted)."
architecture:
  title: VUA Architecture
  instance:
    title: VUA Instance Components
    agent:
      title: Verifiable User Agent
      features:
        - icon: "fa-solid fa-key"
          icon_color_class: "text-yellow-400"
          text: Keys
        - icon: "fa-solid fa-link"
          icon_color_class: "text-blue-400"
          text: Connections
        - icon: "fa-solid fa-wallet"
          icon_color_class: "text-green-400"
          text: VC Wallet
        - icon: "fa-solid fa-coins"
          icon_color_class: "text-orange-400"
          text: Crypto Wallet
  network:
    title: Network Architecture
    center:
      label: VPR
      badge_class: "bg-pink-500/20 border border-pink-400 text-pink-400"
    services:
      label: Agents
      nodes:
        - label: VS1
          badge_class: "bg-teal-500/20 border border-teal-400 text-teal-400"
        - label: VS2
          badge_class: "bg-teal-500/20 border border-teal-400 text-teal-400"
        - label: TR
          badge_class: "bg-gray-600/20 border border-gray-500 text-gray-400"
    vua:
      label: VUA App
      nodes:
        - label: VUA1
          badge_class: "bg-verana/20 border border-verana text-verana"
        - label: VUA2
          badge_class: "bg-verana/20 border border-verana text-verana"
        - label: TR
          badge_class: "bg-gray-600/20 border border-gray-500 text-gray-400"
why_matters:
  title: Why This Matters
  old_model:
    title: "❌ Traditional Apps"
    items:
      - Rely on opaque algorithms
      - Advertising-driven models
      - Centralized gatekeepers
      - Walled garden platforms
  new_model:
    title: "✅ VUAs Flip This Model"
    items:
      - Verifiable credentials determine visibility
      - Ecosystem-defined governance
      - Ensuring fairness and privacy
      - Complete transparency
real_example:
  title: Real-World Example
  hero:
    icon: "fa-solid fa-message"
    icon_bg_class: "bg-purple-500/20"
    icon_color_class: "text-purple-400"
    title: Hologram Messaging
    subtitle: "The first known Verifiable User Agent"
  description: "A chatbot and AI agent browser that demonstrates the power of VUAs in practice."
  bullets:
    - Trust-based discovery
    - Verifiable AI assistants
    - Decentralized messaging
  info_card:
    title: Learn More
    text: "Explore how Hologram Messaging implements VUA principles in a real application."
    cta_label: Visit hologram.zone
    cta_href: "https://hologram.zone"
cta:
  title: Ready to Build Your VUA?
  text: "Start creating decentralized applications that aggregate verifiable services and unlock the trust economy."
  buttons:
    - text: Start Building
      icon: "fa-solid fa-code"
      href: "https://docs.verana.io"
      class: "bg-verana hover:bg-verana-dark text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 flex items-center space-x-2"
    - text: View Documentation
      href: "https://docs.verana.io"
      class: "border-2 border-gray-600 hover:border-verana text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105"
related:
  title: Related Build Components
  items:
    - icon: "fa-solid fa-cogs"
      icon_bg_class: "bg-teal-500/20"
      icon_color_class: "text-teal-400"
      title: Verifiable Services
      text: "Learn how to create the decentralized services that VUAs discover and interact with."
      cta_label: Learn More
      url: "/page/build/verifiable-services"
    - icon: "fa-solid fa-tools"
      icon_bg_class: "bg-orange-500/20"
      icon_color_class: "text-orange-400"
      title: Developer Tools
      text: "Access the tools and frameworks needed to build robust VUAs."
      cta_label: Explore Tools
      url: "https://docs.verana.io"
    - icon: "fa-solid fa-plug"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      title: Respositories
      text: "Integrate with Verana's trust infrastructure using our comprehensive repositories."
      cta_label: View Repositories
      url: "https://github.io/verana-labs/"
---

{{< verifiable-user-agents >}}
