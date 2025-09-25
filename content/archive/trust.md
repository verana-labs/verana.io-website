---
title: Making the Internet trustworthy
---

## The Trust Problem

Today, the internet still lacks a native verifiable trust layer.
Content, services, and users interact without cryptographic guarantees of who they are or what they represent. This fuels misinformation, fraud, opaque intermediaries, and a general erosion of trust online.

{{< kroki _type="plantuml" >}}
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
{{< /kroki >}}

## How Verana Solves This

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

{{< kroki _type="plantuml" >}}
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
{{< /kroki >}}
