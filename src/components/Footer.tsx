"use client";

import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 px-6 sm:px-10 md:px-12 border-t border-[#1e3a8a]/70 liquid-glass-subvw max-w-5xl mx-auto rounded-t-3xl mt-12 bg-slate-950/70">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Branding with NM Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#1e3a8a] p-0.5 bg-slate-950 shadow-md">
            <Image
              src="/logo.png"
              alt="Logo NM Nicolás Melgratti"
              width={40}
              height={40}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <p className="text-sm font-headline font-bold text-white tracking-tight">Nicolás Melgratti</p>
            <p className="text-[10px] text-slate-400 font-sans">
              Analista y Desarrollador Univ. en Sistemas (En trámite) · {new Date().getFullYear()}
            </p>
          </div>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent('openContactModal'));
            }}
            className="p-2.5 liquid-glass-subtle rounded-xl text-slate-300 hover:text-cyan-300 hover:border-cyan-400 transition-all cursor-pointer"
            aria-label="Email"
          >
            <Mail size={16} />
          </button>
          <a
            href="https://github.com/NicoMelgratti"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 liquid-glass-subtle rounded-xl text-slate-300 hover:text-white hover:border-blue-400 transition-all"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-gustavo-melgratti-32b61b248/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 liquid-glass-subtle rounded-xl text-slate-300 hover:text-cyan-300 hover:border-cyan-400 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
