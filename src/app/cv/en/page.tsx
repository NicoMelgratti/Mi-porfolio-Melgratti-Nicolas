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

export default function ResumeEN() {
  return (
    <div className="bg-slate-100 min-h-screen py-10 print:py-0 w-full flex justify-center text-slate-800 selection:bg-slate-200">
      <div className="fixed top-6 right-6 flex flex-col gap-3 print:hidden z-50">
        <button
          onClick={() => window.print()}
          className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-5 rounded-full shadow-lg flex items-center gap-2 transition-transform active:scale-95 text-sm"
        >
          <Printer size={16} /> Print PDF
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
              Full Stack Developer | Info Systems Engineering Student
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
            
            {/* Contact */}
            <div>
              <SectionTitle>Contact</SectionTitle>
              <ul className="space-y-1.5 text-[10px] text-slate-600">
                <li className="flex gap-2"><span className="shrink-0">📍</span><span>Santa Fe, Argentina</span></li>
                <li className="flex gap-2"><span className="shrink-0">✉️</span><span>nicomelgratti@gmail.com</span></li>
                <li className="flex gap-2"><span className="shrink-0">📞</span><span>+54 9 3497 657247</span></li>
                <li className="flex gap-2"><span className="shrink-0">🔗</span><a href="https://linkedin.com/in/nicolas-gustavo-melgratti-32b61b248" className="break-all">linkedin.com/in/nicolas-gustavo-melgratti</a></li>
                <li className="flex gap-2"><span className="shrink-0">🐙</span><a href="https://github.com/NicoMelgratti">github.com/NicoMelgratti</a></li>
              </ul>
            </div>

            {/* Core Skills */}
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

            {/* Education */}
            <div>
              <SectionTitle>Education</SectionTitle>
              <div className="space-y-3 text-[10px]">
                <div>
                  <p className="font-bold text-slate-800">Information Systems Engineering</p>
                  <p className="text-slate-500">UTN FRSF · 4th year (2020—Present)</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <SectionTitle>Certifications</SectionTitle>
              <div className="space-y-2 text-[10px] text-slate-700">
                <div>
                  <p className="font-bold">Enterprise Full Stack</p>
                  <p className="text-slate-500 text-[9px]">Spring Boot 4 & Angular 21 · 2026</p>
                </div>
                <div>
                  <p className="font-bold">Cybersecurity & Ethical Hacking</p>
                  <p className="text-slate-500 text-[9px]">BIG School · 2026</p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div>
              <SectionTitle>Languages</SectionTitle>
              <div className="space-y-1 text-[10px]">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-700">Spanish</span>
                  <span className="text-slate-500 font-bold text-[9px] uppercase">Native</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-700">English</span>
                  <span className="text-slate-500 font-bold text-[9px] uppercase">+A2 Level</span>
                </div>
              </div>
            </div>

          </aside>

          {/* MAIN CONTENT */}
          <main className="flex-1 p-6 space-y-5">
            
            {/* Profile */}
            <div>
              <SectionTitle>Profile</SectionTitle>
              <p className="text-[10px] text-slate-600 leading-relaxed text-justify">
                Full Stack Developer focused on building and designing scalable solutions. I blend a strong theoretical background in Systems Engineering with hands-on experience delivering real-world products. Experienced in architecting REST APIs in Java/Spring Boot, building reactive frontends with React/Next.js, and structuring PostgreSQL databases. Dedicated to Clean Code practices, SOLID principles, and efficiently solving business requirements.
              </p>
            </div>

            {/* Projects */}
            <div>
              <SectionTitle>Featured Projects</SectionTitle>
              
              <TimelineItem
                period="2026 · Live Production"
                title="Zinerva — Full Stack E-commerce"
                subtitle="Next.js 15 · React 18 · PostgreSQL · REST API"
                bullets={[
                  'Developed an end-to-end apparel e-commerce platform with sub-2-second load times using Server-Side Rendering.',
                  'Fully automated shipping logistics by integrating Correo Argentino API (PAQ.AR) in real-time for quotes and labels.',
                  'Implemented inventory management with size/color matrix and a customized checkout flow with receipt upload.'
                ]}
              />

              <TimelineItem
                period="2025 · Freelance"
                title="Multi-tenant Hotel Management SaaS"
                subtitle="Java · Spring Boot 3 · React · PostgreSQL"
                bullets={[
                  'Architected a multi-tenant application with Role-Based Access Control (RBAC) and data isolation per tenant in PostgreSQL.',
                  'Engineered decoupled REST APIs following SOLID principles, covering bookings, billing, and customer workflows.'
                ]}
              />

              <TimelineItem
                period="2024 · Academic"
                title="Hardware Configuration Simulator"
                subtitle="SWI-Prolog · Logic Programming"
                bullets={[
                  'Built a declarative constraint-satisfaction engine to automatically validate hardware compatibility and resolve IRQ conflicts.'
                ]}
              />
            </div>

            {/* Current Focus */}
            <div>
              <SectionTitle>Currently Exploring</SectionTitle>
              <ul className="space-y-1">
                <li className="text-[10px] text-slate-600 leading-relaxed pl-2 relative before:absolute before:left-0 before:top-[4.5px] before:w-[3px] before:h-[3px] before:rounded-full before:bg-slate-400">
                  <strong>Secure by Design</strong> practices in Spring Boot architectures (OWASP mitigations, JWT management).
                </li>
                <li className="text-[10px] text-slate-600 leading-relaxed pl-2 relative before:absolute before:left-0 before:top-[4.5px] before:w-[3px] before:h-[3px] before:rounded-full before:bg-slate-400">
                  CI/CD pipeline automation with GitHub Actions for containerized deployments.
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
