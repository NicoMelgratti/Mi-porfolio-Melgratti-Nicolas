"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  SiReact, SiAngular, SiNextdotjs, SiTailwindcss, SiSpringboot,
  SiGit, SiGithub, SiDocker, SiPostgresql, SiMysql,
  SiJavascript, SiTypescript, SiPython, SiCplusplus, SiHtml5, SiCss
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

type Skill = {
  id: string;
  name: string;
  icon: React.ElementType;
  iconChar: string;
  level: number; // 1 to 7
  category: string;
  description: string;
  color: string;
};

const skills: Skill[] = [
  {
    id: 'java',
    name: 'Java (SE / EE)',
    icon: FaJava,
    iconChar: 'J',
    level: 6,
    category: 'Backend Core',
    description: 'Desarrollo de arquitecturas backend empresariales, programación orientada a objetos con rigor académico, patrones de diseño GoF, concurrencia y Clean Code.',
    color: '#f59e0b',
  },
  {
    id: 'springboot',
    name: 'Spring Boot',
    icon: SiSpringboot,
    iconChar: 'S',
    level: 6,
    category: 'Backend Framework',
    description: 'Creación de microservicios y RESTful APIs escalables, seguridad con Spring Security & JWT, persistencia con Hibernate/JPA y testing automatizado con JUnit 5 & Mockito.',
    color: '#86efac',
  },
  {
    id: 'react',
    name: 'React.js',
    icon: SiReact,
    iconChar: 'R',
    level: 6,
    category: 'Frontend Core',
    description: 'Construcción de interfaces reactivas y componentes desacoplados, custom hooks, gestión de estado y optimización de rendimiento en aplicaciones web de alta demanda.',
    color: '#67e8f9',
  },
  {
    id: 'nextjs',
    name: 'Next.js (App Router)',
    icon: SiNextdotjs,
    iconChar: 'N',
    level: 6,
    category: 'Frontend Framework',
    description: 'Desarrollo full-stack moderno con Server-Side Rendering (SSR), Server Components, Server Actions, optimización de rutas y despliegue continuo en Vercel.',
    color: '#ffffff',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: SiTypescript,
    iconChar: 'T',
    level: 6,
    category: 'Lenguajes',
    description: 'Tipado estático estricto, interfaces genéricas, modelado de dominios complejos y refactorización segura para aplicaciones web empresariales.',
    color: '#93c5fd',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    icon: SiPostgresql,
    iconChar: 'P',
    level: 6,
    category: 'Bases de Datos',
    description: 'Diseño relacional avanzado, índices optimizados, procedimientos almacenados, transacciones ACID y persistencia de alta concurrencia.',
    color: '#93c5fd',
  },
  {
    id: 'docker',
    name: 'Docker & Contenedores',
    icon: SiDocker,
    iconChar: 'D',
    level: 5,
    category: 'DevOps & Cloud',
    description: 'Contenedorización de servicios backend y bases de datos, orquestación multicontenedor con Docker Compose y despliegues estandarizados.',
    color: '#60a5fa',
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    iconChar: 'W',
    level: 7,
    category: 'UI & Styling',
    description: 'Maquetación ultra-eficiente con utility classes, diseño responsive adaptativo, animaciones fluidas y efectos modernos de Liquid Glass y Dark Mode.',
    color: '#38bdf8',
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    icon: SiGit,
    iconChar: 'G',
    level: 6,
    category: 'Control de Versiones',
    description: 'Gestión de ramas con GitFlow, pull requests, resolución de conflictos, integración continua y trabajo colaborativo bajo metodologías ágiles Scrum.',
    color: '#f87171',
  },
  {
    id: 'python',
    name: 'Python',
    icon: SiPython,
    iconChar: 'Y',
    level: 5,
    category: 'Computación Científica',
    description: 'Procesamiento digital de imágenes con OpenCV y NumPy, análisis espectral con Transformadas de Fourier 2D (FFT) y algoritmos de esteganografía LSB.',
    color: '#7dd3fc',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    icon: SiMysql,
    iconChar: 'M',
    level: 6,
    category: 'Bases de Datos',
    description: 'Normalización de esquemas, consultas SQL optimizadas y soporte para integraciones institucionales y comerciales.',
    color: '#7dd3fc',
  },
  {
    id: 'angular',
    name: 'Angular',
    icon: SiAngular,
    iconChar: 'A',
    level: 5,
    category: 'Frontend Framework',
    description: 'Desarrollo de módulos empresariales estructurados con TypeScript, inyección de dependencias y componentes reactivos con RxJS.',
    color: '#f87171',
  },
  {
    id: 'cpp',
    name: 'C++ / C',
    icon: SiCplusplus,
    iconChar: 'C',
    level: 5,
    category: 'Bajo Nivel & Algoritmos',
    description: 'Estructuras de datos complejas, punteros, gestión de memoria y algoritmos de alta eficiencia en la Universidad Tecnológica Nacional.',
    color: '#60a5fa',
  },
  {
    id: 'prolog',
    name: 'SWI-Prolog',
    icon: VscCode,
    iconChar: 'L',
    level: 5,
    category: 'Programación Lógica',
    description: 'Modelado lógico declarativo, bases de conocimiento, unificación, backtracking y resolución de restricciones de hardware e interrupciones (IRQs).',
    color: '#fbcfe8',
  },
];

export default function TechStack() {
  const [selectedSkill, setSelectedSkill] = useState<Skill>(skills[0]);

  return (
    <section id="habilidades" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Tactical Header */}
      <div className="flex items-center gap-3 mb-8 border-b border-[#1e3a8a]/60 pb-3">
        <span className="font-tungsten text-2xl sm:text-3xl text-slate-400">02</span>
        <span className="h-4 w-[2px] bg-azul"></span>
        <h2 className="font-tungsten text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
          Principales <span className="text-azul">Habilidades</span>
        </h2>
      </div>

      {/* Interactive Horizontal Track of Skill Icons */}
      <div className="relative mb-10 overflow-x-auto pb-4 pt-2 scrollbar-thin">
        <div className="flex items-center gap-3 min-w-max">
          {skills.map((skill) => {
            const Icon = skill.icon;
            const isSelected = selectedSkill.id === skill.id;
            return (
              <button
                key={skill.id}
                onClick={() => setSelectedSkill(skill)}
                className={`relative px-4 py-3.5 rounded-xl flex flex-col items-center justify-center gap-1.5 min-w-[76px] transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? 'bg-azul border-cyan-300 text-white scale-105 shadow-[0_0_20px_rgba(56,189,248,0.55)]'
                    : 'bg-slate-900/80 hover:bg-slate-800 border-blue-900/60 text-slate-300 hover:border-cyan-400/60 hover:text-white'
                }`}
              >
                <Icon
                  size={26}
                  style={{ color: isSelected ? '#ffffff' : skill.color }}
                  className="transition-transform group-hover:scale-110"
                />
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider truncate max-w-[65px]">
                  {skill.name.split(' ')[0]}
                </span>

                {/* Tactical Selection Triangle Indicator */}
                {isSelected && (
                  <span className="absolute -bottom-2 w-2 h-2 bg-azul rotate-45 border-r border-b border-cyan-300" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Skill Detail View & Diamond Level Meter (Matching mi-cv.vercel.app) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedSkill.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="liquid-glass-card rounded-2xl p-6 sm:p-8 border border-blue-600/40 shadow-2xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Skill Description */}
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-blue-950/80 text-cyan-300 border border-blue-800">
                  {selectedSkill.category}
                </span>
              </div>
              <h3 className="font-tungsten text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-wide mb-3 flex items-center gap-2">
                {selectedSkill.name}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                {selectedSkill.description}
              </p>
            </div>

            {/* Right Col: Tactical Diamond Level Meter */}
            <div className="md:col-span-5 flex flex-col items-center justify-center p-6 rounded-xl bg-slate-950/70 border border-blue-900/60">
              <p className="font-tungsten text-xl sm:text-2xl text-slate-300 uppercase tracking-widest mb-3">
                Skill Level
              </p>
              
              {/* Row of 7 Tilted Diamonds */}
              <div className="flex items-center justify-center py-2">
                {Array.from({ length: 7 }).map((_, i) => (
                  <span
                    key={i}
                    className={`tactical-diamond ${
                      i < selectedSkill.level ? 'tactical-diamond-active' : ''
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between w-full max-w-[200px] mt-4 text-[10px] font-mono text-slate-400 border-t border-slate-800 pt-2">
                <span>NIVEL {selectedSkill.level} / 7</span>
                <span className="text-azul font-bold">
                  {selectedSkill.level >= 6 ? 'AVANZADO' : 'PROFICIENTE'}
                </span>
              </div>
            </div>

          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

