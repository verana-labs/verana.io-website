# Verana

**The Open Trust Layer for the Internet.**

Own your identity, your data, and your digital services.

## Ecosystems Use Verana to Build Their Own Trust Networks

Verana empowers **ecosystems**, from governments to industries, to establish **sovereign, verifiable trust networks** that they fully control.  
Each ecosystem leverages Verana as a **trust anchor** to define, enforce, and evolve their credential-based governance rules.

### Who Can Build an Ecosystem?

- 🏛 **Governments**: issue and verify digital IDs, business credentials, regulatory licenses...  
- 🏥 **Healthcare**: manage professional certifications, patient access, cross-border mobility...  
- 📡 **Telecommunications**: verify customer onboarding (KYC), issue proof of mobile phone number, proof of address,...  
- 🏦 **Banks & Finance**: establish verified credit, KYC/AML compliance, and financial trust frameworks.  
- 🎓 **Education**: issue diplomas, professional training certificates, and lifelong learning credentials.  
- …and countless others.  

### Core Building Blocks

Each ecosystem defines its governance through a **modular trust architecture**:

- 📜 **Ecosystem Governance Framework (EGF)**  
  Defines the mission, rules, and policies that govern the ecosystem.  

- 🗂️ **Trust Registries**  
  Maintain lists of authorized issuers, verifiers, and schema operators.  

- 📑 **Credential Schemas**  
  Establish standardized formats for verifiable credentials (identity, training, licenses, etc.).  

- 🧑‍⚖️ **Onboarding & Delegation**  
  Onboard issuers and verifiers directly—or delegate this task to **trust registry operators**.  

### Privacy-Preserving Business Models

Ecosystems can activate **new business models** that:  

- Reward issuers, verifiers, and service providers for their contributions.  
- Ensure privacy by default: payments and rewards are processed without exposing personal data.  
- Eliminate dependency on centralized intermediaries.  

### Looking Ahead

With Verana, ecosystems move beyond **centralized control** to build **autonomous trust networks**.  
They gain the tools to **self-govern, incentivize participants, and enforce trust at scale**, while keeping data ownership and privacy in the hands of individuals and organizations.

## Organizations and Individuals Use Verana to Build Decentralized Verifiable Services They Truly **Own**

With Verana, **anyone**, from global organizations to individual creators, can deploy their own **Verifiable Service (VS)**.  
Unlike centralized platforms, Verifiable Services are **self-sovereign**, meaning you fully control your data, identity, and audience relationships.

### Why Verifiable Services Matter

Owning a Verifiable Service means:

- 🔐 **Full Data Ownership**: you control your data and connections.  
- 🛡️ **Privacy by Design**: no intermediaries exploiting or mining user interactions.  
- ✅ **Proof of Authenticity**: prove ownership of your service to your audience.  
- ✍️ **Signed Content**: integrate with **C2PA** so all published content is cryptographically signed by your DID.  
- 🏗️ **Deployment Freedom**: host anywhere: cloud, self-hosted, or migrate freely at any time.  

This is a radical departure from today’s platforms, where your content and connections are **rented** rather than **owned**.

### Examples of Verifiable Services

- 📢 **Decentralized Social Channels**  
  e.g., the official channel of an influencer who owns 100% of their reach.  

- 🤖 **Decentralized AI Agents**  
  e.g., a personal AI assistant that runs under your DID and respects your privacy.  

- 🔄 **Agent-to-Agent Communication**  
  e.g., two autonomous AI agents exchanging credentials to securely negotiating a contract, making a payment request, or exchanging verifiable data.  

- 💬 **Decentralized Messaging & Chatbots**  
  e.g., a customer support chatbot for a mobile operator, verifiable and portable.  

- 🎬 **Decentralized Content Delivery Channels**  
  e.g., a film catalog directly published by a studio, with provenance guaranteed.  

- …and many more innovations waiting to be built.

### The Big Picture

Verifiable Services give individuals and organizations **true digital sovereignty**.  
They are not bound by the rules of a centralized platform, cannot be de-platformed arbitrarily, and can move freely between hosting providers, all while maintaining verifiable trust and privacy.

## Verifiable Service Controllers Register their Services in the Verifiable Service Directory

Anyone can register a **Verifiable Service** in the **Verifiable Service Directory**. Once registered, services are automatically crawled, their credentials dereferenced and verified, and then indexed in the **Verana Trust Resolver**. Think of it as the **yellow pages of verifiable data**, but cryptographically guaranteed.

With this index in place, users, services, and apps can perform **advanced trust-based queries**, such as:

- 🔍 *Where is Alice’s AI Assistant whose attached **AI Assistant Credential** shows the owner name “Alice”?*  
- 🌐 *Which social channels hold a **Blue Network Credential** from **Ecosystem DEF** and have an avatar credential containing **@bob_influencer**?*  
- 🛍️ *Which services in Bristol, UK present an **E-commerce Credential** from issuers of the **Ecosystem Ecommerce Global Alliance** and sell **baby shoes**?*  
- 🏨 *List all services with a valid **Hotel Credential** from **Ecosystem PMS Vendor ABC** located in **France**.*  
- 🔧 *Show certified plumbers who hold a **Plumber Credential** from **Ecosystem Verified Workers** in **Bogotá**.*  

The **Trust Resolver** ensures search results are based solely on **verifiable data** contained in verifiable credentials—not arbitrary or opaque ranking algorithms.  

This fundamentally **disrupts today’s economy** of advertising-driven visibility (Google Ads, Facebook Ads, etc.) and replaces it with a **decentralized economy of trust**, where:  

- ✅ Ecosystems certify claims and issue credentials.  
- ✅ Results are transparent and verifiable.  
- ✅ Businesses and individuals compete on **trust and authenticity**, not ad budgets.  

The result is a **public, verifiable database of claims**, open and searchable by anyone, that shifts value from centralized intermediaries to decentralized ecosystems.  

## App Developers Create a New Class of Browsers: Verifiable User Agents

Verifiable User Agents (VUAs) are a new category of applications that **aggregate and interact with decentralized Verifiable Services (VSs)**. Instead of relying on centralized APIs or walled-garden platforms, these apps query the **Verana Trust Resolver**, making any compatible Verifiable Service instantly visible and usable.

### What VUAs Can Be

VUAs open the door to a wide variety of decentralized applications:

- 🌐 **Decentralized Social Networks** — e.g., an X-like network built from decentralized Social Channels.  
- 🤖 **Chatbot & AI Assistant Browsers** — apps for discovering and talking with official chat services and personal AI assistants.  
- 🎬 **Decentralized Video Apps** — streaming apps that aggregate film catalogs published by creators.  
- 🏨 **Decentralized Hotel PMS Apps** — apps where users can search hotels powered by compatible PMS software.  
- 🛒 **E-commerce Aggregators** — apps that list all businesses using e-commerce Verifiable Services.  

Because indexing is trust-based, inclusion is **automatic and verifiable**: no gatekeepers, no paywalls.

### Business Models for VUA Builders

VUA developers can also create their **own Ecosystem** within Verana. This allows them to:

- Define their **Ecosystem Governance Framework (EGF)**.  
- Issue or sell **credentials** to Verifiable Service owners.  
- Control how services appear within their VUA app.  

When a service owner attaches such a credential to their Verifiable Service’s DID, they **automatically become discoverable** inside the VUA.

### Example: Blue Network

Imagine an influencer running a **Social Channel Verifiable Service**. To appear in the **Blue Network VUA**:

- They can obtain a **free credential** from Blue Network, making their channel visible in the app.  
- Or, they may purchase a **premium credential**, which guarantees that their content feed remains **ad-free**.  

This creates a **sustainable, privacy-preserving business model** for app developers while giving service owners full autonomy over their visibility and monetization strategy.

### Why This Matters

Traditional apps depend on opaque algorithms and advertising-driven models.  
**VUAs flip this model**: visibility and ranking are based on **verifiable credentials and ecosystem-defined governance**, ensuring fairness, privacy, and transparency.

## Business Models

Verana empowers ecosystems to design and enforce **privacy-preserving business models** built on Verifiable Credentials. These models define **who pays, when, and how rewards are distributed** among participants, ensuring fairness and transparency without exposing sensitive data.

**Examples:**

- **Credential Holders** pay **issuers** to be verified and obtain a credential.  
- **Issuers** pay the **ecosystem owner** when issuing credentials.  
- **Verifiers** pay both the **issuer** and the **ecosystem owner** when requesting credential presentations from holders.  

Business models are **fully customizable**, enabling ecosystems to tailor incentives to their unique needs. A percentage of all fees is automatically distributed to **Verifiable User Agents (VUAs)**, ensuring wallets, apps, and browsers that power user adoption are rewarded too.  

## Trust Deposit

A portion of trust fees collected in business models is allocated to **Trust Deposits** for both payers and payees.  

A **Trust Deposit** acts as a **stake** that grows with participant activity across ecosystems. It reflects engagement, integrity, and contribution to the Verana Trust Network, serving as a foundation for decentralized accountability.  

**Key Purposes of Trust Deposits:**  

| **Purpose**                          | **Description**                                                                                      |
|--------------------------------------|------------------------------------------------------------------------------------------------------|
| **Incentivize Good Behavior**        | Participants risk losing part of their deposit if they violate governance rules. |
| **Signal Serious Intent**            | Ensures participants have “skin in the game,” discouraging fraud, spam, and low-effort engagement. |
| **Enable Slashing**                  | Deposits can be reduced or removed when trust policies or contractual roles are breached. |
| **Ecosystem-Specific Control**       | Each ecosystem can only slash deposits linked to its activities, preventing abuse. |
| **Non-Custodial**                    | Deposits are fully on-chain, beyond the reach of centralized authorities. |
| **Rewards**                          | Deposits generate yield — the more participants engage in ecosystems, the higher their returns. |

This mechanism makes governance **self-enforcing**, combining **incentives** with **accountability** in a decentralized way.  

## Trust Reputation

Trust Reputation transforms on-chain activity into a **transparent and verifiable measure of credibility**. It is built on factors such as:  

- Start date of participation in Verana.  
- Size of the participant’s Trust Deposit.  
- Ecosystems they actively contribute to.  
- Number of credentials issued and/or verified.  
- Governance history, including slashes.  

Trust Reputation is **publicly accessible** and visible across Verifiable User Agents (VUAs). It can be verified by services, apps, and even AI agents, enabling peers to decide who they trust before engaging.  

A **Hall-of-Fame dashboard** highlights leading participants and their deposits, making the reputation economy not only verifiable but also transparent and rewarding.  

## Verana is an Infrastructure, Not a Platform

Verana is **public digital infrastructure**, built to be open, decentralized, and free from vendor lock-in.  
It is not a subscription service or a platform you must depend on—it is technology anyone can run, extend, and govern.  

- 🌍 **Open and accessible**: free and open source, available for anyone to use.  
- 🔗 **Decentralized by design**: no single operator, no central point of control.  
- 🛡️ **Neutral and flexible**: works with any wallet, any credential format, any identity method.  
- 🤝 **Sovereign by default**: ecosystems, organizations, and individuals remain fully in control of their trust networks and data.  

With Verana, you don’t “sign up” to a platform—you **own the rails** of your digital trust infrastructure.
