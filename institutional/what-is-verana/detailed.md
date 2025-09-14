# Verana

**Verana**: a Verifiable Trust layer for the Internet

> Verana solves three systemic problems holding back the Internet today: trust, ownership, and discovery. These are the pillars of our value proposition. The exact pitch may evolve, but this is the framework guiding how we think about the market opportunity.

## 1. Making the Internet trustworthy

### 1.1 Problem

Today, the internet still lacks a native verifiable trust layer.
Content, services, and users interact without cryptographic guarantees of who they are or what they represent. This fuels misinformation, fraud, opaque intermediaries, and a general erosion of trust online.

```plantuml
@startuml
top to bottom direction

rectangle "Content & Services\n(websites, apps, media, agents)" as Services
rectangle "Intermediary Platforms\n(search, social, marketplaces, sponsored AI)" as Platforms
rectangle "Users" as Users

Services --> Platforms : Publish / distribute\n(visibility controlled by platforms)
Platforms --> Users : Results & feeds\n(opaque ranking, sponsored results)
Users --> Platforms : Data & interactions\ncaptured / monetized

rectangle "Risks" as Risks
Risks --> Users : Fake identities, fraud,\nphishing, misinformation
Risks --> Services : Brand impersonation,\ncredential stuffing

note right of Platforms
No cryptographic proof of who runs a service,
owns content, or controls an account.
end note

note bottom of Users
Users cannot reliably verify identity
or authenticity of what they see
and who they engage.
end note
@enduml
```

### 1.2 Solution

Verana introduces a public, permissionless trust infrastructure that generalizes the use of verifiable credentials. Any ecosystem - governments, industries, communities... - can use Verana to build sovereign trust networks. Within these networks, participants can issue, verify, and obtain credentials that certify claims of identity, authenticity, or authorization.

Credential holders can attach these proofs to their digital assets, services, and channels, demonstrating ownership, provenance, or qualifications.

This creates a Verifiable Identity Layer for the Internet, turning the web into an environment where trust is transparent, interoperable, and verifiable.

Examples of what becomes verifiable with Verana:

- **Digital Services**: A service can prove who is its owner.
- **Individual Claims**: As an Individual, I can prove anything online (identity, membership, diploma,...).
- **User Agents**: When I connect to a digital service with my user agent, services can verify what is the software I am using.
- **Content Provenance**: Anyone can verify a signed content and gather who is its publisher.
- **Smart Contracts**: As an Organization I can prove I control a Smart contract.
- **RWA Token Ownership**: As an individual, I can prove y own a RWA token.

```plantuml
@startuml
top to bottom direction

rectangle "Credential Issuer" as Issuer
rectangle "Service Owner" as Owner
rectangle "Verifiable Service" as Service
rectangle "User" as User

' 1) Owner gets a credential
Owner --> Issuer : Request verification
Issuer --> Owner : Issue Verifiable Credential (VC)

' 2) Owner attaches proof to the service
Owner --> Service : Attach VC to service

' 3) User identifies & verifies owner (locally)
User --> Service : Access service
Service --> User : Present attached VC
User --> Service : Trust established

note right of User
Verification is done locally:
- Check issuer signature
- Validate VC integrity/expiry
- Use cached keys/registries
No contact with the issuer.
end note
@enduml
```


## 2. Service Ownership: Migrating from Vendor Lock-in to Self Sovereign Services

### 2.1 Problem

Today’s digital services are built on centralized platforms that act as gatekeepers. Whether it’s a social network, an app store, or a SaaS provider, organizations and individuals rarely own their services or their audiences:

- Content and connections are rented, not owned.
- Platforms enforce opaque rules and can de-platform users arbitrarily.
- Migrating services between providers is costly and disruptive.
- User data is captured, mined, and monetized by intermediaries.

The result: vendor lock-in, loss of sovereignty, and a fragile dependency on centralized operators.

```plantuml
@startuml
top to bottom direction
title Problem: Vendor Lock-in

rectangle "Organization / Individual" as Org
rectangle "Centralized Platform" as Platform
rectangle "End Users / Audience" as Users

Org --> Platform : Publish service/content\n(dependent on platform rules)
Platform --> Users : Provide access\n(controlled by platform)
Users --> Platform : Data, interactions\ncaptured & monetized

note right of Platform
- Opaque rules
- Arbitrary de-platforming
- Vendor lock-in
- Data exploitation
end note

@enduml
```

### 2.2 Solution

Verana enables organizations and individuals to deploy Self-Sovereign Services—digital services they fully own and control. Built on verifiable credentials and decentralized trust registries, these services are portable, provable, and free from platform lock-in.

Key properties:

- True Ownership: services run under your decentralized identifier (DID), not under a platform account.
- Data Sovereignty: you retain full control over your data, audience, and connections.
- Portability: migrate freely between cloud, self-hosted, or hybrid environments without losing trust or discoverability.
- Verifiable Authenticity: cryptographically prove the legitimacy of your service to users and partners.
- Trust-Based Discovery: services are discoverable via Verana’s resolver, ranked by credentials—not ad budgets or opaque algorithms.

Examples of Self-Sovereign Services:

- Decentralized social channels owned entirely by creators.
- Agentic AI and IoT services operating under verifiable credentials.
- Content delivery channels (e.g., media catalogs) with guaranteed provenance.
- Customer support or business chatbots that are verifiable and portable.

This migration replaces dependency on centralized vendors with autonomous, verifiable ownership, turning digital services into assets you control, not permissions you rent.

```plantuml
@startuml
top to bottom direction
title Solution: Self-Sovereign Services (Verana)

rectangle "Organization / Individual" as Org
rectangle "Self-Sovereign Service\n(owned under DID)" as Service
rectangle "Verana Trust Resolver" as Resolver
rectangle "End Users / Audience" as Users

Org --> Service : Deploy & control\n(service runs under DID)
Service --> Resolver : Attach verifiable credentials\n(auto-indexed)
Users --> Resolver : Discover service\n(based on proven claims)
Users --> Service : Direct interaction\n(no intermediaries)

note right of Service
- True ownership
- Portability
- Data sovereignty
- Verifiable authenticity
end note

note right of Resolver
Discovery based on credentials, not ads or opaque algorithms.
end note

@enduml
```

## 3. Service Discovery: Re-distribution of Wealth

### 3.1 Problem

Today, consumer discoverability of goods and services is controlled by centralized platforms that rely on advertising, opaque SEO algorithms, and now even sponsored AI results.

- Wealth is concentrated in a handful of dominant companies.
- Innovation suffers, as startups and SMEs cannot compete with massive advertising budgets.
- These intermediaries capture a disproportionate share of value, forcing consumers to pay higher prices for goods and services.

```plantuml
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

note right of BigTech
Wealth concentration at dominant platforms.
end note

note bottom of Consumer
Consumers pay higher prices to cover ad spend.
end note
@enduml
```

### 3.2 Solution

Verana replaces this extractive model with an open, decentralized, and verifiable trust system powered by verifiable credentials:

- Ecosystems establish decentralized trust networks, each specializing in certifying specific claims within defined jurisdictions.
- Individuals and organizations join the ecosystems they care about, collecting verifiable credentials that can be attached to their digital channels.
- Automatic indexing ensures these credentials are crawled, verified, and included in a global directory of verifiable data.
- Discoverability becomes instant and transparent: services are surfaced based on what their credentials prove, not on who paid for ads.

This marks a shift away from centralized control by a few corporations toward a federated economy of thousands of ecosystems, each competing on trust, authenticity, and the quality of their certifications.

```plantuml
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
