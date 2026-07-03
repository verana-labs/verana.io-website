import Link from "next/link";

/** The Verana lockup: the real brand mark (purple gradient tile + white
 *  bull-horn "V", from the press kit) + theme-aware wordmark. */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Verana home"
      className={`inline-flex items-center gap-2 ${className}`}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <defs>
          <linearGradient
            id="verana-mark-gradient"
            x1="0"
            y1="0"
            x2="64"
            y2="64"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#763EF0" />
            <stop offset="100%" stopColor="#9F7AEA" />
          </linearGradient>
        </defs>
        <rect width="64" height="64" rx="12" fill="url(#verana-mark-gradient)" />
        {/* bull-horn V, from the brand mark (viewBox 54x52, centered) */}
        <g transform="translate(12.3 13.1) scale(0.7407)">
          <path
            d="M26.9932 51.6972L5.805 11.0977L2.91263 16.2161L0 10.6048L5.98725 0L26.9932 40.2483L47.9993 0L54 10.6217L51.0773 16.2161L48.1849 11.0977L26.9932 51.6972Z"
            fill="white"
          />
          <path d="M13.696 0L26.9935 25.4637L39.9367 0H13.696Z" fill="white" />
        </g>
      </svg>
      <span className="wordmark text-lg">Verana</span>
    </Link>
  );
}
