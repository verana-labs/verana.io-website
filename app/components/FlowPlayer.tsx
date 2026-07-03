"use client";

import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faPlay,
  faPause,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import type { Flow } from "../lib/flows";

// Step-through sequence player (spec-v2 §3.3): the connection flows advance
// one message at a time, with a plain-language caption per step. Click, use
// the arrows, or press play. Respects prefers-reduced-motion for autoplay.

const LANE_TOP = 46;
const STEP_H = 34;
const WIDTH = 760;

export default function FlowPlayer({ flow }: { flow: Flow }) {
  // `shown` = number of messages currently visible (0..steps.length)
  const [shown, setShown] = useState(1);
  const [playing, setPlaying] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const n = flow.steps.length;
  const height = LANE_TOP + 18 + n * STEP_H + 16;
  const laneX = (i: number) =>
    40 + (i * (WIDTH - 80)) / (flow.actors.length - 1);
  const actorIdx = (id: string) => flow.actors.findIndex((a) => a.id === id);

  useEffect(() => {
    if (!playing) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setShown(n);
      setPlaying(false);
      return;
    }
    timer.current = setInterval(() => {
      setShown((s) => {
        if (s >= n) {
          setPlaying(false);
          return s;
        }
        return s + 1;
      });
    }, 2200);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [playing, n]);

  const current = flow.steps[Math.min(shown, n) - 1];

  return (
    <div className="card overflow-hidden">
      <div className="flex flex-wrap items-center gap-2 border-b border-rule bg-surface-2 px-4 py-3">
        <span className="font-mono text-xs text-muted">
          step {Math.min(shown, n)} / {n}
        </span>
        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            aria-label="Restart"
            onClick={() => {
              setPlaying(false);
              setShown(1);
            }}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-rule text-muted hover:text-ink"
          >
            <FontAwesomeIcon icon={faRotateLeft} className="h-3 w-3" />
          </button>
          <button
            type="button"
            aria-label="Previous step"
            onClick={() => {
              setPlaying(false);
              setShown((s) => Math.max(1, s - 1));
            }}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-rule text-muted hover:text-ink"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="h-3 w-3" />
          </button>
          <button
            type="button"
            aria-label="Next step"
            onClick={() => {
              setPlaying(false);
              setShown((s) => Math.min(n, s + 1));
            }}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-rule text-muted hover:text-ink"
          >
            <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3" />
          </button>
          <button
            type="button"
            aria-label={playing ? "Pause" : "Play"}
            onClick={() => {
              if (!playing && shown >= n) setShown(1);
              setPlaying((p) => !p);
            }}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-rule text-accent hover:text-ink"
          >
            <FontAwesomeIcon icon={playing ? faPause : faPlay} className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* caption for the current step */}
      <div className="border-b border-rule px-5 py-3" aria-live="polite">
        <p className="text-sm text-muted">{current?.caption}</p>
      </div>

      <div className="overflow-x-auto">
        <svg
          viewBox={`0 0 ${WIDTH} ${height}`}
          className="h-auto w-full min-w-[560px]"
          aria-label={`${flow.title} sequence diagram`}
        >
          <defs>
            <marker
              id={`arrow-${flow.id}`}
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--color-accent)" />
            </marker>
          </defs>

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

          {/* messages up to the current step */}
          {flow.steps.slice(0, shown).map((s, i) => {
            const y = LANE_TOP + 18 + i * STEP_H;
            const x1 = laneX(actorIdx(s.from));
            const x2 = laneX(actorIdx(s.to));
            const isCurrent = i === shown - 1;
            const mid = (x1 + x2) / 2;
            return (
              <g key={i} opacity={isCurrent ? 1 : 0.45}>
                <line
                  x1={x1}
                  y1={y}
                  x2={x2 + (x2 > x1 ? -4 : 4)}
                  y2={y}
                  stroke={isCurrent ? "var(--color-accent)" : "var(--color-muted)"}
                  strokeWidth={isCurrent ? 1.8 : 1.2}
                  markerEnd={isCurrent ? `url(#arrow-${flow.id})` : undefined}
                />
                {!isCurrent ? (
                  <path
                    d={`M ${x2 + (x2 > x1 ? -7 : 7)} ${y - 3.5} L ${x2} ${y} L ${
                      x2 + (x2 > x1 ? -7 : 7)
                    } ${y + 3.5}`}
                    fill="none"
                    stroke="var(--color-muted)"
                    strokeWidth={1.2}
                  />
                ) : null}
                <text
                  x={mid}
                  y={y - 6}
                  textAnchor="middle"
                  fontSize={9.5}
                  fontFamily="var(--font-mono)"
                  fill={isCurrent ? "var(--color-ink)" : "var(--color-muted)"}
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
