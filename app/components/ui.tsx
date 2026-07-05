import Link from "next/link";

/** Centered max-width container. */
export function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>
  );
}

/** Vertical section rhythm. */
export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      {children}
    </section>
  );
}

/** Mono eyebrow label. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow mb-4">{children}</p>;
}

/** Section heading block. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "text-center mx-auto max-w-2xl" : "max-w-3xl"}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="display text-3xl sm:text-4xl text-ink">{title}</h2>
      {intro ? (
        <p className="mt-4 text-lg text-muted leading-relaxed">{intro}</p>
      ) : null}
    </div>
  );
}

/** Primary / ghost call-to-action button (internal or external). */
export function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
}) {
  const cls = `btn ${variant === "primary" ? "btn-primary" : "btn-ghost"}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** Mono status chip. */
export function Chip({
  children,
  verified = false,
}: {
  children: React.ReactNode;
  verified?: boolean;
}) {
  return (
    <span className={`chip ${verified ? "chip-verified" : ""}`}>{children}</span>
  );
}
