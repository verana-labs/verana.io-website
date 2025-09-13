---
title: Trust Resolver
url: "/page/trust-engine/trust-resolver"
---

## The Verifiable Service Directory and the Trust Resolver

Anyone can register a **Verifiable Service** in the **Verifiable Service Directory**. Once registered, services are automatically crawled, their credentials dereferenced and verified, and then indexed in the **Verana Trust Resolver**. Think of it as the **yellow pages of verifiable data**, but cryptographically guaranteed.

With this index in place, users, services, and apps can perform **advanced trust-based queries**, such as:

- 🔍 *Where is Alice’s AI Assistant whose attached **AI Assistant Credential** shows the owner name “Alice”?*  
- 🌐 *Which social channels hold a **Blue Network Credential** from **Ecosystem DEF** and have an avatar credential containing **@bob_influencer**?*  
- 🛍️ *Which services in Bristol, UK present an **E-commerce Retail Credential** from issuers of the **Ecosystem Ecommerce Global Alliance** and sell **baby shoes**?*  
- 🏨 *List all services with a valid **Hotel Credential** from **Ecosystem PMS Vendor ABC** located in **France**.*  
- 🔧 *Show certified plumbers AI assistants who hold a **Plumber Credential** from **Ecosystem Verified Workers** in **Bogotá**.*  

The **Trust Resolver** ensures search results are based solely on **verifiable data** contained in verifiable credentials, not arbitrary or opaque ranking algorithms.  

This fundamentally **disrupts today’s economy** of advertising-driven visibility (Google Ads, Facebook Ads, etc.) and replaces it with a **decentralized economy of trust**, where:  

- ✅ Ecosystems certify claims and issue credentials.  
- ✅ Results are transparent and verifiable.  
- ✅ Businesses and individuals compete on **trust and authenticity**, not ad budgets.  

The result is a **public, verifiable database of claims**, open and searchable by anyone, that shifts value from centralized intermediaries to decentralized ecosystems.  

## Example #1: Alice's AI Assistant

Alice runs an **AI Assistant Verifiable Service (VS)**, deployed on [Amazon Lambda](https://aws.amazon.com/pm/lambda/).  

Her AI Assistant is identified by a **Decentralized Identifier (DID)**:  
`did:example:alice-ai-assistant`  

Attached to her service are several **verifiable credentials**:  

- 👩 A **Person Credential**, proving that Alice is the owner of the AI Assistant.  
- 🛠 A **Service Credential**, containing details such as the assistant’s name and the minimum age required to connect.  
- 💬 A **Hologram Messaging Credential**, showing that her assistant can be reached directly within the **Hologram Messaging Verifiable User Agent (VUA)**.  

### Making the Service Discoverable

Alice wants her assistant to be **searchable**. She executes a transaction on the **Verana network** to register her DID in the **Verifiable Service Directory**.  

Once added:

- The DID is resolved,
- Its credentials are crawled and verified,
- And the results are indexed in the **Trust Resolver**.

### Search in Action

From this point on, Alice’s AI Assistant is **automatically discoverable** through Trust Resolver queries:

- 🔍 Inside the **Hologram Messaging App**, by searching her name, claims (e.g., first name, last name), or her agent’s service name.
- 🌐 Through a **search-engine-style interface**, scanning the full database of verifiable services.

## Example #2: Bob's Ecommerce

Bob built an e-commerce business to serve a niche market: **children’s shoes**.  
For his online shop, he chose [Medusa](https://medusajs.com/) as the platform.  

To increase trust and visibility, Bob enabled the **Verifiable Trust** feature in his e-commerce service, turning it into a **Verifiable Service (VS)**. His shop is now identified by a **Decentralized Identifier (DID)**:  
`did:example:bob-ecommerce-kid-shoes`.

Attached to Bob’s Medusa Verifiable Service are several **verifiable credentials**:  

- 🏢 An **Organization Credential**, proving that *Bob Kid Shoes Ltd* is the official owner.  
- 🛠 A **Service Credential**, listing details such as the shop’s name and minimum age requirements.  
- 🛍 An **E-commerce Retail Credential**, describing the products sold and the delivery areas covered.  
- 🔗 A **Medusa Credential**, linking Bob’s store to Medusa’s official list of customers.  

### Becoming Discoverable

Bob wants his shop to be **searchable**. He executes a transaction on the **Verana network** to add his service DID to the **Verifiable Service Directory**.  

From there:  

- The DID is resolved,  
- Its credentials are crawled and verified,  
- The content is indexed in the **Verana Trust Resolver**.  

### Find my Shop

Now, Bob’s shop can be found automatically by anyone querying the Trust Resolver:  

**Example query:**  
*“Which services in Bristol, UK present an **E-commerce Retail Credential** from issuers of the **Ecosystem Ecommerce Global Alliance** and sell **baby shoes**?”*

## Conclusion

The **Verifiable Service Directory** and the **Trust Resolver** fundamentally change how discovery works online.  
Instead of being ranked by opaque algorithms or ad budgets, services like Alice’s AI Assistant or Bob’s e-commerce shop are **indexed and searchable through verifiable data**, secured by cryptography and trusted credentials.  

This creates not just better visibility, but a **new kind of decentralized economy**:

- 🌐 Ecosystems issue **credentials** that define trust frameworks.  
- 🙋 Holders attach these credentials to their services to **prove claims**.  
- 🔍 Being **searchable** depends not on marketing spend, but on **verifiable authenticity** within ecosystems.  

With Verana, discovery becomes fair, transparent, and privacy-preserving, shifting the internet from centralized platforms to a **trust-driven, ecosystem-based economy** where value flows back to those who prove and earn it.
