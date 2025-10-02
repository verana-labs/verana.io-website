---
title: Notaries & Power of Attorney
subtitle: "Transform paper-based power-of-attorney process into a verifiable, efficient, and fraud-resistant digital credential system."
url: "/page/industry-use-cases/notaries"
meta_title: "Verana for Notaries | Verifiable Power of Attorney in Mexico"
meta_description: "Digitalize power-of-attorney process with Verana by issuing verifiable credentials, accelerating revocations, and delivering trustworthy notarized records."
hero_icon: "fa-solid fa-stamp"
disable_content_wrapper: true
use_case_partial: "notaries2"
sidebar:
  title: Industry Use Cases
  nav:
    - label: Overview
      url: "#problem-statement"
      active: true
    - label: National Trust Ecosystem
      url: "#solution-section"
    - label: Digital Ecosystem Setup
      url: "#digital-ecosystem"
    - label: Streamlined Workflows
      url: "#new-workflows"
    - label: Benefits
      url: "#conclusion"
  quick_links:
    title: Quick Links
    items:
      - label: Implementation Guide
        url: "https://docs.verana.io"
      - label: Technical Specs
        url: "https://docs.verana.io/reference"
      - label: Case Studies
        url: "/page/industry-use-cases"
problem:
  id: problem-statement
  title: "A Manual, Inefficient Process"
  intro: "In many countries, granting and using a **Power of Attorney** is a **paper-based, fragmented, and costly process**."
  issuing:
    title: "Issuing a Power of Attorney"
    bullets:
      - icon: "fa-solid fa-user-check"
        text: "The grantor visits a notary and proves they are the legal representative of a company."
      - icon: "fa-solid fa-signature"
        text: "The notary drafts the power, signs it with the grantor, and keeps a physical copy."
      - icon: "fa-solid fa-envelope"
        text: "Copies are delivered to both parties, often with no central database to reference."
  revoking:
    title: "Revoking a Power of Attorney"
    bullets:
      - icon: "fa-solid fa-building-columns"
        text: "Grantor or grantee can visit **any notary office** to initiate the revocation."
      - icon: "fa-solid fa-phone"
        text: "The receiving notary must contact the issuing notary to confirm the request."
      - icon: "fa-solid fa-folder-open"
        text: "They need the original document before proceeding, creating complex inter-notary coordination."
  using:
    title: "Using a Power of Attorney"
    intro: "Example: when a power is presented at a bank."
    bullets:
      - icon: "fa-solid fa-file-lines"
        text: "The grantee presents the **physical copy** of the power of attorney."
      - icon: "fa-solid fa-phone-volume"
        text: "The bank calls the issuing notary to confirm authenticity."
      - icon: "fa-solid fa-phone-slash"
        text: "Banks should contact **multiple notaries** to ensure no revocation exists elsewhere."
      - icon: "fa-solid fa-repeat"
        text: "Many institutions repeat the process periodically, just in case the power was revoked."
  friction_callout: "This system creates **unnecessary friction and cost** for notaries, grantees, and verifiers like banks who manage repetitive checks."
  illustration:
    img_class: "w-full h-96 object-cover"
    src: "/images/purple/bank-mess3.webp"
    alt: "Bank teller contacting several notary offices surrounded by stacks of documents"
solution:
  id: solution-section
  title: "The Solution: A National Trust Ecosystem for Notaries"
  intro: "In Utopia Country, notary system relies on the **National Notaries Association**, **District Notaries Association**, and individual **Notaries**. Verana digitizes this structure with verifiable credentials."
  digital_ecosystem:
    title: "Establishing a Digital Ecosystem"
    intro: "The **National Notaries Association** launches a **Notarial Trust Ecosystem** on Verana to digitize and streamline the power-of-attorney process."
    steps:
      - number: "1"
        title: "Publishes an Ecosystem Governance Framework (EGF)"
        bullets:
          - icon: "fa-solid fa-gavel"
            text: "Defines the rules for issuance, verification, revocation, and compliance."
          - icon: "fa-solid fa-file-contract"
            text: "Establishes the **Power of Attorney Credential Schema**."
          - icon: "fa-solid fa-users"
            text: "Outlines procedures for onboarding participants"
      - number: "2"
        title: "Designs the Credential & Permission Tree"
        bullets:
          - icon: "fa-solid fa-network-wired"
            text: "Maps roles and permissions from National Notaries Association down to authorized notaries."
          - icon: "fa-solid fa-diagram-project"
            text: "Publishes the credential schema and trust registry policies in Verana."
      - number: "3"
        title: "Creates a Trust Registry in Verana"
        bullets:
          - icon: "fa-solid fa-cogs"
            text: "Implements the rules and credential schemas defined in the EGF."
          - icon: "fa-solid fa-list"
            text: "Maintains the list of authorized issuers, verifiers, and registry grantors."
          - icon: "fa-solid fa-shield-check"
            text: "Enforces revocation and validity checks across the entire ecosystem."
  implementation_diagram:
    title: "Implementation Diagram"
    intro: "Based on the defined EGF, here is the corresponding **Power of Attorney Credential Schema** permission tree to implement."
    diagram: |
      {{< kroki _type="plantuml" >}}
      @startuml
      scale max 800 width
      skinparam backgroundColor transparent
      skinparam DefaultTextAlignment center
      skinparam defaultFontName "Inter"
      skinparam defaultFontColor #E2E8F0
      skinparam ArrowColor #94A3B8
      skinparam ArrowThickness 2
      skinparam ObjectBorderColor #1F2937
      skinparam ObjectFontColor #E2E8F0
      skinparam ObjectFontName "Inter"
      package "Power of Attorney Credential Schema Permission Tree" as cs {
          object "National Notaries Association" as tr #382F5A {
              permissionType: ECOSYSTEM (Root)
              did:example:national-association
          }
          object "District Notaries Association #1" as ig1 #1F3457 {
              permissionType: ISSUER_GRANTOR
              did:example:district-association1
          }
          object "District Notaries Association #2" as ig2 #1F3457 {
              permissionType: ISSUER_GRANTOR
              did:example:district-association2
          }
          object "Notary 13" as issuer13 #1C423A {
              permissionType: ISSUER
              did:example:notary13
          }
          object "Notary 24" as issuer24 #1C423A {
              permissionType: ISSUER
              did:example:notary24
          }
          object "Notary 25" as issuer25 #1C423A {
              permissionType: ISSUER
              did:example:notary25
          }
          object "Notary 26" as issuer26 #1C423A {
              permissionType: ISSUER
              did:example:notary26
          }
      }
      tr --> ig1
      tr --> ig2
      ig1 --> issuer13
      ig2 --> issuer24
      ig2 --> issuer25
      ig2 --> issuer26
      @enduml
      {{< /kroki >}}
    cards:
      - icon: "fa-solid fa-crown"
        icon_bg: "bg-verana/20"
        icon_color: "text-verana"
        title: "National Notaries Association"
      - icon: "fa-solid fa-building"
        icon_bg: "bg-blue-500/20"
        icon_color: "text-blue-400"
        title: "District Notaries Association"
      - icon: "fa-solid fa-stamp"
        icon_bg: "bg-green-500/20"
        icon_color: "text-green-400"
        title: "Notaries"
workflows:
  id: new-workflows
  title: "Streamlined Digital Workflows"
  issuing:
    title: "Issuing a Power of Attorney - with Verifiable Credential"
    intro: "When a notary issues a new power of attorney:"
    bullets:
      - icon: "fa-solid fa-file-signature"
        text: "The notary drafts and signs the physical document as usual."
      - icon: "fa-solid fa-file-pdf"
        text: "A **digital copy** is provided to both the grantor and grantee."
      - icon: "fa-solid fa-award"
        text: "The notary issues a **Power of Attorney Credential** containing company, grantor, and grantee details."
      - icon: "fa-solid fa-hashtag"
        text: "The credential includes a **hash of the digital copy** to guarantee authenticity."
    image:
      img_class: "w-full h-96 object-cover"
      src: "/images/purple/notary2.webp"
      alt: "Notary issuing both physical and digital power of attorney documents"
  revoking:
    title: "Revoking a Power of Attorney - with Verifiable Credential"
    bullets:
      - icon: "fa-solid fa-id-badge"
        text: "The grantor or grantee presents the credential at any notary office."
      - icon: "fa-solid fa-phone"
        text: "The receiving notary can contact the issuer to revoke or use the **ecosystem's web service** to revoke instantly."
      - icon: "fa-solid fa-shield-halved"
        text: "Once revoked, the credential becomes invalid across the entire ecosystem."
#    image:
#      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/d3071f775f-6ac81e638ab4163a57fd.png"
#      alt: "Citizen revoking a power of attorney using verifiable credentials at any notary"
  using:
    title: "Using a Power of Attorney - with Verifiable Credential"
    intro: "When the grantee presents the power to a verifier (e.g., a bank):"
    bullets:
      - icon: "fa-solid fa-file-import"
        text: "The grantee provides the **digital copy** and the **verifiable credential**."
      - icon: "fa-solid fa-shield-check"
        text: "The bank verifies authenticity of the credential and document instantly."
      - icon: "fa-solid fa-check"
        text: "If the credential is active, the power is valid — no manual checks needed."
      - icon: "fa-solid fa-sync-alt"
        text: "Banks can check revocation status automatically, eliminating phone calls."
    image:
      img_class: "w-full h-96 object-cover"
      src: "/images/purple/bank3.png"
      alt: "Bank interface instantly verifying power of attorney credential"
#  verification_illustration:
#    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/f47161f64f-0d5f71e7e45dae5d0e57.png"
#    alt: "Modern bank interface showing instant digital verification of power of attorney credentials"
business_models:
  title: "Privacy Preserving Business Models"
  intro: "Verifiers such as banks or telecoms can pay a small micropayment per verification, so all ecosystem participants receive their commission."
  cards:
    - icon: "fa-solid fa-university"
      icon_bg: "bg-green-500/20"
      icon_color: "text-green-400"
      title: "Verifiers Pay"
      text: "Banks and institutions pay small fees for each verification."
    - icon: "fa-solid fa-coins"
      icon_bg: "bg-blue-500/20"
      icon_color: "text-blue-400"
      title: "Revenue Sharing"
      text: "All ecosystem participants receive proportional commissions."
    - icon: "fa-solid fa-shield-alt"
      icon_bg: "bg-purple-500/20"
      icon_color: "text-purple-400"
      title: "Privacy Protected"
      text: "Payment flows preserve user privacy and anonymity."
conclusion:
  id: conclusion
  title: "Conclusion: Saving Time, Reducing Costs"
  intro: "By digitizing the power of attorney process:"
  benefits:
    - icon: "fa-solid fa-university"
      icon_bg: "bg-green-500/20"
      icon_color: "text-green-400"
      text: "**Banks and businesses** save significant time and money by eliminating manual verification with hundreds of notaries."
    - icon: "fa-solid fa-users"
      icon_bg: "bg-blue-500/20"
      icon_color: "text-blue-400"
      text: "**Grantors and grantees** gain confidence that their powers are instantly verifiable and securely revocable."
    - icon: "fa-solid fa-stamp"
      icon_bg: "bg-purple-500/20"
      icon_color: "text-purple-400"
      text: "**Notaries** maintain their traditional role while joining a modern national trust ecosystem."
    - icon: "fa-solid fa-crown"
      icon_bg: "bg-verana/20"
      icon_color: "text-verana"
      text: "**National Notaries Association** reinforces its authority and delivers digital infrastructure that benefits all participants."
  callout: "Verana transforms the **power of attorney** from a costly, paper-based process into a **verifiable, efficient, and fraud-resistant digital credential system**."
cta:
  id: page-cta
  title: "Ready to Digitize Your Notary Process?"
  text: "Learn how Verana can help transform your notarial ecosystem with verifiable credentials."
  primary:
    label: Get Started
    url: "/page/build"
    icon: "fa-solid fa-rocket"
  secondary:
    label: View Technical Specs
    url: "https://docs.verana.io"
related:
  title: Explore Other Industry Use Cases
  items:
    - icon:
        name: "fa-solid fa-id-card"
        color: "text-blue-400"
        bg: "bg-blue-500/20"
      title: Government Digital ID
      text: |
        Issue privacy-preserving national IDs and let citizens prove attributes anywhere—without centralizing their data.
      url: "/page/industry-use-cases/government-id"
      cta_label: Learn More
    - icon:
        name: "fa-solid fa-user-md"
        color: "text-green-400"
        bg: "bg-green-500/20"
      title: Healthcare Workforce
      text: |
        Let clinicians carry verifiable licenses, training, and background checks—so onboarding takes minutes, not weeks.
      url: "/page/industry-use-cases/healthcare-workforce-mobility"
      cta_label: Explore
    - icon:
        name: "fa-solid fa-robot"
        color: "text-purple-400"
        bg: "bg-purple-500/20"
      title: Verifiable AI Assistants
      text: |
        Bind AI agents to real owners and policies so users know who's behind the bot—and what it's allowed to do.
      url: "/page/industry-use-cases/ai-agents"
      cta_label: Discover
---

{{< industry-use-case >}}
