"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'motion/react';
import { Terminal, Copy, Check } from 'lucide-react';

type TerminalLine =
  | { type: 'command'; text: string }
  | { type: 'output'; text: string }
  | { type: 'blank' };

const script: TerminalLine[] = [
  { type: 'command', text: 'whoami' },
  { type: 'output', text: 'nicolás melgratti — analista y desarrollador universitario en sistemas (utn frsf)' },
  { type: 'blank' },
  { type: 'command', text: 'cat featured_projects.json' },
  { type: 'output', text: '1. SicroCare — Sistema de control médico, signos vitales y alarmas de medicación' },
  { type: 'output', text: '2. Emisión Licencias — TP UTN Scrum híbrido con backend Java Spring Boot' },
  { type: 'output', text: '3. Zinerva — E-commerce en Vercel con Mercado Pago Checkout Pro (E2E) & PAQ.AR' },
  { type: 'blank' },
  { type: 'command', text: 'git status' },
  { type: 'output', text: 'On branch main · working tree clean · open to work' },
];

export default function TerminalSection() {
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([]);
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copied, setCopied] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const hasStarted = useRef(false);

  const runScript = useCallback(async () => {
    const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

    for (const line of script) {
      if (line.type === 'command') {
        setIsTyping(true);
        let typed = '';
        for (const char of line.text) {
          typed += char;
          setTypingText(typed);
          await sleep(35);
        }
        setIsTyping(false);
        setTypingText('');
        await sleep(150);
        setVisibleLines(prev => [...prev, line]);
      } else if (line.type === 'output') {
        await sleep(60);
        setVisibleLines(prev => [...prev, line]);
      } else {
        setVisibleLines(prev => [...prev, line]);
      }
      await sleep(250);
    }
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [visibleLines, typingText]);

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
      { threshold: 0.2 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, [runScript]);

  const handleCopyConsole = () => {
    const textToCopy = script
      .map(line => (line.type === 'command' ? `$ ${line.text}` : line.type === 'output' ? line.text : ''))
      .join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Tactical Header */}
      <div className="flex items-center gap-3 mb-8 border-b border-[#1e3a8a]/60 pb-3">
        <span className="font-tungsten text-2xl sm:text-3xl text-slate-400">06</span>
        <span className="h-4 w-[2px] bg-azul"></span>
        <h2 className="font-tungsten text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
          Developer <span className="text-azul">Console</span>
        </h2>
      </div>

      {/* Clean Terminal Box */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-terminal rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* Titlebar */}
        <div className="flex items-center justify-between px-5 py-3 bg-slate-950/90 border-b border-[#1e3a8a]/70">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.4)]" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.4)]" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
          </div>
          <span className="text-[11px] font-mono text-cyan-300">
            bash — nicolas@portfolio:~
          </span>
          <button
            onClick={handleCopyConsole}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg transition-colors text-xs flex items-center gap-1 cursor-pointer liquid-glass-subtle"
            title="Copiar texto"
          >
            {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
          </button>
        </div>

        {/* Content */}
        <div
          ref={scrollContainerRef}
          className="p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-y-auto"
          style={{ minHeight: '220px', maxHeight: '320px' }}
        >
          {visibleLines.map((line, i) => (
            <div key={i}>
              {line.type === 'command' && (
                <div className="flex items-center gap-2 text-cyan-200 font-medium">
                  <span className="text-indigo-400 select-none">❯</span>
                  <span>{line.text}</span>
                </div>
              )}
              {line.type === 'output' && (
                <div className="pl-4 text-emerald-300 text-xs sm:text-[13px] py-0.5 font-normal">
                  {line.text}
                </div>
              )}
              {line.type === 'blank' && <div className="h-2" />}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-cyan-200">
              <span className="text-indigo-400 select-none">❯</span>
              <span>{typingText}</span>
              <span className="terminal-cursor" />
            </div>
          )}

          {!isTyping && (
            <div className="flex items-center gap-2 mt-1">
              <span className="text-indigo-400 select-none">❯</span>
              <span className="terminal-cursor" />
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
