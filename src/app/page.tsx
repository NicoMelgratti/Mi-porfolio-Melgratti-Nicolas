import React from 'react';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Footer from '@/components/Footer';
import { User, BrainCircuit, Terminal, GraduationCap, Award } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen text-slate-200">
      <Sidebar />

      <main className="md:ml-64 min-h-screen">
        <div className="max-w-5xl mx-auto">
          <Hero />
          <TechStack />
          <Projects />
          <Education />
          <Certifications />
        </div>
        <Footer />
      </main>

      {/* Mobile Bottom Navigation — glassmorphism */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 overflow-hidden">
        {/* Glass layer */}
        <div className="absolute inset-0 glass-strong border-t border-blue-500/20 shadow-[0_-4px_30px_rgba(37,99,235,0.12)]" />

        <div className="relative flex justify-around py-3 px-2">
          {[
            { href: '#profile',        icon: User,          label: 'Profile' },
            { href: '#skills',         icon: BrainCircuit,  label: 'Skills' },
            { href: '#projects',       icon: Terminal,       label: 'Projects' },
            { href: '#education',      icon: GraduationCap, label: 'Edu' },
            { href: '#certifications', icon: Award,          label: 'Certs' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={href}
              href={href}
              className="group flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-all duration-300 text-slate-500 hover:text-blue-400"
            >
              <Icon size={20} className="transition-colors duration-300 group-hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.7)]" />
              <span className="text-[9px] uppercase tracking-widest font-bold">{label}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Padding so last section isn't hidden by mobile nav */}
      <div className="md:hidden h-16" />
    </div>
  );
}
