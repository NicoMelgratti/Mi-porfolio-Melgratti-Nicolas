"use client";

import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
  {
    title: 'Gestion Hotelera',
    tag: 'Web App',
    desc: 'Registración, ocupación y facturación para un hotel.',
    tech: ['Java', 'JS', 'React'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop',
    repoUrl: 'https://github.com/FranciscoSoltermann/Gestion-hotelera-Alpine.git',
  },
  {
    title: 'IPA Interactive Platform for Language Learning',
    tag: 'Software',
    desc: 'Interactive platform designed for efficient language learning.',
    tech: ['C++'],
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=800&auto=format&fit=crop',
    repoUrl: 'https://github.com/NicoMelgratti/-IPA-Interactive-Platform-for-Language-Learning.git',
  },
  {
    title: 'Data Hiding in Images',
    tag: 'Steganography',
    desc: 'Data hiding in images using LSB and 2D Fourier transforms.',
    tech: ['Python'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    repoUrl: 'https://github.com/NicoMelgratti/Data-Hiding-in-Images-Using-LSB-and-2D-Fourier.git',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 md:px-16">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="font-headline text-3xl font-bold text-white mb-2">GitHub Ecosystem</h2>
          <div className="w-12 h-1 bg-primary"></div>
        </div>
        <a href="https://github.com/NicoMelgratti" target="_blank" rel="noopener noreferrer" className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-2 font-sans uppercase tracking-widest transition-colors">
          Browse All Repositories
          <ExternalLink size={14} />
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="group relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-primary/30 transition-all duration-500 shadow-2xl block cursor-pointer"
          >
            <div className="h-64 bg-slate-800 overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 glass-panel text-[10px] text-white rounded-full border border-white/10 uppercase tracking-widest font-bold">
                  {project.tag}
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-headline font-bold text-white mb-3">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-4">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-sans font-bold text-blue-400 uppercase tracking-widest">{t}</span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
