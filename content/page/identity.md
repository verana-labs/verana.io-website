---
title: Visual Identity
subtitle: "Official Verana brand assets, guidelines, and developer tokens"
url: "/page/identity"
meta_title: "Verana Visual Identity | Logos, Fonts, and Brand Guidelines"
meta_description: "Official Verana brand assets, colors, typography, and logo downloads. Access the Verana Press Kit for partners, media, and developers."
disable_content_wrapper: true
hero_icon: "fa-solid fa-palette"
brand_overview:
  title: Brand Overview
  intro: "Verana's visual identity communicates **trust, openness, and sovereignty** — the core values behind the Open Trust Layer for the Internet."
  cards:
    - icon: fa-solid fa-signature
      icon_bg: bg-verana/20
      icon_color: text-verana
      title: Name
      text: Verana
    - icon: fa-solid fa-tag
      icon_bg: bg-verana/20
      icon_color: text-verana
      title: Descriptor
      text: The Open Trust Layer for the Internet
    - icon: fa-solid fa-bullseye
      icon_bg: bg-verana/20
      icon_color: text-verana
      title: Purpose
      text: Empower ecosystems to build sovereign, verifiable trust networks they fully control
  info_banner:
    icon: fa-solid fa-info-circle
    text: "For press or media inquiries, send email to press at verana dot io or reach our <span class=\"text-verana font-medium inline-flex items-center space-x-2\"><i class=\"fa-brands fa-linkedin\"></i><a href=\"https://www.linkedin.com/company/verana-foundation/\" class=\"hover:text-verana-light\">LinkedIn</a></span>"
logos:
  title: Logos
  intro: "The “V” can be seen as the horns of a bull: two strong, symmetrical lines rising upward from a shared base, embodying power, balance, and determination."
  assets:
    - image:
        src: "/logo.svg"
        alt: "Verana primary logo"
        class: "h-20"
      title: Primary Logo
      description: Full wordmark with icon
      button_label: Download SVG
      button_url: "/logo.svg"
    - image:
        src: "/images/purple/logo.svg"
        alt: 'Verana "V" icon logo'
        class: "h-20"
      title: '"V" Only Logo'
      description: Icon mark for compact usage
      button_label: Download SVG
      button_url: "/images/purple/logo.svg"
  usage_rules:
    - icon: fa-solid fa-expand-arrows-alt
      title: Clear Space
      text: Maintain clear space equal to the height of the “V” mark
    - icon: fa-solid fa-ruler
      title: Minimum Size
      text: 24px (digital), 8mm (print)
    - icon: fa-solid fa-ban
      icon_color: text-red-400
      title: Restrictions
      text: Do not recolor, skew, or apply effects
colors:
  title: Colors
  intro: "Verana’s color system blends innovation and credibility — purple anchors the palette, supported by neutral and accent tones used across the product and brand."
  swatches:
    - role: Primary
      name: Verana Purple
      hex: "#763EF0"
      usage: Buttons, key highlights, active states
      text_class: text-white
    - role: Primary Light
      name: Verana Light
      hex: "#9F7AEA"
      usage: Gradients, hover states, backgrounds
      text_class: text-white
    - role: Primary Dark
      name: Verana Dark
      hex: "#553C9A"
      usage: Outline accents, gradients, typography emphasis
      text_class: text-white
    - role: Background
      name: Ink Black
      hex: "#0B0B12"
      usage: Page backgrounds
      text_class: text-white
    - role: Surface
      name: Graphite
      hex: "#151824"
      usage: Cards, panels, overlays
      text_class: text-white
    - role: Accent
      name: Electric Blue
      hex: "#2E6BE6"
      usage: Secondary CTAs, links
      text_class: text-white
    - role: Success
      name: Signal Green
      hex: "#29C68C"
      usage: Verification states, positive alerts
      text_class: text-white
    - role: Neutral
      name: Slate 70
      hex: "#8B94A5"
      usage: Secondary text, dividers
      text_class: text-white
    - role: Neutral
      name: Slate 20
      hex: "#D7DBE2"
      usage: Borders, subtle surfaces
      text_class: text-gray-900
      border_class: border border-gray-300
    - role: Base
      name: White
      hex: "#FFFFFF"
      usage: Text on dark backgrounds, highlights
      text_class: text-gray-900
      border_class: border border-gray-300
  note: "These colors are tokenized in CSS variables used across verana.io and documentation."
typography:
  title: Typography
  intro: "Inter powers our headlines, UI, and body copy, while IBM Plex Mono supports code and structured data."
  families:
    - sample: Aa
      family: Inter
      usage: Headlines & interface copy
      weights: "500, 600, 700"
      css_class: font-semibold
    - sample: Aa
      family: Inter
      usage: Body text & long-form content
      weights: "400"
      css_class: font-normal
    - sample: Aa
      family: IBM Plex Mono
      usage: Code snippets & tabular data
      weights: "400, 500"
      css_class: font-mono
  guidelines:
    - title: Headings & Body
      items:
        - label: Headings
          description: Inter Semibold 24–48 px
        - label: Body
          description: Inter Regular 16–18 px, 1.6 line height
        - label: UI Labels
          description: Inter Medium 14 px
    - title: Code & Data
      items:
        - label: Code Snippets
          description: IBM Plex Mono 14–16 px
        - label: Numeric Data
          description: IBM Plex Mono Medium 14 px
iconography:
  title: Iconography
  intro: "Verana’s icons are **minimal, outlined, and geometric**, symbolizing trust and transparency."
  highlights:
    - icon: fa-solid fa-shield-alt
      text: Trust & Security
    - icon: fa-solid fa-network-wired
      text: Networks
    - icon: fa-solid fa-certificate
      text: Credentials
    - icon: fa-solid fa-check
      icon_color: text-verana
      border_color: border-verana
      text: Active State
  guidelines:
    - icon: fa-solid fa-circle
      title: Style
      text: Rounded corners and consistent stroke weight
    - icon: fa-solid fa-palette
      title: Colors
      text: Neutral by default; Verana Purple for active states
    - icon: fa-solid fa-ban
      icon_color: text-red-400
      title: Avoid
      text: Gradients, drop shadows, or dense fills
developer_tokens:
  title: Developer Tokens
  intro: "CSS variables for consistent implementation across Verana projects and partner integrations."
  code_title: CSS Custom Properties
  code_button_label: Copy
  code_button_icon: fa-solid fa-copy
  code: |
    :root {
      --color-primary: #763EF0;
      --color-primary-light: #9F7AEA;
      --color-primary-dark: #553C9A;
      --color-accent: #2E6BE6;
      --color-success: #29C68C;
      --color-bg: #0B0B12;
      --color-surface: #151824;
      --color-surface-muted: #1F2331;
      --color-neutral-70: #8B94A5;
      --color-neutral-20: #D7DBE2;
      --color-text: #FFFFFF;
      --color-text-muted: #8B94A5;
      --color-border: #D7DBE2;
      --radius-lg: 16px;
      --radius-md: 12px;
      --radius-sm: 8px;
      --focus-ring: 0 0 0 3px color-mix(in srgb, var(--color-primary) 35%, transparent);
    }
related:
  download_title: Download Press Kit
  description: "Get the complete Verana brand package including logos, colors, typography specimens, and usage guidelines."
  primary_button:
    label: Download Press Kit
    url: "/verana-press-kit.zip"
    icon: fa-solid fa-download
    badge: 4.5 kB
  stats:
    - value: "2"
      label: Logo Variations
    - value: "10"
      label: Brand Colors
    - value: "2"
      label: Typography Systems
---

{{< identity-page >}}