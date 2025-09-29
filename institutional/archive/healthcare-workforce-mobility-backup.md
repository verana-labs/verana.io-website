---
title: Healthcare Workforce Mobility
meta_title: "Healthcare Workforce Mobility | Verana Backup Use Case"
meta_description: "Archived scenario showing how Verana streamlines clinician credentialing, compliance, and mobility through verifiable trust ecosystems."
---

## The Problem: Fragmented Verification

Healthcare workers are the backbone of public health systems. Yet, their mobility across hospitals, clinics, and cities is severely constrained by **duplicated, manual, and siloed verification processes**.

- A surgeon may be fully vetted in one city but forced to undergo the same checks again when working in another.
- Onboarding involves verifying **identity, professional licenses, grants to work, DBS checks, training records, and certifications**.
- Each verification is costly, time-consuming, and delays the ability of healthcare staff to start work.
- Hospitals, already under resource pressure, repeat checks that other trusted institutions have recently performed.

This inefficiency translates into **wasted time, wasted resources, and slower access to healthcare services** for patients.

## Solution: the Healthcare Workforce Ecosystem

The government (or national healthcare authority) establishes a **Healthcare Workforce Ecosystem**, a digital trust framework for managing verification and compliance across all participants.

### Establish the Ecosystem and Governance Framework

- The **Healthcare Workforce Ecosystem** defines and publishes an **Ecosystem Governance Framework (EGF)**.
- The EGF sets the policies and rules for **credential issuance, verification, revocation, and compliance**, ensuring consistent standards nationwide.

### Create an Ecosystem Trust Registry

The ecosystem deploys a **Trust Registry** on Verana to implement the EGF rules.

- Defines **credential schemas** for essential categories:
  - Identity
  - Grant to Work (license to practice)
  - DBS / Background Checks
  - Training & Continuous Education
  - Specialty Certifications

- Manages the list of **authorized issuers and verifiers** and enforces compliance with the governance framework.

### Approve Issuers and Verifiers

- **Issuers**: Universities, professional councils, certification authorities, and government agencies can apply to issue credentials. Once validated, they become **authorized issuers**.
- **Verifiers**: Hospitals, clinics, research centers, and government bodies can apply for verifier status, allowing them to request and validate credential presentations.

This ensures that **only accredited entities** can issue or verify credentials within the ecosystem.

{{< img url="/images/doctor.png" floating="none" border="1px solid #888888" align="center" >}}

### Healthcare Worker Credential Issuance

- Healthcare workers receive **verifiable credentials** from trusted issuers (universities, licensing boards, training organizations).
- Credentials are stored in a **Digital Wallet** (a Verifiable User Agent) controlled solely by the worker.
- Workers can share only the **necessary claims** (e.g., proof of valid license, specialty, training) using **selective disclosure**, preserving privacy while proving eligibility.

### Workforce Mobility in Practice

When a healthcare professional arrives at a new hospital:

1. The hospital requests a credential presentation from the worker.
2. The worker presents their **verifiable credentials** directly from their wallet.
3. The hospital verifies authenticity instantly against the Trust Registry.
4. No repeated onboarding, no paper-based checks, no delays — the worker can start immediately.


{{< kroki _type="plantuml" >}}
@startuml
' === Verana Palette ===
!define BRAND_MAGENTA #9D2A6D
!define BRAND_MAGENTA_LIGHT #CB73A3
!define ACCENT_BLUE #2A6D9D
!define ACCENT_TEAL #2A9D6D
!define ACCENT_ORANGE #FFB84D
!define SURFACE #F9F9FC
!define INK #1A1A1A

skinparam backgroundColor white
skinparam Shadowing false
skinparam ArrowColor BRAND_MAGENTA
skinparam defaultFontName Inter
skinparam defaultTextAlignment center

skinparam rectangle {
BackgroundColor<<holder>> #EEF6FF
BorderColor<<holder>> ACCENT_BLUE
BackgroundColor<<issuer>> #E7F7F0
BorderColor<<issuer>> ACCENT_TEAL
BackgroundColor<<verifier>> #FFF3E0
BorderColor<<verifier>> ACCENT_ORANGE
BackgroundColor<<governance>> #E9C1D8
BorderColor<<governance>> BRAND_MAGENTA
}

' === Actors ===
actor "Healthcare Worker\n(HOLDER)" as Holder <<holder>>

rectangle "Universities\n& Certifying Bodies" <<issuer>> as Univ
rectangle "Hospitals & Clinics" <<verifier>> as Hosp
rectangle "Government / Regulator\nEcosystem Governance Framework" <<governance>> as Gov

' === Trust Registry ===
rectangle "Verana Trust Registry\n• Credential Schemas (ID, Grant-to-Work, Training)\n• Issuer & Verifier Permissions" <<governance>> as VPR

' === Flows ===
Holder -down-> Univ : Request credential\n(ID, training, grant to work)
Univ -down-> VPR : Register as authorized issuer
Univ --> Holder : Issues verifiable credentials

Holder -right-> Hosp : Present credentials
Hosp -down-> VPR : Register as authorized verifier
Hosp --> Holder : Grants access to work / perform tasks

Gov -down-> VPR : Publishes\nGovernance Framework
VPR -up-> Gov : Enforces rules,\nrevokes or updates permissions
@enduml
{{< /kroki >}}

### Business Models and Incentives

- Governments can adopt **pay-per-verification models**, where verifiers (e.g., hospitals) pay a small privacy-preserving fee each time they check a worker’s credentials.
- Issuers (e.g., universities, licensing boards) may also be rewarded for maintaining credential quality.
- Wallet providers and user agent vendors are incentivized, ensuring a **sustainable ecosystem** without surveillance-driven monetization.

### Additional Benefits

- **Portability**: Credentials travel with the worker, valid nationwide (or even cross-border if interoperable ecosystems are recognized).
- **Security**: Credentials are cryptographically verifiable, revocable, and fraud-resistant.
- **Efficiency**: Cuts onboarding times from weeks to minutes.
- **Trust**: Hospitals gain confidence that staff meet national requirements without duplicated checks.
- **Patient Safety**: Ensures only fully verified and authorized staff are deployed in critical environments.

## Conclusion

By building on the Verana Infrastructure, governments can transform healthcare workforce mobility from a **fragmented, manual process** into a **seamless, trusted, and privacy-preserving system**.

Healthcare workers are verified once, and that verification is valid everywhere. This approach reduces costs, eliminates redundancy, improves patient safety, and strengthens trust in the healthcare system.

Verana turns the principle of **“don’t trust, verify”** into a practical foundation for **modern, mobile healthcare ecosystems**.
