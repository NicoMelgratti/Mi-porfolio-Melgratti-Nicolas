"use client";

import React from 'react';
import { Printer } from 'lucide-react';

/* ── Inline NM Logo ─────────────────────────────────────────── */
function NMLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg-en" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#0e7490" />
        </linearGradient>
        <linearGradient id="lt-en" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="7" fill="url(#bg-en)" />
      <rect x="1" y="1" width="30" height="30" rx="6.5" stroke="rgba(96,165,250,0.35)" strokeWidth="1" fill="none" />
      <path d="M5 24V8l8 10V8" stroke="url(#lt-en)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 24V8l5.5 7L27 8v16" stroke="url(#lt-en)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Section heading ─────────────────────────────────────────── */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="h-px flex-1 bg-gradient-to-r from-[#1d4ed8] to-transparent" />
      <h2 className="text-[10px] font-black tracking-[0.22em] uppercase text-[#1d4ed8] whitespace-nowrap">
        {children}
      </h2>
      <div className="h-px w-4 bg-[#1d4ed8]/30" />
    </div>
  );
}

/* ── Timeline item ───────────────────────────────────────────── */
function TimelineItem({
  period, title, subtitle, bullets,
}: { period: string; title: string; subtitle?: string; bullets?: string[] }) {
  return (
    <div className="relative pl-5 mb-6 last:mb-0 before:absolute before:left-[3px] before:top-0 before:bottom-0 before:w-px before:bg-slate-200">
      <div className="absolute left-0 top-1.5 w-[7px] h-[7px] rounded-full border-2 border-[#1d4ed8] bg-white" />
      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{period}</p>
      <h3 className="text-[11px] font-bold text-slate-800 leading-snug">{title}</h3>
      {subtitle && <p className="text-[10px] text-[#1d4ed8] font-semibold mt-0.5">{subtitle}</p>}
      {bullets && (
        <ul className="mt-1.5 space-y-1">
          {bullets.map((b, i) => (
            <li key={i} className="text-[10px] text-slate-600 leading-relaxed pl-2 relative before:absolute before:left-0 before:top-[5px] before:w-1 before:h-1 before:rounded-full before:bg-[#1d4ed8]/50">
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
    <span className="px-2 py-0.5 rounded-md text-[9px] font-bold tracking-wide border border-[#1d4ed8]/25 text-[#1d4ed8] bg-blue-50">
      {label}
    </span>
  );
}

/* ════════════════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════════════ */
export default function ResumeEN() {
  return (
    <div className="bg-slate-200 min-h-screen py-10 print:py-0 w-full flex justify-center selection:bg-blue-200 selection:text-blue-900">

      {/* Print button */}
      <div className="fixed top-6 right-6 flex flex-col gap-3 print:hidden z-50">
        <button
          onClick={() => window.print()}
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-2xl flex items-center gap-2 transition-transform active:scale-95"
        >
          <Printer size={18} /> Print / Save as PDF
        </button>
      </div>

      {/* A4 sheet */}
      <div className="bg-white w-full max-w-[210mm] min-h-[297mm] shadow-2xl print:shadow-none print:w-full print:max-w-none print:min-h-0 overflow-hidden relative text-slate-800">

        {/* ─── HEADER ─────────────────────────────────────────── */}
        <header className="bg-gradient-to-r from-[#1e3a8a] to-[#0e7490] text-white px-10 py-8 flex items-center gap-6">
          {/* Profile photo */}
          <div className="w-20 h-20 rounded-full overflow-hidden border-[3px] border-white/40 shrink-0 shadow-lg">
            <img src="/perfil.jpg" alt="Nicolás Melgratti" className="w-full h-full object-cover" />
          </div>

          {/* Name + title */}
          <div className="flex-1">
            <h1 className="text-3xl font-black tracking-tight leading-none mb-1">Nicolás Melgratti</h1>
            <p className="text-[13px] text-cyan-200 font-semibold tracking-widest uppercase">
              Information Systems Engineering Student
            </p>
            <p className="text-[10px] text-blue-200/70 mt-2 max-w-md leading-relaxed">
              Specializing in Java · Spring Boot · React · Next.js · PostgreSQL
            </p>
          </div>

          {/* NM Logo */}
          <div className="shrink-0 opacity-80">
            <NMLogo size={40} />
          </div>
        </header>

        {/* ─── TWO-COLUMN BODY ────────────────────────────────── */}
        <div className="flex min-h-0">

          {/* LEFT SIDEBAR */}
          <aside className="w-[34%] bg-slate-50 border-r border-slate-100 p-7 flex flex-col gap-7 shrink-0">

            {/* Contact */}
            <div>
              <SectionTitle>Contact</SectionTitle>
              <ul className="space-y-2 text-[10px] text-slate-600">
                {[
                  { icon: '📍', label: 'Santa Fe, Argentina' },
                  { icon: '✉️', label: 'nicomelgratti@gmail.com' },
                  { icon: '📞', label: '+54 9 3497 657247' },
                  { icon: '🔗', label: 'linkedin.com/in/nicolas-gustavo-melgratti-32b61b248' },
                  { icon: '🐙', label: 'github.com/NicoMelgratti' },
                ].map(({ icon, label }) => (
                  <li key={label} className="flex items-start gap-2">
                    <span className="text-[11px] shrink-0">{icon}</span>
                    <span className="break-all leading-relaxed">{label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div>
              <SectionTitle>Education</SectionTitle>
              <div className="space-y-4 text-[10px]">
                <div>
                  <p className="font-black text-[#1d4ed8] text-[9px] uppercase tracking-widest mb-0.5">2020 — Present</p>
                  <p className="font-bold text-slate-800">Information Systems Engineering</p>
                  <p className="text-slate-500">UTN FRSF · Santa Fe</p>
                </div>
                <div>
                  <p className="font-black text-[#1d4ed8] text-[9px] uppercase tracking-widest mb-0.5">Completed</p>
                  <p className="font-bold text-slate-800">Economic & Technical Baccalaureate</p>
                  <p className="text-slate-500">Secondary Education</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <SectionTitle>Skills</SectionTitle>
              <div className="space-y-3 text-[10px]">
                {[
                  { cat: 'Backend', items: ['Java 21', 'Spring Boot 3', 'Node.js', 'REST API Design', 'JPA / Hibernate'] },
                  { cat: 'Frontend', items: ['React 18', 'Next.js 15', 'Angular', 'TypeScript', 'Tailwind CSS'] },
                  { cat: 'Databases', items: ['PostgreSQL', 'MySQL', 'Supabase', 'Neon'] },
                  { cat: 'DevOps & CI/CD', items: ['Docker', 'Git', 'GitHub Actions', 'Vercel', 'Linux / Ubuntu'] },
                  { cat: 'Testing & Methods', items: ['JUnit 5', 'Mockito', 'Scrum / Agile', 'Clean Code', 'SOLID'] },
                  { cat: 'Other', items: ['Python', 'C / C++', 'SWI-Prolog', 'Cybersecurity basics'] },
                ].map(({ cat, items }) => (
                  <div key={cat}>
                    <p className="font-bold text-slate-500 text-[9px] uppercase tracking-wider mb-1">{cat}</p>
                    <div className="flex flex-wrap gap-1">
                      {items.map(i => <Badge key={i} label={i} />)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <SectionTitle>Certifications</SectionTitle>
              <div className="space-y-3 text-[10px]">
                <div className="rounded-lg border border-[#1d4ed8]/20 bg-blue-50/60 p-3">
                  <p className="font-bold text-slate-800 leading-snug text-[10px]">
                    Enterprise Full Stack — Spring Boot 4 &amp; Angular 21
                  </p>
                  <p className="text-[#1d4ed8] font-semibold mt-0.5">Dev Senior Code</p>
                  <p className="text-slate-400 text-[9px] mt-0.5">March 2026</p>
                </div>
                <div className="rounded-lg border border-[#0e7490]/20 bg-cyan-50/60 p-3">
                  <p className="font-bold text-slate-800 leading-snug text-[10px]">
                    Ciberseguridad y Hacking Ético
                  </p>
                  <p className="text-[#0e7490] font-semibold mt-0.5">BIG School</p>
                  <p className="text-slate-400 text-[9px] mt-0.5">10/04/2026 · 6 h</p>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div>
              <SectionTitle>Languages</SectionTitle>
              <div className="space-y-1.5 text-[10px]">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-700">Spanish</span>
                  <span className="text-[#1d4ed8] font-bold text-[9px] uppercase">Native</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-700">English</span>
                  <span className="text-[#1d4ed8] font-bold text-[9px] uppercase">Amateur</span>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT MAIN CONTENT */}
          <main className="flex-1 p-8 space-y-7">

            {/* About */}
            <div>
              <SectionTitle>Profile</SectionTitle>
              <p className="text-[10.5px] text-slate-600 leading-relaxed">
                Backend-leaning full stack developer and 4th-year Information Systems Engineering student at UTN — uniquely positioned at the intersection of <strong>rigorous academic systems theory</strong> (formal computation models, relational database design, logic programming) and <strong>real-world product delivery</strong> (3 projects running in production). Rooted in a prior background in Economics, I translate business constraints into pragmatic technical solutions. Experienced in architecting end-to-end features across Java/Spring Boot APIs, React/Next.js frontends, and PostgreSQL data layers — owning the full lifecycle from schema design to cloud deployment.
              </p>
            </div>

            {/* Projects / Freelance */}
            <div>
              <SectionTitle>Projects / Freelance (2024–2026)</SectionTitle>

              {/* Zinerva — with Live Production tag */}
              <div className="relative pl-5 mb-6 before:absolute before:left-[3px] before:top-0 before:bottom-0 before:w-px before:bg-slate-200">
                <div className="absolute left-0 top-1.5 w-[7px] h-[7px] rounded-full border-2 border-[#1d4ed8] bg-white" />
                <div className="flex items-center gap-2 flex-wrap mb-0.5">
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Full-Stack E-commerce · Freelance</p>
                  <span className="px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-700 border border-emerald-300">
                    ✦ Live Production
                  </span>
                </div>
                <h3 className="text-[11px] font-bold text-slate-800 leading-snug">Zinerva — Apparel E-commerce Platform</h3>
                <p className="text-[10px] text-[#1d4ed8] font-semibold mt-0.5 mb-1">
                  Next.js 15 · React 18 · PostgreSQL · REST API · Tailwind CSS
                </p>
                <p className="text-[9px] text-slate-400 mb-1.5">
                  🔗 <a href="https://zinerva-e-commerce-web.vercel.app/" className="underline text-[#1d4ed8]/70">zinerva-e-commerce-web.vercel.app</a>
                </p>
                <ul className="space-y-1">
                  <li className="text-[10px] text-slate-600 leading-relaxed pl-2 relative before:absolute before:left-0 before:top-[5px] before:w-1 before:h-1 before:rounded-full before:bg-[#1d4ed8]/50">
                    <strong>Accomplished end-to-end shipping automation</strong>, as measured by eliminating ~100% of manual courier coordination per order, by architecting a real-time integration with the Correo Argentino PAQ.AR REST API — handling rate fetching, label generation, and tracking within a single checkout flow.
                  </li>
                  <li className="text-[10px] text-slate-600 leading-relaxed pl-2 relative before:absolute before:left-0 before:top-[5px] before:w-1 before:h-1 before:rounded-full before:bg-[#1d4ed8]/50">
                    <strong>Achieved sub-2-second page load times</strong> on product catalog pages (measured via Vercel Analytics), by implementing Next.js 15 server-side rendering, image optimization, and a PostgreSQL schema with indexed queries across 4 relational entities (products, variants, orders, users).
                  </li>
                  <li className="text-[10px] text-slate-600 leading-relaxed pl-2 relative before:absolute before:left-0 before:top-[5px] before:w-1 before:h-1 before:rounded-full before:bg-[#1d4ed8]/50">
                    Designed an advanced inventory management system with a size/color matrix across 3 relational tables, enabling variant-level stock tracking and a custom checkout flow with proof-of-payment upload.
                  </li>
                </ul>
              </div>

              <TimelineItem
                period="Academic Project — UTN"
                title="Hardware Configuration Simulator"
                subtitle="SWI-Prolog · Logic Programming · Constraint Satisfaction"
                bullets={[
                  'Accomplished automated hardware compatibility validation, as measured by resolving IRQ conflicts across up to 12 simultaneous device constraints, by implementing a declarative constraint-satisfaction engine in SWI-Prolog — reducing detection of configuration errors from manual review to sub-second logical inference.',
                  'Modeled I/O address ranges and port allocation rules across 3 hardware device categories, demonstrating applied formal computation knowledge beyond standard OOP curricula.',
                ]}
              />

              <TimelineItem
                period="Full-Stack Project · Freelance"
                title="Hotel Management & Multi-tenant SaaS"
                subtitle="Java · Spring Boot · React · PostgreSQL · Multi-tenancy"
                bullets={[
                  'Architected a multi-tenant SaaS with role-based access control (RBAC), separating data isolation per decorator-tenant across 6 relational entities in PostgreSQL.',
                  'Engineered decoupled REST APIs with Spring Boot 3 and React 18 frontend, applying SOLID principles and Clean Code practices throughout.',
                  'Implemented SQL relational databases enforcing full referential integrity — covering bookings, billing cycles, and client management workflows.',
                ]}
              />

              <TimelineItem
                period="Academic Research · UTN"
                title="Steganography & Algorithm Prototyping"
                subtitle="Python · NumPy · C++ · 2D Fourier Transforms"
                bullets={[
                  "Accomplished hidden data embedding achieving ~99.8% image fidelity (PSNR >40 dB), by implementing LSB substitution and 2D Discrete Fourier Transform steganography in Python with NumPy.",
                  'Authored interactive language-learning platform (IPA) in C++ — modeling finite automata and lexical analysis algorithms.',
                ]}
              />
            </div>

            {/* What I'm building now */}
            <div>
              <SectionTitle>What I&apos;m Building Now</SectionTitle>
              <ul className="space-y-1">
                <li className="text-[10px] text-slate-600 leading-relaxed pl-2 relative before:absolute before:left-0 before:top-[5px] before:w-1 before:h-1 before:rounded-full before:bg-[#0e7490]/60">
                  Integrating <strong>Secure by Design</strong> practices into Spring Boot 3 architectures — applying input validation hardening, JWT token lifecycle management, and OWASP Top 10 mitigations, informed by recent Cybersecurity & Ethical Hacking certification (BIG School, Apr 2026).
                </li>
                <li className="text-[10px] text-slate-600 leading-relaxed pl-2 relative before:absolute before:left-0 before:top-[5px] before:w-1 before:h-1 before:rounded-full before:bg-[#0e7490]/60">
                  Exploring CI/CD pipeline automation with GitHub Actions for containerized Next.js + Spring Boot deployments on Linux environments.
                </li>
              </ul>
            </div>

            {/* Interests */}
            <div>
              <SectionTitle>Professional Interests</SectionTitle>
              <div className="flex flex-wrap gap-2">
                {[
                  'Software Architecture', 'Backend Development', 'Clean Code',
                  'SOLID Principles', 'Scrum / Agile', 'Continuous Learning',
                  'Cybersecurity / Secure by Design', 'CI/CD Automation',
                ].map(i => <Badge key={i} label={i} />)}
              </div>
            </div>
          </main>
        </div>

        {/* Footer */}
        <footer className="border-t border-slate-100 px-10 py-3 flex justify-between items-center">
          <p className="text-[9px] text-slate-400 tracking-widest uppercase">Nicolás Melgratti · nicomelgratti@gmail.com</p>
          <NMlogo size={18} />
        </footer>
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

function NMlogo({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="7" fill="#1e3a8a" />
      <path d="M5 24V8l8 10V8" stroke="#93c5fd" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 24V8l5.5 7L27 8v16" stroke="#93c5fd" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
