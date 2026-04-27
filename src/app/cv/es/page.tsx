"use client";

import React from 'react';
import { Printer } from 'lucide-react';

/* ── Inline NM Logo ─────────────────────────────────────────── */
function NMLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="7" fill="#1e293b" />
      <rect x="1" y="1" width="30" height="30" rx="6.5" stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none" />
      <path d="M5 24V8l8 10V8" stroke="#f8fafc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 24V8l5.5 7L27 8v16" stroke="#f8fafc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Section heading ─────────────────────────────────────────── */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <h2 className="text-[11px] font-black tracking-widest uppercase text-slate-800 whitespace-nowrap">
        {children}
      </h2>
      <div className="h-px flex-1 bg-slate-200" />
    </div>
  );
}

/* ── Timeline item ───────────────────────────────────────────── */
function TimelineItem({
  period, title, subtitle, bullets,
}: { period: string; title: string; subtitle?: string; bullets?: string[] }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-baseline mb-0.5">
        <h3 className="text-[11px] font-bold text-slate-800">{title}</h3>
        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">{period}</p>
      </div>
      {subtitle && <p className="text-[10px] text-slate-600 font-semibold mb-1">{subtitle}</p>}
      {bullets && (
        <ul className="space-y-0.5">
          {bullets.map((b, i) => (
            <li key={i} className="text-[10px] text-slate-600 leading-snug pl-2 relative before:absolute before:left-0 before:top-[4.5px] before:w-[3px] before:h-[3px] before:rounded-full before:bg-slate-400">
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ── Skill badge ─────────────────────────────────────────────── */
function Badge({ label }: { label: string }) {
  return (
    <span className="px-1.5 py-0.5 rounded text-[9px] font-semibold border border-slate-200 text-slate-700 bg-slate-50">
      {label}
    </span>
  );
}

export default function ResumeES() {
  return (
    <div className="bg-slate-100 min-h-screen py-10 print:py-0 w-full flex justify-center text-slate-800 selection:bg-slate-200">
      <div className="fixed top-6 right-6 flex flex-col gap-3 print:hidden z-50">
        <button
          onClick={() => window.print()}
          className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-5 rounded-full shadow-lg flex items-center gap-2 transition-transform active:scale-95 text-sm"
        >
          <Printer size={16} /> Imprimir PDF
        </button>
      </div>

      {/* A4 Sheet */}
      <div className="bg-white w-full max-w-[210mm] min-h-[297mm] shadow-xl print:shadow-none print:w-full print:max-w-none print:min-h-0 overflow-hidden flex flex-col relative">
        
        {/* HEADER */}
        <header className="bg-slate-900 text-white px-8 py-6 flex items-center gap-5">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-700 shrink-0">
            <img src="/perfil.jpg" alt="Nicolás Melgratti" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-black tracking-tight mb-0.5">Nicolás Melgratti</h1>
            <p className="text-[11px] text-slate-300 font-semibold tracking-widest uppercase mb-1.5">
              Desarrollador Full Stack | Estudiante de Ing. en Sistemas
            </p>
            <p className="text-[10px] text-slate-400 leading-tight">
              Java · Spring Boot · React · Next.js · PostgreSQL
            </p>
          </div>
          <div className="shrink-0 opacity-90">
            <NMLogo size={36} />
          </div>
        </header>

        {/* TWO-COLUMN BODY */}
        <div className="flex flex-1 min-h-0">
          
          {/* LEFT SIDEBAR */}
          <aside className="w-[32%] bg-slate-50/50 border-r border-slate-100 p-6 flex flex-col gap-5 shrink-0">
            
            {/* Contacto */}
            <div>
              <SectionTitle>Contacto</SectionTitle>
              <ul className="space-y-1.5 text-[10px] text-slate-600">
                <li className="flex gap-2"><span className="shrink-0">📍</span><span>Santa Fe, Argentina</span></li>
                <li className="flex gap-2"><span className="shrink-0">✉️</span><span>nicomelgratti@gmail.com</span></li>
                <li className="flex gap-2"><span className="shrink-0">📞</span><span>+54 9 3497 657247</span></li>
                <li className="flex gap-2"><span className="shrink-0">🔗</span><a href="https://linkedin.com/in/nicolas-gustavo-melgratti-32b61b248" className="break-all">linkedin.com/in/nicolas-gustavo-melgratti</a></li>
                <li className="flex gap-2"><span className="shrink-0">🐙</span><a href="https://github.com/NicoMelgratti">github.com/NicoMelgratti</a></li>
              </ul>
            </div>

            {/* Habilidades Principales */}
            <div>
              <SectionTitle>Skills</SectionTitle>
              <div className="space-y-2.5 text-[10px]">
                {[
                  { cat: 'Backend', items: ['Java', 'Spring Boot', 'Node.js', 'REST API'] },
                  { cat: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
                  { cat: 'Data & DevOps', items: ['PostgreSQL', 'Docker', 'Git', 'CI/CD'] },
                  { cat: 'Core', items: ['Clean Code', 'SOLID', 'Scrum / Agile'] }
                ].map(({ cat, items }) => (
                  <div key={cat}>
                    <p className="font-bold text-slate-700 text-[9px] uppercase tracking-wider mb-1">{cat}</p>
                    <div className="flex flex-wrap gap-1">
                      {items.map(i => <Badge key={i} label={i} />)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Educación */}
            <div>
              <SectionTitle>Educación</SectionTitle>
              <div className="space-y-3 text-[10px]">
                <div>
                  <p className="font-bold text-slate-800">Ing. en Sistemas de Información</p>
                  <p className="text-slate-500">UTN FRSF · 4.° año (2020—Act.)</p>
                </div>
              </div>
            </div>

            {/* Certificaciones */}
            <div>
              <SectionTitle>Certificaciones</SectionTitle>
              <div className="space-y-2 text-[10px] text-slate-700">
                <div>
                  <p className="font-bold">Enterprise Full Stack</p>
                  <p className="text-slate-500 text-[9px]">Spring Boot 4 & Angular 21 · 2026</p>
                </div>
                <div>
                  <p className="font-bold">Ciberseguridad y Hacking Ético</p>
                  <p className="text-slate-500 text-[9px]">BIG School · 2026</p>
                </div>
              </div>
            </div>

            {/* Idiomas */}
            <div>
              <SectionTitle>Idiomas</SectionTitle>
              <div className="space-y-1 text-[10px]">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-700">Español</span>
                  <span className="text-slate-500 font-bold text-[9px] uppercase">Nativo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-700">Inglés</span>
                  <span className="text-slate-500 font-bold text-[9px] uppercase">Nivel +A2</span>
                </div>
              </div>
            </div>

          </aside>

          {/* MAIN CONTENT */}
          <main className="flex-1 p-6 space-y-5">
            
            {/* Perfil */}
            <div>
              <SectionTitle>Perfil</SectionTitle>
              <p className="text-[10px] text-slate-600 leading-relaxed text-justify">
                Desarrollador Full Stack enfocado en el diseño e implementación de soluciones escalables. Combino bases teóricas académicas sólidas de Ingeniería en Sistemas con la experiencia de entregar productos reales. Experiencia arquitectando APIs REST en Java/Spring Boot, frontends reactivos en React/Next.js y bases de datos relacionales PostgreSQL. Orientado a buenas prácticas, Clean Code y la resolución eficiente de requerimientos de negocio.
              </p>
            </div>

            {/* Proyectos */}
            <div>
              <SectionTitle>Proyectos Destacados</SectionTitle>
              
              <TimelineItem
                period="2026 · En Producción"
                title="Zinerva — E-commerce Full Stack"
                subtitle="Next.js 15 · React 18 · PostgreSQL · REST API"
                bullets={[
                  'Desarrollo integral de plataforma e-commerce de indumentaria con tiempos de carga inferiores a 2s mediante Server-Side Rendering.',
                  'Automatización completa de logística integrando en tiempo real la API de Correo Argentino (PAQ.AR) para cotización y envío.',
                  'Gestión de inventario con matriz de talle/color y flujo de checkout con carga de comprobantes.'
                ]}
              />

              <TimelineItem
                period="2025 · Freelance"
                title="SaaS de Gestión Hotelera Multi-tenant"
                subtitle="Java · Spring Boot 3 · React · PostgreSQL"
                bullets={[
                  'Arquitectura multi-tenant con control de acceso por roles (RBAC) y aislamiento de datos por inquilino en PostgreSQL.',
                  'APIs REST desacopladas implementando principios SOLID, cubriendo reservas, facturación y clientes.'
                ]}
              />

              <TimelineItem
                period="2024 · Académico"
                title="Simulador de Configuración de Hardware"
                subtitle="SWI-Prolog · Programación Lógica"
                bullets={[
                  'Motor declarativo para validar compatibilidad de hardware y resolver conflictos de interrupciones (IRQ) entre múltiples dispositivos.'
                ]}
              />
            </div>

            {/* En curso */}
            <div>
              <SectionTitle>Actualmente Explorando</SectionTitle>
              <ul className="space-y-1">
                <li className="text-[10px] text-slate-600 leading-relaxed pl-2 relative before:absolute before:left-0 before:top-[4.5px] before:w-[3px] before:h-[3px] before:rounded-full before:bg-slate-400">
                  Prácticas de <strong>Secure by Design</strong> en arquitecturas Spring Boot (mitigaciones OWASP, gestión JWT).
                </li>
                <li className="text-[10px] text-slate-600 leading-relaxed pl-2 relative before:absolute before:left-0 before:top-[4.5px] before:w-[3px] before:h-[3px] before:rounded-full before:bg-slate-400">
                  Automatización de despliegues y CI/CD con GitHub Actions para entornos containerizados.
                </li>
              </ul>
            </div>

          </main>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          body { background-color: white !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          @page { size: A4; margin: 0; }
          .print\\:hidden { display: none !important; }
        }
      ` }} />
    </div>
  );
}
