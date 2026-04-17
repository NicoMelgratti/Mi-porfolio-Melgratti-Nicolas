import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-10 px-6 sm:px-10 md:px-16 border-t border-blue-500/15 glass-strong overflow-hidden">
      {/* Subtle orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-600/6 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 editorial-gradient flex items-center justify-center rounded-xl text-white font-black font-headline text-sm shadow-lg shadow-blue-500/20">
            NM
          </div>
          <div>
            <p className="text-sm font-bold text-white">Nicolás Melgratti</p>
            <p className="text-[10px] text-slate-500 font-sans tracking-widest uppercase">Systems Architect © {new Date().getFullYear()}</p>
          </div>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:nicomelgratti@gmail.com"
            className="p-2.5 glass-subtle rounded-xl text-slate-400 hover:text-blue-400 hover:border-blue-400/30 transition-all duration-300"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
          <a
            href="https://github.com/NicoMelgratti"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 glass-subtle rounded-xl text-slate-400 hover:text-white hover:border-blue-400/30 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-gustavo-melgratti-32b61b248/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 glass-subtle rounded-xl text-slate-400 hover:text-blue-400 hover:border-blue-400/30 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
