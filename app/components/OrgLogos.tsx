/** The sister sites' exact logo lockups: the bull-horn V mark + wordmark,
 *  with each site's own coloring (Foundation: purple V + green inner,
 *  "Foundation" in purple; Council: monochrome ink). Shared by /about and
 *  the home Governance section. */
export function FoundationLogo() {
  return (
    <span
      className="flex items-center gap-2.5 text-xl font-semibold text-ink"
      style={{ letterSpacing: "-0.02em" }}
    >
      <svg width="22" height="22" viewBox="0 0 54 52" aria-hidden="true">
        <path
          fill="#763EF0"
          d="M26.9932 51.6972L5.805 11.0977L2.91263 16.2161L0 10.6048L5.98725 0L26.9932 40.2483L47.9993 0L54 10.6217L51.0773 16.2161L48.1849 11.0977L26.9932 51.6972Z"
        />
        <path fill="#1FB57A" d="M13.696 0L26.9935 25.4637L39.9367 0H13.696Z" />
      </svg>
      <span>
        Verana<span style={{ color: "#763EF0" }}>Foundation</span>
      </span>
    </span>
  );
}

export function CouncilLogo() {
  return (
    <span
      className="flex items-center gap-2.5 text-xl font-semibold text-ink"
      style={{ letterSpacing: "-0.02em" }}
    >
      <svg width="22" height="22" viewBox="0 0 54 52" aria-hidden="true">
        <path
          fill="var(--color-ink)"
          d="M26.9932 51.6972L5.805 11.0977L2.91263 16.2161L0 10.6048L5.98725 0L26.9932 40.2483L47.9993 0L54 10.6217L51.0773 16.2161L48.1849 11.0977L26.9932 51.6972Z"
        />
        <path fill="var(--color-ink)" d="M13.696 0L26.9935 25.4637L39.9367 0H13.696Z" />
      </svg>
      <span>
        Verana<span>Council</span>
      </span>
    </span>
  );
}
