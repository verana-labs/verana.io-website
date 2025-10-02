---
title: Notaries & Power of Attorney
subtitle: "Transform Mexico's paper-based power-of-attorney process into a verifiable, efficient, and fraud-resistant digital credential system."
url: "/page/industry-use-cases/notaries"
meta_title: "Verana for Notaries | Verifiable Power of Attorney in Mexico"
meta_description: "Digitalize Mexico’s power-of-attorney process with Verana by issuing verifiable credentials, accelerating revocations, and delivering trustworthy notarized records."
hero_icon: "fa-solid fa-stamp"
disable_content_wrapper: true
use_case_partial: "notaries"
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
      url: "#benefits-section"
    - label: Call to Action
      url: "#page-cta"
  quick_links:
    title: Quick Links
    items:
      - label: Implementation Guide
        url: "https://docs.verana.io"
      - label: Technical Specs
        url: "https://docs.verana.io/reference"
      - label: Case Studies
        url: "/page/industry-use-cases"
problem_section:
  id: problem-statement
  title: "A Manual, Inefficient Process"
  intro: "In Mexico, granting and using a **Power of Attorney** is a **paper-based, fragmented, and costly process**."
  cards:
    - title: "Issuing a Power of Attorney"
      icon:
        name: "fa-solid fa-file-signature"
        color: "text-red-400"
        bg: "bg-red-500/20"
      bullets:
        - "Grantor visits notary and proves legal representation"
        - "Notary drafts, signs, and keeps physical copy"
        - "Document is physically delivered to both parties"
        - "There is **no central database** in Mexico"
    - title: "Revoking a Power of Attorney"
      icon:
        name: "fa-solid fa-ban"
        color: "text-orange-400"
        bg: "bg-orange-500/20"
      bullets:
        - "Grantor or grantee can visit **any notary office**"
        - "New notary must contact original issuing notary"
        - "Must obtain the original document to proceed"
        - "Requires complex inter-notary coordination"
    - title: "Using at Banks"
      icon:
        name: "fa-solid fa-building-columns"
        color: "text-yellow-400"
        bg: "bg-yellow-500/20"
      bullets:
        - "Grantee presents the **physical copy**"
        - "Bank calls issuing notary to confirm authenticity"
        - "Must contact **all notaries** to check revocation"
        - "Creates a repetitive verification process"
  process_illustration:
    image:
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/a28a15b1f0-4169ac2433c1b26a67b5.png"
      alt: "Illustration of manual paper-based power of attorney workflow with multiple notaries, phone calls, and paperwork"
    text: "This system creates **unnecessary friction and cost** for notaries, grantees, and verifiers like banks who manage repetitive checks."
  bank_illustration:
    image:
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/b912c046ac-d35159a7ee8e41209da3.png"
      alt: "Bank teller contacting several notary offices surrounded by stacks of documents"
    text: "Banks must contact multiple notaries for each verification, generating delays and operational costs."
solution_section:
  id: solution-section
  title: "The Solution: A National Trust Ecosystem for Notaries"
  intro: "In Mexico, the notary system relies on a hierarchy of the **Colegio Nacional**, **Colegios Estatales**, and individual **Notarios**. Verana digitizes this structure with verifiable credentials."
  hierarchy:
    diagram: |
      {{< kroki _type="plantuml" >}}
      @startuml
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
          object "Colegio Nacional" as tr #3B82F6 {
              permissionType: ECOSYSTEM (Root)
              did:example:colegio-nacional
          }
          object "Colegios Estatal #1" as ig1 #22C55E {
              permissionType: ISSUER_GRANTOR
              did:example:colegio-estatal1
          }
          object "Colegios Estatal #2" as ig2 #22C55E {
              permissionType: ISSUER_GRANTOR
              did:example:colegio-estatal2
          }
          object "Notario 12" as issuer12 #A855F7 {
              permissionType: ISSUER
              did:example:notario12
          }
          object "Notario 13" as issuer13 #A855F7 {
              permissionType: ISSUER
              did:example:notario13
          }
          object "Notario 24" as issuer24 #A855F7 {
              permissionType: ISSUER
              did:example:notario24
          }
          object "Notario 25" as issuer25 #A855F7 {
              permissionType: ISSUER
              did:example:notario25
          }
          object "Notario 26" as issuer26 #A855F7 {
              permissionType: ISSUER
              did:example:notario26
          }
      }
      tr --> ig1
      tr --> ig2
      ig1 --> issuer12
      ig1 --> issuer13
      ig2 --> issuer24
      ig2 --> issuer25
      ig2 --> issuer26
      @enduml
      {{< /kroki >}}
    cards:
      - title: "Colegio Nacional de Notarios"
        text: "The highest-level governing body"
        icon:
          name: "fa-solid fa-crown"
          color: "text-blue-400"
          bg: "bg-blue-500/20"
      - title: "Colegios Estatales"
        text: "State-level associations"
        icon:
          name: "fa-solid fa-map"
          color: "text-green-400"
          bg: "bg-green-500/20"
      - title: "Notarios"
        text: "Individual notary offices"
        icon:
          name: "fa-solid fa-stamp"
          color: "text-purple-400"
          bg: "bg-purple-500/20"
  digital_ecosystem:
    id: digital-ecosystem
    title: "Establishing a Digital Ecosystem"
    intro: "The **Colegio Nacional** launches a **Notarial Trust Ecosystem** on Verana to digitize and streamline the power-of-attorney process."
    steps:
      - number: "1"
        title: "Publishes an Ecosystem Governance Framework (EGF)"
        bullets:
          - "Defines rules for issuance, verification, revocation, and compliance"
          - "Establishes the **Power of Attorney Credential Schema**"
          - "Outlines onboarding procedures for all participants"
      - number: "2"
        title: "Designs the Power of Attorney Credential"
        bullets:
          - "Specifies required attributes for grantors, grantees, and companies"
          - "Includes credential validity, revocation rules, and audit data"
          - "Ensures digital copy hashes are embedded for authenticity"
      - number: "3"
        title: "Creates a Trust Registry in Verana"
        bullets:
          - "Implements EGF rules and credential schemas"
          - "Maintains authorized issuers, verifiers, and registry grantors"
          - "Enforces revocation and validity checks across the ecosystem"
    credential_visual:
      image:
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/5a6a861792-816281808d3a3e3197f6.png"
        alt: "Digital power of attorney credential card with key fields and security elements"
      caption: "Power of Attorney Credential containing all necessary information and cryptographic proof"
    implementation_diagram:
      title: "Implementation Diagram"
      image:
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/d56e047bb4-b7e8529eb1c56b73335d.png"
        alt: "Permission tree showing Colegio Nacional, Colegios Estatales, and Notarios"
      caption: "Power of Attorney Credential Schema Permission Tree showing hierarchical permissions"
workflows:
  id: new-workflows
  title: "Streamlined Digital Workflows"
  issuing:
    title: "Issuing a Power of Attorney - with Verifiable Credential"
    intro: "When a notary issues a new power of attorney:"
    bullets:
      - icon: "fa-solid fa-check"
        color: "text-green-400"
        text: "The notary drafts and signs the physical document as usual"
      - icon: "fa-solid fa-check"
        color: "text-green-400"
        text: "The notary provides a **digital copy** to both the grantor and grantee"
      - icon: "fa-solid fa-check"
        color: "text-green-400"
        text: "The notary issues a **Power of Attorney Credential**"
      - icon: "fa-solid fa-check"
        color: "text-green-400"
        text: "Credential includes a **hash of the digital copy** for authenticity"
    image:
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/53fefbbaa3-161e3509f9fd0804f712.png"
      alt: "Notary issuing both physical and digital power of attorney documents"
  revoking:
    title: "Revoking a Power of Attorney - with Verifiable Credential"
    bullets:
      - icon: "fa-solid fa-user"
        color: "text-orange-400"
        text: "Grantor or grantee presents the credential at **any notary office**"
      - icon: "fa-solid fa-phone"
        color: "text-orange-400"
        text: "New notary can call the issuing notary to request revocation"
      - icon: "fa-solid fa-globe"
        color: "text-orange-400"
        text: "Or use the **ecosystem's web service** to revoke directly"
      - icon: "fa-solid fa-ban"
        color: "text-red-400"
        text: "Once revoked, the credential becomes **invalid across the entire ecosystem**"
    image:
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/d3071f775f-6ac81e638ab4163a57fd.png"
      alt: "Citizen revoking a power of attorney using verifiable credentials at any notary"
  using:
    title: "Using a Power of Attorney - with Verifiable Credential"
    intro: "When the grantee presents the power to a verifier (e.g., a bank):"
    bullets:
      - icon: "fa-solid fa-file-alt"
        color: "text-blue-400"
        text: "Grantee provides a **digital copy** and the **verifiable credential**"
      - icon: "fa-solid fa-shield-alt"
        color: "text-blue-400"
        text: "Bank verifies authenticity of credential and document **instantly**"
      - icon: "fa-solid fa-check-circle"
        color: "text-green-400"
        text: "If credential is active, power is valid: **no manual checks needed**"
      - icon: "fa-solid fa-sync"
        color: "text-blue-400"
        text: "Banks can check revocation status **automatically**"
    image:
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/185dee47dd-0cc8a7d84d00eae73068.png"
      alt: "Bank teller instantly verifying power of attorney credential on screen"
  business_models:
    title: "Business Models"
    icon: "fa-solid fa-coins"
    icon_bg_class: "bg-green-500/20"
    icon_color_class: "text-green-400"
    text: "Verifiers such as banks or telecoms can pay a small micropayment per verification—so all ecosystem participants receive their commission."
benefits_section:
  id: benefits-section
  title: "Conclusion: Saving Time, Reducing Costs"
  intro: "By digitizing the power of attorney process:"
  cards:
    - title: "Banks and Businesses"
      text: "Save significant time and money by eliminating manual verification with hundreds of notaries."
      icon:
        name: "fa-solid fa-building-columns"
        color: "text-green-400"
        bg: "bg-green-500/20"
    - title: "Grantors and Grantees"
      text: "Gain confidence that their powers are instantly verifiable and securely revocable."
      icon:
        name: "fa-solid fa-users"
        color: "text-blue-400"
        bg: "bg-blue-500/20"
    - title: "Notaries"
      text: "Maintain their traditional role while joining a modern, national trust ecosystem."
      icon:
        name: "fa-solid fa-stamp"
        color: "text-purple-400"
        bg: "bg-purple-500/20"
    - title: "Colegio Nacional"
      text: "Reinforces its authority and provides digital infrastructure that benefits all participants."
      icon:
        name: "fa-solid fa-crown"
        color: "text-verana"
        bg: "bg-verana/20"
  callout:
    title: "Transform the Power of Attorney Process"
    text: "Verana turns the power of attorney from a costly, paper-based workflow into a **verifiable, efficient, and fraud-resistant** digital credential system."
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
related_use_cases:
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
