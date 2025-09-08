---
title: Demos
date: 2025-04-01T00:00:00+02:00
weight: 15
subtitle: Verifiable Trust in action
comments: false
bigimg: [{src: "/img/triangle.jpg"}, {src: "/img/sphere.jpg"}, {src: "/img/hexagon.jpg"}]
---

## Verifiable Trust in action

### Hologram Messaging

{{< image "/img/hologram-qr.png" "" "max-width: 400px; border: 1px solid #DDDDDD; margin-top: 0em; margin-bottom: 0.5em; margin-right: 0em; margin-left: 0.5em;" "text-align: center; font-style: italic; font-size: smaller; text-indent: 0;  margin-top: 0em; margin-bottom: 0.5em; margin-right: 0em; margin-left: 2.5em; padding: 0em; float: right; " >}}

For these demonstrations, we'll begin by downloading [Hologram Messaging](https://hologram.zone), a private messaging mobile application that functions as a **Verifiable User Agent (VUA)**.

You can find the app on your device's app store or scan the QR code provided to get started.

**Hologram** is similar to Signal but is built on the **DIDComm protocol**, offering the following features:

- **Peer-to-Peer Communication**  
  Enables direct messaging with the exchange of Verifiable Credentials for authenticating peers.

- **Comprehensive Media Support**  
  Supports chat, media sharing, voice notes, audio calls, and video calls.

- **Decentralized Chatbot Services**  
  Connect to any DIDComm-based chatbot seamlessly.

- **Verifiable Credential Wallet**  
  Receive, store, and present Verifiable Credentials to third parties, all within the app.

- **Proof-of-Trust for Services**  
  Users can verify they are connecting to your authentic service—not a spoof or imitation.

### Decentralized Verifiable Chatbots

You can build **Verifiable Service Chatbots** using our open-source templates, which offer the following key features:

- **Self-Hosted Deployment**  
  Deploy your Verifiable Services in your own infrastructure with full autonomy—no contracts or dependencies on third-party providers.

- **Proof-of-Trust for Users**  
  Give users confidence that they are interacting with your genuine service, not a fraudulent copy.

- **Secure, Verifiable Communication**  
  Establish end-to-end encrypted, persistent communication channels that are cryptographically verifiable.

- **Credential Exchange**  
  Issue Verifiable Credentials or request their presentation from users as part of the service flow.

- **Real-Time Communication**  
  Enable secure audio and video calls via integrated WebRTC support.

- **Biometric Verification**  
  Support facial matching using 2060.io's NIST-listed, open-source facial recognition algorithm.

#### Demo #1: Get Issued a Demo Identity Verifiable Credential from Your Passport

Open the [GovID ISSUER demo QR code](https://dm.gov-id-issuer.demos.2060.io/invitation) and scan it using the **Hologram Messaging App**.

1. You’ll first see a **Proof-of-Trust**, allowing you to verify the identity of the **service provider** before proceeding.
2. Accept the connection and follow the instructions to generate your **Identity Credential**.
   > 🔒 *Note: This demo reads your Passport or ID Card via NFC, but no personal data is stored on our servers. The data is processed only to generate the credential and is never retained.*
3. Perform a **liveness check with facial matching** to prove that you are the same person represented in the identity document.
4. Receive and store your **GovID demo credential** securely in the Hologram app.

{{< image "/img/govid-1.jpeg" "Proof-of-Trust" "max-width: 200px; border: 1px solid #DDDDDD; margin-top: 0em; margin-bottom: 0.0em; margin-right: 0em; margin-left: 0.0em;" "text-align: center; font-style: italic; font-size: smaller; text-indent: 0;  margin-top: 1em; margin-bottom: 1em; margin-right: 0.5em; margin-left: 0.5em; padding: 0em; float: left; " >}}

{{< image "/img/govid-2.jpeg" "Step #1" "max-width: 200px; border: 1px solid #DDDDDD; margin-top: 0em; margin-bottom: 0.0em; margin-right: 0em; margin-left: 0.0em;" "text-align: center; font-style: italic; font-size: smaller; text-indent: 0;  margin-top: 1em; margin-bottom: 1em; margin-right: 0.5em; margin-left: 0.5em; padding: 0em; float: left; " >}}

{{< image "/img/govid-3.jpg" "Step #2" "max-width: 200px; border: 1px solid #DDDDDD; margin-top: 0em; margin-bottom: 0.0em; margin-right: 0em; margin-left: 0.0em;" "text-align: center; font-style: italic; font-size: smaller; text-indent: 0;  margin-top: 1em; margin-bottom: 1em; margin-right: 0.5em; margin-left: 0.5em; padding: 0em; float: left; " >}}

{{< image "/img/govid-4.jpeg" "Step #3" "max-width: 200px; border: 1px solid #DDDDDD; margin-top: 0em; margin-bottom: 0.0em; margin-right: 0em; margin-left: 0.0em;" "text-align: center; font-style: italic; font-size: smaller; text-indent: 0;  margin-top: 1em; margin-bottom: 1em; margin-right: 0.5em; margin-left: 0.5em; padding: 0em; float: left; " >}}

{{< image "/img/govid-5.png" "Step #4" "max-width: 200px; border: 1px solid #DDDDDD; margin-top: 0em; margin-bottom: 0.0em; margin-right: 0em; margin-left: 0.0em;" "text-align: center; font-style: italic; font-size: smaller; text-indent: 0;  margin-top: 1em; margin-bottom: 1em; margin-right: 0.5em; margin-left: 0.5em; padding: 0em; float: left; " >}}

{{< image "/img/govid-6.jpeg" "Step #5" "max-width: 200px; border: 1px solid #DDDDDD; margin-top: 0em; margin-bottom: 0.0em; margin-right: 0em; margin-left: 0.0em;" "text-align: center; font-style: italic; font-size: smaller; text-indent: 0;  margin-top: 1em; margin-bottom: 1em; margin-right: 0.5em; margin-left: 0.5em; padding: 0em; float: left; " >}}

{{< image "/img/govid-7.jpeg" "Step #6" "max-width: 200px; border: 1px solid #DDDDDD; margin-top: 0em; margin-bottom: 0.0em; margin-right: 0em; margin-left: 0.0em;" "text-align: center; font-style: italic; font-size: smaller; text-indent: 0;  margin-top: 1em; margin-bottom: 1em; margin-right: 0.5em; margin-left: 0.5em; padding: 0em; float: left; " >}}

{{< image "/img/govid-8.jpeg" "Step #7" "max-width: 200px; border: 1px solid #DDDDDD; margin-top: 0em; margin-bottom: 0.0em; margin-right: 0em; margin-left: 0.0em;" "text-align: center; font-style: italic; font-size: smaller; text-indent: 0;  margin-top: 1em; margin-bottom: 1em; margin-right: 0.5em; margin-left: 0.5em; padding: 0em; float: left; " >}}



{{< clear-float >}}

#### Demo #2: Present Your Demo Credential to Authenticate on a Verifiable Service

With your computer, open the [GovID VERIFIER demo](https://gov-id-verifier.demos.2060.io/). A QR code is shown: scan it using the **Hologram Messaging App**.

1. You'll again see a **Proof-of-Trust**, verifying the identity of the **service provider** of the Verifiable Service requesting your credential.
2. Select the credential you wish to present, then click **"Present"**.
3. The credential will be securely sent to the Verifiable Service.
4. Your verified information will appear on the demo website for confirmation.

{{< image "/img/unic-presentation.png" "Credential Presentation." "max-width: 600px; border: 1px solid #DDDDDD; margin-top: 0em; margin-bottom: 0.0em; margin-right: 0em; margin-left: 0.0em;" "text-align: center; font-style: italic; font-size: smaller; text-indent: 0;  margin-top: 1em; margin-bottom: 1em; margin-right: 0.5em; margin-left: 0.5em; padding: 0em; float: left; " >}}

{{< clear-float >}}
