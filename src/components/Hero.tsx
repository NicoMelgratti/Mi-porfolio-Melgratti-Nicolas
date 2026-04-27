"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Download, MapPin, Mail, Briefcase, TrendingUp, Layers, Terminal, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll within this specific container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Text starts small, centered inside the monitor screen.
  // As the monitor scales up, the text scales to 1 and moves to its final hero position.
  const textTop = useTransform(scrollYProgress, [0, 0.5], ["50%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 0.5], ["-50%", "0%"]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  // Computer Zoom Animation
  // Scales from 1 to 35 (massive)
  const computerScale = useTransform(scrollYProgress, [0, 0.5], [1, 35]);

  // Stand fades out early
  const standOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Fade out the huge shadow once the screen is safely covering the viewport
  const frameOpacity = useTransform(scrollYProgress, [0.4, 0.5], [1, 0]);

  return (
    <>
      {/* --- 1. SCROLL SEQUENCE SECTION --- */}
      {/* 200vh gives a very snappy zoom animation so you see the content immediately */}
      <section ref={containerRef} className="relative h-[200vh] w-full">

        {/* Sticky viewport that stays on screen while we scroll through the 300vh */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

          {/* Centered Hero Text */}
          <motion.div
            style={{ top: textTop, y: textY, x: "-50%", scale: textScale }}
            className="absolute left-1/2 w-full max-w-4xl z-0 flex flex-col items-center text-center px-6"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 glass-subtle font-sans text-[10px] tracking-[0.22em] uppercase mb-6 rounded-full border border-cyan-400/20" style={{ color: '#22d3ee' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Portfolio v2.5 · Full-Stack Systems Engineer</span>
            </span>

            <h1 className="font-headline font-extrabold text-5xl sm:text-6xl md:text-8xl text-white tracking-tighter mb-5 leading-[0.88]">
              Nicolás <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Melgratti</span>
            </h1>

            <p className="font-sans text-base sm:text-lg md:text-xl text-slate-400 font-light max-w-2xl leading-relaxed">
              Building <span className="text-cyan-400 font-medium">scalable backends</span>, <span className="text-violet-400 font-medium">dynamic frontends</span>, and <span className="text-blue-400 font-medium">intelligent systems</span> at the intersection of economics and software engineering.
            </p>
          </motion.div>

          {/* The Zooming Device */}
          <motion.div
            style={{ scale: computerScale }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center pointer-events-none"
          >
            {/* --- DESKTOP MONITOR --- */}
            <div className="hidden md:flex flex-col items-center justify-center">
              {/* THE SCREEN (Transparent Hole) */}
              <div className="relative w-[85vw] max-w-[900px] aspect-[16/10] rounded-lg">
                
                {/* Dark Overlay combining safe box-shadow for corners and 4 infinite quads for coverage */}
                <motion.div
                  className="absolute inset-0 pointer-events-none rounded-lg"
                  style={{
                    boxShadow: '0 0 0 50px #020617',
                    opacity: frameOpacity
                  }}
                >
                  <div className="absolute bottom-full left-[-500vw] right-[-500vw] h-[500vh] bg-[#020617]" />
                  <div className="absolute top-full left-[-500vw] right-[-500vw] h-[500vh] bg-[#020617]" />
                  <div className="absolute top-0 bottom-0 right-full w-[500vw] bg-[#020617]" />
                  <div className="absolute top-0 bottom-0 left-full w-[500vw] bg-[#020617]" />
                </motion.div>

                {/* THE COMPUTER FRAME */}
                <motion.div
                  className="absolute inset-[-28px] rounded-3xl border-[28px] border-slate-800 shadow-2xl flex flex-col justify-between bg-transparent pointer-events-none"
                  style={{ opacity: frameOpacity }}
                >
                  <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-950 rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  </div>
                  <div className="absolute -bottom-[20px] left-1/2 -translate-x-1/2 w-10 h-2 bg-slate-700 rounded-full" />
                </motion.div>

                {/* Glass reflection over the hole */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-white/[0.04] via-transparent to-white/[0.01] rounded-lg pointer-events-none"
                  style={{ opacity: frameOpacity }}
                />
              </div>

              {/* THE STAND */}
              <motion.div
                className="absolute top-[100%] mt-[28px] flex flex-col items-center"
                style={{ opacity: standOpacity }}
              >
                <div className="w-20 h-24 bg-gradient-to-b from-slate-800 to-slate-900 border-x border-slate-700" />
                <div className="w-64 h-5 bg-slate-700 rounded-t-xl shadow-lg border-t border-slate-600" />
              </motion.div>
            </div>

            {/* --- MOBILE PHONE --- */}
            <div className="flex md:hidden flex-col items-center justify-center">
              {/* THE SCREEN (Transparent Hole) */}
              <div className="relative w-[75vw] max-w-[320px] aspect-[9/19.5] rounded-3xl">
                
                {/* Dark Overlay combining safe box-shadow for corners and 4 infinite quads for coverage */}
                <motion.div
                  className="absolute inset-0 pointer-events-none rounded-3xl"
                  style={{
                    boxShadow: '0 0 0 50px #020617',
                    opacity: frameOpacity
                  }}
                >
                  <div className="absolute bottom-full left-[-500vw] right-[-500vw] h-[500vh] bg-[#020617]" />
                  <div className="absolute top-full left-[-500vw] right-[-500vw] h-[500vh] bg-[#020617]" />
                  <div className="absolute top-0 bottom-0 right-full w-[500vw] bg-[#020617]" />
                  <div className="absolute top-0 bottom-0 left-full w-[500vw] bg-[#020617]" />
                </motion.div>

                {/* THE PHONE FRAME */}
                <motion.div
                  className="absolute inset-[-16px] rounded-[2.5rem] border-[16px] border-slate-800 shadow-2xl flex flex-col justify-between bg-transparent pointer-events-none"
                  style={{ opacity: frameOpacity }}
                >
                  {/* Dynamic Island / Notch */}
                  <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-[35%] h-5 bg-slate-950 rounded-full flex items-center justify-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-slate-800 rounded-full" />
                    <div className="w-1.5 h-1.5 bg-blue-900 rounded-full shadow-[0_0_4px_#3b82f6]" />
                  </div>
                  
                  {/* Home indicator bar */}
                  <div className="absolute bottom-[6px] left-1/2 -translate-x-1/2 w-[35%] h-1 bg-slate-600 rounded-full" />
                </motion.div>

                {/* Glass reflection */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-white/[0.06] via-transparent to-white/[0.02] rounded-3xl pointer-events-none"
                  style={{ opacity: frameOpacity }}
                />
              </div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* --- 2. NORMAL FLOW CONTENT --- */}
      {/* This appears after we have fully zoomed into the computer screen */}
      <section id="profile" style={{ scrollMarginTop: '30vh' }} className="relative z-20 max-w-4xl mx-auto px-6 sm:px-10 md:px-0 pb-20 -mt-[50vh]">

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Personal Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="glass rounded-2xl p-7 flex flex-col justify-between neon-glow"
          >
            <div>
              <div className="flex items-center gap-3 mb-7">
                <div className="w-1 h-6 rounded-full bg-gradient-to-b from-blue-400 to-cyan-500" />
                <h3 className="text-lg font-bold text-white font-headline">Personal Details</h3>
              </div>

              <div className="space-y-4 mb-7">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1.5 text-blue-400 min-w-[90px]">
                    <MapPin size={14} />
                    <span className="font-semibold">Location:</span>
                  </div>
                  <span className="text-slate-300">Santa Fe, Argentina</span>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1.5 text-blue-400 min-w-[90px]">
                    <Mail size={14} />
                    <span className="font-semibold">Email:</span>
                  </div>
                  <span className="text-slate-300 text-xs sm:text-sm break-all">nicomelgratti@gmail.com</span>
                </div>

                <div className="flex items-start gap-4 text-sm mt-2">
                  <div className="flex items-center gap-1.5 text-blue-400 min-w-[90px]">
                    <Briefcase size={14} />
                    <span className="font-semibold">Status:</span>
                  </div>
                  <span className="px-3 py-1 bg-emerald-950/70 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/30">
                    Eng. Student · Open to work
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="/cv/es"
                target="_blank"
                className="btn-cv w-full py-3 text-white font-bold rounded-xl text-sm text-center flex justify-center items-center gap-2 active:scale-95"
              >
                <Download size={15} />
                Resume (ES)
              </a>
              <a
                href="/cv/en"
                target="_blank"
                className="btn-cv w-full py-3 text-white font-bold rounded-xl text-sm text-center flex justify-center items-center gap-2 active:scale-95"
              >
                <Download size={15} />
                Resume (EN)
              </a>
            </div>
          </motion.div>

          {/* Professional Interests Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="glass rounded-2xl p-7"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-1 h-6 rounded-full bg-gradient-to-b from-blue-400 to-cyan-500" />
              <h3 className="text-lg font-bold text-white font-headline">Professional Interests</h3>
            </div>

            <div className="grid grid-cols-2 gap-3 h-[calc(100%-68px)]">
              {([
                { Icon: TrendingUp, label: 'Continuous Learning', accent: 'cyan' },
                { Icon: Layers, label: 'Software Architecture', accent: 'violet' },
                { Icon: Terminal, label: 'Backend Development', accent: 'blue' },
                { Icon: Zap, label: 'Agile Methodologies', accent: 'violet' },
              ] as { Icon: LucideIcon; label: string; accent: string }[]).map(({ Icon, label, accent }) => (
                <div
                  key={label}
                  className={`
                    glass-subtle rounded-xl p-4 flex flex-col items-center justify-center gap-2.5
                    transition-all duration-300 cursor-default group
                    ${accent === 'violet'
                      ? 'border-violet-500/10 hover:border-violet-400/35 hover:bg-violet-500/8'
                      : accent === 'cyan'
                        ? 'border-cyan-500/10 hover:border-cyan-400/35 hover:bg-cyan-500/8'
                        : 'border-blue-500/10 hover:border-blue-400/35 hover:bg-blue-500/8'}
                  `}
                >
                  <div className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-300
                    ${accent === 'violet'
                      ? 'bg-gradient-to-br from-violet-500/15 to-purple-500/10 group-hover:from-violet-500/25 group-hover:to-purple-500/20'
                      : accent === 'cyan'
                        ? 'bg-gradient-to-br from-cyan-500/15 to-blue-500/10 group-hover:from-cyan-500/25 group-hover:to-blue-500/20'
                        : 'bg-gradient-to-br from-blue-500/15 to-cyan-500/10 group-hover:from-blue-500/25 group-hover:to-cyan-500/20'}
                  `}>
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      className={`transition-all duration-300 group-hover:scale-110
                        ${accent === 'violet' ? 'text-violet-400 group-hover:text-violet-300'
                          : accent === 'cyan' ? 'text-cyan-400 group-hover:text-cyan-300'
                            : 'text-blue-400 group-hover:text-cyan-400'}
                      `}
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-300 text-center leading-tight tracking-wide">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stack Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="mt-6 w-full z-10 glass-violet rounded-2xl p-5 neon-glow-violet-sm"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-1 h-5 rounded-full bg-gradient-to-b from-violet-400 to-cyan-500" />
            <h3 className="text-sm font-bold text-white font-headline">Current Stack</h3>
            <span className="ml-auto flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              active
            </span>
          </div>
          <pre className="font-mono text-[11px] sm:text-xs leading-6 text-slate-300 overflow-x-auto">
            <span className="text-violet-400">const</span>{' '}
            <span className="text-cyan-300">stack</span>{' '}
            <span className="text-slate-400">=</span>{' '}{'{'}{"\n"}
            {'  '}<span className="text-blue-300">backend</span><span className="text-slate-400">:</span>{' '}<span className="text-emerald-300">[&apos;Java&apos;, &apos;Spring Boot&apos;, &apos;Node.js&apos;]</span>,{"\n"}
            {'  '}<span className="text-blue-300">frontend</span><span className="text-slate-400">:</span>{' '}<span className="text-emerald-300">[&apos;React&apos;, &apos;Next.js&apos;, &apos;TypeScript&apos;]</span>,{"\n"}
            {'  '}<span className="text-blue-300">database</span><span className="text-slate-400">:</span>{' '}<span className="text-emerald-300">[&apos;PostgreSQL&apos;, &apos;Supabase&apos;]</span>,{"\n"}
            {'  '}<span className="text-blue-300">devops</span><span className="text-slate-400">:</span>{' '}<span className="text-emerald-300">[&apos;Docker&apos;, &apos;Git&apos;, &apos;Vercel&apos;]</span>,{"\n"}
            {'}'}<span className="text-slate-500"> satisfies</span>{' '}<span className="text-violet-300">TechStack</span>;
          </pre>
        </motion.div>

      </section>
    </>
  );
}
