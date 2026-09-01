"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Download, MapPin, Mail, Briefcase, Code2, Layers, Terminal } from 'lucide-react';

export default function Hero() {
  const [isColor, setIsColor] = useState(false);

  return (
    <section id="profile" className="pt-20 pb-16 px-4 sm:px-8 md:px-12 max-w-5xl mx-auto">
      {/* Top Banner / Availability Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center gap-3 mb-6"
      >
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 liquid-glass-subtle text-xs font-mono text-cyan-200 rounded-full border border-[#1e3a8a]/80 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Disponible para nuevos proyectos
        </span>
        <span className="text-xs text-slate-400 font-mono hidden sm:inline">
          UTN · Santa Fe, Argentina
        </span>
      </motion.div>

      {/* Main Hero Header: Name (Playfair Display) + Large Apple Liquid Glass Photo */}
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 md:gap-10 mb-12">
        
        {/* Left Side: Texts & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="font-headline font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05] mb-4">
            Nicolás <span className="title-gradient italic">Melgratti</span>
          </h1>
          
          <p className="font-sans text-lg sm:text-xl text-blue-200 font-semibold max-w-2xl leading-snug tracking-wide">
            Full-Stack Software Developer & Estudiante de Ingeniería en Sistemas.
          </p>
          
          <p className="mt-3.5 text-slate-300 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
            Especializado en arquitecturas backend escalables con <span className="text-cyan-300 font-semibold">Java & Spring Boot</span> y experiencias web reactivas con <span className="text-blue-300 font-semibold">React, Next.js & TypeScript</span>. Apasionado por el Clean Code, metodologías ágiles y sistemas seguros.
          </p>

          {/* CTA Action Buttons - Liquid Glass */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3.5 mt-8">
            <a
              href="/cv/es"
              target="_blank"
              className="liquid-glass-btn px-6 py-3.5 text-white font-bold rounded-2xl text-xs sm:text-sm flex items-center gap-2 active:scale-95 cursor-pointer shadow-lg tracking-wide"
            >
              <Download size={16} />
              CV Descargable (ES)
            </a>
            <a
              href="/cv/en"
              target="_blank"
              className="liquid-glass-btn-secondary px-6 py-3.5 text-blue-100 font-semibold rounded-2xl text-xs sm:text-sm flex items-center gap-2 active:scale-95 cursor-pointer tracking-wide"
            >
              <Download size={16} />
              Resume (EN)
            </a>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent('openContactModal'));
              }}
              className="liquid-glass-subtle hover:border-blue-400 px-5 py-3.5 text-cyan-300 font-semibold rounded-2xl text-xs sm:text-sm flex items-center gap-2 active:scale-95 cursor-pointer transition-all tracking-wide"
            >
              <Mail size={16} />
              Contacto
            </button>
          </div>
        </motion.div>

        {/* Right Side: Large Liquid Glass Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="shrink-0 flex flex-col items-center"
        >
          <div
            onClick={() => setIsColor(!isColor)}
            className="group relative cursor-pointer select-none"
            title="Haz click o toca para cambiar a color"
          >
            {/* Pastel background aura */}
            <div
              className={`absolute -inset-2 rounded-[2.2rem] bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 blur-xl transition-all duration-700 ${
                isColor ? 'opacity-70' : 'opacity-25 group-hover:opacity-60'
              }`}
            />

            {/* Apple Liquid Glass Photo Frame */}
            <div
              className={`relative w-52 h-52 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-[2rem] overflow-hidden border-2 transition-all duration-500 p-1.5 ${
                isColor
                  ? 'border-cyan-400/90 shadow-[0_0_30px_rgba(34,211,238,0.35)] scale-[1.02]'
                  : 'border-[#1e3a8a] group-hover:border-cyan-400/80 group-hover:scale-[1.02]'
              }`}
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(30, 58, 138, 0.3) 100%)',
                backdropFilter: 'blur(28px)',
              }}
            >
              <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden">
                <Image
                  src="/perfil.jpg"
                  alt="Nicolás Melgratti"
                  fill
                  priority
                  sizes="(max-width: 768px) 240px, 288px"
                  className={`object-cover object-center transition-all duration-700 ease-out ${
                    isColor
                      ? 'grayscale-0 contrast-100 brightness-100'
                      : 'grayscale group-hover:grayscale-0 contrast-105 brightness-95 group-hover:brightness-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-white/10 pointer-events-none" />
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Quick Profile Cards Grid - Apple Liquid Glass Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="liquid-glass-card rounded-2xl p-5"
        >
          <div className="flex items-center gap-2.5 mb-3.5 text-blue-300">
            <Briefcase size={18} />
            <h3 className="font-headline font-bold text-white text-base">Información Clave</h3>
          </div>
          <div className="space-y-2.5 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin size={13} className="text-blue-400 shrink-0" />
              <span>Santa Fe, Argentina</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={13} className="text-blue-400 shrink-0" />
              <span className="truncate">nicomelgratti@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Code2 size={13} className="text-blue-400 shrink-0" />
              <span className="text-cyan-300 font-medium">Analista Univ. en Sistemas (En trámite)</span>
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="liquid-glass-card rounded-2xl p-5"
        >
          <div className="flex items-center gap-2.5 mb-3.5 text-cyan-300">
            <Layers size={18} />
            <h3 className="font-headline font-bold text-white text-base">Especialidades</h3>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {['Java / Spring Boot', 'React & Next.js', 'PostgreSQL', 'Scrum / Agile', 'RESTful APIs', 'Docker & CI/CD'].map((item) => (
              <span
                key={item}
                className="px-2.5 py-1 liquid-glass-subtle text-[11px] font-sans font-medium text-cyan-200 rounded-lg border border-[#1e3a8a]"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="liquid-glass-card rounded-2xl p-5"
        >
          <div className="flex items-center gap-2.5 mb-3.5 text-indigo-300">
            <Terminal size={18} />
            <h3 className="font-headline font-bold text-white text-base">Academia & Rigor</h3>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-light mb-2">
            Universidad Tecnológica Nacional (UTN FRSF).
          </p>
          <p className="text-[11px] text-slate-400 font-mono">
            Ingeniería en Sistemas de Información (4.° año) & Analista Universitario (Título en trámite).
          </p>
        </motion.div>
      </div>
    </section>
  );
}
