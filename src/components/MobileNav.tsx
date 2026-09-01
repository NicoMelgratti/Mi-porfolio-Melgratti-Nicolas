"use client";

import React, { useState, useEffect } from 'react';
import { User, Cpu, Terminal, GraduationCap, Award, FolderGit2, Briefcase } from 'lucide-react';

const navItems = [
  { href: '#profile',        icon: User,          label: 'Perfil' },
  { href: '#skills',         icon: Cpu,           label: 'Stack' },
  { href: '#projects',       icon: FolderGit2,    label: 'Proyectos' },
  { href: '#experience',     icon: Briefcase,     label: 'Exp' },
  { href: '#terminal',       icon: Terminal,      label: 'Consola' },
  { href: '#education',      icon: GraduationCap, label: 'Edu' },
  { href: '#certifications', icon: Award,          label: 'Certs' },
];

const sectionIds = navItems.map((item) => item.href.replace('#', ''));

export default function MobileNav() {
  const [active, setActive] = useState('profile');

  useEffect(() => {
    const getActive = () => {
      const viewportOffset = window.innerHeight * 0.35;
      let currentId = sectionIds[0];
      let minDistance = Infinity;

      sectionIds.forEach((id) => {
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
    <>
      <nav className="md:hidden fixed bottom-3 left-3 right-3 z-50 rounded-2xl liquid-glass border border-[#1e3a8a]/80 shadow-2xl overflow-hidden">
        <div className="flex justify-around py-2 px-1">
          {navItems.map(({ href, icon: Icon, label }) => {
            const id = href.replace('#', '');
            const isActive = active === id;
            return (
              <a
                key={href}
                href={href}
                onClick={() => setActive(id)}
                className={`
                  flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-all
                  ${isActive
                    ? 'liquid-glass-subtle text-cyan-200 font-semibold border border-blue-400/50'
                    : 'text-slate-400 hover:text-slate-200'}
                `}
              >
                <Icon size={16} className={isActive ? 'text-cyan-300' : 'text-blue-400/70'} />
                <span className="text-[10px] font-sans font-medium">
                  {label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
      <div className="md:hidden h-20" />
    </>
  );
}
