"use client";

import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSitemap,
  faServer,
  faRobot,
  faUsers,
  faStamp,
  faCertificate,
  faMagnifyingGlass,
  faChevronLeft,
  faChevronRight,
  faHandPointer,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Glyph from "./Glyph";
import {
  EXPLORER_FIXTURES,
  type ExplorerFixture,
  type ExplorerNode,
  type ExplorerEdge,
  type NodeKind,
  type EdgeRole,
} from "../lib/explorer";

// Interactive graph of the two worked examples (spec-v2 §3.2). Click a node
// to see what it holds, issues, and verifies; click an edge to see what that
// relationship means; or take the guided tour. The detail panel carries the
// full text, so the SVG stays decorative-plus and keyboard users get
// everything through focusable nodes and the tour.

// Same icons and colors as the participant tree above the explorer.
const KIND_ICON: Record<NodeKind, IconDefinition> = {
  ecosystem: faSitemap,
  grantor: faCertificate,
  issuer: faStamp,
  verifier: faMagnifyingGlass,
  service: faServer,
  agent: faRobot,
  people: faUsers,
};

const KIND_COLOR: Record<NodeKind, string> = {
  ecosystem: "var(--color-primary)",
  grantor: "var(--color-primary)",
  issuer: "var(--color-accent)",
  verifier: "var(--color-accent)",
  service: "var(--color-accent)",
  agent: "var(--color-accent)",
  people: "var(--color-success)",
};

const ROLE_COLOR: Record<EdgeRole, string> = {
  holder: "var(--color-success)",
  issuer: "var(--color-primary)",
  verifier: "var(--color-accent)",
  accredits: "var(--color-primary)",
  controls: "var(--color-muted)",
};

type Selection =
  | { kind: "none" }
  | { kind: "node"; node: ExplorerNode }
  | { kind: "edge"; edge: ExplorerEdge };

function EdgeLine({
  edge,
  fixture,
  dim,
  onSelect,
}: {
  edge: ExplorerEdge;
  fixture: ExplorerFixture;
  dim: boolean;
  onSelect: () => void;
}) {
  const a = fixture.nodes.find((n) => n.id === edge.from)!;
  const b = fixture.nodes.find((n) => n.id === edge.to)!;
  const t = edge.labelT ?? 0.5;
  const midX = a.x + (b.x - a.x) * t;
  const midY = a.y + (b.y - a.y) * t;
  const color = ROLE_COLOR[edge.role];
  return (
    <g
      role="button"
      tabIndex={0}
      aria-label={`${edge.label}: ${edge.caption}`}
      className="cursor-pointer outline-none"
      opacity={dim ? 0.18 : 1}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
    >
      <line
        x1={a.x}
        y1={a.y}
        x2={b.x}
        y2={b.y}
        stroke={color}
        strokeWidth={1.5}
        strokeDasharray={edge.role === "controls" ? "5 4" : undefined}
        opacity={0.55}
      />
      {/* wider invisible hit area */}
      <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="transparent" strokeWidth={14} />
      {!edge.hideLabel ? (
        <g transform={`translate(${midX}, ${midY})`}>
          <rect
            x={-edge.label.length * 3.1 - 6}
            y={-9}
            width={edge.label.length * 6.2 + 12}
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
            {edge.label}
          </text>
        </g>
      ) : null}
    </g>
  );
}

function NodeShape({
  node,
  dim,
  selected,
  onSelect,
}: {
  node: ExplorerNode;
  dim: boolean;
  selected: boolean;
  onSelect: () => void;
}) {
  const color = KIND_COLOR[node.kind];
  const r = node.kind === "ecosystem" ? 34 : 27;
  return (
    <g
      role="button"
      tabIndex={0}
      aria-label={`${node.label}${node.sub ? `, ${node.sub}` : ""}`}
      className="cursor-pointer outline-none"
      opacity={dim ? 0.22 : 1}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
    >
      <circle
        cx={node.x}
        cy={node.y}
        r={r + 4}
        fill={color}
        opacity={selected ? 0.28 : 0.12}
      />
      <circle
        cx={node.x}
        cy={node.y}
        r={r}
        fill="var(--color-surface)"
        stroke={color}
        strokeWidth={selected ? 2.5 : 1.5}
      />
      <Glyph
        icon={KIND_ICON[node.kind]}
        cx={node.x}
        cy={node.y}
        size={node.kind === "ecosystem" ? 24 : 20}
        color={color}
      />
      {/* surface-colored halo keeps labels readable where edges pass under */}
      <text
        x={node.x}
        y={node.y + r + 16}
        textAnchor="middle"
        fontSize={12}
        fontWeight={600}
        fontFamily="var(--font-display)"
        fill="var(--color-ink)"
        stroke="var(--color-surface)"
        strokeWidth={4}
        paintOrder="stroke"
      >
        {node.label}
      </text>
      {node.sub ? (
        <text
          x={node.x}
          y={node.y + r + 30}
          textAnchor="middle"
          fontSize={9.5}
          fontFamily="var(--font-mono)"
          fill="var(--color-muted)"
          stroke="var(--color-surface)"
          strokeWidth={3}
          paintOrder="stroke"
        >
          {node.sub}
        </text>
      ) : null}
    </g>
  );
}

export default function EcosystemExplorer() {
  const [fixtureId, setFixtureId] = useState(EXPLORER_FIXTURES[0].id);
  const [selection, setSelection] = useState<Selection>({ kind: "none" });
  const [step, setStep] = useState<number | null>(null);

  const fixture = useMemo(
    () => EXPLORER_FIXTURES.find((f) => f.id === fixtureId)!,
    [fixtureId]
  );

  const focus = step !== null ? new Set(fixture.steps[step].focus) : null;

  function pick(sel: Selection) {
    setStep(null);
    setSelection(sel);
  }

  function switchFixture(id: string) {
    setFixtureId(id);
    setSelection({ kind: "none" });
    setStep(null);
  }

  return (
    <div className="card overflow-hidden">
      {/* fixture tabs + tour controls */}
      <div className="flex flex-wrap items-center gap-2 border-b border-rule bg-surface-2 px-4 py-3">
        {EXPLORER_FIXTURES.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => switchFixture(f.id)}
            className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors ${
              f.id === fixtureId
                ? "border-primary text-ink"
                : "border-rule text-muted hover:text-ink"
            }`}
          >
            {f.name}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setSelection({ kind: "none" });
              setStep((s) =>
                s === null ? 0 : (s - 1 + fixture.steps.length) % fixture.steps.length
              );
            }}
            aria-label="Previous tour step"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-rule text-muted hover:text-ink"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="h-3 w-3" />
          </button>
          <span className="font-mono text-xs text-muted">
            {step === null ? "guided tour" : `${step + 1} / ${fixture.steps.length}`}
          </span>
          <button
            type="button"
            onClick={() => {
              setSelection({ kind: "none" });
              setStep((s) => (s === null ? 0 : (s + 1) % fixture.steps.length));
            }}
            aria-label="Next tour step"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-rule text-muted hover:text-ink"
          >
            <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* graph */}
      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 900 540"
          className="h-auto w-full min-w-[640px]"
          aria-label={`${fixture.name} ecosystem graph`}
        >
          {fixture.edges.map((e) => (
            <EdgeLine
              key={e.id}
              edge={e}
              fixture={fixture}
              dim={focus !== null && !focus.has(e.id)}
              onSelect={() => pick({ kind: "edge", edge: e })}
            />
          ))}
          {fixture.nodes.map((n) => (
            <NodeShape
              key={n.id}
              node={n}
              dim={focus !== null && !focus.has(n.id)}
              selected={selection.kind === "node" && selection.node.id === n.id}
              onSelect={() => pick({ kind: "node", node: n })}
            />
          ))}
        </svg>
      </div>

      {/* detail panel */}
      <div className="border-t border-rule px-5 py-4" aria-live="polite">
        {step !== null ? (
          <p className="text-sm text-muted">
            <FontAwesomeIcon
              icon={faCircleInfo}
              className="mr-2 h-3.5 w-3.5 text-accent"
            />
            {fixture.steps[step].caption}
          </p>
        ) : selection.kind === "node" ? (
          <div>
            <p className="flex items-center gap-2 font-semibold text-ink">
              <FontAwesomeIcon
                icon={KIND_ICON[selection.node.kind]}
                className="h-3.5 w-3.5"
              />
              {selection.node.label}
              {selection.node.sub ? (
                <span className="font-mono text-xs font-normal text-muted">
                  {selection.node.sub}
                </span>
              ) : null}
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
              {selection.node.detail.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        ) : selection.kind === "edge" ? (
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              {selection.edge.role} · {selection.edge.label}
            </p>
            <p className="mt-2 text-sm text-muted">{selection.edge.caption}</p>
          </div>
        ) : (
          <p className="text-sm text-muted">
            <FontAwesomeIcon
              icon={faHandPointer}
              className="mr-2 h-3.5 w-3.5"
            />
            {fixture.intro} Click any node or edge, or use the arrows for the
            guided tour.
          </p>
        )}
      </div>
    </div>
  );
}
