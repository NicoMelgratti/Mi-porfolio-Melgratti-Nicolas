"use client";

import React from 'react';
import { motion } from 'motion/react';

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
    <section id="education" className="py-24 px-8 md:px-16 bg-slate-950">
      <div className="mb-16">
        <h2 className="font-headline text-3xl font-bold text-white mb-2">Academic Foundation</h2>
        <div className="w-12 h-1 bg-primary"></div>
      </div>

      <div className="space-y-12 max-w-4xl">
        {education.map((item, idx) => (
          <motion.div
            key={item.school}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="relative pl-12 border-l border-slate-800"
          >
            <div className={`absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full ${item.status === 'In Progress' ? 'bg-primary' : 'bg-slate-700'}`}></div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-headline font-bold text-white">{item.school}</h3>
                <p className="text-primary text-[10px] font-sans font-bold uppercase tracking-[0.2em] mt-1">{item.degree}</p>
              </div>
              <span className="px-4 py-1 bg-slate-900 rounded-full text-[10px] text-slate-400 border border-slate-800 uppercase tracking-widest font-bold">
                {item.period}
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl font-light">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
