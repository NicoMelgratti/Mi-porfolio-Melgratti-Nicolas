"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Circle } from 'lucide-react';

// A real-world TypeScript snippet inspired by the Zinerva project
const codeLines = [
  { tokens: [
    { text: '// Product service — Zinerva E-commerce', color: '#64748b', italic: true },
  ]},
  { tokens: [] }, // blank
  { tokens: [
    { text: 'import', color: '#a78bfa' },
    { text: ' { createClient } ', color: '#e2e8f0' },
    { text: 'from', color: '#a78bfa' },
    { text: " '@/lib/supabase'", color: '#34d399' },
    { text: ';', color: '#e2e8f0' },
  ]},
  { tokens: [
    { text: 'import', color: '#a78bfa' },
    { text: ' type { Product } ', color: '#e2e8f0' },
    { text: 'from', color: '#a78bfa' },
    { text: " '@/types'", color: '#34d399' },
    { text: ';', color: '#e2e8f0' },
  ]},
  { tokens: [] }, // blank
  { tokens: [
    { text: 'export async function ', color: '#38bdf8' },
    { text: 'getProducts', color: '#22d3ee' },
    { text: '(', color: '#e2e8f0' },
    { text: 'categoryId', color: '#fbbf24' },
    { text: '?: ', color: '#e2e8f0' },
    { text: 'string', color: '#a78bfa' },
    { text: '): ', color: '#e2e8f0' },
    { text: 'Promise', color: '#a78bfa' },
    { text: '<', color: '#e2e8f0' },
    { text: 'Product', color: '#34d399' },
    { text: '[]> {', color: '#e2e8f0' },
  ]},
  { tokens: [
    { text: '  const ', color: '#a78bfa' },
    { text: 'supabase', color: '#e2e8f0' },
    { text: ' = ', color: '#a78bfa' },
    { text: 'createClient', color: '#22d3ee' },
    { text: '();', color: '#e2e8f0' },
  ]},
  { tokens: [
    { text: '  let ', color: '#a78bfa' },
    { text: 'query', color: '#e2e8f0' },
    { text: ' = supabase', color: '#e2e8f0' },
    { text: '.from', color: '#38bdf8' },
    { text: "(", color: '#e2e8f0' },
    { text: "'products'", color: '#34d399' },
    { text: ')', color: '#e2e8f0' },
    { text: '.select', color: '#38bdf8' },
    { text: "(", color: '#e2e8f0' },
    { text: "'*'", color: '#34d399' },
    { text: ');', color: '#e2e8f0' },
  ]},
  { tokens: [
    { text: '  if ', color: '#a78bfa' },
    { text: '(categoryId) {', color: '#e2e8f0' },
  ]},
  { tokens: [
    { text: '    query', color: '#e2e8f0' },
    { text: ' = query', color: '#e2e8f0' },
    { text: '.eq', color: '#38bdf8' },
    { text: "('category_id', categoryId);", color: '#e2e8f0' },
  ]},
  { tokens: [
    { text: '  }', color: '#e2e8f0' },
  ]},
  { tokens: [
    { text: '  const { data, error } = ', color: '#e2e8f0' },
    { text: 'await', color: '#a78bfa' },
    { text: ' query;', color: '#e2e8f0' },
  ]},
  { tokens: [
    { text: '  if ', color: '#a78bfa' },
    { text: '(error) ', color: '#e2e8f0' },
    { text: 'throw', color: '#f87171' },
    { text: ' error;', color: '#e2e8f0' },
  ]},
  { tokens: [
    { text: '  return', color: '#a78bfa' },
    { text: ' data ?? [];', color: '#e2e8f0' },
  ]},
  { tokens: [
    { text: '}', color: '#e2e8f0' },
  ]},
];

export default function LiveCodeSnippet() {
  const [visibleCount, setVisibleCount] = useState(0);
  const hasStarted = React.useRef(false);

  useEffect(() => {
    const section = document.getElementById('live-code');
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          let i = 0;
          const interval = setInterval(() => {
            i++;
            setVisibleCount(i);
            if (i >= codeLines.length) clearInterval(interval);
          }, 110);
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="live-code" className="py-20 px-4 sm:px-8 md:px-16">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-end gap-5 mb-10 max-w-5xl mx-auto"
      >
        <div>
          <h2 className="font-headline text-3xl md:text-4xl font-black text-white">
            Live{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              Code
            </span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full mt-3" />
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 glass-subtle rounded-full text-[10px] font-bold tracking-widest text-cyan-300 uppercase border border-cyan-500/20 mb-0.5">
          <Circle size={7} className="fill-emerald-400 text-emerald-400" />
          TypeScript
        </span>
      </motion.div>

      {/* IDE Panel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="max-w-5xl mx-auto glass-violet rounded-2xl overflow-hidden neon-glow-violet"
      >
        {/* IDE Title Bar */}
        <div className="flex items-center gap-3 px-5 py-3.5 bg-white/[0.025] border-b border-violet-500/15">
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
          </div>
          <div className="flex-1 flex items-center justify-center gap-6">
            <span className="text-[11px] font-mono px-3 py-0.5 rounded-md bg-violet-500/15 border border-violet-400/25 text-violet-300">
              productService.ts
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-sans text-emerald-400 tracking-wide">LIVE</span>
          </div>
        </div>

        {/* Code Body */}
        <div className="flex overflow-hidden">
          {/* Line numbers */}
          <div className="select-none flex flex-col items-end px-4 py-5 bg-black/20 border-r border-violet-500/10 text-[12px] font-mono text-slate-600 leading-[1.75rem]">
            {codeLines.map((_, i) => (
              <span key={i} style={{ opacity: i < visibleCount ? 1 : 0 }}>
                {i + 1}
              </span>
            ))}
          </div>

          {/* Code content */}
          <div className="flex-1 overflow-x-auto px-6 py-5 text-[13px] font-mono leading-[1.75rem]">
            {codeLines.map((line, i) => (
              <div
                key={i}
                className="code-line-animate whitespace-pre"
                style={{
                  animationDelay: `${i * 0.11}s`,
                  opacity: i < visibleCount ? 1 : 0,
                }}
              >
                {line.tokens.length === 0 ? (
                  <span>&nbsp;</span>
                ) : (
                  line.tokens.map((tok, j) => (
                    <span
                      key={j}
                      style={{
                        color: tok.color,
                        fontStyle: (tok as { italic?: boolean }).italic ? 'italic' : 'normal',
                      }}
                    >
                      {tok.text}
                    </span>
                  ))
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
