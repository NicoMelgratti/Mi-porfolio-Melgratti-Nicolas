"use client";

import React, { useState, useEffect } from 'react';
import { User, BrainCircuit, Terminal, GraduationCap, Award, FolderGit2 } from 'lucide-react';

const navItems = [
  { href: '#profile',        icon: User,          label: 'Profile' },
  { href: '#skills',         icon: BrainCircuit,  label: 'Skills' },
  { href: '#terminal',       icon: Terminal,      label: 'Terminal' },
  { href: '#projects',       icon: FolderGit2,    label: 'Projects' },
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
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 overflow-hidden">
        {/* Glass layer */}
        <div className="absolute inset-0 glass-strong border-t border-blue-500/20 shadow-[0_-4px_30px_rgba(37,99,235,0.12)]" />

        <div className="relative flex justify-around py-3 px-2">
          {navItems.map(({ href, icon: Icon, label }) => {
            const id = href.replace('#', '');
            const isActive = active === id;
            return (
              <a
                key={href}
                href={href}
                onClick={() => setActive(id)}
                className={`
                  group relative flex flex-col items-center gap-1 px-3 py-1 rounded-xl 
                  transition-all duration-300
                  ${isActive ? 'text-blue-400' : 'text-slate-500 hover:text-blue-400'}
                `}
              >
                {/* Active glow pill background */}
                {isActive && (
                  <span className="absolute inset-0 rounded-xl bg-blue-500/10 border border-blue-500/25" />
                )}

                <Icon
                  size={20}
                  className={`relative transition-all duration-300 ${
                    isActive
                      ? 'text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]'
                      : 'group-hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.7)]'
                  }`}
                />
                <span
                  className={`relative text-[9px] uppercase tracking-widest font-bold transition-colors duration-300 ${
                    isActive ? 'text-blue-300' : ''
                  }`}
                >
                  {label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* Padding so last section isn't hidden by mobile nav */}
      <div className="md:hidden h-16" />
    </>
  );
}
