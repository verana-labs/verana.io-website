"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const current =
      (document.documentElement.getAttribute("data-theme") as Theme) || "dark";
    setTheme(current);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("verana-theme", next);
    } catch {
      /* ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light or dark theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-rule text-muted hover:text-ink hover:border-primary transition-colors"
    >
      {mounted && theme === "dark" ? (
        <FontAwesomeIcon icon={faSun} className="h-4 w-4" aria-hidden />
      ) : (
        <FontAwesomeIcon icon={faMoon} className="h-4 w-4" aria-hidden />
      )}
    </button>
  );
}
