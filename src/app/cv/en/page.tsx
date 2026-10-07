"use client";

import React from 'react';
import { Printer } from 'lucide-react';

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-1 mt-2.5 border-b border-slate-700 pb-0.5">
      <h2 className="text-[11px] font-black tracking-wider uppercase text-slate-900">
        {children}
      </h2>
    </div>
  );
}

export default function ResumeEN() {
  return (
    <div className="bg-slate-100 min-h-screen py-6 print:py-0 w-full flex justify-center text-slate-800 selection:bg-slate-200 font-sans">
      <div className="fixed top-6 right-6 flex flex-col gap-3 print:hidden z-50">
        <button
          onClick={() => window.print()}
          className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-lg shadow-lg flex items-center gap-2 text-xs cursor-pointer transition-all active:scale-95"
        >
          <Printer size={15} /> Print / Save as PDF
        </button>
      </div>

      {/* A4 Sheet - Single Page Optimized */}
      <div className="bg-white w-full max-w-[210mm] shadow-xl print:shadow-none print:w-full print:max-w-none print:min-h-0 overflow-hidden flex flex-col relative px-8 py-5 print:p-0">
        
        {/* HEADER */}
        <header className="text-center mb-1.5">
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 mb-0.5 uppercase tracking-tight">Nicolás Melgratti</h1>
          <p className="text-[10.5px] font-bold text-slate-700 uppercase tracking-wider mb-1">
            Full Stack Developer | Information Systems Analyst (Degree Pending)
          </p>
          <p className="text-[9.5px] text-slate-600 flex justify-center items-center gap-2 flex-wrap font-medium">
            <span>Santa Fe, Argentina</span>
            <span>•</span>
            <span>nicomelgratti@gmail.com</span>
            <span>•</span>
            <span>+54 9 3497 657247</span>
            <span>•</span>
            <a href="https://linkedin.com/in/nicolas-gustavo-melgratti-32b61b248" className="hover:underline text-slate-800">linkedin.com/in/nicolas-gustavo-melgratti</a>
            <span>•</span>
            <a href="https://github.com/NicoMelgratti" className="hover:underline text-slate-800">github.com/NicoMelgratti</a>
          </p>
        </header>

        {/* BODY */}
        <div className="flex-1 text-[10px] leading-relaxed text-slate-800 space-y-1">
          
          {/* Summary */}
          <section>
            <SectionTitle>Professional Summary</SectionTitle>
            <p className="text-[10px] leading-snug text-justify text-slate-700">
              Full Stack Developer and University Information Systems Analyst (UTN FRSF) with a solid foundation in software engineering, design patterns, and Agile methodologies (Scrum). Specialized in scalable backend architectures with <strong>Java & Spring Boot</strong>, high-performance web frontends with <strong>React, Next.js, and TypeScript</strong>, and relational databases in <strong>PostgreSQL</strong>. Proven experience delivering secure, scalable, end-to-end solutions optimized for production environments.
            </p>
          </section>

          {/* Technical Skills */}
          <section>
            <SectionTitle>Technical Skills</SectionTitle>
            <div className="space-y-0.5 text-[9.5px] text-slate-700 leading-snug">
              <p><strong>Languages:</strong> Java, TypeScript, JavaScript, SQL, Python, C++, C, SWI-Prolog.</p>
              <p><strong>Frameworks & Libraries:</strong> Spring Boot, React, Next.js, Angular, Tailwind CSS, Google Gemini API, Node.js.</p>
              <p><strong>Databases & Cloud:</strong> PostgreSQL, MySQL, Supabase, Docker, Vercel, Firebase.</p>
              <p><strong>Tools & Practices:</strong> Git, GitHub, RESTful APIs, Clean Architecture, SOLID, JUnit 5, Mockito, Postman, Swagger/OpenAPI, Hybrid Scrum, CI/CD.</p>
            </div>
          </section>

          {/* Featured Projects & Development Experience */}
          <section>
            <SectionTitle>Featured Projects & Development Experience</SectionTitle>
            
            {/* SicroCare */}
            <div className="mb-1.5">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <h3 className="text-[10.5px]">SicroCare — Medical Care & Remote Assistance System (Degree Capstone Project)</h3>
                <span className="text-[9px] text-slate-600 font-mono">2025 – 2026</span>
              </div>
              <p className="italic text-[9.5px] text-slate-600 mb-0.5">Java, Spring Boot, React, TypeScript, PostgreSQL, REST API</p>
              <ul className="list-disc pl-3.5 space-y-0.5 text-[9.5px] leading-snug text-slate-700">
                <li>Architected an end-to-end healthcare platform for elderly individuals and people with disabilities, enabling real-time vital sign tracking and emergency dispatch cards (SAME 107).</li>
                <li>Engineered an intelligent medication alarm engine, automated clinical PDF reporting module, and decoupled RESTful architecture with Spring Boot and PostgreSQL.</li>
              </ul>
            </div>

            {/* E22 GYM */}
            <div className="mb-1.5">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <h3 className="text-[10.5px]">E22 GYM — Sports Management Platform & AI Assistant (Google Gemini)</h3>
                <span className="text-[9px] text-slate-600 font-mono">2026 – Present</span>
              </div>
              <p className="italic text-[9.5px] text-slate-600 mb-0.5">Next.js 15, React, Tailwind CSS, PostgreSQL, Google Gemini Flash Lite, TypeScript</p>
              <ul className="list-disc pl-3.5 space-y-0.5 text-[9.5px] leading-snug text-slate-700">
                <li>Engineered a high-performance gym platform (Stealth Dark UI) with 30-day membership cycles, payment verification, telemetry, and 100% responsive experience for athletes and coaches.</li>
                <li>Digitized official training logs with 4-phase periodization, RIR intensity tracking, A4 PDF export, and multimodal AI (Google Gemini) for routine OCR and interactive Virtual Coach.</li>
              </ul>
            </div>

            {/* Zinerva */}
            <div className="mb-1.5">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <h3 className="text-[10.5px]">Zinerva — Full-Stack E-commerce Platform (Production on Vercel)</h3>
                <span className="text-[9px] text-slate-600 font-mono">2025 – Present</span>
              </div>
              <p className="italic text-[9.5px] text-slate-600 mb-0.5">Next.js 15, React, PostgreSQL, Mercado Pago Checkout Pro (E2E), Correo Argentino API, Vercel</p>
              <ul className="list-disc pl-3.5 space-y-0.5 text-[9.5px] leading-snug text-slate-700">
                <li>Built a high-performance e-commerce platform with sub-second SSR, integrated Mercado Pago Checkout Pro (E2E encryption), and automated webhook order settlement.</li>
                <li>Automated real-time shipping calculation with the national postal service API (Correo Argentino), dynamic matrix inventory (size/color), and administrative backoffice.</li>
              </ul>
            </div>

            {/* Sistema de Emisión de Licencias */}
            <div className="mb-1.5">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <h3 className="text-[10.5px]">Driver&apos;s License Issuance System (UTN Academic Project)</h3>
                <span className="text-[9px] text-slate-600 font-mono">2024 – 2025</span>
              </div>
              <p className="italic text-[9.5px] text-slate-600 mb-0.5">Java, Spring Boot, React/Angular, PostgreSQL, Hybrid Scrum Methodology</p>
              <ul className="list-disc pl-3.5 space-y-0.5 text-[9.5px] leading-snug text-slate-700">
                <li>Led software development for an institutional license issuance platform applying hybrid Scrum methodology with iterative sprints and comprehensive integration testing.</li>
                <li>Implemented category validity business rules, audit logging for operators, theoretical/practical exam grading, and role-based access control (RBAC).</li>
              </ul>
            </div>

            {/* Other Projects */}
            <div>
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <h3 className="text-[10.5px]">Hotel Management System & Hardware Simulator (UTN Academic)</h3>
                <span className="text-[9px] text-slate-600 font-mono">Java, React, SWI-Prolog</span>
              </div>
              <p className="text-[9.5px] text-slate-700 leading-snug">
                Developed full hotel occupancy and billing workflows in Java + React, and declarative constraint satisfaction engines for hardware architecture (IRQs/IO) in SWI-Prolog.
              </p>
            </div>
          </section>

          {/* Education */}
          <section>
            <SectionTitle>Education</SectionTitle>
            <div className="space-y-1 text-[9.5px]">
              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900">
                  <h3 className="text-[10px]">University Analyst & Systems Developer</h3>
                  <span className="text-[9px] text-slate-600 font-mono">Degree in Progress</span>
                </div>
                <p className="text-slate-600 text-[9px]">Universidad Tecnológica Nacional — Facultad Regional Santa Fe (UTN FRSF)</p>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900">
                  <h3 className="text-[10px]">Information Systems Engineering (4th Year)</h3>
                  <span className="text-[9px] text-slate-600 font-mono">2020 – In Progress</span>
                </div>
                <p className="text-slate-600 text-[9px]">Universidad Tecnológica Nacional — Facultad Regional Santa Fe (UTN FRSF)</p>
              </div>
            </div>
          </section>
          
          {/* Certifications & Languages */}
          <section>
            <SectionTitle>Certifications & Languages</SectionTitle>
            <div className="space-y-0.5 text-[9.5px] text-slate-700 leading-snug">
              <p><strong>Certifications:</strong> Enterprise Full Stack with Spring Boot & Angular (Dev Senior Code, 2026) • Cybersecurity & Ethical Hacking (BIG School, 2026).</p>
              <p><strong>Languages:</strong> Spanish (Native) • English (Intermediate / Professional Working Proficiency +A2/B1).</p>
            </div>
          </section>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          @page { size: A4; margin: 8mm 10mm; }
          body { background-color: white !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .print\\:hidden { display: none !important; }
        }
      ` }} />
    </div>
  );
}
