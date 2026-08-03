"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// Temporary banner: remove after GDC26 (September 3, 2026).
const GDC_URL = "https://globaldigitalcollaboration.org/";

export default function GdcBanner() {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    try {
      setDismissed(localStorage.getItem("verana-gdc26") === "1");
    } catch {
      setDismissed(false);
    }
  }, []);

  if (dismissed) return null;

  return (
    <div className="border-b border-rule bg-surface text-sm">
      {/* GDC brand barcode strip, tiled at half its native 20px height. */}
      <div
        aria-hidden
        className="h-2.5 w-full"
        style={{
          backgroundImage: "url(/images/gdc-barcode.png)",
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
        }}
      />
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-6 py-2 text-muted">
        <span className="text-center">
          Meet Verana at the Global Digital Collaboration conference (GDC26),
          September 1-3, 2026, Palexpo Geneva.{" "}
          <a
            href={GDC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Learn more
          </a>
        </span>
        <button
          type="button"
          aria-label="Dismiss GDC26 announcement"
          onClick={() => {
            setDismissed(true);
            try {
              localStorage.setItem("verana-gdc26", "1");
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
