---
title: The Building Blocks
subtitle: "Learn the foundations we used to build Verana: DIDs, Verifiable Credentials, and Trust Registries."
url: "/page/trust-engine/building-blocks"
meta_title: "Verana Building Blocks | DIDs, Verifiable Credentials, and Decentralized Trust Networks"
meta_description: "Paper for newcomers with strong technical backgrounds (developers, architects, security engineers, data scientists) who want a practical, conceptual, and implementation-oriented introduction to the technologies Verana builds on."
disable_content_wrapper: true
hero_icon: "fa-solid fa-file-alt"
sidebar:
  title: Contents
  nav:
    - label: Problem Statement
      url: "#problem-statement"
      active: true
    - label: Decentralized Identifiers
      url: "#decentralized-identifiers"
    - label: DID Methods
      url: "#did-methods"
    - label: Verifiable Credentials
      url: "#verifiable-credentials"
    - label: Trust Registries
      url: "#trust-registries"
  learning_goals:
    title: Learning Goals
    items:
      - text: "Understanding DIDs and DID Documents"
      - text: "How Verifiable Credentials work"
      - text: "Trust registries and decentralized trust networks"
  downloads:
    title: Download
    items:
      - label: Download full paper
        url: "/pdf/2025-10-03-verana-building-blocks.pdf"
        icon: fa-solid fa-file-pdf
problem_statement:
  id: problem-statement
  title: "Problem Statement: Trust at Internet Scale"
  icon: fa-solid fa-exclamation-triangle
  icon_bg: bg-red-900/30
  wrapper_bg: bg-red-900/20
  border: border-red-700/50
  paragraphs:
    - "We want **portable, verifiable trust** between parties that don't share a database or a single identity provider. The Web's default identifier (the URL) ties trust to DNS, certificate authorities, and domain control: great for content addressing, fragile for **entity** addressing (people, orgs, services, agents)."
    - "We need identifiers that are **cryptographically bound to controllers**, interoperable across ecosystems, and work offline. We need a way to attach **verifiable claims** to those identifiers, prove them selectively, and check who's authorized to issue/verify them. That's what **DIDs + VCs + Trust Registries** provide."
dids_section:
  id: decentralized-identifiers
  title: "1) Decentralized Identifiers (DIDs)"
  intro: "A **DID** is a globally unique identifier (URI) whose **ownership is proven cryptographically**, not by a central registry. Example:"
  code_example: "did:web:example.com"
  did_document:
    title: "1.1 DID Document (the metadata for a DID)"
    description: "Resolving a DID returns a **DID Document**: a small JSON object describing public keys, verification relationships, and service endpoints controlled by the DID's controller."
    json: |
      {
        "id": "did:example:123",
        "verificationMethod": [
          {
            "id": "#keys-1",
            "type": "JsonWebKey2020",
            "controller": "did:example:123",
            "publicKeyJwk": { "kty": "EC", "crv": "P-256", "x": "...", "y": "..." }
          }
        ],
        "authentication": ["#keys-1"],
        "assertionMethod": ["#keys-1"],
        "service": [
          {
            "id": "#agent",
            "type": "DIDCommMessaging",
            "serviceEndpoint": "https://agent.example.com"
          }
        ]
      }
  benefits_title: "Why DIDs > URLs for identifying entities:"
  benefits:
    - text: "**Self-certifying control:** Proof of control comes from possession of the private key corresponding to keys in the DID Document, not just control of a domain or account."
    - text: "**Key agility:** Rotate keys and add multiple keys/relations without changing the DID."
    - text: "**Transport agnostic:** Works online/offline and across transports (HTTP, DIDComm, Bluetooth, QR, NFC)."
    - text: "**Method choice:** Different **DID methods** offer different root-of-trust models (web, event logs, ledgers, etc.)."
  note:
    icon: fa-solid fa-key
    icon_color: text-green-400
    text: "**Takeaway:** `did:web` is the easiest on-ramp; `did:webvh`/`did:webs` add **provable key history** and stronger assurances; `did:ebsi` aligns you with EU trust frameworks."
  methods:
    title: "2) Examples of DID Methods You'll Meet in Verana Ecosystems"
    intro: "A DID's first path segment is its **method** (e.g., `did:web:…`). Methods define how DIDs are created, resolved, and updated."
    items:
      - title: "2.1 `did:web` — leverage DNS + HTTPS"
        columns:
          - heading: "How it works:"
            heading_class: text-white
            text: "Host a DID Document under a domain you control (e.g., `https://example.com/.well-known/did.json`)."
          - heading: "Pros:"
            heading_class: text-green-400
            text: "Simple, deployable today, integrates well with existing web ops; good for organizations and services."
          - heading: "Cons:"
            heading_class: text-red-400
            text: "Trust ultimately rooted in DNS and Web PKI; no built-in verifiable key history."
        callout:
          accent_bg: bg-blue-900/20
          accent_border: border-blue-700/50
          text: "**When to use:** Public-facing services, developer portals, early integrations, discovery via the web."
      - title: "2.2 `did:webvh` — did:web + verifiable history"
        columns:
          - heading: "Idea:"
            heading_class: text-white
            text: "Keep the operational convenience of `did:web` but add a **verifiable key/event history** so resolvers can audit control changes over time."
          - heading: "Pros:"
            heading_class: text-green-400
            text: "Mitigates `did:web`'s weakest point (unverifiable history & compromises) while keeping compatibility with web tooling."
          - heading: "Cons:"
            heading_class: text-red-400
            text: "More moving parts than plain `did:web`."
        callout:
          accent_bg: bg-blue-900/20
          accent_border: border-blue-700/50
          text: "**When to use:** Enterprises and ecosystems needing web-based identifiers **with** historical accountability and stronger assurance."
      - title: "2.3 `did:webs` — web-anchored, secured by key event logs"
        columns:
          - heading: "Idea:"
            heading_class: text-white
            text: "A web-discoverable DID whose **trust is rooted in cryptographic key events** (not DNS/CA). Built on **KERI** event receipts."
          - heading: "Pros:"
            heading_class: text-green-400
            text: "Stronger independence from DNS/CA operators; verifiable key rotation history."
          - heading: "Cons:"
            heading_class: text-red-400
            text: "Newer method; requires event-log infrastructure."
        callout:
          accent_bg: bg-blue-900/20
          accent_border: border-blue-700/50
          text: "**When to use:** High-assurance use cases that still want web discovery."
      - title: "2.4 `did:ebsi` — DIDs in the European EBSI ecosystem"
        columns:
          - heading: "Idea:"
            heading_class: text-white
            text: "EBSI provides DID methods and registries for EU trust ecosystems (e.g., accredited legal entities). DID Documents are registered and governed per EU rules."
          - heading: "Pros:"
            heading_class: text-green-400
            text: "Alignment with EU trust lists, accreditation, and conformance tooling; clear governance."
          - heading: "Cons:"
            heading_class: text-red-400
            text: "Tied to EU frameworks and onboarding processes."
        callout:
          accent_bg: bg-blue-900/20
          accent_border: border-blue-700/50
          text: "**When to use:** Interop with EU public-sector and EBSI-compliant ecosystems."
vcs_section:
  id: verifiable-credentials
  title: "3) W3C and Anoncreds Verifiable Credentials (VCs)"
  intro: "A **Verifiable Credential** is a tamper-evident package of claims that an **issuer** makes about a **subject** (identified by a DID or another identifier). A **Verifiable Presentation (VP)** is a holder-curated bundle of one or more credentials/derived proofs presented to a verifier."
  anatomy:
    title: "3.1 Anatomy (minimal JSON example)"
    json: |
      {
        "@context": ["https://www.w3.org/ns/credentials/v2"],
        "type": ["VerifiableCredential", "EmployeeCredential"],
        "issuer": "did:web:acme.example",
        "credentialSubject": {
          "id": "did:web:alice.example",
          "employeeId": "E-12345",
          "role": "Engineer"
        },
        "validFrom": "2025-01-01T00:00:00Z",
        "credentialStatus": {
          "type": "StatusList2021Entry",
          "statusPurpose": "revocation",
          "statusListIndex": "4242",
          "statusListCredential": "https://acme.example/status/employee-2025.json"
        },
        "proof": { /* Data Integrity or JOSE/COSE proof */ }
      }
  triangle:
    title: "3.2 The Trust Triangle"
    image:
      src: "/images/purple/vcred_trust_triangle.webp"
      alt: "Diagram illustrating the issuer-holder-verifier trust triangle"
      wrapper_class: "flex items-center justify-center bg-gray-900 border border-gray-700 rounded-2xl p-8"
      img_class: "w-full max-w-2xl rounded-xl"
      width: 1200
      height: 675
    cards:
      - title: Issuer
        text: "(e.g., a company, university) signs a VC."
        icon: fa-solid fa-certificate
        icon_color: text-blue-400
        icon_bg: bg-blue-900/30
        card_bg: bg-blue-900/20
        card_border: border-blue-700/50
      - title: Holder
        text: "(person, org, service, or AI agent) stores it in a wallet/agent and creates a VP when needed."
        icon: fa-solid fa-wallet
        icon_color: text-green-400
        icon_bg: bg-green-900/30
        card_bg: bg-green-900/20
        card_border: border-green-700/50
      - title: Verifier
        text: "Checks the cryptographic proof, the credential's schema, its status, and whether the issuer is **authorized** for that schema in the relevant **trust registry**."
        icon: fa-solid fa-search
        icon_color: text-purple-400
        icon_bg: bg-purple-900/30
        card_bg: bg-purple-900/20
        card_border: border-purple-700/50
  privacy_benefits:
    title: "3.3 Why VCs enable privacy-preserving data sharing"
    items:
      - icon: fa-solid fa-eye-slash
        title: "Selective disclosure:"
        text: "Share **only** the claims necessary (e.g., *age over 18*) using cryptosuites like **BBS+** or formats like **SD-JWT VC**, or using Anoncreds."
      - icon: fa-solid fa-unlink
        title: "Unlinkability:"
        text: "Derived proofs prevent verifiers from correlating different presentations (Anoncreds)."
      - icon: fa-solid fa-user-friends
        title: "Pairwise identifiers:"
        text: "Use different DIDs per verifier to avoid cross-domain correlation."
      - icon: fa-solid fa-ban
        title: "Revocation at scale:"
        text: "**Status List** credentials enable privacy-preserving revocation checks without calling home on each presentation."
  crypto_options:
    title: "3.4 Crypto options you'll see"
    items:
      - icon: fa-solid fa-code
        icon_color: text-blue-400
        text: "**Data Integrity** proofs (JSON-LD; pluggable cryptosuites like **BBS+** for selective disclosure and predicates)."
      - icon: fa-solid fa-key
        icon_color: text-green-400
        text: "**JOSE/COSE** proofs (JWT/JWS, SD-JWT, COSE) for familiar JOSE/CBOR stacks."
trust_registries_section:
  id: trust-registries
  title: "4) Trust Registries and Decentralized Trust Networks"
  intro: |-
    A **Trust Registry** (aka "trust list") publishes **authoritative mappings** such as schemas, authorized issuers, and authorized verifiers.
  registry_overview:
    title: "4.1 What is a Trust Registry?"
    cards:
      - icon: fa-solid fa-file-code
        icon_color: text-blue-400
        card_bg: bg-blue-900/20
        card_border: border-blue-700/50
        title: Schemas
        text: "Machine-readable definitions of credential types."
      - icon: fa-solid fa-certificate
        icon_color: text-green-400
        card_bg: bg-green-900/20
        card_border: border-green-700/50
        title: Issuers
        text: "Which entities are authorized to issue which schemas (under what accreditation)."
      - icon: fa-solid fa-search
        icon_color: text-purple-400
        card_bg: bg-purple-900/20
        card_border: border-purple-700/50
        title: Verifiers
        text: "Who can request/verify particular schemas and for what purpose."
      - icon: fa-solid fa-gavel
        icon_color: text-orange-400
        card_bg: bg-orange-900/20
        card_border: border-orange-700/50
        title: Policies & governance
        text: "Links to the **Ecosystem Governance Framework (EGF)** that defines rules, evidence, liability, and audit."
  necessity:
    title: "4.2 Why registries are necessary"
    items:
      - icon: fa-solid fa-robot
        icon_color: text-verana
        title: "Automatable trust decisions:"
        text: "Verifiers need to know, *programmatically*, whether an issuer is legitimate for a credential type."
      - icon: fa-solid fa-plug
        icon_color: text-verana
        title: "Interoperability:"
        text: "Common schemas + canonical issuer lists enable multi-vendor, multi-jurisdiction networks."
      - icon: fa-solid fa-eye-slash
        icon_color: text-verana
        title: "Privacy-preserving business models:"
        text: "Authorization checks occur against **ecosystem policy**—not by centralizing user data. Users disclose **minimal** claims; verifiers check issuer authorization against the registry."
  examples:
    title: "4.3 Examples and patterns"
    cards:
      - icon: fa-solid fa-flag
        icon_color: text-blue-400
        icon_bg: bg-blue-900/30
        title: EU/EBSI
        text: "Maintains **Trusted Issuers** and **Trusted Schemas** registries; credentials reference status lists and schema URIs."
      - icon: fa-solid fa-network-wired
        icon_color: text-green-400
        icon_bg: bg-green-900/30
        title: ToIP
        text: "Defines a **Trust Registry Query Protocol (TRQP)**: a simple, DNS-like API to ask: \"Does entity X hold authorization Y under governance Z?\""
      - icon: fa-solid fa-building-columns
        icon_color: text-purple-400
        icon_bg: bg-purple-900/30
        title: National ecosystems
        text: "Sector regulators, notarial colleges, or accreditation bodies publish registries to synchronize authorization lists across hundreds of participants."
conclusion_section:
  icon: fa-solid fa-graduation-cap
  title: "Ready to Build with Decentralized Trust?"
  description: "Now that you understand the building blocks, explore how Verana implements these technologies to create the open trust layer for the internet."
  primary_cta:
    label: Explore Verana
    icon: fa-solid fa-rocket
    url: "/page/build"
  secondary_cta:
    label: Technical Documentation
    url: "https://docs.verana.io"
related_papers:
  title: Related Trust Engine Components
  cards:
    - icon: fa-solid fa-shield-halved
      icon_color: text-purple-400
      icon_bg: bg-purple-900/30
      title: Verifiable Trust Concept
      text: "Dive into the hybrid trust model that powers DIDs, VCs, and on-chain governance in Verana."
      label: Learn More
      url: "/page/trust-engine/concept"
    - icon: fa-solid fa-search
      icon_color: text-blue-400
      icon_bg: bg-blue-900/30
      title: Trust Resolver
      text: "Explore the resolver service that validates credentials and trust registries at runtime."
      label: Explore
      url: "/page/trust-engine/trust-resolver"
    - icon: fa-solid fa-scale-balanced
      icon_color: text-green-400
      icon_bg: bg-green-900/30
      title: Trust Deposit & Reputation
      text: "See how deposits and verifiable reputation reinforce accountability inside ecosystems."
      label: Discover
      url: "/page/trust-engine/trust-deposit"

---

{{< trust-building-blocks >}}
