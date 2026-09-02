"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Rocket, Code2, GraduationCap, Calendar, Info, X, CheckCircle2 } from 'lucide-react';

type Experience = {
  id: string;
  period: string;
  role: string;
  company: string;
  summary: string;
  functions: string[];
  tech: string[];
  icon: React.ElementType;
  accent: string;
};

const experiences: Experience[] = [
  {
    id: 'freelance',
    period: '2025 — Actualidad',
    role: 'Full-Stack Developer & Software Architect',
    company: 'Proyectos Independientes & Freelance',
    summary: 'Arquitectura, desarrollo y despliegue de soluciones cloud completas con pasarelas de pago y logística integrada.',
    functions: [
      'Desarrollo y puesta en producción de Zinerva (e-commerce con Next.js 15, Mercado Pago Checkout Pro y API Correo Argentino).',
      'Desarrollo integral de SicroCare (sistema de control médico, signos vitales y fichas de emergencia hospitalaria).',
      'Modelado de bases de datos relacionales PostgreSQL con alta integridad y transacciones concurrentes.',
      'Diseño de interfaces fluidas con Tailwind CSS, Framer Motion y optimización SEO / Core Web Vitals.'
    ],
    tech: ['Next.js', 'React', 'Java', 'Spring Boot', 'PostgreSQL', 'Mercado Pago', 'Vercel'],
    icon: Rocket,
    accent: '#38bdf8',
  },
  {
    id: 'utn-software',
    period: '2024 — 2025',
    role: 'Desarrollo Institucional & Scrum Híbrido',
    company: 'UTN — Universidad Tecnológica Nacional',
    summary: 'Liderazgo técnico en sistemas de emisión de licencias de conducir y plataformas hoteleras con metodologías ágiles.',
    functions: [
      'Liderazgo y desarrollo del Sistema de Emisión de Licencias bajo metodología ágil Scrum Híbrido.',
      'Implementación de reglas complejas de negocio, auditoría de operadores y validación de vigencias normativas.',
      'Desarrollo de microservicios backend desacoplados con Java + Spring Boot y clientes SPA en React.',
      'Gestión de sprints, backlog grooming, testing de integración y aseguramiento de calidad de software.'
    ],
    tech: ['Java', 'Spring Boot', 'React/Angular', 'PostgreSQL', 'Scrum Híbrido', 'Git'],
    icon: Code2,
    accent: '#2563eb',
  },
  {
    id: 'utn-academia',
    period: '2020 — Presente',
    role: 'Ingeniería en Sistemas de Información',
    company: 'UTN — Facultad Regional Santa Fe',
    summary: 'Formación académica de excelencia en ingeniería de software, arquitectura de sistemas y ciencias de la computación.',
    functions: [
      'Cursado de 4.° año de la carrera de grado con enfoque en arquitecturas distribuidas y concurrencia.',
      'Obtención de titulación intermedia de Analista y Desarrollador Universitario en Sistemas (en trámite).',
      'Dominio riguroso de paradigmas POO, programación lógica (Prolog), algoritmos de visión (OpenCV/Python) y Clean Architecture.',
      'Diseño de sistemas tolerantes a fallos y optimización de consultas complejas en bases de datos.'
    ],
    tech: ['Clean Architecture', 'Bases de Datos', 'POO & SOLID', 'Algoritmos', 'SWI-Prolog'],
    icon: GraduationCap,
    accent: '#60a5fa',
  },
];

export default function ExperienceTimeline() {
  const [activeTooltipId, setActiveTooltipId] = useState<string | null>(null);

  return (
    <section id="experiencias" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Tactical Header */}
      <div className="flex items-center gap-3 mb-8 border-b border-[#1e3a8a]/60 pb-3">
        <span className="font-tungsten text-2xl sm:text-3xl text-slate-400">03</span>
        <span className="h-4 w-[2px] bg-azul"></span>
        <h2 className="font-tungsten text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
          Últimas <span className="text-azul">Experiencias</span>
        </h2>
      </div>

      {/* Grid of Experience Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiences.map((exp, idx) => {
          const Icon = exp.icon;
          const isTooltipOpen = activeTooltipId === exp.id;

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="liquid-glass-card rounded-2xl p-6 flex flex-col justify-between relative border border-blue-900/60 group hover:border-cyan-400/80 transition-all"
            >
              <div>
                {/* Card Top: Icon Banner & Info Tooltip Button (i) */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-blue-900/40">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border bg-slate-950 shadow-md"
                      style={{ borderColor: `${exp.accent}70`, color: exp.accent }}
                    >
                      <Icon size={18} />
                    </div>
                    <span className="text-xs font-mono font-semibold text-cyan-300">
                      {exp.company.split('—')[0].trim()}
                    </span>
                  </div>

                  {/* Interactive (i) Button */}
                  <div className="relative">
                    <button
                      onClick={() => setActiveTooltipId(isTooltipOpen ? null : exp.id)}
                      aria-label="Ver funciones y detalles"
                      className="tactical-info-btn group-hover:scale-110"
                      title="Click para ver funciones y tecnologías"
                    >
                      i
                    </button>
                  </div>
                </div>

                {/* Period Badge */}
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-2">
                  <Calendar size={13} className="text-azul" />
                  <span>{exp.period}</span>
                </div>

                {/* Role Title */}
                <h3 className="font-tungsten text-2xl text-white uppercase tracking-wide leading-tight mb-3 group-hover:text-cyan-200 transition-colors">
                  {exp.role}
                </h3>

                {/* Short Summary */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {exp.summary}
                </p>
              </div>

              {/* Bottom Tech Pills */}
              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80">
                  {exp.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 liquid-glass-subtle text-[10px] font-mono text-cyan-200 rounded border border-[#1e3a8a]"
                    >
                      {t}
                    </span>
                  ))}
                  {exp.tech.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-400">
                      +{exp.tech.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Floating Tooltip / Functions List on (i) Click */}
              <AnimatePresence>
                {isTooltipOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-x-3 bottom-3 top-3 z-30 p-5 rounded-2xl bg-slate-950/95 backdrop-blur-xl border-2 border-cyan-400 shadow-2xl flex flex-col justify-between overflow-y-auto"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-blue-900">
                        <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
                          // Funciones & Hitos
                        </span>
                        <button
                          onClick={() => setActiveTooltipId(null)}
                          className="p-1 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-700 cursor-pointer"
                        >
                          <X size={14} />
                        </button>
                      </div>

                      <ul className="space-y-2 text-xs text-slate-200">
                        {exp.functions.map((fn, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 size={13} className="text-azul shrink-0 mt-0.5" />
                            <span className="leading-snug">{fn}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800">
                      <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                        Stack Aplicado:
                      </span>
                      <p className="text-xs font-mono text-cyan-300">{exp.tech.join(' · ')}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

