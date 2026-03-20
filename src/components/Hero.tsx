"use client";

import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="profile" className="relative min-h-[70vh] flex flex-col justify-center px-8 md:px-16 overflow-hidden border-b border-slate-900">
      <div className="absolute top-0 right-0 w-2/3 h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/40 via-transparent to-transparent"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl z-10"
      >
        <span className="inline-block px-3 py-1 bg-primary/20 text-blue-400 font-sans text-[10px] tracking-[0.2em] uppercase mb-6 rounded border border-primary/30">
          Architectural Blueprint v2.4
        </span>
        <h1 className="font-headline font-extrabold text-6xl md:text-8xl text-white tracking-tighter mb-4 leading-[0.9]">
          Nicolás <br /> Melgratti
        </h1>
        <p className="font-sans text-xl md:text-2xl text-slate-400 font-light max-w-2xl leading-relaxed">
          Bridging the gap between <span className="text-blue-400 font-normal">Complex Economics</span> and <span className="text-blue-400 font-normal">Robust Systems Engineering</span>. Designing scalable digital foundations for the next era of decentralized logic.
        </p>
      </motion.div>

      <div className="mt-16 flex flex-wrap gap-8 md:gap-16">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 font-sans tracking-widest uppercase mb-1">Location</span>
          <span className="text-sm font-medium text-slate-200">Argentina</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 font-sans tracking-widest uppercase mb-1">Focus</span>
          <span className="text-sm font-medium text-slate-200">Distributed Systems</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-500 font-sans tracking-widest uppercase mb-1">Status</span>
          <span className="text-sm font-medium flex items-center gap-2 text-slate-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for Projects
          </span>
        </div>
      </div>
    </section>
  );
}
