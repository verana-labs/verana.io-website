"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Logo from "./Logo";
import { LINKS, SITE_TAGLINE } from "../lib/site";
import { CONSENT_KEY, CONSENT_EVENT } from "./Analytics";

const SOCIALS = [
  { label: "Discord", href: LINKS.discord, icon: faDiscord },
  { label: "LinkedIn", href: LINKS.linkedin, icon: faLinkedinIn },
  { label: "X", href: LINKS.x, icon: faXTwitter },
] as const;

const COLUMNS: { title: string; links: { label: string; href: string; ext?: boolean }[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Sovereign ecosystems", href: "/ecosystems" },
      { label: "Verifiable identity", href: "/identity" },
      { label: "Discovery", href: "/discovery" },
      { label: "Use cases", href: "/use-cases" },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { label: "About", href: "/about" },
      { label: "Integrations", href: "/integrations" },
      { label: "Brand", href: "/brand" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Build on Verana",
    links: [
      { label: "Documentation", href: LINKS.docs, ext: true },
      { label: "Playground", href: LINKS.playground, ext: true },
      { label: "GitHub", href: LINKS.github, ext: true },
      { label: "Verifiable Trust spec", href: LINKS.trustSpec, ext: true },
      { label: "VPR spec", href: LINKS.vprSpec, ext: true },
    ],
  },
  {
    title: "Related",
    links: [
      { label: "Verana Foundation", href: LINKS.foundation, ext: true },
      { label: "Verana Council", href: LINKS.council, ext: true },
      { label: "2060", href: LINKS.company, ext: true },
    ],
  },
];

export default function Footer() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setShowBanner(localStorage.getItem(CONSENT_KEY) === null);
  }, []);

  function setConsent(value: "all" | "essential") {
    try {
      localStorage.setItem(CONSENT_KEY, value);
      // Let the Analytics component pick up the choice without a reload.
      window.dispatchEvent(new Event(CONSENT_EVENT));
    } catch {
      /* ignore */
    }
    setShowBanner(false);
  }

  return (
    <footer className="border-t border-rule bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted">{SITE_TAGLINE}.</p>
            <div className="mt-4 flex items-center gap-4">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-muted transition-colors hover:text-ink"
                >
                  <FontAwesomeIcon icon={s.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="eyebrow mb-3">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.ext ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted hover:text-ink"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="text-sm text-muted hover:text-ink"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-rule pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-4">
            <a
              href={LINKS.foundation}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              © {new Date().getFullYear()} Verana Foundation
            </a>
            <Link href="/privacy" className="hover:text-ink">Privacy</Link>
            <Link href="/terms" className="hover:text-ink">Terms</Link>
            <Link href="/cookies" className="hover:text-ink">Cookies</Link>
            <span>Content CC BY-SA 4.0 · Code Apache-2.0</span>
          </div>
          <p className="max-w-xl">
            Verana is open, public infrastructure owned by no one. Nothing here is
            an offer, solicitation, or investment advice regarding the VNA token.
          </p>
        </div>
      </div>

      {showBanner ? (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          className="card fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-xl p-5 sm:left-auto"
        >
          <p className="text-sm text-ink">
            We use essential cookies to run this site and, with your consent,
            analytics cookies to improve it. We do not sell data. See the{" "}
            <Link href="/privacy" className="text-accent underline">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setConsent("all")}
              className="btn btn-primary px-4 py-2 text-sm"
            >
              Accept all
            </button>
            <button
              type="button"
              onClick={() => setConsent("essential")}
              className="btn btn-ghost px-4 py-2 text-sm"
            >
              Essential only
            </button>
            <Link href="/cookies" className="btn btn-ghost px-4 py-2 text-sm">
              Preferences
            </Link>
          </div>
        </div>
      ) : null}
    </footer>
  );
}
