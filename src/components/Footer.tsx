"use client";

import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, MessageSquare, ExternalLink, Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-[#1e3a8a]/70 bg-slate-950/95 pt-16 pb-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Giant Name Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 border-b border-blue-900/40 pb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-blue-600/70 p-1 bg-slate-900 shadow-lg">
              <Image
                src="/logo.png"
                alt="Logo Nicolás Melgratti"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2 className="font-tungsten text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-wide leading-none">
                NICOLÁS <span className="text-azul">MELGRATTI</span>
              </h2>
              <p className="text-xs font-mono text-cyan-300 mt-0.5">
                Full-Stack Software Developer & UTN Engineer Student
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/cv/es"
              target="_blank"
              className="px-4 py-2 rounded-xl bg-azul hover:bg-azul-dark text-white font-sans font-semibold text-xs transition-all shadow-md shadow-blue-600/30"
            >
              CV (ES)
            </a>
            <a
              href="/cv/en"
              target="_blank"
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-200 border border-blue-800 font-sans font-semibold text-xs transition-all"
            >
              Resume (EN)
            </a>
          </div>
        </div>

        {/* 3 Columns (Matching mi-cv.vercel.app footer structure) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Col 1: Redes Sociales */}
          <div className="p-5 rounded-2xl liquid-glass-subtle border border-blue-900/60">
            <p className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1.5 mb-4">
              <span className="text-azul font-bold">//</span> REDES SOCIALES
            </p>
            <div className="flex flex-col space-y-3">
              <a
                href="https://www.linkedin.com/in/nicolas-gustavo-melgratti-32b61b248/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-800 flex items-center justify-center text-cyan-300">
                  <Linkedin size={15} />
                </div>
                <span>LinkedIn / Nicolas Melgratti</span>
              </a>
              <a
                href="https://wa.me/543497657247"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-800 flex items-center justify-center text-cyan-300">
                  <MessageSquare size={15} />
                </div>
                <span>WhatsApp Directo (+54 3497 657247)</span>
              </a>
            </div>
          </div>

          {/* Col 2: Repositorios */}
          <div className="p-5 rounded-2xl liquid-glass-subtle border border-blue-900/60">
            <p className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1.5 mb-4">
              <span className="text-azul font-bold">//</span> REPOSITORIOS
            </p>
            <div className="flex flex-col space-y-3">
              <a
                href="https://github.com/NicoMelgratti"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-slate-300 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-800 flex items-center justify-center text-cyan-300">
                  <Github size={15} />
                </div>
                <span>GitHub @NicoMelgratti</span>
              </a>
              <a
                href="https://github.com/NicoMelgratti/Mi-porfolio-Melgratti-Nicolas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-800 flex items-center justify-center text-cyan-300">
                  <Code2 size={15} />
                </div>
                <span>Código Fuente del Portafolio</span>
              </a>
            </div>
          </div>

          {/* Col 3: Contacto */}
          <div className="p-5 rounded-2xl liquid-glass-subtle border border-blue-900/60">
            <p className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-1.5 mb-4">
              <span className="text-azul font-bold">//</span> CONTACTO DIRECTO
            </p>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:nicomelgratti@gmail.com"
                className="flex items-center gap-2.5 text-xs text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-800 flex items-center justify-center text-cyan-300">
                  <Mail size={15} />
                </div>
                <span className="truncate">nicomelgratti@gmail.com</span>
              </a>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent('openContactModal'));
                }}
                className="w-full py-2 px-3 rounded-xl bg-blue-950/90 hover:bg-blue-900 border border-cyan-500/40 text-cyan-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm"
              >
                <Mail size={13} /> Enviar Mensaje desde la Web
              </button>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-900 text-center text-xs font-mono text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Nicolás Melgratti. Todos los derechos reservados.</span>
          <span className="text-cyan-400/80">Santa Fe, Argentina · UTN FRSF</span>
        </div>

      </div>
    </footer>
  );
}

