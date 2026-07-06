import {
  faUser,
  faServer,
  faQuestion,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import Glyph from "./Glyph";
import { Badge } from "./svg";

// The home "What Verana solves" before/after strip: the same connection
// twice, once blind (both ends unknown, "?") and once verify-first (both
// ends checked, double-headed arrow: verification is mutual). Two nodes per
// panel on purpose: this is the one diagram a non-technical visitor must be
// able to read without a legend.

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
  subs,
  dashed,
}: {
  x: number;
  y: number;
  icon: typeof faUser;
  color: string;
  label: string;
  subs: string[];
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
      {subs.map((sub, i) => (
        <text
          key={sub}
          x={x}
          y={y + r + 24 + i * 11}
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
      ))}
    </g>
  );
}

/** Small "?" state badge on a node's rim: this end is unverified. */
function UnknownBadge({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={7.5} fill={SURFACE} stroke={MUTED} strokeWidth={1.25} />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={9.5}
        fontWeight={600}
        fontFamily="var(--font-mono)"
        fill={MUTED}
      >
        ?
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
      aria-label="Today, an unknown entity, maybe a human, maybe a service, connects to a service that cannot be verified either: both ends carry a question mark. On Verana, both sides verify each other against the public registry before connecting: an employee of Example Ltd using a verified agent browser talks to Acme Corp's Accounting Agent, which presents verified Acme Corp and ISO 24001 credentials."
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

      {/* TODAY panel: both ends unknown */}
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
      <ActorNode
        x={105}
        y={95}
        icon={faQuestion}
        color={MUTED}
        label="unknown entity"
        subs={["a human? a service?"]}
        dashed
      />
      <ActorNode
        x={350}
        y={95}
        icon={faServer}
        color={ACCENT}
        label="a service"
        subs={["who runs it?"]}
        dashed
      />
      {/* neither end can verify the other */}
      <UnknownBadge x={116} y={84} />
      <UnknownBadge x={361} y={84} />

      {/* transition arrow */}
      <Glyph icon={faArrowRightLong} cx={460} cy={95} size={16} color={MUTED} />

      {/* ON VERANA panel: both ends verified, verification is mutual */}
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
        verify each other, then connect
      </text>
      <line
        x1={604}
        y1={95}
        x2={788}
        y2={95}
        stroke={SUCCESS}
        strokeWidth={2}
        opacity={0.85}
        markerStart="url(#solves-success)"
        markerEnd="url(#solves-success)"
      />
      <ActorNode
        x={580}
        y={95}
        icon={faUser}
        color={PERSON}
        label="you"
        subs={["employee of Example Ltd", "using agent browser ABC v1.5"]}
      />
      <ActorNode
        x={815}
        y={95}
        icon={faServer}
        color={ACCENT}
        label="Accounting Agent"
        subs={["Acme Corp", "ISO 24001"]}
      />
      {/* both ends verified */}
      <Badge x={591} y={84} kind="check" />
      <Badge x={826} y={84} kind="check" />
    </svg>
  );
}
