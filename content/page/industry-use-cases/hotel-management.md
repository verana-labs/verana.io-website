---
title:  Hotel Discovery
subtitle: "Breaking free from broker monopolies through verifiable hotel credentials and direct discovery."
url: "/page/industry-use-cases/hotel-management"
meta_title: "Hotel Discovery | Verana Credentials for Direct Bookings"
meta_description: "See how hospitality providers use Verana to issue verifiable credentials, bypass broker monopolies, and connect directly with trusted travelers."
hero_icon: "fa-solid fa-hotel"
disable_content_wrapper: true
use_case_partial: "hotel-management"
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
    - label: Credential Presentation
      url: "#new-architecture"
    - label: Benefits
      url: "#benefits-section"
    - label: Journey
      url: "#user-journey"
    - label: Why It Matters
      url: "#why-matters"
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
problem:
  id: problem-section
  title: "The Problem: Hotel Discovery & Broker Domination"
  intro: |
    The hotel industry is a striking example of how centralization locks value. Today, nearly all hotel reservations happen through **brokering platforms** like **Booking.com**, **Expedia**, **Agoda**, or **Airbnb**. These intermediaries capture a huge share of hotel revenues and quietly raise room costs for travelers.
  paradox_card:
    icon: fa-solid fa-exclamation-triangle
    title: The Paradox
    text: |
      While users believe they're saving money, they actually pay more, since hotels must increase their prices to cover broker fees.
  market_card:
    icon: fa-solid fa-eye-slash
    icon_color_class: text-orange-400
    title: Market Reality
    text: |
      **If a hotel isn't listed on broker platforms, it effectively doesn't exist in the market.**
  ecosystem:
    title: Current Centralized Model
    diagram: |
      {{< kroki _type="plantuml" >}}
      @startuml
      ' === Verana dark palette for PlantUML ===
      !define BRAND_PURPLE #763EF0
      !define BRAND_PURPLE_LIGHT #9F7AEA
      !define ACCENT_BLUE #38BDF8
      !define ACCENT_TEAL #2DD4BF
      !define ACCENT_ORANGE #FBBF24
      !define ACCENT_ORANGE_DARK #B45309
      !define ACCENT_PINK #F472B6
      !define BG_SURFACE #0B0F19
      !define BG_PANEL #111826
      !define TEXT_PRIMARY #F3F4F6
      !define TEXT_SECONDARY #94A3B8

      skinparam backgroundColor BG_SURFACE
      skinparam Shadowing false
      skinparam ArrowColor BRAND_PURPLE
      skinparam defaultFontName Inter
      skinparam defaultTextAlignment center

      skinparam RectangleBorderColor TEXT_SECONDARY
      skinparam RectangleFontColor TEXT_PRIMARY
      skinparam RectangleFontSize 13
      skinparam DatabaseBorderColor TEXT_SECONDARY
      skinparam PackageBackgroundColor BG_PANEL
      skinparam PackageBorderColor TEXT_SECONDARY
      skinparam PackageFontColor TEXT_PRIMARY
      skinparam NoteBackgroundColor BG_PANEL
      skinparam NoteBorderColor BRAND_PURPLE_LIGHT
      skinparam NoteFontColor TEXT_SECONDARY

      skinparam rectangle {
        BackgroundColor<<user>> #132845
        BorderColor<<user>> ACCENT_BLUE
        FontColor<<user>> TEXT_PRIMARY
        BackgroundColor<<hotel>> #11342B
        BorderColor<<hotel>> ACCENT_TEAL
        FontColor<<hotel>> TEXT_PRIMARY
        BackgroundColor<<broker>> #3B2410
        BorderColor<<broker>> ACCENT_ORANGE
        FontColor<<broker>> TEXT_PRIMARY
        BackgroundColor<<broker-group>> #20140C
        BorderColor<<broker-group>> ACCENT_ORANGE_DARK
        FontColor<<broker-group>> TEXT_PRIMARY
        BackgroundColor<<vpr>> #261134
        BorderColor<<vpr>> ACCENT_PINK
        FontColor<<vpr>> TEXT_PRIMARY
        BackgroundColor<<idx>> #131D36
        BorderColor<<idx>> ACCENT_BLUE
        FontColor<<idx>> TEXT_PRIMARY
        BackgroundColor<<box>> BG_PANEL
        BorderColor<<box>> BRAND_PURPLE_LIGHT
        FontColor<<box>> TEXT_PRIMARY
      }
      rectangle "Traveler" <<user>> as U
      package "Centralized Brokers" <<broker-group>> {
        rectangle "Booking.com" <<broker>> as B1
        rectangle "Expedia" <<broker>> as B2
        rectangle "Agoda" <<broker>> as B3
        rectangle "Airbnb" <<broker>> as B4
      }
      rectangle "Hotel / Property" <<hotel>> as H

      U -down-> B1 : Searches / Books
      U -down-> B2
      U -down-> B3
      U -down-> B4

      B1 -down-> H : High Commissions 💸
      B2 -down-> H
      B3 -down-> H
      B4 -down-> H

      note bottom of "Centralized Brokers"
      Broker visibility lock-in + data capture
      end note
      @enduml
      {{< /kroki >}}
    cards:
      - title: Travelers
        text: "Search and book through centralized platforms"
        icon: fa-solid fa-user
        icon_color_class: text-blue-400
        icon_bg_class: bg-blue-500/20
        wrapper_class: "bg-blue-900/20 border border-blue-700/50 rounded-xl p-6 text-center"
      - title: Brokers
        text: "Control visibility and extract high commissions"
        icon: fa-solid fa-building
        icon_color_class: text-orange-400
        icon_bg_class: bg-orange-500/20
        wrapper_class: "bg-orange-900/20 border border-orange-700/50 rounded-xl p-6 text-center"
      - title: Hotels
        text: "Pay high commissions for visibility"
        icon: fa-solid fa-hotel
        icon_color_class: text-green-400
        icon_bg_class: bg-green-500/20
        wrapper_class: "bg-green-900/20 border border-green-700/50 rounded-xl p-6 text-center"
hms_today:
  id: hms-today
  title: Hotel Management Systems Today
  intro: |
    To manage their properties, hotels rely on **Hotel Management Systems (HMS)**—either proprietary SaaS or open source solutions. Open source HMS let properties keep control, but discovery is still broker-controlled.
  appeal:
    title: Why Open Source HMS Appeals to Hotels
    left_features:
      - icon: fa-solid fa-unlock
        icon_bg_class: bg-green-500/20
        icon_color_class: text-green-400
        title: No Vendor Lock-in
        text: Host software anywhere and maintain full control.
      - icon: fa-solid fa-database
        icon_bg_class: bg-blue-500/20
        icon_color_class: text-blue-400
        title: Data Ownership
        text: Hotels retain complete ownership of their data.
    modules:
      title: Key Open Source Modules
      items:
        - Property Management System (PMS)
        - Booking Engine
        - Hotel Website Builder
        - Hotel Mobile App Skeleton
  business_models:
    items:
      - icon: fa-solid fa-puzzle-piece
        icon_bg_class: bg-purple-500/20
        icon_color_class: text-purple-400
        title: Software Add-ons
        text: Channel managers that sync inventory with broker platforms.
      - icon: fa-solid fa-code
        icon_bg_class: bg-blue-500/20
        icon_color_class: text-blue-400
        title: Custom Development
        text: Tailored features for specific hotel groups or specialist operators.
      - icon: fa-solid fa-server
        icon_bg_class: bg-green-500/20
        icon_color_class: text-green-400
        title: Managed Hosting
        text: Running the HMS stack for properties that don’t want to self-host.
  visibility_warning:
    icon: fa-solid fa-triangle-exclamation
    icon_color_class: text-yellow-400
    title: The Visibility Problem Remains
    text: |
      These systems work well for hotel operations, but **visibility is still dictated by brokers**. Even when hotels run their own sites or apps, most new guests still arrive via the broker monopoly.
verana_path:
  id: solution-section
  title: "Enter Verana: Making Hotels Instantly Discoverable"
  highlight: |
    Verana changes the game by **removing dependency on centralized brokers**.
  steps:
    - number: "1"
      badge_bg_class: bg-blue-500/20
      badge_text_class: "text-blue-400 font-bold text-xl"
      title: Create a Hotel Ecosystem in Verana
      bullets:
        - text: Establish rules via an **Ecosystem Governance Framework (EGF)**.
        - text: Create a Trust Registry and define a **Hotel Credential Schema** in Verana.
    - number: "2"
      badge_bg_class: bg-green-500/20
      badge_text_class: "text-green-400 font-bold text-xl"
      title: Add Verifiable Trust to Open Source HMS Software
      description: Integrate **Verana's Verifiable Trust stack** into booking engines, PMS, and mobile apps.
    - number: "3"
      badge_bg_class: bg-purple-500/20
      badge_text_class: "text-purple-400 font-bold text-xl"
      title: Launch a Verifiable User Agent
      bullets:
        - text: Build a **global mobile app or website** (the "HMS Provider App").
        - text: Function as a **browser for verifiable hotels**.
        - text: Act as a **broker competitor**—without extracting rents.
ecosystem:
  id: new-architecture
  title: Hotels Attach Their Credentials
  image:
    src: "/images/purple/hotel3.webp"
    alt: "Architecture diagram connecting trust layer, HMS providers, hotels, and travelers"
  cards:
    - title: Trust Layer
      text: VPR, DID Directory, Search API
      icon: fa-solid fa-shield-halved
      icon_color_class: text-verana
      icon_bg_class: bg-verana/20
      wrapper_class: "bg-verana/10 border border-verana/30 rounded-xl p-4 text-center"
    - title: HMS Providers
      text: Governance & User Agents
      icon: fa-solid fa-building
      icon_color_class: text-blue-400
      icon_bg_class: bg-blue-500/20
      wrapper_class: "bg-blue-900/20 border border-blue-700/50 rounded-xl p-4 text-center"
    - title: Hotels
      text: Verifiable Services
      icon: fa-solid fa-hotel
      icon_color_class: text-green-400
      icon_bg_class: bg-green-500/20
      wrapper_class: "bg-green-900/20 border border-green-700/50 rounded-xl p-4 text-center"
    - title: Travelers
      text: Direct Search & Booking
      icon: fa-solid fa-user
      icon_color_class: text-orange-400
      icon_bg_class: bg-orange-500/20
      wrapper_class: "bg-orange-900/20 border border-orange-700/50 rounded-xl p-4 text-center"
benefits:
  id: benefits-section
  title: What Everyone Gains
  hotels_card:
    icon: fa-solid fa-hotel
    icon_color_class: text-green-400
    icon_bg_class: bg-green-500/20
    title: What Hotels Gain
    items:
      - icon: fa-solid fa-magnifying-glass
        icon_color_class: text-green-400
        icon_bg_class: bg-green-500/20
        title: Searchable
        text: In the HMS Provider's global app.
      - icon: fa-solid fa-calendar-check
        icon_color_class: text-green-400
        icon_bg_class: bg-green-500/20
        title: Bookable Directly
        text: Bypassing brokers completely.
      - icon: fa-solid fa-key
        icon_color_class: text-green-400
        icon_bg_class: bg-green-500/20
        title: Empowered
        text: Interact with guests through verifiable credentials.
  guests_card:
    icon: fa-solid fa-user
    icon_color_class: text-blue-400
    icon_bg_class: bg-blue-500/20
    title: What Guests Gain
    items:
      - icon: fa-solid fa-shield-check
        icon_color_class: text-blue-400
        icon_bg_class: bg-blue-500/20
        title: Trustworthy Search
        text: Verifiable discovery experience.
      - icon: fa-solid fa-handshake
        icon_color_class: text-blue-400
        icon_bg_class: bg-blue-500/20
        title: Direct Booking
        text: Book directly with hotels via the HMS Provider app.
      - icon: fa-solid fa-user-shield
        icon_color_class: text-blue-400
        icon_bg_class: bg-blue-500/20
        title: Privacy-Preserving
        text: Identity verified but never exploited.
journey:
  id: user-journey
  title: The Verifiable Hotel Discovery Journey
  image:
    src: "/images/purple/hotel4.webp"
    alt: "Step-by-step journey showing traveler using an HMS provider app to discover verified hotels"
  steps:
    - number: "1"
      badge_bg_class: bg-blue-500/20
      badge_text_class: "text-blue-400 font-bold"
      title: Discover & Trust
      text: Search hotels with trust filters.
    - number: "2"
      badge_bg_class: bg-green-500/20
      badge_text_class: "text-green-400 font-bold"
      title: Verify Results
      text: View verified credentials and governance.
    - number: "3"
      badge_bg_class: bg-purple-500/20
      badge_text_class: "text-purple-400 font-bold"
      title: Verify & Book
      text: Check credentials and create reservation.
    - number: "4"
      badge_bg_class: bg-orange-500/20
      badge_text_class: "text-orange-400 font-bold"
      title: Direct Booking
      text: Confirmation without intermediaries.
why_matters:
  id: why-matters
  title: Why This Matters
  cards:
    - icon: fa-solid fa-building
      icon_bg_class: bg-green-500/20
      icon_color_class: text-green-400
      title: For Hotels
      text: Regain independence, protect margins, and own the guest relationship.
    - icon: fa-solid fa-user-check
      icon_bg_class: bg-blue-500/20
      icon_color_class: text-blue-400
      title: For Travelers
      text: Lower prices, verified reviews, and transparent offers.
    - icon: fa-solid fa-gears
      icon_bg_class: bg-purple-500/20
      icon_color_class: text-purple-400
      title: For HMS Providers
      text: Compete with global brokers by offering open, decentralized visibility.
    - icon: fa-solid fa-globe
      icon_bg_class: bg-verana/20
      icon_color_class: text-verana
      title: For the Internet
      text: A public-good trust layer that returns value to participants.
conclusion:
  id: conclusion
  title: Conclusion
  intro: |
    The hotel industry doesn't need to be trapped by centralized brokers. By using **Verana's decentralized trust infrastructure**, Hotel Management Systems can transform discovery and bookings.
  transitions:
    - icon: fa-solid fa-eye
      icon_bg_class: bg-blue-500/20
      icon_color_class: text-blue-400
      title: Instant Visibility
      text: Make hotels visible without intermediaries.
    - icon: fa-solid fa-handshake
      icon_bg_class: bg-green-500/20
      icon_color_class: text-green-400
      title: Trustworthy Interactions
      text: Enable credential-based interactions between hotels and guests.
    - icon: fa-solid fa-balance-scale
      icon_bg_class: bg-verana/20
      icon_color_class: text-verana
      title: Fair Economic Model
      text: A privacy-preserving approach where value stays with participants.
  revolution:
    title: The Hotel Revolution
    text: |
      With Verana, hotels can finally say: **"We own our reservations, our reputation, and our data."**
cta:
  title: Ready to Liberate Your Hotel Business?
  body: |
    Join the revolution in decentralized hotel discovery and take back control from centralized brokers.
  primary:
    label: Start Building
    url: "/page/build"
    icon: fa-solid fa-hotel
  secondary:
    label: View Implementation Guide
    url: "https://docs.verana.io"
related_use_cases:
  title: Related Industry Use Cases
  items:
    - icon: fa-solid fa-id-card
      icon_bg_class: bg-blue-500/20
      icon_color_class: text-blue-400
      title: Government Digital ID
      text: Issue privacy-preserving national IDs and let citizens prove attributes anywhere.
      url: "/page/industry-use-cases/government-id"
      cta_label: Learn More
    - icon: fa-solid fa-robot
      icon_bg_class: bg-purple-500/20
      icon_color_class: text-purple-400
      title: AI Agents
      text: Verify the ownership and policies of autonomous agents before they act.
      url: "/page/industry-use-cases/ai-agents"
      cta_label: Explore
    - icon: fa-solid fa-share-nodes
      icon_bg_class: bg-green-500/20
      icon_color_class: text-green-400
      title: Decentralized Social Networks
      text: Help creators own their channels and audiences with verifiable credentials.
      url: "/page/industry-use-cases/decentralized-social-network"
      cta_label: Discover
---

{{< industry-use-case >}}
