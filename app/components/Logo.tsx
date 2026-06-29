import Link from "next/link";

/** The Verana lockup: bull-horn "V" mark + wordmark. Theme-aware (uses
 *  currentColor for the wordmark; purple for the mark). */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Verana home"
      className={`inline-flex items-center gap-2 ${className}`}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        {/* two strong symmetrical strokes rising from a shared base - the horns */}
        <path
          d="M4 4 L12 20 L20 4"
          stroke="var(--color-primary)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="wordmark text-lg">Verana</span>
    </Link>
  );
}
