---
title: 🖋️ Notaries and Power of Attorney
url: "/page/industry-use-cases/notaries"
---

## The Problem: A Manual, Inefficient Process  

In Mexico, granting and using a **Power of Attorney (Poder Notarial)** is a **paper-based, fragmented, and costly process**.  

### Current Workflow  

- To grant a power of attorney:  
  1. The grantor visits a notary and proves they are the legal representative of a company.  
  2. The notary drafts the power, signs it together with the grantor, and keeps a physical copy in their files.  
  3. The signed document is physically delivered to both the grantor and the grantee.  
  4. There is **no central database** of powers of attorney in Mexico.  

- To revoke a power of attorney:  
  - The grantor or grantee can go to **any notary office** (not necessarily the one that issued it).  
  - If they don’t have a copy, the new notary must contact the original notary to obtain the document and proceed with revocation.  

- To use a power of attorney, for example at a bank:  
  - The grantee presents the **physical copy** of the power.  
  - The bank must call the notary who issued it to confirm authenticity.  
  - The bank must also **contact all notaries in Mexico** to ensure the power has not been revoked by another office.  
  - Banks and other verifiers often repeat this process periodically, “just in case” a power was revoked after issuance.  

This system creates **unnecessary friction and cost** for notaries, grantees, and especially verifiers like banks, who face a repetitive and burdensome verification process.  

## The Solution: A National Trust Ecosystem for Notaries  

In Mexico, the notary system is structured as follows:  

- **Colegio Nacional de Notarios** – the highest-level body.  
- **Colegios Estatales** – state-level associations.  
- **Notarios** – individual notary offices.  

### Establishing a Digital Ecosystem  

The **Colegio Nacional** creates a **Notarial Trust Ecosystem** on Verana to digitize and streamline the power of attorney process.  

- Publishes an **Ecosystem Governance Framework (EGF)** that defines:  
  - Rules for issuance, verification, and revocation of powers of attorney.  
  - The **Power of Attorney Credential Schema**.  
  - Procedures for onboarding participants:  
    - Colegio Nacional (ecosystem owner)  
    - Colegios Estatales (Trust Registry Grantors)  
    - Notaries (Issuers)  
    - Banks, telcos, and other institutions (Verifiers).  

### Issuing a Power of Attorney  

When a notary issues a new power of attorney:  

1. The notary drafts and signs the physical document as usual.  
2. The notary provides a **digital copy** to both the grantor and grantee.  
3. The notary issues a **Power of Attorney Credential** to both parties, containing:  
   - Company name  
   - Grantor name  
   - Grantee name  
   - Date and validity period  
   - A **hash of the digital document** to guarantee authenticity.  

### Revoking a Power of Attorney  

- The grantor or grantee presents the credential at any notary office.  
- If the credential was issued by another notary, the new notary can either:  
  - Call the issuing notary to request revocation, or  
  - Use the **ecosystem’s web service** to revoke the credential directly.  
- Once revoked, the credential becomes invalid across the entire ecosystem.  

### Using a Power of Attorney  

When the grantee presents the power to a verifier (e.g., a bank):  

1. The grantee provides both the **digital copy of the power of attorney** and their **verifiable credential**.  
2. The bank verifies authenticity of the verifiable credential and the document instantly.
3. If the credential is active (not revoked), the power is valid: no further manual checks are needed.  
4. Banks and other verifiers can **periodically check credential validity automatically**, eliminating repetitive phone calls to notaries.  

## Conclusion: Saving Time, Reducing Costs  

By digitizing the power of attorney process:  

- **Banks and businesses** save significant time and money by eliminating manual verification with hundreds of notaries.  
- **Grantors and grantees** gain confidence that their powers are instantly verifiable and securely revocable.  
- **Notaries** maintain their traditional role while becoming part of a modern, national trust ecosystem.  
- **The Colegio Nacional** reinforces its authority and provides a digital infrastructure that benefits all participants.  

👉 Verana transforms the **power of attorney** from a costly, paper-based process into a **verifiable, efficient, and fraud-resistant digital credential system**.  