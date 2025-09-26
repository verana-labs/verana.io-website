---
title: Trust Engine Overview
subtitle: "Building a native trust layer for the internet through verifiable credentials and cryptographic proof of identity, authenticity, and ownership."
url: "/page/trust-engine/overview"
hero_icon: "fa-solid fa-shield-halved"
disable_content_wrapper: true
sidebar:
  title: Trust Engine
  nav:
    - label: How Verana Solves Trust
      url: "#verana-solution"
      active: true
    - label: What Becomes Verifiable
      url: "#verifiable-examples"
    - label: How Trust Flows
      url: "#trust-flow"
  quick_links:
    title: Quick Links
    items:
      - label: Trust Resolver
        url: "/page/trust-engine/trust-resolver/"
      - label: Documentation
        url: "https://docs.verana.io"
      - label: Discord
        url: "https://discord.gg/edjaFn252q"
      - label: Github
        url: "https://github.com/verana-labs"
solution:
  id: verana-solution
  title: How Verana Solves Trust
  paragraphs:
    - "Verana introduces a **public, permissionless trust infrastructure** that generalizes the use of verifiable credentials. Any ecosystem, governments, industries, communities... can use Verana to build sovereign trust networks."
    - "Within these networks, participants can issue, verify, and obtain credentials that certify claims of identity, authenticity, or authorization. Credential holders can attach these proofs to their digital assets, services, and channels, demonstrating ownership, provenance, or qualifications."
  highlight:
    icon: "fa-solid fa-lightbulb"
    icon_color_class: "text-verana"
    title: The Result
    text: "This creates a **Verifiable Identity Layer for the Internet**, turning the web into an environment where trust is transparent, interoperable, and verifiable."
  image:
    src: "/images/purple/trust-photo.webp"
    alt: "Illustration of Verana's trust architecture with issuing, verifying, attaching, and trusting"
  steps:
    - icon: "fa-solid fa-certificate"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      title: Issue
      text: "Ecosystems issue verifiable credentials."
    - icon: "fa-solid fa-check-double"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Verify
      text: "Claims are verified cryptographically."
    - icon: "fa-solid fa-link"
      icon_bg_class: "bg-purple-500/20"
      icon_color_class: "text-purple-400"
      title: Attach
      text: "Proof travels with digital assets and services."
    - icon: "fa-solid fa-shield-check"
      icon_bg_class: "bg-verana/20"
      icon_color_class: "text-verana"
      title: Trust
      text: "Interactions become transparent and verifiable."
examples:
  id: verifiable-examples
  title: Examples of What Becomes Verifiable
  intro: "With Verana's trust infrastructure, virtually any digital claim can be made verifiable:"
  items:
    - icon: "fa-solid fa-server"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      title: Digital Services
      text: "A service can prove who owns and operates it."
    - icon: "fa-solid fa-user-check"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Individual Claims
      text: "People can prove identity, membership, diplomas, or qualifications anywhere online."
    - icon: "fa-solid fa-desktop"
      icon_bg_class: "bg-purple-500/20"
      icon_color_class: "text-purple-400"
      title: User Agents
      text: "Services verify the authenticity of the software connecting to them."
    - icon: "fa-solid fa-file-signature"
      icon_bg_class: "bg-orange-500/20"
      icon_color_class: "text-orange-400"
      title: Content Provenance
      text: "DID-signed content reveals exactly who published it and when thanks to C2PA and Verifiable Credentials."
    - icon: "fa-solid fa-code"
      icon_bg_class: "bg-red-500/20"
      icon_color_class: "text-red-400"
      title: Smart Contracts
      text: "Organizations can prove control over specific smart contracts."
    - icon: "fa-solid fa-coins"
      icon_bg_class: "bg-yellow-500/20"
      icon_color_class: "text-yellow-400"
      title: RWA Token Ownership
      text: "Individuals can prove ownership of real-world asset tokens."
cta:
  id: page-cta
  title: Ready to Build Trustworthy Digital Services?
  text: "Start implementing verifiable credentials and join the movement toward a more trustworthy internet."
  buttons:
    - label: Build
      icon: "fa-solid fa-rocket"
      href: "/page/build"
      class: "bg-verana hover:bg-verana-dark text-white"
    - label: Documentation
      href: "https://docs.verana.io"
      class: "border-2 border-gray-600 hover:border-verana text-white"
related:
  title: Explore More About Verana
  items:
    - icon: "fa-solid fa-key"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Ownership
      text: "Own your digital services, audience, and data: not just rent them from platforms."
      url: "/page/why-verana/ownership"
      cta_label: Learn About Ownership
    - icon: "fa-solid fa-compass"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      title: Discovery
      text: "Be discovered for what you prove, not for what you pay in advertising."
      url: "/page/why-verana/discovery"
      cta_label: Explore Discovery
    - icon: "fa-solid fa-crown"
      icon_bg_class: "bg-purple-500/20"
      icon_color_class: "text-purple-400"
      title: Trust Engine
      text: "Learn about Verana's trust engine"
      url: "/page/trust-engine"
      cta_label: Understand Verifiable Trust
---

{{< why-trust >}}
