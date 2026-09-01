"use client";

import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    school: 'Universidad Tecnológica Nacional (UTN FRSF)',
    degree: 'Analista y Desarrollador Universitario en Sistemas',
    period: 'Título en trámite',
    desc: 'Formación integral en diseño de software, metodologías de desarrollo, ingeniería de requerimientos, modelado de bases de datos relacionales y desarrollo de aplicaciones cliente-servidor.',
    status: 'En Trámite',
  },
  {
    school: 'Universidad Tecnológica Nacional (UTN FRSF)',
    degree: 'Ingeniería en Sistemas de Información',
    period: '2020 — En curso (4.° Año)',
    desc: 'Profundización en teoría de sistemas complejos, arquitecturas de software distribuidas, modelos formales de concurrencia y optimización algorítmica.',
    status: 'En Curso',
  },
  {
    school: 'Bachillerato en Economía',
    degree: 'Bachillerato en Economía',
    period: 'Completado',
    desc: 'Fundamentos en análisis cuantitativo, finanzas y modelos económicos aplicados al análisis de requerimientos en sistemas de negocio.',
    status: 'Completado',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-16 px-4 sm:px-8 md:px-12 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-1.5">
          <GraduationCap size={14} />
          <span>Formación Profesional</span>
        </div>
        <h2 className="font-headline font-bold text-4xl sm:text-5xl text-white">
          Educación & <span className="title-gradient italic">Títulos</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="space-y-4">
        {education.map((item, idx) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            className="liquid-glass-card rounded-2xl p-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div>
                <h3 className="text-xl font-headline font-bold text-white leading-tight">
                  {item.degree}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-300 font-semibold mt-1">{item.school}</p>
              </div>
              <span
                className={`self-start sm:self-auto px-3.5 py-1 text-[11px] font-sans font-semibold rounded-full uppercase tracking-wider liquid-glass-subtle border ${
                  item.status === 'En Trámite'
                    ? 'text-cyan-300 border-cyan-400/50'
                    : item.status === 'En Curso'
                    ? 'text-blue-300 border-blue-400/50'
                    : 'text-emerald-300 border-emerald-400/50'
                }`}
              >
                {item.period}
              </span>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal mt-3">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
