---
title: Trust Deposit and Reputation
date: 2025-04-01T00:00:00+02:00
subtitle: "It takes time to build a reputation."
comments: false
bigimg: [{src: "/img/triangle.jpg"}, {src: "/img/sphere.jpg"}, {src: "/img/hexagon.jpg"}]
---

## Trust Deposit

A **Trust Deposit** is a stake within the a VPR network that grows automatically as participants interact with the ecosystem. Each participant maintains their own individual Trust Deposit, which reflects their activity and contribution to the trust network.

### How Trust Deposits Grow

- **Validation Process**:  
  When a Validation Process is executed, the **Trust Deposits of both the `Applicant` and the `Validator`** increase.

- **Credential Issuance & Verification**:  
  If the Ecosystem has enabled **pay-per-issuance** and/or **pay-per-verification**, the **Trust Deposits of all participants** involved in the Permission Tree grow each time a credential is issued or verified.  
  Additionally, if applicable, the Trust Deposits of the involved `User Agent Owner` and `Wallet User Agent Owner` are also incremented.

- **Service Directory Participation**:  
  Registering or renewing a DID in the **Service Directory** increases the **Trust Deposit** of the participant who executes the transaction.

### Conceptual Model

The **Trust Deposit** functions like a **percentage-based deduction** applied to circulating trust fees. These deductions accumulate in individual deposits as a reflection of ongoing participation and service provision.

For example, in the case of **Verification Fees** (as detailed in the [Business Models](/page/learn-vt-business-models.md) section), a portion of each fee is redistributed to grow the Trust Deposits of the relevant actors in the verification process.

{{< image "/img/verifier-fee-distrib.svg" "" "max-width: 1200x;  margin-top: 0em; margin-bottom: 0.5em; margin-right: 0em; margin-left: 0.5em; " "max-width: 1200px; text-align: center; font-style: italic; font-size: smaller; text-indent: 0;  margin-top: 0em; margin-bottom: 0.5em; margin-right: 0em; margin-left: 2.5em; padding: 0em; float: none; " >}}

- Each time fees are charged, an additional **20%** is added and allocated to the **Trust Deposit** of the participant executing the transaction. This amount is also linked to the specific **Permission** that authorized the transaction.

- When fees are distributed to other participants (e.g., Validators, Grantors, etc.), **20%** of the distributed amount is redirected to their **Trust Deposit**, while the remaining **80%** is **liquid and immediately available** for use.

- The percentage allocated to Trust Deposits (e.g., 20%) is configurable and defined by the **VPR controller**.

### Core Purposes

The **Trust Deposit** mechanism is designed to ensure that participants within an Ecosystem **adhere to the rules defined in its Ecosystem Governance Framework (EGF)**. It serves as both an incentive and an enforcement tool within decentralized trust infrastructures.

| **Purpose**                          | **Description**                                                                                      |
|--------------------------------------|------------------------------------------------------------------------------------------------------|
| **Incentivize Good Behavior**        | Participants risk losing part of their deposit if they behave dishonestly or violate governance rules. |
| **Signal Serious Intent**            | Requires participants to have "skin in the game," discouraging spam, fraud, and low-effort engagement. |
| **Enable Slashing**                  | Deposits can be partially or fully slashed when participants breach trust policies or contractual roles. |
| **Support Decentralized Governance** | Serves as the economic foundation for decentralized permission management, assignment, and revocation. |
| **Ecosystem-Specific Control**       | Each Ecosystem can only slash the portion of a participant’s deposit that corresponds to activity within that Ecosystem. |
| **Non-Custodial**                    | Trust Deposits are held on-chain within a VPR and are not under the control of any centralized authority. |

{{< image "/img/verifiable-service.png" "Example of Trust Reputation." "max-width: 300px; border: 1px solid #DDDDDD; margin-top: 2.5em; margin-bottom: 0.5em; margin-right: 0em; margin-left: 0.5em;" "text-align: center; font-style: italic; font-size: smaller; text-indent: 0;  margin-top: 0em; margin-bottom: 0.5em; margin-right: 0em; margin-left: 2.5em; padding: 0em; float: right; " >}}

### Slash

Each Ecosystem defines, in its **Ecosystem Governance Framework (EGF)**, the rules that participants must follow to remain in good standing. The EGF also specifies the conditions under which a **slash**—a penalty applied to a participant’s Trust Deposit—may occur.

When a participant is **slashed**:

- The corresponding portion of their **Trust Deposit** is forfeited, based on the severity or type of violation.
- Their ability to perform actions within the Ecosystem (e.g., issuing or verifying credentials) is **suspended**.
- To regain active status, the participant must **replenish the slashed amount** of their Trust Deposit.

This mechanism ensures accountability and alignment with the Ecosystem’s trust and governance policies.

### Trust Deposit-Based Reputation

Because network activity and Trust Deposit data are publicly accessible, each participant naturally builds a **digital trust reputation** over time. This reputation reflects both their positive contributions and any violations within the ecosystems they engage in.

Key reputation signals include:

- **Growth of Trust Deposit**: Active, rule-abiding participants see their Trust Deposit increase as they contribute value to the network.
- **Ecosystem-Specific History**: For each Ecosystem a participant is involved in, their **Trust Deposit history** is transparently visible to all other participants.
- **Credential Activity**: The number of **credentials issued and/or verified** by the participant within each Ecosystem is publicly observable.
- **Behavioral Accountability**: Any **dishonest or malicious activity**—especially if penalized through slashing—remains permanently associated with the participant’s account.

This transparent data can be used to compute a **reputation score** or **star rating**, enabling trust-based decisions across the network.
