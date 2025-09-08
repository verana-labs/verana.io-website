---
title: Service Directory and Search Engine
date: 2025-04-01T00:00:00+02:00
subtitle: "Register your Verifiable Service in a Service Directory, and let users find you. Instantly."
comments: false
bigimg: [{src: "/img/triangle.jpg"}, {src: "/img/sphere.jpg"}, {src: "/img/hexagon.jpg"}]
---

## Service Directory

### What is the Service Directory?

The **Service Directory** is a public database of [DIDs](https://www.w3.org/TR/did-1.0/) maintained within a **Verifiable Public Registry (VPR)**. It allows crawlers and search engines to index metadata associated with **Verifiable Services (VSs)** provided by these DIDs.

Search engines can iterate over the Service Directory and index VSs based on available metadata—such as the **DID Document**, **presented credentials**, and other publicly declared attributes.

The Service Directory is essential for **Verifiable User Agents (VUAs)**, including specialized browsers like **social browsers** or **CDN-enabled browsers**. However, it can also be used by traditional, form-based search engines to return simple links that provide access to Verifiable Services.

Any participant can register a DID in the Service Directory by submitting a transaction to the VPR.

{{< image "/img/diddirindex.svg" "" "max-width: 800px;  margin-top: 0em; margin-bottom: 0.5em; margin-right: 0em; margin-left: 0.5em; " "max-width: 800px; text-align: center; font-style: italic; font-size: smaller; text-indent: 0;  margin-top: 0em; margin-bottom: 0.5em; margin-right: 0em; margin-left: 2.5em; padding: 0em; float: none; " >}}

### Search the Service Directory

Indexer can be run as a container with a locally deployed VPR node for total **unlinkability**. It is then easy to deploy the search engine and provide a fancy familiar prompt:

{{< image "/img/verana-search.png" "" "max-width: 800px;  margin-top: 0em; margin-bottom: 0.5em; margin-right: 0em; margin-left: 0.5em; " "max-width: 800px; text-align: center; font-style: italic; font-size: smaller; text-indent: 0;  margin-top: 0em; margin-bottom: 0.5em; margin-right: 0em; margin-left: 2.5em; padding: 0em; float: none; " >}}

**Great to know**: results are not biased nor manipulable 😀, because **they rely on verifiable data**.
