"use client";

import { useEffect, useRef } from "react";

/* -------------------------------------------------------------------------- *
 *  verana.io hero — "verify first, then connect", animated.
 *
 *  A field of service/agent nodes around a central registry node. Pairs of
 *  nodes repeatedly attempt to interact: a verification pulse travels from
 *  each node to the registry and back (trust resolution), then the edge
 *  flashes Signal Green and the connection opens. Failed attempts fade out
 *  unconnected. The network visibly grows only through verified edges.
 *
 *  Same engineering bar as the sister heroes (Foundation HeroGraph, Council
 *  HeroRing): zero-dependency Canvas 2D, a few kB, theme-aware (additive glow
 *  on dark, source-over on light), honours prefers-reduced-motion (one static
 *  frame, no RAF loop), decorative (aria-hidden, pointer-events: none).
 * -------------------------------------------------------------------------- */

type Rgb = readonly [number, number, number];

const PURPLE: Rgb = [118, 62, 240];
const BLUE: Rgb = [46, 107, 230];
const GREEN: Rgb = [41, 198, 140];
const RED: Rgb = [214, 84, 92];

const rgba = (c: Rgb, a: number) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;

type Node = { x: number; y: number; r: number; phase: number };

type Attempt = {
  a: number;
  b: number;
  start: number;
  ok: boolean;
  // phases (seconds): 0-1 attempt line, 1-2.2 pulses to registry & back,
  // 2.2-2.8 verdict flash, then (ok) persist edge / (fail) fade.
};

type Edge = { a: number; b: number; born: number };

export default function HeroVerify() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let isDark =
      document.documentElement.getAttribute("data-theme") !== "light";
    const themeObserver = new MutationObserver(() => {
      isDark = document.documentElement.getAttribute("data-theme") !== "light";
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    let W = 0;
    let H = 0;
    let nodes: Node[] = [];
    let registry = { x: 0, y: 0 };
    let attempts: Attempt[] = [];
    let edges: Edge[] = [];
    let raf = 0;
    let last = 0;
    let nextAttemptAt = 0.6;
    let mouseX = 0.5;
    let mouseY = 0.5;

    // Deterministic-enough layout without Math.random cost concerns: a simple
    // LCG seeded once per mount keeps the field stable during the session.
    let seed = 42;
    const rand = () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      return seed / 4294967296;
    };

    function layout() {
      const rect = canvas!.parentElement!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = rect.width;
      H = rect.height;
      canvas!.width = Math.round(W * dpr);
      canvas!.height = Math.round(H * dpr);
      canvas!.style.width = `${W}px`;
      canvas!.style.height = `${H}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      registry = { x: W * 0.72, y: H * 0.42 };
      seed = 42;
      nodes = [];
      const count = W < 640 ? 9 : 14;
      for (let i = 0; i < count; i++) {
        // keep a margin and avoid the registry's immediate surroundings
        let x = 0;
        let y = 0;
        for (let tries = 0; tries < 20; tries++) {
          x = W * (0.06 + rand() * 0.88);
          y = H * (0.1 + rand() * 0.8);
          const d = Math.hypot(x - registry.x, y - registry.y);
          if (d > 90) break;
        }
        nodes.push({ x, y, r: 3.5 + rand() * 2.5, phase: rand() * Math.PI * 2 });
      }
      attempts = [];
      edges = [];
    }

    function drawNode(n: Node, t: number) {
      const pulse = 1 + 0.12 * Math.sin(t * 1.4 + n.phase);
      ctx!.beginPath();
      ctx!.arc(n.x, n.y, n.r * 3.2 * pulse, 0, Math.PI * 2);
      ctx!.fillStyle = rgba(PURPLE, isDark ? 0.1 : 0.08);
      ctx!.fill();
      ctx!.beginPath();
      ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx!.fillStyle = rgba(PURPLE, isDark ? 0.9 : 0.75);
      ctx!.fill();
    }

    function drawRegistry(t: number) {
      const pulse = 1 + 0.06 * Math.sin(t * 0.9);
      for (let i = 3; i >= 1; i--) {
        ctx!.beginPath();
        ctx!.arc(registry.x, registry.y, 10 + i * 9 * pulse, 0, Math.PI * 2);
        ctx!.strokeStyle = rgba(PURPLE, (isDark ? 0.22 : 0.16) / i);
        ctx!.lineWidth = 1;
        ctx!.stroke();
      }
      ctx!.beginPath();
      ctx!.arc(registry.x, registry.y, 7, 0, Math.PI * 2);
      ctx!.fillStyle = rgba(PURPLE, 0.95);
      ctx!.fill();
      ctx!.beginPath();
      ctx!.arc(registry.x, registry.y, 3, 0, Math.PI * 2);
      ctx!.fillStyle = isDark ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.95)";
      ctx!.fill();
    }

    function lerp(ax: number, ay: number, bx: number, by: number, p: number) {
      return [ax + (bx - ax) * p, ay + (by - ay) * p] as const;
    }

    function drawPulse(x: number, y: number, color: Rgb) {
      ctx!.beginPath();
      ctx!.arc(x, y, 6, 0, Math.PI * 2);
      ctx!.fillStyle = rgba(color, 0.18);
      ctx!.fill();
      ctx!.beginPath();
      ctx!.arc(x, y, 2.4, 0, Math.PI * 2);
      ctx!.fillStyle = rgba(color, 0.95);
      ctx!.fill();
    }

    function drawAttempt(at: Attempt, t: number) {
      const A = nodes[at.a];
      const B = nodes[at.b];
      const age = t - at.start;

      // attempt line (dashed) growing 0 -> 1s
      const lineP = Math.min(1, age / 1);
      ctx!.save();
      ctx!.setLineDash([4, 5]);
      ctx!.strokeStyle = rgba(BLUE, 0.35);
      ctx!.lineWidth = 1;
      ctx!.beginPath();
      ctx!.moveTo(A.x, A.y);
      const [lx, ly] = lerp(A.x, A.y, B.x, B.y, lineP);
      ctx!.lineTo(lx, ly);
      ctx!.stroke();
      ctx!.restore();

      // verification pulses: each endpoint -> registry -> back (1s to 2.2s)
      if (age > 1 && age < 2.2) {
        const p = (age - 1) / 1.2; // 0..1
        const leg = p < 0.5 ? p * 2 : (p - 0.5) * 2;
        for (const n of [A, B]) {
          const [px, py] =
            p < 0.5
              ? lerp(n.x, n.y, registry.x, registry.y, leg)
              : lerp(registry.x, registry.y, n.x, n.y, leg);
          drawPulse(px, py, BLUE);
          // faint trace to the registry while the pulse flies
          ctx!.strokeStyle = rgba(BLUE, 0.1);
          ctx!.lineWidth = 1;
          ctx!.beginPath();
          ctx!.moveTo(n.x, n.y);
          ctx!.lineTo(registry.x, registry.y);
          ctx!.stroke();
        }
      }

      // verdict flash 2.2s -> 2.8s
      if (age >= 2.2 && age < 2.8) {
        const f = 1 - (age - 2.2) / 0.6;
        ctx!.strokeStyle = at.ok ? rgba(GREEN, 0.35 + 0.55 * f) : rgba(RED, 0.4 * f);
        ctx!.lineWidth = at.ok ? 2 : 1.2;
        ctx!.beginPath();
        ctx!.moveTo(A.x, A.y);
        ctx!.lineTo(B.x, B.y);
        ctx!.stroke();
      }
    }

    function drawEdge(e: Edge, t: number) {
      const A = nodes[e.a];
      const B = nodes[e.b];
      const age = t - e.born;
      const fade = Math.min(1, age / 0.4);
      const alpha = (isDark ? 0.38 : 0.3) * fade;
      ctx!.strokeStyle = rgba(GREEN, alpha);
      ctx!.lineWidth = 1.4;
      ctx!.beginPath();
      ctx!.moveTo(A.x, A.y);
      ctx!.lineTo(B.x, B.y);
      ctx!.stroke();
    }

    function frame(nowMs: number) {
      const t = nowMs / 1000;
      const dt = last ? t - last : 0;
      last = t;
      void dt;

      ctx!.clearRect(0, 0, W, H);
      ctx!.globalCompositeOperation = isDark ? "lighter" : "source-over";

      // subtle parallax drift toward the mouse
      const ox = (mouseX - 0.5) * 10;
      const oy = (mouseY - 0.5) * 8;
      ctx!.save();
      ctx!.translate(ox, oy);

      for (const e of edges) drawEdge(e, t);
      for (const at of attempts) drawAttempt(at, t);
      for (const n of nodes) drawNode(n, t);
      drawRegistry(t);

      ctx!.restore();
      ctx!.globalCompositeOperation = "source-over";

      // lifecycle: finish attempts, promote verified ones to edges
      attempts = attempts.filter((at) => {
        const age = t - at.start;
        if (age >= 2.8) {
          if (at.ok && !edges.some((e) =>
            (e.a === at.a && e.b === at.b) || (e.a === at.b && e.b === at.a)
          )) {
            edges.push({ a: at.a, b: at.b, born: t });
            if (edges.length > 9) edges.shift();
          }
          return false;
        }
        return true;
      });

      // schedule the next attempt
      if (t >= nextAttemptAt && attempts.length < 3 && nodes.length > 2) {
        const a = Math.floor(rand() * nodes.length);
        let b = Math.floor(rand() * nodes.length);
        if (b === a) b = (b + 1) % nodes.length;
        attempts.push({ a, b, start: t, ok: rand() > 0.22 });
        nextAttemptAt = t + 1.4 + rand() * 1.4;
      }

      raf = requestAnimationFrame(frame);
    }

    function staticFrame() {
      // reduced motion: one calm, fully-connected frame
      ctx!.clearRect(0, 0, W, H);
      for (let i = 0; i < Math.min(6, nodes.length - 1); i++) {
        edges.push({ a: i, b: (i + 3) % nodes.length, born: -10 });
      }
      for (const e of edges) drawEdge(e, 0);
      for (const n of nodes) drawNode(n, 0);
      drawRegistry(0);
    }

    layout();

    const onResize = () => {
      layout();
      if (reduce) staticFrame();
    };
    window.addEventListener("resize", onResize);

    const onMouse = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = e.clientY / window.innerHeight;
    };

    if (reduce) {
      staticFrame();
    } else {
      window.addEventListener("mousemove", onMouse);
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
