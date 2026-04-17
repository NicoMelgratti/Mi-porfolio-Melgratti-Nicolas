"use client";

import React, { useState, useEffect } from 'react';
import { User, BrainCircuit, Terminal, GraduationCap, Award, Mail, Github, Linkedin } from 'lucide-react';

const navItems = [
  { id: 'profile',        label: 'Profile',        icon: User },
  { id: 'skills',         label: 'Skills',          icon: BrainCircuit },
  { id: 'projects',       label: 'Projects',        icon: Terminal },
  { id: 'education',      label: 'Education',       icon: GraduationCap },
  { id: 'certifications', label: 'Certifications',  icon: Award },
];

export default function Sidebar() {
  const [active, setActive] = useState('profile');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 hidden md:flex flex-col z-40 overflow-hidden">
      {/* Glass Background Layer */}
      <div className="absolute inset-0 glass-strong border-r border-blue-500/20 shadow-[4px_0_40px_rgba(37,99,235,0.12)]" />

      {/* Decorative orb */}
      <div className="absolute -top-20 -left-10 w-56 h-56 rounded-full bg-blue-600/10 blur-3xl pointer-events-none mesh-orb" />

      <div className="relative flex flex-col h-full">
        {/* Profile Header */}
        <div className="p-7 flex flex-col items-center text-center border-b border-blue-500/15">
          <div className="relative mb-4">
            {/* Glowing ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 blur-sm opacity-60" />
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-blue-400/40 p-0.5 bg-slate-900">
              <img
                src="/perfil.jpg"
                alt="Nicolás Melgratti"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <h1 className="text-lg font-black text-white font-headline leading-tight">Nicolás Melgratti</h1>
          <p className="text-[10px] text-cyan-400/80 font-sans tracking-[0.18em] mt-1.5 uppercase">Information Systems Eng.</p>
          <div className="mt-3 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] text-emerald-400 font-semibold tracking-wide">Available for work</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActive(item.id)}
                className={`
                  group relative flex items-center gap-3 px-6 py-3.5
                  text-sm font-sans tracking-wide transition-all duration-300
                  ${isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'}
                `}
              >
                {/* Active/hover left indicator */}
                <span
                  className={`
                    absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-7 rounded-r-full transition-all duration-300
                    ${isActive ? 'bg-gradient-to-b from-blue-400 to-cyan-400 opacity-100' : 'bg-blue-500 opacity-0 group-hover:opacity-60'}
                  `}
                />

                {/* Active bg pill */}
                {isActive && (
                  <span className="absolute inset-x-3 inset-y-1 rounded-xl glass-subtle border-blue-500/25 neon-glow-sm -z-10" />
                )}

                <item.icon
                  size={17}
                  className={`transition-colors duration-300 ${isActive ? 'text-blue-400' : 'text-slate-500 group-hover:text-blue-400'}`}
                />
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Footer Contact */}
        <div className="p-5 border-t border-blue-500/15 space-y-3">
          <div className="flex items-center gap-2.5 text-xs text-slate-400">
            <Mail size={13} className="text-blue-400/70 shrink-0" />
            <span className="truncate">nicomelgratti@gmail.com</span>
          </div>

          <div className="flex gap-3 mt-1">
            <a
              href="https://github.com/NicoMelgratti"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass-subtle rounded-lg text-slate-400 hover:text-white hover:border-blue-400/40 transition-all"
            >
              <Github size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/nicolas-gustavo-melgratti-32b61b248/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 glass-subtle rounded-lg text-slate-400 hover:text-white hover:border-blue-400/40 transition-all"
            >
              <Linkedin size={15} />
            </a>
          </div>

          <a
            href="mailto:nicomelgratti@gmail.com"
            className="mt-1 w-full py-2.5 btn-cv text-white font-bold rounded-xl text-sm text-center flex justify-center items-center gap-2 active:scale-95"
          >
            Hire Me
          </a>
        </div>
      </div>
    </aside>
  );
}