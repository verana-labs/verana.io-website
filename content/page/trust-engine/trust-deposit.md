---
title: Trust Deposit & Reputation
subtitle: "A stake within the Verana Network that grows automatically as participants interact with ecosystems and builds transparent, verifiable reputation across decentralized trust networks."
url: "/page/trust-engine/trust-deposit"
meta_title: "Trust Deposit & Reputation | Incentives on the Verana Network"
meta_description: "Understand Verana’s trust deposit model, reputation scoring, and slashing mechanics that reward verified participation across decentralized trust ecosystems."
hero_icon: "fa-solid fa-piggy-bank"
disable_content_wrapper: true
sidebar:
  title: Deposit & Reputation
  nav:
    - label: Trust Deposit
      url: "#trust-deposit-intro"
      active: true
    - label: How Deposits Grow
      url: "#deposit-growth"
    - label: Conceptual Model
      url: "#conceptual-model"
    - label: Core Purposes
      url: "#core-purposes"
    - label: Slash Mechanism
      url: "#slash-mechanism"
    - label: Reputation System
      url: "#reputation-system"

  quick_links:
    title: Quick Links
    items:
      - label: About the VNA Token
        url: "https://docs.verana.io"
      - label: Documentation
        url: "https://docs.verana.io"
      - label: Discord
        url: "https://discord.gg/edjaFn252q"
      - label: Github
        url: "https://github.com/verana-labs"
intro_section:
  title: Trust Deposit
  description: |
    A **Trust Deposit** is a stake within the Verana Network that grows automatically as participants interact with ecosystems. Each participant maintains their own deposit, reflecting verifiable activity and contribution to the trust networks they engage with.
  visualization:
    title: Trust Deposit Growth Visualization
    items:
      - icon: "fa-solid fa-coins"
        gradient_class: "from-green-400 to-green-600"
        animation_delay: "0s"
        glow_color: "green"
        title: Initial Deposit
        description: Starting participation
        bar_percent: 30
      - icon: "fa-solid fa-chart-line"
        gradient_class: "from-blue-400 to-blue-600"
        animation_delay: "0.5s"
        glow_color: "blue"
        title: Growing Activity
        description: Credential issuance & verification
        bar_percent: 65
      - icon: "fa-solid fa-trophy"
        gradient_class: "from-verana to-verana-light"
        animation_delay: "1s"
        glow_color: "purple"
        title: Established Trust
        description: High ecosystem participation
        bar_percent: 90
deposit_growth:
  title: How Trust Deposits Grow
  items:
    - icon: "fa-solid fa-check-circle"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      title: Validation Process
      body: |
        When a validation process is executed, the **trust deposits of both the applicant and the validator** increase, rewarding participation in the verification ecosystem.
    - icon: "fa-solid fa-certificate"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Credential Issuance & Verification
      body: |
        If the ecosystem enables **pay-per-issuance** and/or **pay-per-verification**, the trust deposits of all participants in the permission tree grow each time a credential is issued or verified.
      note: |
        Additionally, the trust deposits of involved user agents and wallet user agents increment with each verified credential.
    - icon: "fa-solid fa-folder-open"
      icon_bg_class: "bg-purple-500/20"
      icon_color_class: "text-purple-400"
      title: Service Directory Participation
      body: |
        Registering or renewing a DID in the **service directory** increases the trust deposit of the participant who executes the transaction, encouraging active ecosystem participation.
conceptual_model:
  title: Conceptual Model
  highlight:
    icon: "fa-solid fa-percentage"
    icon_color_class: "text-verana"
    title: Percentage-Based Deduction System
    body: |
      The **trust deposit** operates as a **percentage-based deduction** applied to circulating trust fees. These deductions accumulate in individual deposits, reflecting ongoing participation and service provision.
  fee_example:
    title: Fee Distribution Example
    cards:
      - icon: "fa-solid fa-coins"
        icon_color_class: "text-yellow-400"
        title: Transaction Fees
        rows:
          - label: Base Fee
            value: "100 VNA"
            value_class: "text-white"
          - label: Additional (20%)
            value: "+20 VNA"
            value_class: "text-verana"
        total:
          label: Total Charged
          value: "120 VNA"
      - icon: "fa-solid fa-chart-pie"
        icon_color_class: "text-green-400"
        title: Distribution Split
        rows:
          - label: Liquid (80%)
            value: "80 VNA"
            value_class: "text-green-400"
          - label: Trust Deposit (20%)
            value: "20 VNA"
            value_class: "text-verana"
        total:
          label: Total Distributed
          value: "100 VNA"
    note: |
      **Note:** The percentage allocated to trust deposits (e.g., 20%) is configurable and defined by the **VPR governance authority**, ensuring ecosystem-specific control over incentive structures.
core_purposes:
  title: Core Purposes
  intro: |
    The **trust deposit** mechanism ensures that participants **adhere to the ecosystem governance framework (EGF)**, combining incentives with enforcement to maintain decentralized accountability.
  items:
    - icon: "fa-solid fa-heart"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Incentivize Good Behavior
      body: |
        Participants risk losing part of their deposit if they behave dishonestly or violate governance rules.
    - icon: "fa-solid fa-handshake"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      title: Signal Serious Intent
      body: |
        Requires participants to have "skin in the game," discouraging spam, fraud, and low-effort engagement.
    - icon: "fa-solid fa-balance-scale"
      icon_bg_class: "bg-yellow-500/20"
      icon_color_class: "text-yellow-400"
      title: Dispute Resolution
      body: |
        Deposits can be frozen during disputes. If harm is confirmed, held deposits may compensate for the damage.
    - icon: "fa-solid fa-slash"
      icon_bg_class: "bg-red-500/20"
      icon_color_class: "text-red-400"
      title: Enable Slashing
      body: |
        Deposits can be partially or fully slashed when participants breach trust policies or contractual roles.
    - icon: "fa-solid fa-users"
      icon_bg_class: "bg-purple-500/20"
      icon_color_class: "text-purple-400"
      title: Support Decentralized Governance
      body: |
        Serves as the economic foundation for decentralized permission management, assignment, and revocation.
    - icon: "fa-solid fa-key"
      icon_bg_class: "bg-verana/20"
      icon_color_class: "text-verana"
      title: Non-Custodial
      body: |
        Trust Deposits are held on-chain within a VPR and are not controlled by any centralized authority.
slash_section:
  icon: "fa-solid fa-exclamation-triangle"
  title: Slash Mechanism
  intro:
    title: Governance Framework Rules
    body: |
      Each ecosystem defines, in its **ecosystem governance framework (EGF)**, the rules participants must follow. The EGF also specifies the conditions under which a **slash**—a penalty applied to a participant’s trust deposit—may occur.
  pre_steps_title: Pre-Slash Process
  pre_steps:
    - icon: "fa-solid fa-search"
      icon_bg_class: "bg-orange-500/20"
      icon_color_class: "text-orange-400"
      title: "1. Assess Harm"
      body: |
        Determine whether the participant's actions caused measurable harm to the ecosystem or its members.
    - icon: "fa-solid fa-hand-holding-dollar"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      title: "2. Compensation Request"
      body: |
        Provide the participant with the opportunity to compensate affected parties directly.
    - icon: "fa-solid fa-gavel"
      icon_bg_class: "bg-red-500/20"
      icon_color_class: "text-red-400"
      title: "3. Unresolved Dispute"
      body: |
        If the dispute cannot be resolved and harm is evidenced, the ecosystem may authorize a slash.
  outcomes_title: When a Participant is Slashed
  outcomes:
    - icon: "fa-solid fa-minus"
      icon_bg_class: "bg-red-500/20"
      icon_color_class: "text-red-400"
      title: Deposit Forfeiture
      body: |
        A portion of the trust deposit is forfeited based on the severity or type of violation.
    - icon: "fa-solid fa-ban"
      icon_bg_class: "bg-red-500/20"
      icon_color_class: "text-red-400"
      title: Activity Suspension
      body: |
        The participant’s ability to perform actions (e.g., issuing or verifying credentials) is **suspended**.
    - icon: "fa-solid fa-refresh"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Restoration Process
      body: |
        To regain active status, the participant must **replenish the slashed amount** of their trust deposit.
  outcomes_note: |
    This transparent enforcement mechanism keeps ecosystems aligned with governance policies, rewarding good actors and holding violators accountable.
reputation_system:
  title: Trust Deposit-Based Reputation
  highlight:
    icon: "fa-solid fa-chart-line"
    icon_color_class: "text-verana"
    title: Transparent Digital Reputation
    body: |
      Because network activity and trust deposit data are publicly accessible, each participant naturally builds a **digital trust reputation** over time. This reputation reflects both positive contributions and any violations within the ecosystems they engage in.
  key_signals_title: Key Reputation Signals
  key_signals:
    - icon: "fa-solid fa-trending-up"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Growth of Trust Deposit
      body: |
        Active, rule-abiding participants see their trust deposit increase as they contribute value to the network.
    - icon: "fa-solid fa-history"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      title: Ecosystem-Specific History
      body: |
        For each ecosystem a participant engages, their trust deposit history is transparently visible to other participants.
    - icon: "fa-solid fa-certificate"
      icon_bg_class: "bg-purple-500/20"
      icon_color_class: "text-purple-400"
      title: Credential Activity
      body: |
        The number of credentials issued and/or verified by the participant within each ecosystem is publicly observable.
    - icon: "fa-solid fa-shield-halved"
      icon_bg_class: "bg-red-500/20"
      icon_color_class: "text-red-400"
      title: Behavioral Accountability
      body: |
        Any dishonest or malicious activity—especially if penalized through slashing—remains permanently associated with the participant's account.
  visualization:
    title: Reputation Score Visualization
    items:
      - icon: "fa-solid fa-user"
        gradient_class: "from-red-400 to-red-600"
        animation_delay: "0s"
        solid_stars: 2
        title: New Participant
        description: Building initial trust deposit
      - icon: "fa-solid fa-user-check"
        gradient_class: "from-blue-400 to-blue-600"
        animation_delay: "1s"
        solid_stars: 4
        title: Established Member
        description: Active in multiple ecosystems
      - icon: "fa-solid fa-crown"
        gradient_class: "from-verana to-verana-light"
        animation_delay: "2s"
        solid_stars: 5
        title: Trusted Authority
        description: High trust deposits across ecosystems
    note: |
      This transparent data can be used to compute a **reputation score** or **star rating**, enabling trust-based decisions across the network.
cta:
  title: Build Trust Through Participation
  body: |
    Start building your trust deposit and reputation in the decentralized trust economy.
  primary:
    label: Join an Ecosystem
    url: "#"
    icon: "fa-solid fa-rocket"
  secondary:
    label: Learn About Governance
    url: "/page/build/trust-networks"
related_components:
  title: Related Trust Engine Components
  items:
    - icon: "fa-solid fa-magnifying-glass"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      title: Trust Resolver
      body: |
        The search engine of verifiable trust, indexing services based on cryptographically verified credentials.
      url: "/page/trust-engine/trust-resolver"
      cta_label: Explore
    - icon: "fa-solid fa-shield-halved"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Trust Registries
      body: |
        Ecosystem-governed lists of trusted issuers and their credential schemas.
      url: "/page/trust-engine/trust-registries"
      cta_label: Learn More
    - icon: "fa-solid fa-check-double"
      icon_bg_class: "bg-purple-500/20"
      icon_color_class: "text-purple-400"
      title: Credential Verification
      body: |
        Cryptographic verification engine that validates credentials against trust registries.
      url: "/page/trust-engine/credential-verification"
      cta_label: Verify Now
---

{{< trust-deposit >}}
