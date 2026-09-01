"use client";

import { useEffect, useRef } from "react";

const PALETTE = [
  { r: 34, g: 211, b: 238 },
  { r: 59, g: 130, b: 246 },
  { r: 0,  g: 229, b: 255 },
];

const BOUNDS = 1000;
const FOCAL_LENGTH = 800;
const MAX_LINE_DIST = 280;
const BASE_CAMERA_Z = 1600;

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  color: { r: number; g: number; b: number };
  baseSize: number;
  phase: number;
}

function rotateX(y: number, z: number, angle: number) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return { y: y * cos - z * sin, z: y * sin + z * cos };
}

function rotateY(x: number, z: number, angle: number) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return { x: x * cos + z * sin, z: -x * sin + z * cos };
}

function rotateZ(x: number, y: number, angle: number) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return { x: x * cos - y * sin, y: x * sin + y * cos };
}

interface DataFlowBackgroundProps {
  count?: number;
  className?: string;
}

export default function DataFlowBackground({
  count = 120,
  className = "",
}: DataFlowBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let targetScrollY = window.scrollY;
    let currentScrollY = window.scrollY;

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    let W = 0;
    let H = 0;
    let particles: Particle[] = [];
    let raf = 0;
    const startTime = performance.now();

    let seed = 0x8a7b6c5d;
    const rng = () => {
      seed ^= seed << 13;
      seed ^= seed >> 17;
      seed ^= seed << 5;
      return ((seed >>> 0) / 0xffffffff);
    };

    const initParticles = () => {
      seed = 0x8a7b6c5d;
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: (rng() - 0.5) * BOUNDS * 2,
          y: (rng() - 0.5) * BOUNDS * 2,
          z: (rng() - 0.5) * BOUNDS * 2,
          vx: (rng() - 0.5) * 8,
          vy: (rng() - 0.5) * 8,
          vz: (rng() - 0.5) * 8,
          color: PALETTE[Math.floor(rng() * PALETTE.length)],
          baseSize: 1.5 + rng() * 2.5,
          phase: rng() * Math.PI * 2,
        });
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio ?? 1, 2);
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.scale(dpr, dpr);
      if (particles.length === 0) initParticles();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const tick = (ts: number) => {
      const now = (ts - startTime) / 1000;
      currentScrollY += (targetScrollY - currentScrollY) * 0.04;

      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";

      const scrollInfluence = currentScrollY * 0.0005;
      const angleX = now * 0.05 + scrollInfluence;
      const angleY = now * 0.07 + scrollInfluence * 1.5;
      const angleZ = now * 0.02;

      const cameraZ = BASE_CAMERA_Z + currentScrollY * 0.3;

      const projected: Array<{
        px: number;
        py: number;
        scale: number;
        z: number;
        p: Particle;
      }> = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx * 0.16;
        p.y += p.vy * 0.16;
        p.z += p.vz * 0.16;

        if (p.x < -BOUNDS) p.x = BOUNDS; else if (p.x > BOUNDS) p.x = -BOUNDS;
        if (p.y < -BOUNDS) p.y = BOUNDS; else if (p.y > BOUNDS) p.y = -BOUNDS;
        if (p.z < -BOUNDS) p.z = BOUNDS; else if (p.z > BOUNDS) p.z = -BOUNDS;

        const { y: ry, z: rz } = rotateX(p.y, p.z, angleX);
        const { x: rx, z: rz2 } = rotateY(p.x, rz, angleY);
        const { x: rx2, y: ry2 } = rotateZ(rx, ry, angleZ);

        const zDepth = rz2 + cameraZ;
        if (zDepth > 0) {
          const scale = FOCAL_LENGTH / zDepth;
          const px = rx2 * scale + W / 2;
          const py = ry2 * scale + H / 2;
          
          projected.push({ px, py, scale, z: rz2, p });
        }
      }

      projected.sort((a, b) => b.z - a.z);

      ctx.lineWidth = 1;
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        let connections = 0;
        for (let j = i + 1; j < projected.length; j++) {
          if (connections > 4) break;

          const p2 = projected[j];
          const dx = p1.p.x - p2.p.x;
          const dy = p1.p.y - p2.p.y;
          const dz = p1.p.z - p2.p.z;
          const distSq = dx*dx + dy*dy + dz*dz;

          if (distSq < MAX_LINE_DIST * MAX_LINE_DIST) {
            const dist = Math.sqrt(distSq);
            const distFade = 1 - (dist / MAX_LINE_DIST);
            const depthFade = Math.max(0, 1 - ((p1.z + BOUNDS) / (BOUNDS * 2.5)));
            const pulse = 0.5 + 0.5 * Math.sin(now * 2 + p1.p.phase);
            const alpha = distFade * depthFade * pulse * 0.35;

            if (alpha > 0.01) {
              ctx.beginPath();
              ctx.moveTo(p1.px, p1.py);
              ctx.lineTo(p2.px, p2.py);
              
              const grad = ctx.createLinearGradient(p1.px, p1.py, p2.px, p2.py);
              grad.addColorStop(0, `rgba(${p1.p.color.r}, ${p1.p.color.g}, ${p1.p.color.b}, ${alpha})`);
              grad.addColorStop(1, `rgba(${p2.p.color.r}, ${p2.p.color.g}, ${p2.p.color.b}, ${alpha})`);
              
              ctx.strokeStyle = grad;
              ctx.stroke();
              connections++;
            }
          }
        }
      }

      for (let i = 0; i < projected.length; i++) {
        const { px, py, scale, z, p } = projected[i];
        
        const depthFade = Math.max(0, 1 - ((z + BOUNDS) / (BOUNDS * 2.5)));
        const pulse = 0.7 + 0.3 * Math.sin(now * 3 + p.phase);
        const alpha = depthFade * pulse * 0.8;
        
        if (alpha > 0.01) {
          const radius = p.baseSize * scale * 1.5;
          ctx.shadowBlur = radius * 3;
          ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha})`;
          
          ctx.beginPath();
          ctx.arc(px, py, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha})`;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
