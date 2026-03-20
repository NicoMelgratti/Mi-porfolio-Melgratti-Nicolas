import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-8 md:px-16 border-t border-slate-900 bg-slate-950 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 editorial-gradient flex items-center justify-center rounded-lg text-white font-black font-headline">
          NM
        </div>
        <div>
          <p className="text-sm font-bold text-white">Nicolás Melgratti</p>
          <p className="text-[10px] text-slate-500 font-sans tracking-widest uppercase">Systems Architect © 2024</p>
        </div>
      </div>
      
      <div className="flex gap-6">
        <a href="https://github.com/NicoMelgratti" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
          <Github size={20} />
        </a>
        <a href="https://www.linkedin.com/in/nicolas-gustavo-melgratti-32b61b248/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
          <Linkedin size={20} />
        </a>
      </div>
    </footer>
  );
}
