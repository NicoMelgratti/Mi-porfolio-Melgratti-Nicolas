"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Download, Mail, Code2, MapPin, Sparkles, Terminal } from 'lucide-react';

export default function Hero() {
  const [isColor, setIsColor] = useState(true);

  return (
    <section id="profile" className="pt-8 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Tactical Index & Status Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between gap-3 mb-8 border-b border-[#1e3a8a]/60 pb-3"
      >
        <div className="flex items-center gap-3">
          <span className="font-tungsten text-2xl sm:text-3xl text-slate-400">01</span>
          <span className="h-4 w-[2px] bg-azul"></span>
          <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest">
            // RESUMEN PRINCIPAL
          </span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/70 border border-cyan-500/40 text-[11px] font-mono text-cyan-200">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="hidden sm:inline">DISPONIBLE ·</span> SANTA FE, ARGENTINA
        </div>
      </motion.div>

      {/* Main Banner Grid: Name / Photo / Bio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        
        {/* Left Col: Giant Tactical Name (Tungsten Style) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left"
        >
          <div className="flex items-start justify-center lg:justify-start gap-2 mb-2">
            <span className="font-tungsten text-slate-500 text-xl font-bold hidden lg:inline">01</span>
            <div className="leading-none overflow-hidden">
              <h1 className="font-tungsten text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl text-white font-bold tracking-tight uppercase leading-[0.88]">
                NICOLÁS
              </h1>
              <h2 className="font-tungsten text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl text-azul font-bold tracking-tight uppercase leading-[0.88] mt-1">
                MELGRATTI
              </h2>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-2 mt-4 text-xs font-mono text-slate-400">
            <MapPin size={13} className="text-azul" />
            <span>UTN FRSF · Santa Fe, Argentina</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mt-6">
            <a
              href="/cv/es"
              target="_blank"
              className="px-5 py-3 rounded-xl bg-azul hover:bg-azul-dark text-white font-sans font-bold text-xs flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-blue-600/30 cursor-pointer uppercase tracking-wider"
            >
              <Download size={15} />
              CV (ES)
            </a>
            <a
              href="/cv/en"
              target="_blank"
              className="px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-cyan-200 border border-blue-800 hover:border-cyan-400 font-sans font-semibold text-xs flex items-center gap-2 transition-all active:scale-95 cursor-pointer uppercase tracking-wider"
            >
              <Download size={15} />
              Resume (EN)
            </a>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('openContactModal'));
              }}
              className="px-4 py-3 rounded-xl bg-blue-950/60 hover:bg-blue-900/80 text-slate-200 border border-[#1e3a8a] font-sans font-medium text-xs flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
            >
              <Mail size={15} className="text-cyan-300" />
            </button>
          </div>
        </motion.div>

        {/* Center Col: Character / Profile Photo with Tactical Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-3 flex justify-center"
        >
          <div
            onClick={() => setIsColor(!isColor)}
            className="relative group cursor-pointer"
            title="Click para alternar filtro"
          >
            {/* Blue Tactical Halo */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" />

            <div className="relative w-52 h-64 sm:w-56 sm:h-72 md:w-60 md:h-76 rounded-2xl overflow-hidden border-2 border-blue-600/70 p-1.5 bg-slate-950/90 backdrop-blur-md shadow-2xl group-hover:border-cyan-400 transition-all duration-300">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900">
                <Image
                  src="/perfil.jpg"
                  alt="Nicolás Melgratti"
                  fill
                  priority
                  sizes="(max-width: 768px) 240px, 260px"
                  className={`object-cover object-center transition-all duration-500 ease-out ${
                    isColor
                      ? 'grayscale-0 contrast-105'
                      : 'grayscale group-hover:grayscale-0 contrast-110'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-cyan-500/10 pointer-events-none" />
                
                {/* Tactical Corner Marks */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Col: Role & Biography Panels */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-4 flex flex-col justify-center space-y-4"
        >
          {/* ROL Section */}
          <div className="p-5 rounded-2xl liquid-glass-card border border-blue-900/60">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1.5 mb-2">
              <span className="text-azul font-bold">//</span> ROL
            </h3>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-azul flex items-center justify-center text-white shrink-0 shadow-md shadow-blue-600/40">
                <Code2 size={18} />
              </div>
              <div>
                <h4 className="font-tungsten text-2xl sm:text-3xl text-white tracking-wide uppercase leading-tight">
                  Full-Stack Developer
                </h4>
                <p className="text-[11px] font-mono text-cyan-300">
                  Java · Spring Boot · React · Next.js
                </p>
              </div>
            </div>
          </div>

          {/* BIOGRAFIA Section */}
          <div className="p-5 rounded-2xl liquid-glass-card border border-blue-900/60">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1.5 mb-2">
              <span className="text-azul font-bold">//</span> BIOGRAFÍA
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
              Argentino apasionado por la ingeniería de software y el desarrollo de soluciones escalables. Especializado en backend con <strong className="text-cyan-300 font-semibold">Java & Spring Boot</strong> y web reactiva con <strong className="text-blue-300 font-semibold">React, Next.js & TypeScript</strong>.
            </p>
            <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>UTN Santa Fe</span>
              <span className="text-azul font-semibold">4.° Año / Analista (En trámite)</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}


