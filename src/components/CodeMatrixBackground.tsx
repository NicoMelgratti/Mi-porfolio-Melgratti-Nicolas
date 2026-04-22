"use client";

import { useEffect, useRef } from "react";

export default function CodeMatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    
    // Resize handler
    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", resize);
    resize();

    // Characters for Matrix effect
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";
    const fontSize = 16;
    let columns = Math.floor(width / fontSize);
    let drops: number[] = [];
    
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * height; // Start at random vertical positions
    }

    let lastTime = 0;
    const draw = (time: number) => {
      // Throttle framerate for a cooler retro effect (e.g. 24 fps -> ~41ms per frame)
      if (time - lastTime < 40) {
        requestAnimationFrame(draw);
        return;
      }
      lastTime = time;

      // Re-evaluate columns in case of resize
      if (columns !== Math.floor(width / fontSize)) {
        columns = Math.floor(width / fontSize);
        drops = [];
        for (let x = 0; x < columns; x++) {
          drops[x] = Math.random() * height;
        }
      }

      // Translucent black background to create trail effect
      ctx.fillStyle = "rgba(2, 6, 23, 0.15)"; // slate-950
      ctx.fillRect(0, 0, width, height);

      // Cyan color for text
      ctx.fillStyle = "#22d3ee"; // text-cyan-400
      ctx.font = `500 ${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        
        // x, y coordinate
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Draw character
        ctx.fillText(text, x, y);

        // Reset drop to top randomly, or if it reached the bottom
        if (y > height && Math.random() > 0.95) {
          drops[i] = 0;
        }

        // Move drop down
        drops[i]++;
      }
      
      requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.25]"
    />
  );
}
