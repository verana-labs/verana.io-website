---
title: Deliverables
date: 2025-04-01T00:00:00+02:00
weight: 15
subtitle: Delivered Specifications and Open Source Software
comments: false
bigimg: [{src: "/img/triangle.jpg"}, {src: "/img/sphere.jpg"}, {src: "/img/hexagon.jpg"}]
---
### Specifications

| type | item | status |
|------|--------|------|
| 🆔 | [Verifiable Trust Specification](https://verana-labs.github.io/verifiable-trust-spec/) | v2 |
| 🔗 | [Verifiable Public Registry Specification](https://verana-labs.github.io/verifiable-trust-vpr-spec/) | v2 |
| 🔗 | [Verana Network Frontend Specification](https://verana-labs.github.io/verana-frontend-spec/) | Pre-Draft |

### Open source Software

Summary of the most notable repositories.

| category    | item      | description   | status| license |
|-------------|-----------|---------------|-------|---------|
| VPR | [verana blockchain](https://github.com/verana-labs/verana-blockchain) | a [Cosmos SDK](https://docs.cosmos.network/) based [VPR](https://verana-labs.github.io/verifiable-trust-vpr-spec/)  implementation | [testnet](https://explorer.testnet.verana.network/) | AGPL-3.0 |
| VPR | [verana frontend](https://github.com/verana-labs/verana-frontend) | a nextJS frontend for the verana blockchain | active development | Apache2 |
| LIBRARY | [verre](https://github.com/verana-labs/verre) | A verifiable trust resolver typescript library | active development | Apache2 |
| VS | verifiable service examples | a set of simple verifiable service examples| available | Apache2 |
| VUA | verifiable user agent example(s) | demo of simple wallet user agents| planned | Apache2 |
| VUA | [Hologram](https://github.com/2060-io/hologram-app) | a Signal-like DIDComm based messaging app that support chatbot Verifiable Services. A chatbot and AI agent browser. | [in app stores](https://hologram.zone/) | AGPL-3.0 |
| LIBRARY | Vision suite - biometric authentication for user binding |  Face, fingerprints, and palm vein | active development - face alg already registered in [NIST](https://www.nist.gov/programs-projects/face-technology-evaluations-frtefate) website| Apache2 |
| VS | [identity credential issuance demo VS](https://github.com/2060-io/hologram-gov-id-issuer-vs) | with proof of possession (NFC reading). Read you ID card or NFC passport, verify your face and get issued your identity credential| available - [demo](https://dm.gov-id-issuer.demos.2060.io/invitation) | Apache2 |
| VS | [generic VS for verifying credentials](https://github.com/2060-io/hologram-generic-verifier-vs) | user clicks a link or scan a qr code to present a credential to your service | available - [demo](https://gov-id-verifier.demos.2060.io/) | Apache2 |
