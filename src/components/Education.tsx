"use client";

import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    school: 'Universidad Tecnológica Nacional (UTN)',
    degree: 'Information Systems Engineering',
    period: '2020 — In Progress',
    desc: 'Deepening knowledge in systems theory, discrete mathematics, and large-scale software engineering practices. Focusing on the intersection of data integrity and architectural scalability.',
    status: 'In Progress',
  },
  {
    school: 'Bachillerato en Economía',
    degree: 'Secondary Education',
    period: 'Completed',
    desc: 'Foundational study in economic models, financial structures, and quantitative analysis, which informs the logic used in developing financial system architectures.',
    status: 'Completed',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-8 md:px-16">
      {/* Header */}
      <div className="mb-12 max-w-5xl mx-auto">
        <h2 className="font-headline text-3xl md:text-4xl font-black text-white mb-1">
          Academic{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Foundation
          </span>
        </h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-3" />
      </div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto space-y-6">
        {education.map((item, idx) => (
          <motion.div
            key={item.school}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.18, duration: 0.55 }}
            className="relative"
          >
            {/* Connector line (between cards) */}
            {idx < education.length - 1 && (
              <div className="absolute left-6 top-full w-px h-6 bg-gradient-to-b from-blue-400/40 to-transparent" />
            )}

            <div className="glass rounded-2xl p-6 md:p-7 hover:neon-glow-sm transition-all duration-300 group">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`
                    shrink-0 w-11 h-11 rounded-xl flex items-center justify-center
                    ${item.status === 'In Progress'
                      ? 'bg-blue-500/20 border border-blue-500/40'
                      : 'bg-slate-700/50 border border-slate-600/40'}
                  `}
                >
                  <GraduationCap
                    size={20}
                    className={item.status === 'In Progress' ? 'text-blue-400' : 'text-slate-500'}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                    <h3 className="text-base md:text-lg font-headline font-bold text-white leading-snug">
                      {item.school}
                    </h3>
                    <span
                      className={`
                        shrink-0 self-start px-3 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-widest
                        ${item.status === 'In Progress'
                          ? 'bg-blue-950/60 text-blue-400 border-blue-500/30'
                          : 'bg-slate-800/60 text-slate-500 border-slate-700/50'}
                      `}
                    >
                      {item.period}
                    </span>
                  </div>

                  <p className="text-[11px] font-bold text-cyan-400/80 uppercase tracking-[0.15em] mb-3">
                    {item.degree}
                  </p>

                  <p className="text-slate-400 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
