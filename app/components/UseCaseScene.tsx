import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Glyph from "./Glyph";
import { Pill, StepBadge, Badge, type BadgeKind } from "./svg";

// Generic renderer for the /use-cases mini-scenes: each use case is one
// declarative SceneSpec drawn in the site's node/edge language. Server
// component, static; the numbered badges index into the prose steps beside
// the scene, which carry the full meaning (the SVG is reinforcement).

export type SceneNode = {
  id: string;
  x: number;
  y: number;
  /** default 15; the scene's protagonist uses 18 */
  r?: number;
  icon: IconDefinition;
  color: string;
  label?: string;
  sub?: string;
  /** dashed rim + muted = present but uncredentialed */
  dashed?: boolean;
  /** protagonist emphasis: bigger halo + 2px stroke */
  lit?: boolean;
};

export type EdgeKind =
  | "structural"
  | "structuralDashed"
  | "verify"
  | "fee"
  | "query"
  | "session"
  | "thin";

export type SceneEdge = {
  from?: string;
  to?: string;
  fromPt?: [number, number];
  toPt?: [number, number];
  /** explicit curve; endpoints are not trimmed */
  path?: string;
  kind: EdgeKind;
  /** override the kind's default color (structural edges only) */
  color?: string;
  /** add an arrowhead on a structural edge */
  arrow?: boolean;
  pill?: { label: string; x: number; y: number };
};

export type SceneText = {
  x: number;
  y: number;
  text: string;
  anchor?: "start" | "middle";
  strong?: boolean;
};

export type SceneSpec = {
  aria: string;
  band?: { x: number; y: number; w: number; h: number; label: string; lx: number; ly: number };
  nodes: SceneNode[];
  edges: SceneEdge[];
  pills?: { label: string; x: number; y: number; color: string }[];
  badges: { x: number; y: number; kind: BadgeKind }[];
  steps: { n: number; x: number; y: number }[];
  texts?: SceneText[];
};

const KIND_STYLE: Record<
  EdgeKind,
  { color: string; width: number; dash?: string; opacity: number; markerEnd?: boolean; markerBoth?: boolean }
> = {
  structural: { color: "var(--color-primary)", width: 1.5, opacity: 0.55 },
  structuralDashed: { color: "var(--color-primary)", width: 1.5, dash: "4 3", opacity: 0.5 },
  verify: { color: "var(--color-success)", width: 2, opacity: 0.85, markerEnd: true },
  fee: { color: "var(--color-success)", width: 1.5, dash: "4 3", opacity: 0.85, markerEnd: true },
  query: { color: "var(--color-accent)", width: 1.5, dash: "4 4", opacity: 0.85, markerEnd: true },
  session: { color: "var(--color-primary)", width: 1.5, opacity: 0.85, markerEnd: true, markerBoth: true },
  thin: { color: "var(--color-success)", width: 1.25, dash: "4 3", opacity: 0.7, markerEnd: true },
};

const MARKER_FOR: Record<string, string> = {
  "var(--color-primary)": "primary",
  "var(--color-accent)": "accent",
  "var(--color-success)": "success",
};

export default function UseCaseScene({
  scene,
  index,
}: {
  scene: SceneSpec;
  index: number;
}) {
  const nodeById = new Map(scene.nodes.map((n) => [n.id, n]));
  const mid = (id: string) => nodeById.get(id)!;

  function endpoints(e: SceneEdge): { x1: number; y1: number; x2: number; y2: number } {
    const a = e.from ? mid(e.from) : null;
    const b = e.to ? mid(e.to) : null;
    let x1 = e.fromPt?.[0] ?? a!.x;
    let y1 = e.fromPt?.[1] ?? a!.y;
    let x2 = e.toPt?.[0] ?? b!.x;
    let y2 = e.toPt?.[1] ?? b!.y;
    // trim endpoints to the node rims
    const d = Math.hypot(x2 - x1, y2 - y1) || 1;
    const ux = (x2 - x1) / d;
    const uy = (y2 - y1) / d;
    if (a && !e.fromPt) {
      const t = (a.r ?? 15) + 3;
      x1 += ux * t;
      y1 += uy * t;
    }
    if (b && !e.toPt) {
      const t = (b.r ?? 15) + 3;
      x2 -= ux * t;
      y2 -= uy * t;
    }
    return { x1, y1, x2, y2 };
  }

  const markerId = (color: string) => `uc${index}-${MARKER_FOR[color] ?? "success"}`;

  return (
    <svg
      viewBox="0 0 420 360"
      className="h-auto w-full"
      role="img"
      aria-label={scene.aria}
    >
      <defs>
        {(["primary", "accent", "success"] as const).map((m) => (
          <marker
            key={m}
            id={`uc${index}-${m}`}
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill={`var(--color-${m})`} />
          </marker>
        ))}
      </defs>

      {/* band */}
      {scene.band ? (
        <g>
          <rect
            x={scene.band.x}
            y={scene.band.y}
            width={scene.band.w}
            height={scene.band.h}
            rx={14}
            fill="var(--color-primary)"
            fillOpacity={0.05}
            stroke="var(--color-primary)"
            strokeOpacity={0.3}
            strokeDasharray="6 5"
          />
          <text
            x={scene.band.lx}
            y={scene.band.ly}
            fontFamily="var(--font-mono)"
            fontSize={8.5}
            letterSpacing="0.14em"
            fill="var(--color-muted)"
          >
            {scene.band.label}
          </text>
        </g>
      ) : null}

      {/* edges */}
      {scene.edges.map((e, i) => {
        const s = KIND_STYLE[e.kind];
        const color = e.color ?? s.color;
        const withEnd = s.markerEnd || e.arrow;
        return (
          <g key={i}>
            {e.path ? (
              <path
                d={e.path}
                fill="none"
                stroke={color}
                strokeWidth={s.width}
                strokeDasharray={s.dash}
                opacity={s.opacity}
                markerEnd={withEnd ? `url(#${markerId(color)})` : undefined}
              />
            ) : (
              (() => {
                const { x1, y1, x2, y2 } = endpoints(e);
                return (
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={color}
                    strokeWidth={s.width}
                    strokeDasharray={s.dash}
                    opacity={s.opacity}
                    markerEnd={withEnd ? `url(#${markerId(color)})` : undefined}
                    markerStart={s.markerBoth ? `url(#${markerId(color)})` : undefined}
                  />
                );
              })()
            )}
            {e.pill ? (
              <Pill label={e.pill.label} x={e.pill.x} y={e.pill.y} color={color} />
            ) : null}
          </g>
        );
      })}

      {/* standalone pills */}
      {scene.pills?.map((p) => (
        <Pill key={p.label + p.x} label={p.label} x={p.x} y={p.y} color={p.color} />
      ))}

      {/* nodes */}
      {scene.nodes.map((n) => {
        const r = n.r ?? 15;
        const color = n.dashed ? "var(--color-muted)" : n.color;
        const labelY = n.y + r + 13;
        const subY = n.label ? n.y + r + 24 : n.y + r + 13;
        return (
          <g key={n.id}>
            <circle
              cx={n.x}
              cy={n.y}
              r={r + (n.lit ? 4 : 4)}
              fill={color}
              opacity={0.12}
            />
            <circle
              cx={n.x}
              cy={n.y}
              r={r}
              fill="var(--color-surface)"
              stroke={color}
              strokeWidth={n.lit ? 2 : 1.5}
              strokeDasharray={n.dashed ? "3 3" : undefined}
            />
            <g opacity={n.dashed ? 0.55 : 1}>
              <Glyph icon={n.icon} cx={n.x} cy={n.y} size={Math.round(r * 0.75)} color={color} />
            </g>
            {n.label ? (
              <text
                x={n.x}
                y={labelY}
                textAnchor="middle"
                fontSize={9.5}
                fontWeight={600}
                fontFamily="var(--font-mono)"
                fill="var(--color-ink)"
                stroke="var(--color-surface)"
                strokeWidth={3}
                paintOrder="stroke"
              >
                {n.label}
              </text>
            ) : null}
            {n.sub ? (
              <text
                x={n.x}
                y={subY}
                textAnchor="middle"
                fontSize={8.5}
                fontFamily="var(--font-mono)"
                fill="var(--color-muted)"
                stroke="var(--color-surface)"
                strokeWidth={3}
                paintOrder="stroke"
              >
                {n.sub}
              </text>
            ) : null}
          </g>
        );
      })}

      {/* free texts */}
      {scene.texts?.map((t) => (
        <text
          key={t.text + t.x}
          x={t.x}
          y={t.y}
          textAnchor={t.anchor ?? "middle"}
          fontSize={t.strong ? 9.5 : 9}
          fontWeight={t.strong ? 600 : 400}
          fontFamily="var(--font-mono)"
          fill={t.strong ? "var(--color-ink)" : "var(--color-muted)"}
          stroke="var(--color-surface)"
          strokeWidth={3}
          paintOrder="stroke"
        >
          {t.text}
        </text>
      ))}

      {/* badges + step markers on top */}
      {scene.badges.map((b, i) => (
        <Badge key={i} x={b.x} y={b.y} kind={b.kind} />
      ))}
      {scene.steps.map((s) => (
        <StepBadge key={s.n} n={s.n} x={s.x} y={s.y} />
      ))}
    </svg>
  );
}
