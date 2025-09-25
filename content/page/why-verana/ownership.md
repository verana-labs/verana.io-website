---
title: Service Ownership
subtitle: "Own your digital services, your audience, and your data — not just rent them from centralized platforms."
url: "/page/why-verana/ownership"
hero_icon: "fa-solid fa-key"
disable_content_wrapper: true
sidebar:
  title: Why Verana
  nav:
    - label: The No Ownership Problem
      url: "#no-ownership-problem"
      active: true
    - label: Self-Sovereign Services
      url: "#self-sovereign-services"
    - label: Examples
      url: "#examples-section"
    - label: Call to Action
      url: "#page-cta"
  quick_links:
    title: Quick Links
    items:
      - label: Getting Started
        url: "#page-cta"
      - label: Use Cases
        url: "#examples-section"
      - label: Migration Guide
        url: "#self-sovereign-services"
problem:
  id: no-ownership-problem
  title: The No Ownership Problem
  description: |
    Today's digital services are built on centralized platforms that act as gatekeepers. Whether it's a social network, an app store, or a SaaS provider, organizations and individuals rarely own their services or their audiences.
  issues:
    - icon: "fa-solid fa-link"
      icon_bg_class: "bg-red-500/20"
      icon_color_class: "text-red-400"
      title: Content and connections are rented
      text: "Your audience, data, and digital presence exist at the mercy of platform policies."
    - icon: "fa-solid fa-gavel"
      icon_bg_class: "bg-red-500/20"
      icon_color_class: "text-red-400"
      title: Opaque rules and de-platforming
      text: "Platforms can change rules or remove your service without warning or recourse."
    - icon: "fa-solid fa-truck"
      icon_bg_class: "bg-red-500/20"
      icon_color_class: "text-red-400"
      title: Costly, disruptive migrations
      text: "Moving between providers often means losing audience, data, and starting from scratch."
    - icon: "fa-solid fa-chart-line"
      icon_bg_class: "bg-red-500/20"
      icon_color_class: "text-red-400"
      title: Data captured and monetized
      text: "User data is mined and monetized by intermediaries, not by service owners."
  model:
    title: Current Centralized Model
    organization:
      icon: "fa-solid fa-user"
      icon_bg_class: "bg-blue-500/30"
      icon_color_class: "text-blue-400"
      title: Organization
      subtitle: Individual
    platform:
      icon: "fa-solid fa-building"
      icon_bg_class: "bg-red-500/30"
      icon_color_class: "text-red-400"
      title: Centralized Platform
      bullets:
        - Opaque rules
        - Arbitrary de-platforming
        - Vendor lock-in
        - Data exploitation
    users:
      icon: "fa-solid fa-users"
      icon_bg_class: "bg-gray-500/30"
      icon_color_class: "text-gray-300"
      title: End Users
      subtitle: Audience
    left_label: Dependent
    right_label: Controlled
  result:
    icon: "fa-solid fa-exclamation-triangle"
    icon_bg_class: "bg-red-500/20"
    icon_color_class: "text-red-400"
    title: The Result
    text: "Vendor lock-in, loss of sovereignty, and a fragile dependency on centralized operators."
solution:
  id: self-sovereign-services
  title: Migrating from Vendor Lock-in to Self-Sovereign Services
  intro_paragraphs:
    - "Verana enables organizations and individuals to deploy **Self-Sovereign Services**: digital services they fully own and control. Built on verifiable credentials and decentralized trust registries, these services are portable, provable, and free from platform lock-in."
  properties:
    items:
      - icon: "fa-solid fa-crown"
        icon_bg_class: "bg-green-500/20"
        icon_color_class: "text-green-400"
        title: True Ownership
        text: "Services run under your decentralized identifier (DID), not under a platform account."
      - icon: "fa-solid fa-database"
        icon_bg_class: "bg-green-500/20"
        icon_color_class: "text-green-400"
        title: Data Sovereignty
        text: "Retain full control over your data, audience, and connections at all times."
      - icon: "fa-solid fa-arrows-rotate"
        icon_bg_class: "bg-green-500/20"
        icon_color_class: "text-green-400"
        title: Portability
        text: "Migrate freely between cloud, self-hosted, or hybrid environments without losing trust or discoverability."
      - icon: "fa-solid fa-shield-check"
        icon_bg_class: "bg-green-500/20"
        icon_color_class: "text-green-400"
        title: Verifiable Authenticity
        text: "Cryptographically prove the legitimacy of your service to users and partners."
      - icon: "fa-solid fa-magnifying-glass"
        icon_bg_class: "bg-green-500/20"
        icon_color_class: "text-green-400"
        title: Trust-Based Discovery
        text: "Services are discovered via Verana’s resolver, ranked by credentials—not ad budgets."
      - icon: "fa-solid fa-gear"
        icon_bg_class: "bg-green-500/20"
        icon_color_class: "text-green-400"
        title: Autonomous Operation
        text: "Operate independently without requiring platform permissions or approvals."
  examples_intro: "Examples of Self-Sovereign Services include:"
  examples:
    - icon: "fa-solid fa-share-nodes"
      icon_bg_class: "bg-purple-500/20"
      icon_color_class: "text-purple-400"
      title: Decentralized Social Channels
      text: "Creators fully own their channels, audiences, and provenance."
    - icon: "fa-solid fa-robot"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      title: Agentic AI & IoT Services
      text: "AI agents and IoT devices operate under verifiable credentials with provable ownership."
    - icon: "fa-solid fa-play"
      icon_bg_class: "bg-orange-500/20"
      icon_color_class: "text-orange-400"
      title: Content Delivery Channels
      text: "Media catalogs and content services with guaranteed provenance and creator attribution."
    - icon: "fa-solid fa-comments"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Business Chatbots
      text: "Customer support and business chatbots that remain verifiable and portable."
  model:
    title: Self-Sovereign Service Model
    organization:
      icon: "fa-solid fa-user-crown"
      icon_bg_class: "bg-green-500/30"
      icon_color_class: "text-green-400"
      title: Organization
      subtitle: Individual
    service:
      icon: "fa-solid fa-key"
      icon_bg_class: "bg-verana/30"
      icon_color_class: "text-verana"
      title: Self-Sovereign Service
      subtitle: Owned under DID
    resolver:
      icon: "fa-solid fa-compass"
      icon_bg_class: "bg-blue-500/30"
      icon_color_class: "text-blue-400"
      title: Verana Trust Resolver
      subtitle: Auto-indexed
    users:
      icon: "fa-solid fa-users"
      icon_bg_class: "bg-blue-500/30"
      icon_color_class: "text-blue-400"
      title: End Users
      subtitle: Audience
    labels:
      deploy: Deploy & Control
      indexed: Auto-indexed
      interaction: Direct Interaction
      interaction_subtitle: "(no intermediaries)"
      discover: Discover
  migration:
    icon: "fa-solid fa-lightbulb"
    icon_bg_class: "bg-green-500/20"
    icon_color_class: "text-green-400"
    title: The Migration
    text: "Replace dependency on centralized vendors with autonomous, verifiable ownership, turning digital services into **assets you control**, not permissions you rent."
cta:
  id: page-cta
  title: Ready to Own Your Digital Services?
  text: "Start building self-sovereign services that you truly own and control."
  buttons:
    - label: Start Building
      icon: "fa-solid fa-key"
      href: "#"
      class: "bg-green-500 hover:bg-green-600 text-white"
    - label: View Migration Guide
      href: "#"
      class: "border-2 border-gray-600 hover:border-green-500 text-white"
related:
  title: Related Concepts
  items:
    - icon: "fa-solid fa-globe"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      title: Digital Sovereignty
      text: "Reclaim control over your digital presence and break free from platform dependency."
      url: "/page/why-verana/digital-sovereignty"
      cta_label: Learn More
    - icon: "fa-solid fa-magnifying-glass"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Trust & Discovery
      text: "Be discovered based on verifiable credentials, not advertising budgets."
      url: "/page/why-verana/trust"
      cta_label: Explore
    - icon: "fa-solid fa-code"
      icon_bg_class: "bg-purple-500/20"
      icon_color_class: "text-purple-400"
      title: Open Standards
      text: "Build on open protocols that ensure interoperability and prevent lock-in."
      url: "/page/why-verana/open-standards"
      cta_label: View Standards
---

{{< why-ownership >}}
