# Specs

## Issuer and Verifier Services

- Issuer and verifier services must support the following protocols for the issuance and verification of Verifiable Credentials: **OID4VC** and **DIDComm**.
- Each issuer and verifier must be identified by a **DID**, which must be resolvable to a **DID Document**.
- The **DID method** used by issuers and verifiers must support **key rotation**.
- Issued Verifiable Credentials must be **revocable**.
- The attributes within Verifiable Credentials must be **visible to the holder**; no hidden attributes are permitted.
- The **credential format(s)** must support **selective disclosure**.

## Trust Registries

A Trust Network must provide Trust Registry functionality to ecosystems, including:

- The ability to **create and manage Trust Registries**, including:
  - Publishing **Ecosystem Governance Frameworks**
  - Storing **schema definitions**
  - Maintaining, for each schema, a list of **revocable issuer and verifier permissions**
- The capability to **support more than 30,000 registry entries**.
- All data stored in the Trust Network must be **cryptographically verifiable**.
- The Trust Network must be **GDPR compliant**—only **identifiers and permissions** may be stored; **no personal data**.

## Business Models

The Trust Network must support a variety of business models, including:

- **Annual fees** for issuers and verifiers to be listed in a Trust Registry.
- **Per-issuance fees** for issuers. These must be **privacy-preserving for the holder**.
- **Per-verification fees** for verifiers. These must also be **privacy-preserving for the holder**.
- All business models must **guarantee holder privacy**—no “phone home” behavior: issuers and third parties must **not be able to track** when or how credentials are presented.

## Wallet Requirements

The wallet must:

- Be **compliant with eIDAS 2.0**, and specifically support **W3C Verifiable Credentials**.
- Be capable of **storing the HSE card VC** and additional attestations (e.g., professional certifications).
- Be capable of **reading NFC documents**.
- Provide users with **clear and verifiable identification of any connected service** (issuer or verifier).  
  - Identification must include, at minimum, the **organization name** and **terms and conditions** of the service.  
  - **Unidentifiable services must be blocked** to prevent fraud.
- **Prevent unauthorized or revoked issuers** from issuing credentials for a given schema by verifying their authorization in the corresponding **Trust Registry**.
- **Prevent unauthorized or revoked verifiers** from requesting credential presentations by checking their authorization in the **Trust Registry**.
- **Block issuers and verifiers** from acting if a **pay-per-issuance or pay-per-verification model** applies and **payment has not been completed**.
- **Support selective disclosure**.

## User Authentication

A strong user authentication mechanism should be implemented by verifiers when needed:

- **Biometric authentication** (e.g., facial recognition) against the **reference portrait on the HSE card** must be supported.
- **Proof-of-possession** via **NFC reading of the HSE card** must be possible for re-verifying possession during presentation.
- The **authentication level must be configurable** within the Trust Network, based on the **attestation type** and **verification assurance level**.
