"use client";

import React from 'react';
import { motion } from 'motion/react';
import {
  SiReact, SiAngular, SiNextdotjs, SiTailwindcss, SiSpringboot,
  SiGit, SiGithub, SiDocker, SiApachemaven,
  SiJunit5, SiPostman, SiSwagger,
  SiPostgresql, SiMysql,
  SiSupabase, SiFirebase, SiVercel,
  SiNodedotjs, SiRuby, SiC, SiCplusplus,
  SiHtml5, SiCss, SiJavascript, SiTypescript,
  SiPython, SiNumpy, SiPandas, SiScipy, SiOpencv, SiJupyter
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscCode, VscBeaker, VscDatabase } from 'react-icons/vsc';

type SkillItem = {
  name: string;
  icon: React.ElementType;
  color: string;
  invertDark?: boolean;
};

type SkillCategory = {
  title: string;
  skills: SkillItem[];
};

const skillCategories: SkillCategory[] = [
  {
    title: 'FRAMEWORKS',
    skills: [
      { name: 'React',        icon: SiReact,       color: '#61DAFB' },
      { name: 'Angular',      icon: SiAngular,     color: '#DD0031' },
      { name: 'Next.js',      icon: SiNextdotjs,   color: '#FFFFFF' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Spring Boot',  icon: SiSpringboot,  color: '#6DB33F' },
    ],
  },
  {
    title: 'DEVOPS & TOOLS',
    skills: [
      { name: 'Git',    icon: SiGit,        color: '#F05032' },
      { name: 'GitHub', icon: SiGithub,     color: '#FFFFFF' },
      { name: 'Docker', icon: SiDocker,     color: '#2496ED' },
      { name: 'Maven',  icon: SiApachemaven, color: '#C71A22' },
    ],
  },
  {
    title: 'TESTING & API TOOLS',
    skills: [
      { name: 'JUnit 5',        icon: SiJunit5,  color: '#25A162' },
      { name: 'Mockito',        icon: VscBeaker, color: '#FFFFFF' },
      { name: 'Postman',        icon: SiPostman, color: '#FF6C37' },
      { name: 'Swagger/OpenAPI',icon: SiSwagger, color: '#85EA2D' },
    ],
  },
  {
    title: 'DATABASES',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL',      icon: SiMysql,      color: '#4479A1' },
    ],
  },
  {
    title: 'CLOUD & BaaS',
    skills: [
      { name: 'Supabase', icon: SiSupabase,  color: '#3ECF8E' },
      { name: 'Neon',     icon: VscDatabase, color: '#00E599' },
    ],
  },
  {
    title: 'HOSTING',
    skills: [
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'Vercel',   icon: SiVercel,   color: '#FFFFFF', invertDark: true },
    ],
  },
  {
    title: 'BACKEND & OTHER LANGUAGES',
    skills: [
      { name: 'Java',      icon: FaJava,    color: '#ED8B00' },
      { name: 'Node.js',   icon: SiNodedotjs, color: '#339933' },
      { name: 'Ruby',      icon: SiRuby,    color: '#CC342D' },
      { name: 'C',         icon: SiC,       color: '#A8B9CC' },
      { name: 'C++',       icon: SiCplusplus, color: '#00599C' },
      { name: 'Scheme',    icon: VscCode,   color: '#FFFFFF' },
      { name: 'Smalltalk', icon: VscCode,   color: '#FFFFFF' },
      { name: 'Prolog',    icon: VscCode,   color: '#FFFFFF' },
    ],
  },
  {
    title: 'FRONTEND',
    skills: [
      { name: 'HTML',       icon: SiHtml5,      color: '#E34F26' },
      { name: 'CSS',        icon: SiCss,        color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    ],
  },
  {
    title: 'DATA SCIENCE',
    skills: [
      { name: 'Python',     icon: SiPython,  color: '#3776AB' },
      { name: 'NumPy',      icon: SiNumpy,   color: '#013243', invertDark: true },
      { name: 'Pandas',     icon: SiPandas,  color: '#150458', invertDark: true },
      { name: 'Matplotlib', icon: VscCode,   color: '#FFFFFF' },
      { name: 'SciPy',      icon: SiScipy,   color: '#8CAAEE' },
      { name: 'OpenCV',     icon: SiOpencv,  color: '#5C3EE8' },
      { name: 'Jupyter',    icon: SiJupyter, color: '#F37626' },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-8 md:px-16 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl w-full glass rounded-2xl neon-glow relative overflow-hidden"
      >
        {/* Decorative top accent */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />

        {/* Corner orb */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/8 blur-3xl rounded-full pointer-events-none" />

        {/* Vertical scroll bar accent */}
        <div className="absolute top-0 right-3 w-1 h-full bg-blue-600/10 rounded-full" />

        {/* ===== Card Header (static) ===== */}
        <div className="sticky top-0 z-10 px-6 pt-8 pb-6 md:px-10 glass-strong border-b border-blue-500/15">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-black text-white">
                Tech{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Stack
                </span>
              </h2>
              <p className="text-slate-400 text-sm mt-1">Scroll to explore all technologies</p>
            </div>
            <div className="text-right hidden sm:block">
              <p className="text-2xl font-black text-white font-headline">
                {skillCategories.reduce((sum, c) => sum + c.skills.length, 0)}
              </p>
              <p className="text-[10px] uppercase tracking-widest text-slate-500">Technologies</p>
            </div>
          </div>
        </div>

        {/* ===== Scrollable Skills Body ===== */}
        <div
          className="skill-scroll overflow-y-auto px-6 py-6 md:px-10 md:py-8 space-y-10"
          style={{ maxHeight: '520px' }}
        >
          {skillCategories.map((category, catIdx) => (
            <div key={category.title}>
              {/* Category label */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-5 rounded-full bg-gradient-to-b from-blue-400 to-cyan-500" />
                <h3 className="font-sans text-[11px] md:text-xs font-bold text-slate-400 tracking-[0.18em] uppercase">
                  {category.title}
                </h3>
                <div className="flex-1 h-px bg-slate-800/70" />
              </div>

              {/* Skills grid */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.03 + idx * 0.04, duration: 0.4 }}
                    className="
                      group glass-subtle
                      w-[78px] h-[78px] sm:w-[96px] sm:h-[96px]
                      shrink-0 rounded-xl
                      hover:border-blue-400/50 hover:bg-blue-500/10
                      hover:shadow-[0_0_18px_rgba(59,130,246,0.25)]
                      transition-all duration-300 cursor-default
                      flex flex-col items-center justify-center gap-2
                    "
                  >
                    <div
                      style={{ color: skill.invertDark ? '#FFFFFF' : skill.color }}
                      className="transition-transform duration-300 group-hover:scale-115 group-hover:drop-shadow-[0_0_6px_currentColor]"
                    >
                      <skill.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <span className="font-sans font-semibold text-slate-400 group-hover:text-slate-200 text-[8px] sm:text-[10px] tracking-wide text-center px-1 transition-colors duration-300 leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          {/* Bottom spacer */}
          <div className="h-2" />
        </div>

        {/* Fade at scroll bottom */}
        <div className="pointer-events-none h-8 bg-gradient-to-t from-slate-950/80 to-transparent rounded-b-2xl" />
      </motion.div>
    </section>
  );
}
