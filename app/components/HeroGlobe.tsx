"use client";

import { useEffect, useRef } from "react";

/* -------------------------------------------------------------------------- *
 *  verana.io hero — the Trust Accretion Globe.
 *
 *  A wireframe-suggested sphere carries ecosystem clusters on its surface
 *  (purple root hex + participant dots in the root's tangent plane).
 *  Corporation service nodes sit between clusters with permanent thin
 *  membership arcs to the roots of the ecosystems they joined ("one
 *  participant, many ecosystems"). The registry core glows at the globe's
 *  center, visible through the translucent sphere.
 *
 *  The story is verify-first, restaged in 3D: corporations repeatedly
 *  attempt cross-cluster connections; each attempt's pulses dive through
 *  the sphere to the registry core and back before the arc may turn Signal
 *  Green; failures fade unconnected. Verified arcs persist (capped), so the
 *  globe slowly accretes a green lattice: a world networked only through
 *  verification.
 *
 *  Engineering bar shared with the Foundation's HeroGraph: zero-dependency
 *  Canvas 2D + hand-rolled perspective projection, a few kB, slow idle
 *  rotation + mouse parallax + scroll tilt, additive glow on dark /
 *  source-over on light (theme re-read via MutationObserver), honours
 *  prefers-reduced-motion (one static frame with a pre-accreted lattice),
 *  decorative canvas (aria-hidden, pointer-events: none).
 * -------------------------------------------------------------------------- */

type Rgb = readonly [number, number, number];
type Vec3 = { x: number; y: number; z: number };

const PURPLE: Rgb = [118, 62, 240]; // ecosystem authority / registry
const BLUE: Rgb = [46, 107, 230]; // corporation services (dark)
const BLUE_LIGHT: Rgb = [31, 87, 201]; // AA-adjusted accent on light
const GREEN: Rgb = [41, 198, 140]; // the verification payoff

const rgba = (c: Rgb, a: number) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;

/** Global speed dial for idle motion (rotation, drift, traffic particles).
 *  Verification-event phase timings run on the raw clock so the payoff
 *  cadence stays stable regardless of this dial. */
const ANIMATION_SPEED = 0.5;

const SPHERE_R = 0.42; // world units; world roughly [-0.5, 0.5] per axis

/* ----------------------------------------------------------------------- */
/*  Scene definition (unit-sphere anchors; hand-placed for even coverage)  */
/* ----------------------------------------------------------------------- */

const deg = Math.PI / 180;

/** lat/lon (degrees) to a unit vector. */
function ll(lat: number, lon: number): Vec3 {
  const la = lat * deg;
  const lo = lon * deg;
  return {
    x: Math.cos(la) * Math.sin(lo),
    y: -Math.sin(la),
    z: -Math.cos(la) * Math.cos(lo),
  };
}

const norm = (v: Vec3): Vec3 => {
  const d = Math.hypot(v.x, v.y, v.z) || 1;
  return { x: v.x / d, y: v.y / d, z: v.z / d };
};

/** Two tangent directions at a unit vector (for cluster layout). */
function tangents(u: Vec3): [Vec3, Vec3] {
  const ref = Math.abs(u.y) > 0.9 ? { x: 1, y: 0, z: 0 } : { x: 0, y: 1, z: 0 };
  const t1 = norm({
    x: u.y * ref.z - u.z * ref.y,
    y: u.z * ref.x - u.x * ref.z,
    z: u.x * ref.y - u.y * ref.x,
  });
  const t2 = {
    x: u.y * t1.z - u.z * t1.y,
    y: u.z * t1.x - u.x * t1.z,
    z: u.x * t1.y - u.y * t1.x,
  };
  return [t1, t2];
}

/** Spherical interpolation between two unit vectors. */
function slerp(a: Vec3, b: Vec3, t: number): Vec3 {
  const dot = Math.max(-1, Math.min(1, a.x * b.x + a.y * b.y + a.z * b.z));
  const omega = Math.acos(dot);
  if (omega < 1e-4) return a;
  const so = Math.sin(omega);
  const ka = Math.sin((1 - t) * omega) / so;
  const kb = Math.sin(t * omega) / so;
  return { x: ka * a.x + kb * b.x, y: ka * a.y + kb * b.y, z: ka * a.z + kb * b.z };
}

type Participant = { u: Vec3; kind: "service" | "person" };
type Cluster = { root: Vec3; participants: Participant[] };

/** Build a cluster: participants offset in the root's tangent plane, then
 *  renormalized back onto the sphere (stays circular at any latitude). */
function cluster(lat: number, lon: number, seed: number, count: number): Cluster {
  const root = ll(lat, lon);
  const [t1, t2] = tangents(root);
  const participants: Participant[] = [];
  for (let i = 0; i < count; i++) {
    const ang = (i / count) * Math.PI * 2 + seed;
    const rad = 0.16 + 0.07 * ((i * 2654435761) % 97) / 97;
    const u = norm({
      x: root.x + (t1.x * Math.cos(ang) + t2.x * Math.sin(ang)) * rad,
      y: root.y + (t1.y * Math.cos(ang) + t2.y * Math.sin(ang)) * rad,
      z: root.z + (t1.z * Math.cos(ang) + t2.z * Math.sin(ang)) * rad,
    });
    participants.push({ u, kind: i % 2 === 0 ? "service" : "person" });
  }
  return { root, participants };
}

const CLUSTERS: Cluster[] = [
  cluster(18, -25, 0.3, 5),
  cluster(42, 55, 1.4, 4),
  cluster(-28, 28, 2.2, 5),
  cluster(-8, 118, 0.9, 4),
  cluster(30, -115, 1.9, 4),
  cluster(62, -60, 0.7, 4),
  cluster(55, 150, 2.6, 3),
  cluster(-50, -30, 1.1, 4),
  cluster(-45, 100, 0.5, 3),
  cluster(5, -170, 1.7, 4),
  cluster(-60, -130, 2.9, 3),
  cluster(70, 90, 0.2, 4),
];

// Corporations: surface anchors between clusters, lifted slightly off the
// sphere; each joined 2-3 ecosystems (indices into CLUSTERS).
const CORPS: { u: Vec3; members: number[] }[] = [
  { u: ll(4, 12), members: [0, 2, 1] },
  { u: ll(14, 82), members: [1, 3] },
  { u: ll(-30, -60), members: [2, 4, 0] },
];

const CORP_LIFT = 1.06;
const MEMBER_LIFT = 0.1; // membership arc apex above surface
const VERIFY_LIFT = 0.17; // verification arc apex

/* ----------------------------------------------------------------------- */

export default function HeroGlobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let isDark = document.documentElement.getAttribute("data-theme") !== "light";
    const themeObserver = new MutationObserver(() => {
      isDark = document.documentElement.getAttribute("data-theme") !== "light";
      if (reduceMotion) render(performance.now());
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    /* ---------- mutable state ---------------------------------------- */

    let width = 0;
    let height = 0;
    let rafId = 0;
    const start = performance.now();
    let small = false;

    let targetMx = 0;
    let targetMy = 0;
    let mx = 0;
    let my = 0;
    let targetScroll = 0;
    let scroll = 0;

    // Deterministic PRNG for attempt scheduling (stable feel across loads).
    let seed = 1234567;
    const rand = () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296;
      return seed / 4294967296;
    };

    type Verified = { a: Vec3; b: Vec3; born: number };
    type Attempt = {
      corp: number;
      target: Vec3;
      t0: number; // raw seconds
      ok: boolean;
    };
    let attempts: Attempt[] = [];
    let verified: Verified[] = [];
    let nextAttemptAt = 1.2;

    /* ---------- sizing ------------------------------------------------ */

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      small = width < 640;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const scaleRef = () => Math.max(0.55, Math.min(width, height) / 900);
    const worldScale = () => Math.min(width, height) * 1.15;
    // Globe center sits right-of-center so the hero copy stays clear.
    const cx = () => width * (small ? 0.5 : 0.64);
    const cy = () => height * (small ? 0.42 : 0.5);

    /* ---------- math --------------------------------------------------- */

    const rotate = (v: Vec3, yaw: number, pitch: number): Vec3 => {
      const cyw = Math.cos(yaw);
      const syw = Math.sin(yaw);
      const x1 = v.x * cyw + v.z * syw;
      const z1 = -v.x * syw + v.z * cyw;
      const cp = Math.cos(pitch);
      const sp = Math.sin(pitch);
      const y1 = v.y * cp - z1 * sp;
      const z2 = v.y * sp + z1 * cp;
      return { x: x1, y: y1, z: z2 };
    };

    const FOCAL = 1.1;
    const project = (v: Vec3) => {
      const k = FOCAL / (FOCAL + v.z);
      const ws = worldScale();
      return { x: cx() + v.x * ws * k, y: cy() + v.y * ws * k, k, z: v.z };
    };

    const fog = (z: number) => Math.max(0.3, Math.min(1, (0.5 - z) / 0.9));

    /** Surface visibility: 1 on the front hemisphere, fading to a ghost on
     *  the back (the globe reads as a volume, not a disc). */
    const hemi = (rotZ: number) => {
      const back = rotZ > 0;
      const ghost = isDark ? 0.28 : 0.12;
      const t = Math.max(0, Math.min(1, Math.abs(rotZ) / (SPHERE_R * 0.9)));
      return back ? Math.max(ghost, 1 - t * (1 - ghost) - 0.4) : 1;
    };

    /* ---------- drawing helpers --------------------------------------- */

    const hexPath = (x: number, y: number, r: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        const px = x + r * Math.cos(a);
        const py = y + r * Math.sin(a);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    /** Draw an arc between two unit vectors, lifted above the surface.
     *  from/to are clamped by [u0, u1] to draw partial (growing) arcs. */
    const drawSurfaceArc = (
      a: Vec3,
      b: Vec3,
      lift: number,
      color: Rgb,
      alpha: number,
      lineWidth: number,
      yaw: number,
      pitch: number,
      u0 = 0,
      u1 = 1,
      dashed = false
    ) => {
      const segs = small ? 14 : 22;
      ctx.save();
      if (dashed) ctx.setLineDash([4 * scaleRef(), 5 * scaleRef()]);
      ctx.lineCap = "round";
      let started = false;
      let prev: { x: number; y: number } | null = null;
      for (let i = 0; i <= segs; i++) {
        const t = u0 + ((u1 - u0) * i) / segs;
        const u = slerp(a, b, t);
        const liftK = 1 + lift * Math.sin(Math.PI * t);
        const world = { x: u.x * SPHERE_R * liftK, y: u.y * SPHERE_R * liftK, z: u.z * SPHERE_R * liftK };
        const r = rotate(world, yaw, pitch);
        const p = project(r);
        const lenFade = 0.3 + 0.7 * Math.sin(Math.PI * t);
        const segAlpha = alpha * lenFade * fog(r.z) * hemi(r.z);
        if (prev && started) {
          ctx.strokeStyle = rgba(color, segAlpha);
          ctx.lineWidth = lineWidth * scaleRef();
          ctx.beginPath();
          ctx.moveTo(prev.x, prev.y);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        }
        prev = { x: p.x, y: p.y };
        started = true;
      }
      ctx.restore();
    };

    const drawPulse = (world: Vec3, color: Rgb, alpha: number, radius: number, yaw: number, pitch: number) => {
      const r = rotate(world, yaw, pitch);
      const p = project(r);
      const a = alpha * fog(r.z) * (isDark ? 1 : 0.8);
      const rad = radius * scaleRef() * Math.max(0.6, p.k);
      const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, rad * 4);
      glow.addColorStop(0, rgba(color, a * (isDark ? 0.55 : 0.4)));
      glow.addColorStop(1, rgba(color, 0));
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(p.x, p.y, rad * 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = rgba(color, Math.min(1, a + 0.3));
      ctx.beginPath();
      ctx.arc(p.x, p.y, rad, 0, Math.PI * 2);
      ctx.fill();
    };

    /* ---------- the verification lifecycle ---------------------------- */

    const REACH_END = 1.0;
    const RESOLVE_END = 2.4;
    const VERDICT_END = 3.1;

    const scheduleAttempts = (raw: number) => {
      const maxConcurrent = isDark && !small ? 3 : 2;
      if (raw >= nextAttemptAt && attempts.length < maxConcurrent) {
        const corp = Math.floor(rand() * CORPS.length) % CORPS.length;
        // target a root or participant in a cluster the corp did NOT join
        const foreign = CLUSTERS.map((_, i) => i).filter(
          (i) => !CORPS[corp].members.includes(i)
        );
        const clusterIdx = foreign[Math.floor(rand() * foreign.length) % foreign.length];
        const c = CLUSTERS[clusterIdx];
        const pick = Math.floor(rand() * (c.participants.length + 1));
        const target = pick === 0 ? c.root : c.participants[pick - 1].u;
        attempts.push({ corp, target, t0: raw, ok: rand() > 0.22 });
        nextAttemptAt = raw + 2.2 + rand() * 2.2;
      }
      attempts = attempts.filter((at) => {
        const age = raw - at.t0;
        if (age >= VERDICT_END) {
          if (at.ok) {
            verified.push({ a: CORPS[at.corp].u, b: at.target, born: raw });
            const cap = small ? 8 : 12;
            if (verified.length > cap) verified.shift();
          }
          return false;
        }
        return true;
      });
    };

    const drawAttempt = (at: Attempt, raw: number, yaw: number, pitch: number) => {
      const age = raw - at.t0;
      const corpU = CORPS[at.corp].u;
      const blue = isDark ? BLUE : BLUE_LIGHT;

      // REACH: dashed arc grows toward the target
      const damp = isDark ? 1 : 0.75;
      const reachT = Math.min(1, age / REACH_END);
      drawSurfaceArc(corpU, at.target, VERIFY_LIFT, blue, 0.5 * damp, 1.1, yaw, pitch, 0, reachT, true);

      // RESOLVE: pulses dive from both endpoints to the registry core and back
      if (age > REACH_END && age <= RESOLVE_END) {
        const p = (age - REACH_END) / (RESOLVE_END - REACH_END); // 0..1
        const leg = p < 0.5 ? p * 2 : (p - 0.5) * 2;
        for (const endU of [corpU, at.target]) {
          const surf = { x: endU.x * SPHERE_R, y: endU.y * SPHERE_R, z: endU.z * SPHERE_R };
          const k = p < 0.5 ? 1 - leg : leg; // toward core, then back out
          const world = { x: surf.x * k, y: surf.y * k, z: surf.z * k };
          drawPulse(world, blue, 0.85, 2.2, yaw, pitch);
        }
      }

      // VERDICT: green sweep on success, fade-out on failure
      if (age > RESOLVE_END) {
        const v = (age - RESOLVE_END) / (VERDICT_END - RESOLVE_END); // 0..1
        if (at.ok) {
          drawSurfaceArc(corpU, at.target, VERIFY_LIFT, GREEN, 0.75 * damp, 1.5, yaw, pitch, 0, v);
          const sparkU = slerp(corpU, at.target, v);
          const liftK = 1 + VERIFY_LIFT * Math.sin(Math.PI * v);
          drawPulse(
            { x: sparkU.x * SPHERE_R * liftK, y: sparkU.y * SPHERE_R * liftK, z: sparkU.z * SPHERE_R * liftK },
            GREEN,
            0.9,
            2.4,
            yaw,
            pitch
          );
        } else {
          drawSurfaceArc(corpU, at.target, VERIFY_LIFT, blue, 0.4 * damp * (1 - v), 1, yaw, pitch, 0, 1, true);
        }
      }
    };

    /* ---------- core registry flash state ------------------------------ */

    const coreFlash = (raw: number) => {
      // brightest when any attempt's pulses are at the core (leg midpoint)
      let f = 0;
      for (const at of attempts) {
        const age = raw - at.t0;
        if (age > REACH_END && age <= RESOLVE_END) {
          const p = (age - REACH_END) / (RESOLVE_END - REACH_END);
          f = Math.max(f, 1 - Math.abs(p - 0.5) * 4);
        }
      }
      return Math.max(0, f);
    };

    /* ---------- render -------------------------------------------------- */

    const render = (nowMs: number) => {
      const raw = (nowMs - start) / 1000;
      const timeSec = raw * ANIMATION_SPEED;

      mx += (targetMx - mx) * 0.07;
      my += (targetMy - my) * 0.07;
      scroll += (targetScroll - scroll) * 0.08;

      // Continuous slow spin + tilt + drift + parallax.
      const yaw = timeSec * 0.08 + mx * 0.3;
      const pitch = -0.35 + Math.sin(timeSec * 0.14) * 0.04 + my * 0.2 + scroll * 0.15;

      ctx.clearRect(0, 0, width, height);
      if (!reduceMotion) scheduleAttempts(raw);

      const ws = worldScale();
      const boost = isDark ? 1 : 0.78;

      /* -- sphere suggestion: limb + latitude rings -------------------- */
      ctx.strokeStyle = rgba(PURPLE, (isDark ? 0.22 : 0.16) * boost);
      ctx.lineWidth = 1 * scaleRef();
      ctx.beginPath();
      ctx.arc(cx(), cy(), SPHERE_R * ws, 0, Math.PI * 2);
      ctx.stroke();

      const lats = small ? [-35, 10] : [-40, 0, 40];
      for (const lat of lats) {
        const segs = small ? 28 : 40;
        let prev: { x: number; y: number; a: number } | null = null;
        for (let i = 0; i <= segs; i++) {
          const lon = (i / segs) * 360 - 180;
          const u = ll(lat, lon);
          const world = { x: u.x * SPHERE_R, y: u.y * SPHERE_R, z: u.z * SPHERE_R };
          const r = rotate(world, yaw, pitch);
          const p = project(r);
          const a = 0.17 * boost * hemi(r.z);
          if (prev) {
            ctx.strokeStyle = rgba(PURPLE, Math.min(prev.a, a));
            ctx.beginPath();
            ctx.moveTo(prev.x, prev.y);
            ctx.lineTo(p.x, p.y);
            ctx.stroke();
          }
          prev = { x: p.x, y: p.y, a };
        }
      }

      /* -- registry core: the Council validator ring --------------------
       * The network is governed and secured by the Verana Council: up to
       * 25 seats, every member running a validator. The core is that ring,
       * ghosted through the sphere: 25 seat points on a tilted, slowly
       * precessing 3D ring around a small kernel (the ledger). It flashes
       * when verification pulses arrive.
       * ------------------------------------------------------------------ */
      const flash = coreFlash(raw);
      const coreP = project(rotate({ x: 0, y: 0, z: 0 }, yaw, pitch));

      // kernel: the ledger itself
      ctx.fillStyle = rgba(PURPLE, (isDark ? 0.55 : 0.34) + flash * 0.4);
      ctx.beginPath();
      ctx.arc(coreP.x, coreP.y, (2.8 + flash * 1.2) * scaleRef(), 0, Math.PI * 2);
      ctx.fill();

      // 25 council seats on a tilted ring, precessing on its own clock
      const SEATS = 25;
      const RING_R = 0.15;
      const TILT = 0.95; // ring plane tilt vs the globe's equator
      const spin = timeSec * 0.22;
      let prevSeat: { x: number; y: number; a: number } | null = null;
      let firstSeat: { x: number; y: number; a: number } | null = null;
      for (let i = 0; i <= SEATS; i++) {
        const th = ((i % SEATS) / SEATS) * Math.PI * 2 + spin;
        const base = { x: Math.cos(th) * RING_R, y: 0, z: Math.sin(th) * RING_R };
        // tilt the ring plane around X
        const tilted = {
          x: base.x,
          y: -base.z * Math.sin(TILT),
          z: base.z * Math.cos(TILT),
        };
        const r = rotate(tilted, yaw, pitch);
        const p = project(r);
        const a = ((isDark ? 0.68 : 0.42) + flash * 0.32) * fog(r.z);
        // faint ring path connecting the seats
        if (prevSeat) {
          ctx.strokeStyle = rgba(PURPLE, Math.min(prevSeat.a, a) * 0.5);
          ctx.lineWidth = 0.8 * scaleRef();
          ctx.beginPath();
          ctx.moveTo(prevSeat.x, prevSeat.y);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        }
        if (i < SEATS) {
          ctx.fillStyle = rgba(PURPLE, Math.min(1, a));
          ctx.beginPath();
          ctx.arc(p.x, p.y, (1.8 + flash * 0.7) * scaleRef() * Math.max(0.6, p.k), 0, Math.PI * 2);
          ctx.fill();
        }
        prevSeat = { x: p.x, y: p.y, a };
        if (!firstSeat) firstSeat = prevSeat;
      }

      /* -- additive pass: arcs, pulses, traffic ------------------------- */
      ctx.globalCompositeOperation = isDark ? "lighter" : "source-over";

      // persisted verified lattice
      for (const v of verified) {
        const age = raw - v.born;
        const fade = Math.min(1, age / 0.8);
        drawSurfaceArc(v.a, v.b, VERIFY_LIFT * 0.7, GREEN, 0.42 * fade * boost, 1.2, yaw, pitch);
      }

      // corporation membership arcs + slow traffic
      const corpsShown = small ? CORPS.slice(0, 2) : CORPS;
      const blue = isDark ? BLUE : BLUE_LIGHT;
      corpsShown.forEach((corp, ci) => {
        corp.members.forEach((m, mi) => {
          drawSurfaceArc(corp.u, CLUSTERS[m].root, MEMBER_LIFT, blue, 0.45 * boost, 1.1, yaw, pitch);
          // one traffic particle per arc
          const t = ((timeSec * 0.25 + ci * 0.37 + mi * 0.53) % 1 + 1) % 1;
          const u = slerp(corp.u, CLUSTERS[m].root, t);
          const liftK = 1 + MEMBER_LIFT * Math.sin(Math.PI * t);
          const world = { x: u.x * SPHERE_R * liftK, y: u.y * SPHERE_R * liftK, z: u.z * SPHERE_R * liftK };
          const rz = rotate(world, yaw, pitch).z;
          if (hemi(rz) > 0.5) drawPulse(world, blue, 0.5, 1.3, yaw, pitch);
        });
      });

      // active verification attempts
      for (const at of attempts) drawAttempt(at, raw, yaw, pitch);

      ctx.globalCompositeOperation = "source-over";

      /* -- surface nodes: clusters + corporations ----------------------- */
      type NodeDraw = { z: number; draw: () => void };
      const nodes: NodeDraw[] = [];

      CLUSTERS.forEach((c, ci) => {
        const rootWorld = { x: c.root.x * SPHERE_R, y: c.root.y * SPHERE_R, z: c.root.z * SPHERE_R };
        const rRot = rotate(rootWorld, yaw, pitch);
        const rp = project(rRot);
        const rootA = fog(rRot.z) * hemi(rRot.z) * boost;

        // spokes root -> participants (cheap, drawn with the node pass)
        nodes.push({
          z: rRot.z,
          draw: () => {
            for (const part of c.participants) {
              const pw = { x: part.u.x * SPHERE_R, y: part.u.y * SPHERE_R, z: part.u.z * SPHERE_R };
              const pr = rotate(pw, yaw, pitch);
              const pp = project(pr);
              const a = 0.42 * Math.min(rootA, fog(pr.z) * hemi(pr.z) * boost);
              ctx.strokeStyle = rgba(PURPLE, a);
              ctx.lineWidth = 0.8 * scaleRef();
              ctx.beginPath();
              ctx.moveTo(rp.x, rp.y);
              ctx.lineTo(pp.x, pp.y);
              ctx.stroke();

              const kind = part.kind === "service" ? blue : GREEN;
              const pa = fog(pr.z) * hemi(pr.z) * boost;
              ctx.fillStyle = rgba(kind, Math.min(1, 0.95 * pa));
              ctx.beginPath();
              ctx.arc(pp.x, pp.y, 3 * scaleRef() * Math.max(0.6, pp.k), 0, Math.PI * 2);
              ctx.fill();
            }
            // root hex with halo (breathes on its own phase)
            const pulse = 1 + 0.08 * Math.sin(timeSec * 1.1 + ci * 1.7);
            const hr = 12 * scaleRef() * Math.max(0.6, rp.k) * pulse;
            const halo = ctx.createRadialGradient(rp.x, rp.y, 0, rp.x, rp.y, hr * 2.6);
            halo.addColorStop(0, rgba(PURPLE, 0.3 * rootA));
            halo.addColorStop(1, rgba(PURPLE, 0));
            ctx.fillStyle = halo;
            ctx.beginPath();
            ctx.arc(rp.x, rp.y, hr * 2.6, 0, Math.PI * 2);
            ctx.fill();
            hexPath(rp.x, rp.y, hr);
            ctx.fillStyle = isDark ? "rgba(11,11,18,0.75)" : "rgba(255,255,255,0.85)";
            ctx.fill();
            hexPath(rp.x, rp.y, hr);
            ctx.strokeStyle = rgba(PURPLE, Math.min(1, rootA));
            ctx.lineWidth = 1.4 * scaleRef();
            ctx.stroke();
          },
        });
      });

      corpsShown.forEach((corp, ci) => {
        const world = {
          x: corp.u.x * SPHERE_R * CORP_LIFT,
          y: corp.u.y * SPHERE_R * CORP_LIFT,
          z: corp.u.z * SPHERE_R * CORP_LIFT,
        };
        const r = rotate(world, yaw, pitch);
        const p = project(r);
        const a = fog(r.z) * hemi(r.z) * boost;
        nodes.push({
          z: r.z,
          draw: () => {
            const pulse = 1 + 0.1 * Math.sin(timeSec * 1.3 + ci * 2.1);
            const hr = 9.5 * scaleRef() * Math.max(0.6, p.k) * pulse;
            const halo = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, hr * 2.8);
            halo.addColorStop(0, rgba(blue, 0.36 * a));
            halo.addColorStop(1, rgba(blue, 0));
            ctx.fillStyle = halo;
            ctx.beginPath();
            ctx.arc(p.x, p.y, hr * 2.8, 0, Math.PI * 2);
            ctx.fill();
            hexPath(p.x, p.y, hr);
            ctx.fillStyle = isDark ? "rgba(11,11,18,0.75)" : "rgba(255,255,255,0.85)";
            ctx.fill();
            hexPath(p.x, p.y, hr);
            ctx.strokeStyle = rgba(blue, Math.min(1, a));
            ctx.lineWidth = 1.5 * scaleRef();
            ctx.stroke();
          },
        });
      });

      nodes.sort((a, b) => b.z - a.z);
      for (const n of nodes) n.draw();

      if (!reduceMotion) rafId = requestAnimationFrame(render);
    };

    /* ---------- static frame for reduced motion ------------------------ */

    const staticFrame = () => {
      // pre-accrete a small verified lattice so the still image tells the story
      verified = [
        { a: CORPS[0].u, b: CLUSTERS[3].root, born: -10 },
        { a: CORPS[1].u, b: CLUSTERS[4].root, born: -10 },
        { a: CORPS[2].u, b: CLUSTERS[1].root, born: -10 },
        { a: CORPS[0].u, b: CLUSTERS[4].participants[0].u, born: -10 },
      ];
      render(start + 9000);
    };

    /* ---------- events -------------------------------------------------- */

    const onMouse = (e: MouseEvent) => {
      targetMx = e.clientX / window.innerWidth - 0.5;
      targetMy = e.clientY / window.innerHeight - 0.5;
    };
    const onScroll = () => {
      const rect = canvas.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      targetScroll = Math.max(0, Math.min(1, -rect.top / vh));
    };
    const onResize = () => {
      resize();
      if (reduceMotion) staticFrame();
    };

    resize();
    window.addEventListener("resize", onResize);

    if (reduceMotion) {
      staticFrame();
    } else {
      window.addEventListener("mousemove", onMouse, { passive: true });
      window.addEventListener("scroll", onScroll, { passive: true });
      rafId = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
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
