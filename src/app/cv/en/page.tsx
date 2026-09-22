"use client";

import React from 'react';
import { Printer } from 'lucide-react';

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-2 mt-4 border-b border-slate-700 pb-0.5">
      <h2 className="text-xs font-black tracking-wider uppercase text-slate-900">
        {children}
      </h2>
    </div>
  );
}

export default function ResumeEN() {
  return (
    <div className="bg-slate-100 min-h-screen py-8 print:py-0 w-full flex justify-center text-slate-800 selection:bg-slate-200 font-sans">
      <div className="fixed top-6 right-6 flex flex-col gap-3 print:hidden z-50">
        <button
          onClick={() => window.print()}
          className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-5 rounded-lg shadow-lg flex items-center gap-2 text-sm cursor-pointer transition-all active:scale-95"
        >
          <Printer size={16} /> Print / Save as PDF
        </button>
      </div>

      {/* A4 Sheet - ATS Optimized Single Column */}
      <div className="bg-white w-full max-w-[210mm] min-h-[297mm] shadow-xl print:shadow-none print:w-full print:max-w-none print:min-h-0 overflow-hidden flex flex-col relative px-10 py-8 print:px-8 print:py-6">
        
        {/* HEADER */}
        <header className="text-center mb-3">
          <h1 className="text-2xl font-black text-slate-900 mb-1 uppercase tracking-tight">Nicolás Melgratti</h1>
          <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Full Stack Developer | Information Systems Analyst (Degree in Progress) & Engineer
          </p>
          <p className="text-[11px] text-slate-600 flex justify-center items-center gap-2.5 flex-wrap font-medium">
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
        <div className="flex-1 text-[11.5px] leading-relaxed text-slate-800 space-y-2">
          
          {/* Summary */}
          <section>
            <SectionTitle>Professional Summary</SectionTitle>
            <p className="leading-snug text-justify text-slate-700">
              Full Stack Developer and University Information Systems Analyst (UTN FRSF) with a strong foundation in software engineering, design patterns, and Agile methodologies (Scrum). Specialized in architecting and delivering scalable backend services with <strong>Java & Spring Boot</strong>, as well as high-performance modern web frontends using <strong>React, Next.js, and TypeScript</strong>. Proven experience delivering end-to-end solutions, from relational database design to intuitive user interfaces and cloud deployment.
            </p>
          </section>

          {/* Technical Skills */}
          <section>
            <SectionTitle>Technical Skills</SectionTitle>
            <div className="space-y-1 text-slate-700">
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
            <div className="mb-2.5">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <h3 className="text-xs">SicroCare — Medical Care & Remote Assistance System (Degree Capstone Project)</h3>
                <span className="text-[10px] text-slate-600 font-mono">2025 – 2026</span>
              </div>
              <p className="italic text-[10.5px] text-slate-600 mb-1">Java, Spring Boot, React, TypeScript, PostgreSQL, REST API</p>
              <ul className="list-disc pl-4 space-y-0.5 text-slate-700">
                <li>Architected an end-to-end healthcare system for elderly individuals and people with disabilities, enabling real-time vital sign tracking and analysis.</li>
                <li>Engineered an intelligent medication alarm engine and automated clinical reporting module for healthcare professionals.</li>
                <li>Built a decoupled client-server architecture with secured REST APIs and relational persistence in PostgreSQL.</li>
              </ul>
            </div>

            {/* Sistema de Emisión de Licencias */}
            <div className="mb-2.5">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <h3 className="text-xs">Driver&apos;s License Issuance System (UTN Academic Project)</h3>
                <span className="text-[10px] text-slate-600 font-mono">2024 – 2025</span>
              </div>
              <p className="italic text-[10.5px] text-slate-600 mb-1">Java, Spring Boot, React/Angular, PostgreSQL, Hybrid Scrum Methodology</p>
              <ul className="list-disc pl-4 space-y-0.5 text-slate-700">
                <li>Led software development for an institutional driver&apos;s license issuance platform applying hybrid Scrum methodology with iterative sprints.</li>
                <li>Implemented core business rules for validity calculations, audit logging, medical examination tracking, and role-based access control (RBAC).</li>
              </ul>
            </div>

            {/* E22 GYM */}
            <div className="mb-2.5">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <h3 className="text-xs">E22 GYM — Sports Management Platform & AI Assistant (Google Gemini)</h3>
                <span className="text-[10px] text-slate-600 font-mono">2026 – Present</span>
              </div>
              <p className="italic text-[10.5px] text-slate-600 mb-1">Next.js 15, React, Tailwind CSS, PostgreSQL, Google Gemini Flash Lite, TypeScript</p>
              <ul className="list-disc pl-4 space-y-0.5 text-slate-700">
                <li>Engineered a full-stack gym platform featuring Stealth Dark athletic UI, 30-day membership cycles, payment receipts verification, and live telemetry.</li>
                <li>Digitized official training logs with 4-phase periodization, RIR intensity tracking (Kg, Reps, Sets), PR recognition, and A4 PDF export.</li>
                <li>Integrated multimodal AI with Google Gemini for handwritten routine OCR (photo/Excel) and a low-latency (~950 ms) AI Virtual Coach.</li>
              </ul>
            </div>

            {/* Zinerva */}
            <div className="mb-2.5">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <h3 className="text-xs">Zinerva — Full-Stack E-commerce Platform (Production on Vercel)</h3>
                <span className="text-[10px] text-slate-600 font-mono">2025 – Present</span>
              </div>
              <p className="italic text-[10.5px] text-slate-600 mb-1">Next.js 15, React, PostgreSQL, Mercado Pago Checkout Pro (E2E), Correo Argentino API (PAQ.AR), Vercel</p>
              <ul className="list-disc pl-4 space-y-0.5 text-slate-700">
                <li>Built and deployed on <strong>Vercel</strong> a high-performance e-commerce platform using Next.js Server-Side Rendering (SSR) achieving sub-second load times and high SEO scores.</li>
                <li>Integrated <strong>Mercado Pago Checkout Pro</strong> payment gateway with End-to-End (E2E) encryption, ensuring seamless and secure payment processing.</li>
                <li>Automated shipping quoting and dispatching workflows via real-time integration with national postal service API (Correo Argentino) and custom matrix inventory.</li>
              </ul>
            </div>

            {/* Other Projects */}
            <div>
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <h3 className="text-xs">Hotel Management System & Hardware Simulator</h3>
                <span className="text-[10px] text-slate-600 font-mono">UTN Academic</span>
              </div>
              <p className="italic text-[10.5px] text-slate-600 mb-0.5">Java, React, SWI-Prolog, Python</p>
              <ul className="list-disc pl-4 space-y-0.5 text-slate-700">
                <li>Developed full hotel occupancy and billing workflows in Java + React, and declarative hardware constraint solvers in SWI-Prolog.</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section>
            <SectionTitle>Education</SectionTitle>
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <h3>University Analyst & Systems Developer</h3>
                <span className="text-[10px] text-slate-600 font-mono">Degree Pending / In Progress</span>
              </div>
              <p className="text-slate-700">Universidad Tecnológica Nacional — Facultad Regional Santa Fe (UTN FRSF)</p>

              <div className="flex justify-between items-baseline font-bold text-slate-900 pt-1">
                <h3>Information Systems Engineering (4th Year)</h3>
                <span className="text-[10px] text-slate-600 font-mono">2020 – In Progress</span>
              </div>
              <p className="text-slate-700">Universidad Tecnológica Nacional — Facultad Regional Santa Fe (UTN FRSF)</p>
            </div>
          </section>
          
          {/* Certifications & Languages */}
          <section>
            <SectionTitle>Certifications & Languages</SectionTitle>
            <div className="space-y-1 text-slate-700">
              <p><strong>Certifications:</strong> Enterprise Full Stack with Spring Boot & Angular (Dev Senior Code, 2026) • Cybersecurity & Ethical Hacking (BIG School, 2026).</p>
              <p><strong>Languages:</strong> Spanish (Native) • English (Intermediate / Professional Working Proficiency +A2/B1).</p>
            </div>
          </section>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          body { background-color: white !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          @page { size: A4; margin: 10mm; }
          .print\\:hidden { display: none !important; }
        }
      ` }} />
    </div>
  );
}
