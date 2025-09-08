---
title: Verifiable Trust Business Models
date: 2025-04-01T00:00:00+02:00
subtitle: "Subscription Business Model for Credential Schema Permissions, *Privacy-preserving* pay per issuance and pay per verification for credentials"
comments: false
bigimg: [{src: "/img/triangle.jpg"}, {src: "/img/sphere.jpg"}, {src: "/img/hexagon.jpg"}]
---

## Business Models

VPR spec defines two kind of business models:

- subscription based business model, for being granted a Permission in the Credential Schema Permission tree.
- pay per issuance and pay per verification.

### Subscription based Validation Process

Based on the configured issuance and verification policies, if a schema is not marked as **OPEN**, an `Applicant` must complete a **Validation Process** to be granted a permission. The `Applicant` initiates this process by selecting an existing `Validator` permission. Each `Validator` defines its own terms, which may include the payment of fees. These fees are typically charged as a **yearly subscription**, requiring the `Applicant` to renew their permission annually. If the subscription is not renewed, the permission will **expire** automatically.

Fee Structure:

| Validator → Applicant ↓  | Trust Registry                      | Issuer Grantor                        | Verifier Grantor                    | Issuer                              | Verifier | Holder                                  |
|------------------|-------------------------------------|---------------------------------------|-------------------------------------|-------------------------------------|----------|-----------------------------------------|
| Issuer Grantor   | renewable subscription (1)          |                                       |                                     |                                     |          |                                         |
| Verifier Grantor | renewable subscription (2)          |                                       |                                     |                                     |          |                                         |
| Issuer           | renewable subscription (3)          | renewable subscription (1)            |                                     |                                     |          |                                         |
| Verifier         | renewable subscription (4)          |                                       | renewable subscription (2)          |                                     |          |                                         |
| Holder           |                                     |                                       |                                     | renewable subscription              |          |                                         |

- (1): if *issuer PermissionManagementMode* is set to GRANTOR_VALIDATION.
- (2): if *verifier PermissionManagementMode* is set to GRANTOR_VALIDATION.
- (3): if *issuer PermissionManagementMode* is set to TRUST_REGISTRY.
- (4): if *verifier PermissionManagementMode* is set to TRUST_REGISTRY.

**Example**: If an `Applicant` wishes to become an `Issuer`, and the `PermissionManagementMode` for credential issuance is configured as `GRANTOR_VALIDATION`, the `Applicant` must undergo a **Validation Process** with an `Issuer Grantor`, who will serve as the `Validator`.

If defined, the `Applicant` is required to pay validation fees, as specified in the `Issuer Grantor`'s permission configuration.

During the Validation Process, the `Applicant` must:

- Prove ownership of their **DIDs** and **VPR keys**;
- Provide any additional information required by the `Validator` to assess and accept the `Applicant` as an `Issuer`.

The specific requirements and process execution rules must be defined within the **Ecosystem Governance Framework (EGF)** of the Ecosystem, the Trust Registry controller.

Example of a permission tree where schema policy is set to GRANTOR_VALIDATION for issuance, and GRANTOR_VALIDATION for verification:

{{< image "/img/validation-tree-td.png" "" "max-width: 800x;  margin-top: 0em; margin-bottom: 0.5em; margin-right: 0em; margin-left: 0.5em; " "max-width: 800px; text-align: center; font-style: italic; font-size: smaller; text-indent: 0;  margin-top: 0em; margin-bottom: 0.5em; margin-right: 0em; margin-left: 2.5em; padding: 0em; float: none; " >}}

**In this example:**

- An `Applicant` must pay **1,000 × (1 + TD) = 1,200 TUs** to initiate a validation process with `Issuer Grantor B`, in order to be granted the `Issuer C` permission for a specific Credential Schema governed by `Trust Registry A`.
- Once validation begins, the fees paid by the `Applicant` are **escrowed**.
- The `Applicant` connects to the **Verifiable Service** provided by the `Validator` (the DID registered in the Validator’s permission). They exchange the necessary information to complete the validation process.
- Upon successful completion of the validation:
  - The `Applicant` is granted the `Issuer` permission by the `Validator`.
  - The escrowed fees are **released and distributed** according to the defined rules.

{{< image "/img/vp-fees-distrib-issuer.png" "" "max-width: 800x;  margin-top: 0em; margin-bottom: 0.5em; margin-right: 0em; margin-left: 0.5em; " "max-width: 800px; text-align: center; font-style: italic; font-size: smaller; text-indent: 0;  margin-top: 0em; margin-bottom: 0.5em; margin-right: 0em; margin-left: 2.5em; padding: 0em; float: none; " >}}

The validation fees are partially distributed to designated participant(s), such as the `Validator` or `Grantor`. The remaining portion is either allocated to **Trust Deposits** or treated as standard **network fees**, and distributed according to the network’s established fee distribution model.

### Pay per issued/verified credential

Added to the validation fees, granted Permissions may indicate that some fees must be paid when issuing or verifying (presentation request) a Verifiable Credential of a given schema.

Example:

{{< image "/img/pay-per-issuance-verif.png" "" "max-width: 1200x;  margin-top: 0em; margin-bottom: 0.5em; margin-right: 0em; margin-left: 0.5em; " "max-width: 1200px; text-align: center; font-style: italic; font-size: smaller; text-indent: 0;  margin-top: 0em; margin-bottom: 0.5em; margin-right: 0em; margin-left: 2.5em; padding: 0em; float: none; " >}}

In this example:

- Total paid by `Issuer C` for issuing a credential: (10 + 5) * (1 + UAR + WUAR + TD) = 21 TUs
- Total paid by `Verifier E` for verifying a credential: (20 + 5 + 2 + 30) * (1 + UAR + WUAR + TD) = 79.8 TUs

This is a flexible pay per issuance/verification model that rewards all participants.

Fees involved and distributed, when a credential is issued:

{{< image "/img/issuer-fee-distrib.svg" "" "max-width: 1200x;  margin-top: 0em; margin-bottom: 0.5em; margin-right: 0em; margin-left: 0.5em; " "max-width: 1200px; text-align: center; font-style: italic; font-size: smaller; text-indent: 0;  margin-top: 0em; margin-bottom: 0.5em; margin-right: 0em; margin-left: 2.5em; padding: 0em; float: none; " >}}

Fees involved and distributed, when a credential is verified:

{{< image "/img/verifier-fee-distrib.svg" "" "max-width: 1200x;  margin-top: 0em; margin-bottom: 0.5em; margin-right: 0em; margin-left: 0.5em; " "max-width: 1200px; text-align: center; font-style: italic; font-size: smaller; text-indent: 0;  margin-top: 0em; margin-bottom: 0.5em; margin-right: 0em; margin-left: 2.5em; padding: 0em; float: none; " >}}

**Payment Enforcement**:

It is the responsibility of **Verifiable Services (VSs)** and **Verifiable User Agents (VUAs)** to verify that an `Issuer` or `Verifier` has paid the required fees **before**:

- Accepting a newly issued credential from an `Issuer`, or  
- Presenting a requested credential to a `Verifier`

This ensures that only participants with valid, active permissions — backed by payment — are allowed to issue or request verifiable credentials.
