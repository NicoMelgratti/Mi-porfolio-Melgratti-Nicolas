"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Mail, Github, Linkedin, Download, Menu, X, FileText } from 'lucide-react';

const navItems = [
  { id: 'profile',        num: '01', label: 'INICIO' },
  { id: 'habilidades',    num: '02', label: 'HABILIDADES' },
  { id: 'experiencias',   num: '03', label: 'EXPERIENCIA' },
  { id: 'portafolio',     num: '04', label: 'PORTAFOLIO' },
  { id: 'formacion',      num: '05', label: 'FORMACIÓN' },
  { id: 'certificaciones',num: '06', label: 'CURSOS' },
  { id: 'terminal',       num: '07', label: 'CONSOLA' },
];

export default function Navbar() {
  const [active, setActive] = useState('profile');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-xl border-b border-blue-900/60 shadow-2xl py-3'
          : 'bg-transparent py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <a href="#profile" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-blue-500/70 p-0.5 bg-slate-900 shadow-md group-hover:border-cyan-400 transition-colors">
            <Image
              src="/logo.png"
              alt="Logo Nicolás Melgratti"
              width={40}
              height={40}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="font-tungsten text-2xl sm:text-3xl text-white tracking-wide uppercase leading-none block group-hover:text-cyan-200 transition-colors">
              NICOLÁS <span className="text-azul">MELGRATTI</span>
            </span>
            <span className="text-[10px] font-mono text-slate-400 block tracking-wider">
              FULL-STACK DEVELOPER
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation Items */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-950/60 p-1.5 rounded-2xl border border-blue-900/50 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-azul text-white font-bold shadow-md shadow-blue-600/40'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900/80'
                }`}
              >
                <span className={`text-[10px] ${isActive ? 'text-white' : 'text-slate-500'}`}>
                  {item.num}
                </span>
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="/cv/es"
            target="_blank"
            className="px-3.5 py-2 rounded-xl bg-blue-950/80 hover:bg-blue-900 border border-blue-700 text-cyan-200 font-sans font-semibold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-sm"
          >
            <Download size={13} />
            CV (ES)
          </a>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('openContactModal'))}
            className="px-4 py-2 rounded-xl bg-azul hover:bg-azul-dark text-white font-sans font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 shadow-md shadow-blue-600/30 cursor-pointer uppercase tracking-wider"
          >
            <Mail size={13} />
            Contacto
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menú"
          className="xl:hidden p-2 rounded-xl bg-slate-900 border border-blue-800 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/95 border-b border-blue-900 p-4 space-y-2 backdrop-blur-2xl">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-xl text-xs font-mono text-slate-200 hover:bg-blue-950/80 hover:text-cyan-300"
            >
              <span>{item.label}</span>
              <span className="text-[10px] text-azul">{item.num}</span>
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex gap-2">
            <a
              href="/cv/es"
              target="_blank"
              className="flex-1 py-2 rounded-xl bg-blue-950 border border-blue-800 text-cyan-200 text-xs font-semibold text-center flex items-center justify-center gap-1.5"
            >
              <Download size={13} /> CV (ES)
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.dispatchEvent(new CustomEvent('openContactModal'));
              }}
              className="flex-1 py-2 rounded-xl bg-azul text-white text-xs font-bold text-center"
            >
              Contacto
            </button>
          </div>
        </div>
      )}
    </header>
  );
}