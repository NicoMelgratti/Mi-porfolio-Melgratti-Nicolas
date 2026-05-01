"use client";

import React from 'react';
import { ExternalLink, Github, Globe } from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
  {
    title: 'Gestión Hotelera',
    tag: 'Web App',
    badge: 'UTN',
    desc: 'Registración, ocupación y facturación para un hotel.',
    tech: ['Java', 'JavaScript', 'React'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    repoUrl: 'https://github.com/FranciscoSoltermann/Gestion-hotelera-Alpine.git',
    repoUrlFront: 'https://github.com/FranciscoSoltermann/FrontEnd-Alpine.git',
    accent: '#3b82f6',
    linkType: 'github' as const,
  },
  {
    title: 'IPA Interactive Platform',
    tag: 'Software',
    desc: 'Interactive platform designed for efficient language learning.',
    tech: ['C++'],
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop',
    repoUrl: 'https://github.com/NicoMelgratti/-IPA-Interactive-Platform-for-Language-Learning.git',
    accent: '#22d3ee',
    linkType: 'github' as const,
  },
  {
    title: 'Data Hiding in Images',
    tag: 'Steganography',
    desc: 'Data hiding in images using LSB and 2D Fourier transforms.',
    tech: ['Python'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    repoUrl: 'https://github.com/NicoMelgratti/Data-Hiding-in-Images-Using-LSB-and-2D-Fourier.git',
    accent: '#818cf8',
    linkType: 'github' as const,
  },
  {
    title: 'Hardware Configuration Simulator',
    tag: 'Academic Project',
    badge: 'UTN',
    desc: 'A SWI-Prolog system that models hardware device configurations. Handles logic for interrupt lines (IRQs), I/O address ranges, and port allocation — ensuring system compatibility and resource management.',
    tech: ['SWI-Prolog', 'Logic Programming', 'Hardware Modeling'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop',
    repoUrl: 'https://github.com/NicoMelgratti/Hardware-Configuration-Simulator.git',
    accent: '#06b6d4',
    linkType: 'github' as const,
  },
  {
    title: 'Zinerva E-commerce',
    tag: 'Full-Stack',
    desc: 'High-performance full-stack apparel platform. Features an advanced inventory management system (size/color matrix), a custom checkout flow with proof-of-payment upload, and automated shipping integration with the Correo Argentino (PAQ.AR) API.',
    tech: ['Next.js', 'React', 'PostgreSQL', 'REST API', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=800&auto=format&fit=crop',
    repoUrl: 'https://zinerva-e-commerce-web.vercel.app/',
    accent: '#a78bfa',
    linkType: 'live' as const,
  },
];


export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-8 md:px-16">
      {/* Header */}
      <div className="flex justify-between items-end mb-12 max-w-5xl mx-auto">
        <div>
          <h2 className="font-headline text-3xl md:text-4xl font-black text-white mb-1">
            GitHub{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Ecosystem
            </span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-3" />
        </div>
        <a
          href="https://github.com/NicoMelgratti"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs text-blue-400 hover:text-cyan-400 font-sans uppercase tracking-widest transition-colors duration-300"
        >
          <Github size={14} />
          Browse All
          <ExternalLink size={12} />
        </a>
      </div>

      {/* Grid — 1 col mobile, 2 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.55 }}
            className="group relative glass rounded-2xl overflow-hidden flex flex-col hover:neon-glow transition-all duration-300"
          >
            {/* Top accent line on hover */}
            <div
              className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
              style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
            />

            {/* Image */}
            <div className="h-44 relative overflow-hidden shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-35 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80" />

              {/* Tags row */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                {/* Academic badge (UTN) */}
                {'badge' in project && project.badge && (
                  <span
                    className="px-2 py-0.5 text-[9px] font-black rounded-full uppercase tracking-widest"
                    style={{
                      background: `${project.accent}28`,
                      color: project.accent,
                      border: `1px solid ${project.accent}55`,
                    }}
                  >
                    Academic · {project.badge}
                  </span>
                )}
                <span className="ml-auto px-2.5 py-1 glass-strong text-[9px] text-white rounded-full border border-white/15 uppercase tracking-widest font-bold">
                  {project.tag}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-base font-headline font-bold text-white mb-2 leading-snug group-hover:text-blue-300 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 font-light flex-1">
                {project.desc}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 glass-subtle text-[9px] font-bold uppercase tracking-widest rounded-md"
                    style={{ color: project.accent, borderColor: `${project.accent}30` }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              {'repoUrlFront' in project && (project as any).repoUrlFront ? (
                <div className="flex gap-2">
                  <a
                    href={(project as any).repoUrlFront}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-300 active:scale-95"
                    style={{
                      background: `${project.accent}18`,
                      color: project.accent,
                      border: `1px solid ${project.accent}40`,
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = `${project.accent}30`;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${project.accent}40`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = `${project.accent}18`;
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    <Github size={14} /> Frontend
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all duration-300 active:scale-95"
                    style={{
                      background: `${project.accent}18`,
                      color: project.accent,
                      border: `1px solid ${project.accent}40`,
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = `${project.accent}30`;
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${project.accent}40`;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = `${project.accent}18`;
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    <Github size={14} /> Backend
                  </a>
                </div>
              ) : (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-95"
                  style={{
                    background: `${project.accent}18`,
                    color: project.accent,
                    border: `1px solid ${project.accent}40`,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = `${project.accent}30`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${project.accent}40`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = `${project.accent}18`;
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  {project.linkType === 'live' ? (
                    <><Globe size={14} /> Live Site</>
                  ) : (
                    <><Github size={14} /> View on GitHub</>
                  )}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
