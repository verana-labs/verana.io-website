import Link from "next/link";
import Logo from "./Logo";
import { LINKS, SITE_TAGLINE } from "../lib/site";

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
      { label: "Governance", href: "/governance" },
      { label: "Brand", href: "/brand" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Build on Verana",
    links: [
      { label: "Documentation", href: LINKS.docs, ext: true },
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
  return (
    <footer className="border-t border-rule bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted">{SITE_TAGLINE}.</p>
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
    </footer>
  );
}
