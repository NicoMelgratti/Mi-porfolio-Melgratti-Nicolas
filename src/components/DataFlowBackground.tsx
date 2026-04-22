"use client";

import { useEffect, useRef } from "react";

/* ──────────────────────────────────────────────────────────────────────────
   PALETTE & CONSTANTS
────────────────────────────────────────────────────────────────────────── */
const PALETTE = [
  { r: 34, g: 211, b: 238 },  // Cyan
  { r: 59, g: 130, b: 246 },  // Soft Blue
  { r: 0,  g: 229, b: 255 },  // Neon Cyan
];

const BOUNDS = 1000;         // 3D space boundaries (-BOUNDS to BOUNDS)
const FOCAL_LENGTH = 800;    // Camera focal length
const MAX_LINE_DIST = 280;   // Max 3D distance to draw a line between nodes
const BASE_CAMERA_Z = 1600;  // Default camera distance

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

/* ──────────────────────────────────────────────────────────────────────────
   MATH UTILS
────────────────────────────────────────────────────────────────────────── */
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

/* ──────────────────────────────────────────────────────────────────────────
   COMPONENT
────────────────────────────────────────────────────────────────────────── */
interface DataFlowBackgroundProps {
  /** How many particles to render in the 3D space */
  count?: number;
  className?: string;
}

export default function DataFlowBackground({
  count = 120, // Reduced from pure 2D, but 120 is perfect for O(N^2) 3D plexus
  className = "",
}: DataFlowBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Scroll state for parallax & rotation
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
    let startTime = performance.now();

    // Deterministic RNG for consistent layout
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
          vx: (rng() - 0.5) * 8, // Very slow drift
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
      
      // Ultra-smooth scroll interpolation
      currentScrollY += (targetScrollY - currentScrollY) * 0.04;

      ctx.clearRect(0, 0, W, H);
      
      // Aesthetic setup
      ctx.globalCompositeOperation = "lighter";

      // Global rotation based on time AND scroll position
      const scrollInfluence = currentScrollY * 0.0005;
      const angleX = now * 0.05 + scrollInfluence;
      const angleY = now * 0.07 + scrollInfluence * 1.5;
      const angleZ = now * 0.02;

      // Camera depth parallax: push back slightly on scroll
      const cameraZ = BASE_CAMERA_Z + currentScrollY * 0.3;

      const projected: Array<{
        px: number;
        py: number;
        scale: number;
        z: number;
        p: Particle;
      }> = [];

      // Update and project particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Gentle movement
        p.x += p.vx * 0.16;
        p.y += p.vy * 0.16;
        p.z += p.vz * 0.16;

        // Wrap around bounds
        if (p.x < -BOUNDS) p.x = BOUNDS; else if (p.x > BOUNDS) p.x = -BOUNDS;
        if (p.y < -BOUNDS) p.y = BOUNDS; else if (p.y > BOUNDS) p.y = -BOUNDS;
        if (p.z < -BOUNDS) p.z = BOUNDS; else if (p.z > BOUNDS) p.z = -BOUNDS;

        // Apply 3D rotations
        let { y: ry, z: rz } = rotateX(p.y, p.z, angleX);
        let { x: rx, z: rz2 } = rotateY(p.x, rz, angleY);
        let { x: rx2, y: ry2 } = rotateZ(rx, ry, angleZ);

        // Project to 2D
        const zDepth = rz2 + cameraZ;
        if (zDepth > 0) { // Only render if in front of camera
          const scale = FOCAL_LENGTH / zDepth;
          const px = rx2 * scale + W / 2;
          const py = ry2 * scale + H / 2;
          
          projected.push({ px, py, scale, z: rz2, p });
        }
      }

      // Sort by Z depth (distant objects first)
      projected.sort((a, b) => b.z - a.z);

      // Draw Lines (Plexus Network)
      ctx.lineWidth = 1;
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        
        // Optimize: only check ahead, and limit connections to prevent clutter
        let connections = 0;
        for (let j = i + 1; j < projected.length; j++) {
          if (connections > 4) break; // Max 4 lines per node for minimalism

          const p2 = projected[j];
          
          // Calculate true 3D distance between rotated points
          const dx = p1.p.x - p2.p.x;
          const dy = p1.p.y - p2.p.y;
          const dz = p1.p.z - p2.p.z;
          const distSq = dx*dx + dy*dy + dz*dz;

          if (distSq < MAX_LINE_DIST * MAX_LINE_DIST) {
            const dist = Math.sqrt(distSq);
            // Opacity based on distance AND depth (fade to black in distance)
            const distFade = 1 - (dist / MAX_LINE_DIST);
            const depthFade = Math.max(0, 1 - ((p1.z + BOUNDS) / (BOUNDS * 2.5)));
            
            // Subtle pulse based on time
            const pulse = 0.5 + 0.5 * Math.sin(now * 2 + p1.p.phase);
            const alpha = distFade * depthFade * pulse * 0.35; // Soft translucent lines

            if (alpha > 0.01) {
              ctx.beginPath();
              ctx.moveTo(p1.px, p1.py);
              ctx.lineTo(p2.px, p2.py);
              
              // Gradient line between colors
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

      // Draw Nodes (Particles)
      for (let i = 0; i < projected.length; i++) {
        const { px, py, scale, z, p } = projected[i];
        
        const depthFade = Math.max(0, 1 - ((z + BOUNDS) / (BOUNDS * 2.5)));
        const pulse = 0.7 + 0.3 * Math.sin(now * 3 + p.phase);
        const alpha = depthFade * pulse * 0.8;
        
        if (alpha > 0.01) {
          const radius = p.baseSize * scale * 1.5;
          
          // Bioluminescent glow effect
          ctx.shadowBlur = radius * 3;
          ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha})`;
          
          ctx.beginPath();
          ctx.arc(px, py, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha})`;
          ctx.fill();
          
          // Reset shadow for next operations
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
