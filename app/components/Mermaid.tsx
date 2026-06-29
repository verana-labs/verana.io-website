"use client";

import { useEffect, useId, useRef, useState } from "react";

/**
 * Client-side Mermaid renderer (loaded lazily). Re-renders when the theme
 * changes so diagrams match light/dark. Used for flow diagrams such as the
 * trust-resolution sequence.
 */
export default function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const [svg, setSvg] = useState<string>("");

  useEffect(() => {
    let cancelled = false;

    async function render() {
      const mermaid = (await import("mermaid")).default;
      const theme =
        document.documentElement.getAttribute("data-theme") === "light"
          ? "neutral"
          : "dark";
      mermaid.initialize({
        startOnLoad: false,
        theme,
        securityLevel: "strict",
        fontFamily: "var(--font-mono), monospace",
      });
      try {
        const { svg } = await mermaid.render(`m${id}`, chart);
        if (!cancelled) setSvg(svg);
      } catch {
        if (!cancelled) setSvg("");
      }
    }

    render();

    const obs = new MutationObserver(() => render());
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      cancelled = true;
      obs.disconnect();
    };
  }, [chart, id]);

  return (
    <div
      ref={ref}
      className="mermaid-host overflow-x-auto"
      // mermaid output is sanitized (securityLevel: strict)
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
