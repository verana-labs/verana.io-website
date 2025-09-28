---
title: Verana Components
subtitle: "Verana's tech stack."
url: "/page/developers/components"
meta_title: "Developers and Verana | Verana components and technical stack"
meta_description: "Explore Verana components, learn about each component, how they are built, whith which technology, and where are the repos."
hero_icon: "fa-solid fa-hammer"
disable_content_wrapper: false
---

## Overview of Verana components

## Component spotlight

### Network Components

#### Verana Node

A layer-1 [cosmos sdk](https://github.com/cosmos/cosmos-sdk) based implementation of the [verifiable public registry spec](https://verana-labs.github.io/verifiable-trust-vpr-spec/).

Verana is a registry of trust registries, where any ecosystem can create and self-govern its trust network.

Governance of the chain is managed by a [council](/page/about/governance).

[Github repository)(https://github.com/verana-labs/verana)

#### Indexer

A fork of [Horoscope v2](https://github.com/aura-nw/horoscope-v2), the indexer of the [Aura Network](https://aura.network/). The purpose of the Verana indexer is to build a local database by executing the transaction of each block of the verana network from first block, to be able to:

- perform advanced queries that cannot be done with the ledger API;
- maintain state change history, to get access to information that is not visible in current ledger state.

[Github repository)(https://github.com/verana-labs/verana-indexer) 

#### Resolver

The purpose of the Verana resolver is to build and maintain up to date a local database, by querying the indexer and subscribe to change events of the DID Directory, to be able to:

- crawl verifiable services, dereferences their credential, and organize data
- provide a universal query API to Verifiable User Agents and to search engine, for searching verifiable data.

For a better understanding, you should [learn about the trust engine](http://localhost:1313/page/trust-engine/trust-resolver/#how-it-works)

[Github repository)(https://github.com/verana-labs/verre)

#### Search Engine

Fancy prompt to query the resolver, see [trust engine examples here](/page/trust-engine/trust-resolver/#advanced-queries)

[Github repository)(https://github.com/verana-labs/search-engine) 

#### Visualizer

A dashboard for:

- providing a visual and interactive map of ecosystems and how they interact.
- viewing ecosystem trust deposit size, number of issued / verified credentials, deposit slashs, etc...
- more generally, providing network statistics.

[Github repository)(https://github.com/verana-labs/verana-visualizer) 

#### (+) Your Fancy new App here

You've created a new network component? Just [fork this repo](https://github.com/verana-labs/verana.io-website) and add it here!

### Verifiable Service Components

Here is the list of open source software that you can use to build your verifiable services.

> Note: Verana is DID method agnostic. You can use any DID method for your verifiable services. However, make sure that the [trust resolver](#resolver) knows how to resolve your favorite DID method (add the plugin of your favorite DID method if not already available), else your verifiable services won't be resolvable, their verifiable data won't be indexed, and thus they would not appear in the search results.

#### Credo Verifiable Service Agent

An agent for building Verifiable Services, based on Openwallet Foundation [credo-ts](https://credo.js.org/):

- use as a container or npm package
- issue and verify credentials
- publish credentials to your DID Document
- Supports at least the following credo DID methods: did:peer, [did:web](https://w3c-ccg.github.io/did-method-web/), Stephen Curran's [did:webvh](https://identity.foundation/didwebvh/next/), did:cheqd
- Supports issuing [w3c v1.1](https://www.w3.org/TR/vc-data-model-1.1/) and [anoncreds](https://hyperledger.github.io/anoncreds-spec/) credentials.
- Supports DIDComm and OpenID4VC / OpenID4VP

[Github repository)(https://github.com/2060-io/vs-agent)

#### (+) Your Verifiable Service Agent here

You've added [Verifiable Trust](https://verana-labs.github.io/verifiable-trust-spec/) support to other wallet software? Just [fork this repo](https://github.com/verana-labs/verana.io-website) and add it here!

### Verifiable User Agent Components

To be added

## Open Source Verifiable User Agents and Services


### Hologram Messaging

[Website](https://hologram.zone)

[Github Repository](https://github.com/2060-io/hologram-app)

| **Feature**                          | **Description** |
|--------------------------------------|-----------------|
| Self-custody storage                 | User data (messages, credentials) stays only on the device, not on central servers. |
| Verifiable Credential Wallet          | Store, collect, and present Verifiable Credentials (VCs) from trusted issuers. |
| Secure, authenticated messaging       | Chat with verified identities using VCs; supports text, voice, photos, video, files. |
| DIDComm-based communication           | Uses [Decentralized Identifier Communication](https://didcomm.org) for secure, persistent connections. |
| Verifiable Service Integration        | Trusted chatbots and services can issue/request credentials and interact via chat. |
| Proof of Trust                        | Use the [Trust Resolver](/page/trust-engine/trust-resolver) to display data such as service owner, service name, etc |
| Real-time audio & video               | Audio and video calls supported via WebRTC within secure identity context. |
| Biometric verification                | Supports face/fingerprint matching and liveness checks for ID validation and KYC. |
| Selective disclosure                  | Share only necessary parts of credentials using selective disclosure. |
| Open source & extensibility           | Developers can build verifiable chatbots, services, or integrate agent logic. |

Hologram Verifiable Service demos/templates:

#### GovID Issuer VS

A government demo service for issuing a verifiable credential by reading the NFC of a passport, extracting the photo, and performing a face matching against the user that is manipulating the handset.


- [GovID Issuer VS (typescript)](https://github.com/2060-io/hologram-gov-id-issuer-vs)
- [AI Agent demo VS (typescript)](https://github.com/2060-io/hologram-welcome-ai-agent-vs)
- [AI Agent demo VS (java)](https://github.com/2060-io/aifriends-hologram-chatbot)
- [Generic Verifier VS (typescript)](https://github.com/2060-io/hologram-generic-verifier-vs)

### (+) Add your App here

You've added [Verifiable Trust](https://verana-labs.github.io/verifiable-trust-spec/) support to some software?  Just [fork this repo](https://github.com/verana-labs/verana.io-website) and add it here!
