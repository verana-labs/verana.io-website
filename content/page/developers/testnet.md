---
title: Testnet
subtitle: "How to use the testnet."
url: "/page/developers/testnet"
meta_title: "Verana Testnet | Join the Open Trust Sandbox"
meta_description: "Learn how to access the Verana testnet, request VNA tokens with the faucet, and start to create trust registries, credential schemas, and onboard issuers, verifier, and trust registry operators."
hero_icon: "fa-solid fa-hammer"
disable_content_wrapper: true
sidebar:
  title: Developers
  nav:
    - label: Getting Started
      href: "#getting-started"
    - label: Component Deployments
      href: "#component-deployments"
    - label: Developer Resources
      href: "#developer-resources"
  quick_links:
    - label: GitHub Repository
      href: "https://github.com/verana-labs"
    - label: Discord Community
      href: "https://discord.gg/edjaFn252q"
    - label: Developer Forum
      href: "https://forum.verana.network"
getting_started:
  id: getting-started
  title: "Getting Started with the Testnet"
  steps:
    - number: 1
      title: "Install a Cosmos SDK Wallet"
      description: "Install a cosmos SDK wallet, such as Keplr, Leap, or any interchain-ts compatible wallet."
      cards:
        columns: 3
        items:
          - title: Keplr
            image:
              src: "/images/purple/keplr-logo-icon.svg"
              alt: "Keplr wallet logo on dark background, cryptocurrency wallet interface, modern design"
              class: "h-32 rounded-xl mx-auto mb-4"
            ctas:
              - label: Download
                href: "https://www.keplr.app/"
                style: primary
          - title: Leap
            image:
              src: "/images/purple/leap.svg"
              alt: "Leap wallet logo on dark background, cryptocurrency wallet interface, modern design"
              class: "h-32 rounded-xl mx-auto mb-4"
            ctas:
              - label: Download
                href: "https://www.leapwallet.io/"
                style: primary
          - title: Other Wallets
            image:
              src: "/images/purple/interchain.svg"
              alt: "Multiple cryptocurrency wallet icons on dark background, interchain compatibility, modern design"
              class: "h-32 rounded-xl mx-auto mb-4"
            ctas:
              - label: View Full List
                href: "https://github.com/hyperweb-io/interchain-kit/tree/main/wallets"
                style: secondary
    - number: 2
      title: "Access the Frontend"
      description: "Access the frontend, connect your wallet to obtain your Verana address. You can copy the address by clicking the copy button on the top right corner."
      media:
        - src: "/images/purple/front-connected.png"
          alt: "Verana frontend interface showing wallet connection and address copy button, dark theme, modern UI design"
          wrapper_class: "bg-black rounded-xl p-6 border border-gray-600"
          img_class: "w-full h-64 rounded-lg object-cover"
    - number: 3
      title: "Download Hologram Messaging"
      description: "Download Hologram Messaging with your cellphone to interact with verifiable services."
      media_group:
        layout: horizontal
        items:
          - type: image
            src: "/images/purple/hologram5.png"
            alt: "Mobile app interface for Hologram Messaging, dark theme, modern messaging app design, smartphone mockup"
            wrapper_class: "bg-black rounded-xl p-6 border border-gray-600"
            img_class: "w-48 h-72 rounded-lg object-cover"
          - type: actions
            wrapper_class: "text-center"
            actions:
              - label: Download Hologram
                href: "https://hologram.zone"
                icon: "fa-solid fa-download"
                style: primary-large
    - number: 4
      title: "Connect to the Faucet"
      description: |
        Connect to the faucet. When connected to the faucet service, just write `/to \u003cyour verana address\u003e` to get 100 VNA.
      media_group:
        layout: grid
        columns: 2
        items:
          - type: image
            src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/6e076a40ac-d6694d54be2429763f29.png"
            alt: "Chatbot interface for cryptocurrency faucet, dark theme, messaging interface with VNA token requests"
            wrapper_class: "bg-black rounded-xl p-6 border border-gray-600"
            img_class: "w-full h-80 rounded-lg object-cover"
          - type: image
            src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/b1aa8a2db3-e7acb7c901e37576a25e.png"
            alt: "QR code for faucet connection, black and white, square format"
            wrapper_class: "bg-black rounded-xl p-6 border border-gray-600 text-center"
            img_class: "w-32 h-32 mx-auto rounded-lg object-cover"
            caption: "Scan to connect to faucet"
    - number: 5
      title: "Execute Transactions"
      description: "You can now interact with the frontend and execute transactions on the Verana network."
      media:
        - src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/e5538b4edf-191102d2a187587451d1.png"
          alt: "Verana frontend transaction interface, blockchain transaction execution, dark theme, modern UI with transaction history"
          wrapper_class: "bg-black rounded-xl p-6 border border-gray-600"
          img_class: "w-full h-64 rounded-lg object-cover"
component_deployments:
  id: component-deployments
  title: "Component Deployments"
  description: "Here is a list of known deployments for all components. You can either use these deployments, or deploy your own instances."
  components:
    - name: Frontend
      purpose: "to create, manage and join **Ecosystem Trust Networks**."
      github:
        href: "https://github.com/verana-labs/verana-frontend"
      deployments:
        - title: Verana Foundation Frontend
          description: "Official hosted instance for ecosystem management"
          action:
            label: Launch
            href: "https://app.testnet.verana.network"
            style: primary
          media:
            bg: "bg-gradient-to-br from-verana/20 to-verana-light/10"
            src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/384e0b1d16-f1646ccd9d9126f64403.png"
            alt: "Modern web application dashboard interface, dark theme UI with purple accents, frontend development"
        - title: Deploy Your Own
          description: "Self-hosted frontend instance"
          action:
            label: Launch
            href: "https://github.com/verana-labs/verana-frontend"
            style: outline
          media:
            bg: "bg-gray-800"
            icon:
              name: "fa-solid fa-plus"
              color: "text-verana text-3xl"
    - name: Faucet
      purpose: "to get airdropped VNA tokens for interacting with the testnet."
      github:
        href: "https://github.com/verana-labs/verana-faucet-hologram-chatbot"
      deployments:
        - title: Verana Foundation Faucet
          description: "Official hosted faucet for testnet tokens"
          action:
            label: Launch
            href: "https://faucet-vs.testnet.verana.network/invitation"
            style: primary
          media:
            bg: "bg-gradient-to-br from-blue-500/20 to-cyan-400/10"
            src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/8e27c51852-75033ad4bc526609eb0b.png"
            alt: "Cryptocurrency faucet interface, token distribution system, water drop with digital coins, modern UI"
        - title: Deploy Your Own
          description: "Self-hosted faucet instance"
          action:
            label: Launch
            href: "https://github.com/verana-labs/verana-faucet-hologram-chatbot"
            style: outline
          media:
            bg: "bg-gray-800"
            icon:
              name: "fa-solid fa-plus"
              color: "text-verana text-3xl"
    - name: Explorer
      purpose: "Block explorer"
      github:
        href: "https://github.com/verana-labs/pingpub-explorer"
      deployments:
        - title: Verana Foundation Explorer
          description: "Official block explorer for network data"
          action:
            label: Launch
            href: "https://explorer.testnet.verana.network"
            style: primary
          media:
            bg: "bg-gradient-to-br from-green-500/20 to-emerald-400/10"
            src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/4f1fa6a279-adc3e9090a90d9c4229f.png"
            alt: "Blockchain explorer interface showing transaction blocks, search functionality, dark theme with data visualization"
        - title: Deploy Your Own
          description: "Self-hosted explorer instance"
          action:
            label: Launch
            href: "https://github.com/verana-labs/pingpub-explorer"
            style: outline
          media:
            bg: "bg-gray-800"
            icon:
              name: "fa-solid fa-plus"
              color: "text-verana text-3xl"
    - name: Indexer
      purpose: "Produce an index of the ledger, for advanced query capabilities"
      github:
        href: "https://github.com/verana-labs/verana-indexer"
      deployments:
        - title: Verana Foundation Indexer
          description: "Official hosted indexer for queries"
          action:
            label: Launch
            href: "https://idx.testnet.verana.network"
            style: primary
          media:
            bg: "bg-gradient-to-br from-orange-500/20 to-amber-400/10"
            src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/ea4f78575b-cc8ccee761aafb674c42.png"
            alt: "Database indexing interface, data organization system, query optimization dashboard, modern tech UI"
        - title: Deploy Your Own
          description: "Self-hosted indexer instance"
          action:
            label: Launch
            href: "https://github.com/verana-labs/verana-indexer"
            style: outline
          media:
            bg: "bg-gray-800"
            icon:
              name: "fa-solid fa-plus"
              color: "text-verana text-3xl"
    - name: Trust Resolver
      purpose: "index verifiable services by crawling their credentials"
      github:
        href: "https://github.com/verana-labs/verre"
      deployments:
        - title: Soon
          description: "Coming soon to testnet"
          type: soon
          action:
            label: Launch
            style: disabled
          media:
            bg: "bg-gray-800"
            icon:
              name: "fa-solid fa-clock"
              color: "text-gray-400 text-3xl"
    - name: Visualizer
      purpose: "dashboard for browsing ecosystem map and get usage statistics"
      github:
        href: "https://github.com/verana-labs/verana-visualizer"
      deployments:
        - title: Verana Foundation Visualizer
          description: "Official hosted visualizer dashboard"
          action:
            label: Launch
            href: "https://vis.testnet.verana.network"
            style: primary
          media:
            bg: "bg-gradient-to-br from-purple-500/20 to-pink-400/10"
            src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/ee421133c0-511d5f5c124adb3ba6c4.png"
            alt: "Data visualization dashboard with charts, graphs, network maps, ecosystem analytics, modern dark UI"
        - title: Deploy Your Own
          description: "Self-hosted visualizer instance"
          action:
            label: Launch
            href: "https://github.com/verana-labs/verana-visualizer"
            style: outline
          media:
            bg: "bg-gray-800"
            icon:
              name: "fa-solid fa-plus"
              color: "text-verana text-3xl"
    - name: Search Engine
      purpose: "fancy prompt for querying the trust resolver"
      github:
        href: "https://github.com/verana-labs/verana-search"
      deployments:
        - title: Soon
          description: "Coming soon to testnet"
          type: soon
          action:
            label: Launch
            style: disabled
          media:
            bg: "bg-gray-800"
            icon:
              name: "fa-solid fa-clock"
              color: "text-gray-400 text-3xl"
page_cta:
  id: page-cta
  title: "Ready to Start Building?"
  description: "Join the Verana testnet and start building the future of decentralized trust."
  primary:
    label: Access Frontend
    href: "https://app.testnet.verana.network"
    icon: "fa-solid fa-rocket"
    style: primary-xl
  secondary:
    label: Join Discord
    href: "https://discord.gg/edjaFn252q"
    style: outline-xl
related_resources:
  id: developer-resources
  title: "Developer Resources"
  items:
    - icon:
        name: "fa-solid fa-book"
        bg: "bg-blue-500/20"
        color: "text-blue-400"
      title: "API Documentation"
      description: "Complete API reference and integration guides for building on Verana."
      cta:
        label: Read Docs
        href: "https://docs.verana.io"
    - icon:
        name: "fa-brands fa-github"
        bg: "bg-green-500/20"
        color: "text-green-400"
      title: "GitHub Repository"
      description: "Access the complete source code and contribute to the Verana ecosystem."
      cta:
        label: View Code
        href: "https://github.com/verana-labs"
    - icon:
        name: "fa-brands fa-discord"
        bg: "bg-purple-500/20"
        color: "text-purple-400"
      title: "Developer Community"
      description: "Connect with other developers and get support from the Verana team."
      cta:
        label: Join Discord
        href: "https://discord.gg/edjaFn252q"
---

{{< developers-testnet >}}
