---
title: Verifiable Trust Concept
subtitle: "Building a native trust layer for the internet through verifiable credentials and cryptographic proof of identity, authenticity, and ownership."
url: "/page/trust-engine/concept"
meta_title: "Verana Trust Engine | Verifiable Identity and Credential Flow"
meta_description: "Dive into the Verana Trust Engine to see how verifiable credentials, trust registries, and decentralized governance create transparent digital trust flows."
hero_icon: "fa-solid fa-shield-halved"
disable_content_wrapper: false
---

## On-chain rules, off-chain proofs

### Concept

The Verifiable Trust concept relies on an hybrid trust model, web3 + DIDs + Verifiable Credentials:

- Ecosystems publish their [Decentralized Identifier (DID)](https://www.w3.org/TR/did-1.0/), governance framework, trust registries, credential schemas, and issuer/verifier lists on-chain. This makes the rules public, auditable, and tamper-resistant. But the chain itself doesn’t guarantee that this information is authentic.

- Ecosystems prove **off-chain** control of their DID by updating their DID Document. Only the DID controller can do this, so it serves as cryptographic proof of ownership. The DID Document contains references back to the on-chain data, for example:
  - a service entry pointing to the trust registry,
  - the presentation of a verifiable credential pointing to an **on-chain** credential schema.
  
This way, the on-chain entries are not just visible, but off-chain **verifiably linked** to their rightful owner.

Ledger Benefits

- Public, transparent information
- Immutable history
- Token-based business models

DID + Verifiable Credentials Benefits

- Data doesn’t have to be public
- No personal or sensitive data stored on-chain
- By just knowing the ecosystem DID, anyone can verify the authenticity of all its information

### Example

Ecosystem `did:example:ecosystem` created a trust registry and a credential schema on-chain. To prove ownership, they will refer to the trust registry and attach a verifiable credential to their DID Document.

{{< kroki _type="plantuml" >}}

@startuml
scale max 800 width
object "Ecosystem Trust Registry (on-chain)" as es {
  id: 1234
  ecosystem did: did:example:ecosystem
}
object "CredentialSchema (on-chain)" as cs {
  id: 12345678
  json_schema: { "$id": ... "title": "ExampleCredential"}
}
object "Verifiable Trust Json Schema Credential (off-chain)" as jsc #3fbdb6 {
  id: https://ecosystem/shemas-example-jsc.json
  issuer: did:example:ecosystem
  jsonSchema: vpr:verana:mainnet/cs/v1/js/12345678
}

cs --> jsc : ecosystem DID issues a JsonSchemaCredential (off-chain) based on json_schema located on-chain
es --> cs : creates a CredentialSchema (on-chain)

@enduml

{{< /kroki >}}

Ecosystem DID will self-issue a Verifiable Credential to prove control over the on-chain credential schema:

```json
{
  "@context": [
      "https://www.w3.org/ns/credentials/v2"
  ],
  "id": "https://ecosystem/shemas-example-jsc.json",
  "type": ["VerifiableCredential", "JsonSchemaCredential"],
  "issuer": "did:example:ecosystem",
  "issuanceDate": "2024-01-01T19:23:24Z",
  "credentialSchema": {
    "id": "https://www.w3.org/ns/credentials/json-schema/v2.json",
    "type": "JsonSchema",
    "digestSRI": "sha384-S57yQDg1MTzF56Oi9DbSQ14u7jBy0RDdx0YbeV7shwhCS88G8SCXeFq82PafhCrW"
  },
  "credentialSubject": {
    "id": "vpr:verana:mainnet/cs/v1/js/12345678",
    "type": "JsonSchema",
    "jsonSchema": {
      "$ref": "vpr:verana:mainnet/cs/v1/js/12345678"
    },
    "digestSRI": "sha384-ABCSGyugst67rs67rdbugsy0RDdx0YbeV7shwhCS88G8SCXeFq82PafhCeZ" 
  }
}
```

Ecosystem DID Document will contain:

```json
"service": [
    {
      "id": "did:example:ecosystem#vpr-schemas-example-jsc-vp",
      "type": "LinkedVerifiablePresentation",
      "serviceEndpoint": ["https://ecosystem/schemas-example-jsc-vp.json"]
    },
    {
      "id": "did:example:trust-registry#vpr-schemas-trust-registry-1234",
      "type": "VerifiablePublicRegistry",
      "version": "1.0",
      "serviceEndpoint": ["vpr:verana:mainnet"]
    }
    ...
  ]
```

## Generalizing the Concept: Proof-of-Trust

The Proof-of-Trust doesn’t just apply to ecosystems, it extends to every participant and service:

- Every service is identified by its own DID.
- A service can collect multiple verifiable credentials from different ecosystems, and publish them in its DID Document.

When a user connects to that service, the app can combine these credentials to display a Proof-of-Trust: a clear, verifiable snapshot of why the service can be trusted.

/​images/purple/vt-creds-explained.png

## DID Directory

To make all this work, Verana also provides a public DID Directory:

- Anyone can register their DID on-chain.
- The Verana Resolver then indexes it, verifies credentials, and stores the results in a database of verifiable data.
- Apps and search engines can query this index to instantly resolve services and ecosystems, without relying on opaque algorithms.

Ready to deep-dive into how Trust Resolution works? [Continue here](/page/trust-engine/trust-resolution).