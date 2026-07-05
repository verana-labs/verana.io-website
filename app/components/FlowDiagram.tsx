import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faMobileScreen,
  faRobot,
  faDatabase,
  faArrowRightArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Glyph from "./Glyph";
import type { Flow, ActorKind } from "../lib/flows";

// Static sequence diagram for a connection flow (spec-v2 §3.3), in the same
// visual language as the /ecosystems diagrams: circular icon nodes with halos,
// dashed lifelines, role-colored messages with halo mono labels, and note
// bands. Server component, no interaction.

const ACTOR_ICON: Record<ActorKind, IconDefinition> = {
  person: faUser,
  wallet: faMobileScreen,
  agent: faRobot,
  registry: faDatabase,
};

const ACTOR_COLOR: Record<ActorKind, string> = {
  person: "var(--color-success)",
  wallet: "var(--color-accent)",
  agent: "var(--color-accent)",
  registry: "var(--color-primary)",
};

const KIND_STYLE = {
  msg: { color: "var(--color-accent)", dash: undefined, marker: "accent" },
  reply: { color: "var(--color-accent)", dash: "4 4", marker: "accent" },
  verified: { color: "var(--color-success)", dash: "4 4", marker: "success" },
  session: { color: "var(--color-primary)", dash: undefined, marker: "primary" },
} as const;

const MARKER_COLORS = {
  accent: "var(--color-accent)",
  success: "var(--color-success)",
  primary: "var(--color-primary)",
} as const;

const WIDTH = 800;
const TOP = 96; // first message row (below the actor nodes)
const STEP_H = 38;

export default function FlowDiagram({ flow }: { flow: Flow }) {
  const n = flow.steps.length;
  const height = TOP + n * STEP_H + 12;
  const laneX = (i: number) =>
    70 + (i * (WIDTH - 140)) / (flow.actors.length - 1);
  const lane = (id: string) =>
    laneX(flow.actors.findIndex((a) => a.id === id));

  return (
    <div className="card mt-4 overflow-hidden">
      {/* header: legend in the shared recipe */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-rule bg-surface-2 px-4 py-3">
        <span className="eyebrow flex items-center gap-2">
          <FontAwesomeIcon icon={faArrowRightArrowLeft} className="h-3 w-3" />
          Sequence
        </span>
        <div className="ml-auto flex flex-wrap items-center gap-3">
          {[
            { color: "var(--color-accent)", label: "message" },
            { color: "var(--color-success)", label: "verified" },
            { color: "var(--color-primary)", label: "session" },
          ].map((l) => (
            <span
              key={l.label}
              className="flex items-center gap-1.5 font-mono text-[11px] text-muted"
            >
              <span
                aria-hidden
                className="h-2 w-2 rounded-full"
                style={{ background: l.color }}
              />
              {l.label}
            </span>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${WIDTH} ${height}`}
          className="h-auto w-full min-w-[620px]"
          role="img"
          aria-label={`${flow.title} sequence diagram`}
        >
          <defs>
            {(Object.keys(MARKER_COLORS) as (keyof typeof MARKER_COLORS)[]).map(
              (m) => (
                <marker
                  key={m}
                  id={`fd-${flow.id}-${m}`}
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="5.5"
                  markerHeight="5.5"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill={MARKER_COLORS[m]} />
                </marker>
              )
            )}
          </defs>

          {/* lifelines first, then actor nodes over them */}
          {flow.actors.map((a, i) => (
            <line
              key={`life-${a.id}`}
              x1={laneX(i)}
              y1={52}
              x2={laneX(i)}
              y2={height - 8}
              stroke="var(--color-rule)"
              strokeDasharray="3 4"
            />
          ))}

          {flow.actors.map((a, i) => {
            const color = ACTOR_COLOR[a.kind];
            const x = laneX(i);
            return (
              <g key={a.id}>
                <circle cx={x} cy={30} r={22} fill={color} opacity={0.12} />
                <circle
                  cx={x}
                  cy={30}
                  r={18}
                  fill="var(--color-surface)"
                  stroke={color}
                  strokeWidth={1.5}
                />
                <Glyph icon={ACTOR_ICON[a.kind]} cx={x} cy={30} size={15} color={color} />
                <text
                  x={x}
                  y={66}
                  textAnchor="middle"
                  fontSize={11.5}
                  fontWeight={600}
                  fontFamily="var(--font-display)"
                  fill="var(--color-ink)"
                  stroke="var(--color-surface)"
                  strokeWidth={4}
                  paintOrder="stroke"
                >
                  {a.label}
                </text>
              </g>
            );
          })}

          {/* steps */}
          {flow.steps.map((s, i) => {
            const y = TOP + i * STEP_H;
            if (s.type === "note") {
              const x1 = lane(s.over[0]);
              const x2 = lane(s.over[1]);
              const left = Math.min(x1, x2) - 40;
              const width = Math.abs(x2 - x1) + 80;
              return (
                <g key={i}>
                  <rect
                    x={left}
                    y={y - 12}
                    width={width}
                    height={24}
                    rx={12}
                    fill="var(--color-success)"
                    fillOpacity={0.08}
                    stroke="var(--color-success)"
                    strokeOpacity={0.4}
                  />
                  <text
                    x={left + width / 2}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={9.5}
                    fontFamily="var(--font-mono)"
                    fill="var(--color-success-ink)"
                  >
                    {s.label}
                  </text>
                </g>
              );
            }
            const style = KIND_STYLE[s.kind];
            const x1 = lane(s.from);
            const x2 = lane(s.to);
            const dir = x2 > x1 ? 1 : -1;
            return (
              <g key={i}>
                <line
                  x1={x1}
                  y1={y}
                  x2={x2 - 5 * dir}
                  y2={y}
                  stroke={style.color}
                  strokeWidth={s.kind === "session" ? 1.3 : 1}
                  strokeDasharray={style.dash}
                  opacity={0.8}
                  markerEnd={`url(#fd-${flow.id}-${style.marker})`}
                />
                <text
                  x={(x1 + x2) / 2}
                  y={y - 7}
                  textAnchor="middle"
                  fontSize={9.5}
                  fontFamily="var(--font-mono)"
                  fill="var(--color-muted)"
                  stroke="var(--color-surface)"
                  strokeWidth={2.5}
                  paintOrder="stroke"
                >
                  {s.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
