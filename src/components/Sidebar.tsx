"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { User, Cpu, Terminal, GraduationCap, Award, Mail, Github, Linkedin, FolderGit2, Briefcase } from 'lucide-react';

const navItems = [
  { id: 'profile',        label: 'Perfil',          icon: User },
  { id: 'skills',         label: 'Tecnologías',     icon: Cpu },
  { id: 'projects',       label: 'Proyectos',       icon: FolderGit2 },
  { id: 'experience',     label: 'Experiencia',     icon: Briefcase },
  { id: 'terminal',       label: 'Consola',         icon: Terminal },
  { id: 'education',      label: 'Educación',       icon: GraduationCap },
  { id: 'certifications', label: 'Certificados',    icon: Award },
];

export default function Sidebar() {
  const [active, setActive] = useState('profile');

  useEffect(() => {
    const getActive = () => {
      const viewportOffset = window.innerHeight * 0.35;
      let currentId = navItems[0].id;
      let minDistance = Infinity;

      navItems.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - viewportOffset);
        if (rect.top <= viewportOffset && distance < minDistance) {
          minDistance = distance;
          currentId = id;
        }
      });

      setActive(currentId);
    };

    window.addEventListener('scroll', getActive, { passive: true });
    getActive();
    return () => window.removeEventListener('scroll', getActive);
  }, []);

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 hidden md:flex flex-col z-40 liquid-glass-navbar border-r border-[#1e3a8a]/70">
      <div className="flex flex-col h-full">
        {/* Profile Header */}
        <div className="p-6 flex flex-col items-center text-center border-b border-[#1e3a8a]/60">
          <div className="relative mb-3">
            <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#1e3a8a] p-0.5 bg-slate-950 shadow-lg">
              <Image
                src="/perfil.jpg"
                alt="Nicolás Melgratti"
                width={80}
                height={80}
                className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          <h1 className="text-xl font-headline font-bold text-white tracking-tight leading-tight mt-1">
            Nicolás Melgratti
          </h1>
          <p className="text-[11px] text-cyan-300 font-sans font-medium tracking-wide mt-0.5">Full-Stack Engineer</p>
          <div className="mt-2.5 flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blue-950/80 border border-[#1e3a8a]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] text-emerald-300 font-sans font-medium">Disponible</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-3 space-y-1.5 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActive(item.id)}
                className={`
                  flex items-center gap-3 px-4 py-2.5 rounded-xl
                  font-sans font-medium text-xs tracking-wide transition-all duration-200
                  ${isActive
                    ? 'liquid-glass-subtle text-cyan-200 border border-blue-500/60 shadow-[0_0_12px_rgba(30,58,138,0.4)]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900/50'}
                `}
              >
                <item.icon
                  size={16}
                  className={isActive ? 'text-cyan-300' : 'text-blue-400/80'}
                />
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Footer Quick Actions */}
        <div className="p-4 border-t border-[#1e3a8a]/60 space-y-2.5">
          <div className="flex gap-2">
            <a
              href="https://github.com/NicoMelgratti"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 liquid-glass-subtle rounded-xl text-slate-300 hover:text-cyan-300 hover:border-blue-400/60 transition-all flex justify-center items-center"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/nicolas-gustavo-melgratti-32b61b248/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 liquid-glass-subtle rounded-xl text-slate-300 hover:text-cyan-300 hover:border-blue-400/60 transition-all flex justify-center items-center"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent('openContactModal'));
            }}
            className="w-full py-2.5 liquid-glass-btn text-white font-sans font-semibold text-xs tracking-wide text-center flex justify-center items-center gap-2 active:scale-95 cursor-pointer rounded-xl shadow-md"
          >
            <Mail size={14} />
            Contactar
          </button>
        </div>
      </div>
    </aside>
  );
}