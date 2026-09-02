"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink, ShieldCheck, Clock, Calendar } from 'lucide-react';

type CourseItem = {
  title: string;
  issuer: string;
  date: string;
  duration: string;
  credentialId?: string;
  url?: string;
};

const coursesList: CourseItem[] = [
  {
    title: 'Enterprise Full Stack (Spring Boot 4 & Angular 21)',
    issuer: 'Dev Senior Code',
    date: 'Marzo 2026',
    duration: '60 horas',
    credentialId: '01KM636T2T4QHRVJFZNEYJPJ2N',
    url: '#',
  },
  {
    title: 'Ciberseguridad y Hacking Ético',
    issuer: 'BIG school',
    date: 'Abril 2026',
    duration: '6 horas',
    url: 'https://certificados.thebigschool.com/wp-content/uploads/certs/MCIB/Certificado-Nicolas-Gustavo-Melgratti-13vhbuch.pdf',
  },
  {
    title: 'Clean Architecture & Microservicios en Java',
    issuer: 'Universidad Tecnológica Nacional',
    date: '2025',
    duration: '36 horas',
    url: '#',
  },
  {
    title: 'Desarrollo Web React, Next.js & TypeScript',
    issuer: 'UTN FRSF',
    date: '2024',
    duration: '48 horas',
    url: '#',
  },
  {
    title: 'Modelado y Optimización de Bases de Datos SQL',
    issuer: 'UTN FRSF',
    date: '2023',
    duration: '30 horas',
    url: '#',
  },
  {
    title: 'Metodologías Ágiles & Gestión con Scrum Híbrido',
    issuer: 'UTN FRSF',
    date: '2024',
    duration: '24 horas',
    url: '#',
  },
];

export default function Certifications() {
  return (
    <section id="certificaciones" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Tactical Header */}
      <div className="flex items-center gap-3 mb-8 border-b border-[#1e3a8a]/60 pb-3">
        <span className="font-tungsten text-2xl sm:text-3xl text-slate-400">05</span>
        <span className="h-4 w-[2px] bg-azul"></span>
        <h2 className="font-tungsten text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
          Cursos y <span className="text-azul">Extensiones</span>
        </h2>
      </div>

      {/* Grid of Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coursesList.map((course, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            className="tactical-course-card rounded-2xl p-6 flex flex-col justify-between relative group hover:border-cyan-400"
          >
            <div>
              {/* Top Row: Icon and Period */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="w-9 h-9 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center text-cyan-300">
                  <Award size={18} />
                </div>
                <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                  <Calendar size={11} className="text-azul" />
                  {course.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-tungsten text-2xl text-white uppercase tracking-wide leading-tight mb-2 group-hover:text-cyan-200 transition-colors">
                {course.title}
              </h3>

              {/* Issuer */}
              <h4 className="text-xs font-mono font-semibold text-cyan-300 flex items-center gap-1.5 mb-2">
                <ShieldCheck size={13} className="text-azul" />
                {course.issuer}
              </h4>

              {course.credentialId && (
                <p className="text-[10px] font-mono text-slate-400 truncate">
                  ID: {course.credentialId}
                </p>
              )}
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between">
              {course.url && course.url !== '#' ? (
                <a
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-sans font-semibold text-cyan-300 hover:text-white transition-colors"
                >
                  Ver Certificado <ExternalLink size={11} />
                </a>
              ) : (
                <span className="text-[11px] font-mono text-slate-400">Verificado</span>
              )}
            </div>

            {/* Bottom-Right Tactical Blue Duration Badge */}
            <div className="tactical-course-badge flex items-center gap-1">
              <Clock size={11} />
              <span>{course.duration}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

