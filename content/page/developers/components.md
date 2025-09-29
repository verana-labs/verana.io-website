---
title: Verana Components
subtitle: "Explore Verana components, learn about each component, how they are built, which technologies they use, and where you can find the repositories."
url: "/page/developers/components"
meta_title: "Developers and Verana | Verana components and technical stack"
meta_description: "Explore Verana components, learn about each component, how they are built, with which technology, and where the repositories live."
hero_icon: "fa-solid fa-cubes"
disable_content_wrapper: true
sidebar:
  title: Developers
  nav:
    - label: Overview
      href: "#overview"
    - label: Network Components
      href: "#network-components"
    - label: Verifiable Service Components
      href: "#verifiable-service-components"
    - label: Verifiable User Agents
      href: "#verifiable-user-agent-components"
  quick_links:
    - label: GitHub
      href: "https://github.com/verana-labs"
    - label: Documentation
      href: "https://docs.verana.io"
    - label: Community
      href: "https://discord.gg/edjaFn252q"
overview:
  id: overview
  title: Overview of Verana Components
  lead: |
    Verana's architecture is built on modular, open-source components that work together to create a decentralized trust infrastructure. Each component serves a specific purpose and can be deployed independently or as part of the complete Verana ecosystem.
  architecture:
    title: Network Component Dependencies
    image:
      alt: "Diagram showing data flow between Verana components"
      diagram: |
        {{< kroki _type="plantuml" >}}
        @startuml
        left to right direction

        skinparam backgroundColor transparent
        skinparam Shadowing false
        skinparam defaultFontName "Inter"
        skinparam defaultFontColor #E2E8F0
        skinparam DefaultTextAlignment center
        skinparam ArrowColor #9F7AEA
        skinparam ArrowHeadColor #9F7AEA
        skinparam ArrowFontColor #E2E8F0
        skinparam ArrowThickness 2
        skinparam Padding 14
        skinparam dpi 160
        skinparam rectangle {
          BackgroundColor #111827
          BorderColor #4338CA
          FontColor #E2E8F0
          RoundCorner 16
        }

        rectangle "Verana Node" as vpr1 #763EF0
        rectangle "Indexer" as idx1 #2563EB
        rectangle "Resolver" as rslv1 #22C55E
        rectangle "Frontend" as frontend1 #0EA5E9
        rectangle "Visualizer" as vis1 #A855F7
        rectangle "Search Engine" as search1 #F97316

        idx1 --> vpr1
        frontend1 --> idx1
        frontend1 --> rslv1
        frontend1 --> vpr1
        rslv1 --> idx1
        vis1 --> idx1
        vis1 --> rslv1
        search1 --> rslv1
        @enduml
        {{< /kroki >}}
    highlights:
      - icon: "fa-solid fa-server"
        icon_bg: "bg-blue-500/20"
        icon_color: "text-blue-400"
        title: Network Layer
        description: "Core blockchain infrastructure and indexing services"
        animation_delay: "0s"
      - icon: "fa-solid fa-cogs"
        icon_bg: "bg-green-500/20"
        icon_color: "text-green-400"
        title: Service Layer
        description: "Verifiable services and agent implementations"
        animation_delay: "0.5s"
      - icon: "fa-solid fa-mobile-alt"
        icon_bg: "bg-purple-500/20"
        icon_color: "text-purple-400"
        title: User Layer
        description: "Applications and user-facing interfaces"
        animation_delay: "1s"
component_groups:
  - id: network-components
    title: Network Components
    icon:
      name: "fa-solid fa-network-wired"
      bg: "bg-blue-500/20"
      color: "text-blue-400"
    components:
      - name: Verana Node
        icon:
          name: "fa-solid fa-cube"
          bg: "bg-blue-500/20"
          color: "text-blue-400"
        badges:
          - label: Cosmos SDK
            class: "bg-blue-500/20 text-blue-400"
          - label: Layer-1
            class: "bg-gray-700 text-gray-300"
        actions:
          - label: Testnet
            href: "/page/developers/testnet"
            icon: "fa-solid fa-flask"
            class: "bg-blue-600 hover:bg-blue-700 text-white"
          - label: Repository
            href: "https://github.com/verana-labs/verana"
            icon: "fa-brands fa-github"
            class: "bg-gray-800 hover:bg-verana text-white"
        summary: |
          A layer-1 **Cosmos SDK** implementation of the **Verifiable Public Registry** specification. Verana operates as a registry of trust registries, letting any ecosystem launch and self-govern its trust network.

          Governance of the chain is managed by the [Verana Council](/page/about/governance).
        media:
          placement: right
          image:
            src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/fe1025525e-b87c3acf7cc9ca570bd8.png"
            alt: "Futuristic blockchain network nodes connected in cosmic space"
      - name: Indexer
        icon:
          name: "fa-solid fa-database"
          bg: "bg-green-500/20"
          color: "text-green-400"
        badges:
          - label: Horoscope v2 Fork
            class: "bg-green-500/20 text-green-400"
          - label: Database
            class: "bg-gray-700 text-gray-300"
        actions:
          - label: Testnet
            href: "/page/developers/testnet"
            icon: "fa-solid fa-flask"
            class: "bg-green-600 hover:bg-green-700 text-white"
          - label: Repository
            href: "https://github.com/verana-labs/verana-indexer"
            icon: "fa-brands fa-github"
            class: "bg-gray-800 hover:bg-verana text-white"
        summary: |
          A fork of **Horoscope v2**, the Aura Network indexer. The Verana indexer replays every block so it can persist historical state and power advanced queries beyond what the ledger API exposes.
        bullets:
          - Perform advanced queries that the base ledger API cannot satisfy.
          - Maintain a full state change history so past data remains queryable.
        media:
          placement: gallery
          items:
            - src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/7ca420c44f-440635eefec4a2e65da6.png"
              alt: "Digital database with glowing green server racks"
            - src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/c3d4e5f6a7-8b9c0d1e2f3a4b5c6d7e.png"
              alt: "Blockchain transaction flow visualization with green data streams"
            - src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/9f8e7d6c5b-4a3b2c1d0e9f8g7h6i5j.png"
              alt: "Advanced query interface with holographic data displays"
      - name: Resolver
        icon:
          name: "fa-solid fa-search"
          bg: "bg-green-500/20"
          color: "text-green-400"
        badges:
          - label: Trust Engine
            class: "bg-green-500/20 text-green-400"
          - label: Query API
            class: "bg-gray-700 text-gray-300"
        actions:
          - label: Testnet
            href: "/page/developers/testnet"
            icon: "fa-solid fa-flask"
            class: "bg-green-600 hover:bg-green-700 text-white"
          - label: Repository
            href: "https://github.com/verana-labs/verre"
            icon: "fa-brands fa-github"
            class: "bg-gray-800 hover:bg-verana text-white"
        summary: |
          Keeps a synchronized data store by subscribing to indexer updates and DID directory events. The resolver crawls verifiable services, dereferences their credentials, and normalizes data for querying.
        bullets:
          - Crawl verifiable services, dereference credentials, and organize the resulting data.
          - Offer a universal query API for Verifiable User Agents and trust-aware search experiences.
        callout:
          text: "For a better understanding, you should **learn about the trust engine**."
          class: "bg-green-900/20 border border-green-700/30"
          text_class: "text-green-200 text-sm"
        links:
          - label: Learn about the Trust Resolver
            href: "/page/trust-engine/trust-resolver#how-it-works"
        media:
          placement: right
          image:
            src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/3826adee5c-4f073ce64afaa20d350d.png"
            alt: "Search interface with interconnected trust networks in a futuristic landscape"
      - name: Front End
        icon:
          name: "fa-solid fa-magnifying-glass"
          bg: "bg-purple-500/20"
          color: "text-purple-400"
        badges:
          - label: Frontend
            class: "bg-gray-700 text-gray-300"
        actions:
          - label: Testnet
            href: "/page/developers/testnet"
            icon: "fa-solid fa-flask"
            class: "bg-purple-600 hover:bg-purple-700 text-white"
          - label: Repository
            href: "https://github.com/verana-labs/search-engine"
            icon: "fa-brands fa-github"
            class: "bg-gray-800 hover:bg-verana text-white"
        summary: |
          A prompt-driven interface that brings resolver data to life for end users and dashboards alike.
        bullets:
          - Crawl verifiable services, dereference credentials, and organize data.
          - Provide a universal query API to Verifiable User Agents and discovery interfaces.
        media:
          placement: right
          image:
            src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/def83d1844-4439013d109c507ac622.png"
            alt: "Modern search interface with vibrant query prompts"
      - name: Search Engine
        icon:
          name: "fa-solid fa-magnifying-glass"
          bg: "bg-purple-500/20"
          color: "text-purple-400"
        badges:
          - label: Query Interface
            class: "bg-purple-500/20 text-purple-400"
          - label: Frontend
            class: "bg-gray-700 text-gray-300"
        actions:
          - label: Testnet
            href: "/page/developers/testnet"
            icon: "fa-solid fa-flask"
            class: "bg-purple-600 hover:bg-purple-700 text-white"
          - label: Repository
            href: "https://github.com/verana-labs/search-engine"
            icon: "fa-brands fa-github"
            class: "bg-gray-800 hover:bg-verana text-white"
        summary: |
          A prompt-driven interface for exploring resolver data. Use the Trust Engine examples to discover how natural language queries surface verifiable results.
        links:
          - label: Trust Engine query examples
            href: "/page/trust-engine/trust-resolver#advanced-queries"
        media:
          placement: right
          image:
            src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/def83d1844-4439013d109c507ac622.png"
            alt: "Modern search interface with orange accents and floating prompts"
      - name: Visualizer
        icon:
          name: "fa-solid fa-chart-network"
          bg: "bg-purple-500/20"
          color: "text-purple-400"
        badges:
          - label: Dashboard
            class: "bg-purple-500/20 text-purple-400"
          - label: Analytics
            class: "bg-gray-700 text-gray-300"
        actions:
          - label: Testnet
            href: "/page/developers/testnet"
            icon: "fa-solid fa-flask"
            class: "bg-purple-600 hover:bg-purple-700 text-white"
          - label: Repository
            href: "https://github.com/verana-labs/verana-visualizer"
            icon: "fa-brands fa-github"
            class: "bg-gray-800 hover:bg-verana text-white"
        summary: |
          A network dashboard that turns Verana data into interactive ecosystem insights and health metrics.
        bullets:
          - Visualize relationships between ecosystems and how they interoperate.
          - Track trust deposit balances, credential issuance and verification volume, and slashing events.
          - Surface overall network statistics at a glance.
        media:
          placement: right
          image:
            src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/102435a500-8bc42da6b68ba409a3b1.png"
            alt: "Analytics dashboard with glowing charts and ecosystem graphs"
      - type: cta
        title: Your Fancy New App Here
        description: "Built something that should live alongside the core components? Fork the website and add your project to the list."
        icon:
          name: "fa-solid fa-plus"
          bg: "bg-verana/20"
          color: "text-verana"
        action:
          label: Fork Repository
          href: "https://github.com/verana-labs/verana.io-website"
          icon: "fa-brands fa-github"
        action_class: "bg-verana hover:bg-verana-dark text-white"
        media:
          placement: right
          image:
            src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/ffbf3183e6-47f2144824c6af01065b.png"
            alt: "Abstract purple plus symbol representing open source contributions"
  - id: verifiable-service-components
    title: Verifiable Service Components
    icon:
      name: "fa-solid fa-server"
      bg: "bg-green-500/20"
      color: "text-green-400"
    note: |
      **Note:** Verana is DID method agnostic. Use any DID method for your verifiable services, but ensure the Trust Resolver can dereference it. If a plugin is missing, add it so your services remain discoverable.
    intro: "Open-source building blocks for verifiable services."
    components:
      - name: Credo Verifiable Service Agent
        icon:
          name: "fa-solid fa-robot"
          bg: "bg-green-500/20"
          color: "text-green-400"
        badges:
          - label: Credo-TS
            class: "bg-green-500/20 text-green-400"
          - label: OpenWallet
            class: "bg-blue-500/20 text-blue-400"
          - label: Agent
            class: "bg-gray-700 text-gray-300"
        actions:
          - label: Repository
            href: "https://github.com/2060-io/vs-agent"
            icon: "fa-brands fa-github"
            class: "bg-gray-800 hover:bg-verana text-white"
        summary: |
          An agent for building Verifiable Services, based on OpenWallet Foundation **credo-ts**:
        feature_groups:
          - title: Features
            type: list
            items:
              - Use as a container or npm package.
              - Issue and verify credentials.
              - Publish credentials to your DID document.
              - Supports DIDComm and OpenID4VC / OpenID4VP.
          - title: Supported Standards
            type: standards
            sections:
              - heading: "DID Methods"
                tags:
                  - label: did:peer
                    class: "bg-blue-500/20 text-blue-400"
                  - label: did:web
                    class: "bg-blue-500/20 text-blue-400"
                  - label: did:webvh
                    class: "bg-blue-500/20 text-blue-400"
                  - label: did:cheqd
                    class: "bg-blue-500/20 text-blue-400"
              - heading: "Credential Types"
                tags:
                  - label: W3C v1.1
                    class: "bg-purple-500/20 text-purple-400"
                  - label: AnonCreds
                    class: "bg-purple-500/20 text-purple-400"
        media:
          placement: full
          image:
            src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/d56d8832cd-53927369c9e8258da11f.png"
            alt: "Futuristic AI agent robot with glowing circuits and credentials"
      - type: cta
        title: Your Verifiable Service Agent Here
        description: "Added Verifiable Trust support to another wallet or agent? Fork the website and showcase it here."
        icon:
          name: "fa-solid fa-plus"
          bg: "bg-green-500/20"
          color: "text-green-400"
        action:
          label: Fork Repository
          href: "https://github.com/verana-labs/verana.io-website"
          icon: "fa-brands fa-github"
        action_class: "bg-green-600 hover:bg-green-700 text-white"
  - id: verifiable-user-agent-components
    title: Verifiable User Agent Components
    icon:
      name: "fa-solid fa-user-gear"
      bg: "bg-purple-500/20"
      color: "text-purple-400"
    components:
      - type: info
        icon:
          name: "fa-solid fa-toolbox"
          color: "text-yellow-400"
        title: Coming Soon
        description: "Verifiable User Agent components are currently under development. Join the community to get involved or follow progress."
cta:
  id: build-with-verana
  title: Ready to Build with Verana?
  text: "Explore the components, contribute to the ecosystem, and help shape the future of decentralized trust."
  primary:
    label: Start Developing
    href: "https://docs.verana.io"
    icon: "fa-solid fa-code"
    class: "bg-verana hover:bg-verana-dark text-white"
  secondary:
    label: View All Repositories
    href: "https://github.com/verana-labs"
    class: "border-2 border-gray-600 hover:border-verana text-white"
resources:
  title: Developer Resources
  cards:
    - icon:
        name: "fa-solid fa-book"
        bg: "bg-blue-500/20"
        color: "text-blue-400"
      title: Documentation
      text: "Complete guides, API references, and tutorials to help you build with Verana."
      link:
        label: Read Docs
        href: "https://docs.verana.io"
    - icon:
        name: "fa-brands fa-github"
        bg: "bg-green-500/20"
        color: "text-green-400"
      title: GitHub Organization
      text: "Browse all Verana repositories, contribute code, and collaborate with the community."
      link:
        label: View GitHub
        href: "https://github.com/verana-labs"
    - icon:
        name: "fa-brands fa-discord"
        bg: "bg-purple-500/20"
        color: "text-purple-400"
      title: Developer Community
      text: "Join Discord to connect with other builders, ask questions, and share progress."
      link:
        label: Join Discord
        href: "https://discord.gg/edjaFn252q"
---


{{< developers-components >}}
