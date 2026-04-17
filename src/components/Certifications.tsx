"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Calendar, Hash, ExternalLink, Clock } from 'lucide-react';

// SVG icon: cybersecurity shield
function ShieldTechIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V6L12 2z" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 9v-2M12 15v2M9 12H7M17 12h-2" />
    </svg>
  );
}

type Certification = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  duration?: string;
  url: string;
  color: string;
  icon?: 'award' | 'shield';
};

const certifications: Certification[] = [
  {
    title: 'Enterprise Full Stack with Spring Boot 4 and Angular 21',
    issuer: 'Dev Senior Code',
    date: 'March 28, 2026',
    credentialId: '01KM636T2T4QHRVJFZNEYJPJ2N',
    url: '#',
    color: '#6366f1',
    icon: 'award',
  },
  {
    title: 'Ciberseguridad y Hacking Ético',
    issuer: 'BIG school',
    date: '10/04/2026',
    duration: '6 horas',
    url: 'https://certificados.thebigschool.com/wp-content/uploads/certs/MCIB/Certificado-Nicolas-Gustavo-Melgratti-13vhbuch.pdf',
    color: '#22d3ee',
    icon: 'shield',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-8 md:px-16 flex justify-center">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-black text-white mb-1">
            Professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Certifications
            </span>
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-3" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.55 }}
              className="group relative glass rounded-2xl overflow-hidden hover:neon-glow transition-all duration-400"
            >
              {/* Top corner accent glow */}
              <div
                className="absolute top-0 right-0 w-40 h-40 blur-3xl opacity-10 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none rounded-full"
                style={{ backgroundColor: cert.color }}
              />

              {/* Top gradient line */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${cert.color}90, transparent)` }}
              />

              {/* Left accent bar */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-r-sm"
                style={{ background: `linear-gradient(180deg, ${cert.color}, ${cert.color}40)` }}
              />

              <div className="p-7 pl-8">
                {/* Icon + Title */}
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border"
                    style={{
                      backgroundColor: `${cert.color}18`,
                      borderColor: `${cert.color}35`,
                      color: cert.color,
                    }}
                  >
                    {cert.icon === 'shield' ? (
                      <ShieldTechIcon className="w-6 h-6" />
                    ) : (
                      <Award size={24} />
                    )}
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-white text-base leading-snug mb-1.5">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck size={13} className="text-blue-400" />
                      <span className="text-sm font-semibold text-slate-300">{cert.issuer}</span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-blue-500/20 to-transparent mb-4" />

                {/* Meta info */}
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Calendar size={13} className="text-blue-400/70" />
                    <span>Issued: {cert.date}</span>
                  </div>
                  {cert.duration && (
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <Clock size={13} className="text-blue-400/70" />
                      <span>Duration: {cert.duration}</span>
                    </div>
                  )}
                  {cert.credentialId && (
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                      <Hash size={13} className="text-blue-400/70 shrink-0" />
                      <span className="truncate">ID: {cert.credentialId}</span>
                    </div>
                  )}
                </div>

                {/* View credential link */}
                {cert.url !== '#' && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-cyan-400 transition-colors"
                  >
                    View Credential <ExternalLink size={11} />
                  </a>
                )}
              </div>

              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ borderColor: `${cert.color}40` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
