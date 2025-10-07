---
title: Verifiable Trust Concept
subtitle: "Building a native trust layer for the internet through verifiable credentials and cryptographic proof of identity, authenticity, and ownership."
url: "/page/trust-engine/concept"
meta_title: "Verana Trust Engine | Verifiable Identity and Credential Flow"
meta_description: "Dive into the Verana Trust Engine to see how verifiable credentials, trust registries, and decentralized governance create transparent digital trust flows."
hero_icon: "fa-solid fa-shield-halved"
disable_content_wrapper: true
sidebar:
  title: Trust Engine
  nav:
    - label: On-chain Rules & Off-chain Proofs
      url: "#hybrid-trust-model"
      active: true
    - label: Example
      url: "#example-section"
    - label: Proof-of-Trust
      url: "#proof-of-trust"
    - label: DID Directory
      url: "#did-directory"
    - label: Related Components
      url: "#related-content"
  quick_links:
    items:
      - label: Documentation
        url: "https://docs.verana.io"
        external: true
      - label: Implementation Guide
        url: "https://docs.verana.io/implementation-guide"
        external: true
      - label: Trust Resolution
        url: "/page/trust-engine/trust-resolver"
hybrid_section:
  id: hybrid-trust-model
  title: On-chain rules, off-chain proofs
  concept:
    title: Concept
    text: "The Verifiable Trust concept relies on a hybrid trust model, combining **web3, DIDs and Verifiable Credentials**."
  columns:
    - icon: fa-solid fa-link
      icon_bg: bg-blue-500/20
      icon_color: text-blue-400
      title: On-Chain Rules
      description: "Ecosystems publish their **Decentralized Identifier (DID)**, governance framework, trust registries, credential schemas, and issuer/verifier lists on-chain."
      bullets:
        - Public and auditable
        - Tamper-resistant
        - Transparent governance
    - icon: fa-solid fa-shield
      icon_bg: bg-green-500/20
      icon_color: text-green-400
      title: Off-Chain Proofs
      description: "Ecosystems prove **off-chain** control of their DID by updating their DID Document. Only the DID controller can do this."
      bullets:
        - Cryptographic proof of ownership
        - References to on-chain data
        - Verifiable authenticity
  benefits:
    title: Benefits
    ledger:
      icon: fa-solid fa-link
      icon_bg: bg-blue-500/20
      icon_color: text-blue-400
      gradient: from-blue-900/30 to-blue-800/20
      border: border-blue-500/30
      title: Ledger Benefits
      items:
        - icon: fa-solid fa-eye
          icon_color: text-blue-400
          icon_bg: bg-blue-500/20
          title: Public, transparent information
#          text: All ecosystem rules visible to everyone
        - icon: fa-solid fa-lock
          icon_color: text-blue-400
          icon_bg: bg-blue-500/20
          title: Immutable history
#          text: Tamper-proof record of all changes
        - icon: fa-solid fa-coins
          icon_color: text-blue-400
          icon_bg: bg-blue-500/20
          title: Token-based business models
#          text: Enable new economic incentives
    did_vc:
      icon: fa-solid fa-id-card
      icon_bg: bg-green-500/20
      icon_color: text-green-400
      gradient: from-green-900/30 to-green-800/20
      border: border-green-500/30
      title: DID + VC Benefits
      items:
        - icon: fa-solid fa-user-lock
          icon_color: text-green-400
          icon_bg: bg-green-500/20
          title: Data doesn't have to be public
#          text: Privacy-preserving by design
        - icon: fa-solid fa-database
          icon_color: text-green-400
          icon_bg: bg-green-500/20
          title: No personal data stored on-chain
#          text: Sensitive information remains off-ledger
        - icon: fa-solid fa-shield
          icon_color: text-green-400
          icon_bg: bg-green-500/20
          title: DID verification is straightforward
#          text: Cryptographic proof of legitimacy
    combined_banner:
      label_left: Combined Power
      label_right: Hybrid Trust Model
example_section:
  id: example-section
  title: Example
  intro: "Ecosystem <code class=\"bg-gray-800 px-2 py-1 rounded text-green-400\">did:example:ecosystem</code> created a trust registry and a credential schema on-chain. To prove ownership, they will refer to the trust registry and attach a verifiable credential to their DID Document."
  diagram:
    alt: "Diagram showing how on-chain registries relate to off-chain credentials"
    diagram: |
      {{< kroki _type="plantuml" >}}
      @startuml
      
      skinparam backgroundColor transparent
      skinparam Shadowing false
      skinparam ObjectBorderColor #1F2937
      skinparam ObjectFontColor #E2E8F0
      skinparam ObjectFontName "Inter"
      skinparam ArrowColor #E2E8F0
      skinparam ArrowFontColor #E2E8F0
      skinparam ArrowThickness 1
      skinparam Padding 3

      object "Ecosystem Trust Registry (on-chain)" as es #1F3456 {
        id: 1234
        ecosystem did: did:example:ecosystem
      }
      object "CredentialSchema (on-chain)" as cs #1F3456 {
        id: 12345678
        json_schema: { "$id": ... "title": "ExampleCredential"}
      }
      object "Verifiable Trust Json Schema Credential (off-chain)" as jsc #1B423A {
        id: https://ecosystem/shemas-example-jsc.json
        issuer: did:example:ecosystem
        jsonSchema: vpr:verana:mainnet/cs/v1/js/12345678
      }

      es --> cs : creates a CredentialSchema (on-chain)
      cs --> jsc : ecosystem DID issues a JsonSchemaCredential (off-chain)\n based on json_schema located on-chain

      @enduml
      {{< /kroki >}}
  code_blocks:
    - title: Ecosystem DID Self-Issues Verifiable Credential
      filename: json-schema-credential.json
      intro: "Ecosystem DID will self-issue a Verifiable Credential to prove control over the on-chain credential schema:"
      lines:
        - '{'
        - '  "@context": ['
        - '    "https://www.w3.org/ns/credentials/v2"'
        - '  ],'
        - '  "id": "https://ecosystem/shemas-example-jsc.json",'
        - '  "type": ["VerifiableCredential", "JsonSchemaCredential"],'
        - '  "issuer": "did:example:ecosystem",'
        - '  "issuanceDate": "2024-01-01T19:23:24Z",'
        - '  "credentialSchema": {'
        - '    "id": "https://www.w3.org/ns/credentials/json-schema/v2.json",'
        - '    "type": "JsonSchema",'
        - '    "digestSRI": "sha384-S57yQDg1MTzF56Oi9DbSQ14u7jBy0RDdx0YbeV7shwhCS88G8SCXeFq82PafhCrW"'
        - '  },'
        - '  "credentialSubject": {'
        - '    "id": "vpr:verana:mainnet/cs/v1/js/12345678",'
        - '    "type": "JsonSchema",'
        - '    "jsonSchema": {'
        - '      "$ref": "vpr:verana:mainnet/cs/v1/js/12345678"'
        - '    },'
        - '    "digestSRI": "sha384-ABCSGyugst67rs67rdbugsy0RDdx0YbeV7shwhCS88G8SCXeFq82PafhCeZ"'
        - '  }'
        - '}'
    - title: Ecosystem DID Document Service Entries
      filename: did-document.json
      intro: "Ecosystem DID Document will contain references to the verifiable presentations and trust registries:"
      lines:
        - '"service": ['
        - '  {'
        - '    "id": "did:example:ecosystem#vpr-schemas-example-jsc-vp",'
        - '    "type": "LinkedVerifiablePresentation",'
        - '    "serviceEndpoint": ["https://ecosystem/schemas-example-jsc-vp.json"]'
        - '  },'
        - '  ...'
        - ']'
proof_section:
  id: proof-of-trust
  title: "Generalizing the Concept: Proof-of-Trust"
  intro: "The Proof-of-Trust doesn't just apply to ecosystems, it extends to every participant and service:"
  highlights:
    - icon: fa-solid fa-fingerprint
      icon_bg: bg-blue-500/20
      icon_color: text-blue-400
      text: "Every service is identified by its own **DID**"
    - icon: fa-solid fa-layer-group
      icon_bg: bg-green-500/20
      icon_color: text-green-400
      text: "Services collect **multiple verifiable credentials** from different ecosystems"
    - icon: fa-solid fa-shield-check
      icon_bg: bg-verana/20
      icon_color: text-verana
      text: "Apps display a clear **Proof-of-Trust** snapshot"
  image:
    src: "/images/purple/vt-creds-explained.png"
    alt: "Futuristic diagram showing multiple colorful credential badges connecting to a central service icon"
    caption: "Proof-of-Trust"
    title: "Proof-of-Trust"
    max_width: "90%"
    max_height: "48rem"
did_directory_section:
  id: did-directory
  title: DID Directory
  intro: "To make all this work, Verana also provides a public DID Directory:"
  steps:
    - icon: fa-solid fa-plus
      icon_bg: bg-blue-500/20
      icon_color: text-blue-400
      title: Register
      text: "Anyone can register their DID on-chain"
    - icon: fa-solid fa-search
      icon_bg: bg-green-500/20
      icon_color: text-green-400
      title: Index
      text: "Verana Resolver indexes, verifies credentials, and stores results"
    - icon: fa-solid fa-database
      icon_bg: bg-verana/20
      icon_color: text-verana
      title: Query
      text: "Apps and search engines can query this verifiable database"
  cta:
    title: Ready to Deep-Dive?
    text: "Learn how Trust Resolution works in practice and see the full potential of verifiable discovery."
    button:
      label: Continue to Trust Resolution
      href: /page/trust-engine/trust-resolver
related_section:
  id: related-content
  title: Related Trust Engine Components
  cards:
    - icon: fa-solid fa-magnifying-glass
      icon_bg: bg-blue-500/20
      icon_color: text-blue-400
      title: Trust Resolver
      description: "The search engine of verifiable trust - discover services through cryptographic proof."
      label: Learn More
      href: /page/trust-engine/trust-resolver
    - icon: fa-solid fa-folder-open
      icon_bg: bg-green-500/20
      icon_color: text-green-400
      title: Service Directory
      description: "Public registry where verifiable services register their DIDs for discovery."
      label: Explore
      href: /page/trust-engine
    - icon: fa-solid fa-shield-halved
      icon_bg: bg-purple-500/20
      icon_color: text-purple-400
      title: Trust Networks
      description: "Ecosystem-governed lists of trusted issuers and credential schemas."
      label: Discover
      href: /page/build/trust-networks
---

{{< trust-concept >}}
