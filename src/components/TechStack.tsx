"use client";

import React from 'react';
import { Code2, Database, Terminal, Cpu, Layout, Globe } from 'lucide-react';
import { motion } from 'motion/react';

const skills = [
  { name: 'Java', desc: 'Enterprise Logic', icon: Code2 },
  { name: 'JavaScript', desc: 'Dynamic Engines', icon: Globe },
  { name: 'C++', desc: 'Core Optimization', icon: Terminal },
  { name: 'PostgreSQL', desc: 'Relational Data', icon: Database },
  { name: 'HTML5', desc: 'Semantic Shells', icon: Layout },
  { name: 'C', desc: 'Hardware Interface', icon: Cpu },
];

const paradigms = [
  {
    title: 'Logic Paradigm',
    desc: 'Applying rigorous deductive reasoning to system state transitions and constraint-based programming architectures.',
  },
  {
    title: 'Object-Oriented',
    desc: 'Designing decoupled, polymorphic entities that encapsulate complex business rules within clean, maintainable interfaces.',
  },
  {
    title: 'Functional',
    desc: 'Leveraging immutability and pure functions to ensure predictable execution flows in highly concurrent environments.',
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-24 px-8 md:px-16 bg-slate-900/30">
      <div className="mb-16">
        <h2 className="font-headline text-3xl font-bold text-white mb-2">Technical Ecosystem</h2>
        <div className="w-12 h-1 bg-primary"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-primary/50 transition-all group cursor-default"
          >
            <div className="text-primary mb-4 transition-transform group-hover:scale-110">
              <skill.icon size={32} />
            </div>
            <h3 className="font-headline font-bold text-white text-sm">{skill.name}</h3>
            <p className="text-[10px] text-slate-500 mt-2 uppercase tracking-wider">{skill.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 grid md:grid-cols-3 gap-12">
        {paradigms.map((p, idx) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + idx * 0.2 }}
          >
            <h4 className="font-sans text-[10px] tracking-[0.2em] text-primary uppercase mb-4 font-bold">{p.title}</h4>
            <p className="text-slate-400 text-sm leading-relaxed font-light">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
