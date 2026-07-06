import { faUser, faServer, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Glyph from "./Glyph";
import { Badge } from "./svg";

// The home "What Verana solves" before/after strip: the same connection
// twice, once blind (unknown operator, "?") and once verify-first (operator
// proven, check). Two nodes per panel on purpose: this is the one diagram a
// non-technical visitor must be able to read without a legend.

const INK = "var(--color-ink)";
const MUTED = "var(--color-muted)";
const SURFACE = "var(--color-surface)";
const ACCENT = "var(--color-accent)";
const SUCCESS = "var(--color-success)";
const PERSON = "var(--color-success-ink)";

function ActorNode({
  x,
  y,
  icon,
  color,
  label,
  sub,
  dashed,
}: {
  x: number;
  y: number;
  icon: typeof faUser;
  color: string;
  label: string;
  sub: string;
  dashed?: boolean;
}) {
  const r = 15;
  const stroke = dashed ? MUTED : color;
  return (
    <g>
      <circle cx={x} cy={y} r={r + 4} fill={stroke} opacity={0.12} />
      <circle
        cx={x}
        cy={y}
        r={r}
        fill={SURFACE}
        stroke={stroke}
        strokeWidth={1.5}
        strokeDasharray={dashed ? "3 3" : undefined}
      />
      <g opacity={dashed ? 0.55 : 1}>
        <Glyph icon={icon} cx={x} cy={y} size={11} color={stroke} />
      </g>
      <text
        x={x}
        y={y + r + 13}
        textAnchor="middle"
        fontSize={9.5}
        fontWeight={600}
        fontFamily="var(--font-mono)"
        fill={INK}
        stroke={SURFACE}
        strokeWidth={3}
        paintOrder="stroke"
      >
        {label}
      </text>
      <text
        x={x}
        y={y + r + 24}
        textAnchor="middle"
        fontSize={8.5}
        fontFamily="var(--font-mono)"
        fill={MUTED}
        stroke={SURFACE}
        strokeWidth={3}
        paintOrder="stroke"
      >
        {sub}
      </text>
    </g>
  );
}

export default function SolvesVisual() {
  return (
    <svg
      viewBox="0 0 920 190"
      className="h-auto w-full min-w-[640px]"
      role="img"
      aria-label="Today, you connect to a service without knowing who runs it. On Verana, the same service proves who operates it against the public registry before you connect."
    >
      <defs>
        <marker
          id="solves-success"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill={SUCCESS} />
        </marker>
      </defs>

      {/* TODAY panel */}
      <rect
        x={10}
        y={14}
        width={435}
        height={150}
        rx={14}
        fill={MUTED}
        fillOpacity={0.05}
        stroke={MUTED}
        strokeOpacity={0.3}
        strokeDasharray="6 5"
      />
      <text
        x={28}
        y={38}
        fontFamily="var(--font-mono)"
        fontSize={8.5}
        letterSpacing="0.14em"
        fill={MUTED}
      >
        TODAY
      </text>
      <text
        x={227}
        y={72}
        textAnchor="middle"
        fontSize={9}
        fontFamily="var(--font-mono)"
        fill={MUTED}
        stroke={SURFACE}
        strokeWidth={3}
        paintOrder="stroke"
      >
        connect and hope
      </text>
      <line
        x1={123}
        y1={95}
        x2={332}
        y2={95}
        stroke={MUTED}
        strokeWidth={1.5}
        strokeDasharray="4 4"
        opacity={0.7}
      />
      {/* unknown badge */}
      <circle cx={227} cy={95} r={8.5} fill={SURFACE} stroke={MUTED} strokeWidth={1.5} />
      <text
        x={227}
        y={95}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={10}
        fontWeight={600}
        fontFamily="var(--font-mono)"
        fill={MUTED}
      >
        ?
      </text>
      <ActorNode x={105} y={95} icon={faUser} color={PERSON} label="you" sub="human or AI agent" />
      <ActorNode x={350} y={95} icon={faServer} color={ACCENT} label="a service" sub="who runs it?" dashed />

      {/* transition arrow */}
      <Glyph icon={faArrowRightLong} cx={460} cy={95} size={16} color={MUTED} />

      {/* ON VERANA panel */}
      <rect
        x={475}
        y={14}
        width={435}
        height={150}
        rx={14}
        fill={SUCCESS}
        fillOpacity={0.05}
        stroke={SUCCESS}
        strokeOpacity={0.35}
      />
      <text
        x={493}
        y={38}
        fontFamily="var(--font-mono)"
        fontSize={8.5}
        letterSpacing="0.14em"
        fill={PERSON}
      >
        ON VERANA
      </text>
      <text
        x={692}
        y={72}
        textAnchor="middle"
        fontSize={9.5}
        fontWeight={600}
        fontFamily="var(--font-mono)"
        fill={INK}
        stroke={SURFACE}
        strokeWidth={3}
        paintOrder="stroke"
      >
        verify first, then connect
      </text>
      <line
        x1={588}
        y1={95}
        x2={794}
        y2={95}
        stroke={SUCCESS}
        strokeWidth={2}
        opacity={0.85}
        markerEnd="url(#solves-success)"
      />
      <Badge x={692} y={95} kind="check" />
      <ActorNode x={570} y={95} icon={faUser} color={PERSON} label="you" sub="human or AI agent" />
      <ActorNode
        x={815}
        y={95}
        icon={faServer}
        color={ACCENT}
        label="the same service"
        sub="Acme Corp · verified"
      />
    </svg>
  );
}
