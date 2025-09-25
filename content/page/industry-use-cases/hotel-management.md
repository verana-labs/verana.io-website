---
title: Decentralizing Hotel Management
subtitle: "Breaking free from broker monopolies through verifiable hotel credentials and direct discovery."
url: "/page/industry-use-cases/hotel-management"
hero_icon: "fa-solid fa-hotel"
disable_content_wrapper: true
sidebar:
  title: Industry Use Cases
  nav:
    - label: The Problem
      url: "#problem-section"
      active: true
    - label: HMS Landscape
      url: "#hms-today"
    - label: Adoption Steps
      url: "#solution-section"
    - label: Roles & Credentials
      url: "#credential-roles"
    - label: Journey
      url: "#user-journey"
    - label: Economics
      url: "#business-models"
    - label: Why It Matters
      url: "#why-matters"
    - label: Conclusion
      url: "#conclusion"
    - label: Call to Action
      url: "#page-cta"
  quick_links:
    title: Quick Links
    items:
      - label: Implementation Guide
        url: "#solution-section"
      - label: Credential Schemas
        url: "#credential-roles"
      - label: Case Studies
        url: "#business-models"
problem_section:
  id: problem-section
  icon: "fa-solid fa-exclamation-triangle"
  icon_color_class: "text-orange-400"
  title: "The Problem: Hotel Discovery & Broker Domination"
  intro: |
    The hotel industry is a striking example of how centralization locks value. Nearly every reservation flows through a broker such as Booking.com, Expedia, Agoda, or Airbnb—platforms that **capture a huge share of hotel revenues** and quietly **raise room costs for travellers**.
  image:
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/235432f8c8-c95def7f9acded1a1a65.png"
    alt: "Illustration showing a traveller surrounded by dominant broker logos siphoning value from hotels"
    wrapper_class: "bg-gray-900 border border-gray-700 rounded-2xl p-8 mb-8"
    caption:
      wrapper_class: "bg-red-900/20 border border-red-700/30 rounded-xl p-6"
      title: The Paradox
      text: "Travellers think they’re saving money, yet hotels must raise prices to cover broker fees."
  challenges:
    title: Market Reality
    wrapper_class: "bg-orange-900/20 border border-orange-700/50 rounded-2xl p-10"
    columns:
      - items:
          - text: "Brokers mediate discovery—if you’re absent from their listings, you effectively don’t exist."
          - text: "Hotels surrender pricing power and constant access to guest data."
      - items:
          - text: "Commission rates erode margins and fund ever-stronger monopolies."
          - text: "Guests pay more, yet still rely on opaque reviews and unverifiable claims."
  result:
    title: "What this creates"
    text: |
      - Hotels pay to be visible while losing control of bookings, data, and customer relationships.
      - Travellers fund the monopoly but receive little verifiable assurance about what they book.
solution_intro:
  id: hms-today
  icon: "fa-solid fa-server"
  icon_color_class: "text-verana"
  title: "Hotel Management Systems Today"
  highlight:
    icon: "fa-solid fa-layer-group"
    icon_bg_class: "bg-orange-500/20"
    icon_color_class: "text-orange-400"
    text: "Open-source Hotel Management Systems (HMS) let properties run their own stack—no vendor lock-in, clean data ownership, and modular tooling covering PMS, booking engines, websites, and apps."
architecture:
  id: solution-section
  icon: "fa-solid fa-route"
  icon_color_class: "text-green-400"
  title: "How Open HMS Providers Can Use Verana"
  components:
    - icon: "fa-solid fa-globe"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      title: "1. Understand Today’s Landscape"
      description: "Open-source HMS platforms already offer the modules hotels need—but visibility still depends on centralized brokers."
      features:
        - icon: "fa-solid fa-unlock"
          icon_color_class: "text-green-400"
          title: No Vendor Lock-in
          text: "Hotels host software anywhere and stay in full control."
        - icon: "fa-solid fa-database"
          icon_color_class: "text-blue-400"
          title: Direct Data Access
          text: "Properties manage pricing, inventory, and guest data without intermediaries."
        - icon: "fa-solid fa-puzzle-piece"
          icon_color_class: "text-purple-400"
          title: Key Modules
          text: "PMS, booking engine, website builder, and mobile app skeletons ready to extend."
    - icon: "fa-solid fa-chart-line"
      icon_bg_class: "bg-purple-500/20"
      icon_color_class: "text-purple-400"
      title: "2. Current Business Models"
      description: "Open-source vendors monetise today via add-ons, custom development, and hosting—but these do not solve the discovery lock-in."
      features:
        - icon: "fa-solid fa-plug"
          icon_color_class: "text-purple-400"
          title: Software Add-ons
          text: "Channel managers that sync inventory back into broker platforms."
        - icon: "fa-solid fa-code"
          icon_color_class: "text-blue-400"
          title: Custom Development
          text: "Tailored features for hotel groups or specialist operators."
        - icon: "fa-solid fa-server"
          icon_color_class: "text-green-400"
          title: Managed Hosting
          text: "Running the HMS stack for properties that don’t want to self-host."
    - icon: "fa-solid fa-seedling"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: "3. Add Verifiable Trust"
      description: "Blend the HMS stack with Verana so hotels become verifiable services discoverable without brokers."
      features:
        - text: "Create a **Hotel Ecosystem** with an Ecosystem Governance Framework (EGF) and hotel credential schema."
        - text: "Integrate Verana’s trust stack into booking engines, PMS, and mobile apps."
        - text: "Launch a Verifiable User Agent—an HMS Provider app that acts like a broker, minus the rent extraction."
  network_example:
    title: "The Verana Hotel Ecosystem"
    image:
      src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/07d52c5da7-feb2b17b5efe6ae6fc2c.png"
      alt: "Architecture diagram linking trust layer, HMS providers, hotels, and travellers via Verana"
    note:
      text: "**Trust layer + HMS providers + verifiable hotels + travellers** combine into an open marketplace where bookings flow directly, backed by credentials."
identity_trust:
  id: credential-roles
  icon: "fa-solid fa-id-card"
  icon_color_class: "text-verana"
  title: "Roles & Trust Relationships"
  intro: "Verana turns the hotel supply chain into verifiable participants, each publishing or consuming credentials."
  steps:
    - badge_icon: "fa-solid fa-shield-halved"
      badge_bg_class: "bg-verana/20"
      badge_icon_class: "text-verana"
      title: Trust Layer
      text: "The Verana Trust Registry, DID Directory, and Search API publish discovery rules."
    - badge_icon: "fa-solid fa-building"
      badge_bg_class: "bg-blue-500/20"
      badge_icon_class: "text-blue-400"
      title: HMS Providers
      text: "Operate governance, issue credentials, and deliver the HMS Provider app."
    - badge_icon: "fa-solid fa-hotel"
      badge_bg_class: "bg-green-500/20"
      badge_icon_class: "text-green-400"
      title: Hotels as Verifiable Services
      text: "Register DIDs, attach hotel credentials, expose availability, pricing, and service proofs."
    - badge_icon: "fa-solid fa-user"
      badge_bg_class: "bg-orange-500/20"
      badge_icon_class: "text-orange-400"
      title: Travellers
      text: "Search, verify, and book directly through the HMS Provider experience."
  trust_guarantee:
    icon: "fa-solid fa-link"
    icon_color_class: "text-verana"
    title: Direct Verifiable Relationships
    text: "Discovery and booking happen between parties that can prove who they are—no opaque middlemen."
moderation:
  id: user-journey
  icon: "fa-solid fa-compass"
  icon_color_class: "text-green-400"
  title: "The Verifiable Hotel Discovery Journey"
  cards:
    - icon: "fa-solid fa-search"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      title: Discover & Trust
      text: "Guests apply trust filters to find hotels with verified credentials."
    - icon: "fa-solid fa-shield-check"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Verify Results
      text: "Review ecosystem governance, hotel proofs, and credential issuers."
    - icon: "fa-solid fa-ticket"
      icon_bg_class: "bg-purple-500/20"
      icon_color_class: "text-purple-400"
      title: Book & Confirm
      text: "Create a reservation with cryptographic confirmation."
    - icon: "fa-solid fa-check"
      icon_bg_class: "bg-orange-500/20"
      icon_color_class: "text-orange-400"
      title: Direct Stay Experience
      text: "Hotel fulfils the booking—no hidden commissions or bait-and-switch."
  warning:
    wrapper_class: "bg-gradient-to-br from-green-900/20 to-blue-900/20 border border-green-700/40 rounded-2xl p-8 text-center"
    icon: "fa-solid fa-bolt"
    icon_bg_class: "bg-green-500/20"
    icon_color_class: "text-green-400"
    title: Instant Readiness
    text: "No duplicated onboarding, no opaque fees—just verifiable confirmation."
  image:
    src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/fd34117340-f46b634bf225e478d7f6.png"
    alt: "Workflow diagram of a traveller using the HMS Provider app to discover and book verified hotels"
    wrapper_class: "bg-gray-900 border border-gray-700 rounded-2xl p-8 mt-8"
economics:
  id: business-models
  icon: "fa-solid fa-coins"
  icon_color_class: "text-verana"
  title: "Business Models and Benefits"
  intro_card:
    heading: "How Open HMS Providers Monetise Today"
    description: "Existing revenue streams remain valuable—but verifiable trust unlocks direct booking upside."
    feature_lists:
      - items:
          - title: Software Add-ons
            text: "Channel managers, CRS integrations, and automation plug-ins."
          - title: Custom Development
            text: "Tailored workflows for specific hotel groups or niches."
          - title: Managed Hosting
            text: "Operate the full open-source stack as a service."
  benefits:
    - icon: "fa-solid fa-hotel"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Hotels Gain
      text: |
        - Searchable inside the HMS Provider’s global app
        - Accept bookings without broker commissions
        - Build direct loyalty with credential-based interactions
    - icon: "fa-solid fa-user"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      title: Travellers Gain
      text: |
        - Verifiable listings and transparent pricing
        - Direct communication with properties
        - Privacy-preserving identity proofs when required
    - icon: "fa-solid fa-code"
      icon_bg_class: "bg-purple-500/20"
      icon_color_class: "text-purple-400"
      title: HMS Providers Gain
      text: |
        - Compete with global brokers using open standards
        - Offer a new trust-driven marketplace
        - Capture value by enabling, not taxing, transactions
    - icon: "fa-solid fa-scale-balanced"
      icon_bg_class: "bg-verana/20"
      icon_color_class: "text-verana"
      title: Regulators Gain
      text: |
        - Real-time oversight using verifiable compliance data
        - Unified audit trails without centralisation
why_better:
  id: why-matters
  icon: "fa-solid fa-bullseye"
  icon_color_class: "text-orange-400"
  title: "Why This Matters"
  items:
    - icon: "fa-solid fa-building"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: For Hotels
      text: "Regain independence, protect margins, and own the guest relationship."
    - icon: "fa-solid fa-user-check"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      title: For Travellers
      text: "Lower prices, verifiable reviews, and transparent offers."
    - icon: "fa-solid fa-gears"
      icon_bg_class: "bg-purple-500/20"
      icon_color_class: "text-purple-400"
      title: For HMS Providers
      text: "Offer a decentralised alternative to broker monopolies."
    - icon: "fa-solid fa-globe"
      icon_bg_class: "bg-verana/20"
      icon_color_class: "text-verana"
      title: For the Internet
      text: "Build a public-good trust layer that returns value to participants."
conclusion:
  id: conclusion
  icon: "fa-solid fa-star"
  icon_color_class: "text-verana"
  title: "A Verifiable Marketplace for Hospitality"
  intro: "Using Verana’s decentralised trust infrastructure, open-source HMS providers can finally bypass the broker tax."
  vision:
    title: The Hotel Revolution
    text: "Hotels can say: **We own our reservations, our reputation, and our data.**"
  transitions:
    - icon: "fa-solid fa-eye"
      icon_bg_class: "bg-blue-500/20"
      icon_color_class: "text-blue-400"
      title: Instant Visibility
      text: "Make properties discoverable without gatekeepers."
    - icon: "fa-solid fa-handshake"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Trustworthy Interactions
      text: "Hotels and guests transact using verifiable credentials."
    - icon: "fa-solid fa-scale-balanced"
      icon_bg_class: "bg-verana/20"
      icon_color_class: "text-verana"
      title: Fair Economics
      text: "A privacy-preserving model where value stays with the participants."
  closing:
    message:
      icon: "fa-solid fa-rocket"
      icon_color_class: "text-verana"
      text: "With Verana, hotel discovery becomes a decentralised public utility—not a revenue siphon."
cta:
  title: "Ready to Liberate Your Hotel Business?"
  body: "Join the revolution in decentralised hotel discovery and take back control from broker monopolies."
  primary:
    label: Start Building
    url: "#"
    icon: "fa-solid fa-hotel"
  secondary:
    label: View Implementation Guide
    url: "#"
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
    - icon: "fa-solid fa-user-md"
      icon_bg_class: "bg-green-500/20"
      icon_color_class: "text-green-400"
      title: Healthcare Workforce Mobility
      text: "Let clinicians carry verifiable credentials for instant onboarding and compliance."
      url: "/page/industry-use-cases/healthcare-workforce-mobility"
      cta_label: Explore
    - icon: "fa-solid fa-stamp"
      icon_bg_class: "bg-purple-500/20"
      icon_color_class: "text-purple-400"
      title: Notaries & Power of Attorney
      text: "Turn paper-based powers into verifiable credentials with instant revocation."
      url: "/page/industry-use-cases/notaries"
      cta_label: Discover
---

{{< industry-use-case >}}
