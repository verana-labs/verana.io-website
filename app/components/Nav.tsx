"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { LINKS } from "../lib/site";

// The three concept pages are a reading sequence (spec-v2 §1); the numbers
// make the progression legible.
const NAV = [
  { href: "/ecosystems", label: "Ecosystems", seq: "1" },
  { href: "/identity", label: "Identity", seq: "2" },
  { href: "/discovery", label: "Discovery", seq: "3" },
  { href: "/use-cases", label: "Use cases" },
  { href: "/software", label: "Software" },
  { href: "/build", label: "Build" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-6">
        <Logo />

        <ul className="ml-6 hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {item.seq ? (
                  <span className="mr-1 font-mono text-[10px] text-accent">
                    {item.seq}
                  </span>
                ) : null}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-3">
          <a
            href={LINKS.docs}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary hidden sm:inline-flex"
          >
            Start building
          </a>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-rule text-muted md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <FontAwesomeIcon icon={open ? faXmark : faBars} className="h-4 w-4" />
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-rule bg-bg md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2 text-sm text-muted hover:bg-surface hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={LINKS.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-2 w-full"
              >
                Start building
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
