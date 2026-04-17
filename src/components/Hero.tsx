"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Download, MapPin, Mail, Briefcase } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="profile"
      className="relative min-h-[90vh] flex flex-col justify-center px-6 sm:px-10 md:px-16 overflow-hidden"
    >
      {/* === Background Mesh Orbs === */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="mesh-orb absolute -top-32 right-0 w-[520px] h-[520px] rounded-full bg-blue-600/12 blur-[80px]" />
        <div className="mesh-orb-2 absolute bottom-0 left-1/4 w-[380px] h-[380px] rounded-full bg-cyan-500/8 blur-[70px]" />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(96,165,250,1) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* === Headline Block === */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl z-10"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 glass-subtle text-cyan-400 font-sans text-[10px] tracking-[0.22em] uppercase mb-6 rounded-full border border-cyan-400/25">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Portfolio v2.5 · Systems Engineer
        </span>

        <h1 className="font-headline font-extrabold text-5xl sm:text-6xl md:text-8xl text-white tracking-tighter mb-5 leading-[0.88]">
          Nicolás{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Melgratti
          </span>
        </h1>

        <p className="font-sans text-base sm:text-lg md:text-xl text-slate-400 font-light max-w-2xl leading-relaxed">
          Bridging{' '}
          <span className="text-blue-400 font-medium">Complex Economics</span> and{' '}
          <span className="text-cyan-400 font-medium">Robust Systems Engineering</span>.{' '}
          Designing scalable digital foundations for the next era of decentralized logic.
        </p>
      </motion.div>

      {/* === Cards Grid === */}
      <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 z-10 w-full max-w-4xl">

        {/* Personal Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="glass rounded-2xl p-7 flex flex-col justify-between neon-glow"
        >
          <div>
            {/* Card Header */}
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

          {/* CV Buttons */}
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
          className="glass rounded-2xl p-7"
        >
          <div className="flex items-center gap-3 mb-7">
            <div className="w-1 h-6 rounded-full bg-gradient-to-b from-blue-400 to-cyan-500" />
            <h3 className="text-lg font-bold text-white font-headline">Professional Interests</h3>
          </div>

          <div className="grid grid-cols-2 gap-3 h-[calc(100%-68px)]">
            {[
              { icon: '🚀', label: 'Continuous Learning' },
              { icon: '🏛️', label: 'Software Architecture' },
              { icon: '>_', label: 'Backend Development', mono: true },
              { icon: '⚡', label: 'Agile Methodologies' },
            ].map(({ icon, label, mono }) => (
              <div
                key={label}
                className="
                  glass-subtle rounded-xl p-4 flex flex-col items-center justify-center gap-2.5
                  border-blue-500/10 hover:border-blue-400/35 hover:bg-blue-500/8
                  transition-all duration-300 cursor-default group
                "
              >
                <span
                  className={`text-2xl text-blue-300 group-hover:scale-110 transition-transform duration-300 ${mono ? 'font-mono font-black text-base' : ''}`}
                >
                  {icon}
                </span>
                <span className="text-[10px] sm:text-xs font-bold text-slate-300 text-center leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade separator */}
      <div className="absolute bottom-0 left-0 w-full h-24 pointer-events-none bg-gradient-to-t from-slate-950/60 to-transparent" />
    </section>
  );
}
