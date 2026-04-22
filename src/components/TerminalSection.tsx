"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

type TerminalLine =
  | { type: 'command'; text: string }
  | { type: 'output'; text: string }
  | { type: 'blank' };

const script: TerminalLine[] = [
  { type: 'command', text: 'whoami' },
  { type: 'output',  text: 'nicolás melgratti — information systems engineer' },
  { type: 'blank' },
  { type: 'command', text: 'ls skills/' },
  { type: 'output',  text: 'java/   spring-boot/   react/   next.js/   postgresql/   docker/' },
  { type: 'blank' },
  { type: 'command', text: 'cat interests.txt' },
  { type: 'output',  text: 'software architecture · backend development · agile methodologies' },
  { type: 'blank' },
  { type: 'command', text: 'git log --oneline -3' },
  { type: 'output',  text: 'a3f9c21  feat: full-stack e-commerce with PAQ.AR shipping integration' },
  { type: 'output',  text: '8b1d047  feat: hardware simulator in SWI-Prolog with IRQ/IO logic' },
  { type: 'output',  text: 'c02e8fa  feat: steganography engine using LSB + 2D Fourier transform' },
  { type: 'blank' },
  { type: 'command', text: 'echo $STATUS' },
  { type: 'output',  text: 'open to work · santa fe, argentina · remote-friendly' },
];

// Typing speed (ms per character) for commands
const CHAR_DELAY = 45;
// Pause before output appears (ms)
const OUTPUT_DELAY = 200;
// Pause between script lines (ms)
const LINE_PAUSE = 420;

export default function TerminalSection() {
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([]);
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  // Auto-scroll to bottom as lines appear
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [visibleLines, typingText]);

  // IntersectionObserver to start the animation when in view
  useEffect(() => {
    const container = document.getElementById('terminal');
    if (!container) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          runScript();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function sleep(ms: number) {
    return new Promise(r => setTimeout(r, ms));
  }

  async function runScript() {
    for (const line of script) {
      if (line.type === 'command') {
        setIsTyping(true);
        let typed = '';
        for (const char of line.text) {
          typed += char;
          setTypingText(typed);
          await sleep(CHAR_DELAY + Math.random() * 20);
        }
        setIsTyping(false);
        setTypingText('');
        await sleep(OUTPUT_DELAY);
        setVisibleLines(prev => [...prev, line]);
      } else if (line.type === 'output') {
        await sleep(80);
        setVisibleLines(prev => [...prev, line]);
      } else {
        setVisibleLines(prev => [...prev, line]);
      }
      await sleep(LINE_PAUSE);
    }
  }

  return (
    <section id="terminal" className="py-20 px-4 sm:px-8 md:px-16">
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
            Interactive{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
              Terminal
            </span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full mt-3" />
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 glass-violet-subtle rounded-full text-[10px] font-bold tracking-widest text-violet-300 uppercase border border-violet-500/20 mb-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Live session
        </span>
      </motion.div>

      {/* Terminal Window */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="max-w-5xl mx-auto glass-terminal rounded-2xl overflow-hidden neon-glow-cyan"
      >
        {/* Title Bar */}
        <div className="flex items-center gap-3 px-5 py-3.5 bg-white/[0.03] border-b border-cyan-400/10">
          {/* Traffic light dots */}
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_6px_rgba(239,68,68,0.5)]" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/80 shadow-[0_0_6px_rgba(234,179,8,0.5)]" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/80 shadow-[0_0_6px_rgba(52,211,153,0.5)]" />
          </div>
          <div className="flex-1 flex justify-center">
            <span className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <Terminal size={12} className="text-cyan-400" />
              bash — nicolás@portfolio:~
            </span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="relative overflow-hidden">
          {/* CRT scan line */}
          <div className="scan-line" />

          <div
            ref={scrollContainerRef}
            className="overflow-y-auto px-6 py-5 font-mono text-sm leading-7 custom-scrollbar"
            style={{ maxHeight: '360px', minHeight: '260px' }}
          >
            {visibleLines.map((line, i) => (
              <div key={i}>
                {line.type === 'command' && (
                  <div className="flex items-center gap-2">
                    <span className="text-violet-400 select-none">❯</span>
                    <span className="text-cyan-300">{line.text}</span>
                  </div>
                )}
                {line.type === 'output' && (
                  <div className="pl-5 text-emerald-300/85 text-[13px]">{line.text}</div>
                )}
                {line.type === 'blank' && <div className="h-2" />}
              </div>
            ))}

            {/* Live typing line */}
            {isTyping && (
              <div className="flex items-center gap-2">
                <span className="text-violet-400 select-none">❯</span>
                <span className="text-cyan-300">{typingText}</span>
              </div>
            )}

            {/* Idle cursor (shown when not typing and script still running or finished) */}
            {!isTyping && (
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-violet-400 select-none">❯</span>
                <span className="terminal-cursor" />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
