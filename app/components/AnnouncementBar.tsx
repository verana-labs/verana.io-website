"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
          Verana testnet is live. Mainnet targeted Q1 2027.
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
          <FontAwesomeIcon icon={faXmark} className="h-3.5 w-3.5" aria-hidden />
        </button>
      </div>
    </div>
  );
}
