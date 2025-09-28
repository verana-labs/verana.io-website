---
title: Testnet
subtitle: "How to use the testnet."
url: "/page/developers/testnet"
meta_title: "Developers and Verana | Verana layer-1 network testnet apps and dashboards"
meta_description: "Explore Verana applications, interfaces, block explorers, visualizers, faucet, get URLs of deployed applications and deploy your own instances, and learn how to create or join ecosystems within the network."
hero_icon: "fa-solid fa-hammer"
disable_content_wrapper: true
---

## Getting started with the Testnet

1. Install a cosmos SDK wallet, such as [Keplr](https://www.keplr.app/), [Leap](https://www.leapwallet.io/),... or any [interchain-ts](https://github.com/hyperweb-io/interchain-kit) compatible wallet.

2. Access the [frontend](https://app.testnet.verana.network), connect your wallet to obtain you Verana address. You can copy the address by clicking the copy button on the top right corner, just on the left of your address.

3. Connect to the [faucet](https://faucet-vs.testnet.verana.network/invitation). This requires downloading Hologram Messaging, a chat-based Verifiable User Agent and credential wallet. When connected to the faucet service, just write /to <your verana address> to get 100 VNA.

4. You can now interact with the frontend and execute transactions.

## Component Deployments

Here is a list of known deployments for all components. You can either use these deployments, or deploy your own instances.

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
