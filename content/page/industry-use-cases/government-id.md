---
title: 🆔 Government Digital ID
url: "/page/industry-use-cases/government-id"
---

Verana provides governments with full **open source software and infrastructure** to issue **privacy-preserving, verifiable, decentralized Digital IDs** that empower citizens while maintaining national sovereignty over identity systems.

## Create the Digital Identity Ecosystem

Governments begin by creating their **Ecosystem Trust Registry** in Verana.

- Define a **Citizen ID Credential Schema**.
- Establish an **Ecosystem Governance Framework (EGF)** that sets rules for issuance, verification, and authorization of participants.

This registry ensures that only authorized issuers and verifiers can participate in the Digital ID system.

## Build the Digital Wallet

Governments (or local providers) build a **Digital Wallet mobile app** that acts as a **Verifiable User Agent (VUA)**.

- Citizens use the wallet to **store their Citizen ID Verifiable Credential (VC)**.
- The wallet is **self-sovereign**: citizens own their credentials, with no central account or dependency.
- Compatible with open standards like **EIDAS2, DIDs, DIDComm, W3C VCs, OpenID4VC, OpenID4VP**.

## Citizen Onboarding into the Registry

{{< img url="/images/iuc/gov-id-onboard.png" floating="none" border="1px solid #DDDDDD" maxWidth="500px" >}}

At public offices (e.g., civil registry):

1. **Onboarding Verifiable Service** captures biometric data and validates documents.
2. Citizen data is recorded in the **central registry database**.
3. Citizen receives an **NFC-enabled ID card** containing personal and biometric information.

This ensures **official enrollment** into the state identity system.

## Issuing the Citizen ID Verifiable Credential

{{< img url="/images/iuc/gov-id-vc.png" floating="none" border="1px solid #DDDDDD" maxWidth="500px" >}}

Citizens obtain their **Citizen ID Verifiable Credential** by downloading the Government Digital Wallet and completing a secure identity validation process.  

### Example Enrollment Flow

1. The citizen captures a photo of their **physical ID card**. The app reads the **MRZ** to retrieve the key required for NFC access.  
2. The citizen enters the **PIN code of the card** to authorize the process.  
3. The citizen taps the ID card on the handset, enabling an **NFC read** of the document to extract personal and biometric information.  
4. The app performs a **live face match** against the extracted ID photo to confirm that the handset user is the legitimate cardholder.  
5. If all checks succeed, a **Citizen ID Verifiable Credential** is securely issued to the citizen’s digital wallet.  

👉 Any previously issued credential is **automatically revoked**, guaranteeing that only **one valid credential** exists per citizen at any time.  

## Authorized Verifiers

The government decides who can request credential presentations:

- Applicants (e.g., banks, telecoms, hospitals) undergo a **validation process** before being authorized.
- Once approved, they are registered as **authorized verifiers** for the Citizen ID schema.
- Governments can implement a **pay-per-verification** model:
- Each verification request incurs a fee.
- Fee payment is **privacy-preserving**, issuers of a Citizen ID credential cannot know, even if they receive a payment for a presentation request, who is the citizen that presented the credential to a verifier (bank,...).

## Selective Disclosure

By supporting advanced credential formats (e.g., ZKPs, BBS+, Anoncreds), governments can enable:

- Citizens to **prove attributes without revealing full data** (e.g., “over 18” without disclosing date of birth).
- Minimal disclosure principles, reducing risks of data misuse.
