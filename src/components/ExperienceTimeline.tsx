"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Code2, GraduationCap, Rocket, Calendar } from 'lucide-react';

const timelineEntries = [
  {
    period: '2025 — Presente',
    role: 'Full-Stack Developer & Software Architect',
    company: 'Proyectos Independientes & Freelance',
    description: 'Desarrollo y puesta en producción en Vercel de Zinerva (e-commerce con Next.js, pasarela Mercado Pago Checkout Pro con seguridad E2E, inventario matricial e integración con API Correo Argentino) y desarrollo de SicroCare (sistema de control médico y signos vitales).',
    tech: ['Next.js', 'React', 'Mercado Pago', 'Java', 'Spring Boot', 'PostgreSQL', 'Vercel'],
    icon: Rocket,
    accent: '#67e8f9',
  },
  {
    period: '2024 — 2025',
    role: 'Desarrollo de Software Institucional & Scrum',
    company: 'UTN — Universidad Tecnológica Nacional',
    description: 'Liderazgo técnico en el Sistema de Emisión de Licencias bajo metodología ágil Scrum híbrido. Implementación de reglas de negocio complejas, gestión de permisos por roles y desarrollo de sistemas de gestión hotelera en Java + React.',
    tech: ['Java', 'Spring Boot', 'React/Angular', 'PostgreSQL', 'Scrum Híbrido', 'Git'],
    icon: Code2,
    accent: '#93c5fd',
  },
  {
    period: '2020 — Presente',
    role: 'Ingeniería en Sistemas de Información',
    company: 'UTN — Facultad Regional Santa Fe',
    description: 'Cursado de 4.° año de la carrera y titulación intermedia de Analista y Desarrollador Universitario en Sistemas (en trámite). Formación rigurosa en teoría de sistemas, diseño de arquitecturas escalables, bases de datos y algoritmos.',
    tech: ['Clean Architecture', 'Bases de Datos', 'POO & SOLID', 'Algoritmos'],
    icon: GraduationCap,
    accent: '#c4b5fd',
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-16 px-4 sm:px-8 md:px-12 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-1.5">
          <Briefcase size={14} />
          <span>Trayectoria & Proyectos</span>
        </div>
        <h2 className="font-headline font-bold text-4xl sm:text-5xl text-white">
          Experiencia & <span className="title-gradient italic">Hitos</span>
        </h2>
      </div>

      {/* Clean Vertical Timeline */}
      <div className="relative border-l-2 border-[#1e3a8a] ml-4 sm:ml-6 space-y-10">
        {timelineEntries.map((entry, idx) => {
          const Icon = entry.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative pl-8 sm:pl-10"
            >
              {/* Dot on line */}
              <div
                className="absolute -left-[19px] top-2 w-9 h-9 rounded-full flex items-center justify-center border-2 bg-slate-950 shadow-lg"
                style={{ borderColor: entry.accent, color: entry.accent }}
              >
                <Icon size={15} />
              </div>

              {/* Liquid Glass Card */}
              <div className="liquid-glass-card rounded-2xl p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-headline font-bold text-white leading-tight">
                      {entry.role}
                    </h3>
                    <p className="text-xs sm:text-sm text-cyan-300 font-semibold mt-0.5">{entry.company}</p>
                  </div>
                  <span className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1 liquid-glass-subtle text-[11px] font-sans font-medium text-cyan-200 rounded-full border border-[#1e3a8a]">
                    <Calendar size={12} className="text-blue-400" />
                    {entry.period}
                  </span>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 font-normal">
                  {entry.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {entry.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 liquid-glass-subtle text-[11px] font-sans font-medium text-cyan-200 rounded-lg border border-[#1e3a8a]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
