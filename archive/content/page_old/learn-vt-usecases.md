---
title: Verifiable Trust Use Cases
date: 2025-04-01T00:00:00+02:00
subtitle: "Process for obtaining an ECS Organization Credential and a ECS Service Credential"
comments: false
bigimg: [{src: "/img/triangle.jpg"}, {src: "/img/sphere.jpg"}, {src: "/img/hexagon.jpg"}]
---

The following use cases summarize the concept of Verifiable Trust.

## 🏢 How to Obtain an Organization Credential

### ✅ 1. Obtain a Decentralized Identifier (DID) for your Organization

- Create a **Organization DID** for your organization. You can use any DID method.
- This **Organization DID** must be resolvable to a **DID Document**, which will contains service metadata and linked credentials used to resolve trust.

### ✅ 2. Obtain an Organization Credential (VT-EC-ORG)

You’ll need a **Organization Credential**, issued by an Ecosystem that is providing **Essential Credential Schemas**.

- For the chosen ecosystem, find an **issuer** that is granted issuance of **Organization Credentials** ECS.
- Start a Validation process with the Issuer.

Provide proof of:

- Legal name and registration
- Jurisdiction (country code)
- Organization type (e.g., PRIVATE, FOUNDATION)
- Registry URL and ID
- Address and logo

Additionally:

- prove you own and control the Organization DID

Once verified, you receive an **Organization Credential** issued to your **Organization DID**.

### ✅ 3. Update Your Organization DID Document

- Add a **Linked Verifiable Presentation** to your **Organization Credential**.

### 🚀 Organization Credential Summary Checklist

| Step | Action |
|------|--------|
| 🆔 | Create an Organization DID and its DID Document |
| 🏛️ | Get an Organization Credential from a granted issuer |
| 🔗 | Present Organization Credential in your DID Document |

## 🏢 How to Run a Verifiable Service (VS)

Running a Verifiable Service (VS) means your organization (or you as a Person) can operate a Verifiable Service.

Prerequisite: you must already have an Organization Credential or a Person Credential.

### ✅ 1. Obtain a Decentralized Identifier (DID)

- Create a **Service DID** for your service. You can use any DID method.
- This **Service DID** must be resolvable to a **DID Document**, which will contains service metadata and linked credentials used to resolve trust.

### ✅ 2. Issue a **Service Credential (VT-EC-SERVICE)** to your Service DID.

With the your Organization DID, issue to the DID of your service a Service Credential.

- Credential includes:
  - Service name, description, logo
  - Minimum age required
  - Terms & conditions URL
  - Privacy policy URL

### ✅ 3. Update Your Service DID Document

- Add a **Linked Verifiable Presentation** to your **Service Credential**.

### ✅ 4. Start Accepting Secure Connections

Once your Verifiable Service is set up:

- Other Verifiable Services or User Agents can resolve trust by reading the DID Documents of:
  - your service
  - your organization
  - the issuer of your organization credential

Your service will check your credentials and validate them. If trust resolution passes, they’ll allow a secure connection with your Verifiable Service

### 🚀 Summary Checklist

| Step | Action |
|------|--------|
| 🆔 | Create a Service DID and its DID Document |
| 🛠️ | With your Organization DID, issue a Service Credential to your service |
| 🔗 | Present your service credential in the DID Document of your service |
| 🔍 | Ensure trust resolution works with VPR |
| 🌐 | Go live as a Verifiable Service |

## 🔹 User Experience: Connecting to a Verifiable Service

This is what the flow would feel like to an everyday user:

### 👤 1. User Opens Their VUA (e.g., Hologram, Trusted Wallet App)

- The user has a secure wallet or messaging app that supports Verifiable Trust.
- This app holds their verifiable credentials (e.g., Person Credential) and performs trust resolution in the background.

### 🔗 2. User Clicks a Link or Scans a QR Code

- They receive a connection invitation (e.g., to chat with a service, log in, access content).
- The link points to the DID of a Verifiable Service.

**Behind the scenes:**

- The VUA resolves the DID Document.
- It fetches the linked verifiable presentations from the service (e.g., Service Credential, Org Credential).

### 🔍 3. Trust Resolution Is Performed Automatically

The VUA validates:

- Are the credentials conforming to known ECS schemas?
- Are they issued by authorized issuers in trusted VPRs?
- Do terms, minimum age, and privacy policy match user preferences?

- ✅ If valid: The VUA displays a “Proof of Trust” badge (with icons, names, logos, and country info).
- ❌ If invalid: The user sees a warning and the app blocks the connection.

### 🙋 4. User Reviews the Service Info (Optional)

Before connecting, the app may display:

- ✅ Name of the service
- 🌍 Country of registration
- 🏛️ Organization name & logo
- 📜 Terms of service and privacy policy
- 🔞 Age restrictions

🔒 The user can make an informed decision without relying on branding or gut instinct.

### 🔑 5. User Shares Credentials If Needed

If the service requests a Verifiable Credential (e.g., proof of age, email, or membership):

- The VUA presents prompt the user for a compatible credential.
- The user selects which one to share (or declines).

🛡️ Selective disclosure and proofs without revealing more than needed are supported.

### 💬 6. Connection Established Securely

- A DIDComm connection is established with the service.
- From here, any trusted interaction is possible:
  - Secure chat
  - Video call
  - Credential issuance
  - Digital service access
  - eKYC / login flow, etc.

### 🚀 Summary Flow

1. **Click link / scan QR**
2. **VUA resolves & verifies service**
3. **User sees trust info**
4. **User optionally presents credentials**
5. **Secure session starts**
