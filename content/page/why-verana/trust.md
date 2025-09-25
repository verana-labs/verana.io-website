---
title: Making the Internet Trustworthy
subtitle: "Building a native trust layer for the internet through verifiable credentials and cryptographic proof of identity, authenticity, and ownership."
url: "/page/why-verana/trust"
hero_icon: "fa-solid fa-shield-check"
disable_content_wrapper: true
sidebar:
  title: Why Verana
  nav:
    - label: The Trust Problem
      url: "#trust-problem"
      active: true
    - label: How Verana Solves This
      url: "#verana-solution"
    - label: What Becomes Verifiable
      url: "#verifiable-examples"
    - label: How Trust Flows
      url: "#trust-flow"
    - label: Call to Action
      url: "#page-cta"
  quick_links:
    title: Quick Links
    items:
      - label: Trust Layer Architecture
        url: "#verana-solution"
      - label: Verifiable Credentials
        url: "#verifiable-examples"
      - label: Ecosystem Guide
        url: "#trust-flow"
trust_problem:
  id: trust-problem
  title: The Trust Problem
  description: |
    Today, the internet still lacks a native verifiable trust layer. Content, services, and users interact without cryptographic guarantees of who they are or what they represent. This fuels misinformation, fraud, opaque intermediaries, and a general erosion of trust online.
  image:
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/b19b51b2fe-348a9cb45746643bab4c.png"
    alt: "Illustration of the current internet trust problem with fragmented services, fake profiles, and warning indicators"
  cards:
    - icon: "fa-solid fa-exclamation-triangle"
      icon_bg_class: "bg-red-500/20"
      icon_color_class: "text-red-400"
      title: No Identity Verification
      text: "No cryptographic proof of who runs a service, owns content, or controls an account."
    - icon: "fa-solid fa-mask"
      icon_bg_class: "bg-orange-500/20"
      icon_color_class: "text-orange-400"
      title: Fake Identities & Fraud
      text: "Brand impersonation, credential stuffing, phishing, and misinformation spread unchecked."
    - icon: "fa-solid fa-eye-slash"
      icon_bg_class: "bg-yellow-500/20"
      icon_color_class: "text-yellow-400"
      title: Opaque Intermediaries
      text: "Users cannot reliably verify identity or authenticity of what they see and who they engage with."
solution:
  id: verana-solution
  title: How Verana Solves This
  paragraphs:
    - "Verana introduces a **public, permissionless trust infrastructure** that generalizes the use of verifiable credentials. Any ecosystem—governments, industries, communities—can use Verana to build sovereign trust networks."
    - "Within these networks, participants can issue, verify, and obtain credentials that certify claims of identity, authenticity, or authorization. Credential holders can attach these proofs to their digital assets, services, and channels, demonstrating ownership, provenance, or qualifications."
  highlight:
    icon: "fa-solid fa-lightbulb"
    icon_color_class: "text-verana"
    title: The Result
    text: "This creates a **Verifiable Identity Layer for the Internet**, turning the web into an environment where trust is transparent, interoperable, and verifiable."
  image:
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/8854f05533-b772b6bcbb012b82f99f.png"
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
      text: "Signed content reveals exactly who published it and when."
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
trust_flow:
  id: trust-flow
  title: How Trust Flows in Verana
  image:
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/1d010441de-6c31303c73e9ac73cff4.png"
    alt: "Diagram showing credential issuance, attachment to services, and local verification in Verana"
  steps:
    - icon: "fa-solid fa-certificate"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      title: 1. Credential Issuance
      text: "Owners request verification from trusted issuers and receive verifiable credentials."
    - icon: "fa-solid fa-link"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: 2. Credential Attachment
      text: "Owners attach credentials to their services, proving ownership and authenticity."
    - icon: "fa-solid fa-shield-check"
      icon_bg_class: "bg-verana/20"
      icon_color_class: "text-verana"
      title: 3. Local Verification
      text: "Users verify credentials locally without contacting the issuer, establishing trust instantly."
  benefits:
    title: Key Benefits of Local Verification
    icon: "fa-solid fa-info-circle"
    icon_color_class: "text-verana"
    items:
      - Check issuer signatures cryptographically.
      - Validate credential integrity and expiry status.
      - Use cached keys and trust registries.
      - No contact with the issuer required.
cta:
  id: page-cta
  title: Ready to Build Trustworthy Digital Services?
  text: "Start implementing verifiable credentials and join the movement toward a more trustworthy internet."
  buttons:
    - label: Get Started
      icon: "fa-solid fa-rocket"
      href: "#"
      class: "bg-verana hover:bg-verana-dark text-white"
    - label: Learn More
      href: "#"
      class: "border-2 border-gray-600 hover:border-verana text-white"
related:
  title: Explore More About Verana
  items:
    - icon: "fa-solid fa-key"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Ownership
      text: "Own your digital services, audience, and data—not just rent them from platforms."
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
      title: Digital Sovereignty
      text: "Reclaim control over your digital presence and break free from platform dependency."
      url: "/page/why-verana/digital-sovereignty"
      cta_label: Claim Sovereignty
---

{{< why-trust >}}
