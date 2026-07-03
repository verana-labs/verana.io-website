"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Progressive enhancement: reveals elements with the `.reveal` or
 * `.reveal-stagger` class as they scroll into view (same pattern as the
 * sister sites). Mounted once in the layout; re-runs on every route change so
 * client-side navigations still observe the new page's elements.
 *
 * No-op (content stays visible) when IntersectionObserver is unavailable or
 * the user prefers reduced motion.
 */
export default function Reveal() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-stagger")
    );
    if (els.length === 0) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    els.forEach((el) => {
      // Re-arm any element that a previous route left marked visible.
      el.classList.remove("is-visible");
      io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
