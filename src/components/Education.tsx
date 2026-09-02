"use client";

import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

type EducationItem = {
  institution: string;
  degree: string;
  status: string;
  statusType: 'success' | 'progress' | 'completed';
  period: string;
  location: string;
  icon: React.ElementType;
  highlights: string[];
};

const educationList: EducationItem[] = [
  {
    institution: 'Universidad Tecnológica Nacional (UTN FRSF)',
    degree: 'Analista y Desarrollador Universitario en Sistemas',
    status: 'Título en Trámite',
    statusType: 'success',
    period: '2020 — 2025',
    location: 'Santa Fe, Argentina',
    icon: Award,
    highlights: [
      'Ingeniería de requerimientos, análisis y modelado de dominios complejos.',
      'Diseño y normalización de bases de datos relacionales SQL con PostgreSQL y MySQL.',
      'Desarrollo de arquitecturas cliente-servidor, APIs RESTful y testing unitario.',
      'Metodologías ágiles de desarrollo de software (Scrum / Kanban).'
    ],
  },
  {
    institution: 'Universidad Tecnológica Nacional (UTN FRSF)',
    degree: 'Ingeniería en Sistemas de Información',
    status: '4.° Año (En Curso)',
    statusType: 'progress',
    period: '2020 — Presente',
    location: 'Santa Fe, Argentina',
    icon: GraduationCap,
    highlights: [
      'Sistemas operativos, concurrencia, hilos y gestión de memoria.',
      'Arquitecturas de software distribuidas, microservicios y Clean Architecture.',
      'Teoría de lenguajes, programación lógica (Prolog) y paradigmas formales.',
      'Modelado de redes, seguridad de la información y algoritmos de optimización.'
    ],
  },
  {
    institution: 'Escuela de Educación Secundaria',
    degree: 'Bachillerato en Economía y Gestión de las Organizaciones',
    status: 'Egresado',
    statusType: 'completed',
    period: 'Completado',
    location: 'Santa Fe, Argentina',
    icon: BookOpen,
    highlights: [
      'Bases sólidas en análisis cuantitativo, contabilidad y finanzas.',
      'Comprensión integral de modelos de negocio para software empresarial.',
      'Gestión de procesos organizacionales y toma de decisiones estratégicas.'
    ],
  },
];

export default function Education() {
  return (
    <section id="formacion" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Tactical Header */}
      <div className="flex items-center gap-3 mb-8 border-b border-[#1e3a8a]/60 pb-3">
        <span className="font-tungsten text-2xl sm:text-3xl text-slate-400">05</span>
        <span className="h-4 w-[2px] bg-azul"></span>
        <h2 className="font-tungsten text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
          Formación <span className="text-azul">Académica</span>
        </h2>
      </div>

      {/* Grid of Clean Tactical Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {educationList.map((item, idx) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="tactical-edu-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Header: Icon & Status */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-blue-900/40">
                  <div className="w-11 h-11 rounded-xl bg-blue-950 border border-blue-700/80 flex items-center justify-center text-cyan-300 shadow-md">
                    <Icon size={20} />
                  </div>
                  <span
                    className={`px-3 py-1 text-[11px] font-mono font-bold rounded-full uppercase tracking-wider ${
                      item.statusType === 'success'
                        ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/50'
                        : item.statusType === 'progress'
                        ? 'bg-blue-950/80 text-cyan-300 border border-cyan-400/50'
                        : 'bg-slate-900 text-slate-300 border border-slate-700'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                {/* Degree Title */}
                <h3 className="font-tungsten text-2xl sm:text-3xl text-white uppercase tracking-wide leading-tight mb-2">
                  {item.degree}
                </h3>

                {/* Institution */}
                <p className="text-xs font-mono font-semibold text-cyan-300 mb-1 flex items-center gap-1.5">
                  <span className="text-azul font-bold">//</span> {item.institution}
                </p>

                {/* Period and Location */}
                <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400 mb-5">
                  <span className="flex items-center gap-1">
                    <Calendar size={11} className="text-azul" />
                    {item.period}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={11} className="text-azul" />
                    {item.location}
                  </span>
                </div>

                {/* Key Highlights */}
                <div className="space-y-2 pt-3 border-t border-slate-800/80">
                  <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block mb-1.5">
                    // Competencias Adquiridas:
                  </span>
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={13} className="text-azul shrink-0 mt-0.5" />
                      <span className="leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Tag */}
              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>UTN FRSF</span>
                <span className="text-cyan-400/80">Plan Acreditado</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}


