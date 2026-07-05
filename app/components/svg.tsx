import { faCoins, faCircleCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import Glyph from "./Glyph";

// Shared SVG primitives for the site's diagrams (one recipe, many diagrams).

/** Mono label pill on a surface-colored capsule. */
export function Pill({
  label,
  x,
  y,
  color,
}: {
  label: string;
  x: number;
  y: number;
  color: string;
}) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        x={-(label.length * 3.1 + 6)}
        y={-9}
        width={label.length * 6.2 + 12}
        height={18}
        rx={9}
        fill="var(--color-surface)"
        stroke={color}
        strokeOpacity={0.5}
      />
      <text
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={9.5}
        fontFamily="var(--font-mono)"
        fill="var(--color-ink)"
      >
        {label}
      </text>
    </g>
  );
}

/** Numbered step marker keyed to the prose steps beside a scene. */
export function StepBadge({ n, x, y }: { n: number; x: number; y: number }) {
  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={8.5}
        fill="var(--color-surface)"
        stroke="var(--color-accent)"
        strokeWidth={1.5}
      />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={9.5}
        fontFamily="var(--font-mono)"
        fill="var(--color-accent)"
      >
        {n}
      </text>
    </g>
  );
}

export type BadgeKind = "coin" | "check" | "excluded";

const BADGE_STYLE: Record<
  BadgeKind,
  { icon: typeof faCoins; stroke: string; glyph: string }
> = {
  coin: {
    icon: faCoins,
    stroke: "var(--color-success)",
    glyph: "var(--color-success-ink)",
  },
  check: {
    icon: faCircleCheck,
    stroke: "var(--color-success)",
    glyph: "var(--color-success-ink)",
  },
  excluded: {
    icon: faXmark,
    stroke: "var(--color-muted)",
    glyph: "var(--color-muted)",
  },
};

/** Small state badge (coin = fee recipient, check = verified, x = excluded). */
export function Badge({ x, y, kind }: { x: number; y: number; kind: BadgeKind }) {
  const s = BADGE_STYLE[kind];
  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={7.5}
        fill="var(--color-surface)"
        stroke={s.stroke}
        strokeWidth={1.25}
      />
      <Glyph icon={s.icon} cx={x} cy={y} size={8} color={s.glyph} />
    </g>
  );
}
