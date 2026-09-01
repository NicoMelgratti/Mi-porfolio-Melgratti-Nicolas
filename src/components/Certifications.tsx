"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Calendar, ExternalLink, Hash } from 'lucide-react';

type Certification = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  duration?: string;
  url: string;
  color: string;
};

const certifications: Certification[] = [
  {
    title: 'Enterprise Full Stack (Spring Boot 4 & Angular 21)',
    issuer: 'Dev Senior Code',
    date: 'Marzo 2026',
    credentialId: '01KM636T2T4QHRVJFZNEYJPJ2N',
    url: '#',
    color: '#93c5fd',
  },
  {
    title: 'Ciberseguridad y Hacking Ético',
    issuer: 'BIG school',
    date: 'Abril 2026',
    duration: '6 horas',
    url: 'https://certificados.thebigschool.com/wp-content/uploads/certs/MCIB/Certificado-Nicolas-Gustavo-Melgratti-13vhbuch.pdf',
    color: '#67e8f9',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 px-4 sm:px-8 md:px-12 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-1.5">
          <Award size={14} />
          <span>Validación & Certificados</span>
        </div>
        <h2 className="font-headline font-bold text-4xl sm:text-5xl text-white">
          Certificaciones <span className="title-gradient italic">Profesionales</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            className="liquid-glass-card rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start gap-3.5 mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border liquid-glass-subtle shadow-md"
                  style={{
                    borderColor: `${cert.color}60`,
                    color: cert.color,
                  }}
                >
                  <Award size={22} />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-white text-xl leading-snug mb-1">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-cyan-200 font-semibold">
                    <ShieldCheck size={13} className="text-cyan-300" />
                    <span>{cert.issuer}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5 text-xs text-slate-300 font-mono mb-4 pt-3 border-t border-[#1e3a8a]/70">
                <div className="flex items-center gap-2">
                  <Calendar size={12} className="text-blue-400" />
                  <span>Emisión: {cert.date}</span>
                </div>
                {cert.credentialId && (
                  <div className="flex items-center gap-2">
                    <Hash size={12} className="text-blue-400" />
                    <span className="truncate">ID: {cert.credentialId}</span>
                  </div>
                )}
              </div>
            </div>

            {cert.url !== '#' && (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-cyan-300 hover:text-white transition-colors pt-2"
              >
                Ver Certificado Oficial
                <ExternalLink size={11} />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
