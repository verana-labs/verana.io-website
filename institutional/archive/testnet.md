---
title: Testnet
subtitle: "How to use the testnet."
url: "/page/developers/testnet"
meta_title: "Verana Testnet | Join the Open Trust Sandbox"
meta_description: "Learn how to access the Verana testnet, request VNA tokens with the faucet, and start to create trust registries, credential schemas, and onboard issuers, verifier, and trust registry operators."
hero_icon: "fa-solid fa-hammer"
disable_content_wrapper: false
---

## Getting started with the Testnet

1. Install a cosmos SDK wallet, such as [Keplr](https://www.keplr.app/), [Leap](https://www.leapwallet.io/),... or any [interchain-ts](https://github.com/hyperweb-io/interchain-kit) compatible wallet.

> AI uxpilot prompt: show a list of 3 cards with a photo and a 1 CTA to download the wallet, 1 CTA to view the full list of supported wallet

2. Access the [frontend](https://app.testnet.verana.network), connect your wallet to obtain you Verana address. You can copy the address by clicking the copy button on the top right corner, just on the left of your address.

> AI uxpilot prompt: show an illustration of the frontend (3:2)

3. Download Hologram Messaging with your cellphone

> AI uxpilot prompt: show an illustration of Hologram Messaging (2:3),  and a 1 CTA to download Hologram Messaging

4. Connect to the [faucet](https://faucet-vs.testnet.verana.network/invitation). When connected to the faucet service, just write /to <your verana address> to get 100 VNA.

> AI uxpilot prompt: show an illustration of the faucet chatbot (2:3),  and a QR code (1:1) to connect to faucet.

5. You can now interact with the frontend and execute transactions.

> AI uxpilot prompt: show an illustration of the frontend (3:2)

## Component Deployments

Here is a list of known deployments for all components. You can either use these deployments, or deploy your own instances.

> AI uxpilot prompt: for each component, create a layout with: title, purpose, github link (icon CTA, do not show the url), and a list of small cards for each deployment (illustration (3:2) at the top, title and description below the illustration, and a CTA "launch" at the bottom). When you see [+ Deploy your own], create a card and set title to "deploy your own" and put a "+" illustration. If you see [+ Soon], create a greyed card with a "soon" illustration.

### Frontend

Purpose: to create, manage and join **Ecosystem Trust Networks**.
Repo: https://github.com/verana-labs/verana-frontend

Deployments:

- [Verana Foundation hosted frontend](https://app.testnet.verana.network)
- [+ Deploy your own]

### Faucet

Purpose: to get airdropped VNA tokens for interacting with the testnet.
Repo: https://github.com/verana-labs/verana-faucet-hologram-chatbot

Deployments:

- [Verana Foundation hosted faucet](https://faucet-vs.testnet.verana.network/invitation)
- [+ Deploy your own]

### Explorer

Purpose: Block explorer
Repo: https://github.com/verana-labs/pingpub-explorer

Deployments:

- [Verana Foundation hosted explorer](https://explorer.testnet.verana.network)
- [+ Deploy your own]

### Indexer

Purpose: Produce an index of the ledger, for advanced query capabilities
Repo: https://github.com/verana-labs/pingpub-explorer

Deployments:

- [Verana Foundation hosted indexer](https://idx.testnet.verana.network)
- [+ Deploy your own]

### Trust Resolver

Purpose: index verifiable services by crawling their credentials
Repo: https://github.com/verana-labs/verre

Deployments:

- [+ Soon]

### Visualizer

Purpose: dashboard for browsing ecosystem map and get usage statistics
Repo: https://github.com/verana-labs/verana-visualizer

Deployments:

- [Verana Foundation hosted visualizer](https://vis.testnet.verana.network)
- [+ Deploy your own]

### Search Engine

Purpose: fancy prompt for querying the trust resolver
Repo: https://github.com/verana-labs/verana-search

Deployments:

- [+ Soon]
