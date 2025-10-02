---
title: Government Digital ID
subtitle: "Issue privacy-preserving national IDs and let citizens prove attributes anywhere, without centralizing their data."
url: "/page/industry-use-cases/government-id"
meta_title: "Government Digital ID | Verana - Build your Trust Networks"
meta_description: "Modernize national ID programs with Verana to issue verifiable credentials, enable selective disclosure, and deliver privacy-preserving citizen services."
hero_icon: "fa-solid fa-id-card"
disable_content_wrapper: true
use_case_partial: "government-id"
sidebar:
  title: Industry Use Cases
  nav:
    - label: Overview
      url: "#introduction-section"
      active: true
    - label: Digital Identity Ecosystem
      url: "#ecosystem-section"
    - label: Digital Wallet
      url: "#wallet-section"
    - label: Citizen Onboarding
      url: "#onboarding-section"
    - label: Issuing the ID VC
      url: "#issuing-section"
    - label: Authorized Verifiers
      url: "#verifiers-section"
    - label: Selective Disclosure
      url: "#disclosure-section"
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
  id: introduction-section
  text: |
    Verana provides governments with full **open source software and infrastructure** to issue **privacy-preserving, verifiable, decentralized Digital IDs** that empower citizens while maintaining national sovereignty over identity systems.
ecosystem:
  id: ecosystem-section
  icon: "fa-solid fa-building"
  icon_color_class: "text-blue-400"
  title: Create the Digital Identity Ecosystem
  heading: "Governments establish:"
  cards:
    - icon: "fa-solid fa-gavel"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      title: Ecosystem Governance Framework (EGF)
      text: |
        Sets rules for Citizen ID issuance, verification, and authorization of participants, including optional pay-per-verification revenue models.
    - icon: "fa-solid fa-database"
      icon_bg_class: "bg-verana/20"
      icon_color_class: "text-verana"
      title: Ecosystem Trust Registry
      text: |
        Deploy in Verana to mirror the EGF and publish the **Citizen ID Credential Schema** for issuers and verifiers.
    - icon: "fa-solid fa-users"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Onboard Ecosystem Participants
      text: |
        Use Verana’s trust registry onboarding flows to accredit verifiers or delegate onboarding to other government-approved operators.
wallet:
  id: wallet-section
  icon: "fa-solid fa-mobile-alt"
  icon_color_class: "text-green-400"
  title: Build a Digital Wallet
  intro: |
    Governments deliver a **Digital Wallet mobile app** that acts as a **Verifiable User Agent (VUA)** for citizens.
  cards:
    - icon: "fa-solid fa-wallet"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      title: Store Credentials
      text: Citizens keep their Citizen ID Verifiable Credential securely inside the wallet.
    - icon: "fa-solid fa-crown"
      icon_bg_class: "bg-purple-500/20"
      icon_color_class: "text-purple-400"
      title: Self-Sovereign
      text: Citizens control their credentials with no central account or dependency on a single provider.
    - icon: "fa-solid fa-handshake"
      icon_bg_class: "bg-orange-500/20"
      icon_color_class: "text-orange-400"
      title: Open Standards
      text: Compatible with EIDAS2, DIDs, DIDComm, W3C VCs, OpenID4VC, and OpenID4VP.
onboarding:
  id: onboarding-section
  icon: "fa-solid fa-user-plus"
  icon_color_class: "text-purple-400"
  title: Citizen Onboarding into the Central Registry
  left_heading: "At public offices (e.g., civil registry):"
  steps:
    - badge_number: "1"
      text: Citizen biometric data is captured and documents validated.
    - badge_number: "2"
      text: Citizen data is recorded in the **central registry database**.
    - badge_number: "3"
      text: Citizen receives an **NFC-enabled ID card** containing personal and biometric information.
  highlight:
    text: This ensures **official enrollment** into the state identity system.
  image:
    src: "/images/purple/civilreg1.webp"
    alt: "Citizen enrollment at civil registry capturing biometrics and issuing NFC-enabled ID card"
issuing:
  id: issuing-section
  icon: "fa-solid fa-certificate"
  icon_color_class: "text-orange-400"
  title: Issuing the Citizen ID Verifiable Credential
  description: |
    Citizens obtain their **Citizen ID Verifiable Credential** by downloading the Government Digital Wallet and completing a secure identity validation flow.
  steps_heading: "Example Enrollment Flow:"
  steps:
    - badge_number: "1"
      text: Citizen captures a photo of the **physical ID card**; the app reads the **MRZ** to retrieve the NFC access key.
    - badge_number: "2"
      text: Citizen enters the **card PIN** to authorize the process.
    - badge_number: "3"
      text: Citizen taps the ID card on the handset, enabling an **NFC read** of personal and biometric data.
    - badge_number: "4"
      text: App performs a **live face match** with the ID photo to ensure the legitimate cardholder.
    - badge_number: "5"
      text: Upon success, a **Citizen ID Verifiable Credential** is issued directly to the digital wallet.
  image:
    src: "/images/purple/civilreg5.webp"
    alt: "Citizen using mobile app to enroll ID card via NFC and biometric verification"
  highlight:
    text: "Any previously issued credential is **automatically revoked**, guaranteeing only **one valid credential** per citizen."
verifiers:
  id: verifiers-section
  icon: "fa-solid fa-shield-check"
  icon_color_class: "text-green-400"
  title: Authorized Verifiers
  intro: |
    Governments decide who can request credential presentations and how they are authorized.
  validation_cards:
    - icon: "fa-solid fa-check-circle"
      icon_color_class: "text-green-400"
      title: Validation Process
      text: Applicants such as banks, telecoms, and hospitals complete a formal **validation process** before onboarding.
    - icon: "fa-solid fa-user-check"
      icon_color_class: "text-blue-400"
      title: Authorization
      text: Once approved, organizations are registered as **authorized verifiers** for the Citizen ID schema.
  pay_per_model:
    title: Pay-per-Verification Model
    icon: "fa-solid fa-coins"
    icon_color_class: "text-verana"
    items:
      - text: Each verification request incurs a privacy-preserving fee.
      - text: Issuers are rewarded without learning which citizen presented credentials.
      - text: Supports sustainable funding for national digital identity services.
disclosure:
  id: disclosure-section
  icon: "fa-solid fa-eye-slash"
  icon_color_class: "text-purple-400"
  title: Selective Disclosure
  intro: |
    By supporting advanced credential formats (ZKPs, BBS+, Anoncreds), governments deliver privacy-preserving verification.
  cards:
    - icon: "fa-solid fa-mask"
      icon_color_class: "text-purple-400"
      title: Minimal Disclosure
      text: Citizens can **prove attributes without revealing full data** (e.g., “over 18” without disclosing birthdate).
    - icon: "fa-solid fa-shield"
      icon_color_class: "text-green-400"
      title: Privacy Protection
      text: Minimal disclosure reduces risks of data misuse across public and private services.
  image:
    src: "/images/purple/civilreg4.webp"
    alt: "Visualization of selective disclosure protecting citizen data during verification"
cta:
  title: Ready to Build Sovereign Digital Identity?
  text: |
    Start implementing privacy-preserving digital ID systems that empower citizens while maintaining national sovereignty.
  primary:
    label: Start Building
    url: "/page/build"
    icon: fa-solid fa-id-card
  secondary:
    label: View Implementation Guide
    url: "https://docs.verana.io"
related_use_cases:
  title: Related Industry Use Cases
  items:
    - icon: "fa-solid fa-user-md"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Healthcare Workforce Mobility
      text: |
        Let clinicians carry verifiable licenses, training, and background checks—so onboarding takes minutes, not weeks.
      url: "/page/industry-use-cases/healthcare-workforce-mobility"
      cta_label: Learn More
    - icon: "fa-solid fa-robot"
      icon_bg_class: "bg-purple-500/20"
      icon_color_class: "text-purple-400"
      title: AI Agents
      text: |
        Bind AI agents to accountable owners and enforce policies with verifiable credentials.
      url: "/page/industry-use-cases/ai-agents"
      cta_label: Explore
    - icon: "fa-solid fa-building"
      icon_bg_class: "bg-orange-500/20"
      icon_color_class: "text-orange-400"
      title: Hotel Discovery
      text: |
        Break free from broker monopolies by proving hotel credentials directly to travelers.
      url: "/page/industry-use-cases/hotel-management"
      cta_label: Discover
---

{{< industry-use-case >}}
