"use client";

import React from 'react';
import { Printer } from 'lucide-react';

/* ── Section heading ─────────────────────────────────────────── */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 mt-6 border-b-2 border-slate-800 pb-1">
      <h2 className="text-sm font-black tracking-widest uppercase text-slate-900">
        {children}
      </h2>
    </div>
  );
}

export default function ResumeEN() {
  return (
    <div className="bg-slate-100 min-h-screen py-10 print:py-0 w-full flex justify-center text-slate-800 selection:bg-slate-200">
      <div className="fixed top-6 right-6 flex flex-col gap-3 print:hidden z-50">
        <button
          onClick={() => window.print()}
          className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-5 rounded shadow-lg flex items-center gap-2 text-sm"
        >
          <Printer size={16} /> Print PDF (ATS)
        </button>
      </div>

      {/* A4 Sheet - Single Column ATS Optimized */}
      <div className="bg-white w-full max-w-[210mm] min-h-[297mm] shadow-xl print:shadow-none print:w-full print:max-w-none print:min-h-0 overflow-hidden flex flex-col relative px-12 py-10">
        
        {/* HEADER */}
        <header className="text-center mb-6">
          <h1 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tight">Nicolás Melgratti</h1>
          <p className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-2">
            Full Stack Developer | Software Engineer
          </p>
          <p className="text-xs text-slate-600 flex justify-center items-center gap-3 flex-wrap">
            <span>Santa Fe, Argentina</span>
            <span>|</span>
            <span>nicomelgratti@gmail.com</span>
            <span>|</span>
            <span>+54 9 3497 657247</span>
            <span>|</span>
            <a href="https://linkedin.com/in/nicolas-gustavo-melgratti-32b61b248">linkedin.com/in/nicolas-gustavo-melgratti</a>
            <span>|</span>
            <a href="https://github.com/NicoMelgratti">github.com/NicoMelgratti</a>
          </p>
        </header>

        {/* BODY */}
        <div className="flex-1 text-sm text-slate-800 space-y-2">
          
          {/* Summary */}
          <section>
            <SectionTitle>Professional Summary</SectionTitle>
            <p className="leading-relaxed text-justify">
              Exceptional Full Stack Developer specializing in scalable architectures with Java / Spring Boot and React / Next.js. I design and launch end-to-end technical solutions that solve critical business problems, combining academic rigor in Systems Engineering with proven production delivery. I drive system performance, Search Engine Optimization (SEO), and code maintainability through strict application of Clean Code and Object-Oriented Programming (OOP).
            </p>
          </section>

          {/* Technical Skills */}
          <section>
            <SectionTitle>Technical Skills</SectionTitle>
            <div className="space-y-1.5">
              <p><strong>Programming Languages:</strong> Java, TypeScript, JavaScript, Node.js, SQL.</p>
              <p><strong>Frameworks & Libraries:</strong> Spring Boot, React, Next.js, Tailwind CSS.</p>
              <p><strong>Databases & Cloud:</strong> PostgreSQL, Docker, Multi-tenant Architectures.</p>
              <p><strong>Tools & Methodologies:</strong> Git, Continuous Integration / Continuous Deployment (CI/CD), Application Programming Interface (API) REST, Clean Code, SOLID, Agile, Scrum.</p>
            </div>
          </section>

          {/* Professional Experience */}
          <section>
            <SectionTitle>Professional Experience</SectionTitle>
            
            <div className="mb-5">
              <div className="flex justify-between font-bold text-slate-900 mb-1">
                <h3>Full Stack Developer — Zinerva (E-commerce)</h3>
                <span>Jan 2026 – Present</span>
              </div>
              <p className="italic text-slate-700 mb-2">Next.js 15, React 18, PostgreSQL, REST API</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Achieved the launch of a high-performance e-commerce platform, generating a 40% improvement in load times (sub-2s) that boosts user retention, by implementing Server-Side Rendering (SSR) with Next.js.</li>
                <li>Achieved end-to-end automation of the logistics process, generating savings of 10+ hours per week in manual management, by integrating the Correo Argentino API for real-time quoting.</li>
                <li>Achieved the structuring of the core sales system, generating support for 500+ SKUs and an estimated 25% increase in conversion rate, by creating an optimized checkout flow (UX).</li>
              </ul>
            </div>

            <div className="mb-5">
              <div className="flex justify-between font-bold text-slate-900 mb-1">
                <h3>Backend Developer / Software Architect — Freelance</h3>
                <span>Jan 2025 – Dec 2025</span>
              </div>
              <p className="italic text-slate-700 mb-2">Java, Spring Boot 3, React, PostgreSQL</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Achieved the creation of a B2B SaaS product from scratch, generating a secure ecosystem with 100% data isolation for multiple clients, by utilizing PostgreSQL schema policies and Role-Based Access Control (RBAC).</li>
                <li>Achieved the modernization of the transaction infrastructure, generating the capacity to process hundreds of concurrent bookings without latency, by engineering 15+ REST APIs following SOLID principles.</li>
              </ul>
            </div>

            <div className="mb-5">
              <div className="flex justify-between font-bold text-slate-900 mb-1">
                <h3>Software Developer — Academic Project (UTN)</h3>
                <span>Mar 2024 – Nov 2024</span>
              </div>
              <p className="italic text-slate-700 mb-2">SWI-Prolog, Logic Programming</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Achieved automated hardware validation, generating a 100% reduction in compatibility conflict errors (IRQ), by architecting a declarative constraint-satisfaction engine in SWI-Prolog.</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section>
            <SectionTitle>Education</SectionTitle>
            <div className="flex justify-between font-bold text-slate-900">
              <h3>Information Systems Engineering</h3>
              <span>Mar 2020 – Present</span>
            </div>
            <p className="text-slate-700">Universidad Tecnológica Nacional (UTN FRSF) · 4th year</p>
          </section>
          
          <section className="mt-4">
            <SectionTitle>Certifications & Languages</SectionTitle>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Certifications:</strong> Enterprise Full Stack (Spring Boot 4 & Angular 21, 2026), Cybersecurity & Ethical Hacking (BIG School, 2026).</li>
              <li><strong>Languages:</strong> Spanish (Native), English (+A2 Level).</li>
            </ul>
          </section>

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
