---
title: Trust Engine
subtitle: "Verana is public digital infrastructure that delivers trust you can verify. Its Trust Engine powers fair, transparent, and decentralized interactions."
hero_icon: "fa-solid fa-gears"
disable_content_wrapper: true
components_section:
  id: trust-components
  section_class: "bg-black py-20 lg:py-32"
  title:
    text: Three Pillars of Trust
  subtitle:
    text: "The Trust Engine operates through three interconnected components that create a comprehensive trust ecosystem."
  components:
    - id: trust-resolver-section
      card_side: left
      card:
        wrapper_class: "bg-black border border-gray-700 rounded-2xl p-8 relative overflow-hidden"
        overlay_class: "bg-gradient-to-br from-yellow-500/10 to-transparent"
        header:
          badge:
            wrapper_class: "w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center"
            icon: "fa-solid fa-book"
            icon_class: "text-yellow-400 text-xl"
            text: Directory
            text_class: "text-yellow-400 font-semibold"
          status:
            text: Live
            wrapper_class: "text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded-full"
        items:
          - wrapper_class: "bg-gray-800/50 rounded-lg p-4 border border-gray-600"
            left:
              icon: "fa-solid fa-shield-check"
              icon_class: "text-green-400 text-sm"
              icon_wrapper_class: "w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center"
              title:
                text: Healthcare Provider
              subtitle:
                text: "Licensed • Verified • Active"
            right:
              text: "✓ Verified"
              class: "text-green-400 text-sm"
          - wrapper_class: "bg-gray-800/50 rounded-lg p-4 border border-gray-600"
            left:
              icon: "fa-solid fa-graduation-cap"
              icon_class: "text-blue-400 text-sm"
              icon_wrapper_class: "w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center"
              title:
                text: Education Institute
              subtitle:
                text: "Accredited • ISO Certified"
            right:
              text: "✓ Verified"
              class: "text-blue-400 text-sm"
          - wrapper_class: "bg-gray-800/50 rounded-lg p-4 border border-gray-600"
            left:
              icon: "fa-solid fa-building"
              icon_class: "text-purple-400 text-sm"
              icon_wrapper_class: "w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center"
              title:
                text: Financial Service
              subtitle:
                text: "Regulated • Compliant"
            right:
              text: "✓ Verified"
              class: "text-purple-400 text-sm"
        footnote:
          wrapper_class: "mt-6 flex items-center space-x-2 text-sm text-gray-400"
          icon: "fa-solid fa-info-circle"
          text: Results from provable credentials only
      badge:
        wrapper_class: "w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center"
        icon: "fa-solid fa-book"
        icon_class: "text-yellow-400 text-xl"
        text: Directory & Resolver
        text_class: "text-yellow-400 font-semibold uppercase tracking-wide"
      title:
        text: "Verifiable Service Directory & Trust Resolver"
      tagline:
        text: "A **yellow pages of verifiable data**."
        class: "text-2xl text-yellow-100 mb-6 font-medium"
      description:
        text: "Search results come only from **provable credentials**, not hidden algorithms, shifting value from ads to **authentic and verifiable trust**."
        class: "text-xl text-gray-300 mb-8 leading-relaxed"
      bullets:
        - icon: "fa-solid fa-check-circle"
          icon_class: "text-yellow-400"
          text: Credential-based search and discovery
        - icon: "fa-solid fa-check-circle"
          icon_class: "text-yellow-400"
          text: No hidden algorithms or paid placement
        - icon: "fa-solid fa-check-circle"
          icon_class: "text-yellow-400"
          text: Real-time verification and validation
      cta:
        href: "/page/trust-engine/trust-resolver"
        class: "bg-yellow-500 hover:bg-yellow-600 text-black"
        text: Learn more
        icon: "fa-solid fa-arrow-right"
    - id: trust-deposit-section
      card_side: right
      card:
        wrapper_class: "bg-black border border-gray-700 rounded-2xl p-8 relative overflow-hidden"
        overlay_class: "bg-gradient-to-br from-green-500/10 to-transparent"
        header:
          badge:
            wrapper_class: "w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center"
            icon: "fa-solid fa-coins"
            icon_class: "text-green-400 text-xl"
            text: Trust Deposits
            text_class: "text-green-400 font-semibold"
          status:
            text: Active
            wrapper_class: "text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded-full"
        items:
          - wrapper_class: "bg-gray-800/50 rounded-lg p-4 border border-gray-600"
            left:
              title:
                text: Healthcare Provider
              subtitle:
                text: "+2.5K VTK"
                class: "text-green-400 font-semibold"
            progress:
              track_class: "bg-gray-700"
              fill_class: "bg-green-400"
              width_class: "w-4/5 animate-pulse"
              label:
                text: Growing with activity
          - wrapper_class: "bg-gray-800/50 rounded-lg p-4 border border-gray-600"
            left:
              title:
                text: Education Institute
              subtitle:
                text: "+1.8K VTK"
                class: "text-green-400 font-semibold"
            progress:
              track_class: "bg-gray-700"
              fill_class: "bg-green-400"
              width_class: "w-3/5 animate-pulse"
              label:
                text: Steady growth
          - wrapper_class: "bg-gray-800/50 rounded-lg p-4 border border-red-600/30"
            left:
              title:
                text: Service Provider
              subtitle:
                text: "-500 VTK"
                class: "text-red-400 font-semibold"
            progress:
              track_class: "bg-gray-700"
              fill_class: "bg-red-400"
              width_class: "w-1/5"
              label:
                text: Slashed for violation
                class: "text-red-400"
        footnote:
          wrapper_class: "mt-6 p-3 bg-green-500/10 rounded-lg border border-green-500/20"
          icon: "fa-solid fa-chart-line"
          text_class: "text-sm text-green-400"
          text: "Total network deposits: 1.2M VTK (+12% this month)"
      badge:
        wrapper_class: "w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center"
        icon: "fa-solid fa-piggy-bank"
        icon_class: "text-green-400 text-xl"
        text: Deposit
        text_class: "text-green-400 font-semibold uppercase tracking-wide"
      title:
        text: Trust Deposit
      tagline:
        text: "A **stake** that grows with activity."
        class: "text-2xl text-green-100 mb-6 font-medium"
      description:
        text: "It rewards commitment, deters fraud, and keeps governance **self-enforcing**."
      bullets:
        - icon: "fa-solid fa-check-circle"
          icon_class: "text-green-400"
          text: Economic incentives for honest behavior
        - icon: "fa-solid fa-check-circle"
          icon_class: "text-green-400"
          text: Automatic slashing for malicious activity
        - icon: "fa-solid fa-check-circle"
          icon_class: "text-green-400"
          text: Deposit grows with positive engagement
      cta:
        href: "/page/trust-engine/trust-deposit"
        class: "bg-green-500 hover:bg-green-600 text-black"
        text: Learn more
        icon: "fa-solid fa-arrow-right"
      text_wrapper_class: "lg:order-2"
    - id: trust-reputation-section
      card_side: left
      card:
        wrapper_class: "bg-black border border-gray-700 rounded-2xl p-8 relative overflow-hidden"
        overlay_class: "bg-gradient-to-br from-blue-500/10 to-transparent"
        header:
          badge:
            wrapper_class: "w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center"
            icon: "fa-solid fa-star"
            icon_class: "text-blue-400 text-xl"
            text: Reputation Scores
            text_class: "text-blue-400 font-semibold"
          status:
            text: Real-time
            wrapper_class: "text-xs text-gray-400 bg-gray-800 px-3 py-1 rounded-full"
        items:
          - wrapper_class: "bg-gray-800/50 rounded-lg p-4 border border-gray-600"
            header_class: "items-start"
            left:
              title:
                text: Dr. Sarah Chen
              subtitle:
                text: Healthcare Provider
            right:
              class: "text-right"
              html: "<div class=\"text-2xl font-bold text-blue-400\">98</div><div class=\"text-xs text-gray-400\">Trust Score</div>"
            meta:
              wrapper_class: "flex items-center space-x-4 text-xs"
              items:
                - icon_class: "bg-green-400"
                  text: "5K+ Deposits"
                - icon_class: "bg-blue-400"
                  text: "2Y Activity"
                - icon_class: "bg-purple-400"
                  text: "Clean Record"
          - wrapper_class: "bg-gray-800/50 rounded-lg p-4 border border-gray-600"
            header_class: "items-start"
            left:
              title:
                text: TechEdu Institute
              subtitle:
                text: Education Provider
            right:
              class: "text-right"
              html: "<div class=\"text-2xl font-bold text-blue-400\">92</div><div class=\"text-xs text-gray-400\">Trust Score</div>"
            meta:
              wrapper_class: "flex items-center space-x-4 text-xs"
              items:
                - icon_class: "bg-green-400"
                  text: "3K+ Deposits"
                - icon_class: "bg-blue-400"
                  text: "1.5Y Activity"
                - icon_class: "bg-purple-400"
                  text: "Clean Record"
          - wrapper_class: "bg-gray-800/50 rounded-lg p-4 border border-yellow-600/30"
            header_class: "items-start"
            left:
              title:
                text: QuickCert Services
              subtitle:
                text: Certification Body
            right:
              class: "text-right"
              html: "<div class=\"text-2xl font-bold text-yellow-400\">67</div><div class=\"text-xs text-gray-400\">Trust Score</div>"
            meta:
              wrapper_class: "flex items-center space-x-4 text-xs"
              items:
                - icon_class: "bg-yellow-400"
                  text: "1K Deposits"
                - icon_class: "bg-yellow-400"
                  text: "6M Activity"
                - icon_class: "bg-red-400"
                  text: "1 Violation"
        footnote:
          wrapper_class: "mt-6 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20"
          icon: "fa-solid fa-calculator"
          text_class: "text-sm text-blue-400"
          text: Scores calculated from deposits + activity + governance history
      badge:
        wrapper_class: "w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center"
        icon: "fa-solid fa-star"
        icon_class: "text-blue-400 text-xl"
        text: Reputation
        text_class: "text-blue-400 font-semibold uppercase tracking-wide"
      title:
        text: Trust Reputation
      tagline:
        text: "A **verifiable score of credibility**."
        class: "text-2xl text-blue-100 mb-6 font-medium"
      description:
        text: "Built from deposits, activity, and governance history, it helps anyone know **who to trust**."
      bullets:
        - icon: "fa-solid fa-check-circle"
          icon_class: "text-blue-400"
          text: Transparent calculation methodology
        - icon: "fa-solid fa-check-circle"
          icon_class: "text-blue-400"
          text: Historical governance participation
        - icon: "fa-solid fa-check-circle"
          icon_class: "text-blue-400"
          text: Real-time score updates
      cta:
        href: "/page/trust-engine/trust-reputation"
        class: "bg-blue-500 hover:bg-blue-600 text-white"
        text: Learn more
        icon: "fa-solid fa-arrow-right"
---

{{< trust-components >}}
