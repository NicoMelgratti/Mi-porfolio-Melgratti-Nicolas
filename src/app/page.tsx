import React from 'react';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Footer from '@/components/Footer';
import { User, BrainCircuit, Terminal, GraduationCap } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Sidebar />
      
      <main className="md:ml-64 min-h-screen">
        <Hero />
        <TechStack />
        <Projects />
        <Education />
        <Footer />
      </main>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 w-full glass-panel border-t border-slate-800 flex justify-around py-4 z-50">
        <a href="#profile" className="text-primary flex flex-col items-center gap-1">
          <User size={20} />
          <span className="text-[10px] uppercase tracking-widest font-bold">Profile</span>
        </a>
        <a href="#skills" className="text-slate-500 flex flex-col items-center gap-1">
          <BrainCircuit size={20} />
          <span className="text-[10px] uppercase tracking-widest font-bold">Skills</span>
        </a>
        <a href="#projects" className="text-slate-500 flex flex-col items-center gap-1">
          <Terminal size={20} />
          <span className="text-[10px] uppercase tracking-widest font-bold">Projects</span>
        </a>
        <a href="#education" className="text-slate-500 flex flex-col items-center gap-1">
          <GraduationCap size={20} />
          <span className="text-[10px] uppercase tracking-widest font-bold">Edu</span>
        </a>
      </div>
    </div>
  );
}
