import type { Flow } from "../lib/flows";

// Static sequence diagram for a connection flow (spec-v2 §3.3): actor lanes
// and every message visible at once. Server component, no interaction.

const LANE_TOP = 46;
const STEP_H = 34;
const WIDTH = 760;

export default function FlowDiagram({ flow }: { flow: Flow }) {
  const n = flow.steps.length;
  const height = LANE_TOP + 18 + n * STEP_H + 16;
  const laneX = (i: number) =>
    40 + (i * (WIDTH - 80)) / (flow.actors.length - 1);
  const actorIdx = (id: string) => flow.actors.findIndex((a) => a.id === id);

  return (
    <div className="card overflow-x-auto">
      <svg
        viewBox={`0 0 ${WIDTH} ${height}`}
        className="h-auto w-full min-w-[560px]"
        aria-label={`${flow.title} sequence diagram`}
      >
        {/* actor lanes */}
        {flow.actors.map((a, i) => (
          <g key={a.id}>
            <rect
              x={laneX(i) - 62}
              y={8}
              width={124}
              height={26}
              rx={13}
              fill="var(--color-surface-2)"
              stroke="var(--color-rule)"
            />
            <text
              x={laneX(i)}
              y={21}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={11}
              fontWeight={600}
              fontFamily="var(--font-display)"
              fill="var(--color-ink)"
            >
              {a.label}
            </text>
            <line
              x1={laneX(i)}
              y1={LANE_TOP}
              x2={laneX(i)}
              y2={height - 8}
              stroke="var(--color-rule)"
              strokeDasharray="3 4"
            />
          </g>
        ))}

        {/* messages */}
        {flow.steps.map((s, i) => {
          const y = LANE_TOP + 18 + i * STEP_H;
          const x1 = laneX(actorIdx(s.from));
          const x2 = laneX(actorIdx(s.to));
          const mid = (x1 + x2) / 2;
          const dir = x2 > x1 ? -7 : 7;
          return (
            <g key={i}>
              <line
                x1={x1}
                y1={y}
                x2={x2}
                y2={y}
                stroke="var(--color-accent)"
                strokeWidth={1.2}
                opacity={0.8}
              />
              <path
                d={`M ${x2 + dir} ${y - 3.5} L ${x2} ${y} L ${x2 + dir} ${y + 3.5}`}
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth={1.2}
                opacity={0.8}
              />
              <text
                x={mid}
                y={y - 6}
                textAnchor="middle"
                fontSize={9.5}
                fontFamily="var(--font-mono)"
                fill="var(--color-ink)"
              >
                {s.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
