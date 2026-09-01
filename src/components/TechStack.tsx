"use client";

import React from 'react';
import { motion } from 'motion/react';
import {
  SiReact, SiAngular, SiNextdotjs, SiTailwindcss, SiSpringboot,
  SiGit, SiGithub, SiDocker, SiApachemaven,
  SiJunit5, SiPostman, SiSwagger,
  SiPostgresql, SiMysql,
  SiSupabase, SiFirebase, SiVercel,
  SiNodedotjs, SiC, SiCplusplus,
  SiHtml5, SiCss, SiJavascript, SiTypescript,
  SiPython
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscCode, VscBeaker } from 'react-icons/vsc';
import { Cpu } from 'lucide-react';

type SkillItem = {
  name: string;
  icon: React.ElementType;
  color: string;
};

type SkillCategory = {
  title: string;
  skills: SkillItem[];
};

const skillCategories: SkillCategory[] = [
  {
    title: 'Backend & Lenguajes',
    skills: [
      { name: 'Java', icon: FaJava, color: '#f59e0b' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#86efac' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#6ee7b7' },
      { name: 'TypeScript', icon: SiTypescript, color: '#93c5fd' },
      { name: 'Python', icon: SiPython, color: '#7dd3fc' },
      { name: 'C++', icon: SiCplusplus, color: '#60a5fa' },
      { name: 'C', icon: SiC, color: '#94a3b8' },
      { name: 'Prolog', icon: VscCode, color: '#fbcfe8' },
    ],
  },
  {
    title: 'Frontend & UI',
    skills: [
      { name: 'React', icon: SiReact, color: '#67e8f9' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
      { name: 'Angular', icon: SiAngular, color: '#f87171' },
      { name: 'JavaScript', icon: SiJavascript, color: '#fde047' },
      { name: 'HTML5', icon: SiHtml5, color: '#fb923c' },
      { name: 'CSS3', icon: SiCss, color: '#60a5fa' },
    ],
  },
  {
    title: 'Bases de Datos & Cloud',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#93c5fd' },
      { name: 'MySQL', icon: SiMysql, color: '#7dd3fc' },
      { name: 'Supabase', icon: SiSupabase, color: '#6ee7b7' },
      { name: 'Docker', icon: SiDocker, color: '#60a5fa' },
      { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
      { name: 'Firebase', icon: SiFirebase, color: '#fde047' },
    ],
  },
  {
    title: 'Testing, Herramientas & DevOps',
    skills: [
      { name: 'Git', icon: SiGit, color: '#f87171' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'JUnit 5', icon: SiJunit5, color: '#86efac' },
      { name: 'Mockito', icon: VscBeaker, color: '#c4b5fd' },
      { name: 'Postman', icon: SiPostman, color: '#fb923c' },
      { name: 'Swagger / OpenAPI', icon: SiSwagger, color: '#bef264' },
      { name: 'Maven', icon: SiApachemaven, color: '#fca5a5' },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-8 md:px-12 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-1.5">
          <Cpu size={14} />
          <span>Habilidades & Tecnologías</span>
        </div>
        <h2 className="font-headline font-bold text-4xl sm:text-5xl text-white">
          Stack <span className="title-gradient italic">Tecnológico</span>
        </h2>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skillCategories.map((cat, catIdx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.08, duration: 0.4 }}
            className="liquid-glass-card rounded-2xl p-6"
          >
            <h3 className="font-headline font-bold text-white text-lg tracking-wide mb-4 pb-2 border-b border-[#1e3a8a]/70 flex items-center justify-between">
              <span>{cat.title}</span>
              <span className="text-[11px] font-sans font-medium text-cyan-300">{cat.skills.length} skills</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {cat.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl liquid-glass-subtle hover:border-cyan-400/50 transition-all group"
                  >
                    <Icon
                      size={17}
                      style={{ color: skill.color }}
                      className="shrink-0 transition-transform group-hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
                    />
                    <span className="text-xs text-slate-200 font-sans font-medium truncate group-hover:text-cyan-200">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
