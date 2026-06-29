"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    try {
      setDismissed(localStorage.getItem("verana-annc") === "1");
    } catch {
      setDismissed(false);
    }
  }, []);

  if (dismissed) return null;

  return (
    <div className="border-b border-rule bg-surface text-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-6 py-2 text-muted">
        <span className="text-center">
          Verana testnet is live. Mainnet targeted Q1 2027.{" "}
          <Link href="/network" className="text-accent hover:underline">
            Network status
          </Link>
        </span>
        <button
          type="button"
          aria-label="Dismiss announcement"
          onClick={() => {
            setDismissed(true);
            try {
              localStorage.setItem("verana-annc", "1");
            } catch {
              /* ignore */
            }
          }}
          className="ml-auto shrink-0 text-muted hover:text-ink"
        >
          <X size={15} aria-hidden />
        </button>
      </div>
    </div>
  );
}
