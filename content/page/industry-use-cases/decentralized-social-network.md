---
title: Decentralized Social Networks
subtitle: "Where creators own their channels, followers, and provenance. Discovery is based on credentials—not ads."
url: "/page/industry-use-cases/decentralized-social-network"
meta_title: "Decentralized Social Networks | Own Channels with Verana"
meta_description: "Launch verifiable social channels on Verana to own follower relationships, prove content provenance, and enable trust-based discovery without ad algorithms."
hero_icon: "fa-solid fa-users"
disable_content_wrapper: true
use_case_partial: "decentralized-social-network"
sidebar:
  title: Industry Use Cases
  nav:
    - label: The Problem
      url: "#problem-section"
      active: true
    - label: Solution Overview
      url: "#solution-intro"
    - label: Architecture
      url: "#architecture"
    - label: Identity & Trust
      url: "#identity-trust"
    - label: Moderation
      url: "#moderation"
    - label: Economics
      url: "#economics"
    - label: Why This is Better
      url: "#why-better"
    - label: Conclusion
      url: "#conclusion"
  quick_links:
    title: Quick Links
    items:
      - label: Documentation
        url: "https://docs.verana.io"
      - label: Discord
        url: "https://discord.gg/edjaFn252q"
      - label: Github
        url: "https://github.com/verana-labs"
problem_section:
  title: "The Problem with Today's Social Networks"
  intro: |
    Traditional social networks are **centralized platforms** that dictate who can publish, how content is moderated, and how user data is monetized. They come with serious drawbacks:
  cards:
    - icon: "fa-solid fa-database"
      icon_bg_class: "bg-red-500/20"
      icon_color_class: "text-red-400"
      title: Data Exploitation
      text: "Platforms harvest and sell user data without transparent consent or fair compensation."
    - icon: "fa-solid fa-ban"
      icon_bg_class: "bg-red-500/20"
      icon_color_class: "text-red-400"
      title: Censorship & Bias
      text: "Opaque moderation rules are uneven, biased, and controlled by a central authority."
    - icon: "fa-solid fa-lock"
      icon_bg_class: "bg-red-500/20"
      icon_color_class: "text-red-400"
      title: Vendor Lock-in
      text: "Creators cannot easily move their audience from one network to another."
    - icon: "fa-solid fa-robot"
      icon_bg_class: "bg-red-500/20"
      icon_color_class: "text-red-400"
      title: Fake Accounts & Bots
      text: "Lack of verifiable identity creates fraud and misinformation."
  result:
    title: "The Result?"
    text: "A system where **users are products, not participants**."
solution_intro:
  title: "Introducing the Verifiable Trust Social Network"
  highlight:
    icon: "fa-solid fa-users"
    icon_bg_class: "bg-verana/20"
    icon_color_class: "text-verana"
    title: Imagine This
    text: "A social network where creators and communities **own their channels**, manage their own moderation, and connect in a network secured by verifiable trust."
  image:
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/3ba8fd7054-fd84d00aba1d556a2658.png"
    alt: "Decentralized social network with independently owned channels connected by verifiable trust lines"
architecture:
  title: "Architecture Components"
  components:
    - icon: "fa-solid fa-tv"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      title: "1. Social Channel (Verifiable Service)"
      description: "A Verifiable Trust Social Network provides an **open source Social Channel Verifiable Service**. Any influencer, creator, or community can deploy their own channel in the datacenter of their choice."
      features:
        - icon: "fa-solid fa-crown"
          icon_color_class: "text-yellow-400"
          title: "100% Ownership"
          text: "Complete ownership of data and followers."
        - icon: "fa-solid fa-server"
          icon_color_class: "text-green-400"
          title: Self-Hosted
          text: "Channels are not platform-dependent."
        - icon: "fa-solid fa-signature"
          icon_color_class: "text-purple-400"
          title: Signed Content
          text: "Every post is cryptographically signed by the channel's DID."
    - icon: "fa-solid fa-globe"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: "2. Social Browser (Verifiable User Agent)"
      description: "A **browser and/or mobile app** that lets users explore decentralized social channels. Instead of visiting centralized feeds, users navigate across independently hosted channels."
      features:
        - icon: "fa-solid fa-magnifying-glass"
          icon_color_class: "text-blue-400"
          title: Searchable
          text: "Discovery powered by Verana's DID Directory."
        - icon: "fa-solid fa-shield-check"
          icon_color_class: "text-green-400"
          title: Verifiable
          text: "Channels present verifiable credentials before appearing."
        - icon: "fa-solid fa-arrows-up-down-left-right"
          icon_color_class: "text-purple-400"
          title: Portable
          text: "No single platform controls visibility or reach."
  network_example:
    title: "3. Network Example"
    image:
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/9b2ba032fa-98dba522b821cbff5485.png"
      alt: "Creators and followers connected via Verana blockchain, indexer, and trust resolver"
    note:
      text: "**Note:** To simplify, we represented a single instance of the Trust Resolver, Verana Indexer, and Verana Blockchain. Channel owners can deploy their own instance for full decentralization."
identity_trust:
  title: "Identity and Trust"
  intro: "To appear in the Social Channel User Agent, channel owners must:"
  steps:
    - label: "1"
      badge_bg_class: "bg-blue-500/20"
      badge_text_class: "text-blue-400 font-bold"
      title: Attach Person Credential
      text: "Attach a **Person Credential (ECS)** with an avatar or identity proof."
    - label: "2"
      badge_bg_class: "bg-green-500/20"
      badge_text_class: "text-green-400 font-bold"
      title: Obtain Social Channel Credential
      text: "Obtain a **Social Channel Credential** (free or purchased) that marks the channel as usable."
    - label: "3"
      badge_bg_class: "bg-verana/20"
      badge_text_class: "text-verana font-bold"
      title: Register DID
      text: "Register the **channel DID** in the **Verana DID Directory**, making it indexed and searchable."
  trust_guarantee:
    icon: "fa-solid fa-shield-check"
    icon_color_class: "text-verana"
    title: Trust Guarantee
    text: "Followers always know **who owns the channel**."
moderation:
  title: Moderation
  cards:
    - icon: "fa-solid fa-user-shield"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      title: Channel-Level Responsibility
      text: "Each creator moderates their own channel, maintaining full control over community standards."
    - icon: "fa-solid fa-id-badge"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Credential-Based Access
      text: "Followers can be required to present credentials—age, membership, verified identity—for deeper engagement."
  warning:
    icon: "fa-solid fa-exclamation-triangle"
    icon_bg_class: "bg-yellow-500/20"
    icon_color_class: "text-yellow-400"
    title: Credential Revocation
    text: "If harmful content is posted or moderation fails, the ecosystem can revoke the Social Channel Credential—or even the Person Credential."
  bottom_line:
    title: Bottom-Up Moderation
    text: "A **bottom-up, verifiable moderation system** replaces opaque centralized censorship."
economics:
  title: "Economics and Incentives"
  intro_card:
    heading: Privacy-Preserving Business Model
    description: "Building around the Verifiable Trust concept enables **privacy-preserving business models**:"
    feature_lists:
      - items:
          - icon: "fa-solid fa-id-card"
            icon_color_class: "text-blue-400"
            title: Credential Requests
            text: "Social channels can request credential presentations from other ecosystems."
          - icon: "fa-solid fa-coins"
            icon_color_class: "text-green-400"
            title: User Agent Rewards
            text: "The social network earns rewards whenever credential flows occur in its app."
      - items:
          - wrapper_class: "bg-verana/10 border border-verana/30 rounded-xl p-6 flex items-center justify-center text-center"
            icon: "fa-solid fa-balance-scale"
            icon_color_class: "text-verana"
            title: Fair Economics
            text: "**Decentralized economics** replace surveillance advertising."
why_better:
  title: "Why This is Better"
  items:
    - icon: "fa-solid fa-crown"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: User Sovereignty
      text: "Creators own their channels, not a corporation."
    - icon: "fa-solid fa-shield-check"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Verifiable Trust
      text: "DIDs and verifiable credentials prove identities and prevent fraud."
    - icon: "fa-solid fa-signature"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Content Provenance
      text: "Every post is signed by the channel's DID."
    - icon: "fa-solid fa-users-gear"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Decentralized Moderation
      text: "Community-driven, credential-backed moderation."
    - icon: "fa-solid fa-user-secret"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Privacy-Preserving
      text: "Monetization happens without surveillance."
    - icon: "fa-solid fa-arrows-up-down-left-right"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Interoperability
      text: "Channels work across ecosystems—no vendor lock-in."
conclusion:
  title: "A Trustable Internet, One Channel at a Time"
  intro: "We just showed how the **Verifiable Trust Concept** can reimagine social networking:"
  transitions:
    - icon: "fa-solid fa-arrow-right"
      icon_bg_class: "bg-red-500/20"
      icon_color_class: "text-red-400"
      title: "From Centralized Control"
      text: "to **decentralized ownership**"
    - icon: "fa-solid fa-arrow-right"
      icon_bg_class: "bg-yellow-500/20"
      icon_color_class: "text-yellow-400"
      title: "From Opaque Moderation"
      text: "to **transparent governance**"
    - icon: "fa-solid fa-arrow-right"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: "From Surveillance Ads"
      text: "to **privacy-preserving incentives**"
  closing:
    headline: 'It''s time to move from "social media platforms" to a **social internet of verifiable services**.'
    message:
      icon: "fa-solid fa-rocket"
      icon_color_class: "text-verana"
      text: "With Verana, the future of social networking is **trustable, decentralized, and user-owned**."
cta:
  title: "Ready to Build Decentralized Social?"
  body: "Start creating your own social channels and join the revolution in creator sovereignty."
  primary:
    label: Start Building
    url: "/page/build"
    icon: fa-solid fa-rocket
  secondary:
    label: View Implementation Guide
    url: "https://docs.verana.io"
related_use_cases:
  title: Related Industry Use Cases
  items:
    - icon: "fa-solid fa-id-card"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      title: Government Digital ID
      text: "Issue privacy-preserving national IDs and let citizens prove attributes anywhere."
      url: "/page/industry-use-cases/government-id"
      cta_label: Learn More
    - icon: "fa-solid fa-robot"
      icon_bg_class: "bg-purple-500/20"
      icon_color_class: "text-purple-400"
      title: AI Agents
      text: "Bind AI agents to accountable owners and transparent operating policies."
      url: "/page/industry-use-cases/ai-agents"
      cta_label: Explore
    - icon: "fa-solid fa-hotel"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Hotel Discovery
      text: "Let hotels prove their credentials directly to travelers without broker lock-in."
      url: "/page/industry-use-cases/hotel-management"
      cta_label: Discover
---

{{< industry-use-case >}}
