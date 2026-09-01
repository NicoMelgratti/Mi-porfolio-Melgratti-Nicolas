"use client";

import React from 'react';
import { ExternalLink, Github, Globe, FolderGit2 } from 'lucide-react';
import { motion } from 'motion/react';

type Project = {
  title: string;
  tag: string;
  badge?: string;
  desc: string;
  tech: string[];
  repoUrl: string;
  repoUrlFront?: string;
  accent: string;
  linkType: 'github' | 'live';
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: 'SicroCare — Sistema de Control Médico',
    tag: 'Salud & IoT',
    badge: 'Título Universitario UTN',
    desc: 'Sistema integral de control y asistencia médica para personas con discapacidad o adultos mayores. Genera reportes clínicos automáticos, alarmas inteligentes de administración de medicamentos y monitoreo de signos vitales en tiempo real.',
    tech: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'REST API'],
    repoUrl: 'https://github.com/NicoMelgratti/SicroCare-Back',
    repoUrlFront: 'https://github.com/NicoMelgratti/SicroCare-Front',
    accent: '#67e8f9',
    linkType: 'github',
    featured: true,
  },
  {
    title: 'Sistema de Emisión de Licencias',
    tag: 'TP Institucional',
    badge: 'UTN · Scrum Híbrido',
    desc: 'Plataforma para la gestión y emisión de licencias de conducir desarrollada bajo metodologías ágiles Scrum híbrido. Administración de solicitantes, validación de vigencias, auditoría y control de exámenes.',
    tech: ['Java', 'Spring Boot', 'React/Angular', 'TypeScript', 'PostgreSQL', 'Scrum'],
    repoUrl: 'https://github.com/NicoMelgratti/Sistema-Emitir-Licencia-Back',
    repoUrlFront: 'https://github.com/NicoMelgratti/Sistema-Emitir-Licencia-Front',
    accent: '#93c5fd',
    linkType: 'github',
    featured: true,
  },
  {
    title: 'Zinerva E-commerce',
    tag: 'Full-Stack Web',
    badge: 'Producción en Vercel',
    desc: 'Plataforma e-commerce de indumentaria desplegada en producción sobre Vercel. Integra la API de Mercado Pago Checkout Pro para pagos seguros con cifrado E2E, gestión de inventario matricial (talle/color) e integración logística en tiempo real con Correo Argentino (PAQ.AR).',
    tech: ['Next.js', 'React', 'PostgreSQL', 'Mercado Pago', 'Tailwind CSS', 'Vercel'],
    repoUrl: 'https://zinerva-e-commerce-web.vercel.app/',
    accent: '#c4b5fd',
    linkType: 'live',
    featured: true,
  },
  {
    title: 'Gestión Hotelera Alpine',
    tag: 'Web App',
    badge: 'UTN',
    desc: 'Sistema de administración hotelera para control de ocupación de habitaciones en tiempo real, registro de huéspedes y módulo de facturación.',
    tech: ['Java', 'React', 'JavaScript', 'REST API'],
    repoUrl: 'https://github.com/FranciscoSoltermann/Gestion-hotelera-Alpine.git',
    repoUrlFront: 'https://github.com/FranciscoSoltermann/FrontEnd-Alpine.git',
    accent: '#38bdf8',
    linkType: 'github',
  },
  {
    title: 'Hardware Configuration Simulator',
    tag: 'Modelado Lógico',
    badge: 'UTN',
    desc: 'Simulador en SWI-Prolog que modela configuraciones de hardware y resuelve lógica de líneas de interrupción (IRQs), rangos de direcciones E/S y asignación de puertos.',
    tech: ['SWI-Prolog', 'Logic Programming', 'Hardware Modeling'],
    repoUrl: 'https://github.com/NicoMelgratti/Hardware-Configuration-Simulator.git',
    accent: '#a5f3fc',
    linkType: 'github',
  },
  {
    title: 'Data Hiding in Images',
    tag: 'Estenografía & Visión',
    desc: 'Algoritmos de ocultamiento de datos en imágenes digitales aplicando Least Significant Bit (LSB) y Transformadas de Fourier 2D.',
    tech: ['Python', 'NumPy', 'OpenCV', 'Fourier Analysis'],
    repoUrl: 'https://github.com/NicoMelgratti/Data-Hiding-in-Images-Using-LSB-and-2D-Fourier.git',
    accent: '#ddd6fe',
    linkType: 'github',
  },
];

function ProjectCard({ project, idx }: { project: Project; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.08, duration: 0.5 }}
      className="liquid-glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative group"
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          {project.badge ? (
            <span
              className="px-3 py-1 text-[11px] font-sans font-semibold rounded-full uppercase tracking-wider liquid-glass-subtle border"
              style={{
                color: project.accent,
                borderColor: `${project.accent}55`,
              }}
            >
              {project.badge}
            </span>
          ) : (
            <span className="text-[11px] font-sans text-slate-400 uppercase tracking-wider">
              {project.tag}
            </span>
          )}

          <span className="text-[11px] font-sans text-slate-400 uppercase tracking-widest">
            {project.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-headline font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
          {project.desc}
        </p>
      </div>

      <div>
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 liquid-glass-subtle text-[11px] font-sans font-medium text-cyan-200 rounded-lg border border-[#1e3a8a]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        {project.repoUrlFront ? (
          <div className="grid grid-cols-2 gap-2.5">
            <a
              href={project.repoUrlFront}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-sans font-semibold text-cyan-200 bg-blue-950/70 hover:bg-blue-900/90 border border-[#1e3a8a] hover:border-cyan-400 transition-all active:scale-95 text-center shadow-md"
            >
              <Github size={14} /> Frontend
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-sans font-semibold text-blue-200 bg-blue-950/70 hover:bg-blue-900/90 border border-[#1e3a8a] hover:border-blue-400 transition-all active:scale-95 text-center shadow-md"
            >
              <Github size={14} /> Backend
            </a>
          </div>
        ) : (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-sans font-semibold text-white liquid-glass-btn-secondary hover:border-cyan-400 transition-all active:scale-95"
          >
            {project.linkType === 'live' ? (
              <>
                <Globe size={14} className="text-cyan-300" />
                Ver Sitio en Vivo
                <ExternalLink size={12} className="opacity-70" />
              </>
            ) : (
              <>
                <Github size={14} className="text-blue-300" />
                Ver en GitHub
                <ExternalLink size={12} className="opacity-70" />
              </>
            )}
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 sm:px-8 md:px-12 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-1.5">
            <FolderGit2 size={14} />
            <span>Portafolio de Desarrollo</span>
          </div>
          <h2 className="font-headline font-bold text-4xl sm:text-5xl text-white">
            Proyectos <span className="title-gradient italic">Destacados</span>
          </h2>
        </div>
        <a
          href="https://github.com/NicoMelgratti"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-cyan-300 hover:text-white transition-colors"
        >
          <Github size={14} />
          Ver todos en GitHub
          <ExternalLink size={12} />
        </a>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} idx={idx} />
        ))}
      </div>
    </section>
  );
}
