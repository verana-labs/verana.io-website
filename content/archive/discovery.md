---
title: Service Discovery
meta_title: "Service Discovery Problem | Why Verana Replaces Ad-Driven Platforms"
meta_description: "Examine the legacy discovery problem and learn how Verana’s verifiable trust layer redistributes visibility based on proof rather than advertising budgets."
---

## Why Discoverability is Broken

Today, consumer discoverability of goods and services is controlled by centralized platforms that rely on advertising, opaque SEO algorithms, and now even sponsored AI results.

- Wealth is concentrated in a handful of dominant companies.
- Innovation suffers, as startups and SMEs cannot compete with massive advertising budgets.
- These intermediaries capture a disproportionate share of value, forcing consumers to pay higher prices for goods and services.

{{< kroki _type="plantuml" >}}
@startuml
left to right direction

rectangle "Organizations (need discoverability)" as ORGS {
  rectangle "High-Budget Organization\n(enterprises, funded scale-ups)" as HighOrg
  rectangle "Low-Budget Organization\n(startups, SMEs)" as LowOrg
}

rectangle "Dominant Advertising Platforms\n(ad networks, search & social)\ncontrol discovery & ranking" as BigTech
rectangle "Consumer" as Consumer

' --- MONEY FLOWS TO AD PLATFORMS ---
HighOrg --> BigTech : $$$ Ad Spend (buy visibility)
LowOrg  ..> BigTech : $ Ad Spend (weak/ineffective)

' --- DISCOVERABILITY (RETURN FLOW) ---
BigTech --> HighOrg : High Visibility (top ranking, traffic)
BigTech ..> LowOrg  : Low / No Visibility (deprioritized)

' --- SALES & PRICE PASS-THROUGH ---
HighOrg --> Consumer : Goods & Services\n(ad costs embedded in price)
LowOrg  ..> Consumer : Goods & Services\n(rarely discovered)

' --- INDIRECT CONSUMER -> PLATFORM FLOW ---
Consumer --> BigTech : Indirect payment via\nhigher prices (ad cost pass-through)

note right of LowOrg
Small budgets ⇒ little/no discoverability.
Competing on ads is unsustainable.
end note

note bottom of BigTech
Wealth concentration at dominant platforms.
end note

note bottom of Consumer
Consumers pay higher prices to cover ad spend.
end note
@enduml
```
{{< /kroki >}}

## Service Discovery: Re-distribution of Wealth

Verana replaces this extractive model with an open, decentralized, and verifiable trust system powered by verifiable credentials:

- **Ecosystems** establish **decentralized trust networks**, each specializing in **certifying specific claims** within defined jurisdictions.
- **Individuals** and **organizations** join the ecosystems they care about, **collecting verifiable credentials** that can be **attached to their digital channels**.
- **Automatic indexing** ensures these credentials are crawled, verified, and included in a **global directory of verifiable data**.
- **Discoverability becomes instant and transparent**: services are surfaced based on **what their credentials prove**, not on who paid for ads.

This marks a shift away from centralized control by a few corporations toward a **federated economy of thousands of ecosystems**, each competing on trust, authenticity, and the quality of their certifications.

{{< kroki _type="plantuml" >}}
@startuml
top to bottom direction

rectangle "Any-Budget Organization" as Org
rectangle "Ecosystem Credential Issuers" as Issuers
rectangle "Verana Trust Resolver / Directory" as Resolver
rectangle "Consumers" as Consumers

' 1) Organization obtains credentials
Org --> Issuers : Request credentialing\n(pay issuer fees)
Issuers --> Org : Issue verifiable credentials (VCs)

' 2) Attach credentials and register
Org --> Resolver : Register service + attach VCs\n(auto crawl + verify)

' 3) Discovery based on proven claims (not ads)
Resolver --> Consumers : Trust-based discovery\n(query by proven claims)
Consumers --> Org : Find & engage if claims match need

' 4) Payment flows
Consumers --> Org : Pay for goods/services

note right of Issuers
Issuer fees fund ecosystems and governance,
not centralized ad monopolies.
end note

note right of Resolver
Search & ranking use verifiable claims,
not ad budgets. Any credentialed service
is discoverable on merit.
end note

@enduml
```
{{< /kroki >}}
