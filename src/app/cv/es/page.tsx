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

export default function ResumeES() {
  return (
    <div className="bg-slate-100 min-h-screen py-6 print:py-0 w-full flex justify-center text-slate-800 selection:bg-slate-200 font-sans">
      <div className="fixed top-6 right-6 flex flex-col gap-3 print:hidden z-50">
        <button
          onClick={() => window.print()}
          className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-lg shadow-lg flex items-center gap-2 text-xs cursor-pointer transition-all active:scale-95"
        >
          <Printer size={15} /> Imprimir / Guardar en PDF
        </button>
      </div>

      {/* A4 Sheet - Single Page Optimized */}
      <div className="bg-white w-full max-w-[210mm] shadow-xl print:shadow-none print:w-full print:max-w-none print:min-h-0 overflow-hidden flex flex-col relative px-8 py-5 print:p-0">
        
        {/* HEADER */}
        <header className="text-center mb-1.5">
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 mb-0.5 uppercase tracking-tight">Nicolás Melgratti</h1>
          <p className="text-[10.5px] font-bold text-slate-700 uppercase tracking-wider mb-1">
            Desarrollador Full Stack | Analista y Desarrollador Universitario en Sistemas (En trámite)
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
          
          {/* Resumen */}
          <section>
            <SectionTitle>Resumen Profesional</SectionTitle>
            <p className="text-[10px] leading-snug text-justify text-slate-700">
              Desarrollador Full Stack y Analista Universitario en Sistemas (UTN FRSF) con sólida base en ingeniería de software, patrones de diseño y metodologías ágiles (Scrum). Especializado en la arquitectura backend con <strong>Java y Spring Boot</strong>, desarrollo frontend reactivo con <strong>React, Next.js y TypeScript</strong>, y bases de datos relacionales en <strong>PostgreSQL</strong>. Capacidad demostrada en el diseño y despliegue de soluciones end-to-end seguras, escalables y optimizadas para producción.
            </p>
          </section>

          {/* Habilidades Técnicas */}
          <section>
            <SectionTitle>Habilidades Técnicas</SectionTitle>
            <div className="space-y-0.5 text-[9.5px] text-slate-700 leading-snug">
              <p><strong>Lenguajes:</strong> Java, TypeScript, JavaScript, SQL, Python, C++, C, SWI-Prolog.</p>
              <p><strong>Frameworks & Librerías:</strong> Spring Boot, React, Next.js, Angular, Tailwind CSS, Google Gemini API, Node.js.</p>
              <p><strong>Bases de Datos & Cloud:</strong> PostgreSQL, MySQL, Supabase, Docker, Vercel, Firebase.</p>
              <p><strong>Herramientas & Prácticas:</strong> Git, GitHub, RESTful APIs, Clean Architecture, SOLID, JUnit 5, Mockito, Postman, Swagger/OpenAPI, Scrum Híbrido, CI/CD.</p>
            </div>
          </section>

          {/* Proyectos Destacados y Experiencia */}
          <section>
            <SectionTitle>Proyectos Destacados y Experiencia de Desarrollo</SectionTitle>
            
            {/* SicroCare */}
            <div className="mb-1.5">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <h3 className="text-[10.5px]">SicroCare — Sistema de Control Médico y Teleasistencia (Proyecto de Título UTN)</h3>
                <span className="text-[9px] text-slate-600 font-mono">2025 – 2026</span>
              </div>
              <p className="italic text-[9.5px] text-slate-600 mb-0.5">Java, Spring Boot, React, TypeScript, PostgreSQL, REST API</p>
              <ul className="list-disc pl-3.5 space-y-0.5 text-[9.5px] leading-snug text-slate-700">
                <li>Diseñé una plataforma integral para teleasistencia médica y cuidado de adultos mayores, con registro y monitoreo de signos vitales en tiempo real y fichas de emergencia rápida (SAME 107).</li>
                <li>Desarrollé alarmas horarias para medicación, reportes clínicos en PDF y arquitectura desacoplada RESTful con Spring Boot y PostgreSQL.</li>
              </ul>
            </div>

            {/* E22 GYM */}
            <div className="mb-1.5">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <h3 className="text-[10.5px]">E22 GYM — Gestión Deportiva & Asistente IA (Google Gemini)</h3>
                <span className="text-[9px] text-slate-600 font-mono">2026 – Presente</span>
              </div>
              <p className="italic text-[9.5px] text-slate-600 mb-0.5">Next.js 15, React, Tailwind CSS, PostgreSQL, Google Gemini Flash Lite, TypeScript</p>
              <ul className="list-disc pl-3.5 space-y-0.5 text-[9.5px] leading-snug text-slate-700">
                <li>Plataforma deportiva (Stealth Dark) con gestión de cuotas de 30 días, verificación de pagos, telemetría y experiencia 100% responsiva para atletas y entrenadores.</li>
                <li>Planilla técnica oficial con periodización en 4 fases, control RIR, exportación A4 PDF e IA multimodal (Google Gemini) para escaneo OCR de rutinas y Coach Virtual en vivo.</li>
              </ul>
            </div>

            {/* Zinerva */}
            <div className="mb-1.5">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <h3 className="text-[10.5px]">Zinerva — Plataforma E-commerce de Indumentaria (Producción en Vercel)</h3>
                <span className="text-[9px] text-slate-600 font-mono">2025 – Presente</span>
              </div>
              <p className="italic text-[9.5px] text-slate-600 mb-0.5">Next.js 15, React, PostgreSQL, Mercado Pago Checkout Pro (E2E), API Correo Argentino, Vercel</p>
              <ul className="list-disc pl-3.5 space-y-0.5 text-[9.5px] leading-snug text-slate-700">
                <li>E-commerce en producción con Server-Side Rendering (SSR) sub-segundo, pasarela Mercado Pago Checkout Pro (cifrado E2E) y conciliación automática con webhooks.</li>
                <li>Cotización logística automatizada en tiempo real con Correo Argentino (PAQ.AR), gestión de inventario matricial (talle/color) y backoffice administrativo.</li>
              </ul>
            </div>

            {/* Sistema de Emisión de Licencias */}
            <div className="mb-1.5">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <h3 className="text-[10.5px]">Sistema de Emisión de Licencias de Conducir (TP Institucional UTN)</h3>
                <span className="text-[9px] text-slate-600 font-mono">2024 – 2025</span>
              </div>
              <p className="italic text-[9.5px] text-slate-600 mb-0.5">Java, Spring Boot, React/Angular, PostgreSQL, Metodología Scrum Híbrido</p>
              <ul className="list-disc pl-3.5 space-y-0.5 text-[9.5px] leading-snug text-slate-700">
                <li>Liderazgo en el desarrollo de sistema institucional para emisión y renovación de licencias bajo Scrum híbrido con entregas iterativas y cobertura de pruebas.</li>
                <li>Implementé reglas de vigencia normativa por categoría, trazabilidad y auditoría de operadores, control de exámenes y seguridad RBAC.</li>
              </ul>
            </div>

            {/* Otros Proyectos */}
            <div>
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <h3 className="text-[10.5px]">Gestión Hotelera Alpine & Simulador de Hardware (UTN Académico)</h3>
                <span className="text-[9px] text-slate-600 font-mono">Java, React, SWI-Prolog</span>
              </div>
              <p className="text-[9.5px] text-slate-700 leading-snug">
                Desarrollo de sistema de ocupación hotelera y facturación en Java + React, y modelado declarativo de restricciones de hardware (IRQs/IO) en SWI-Prolog.
              </p>
            </div>
          </section>

          {/* Formación Académica */}
          <section>
            <SectionTitle>Formación Académica</SectionTitle>
            <div className="space-y-1 text-[9.5px]">
              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900">
                  <h3 className="text-[10px]">Analista y Desarrollador Universitario en Sistemas</h3>
                  <span className="text-[9px] text-slate-600 font-mono">Título en trámite</span>
                </div>
                <p className="text-slate-600 text-[9px]">Universidad Tecnológica Nacional — Facultad Regional Santa Fe (UTN FRSF)</p>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900">
                  <h3 className="text-[10px]">Ingeniería en Sistemas de Información (4.° año)</h3>
                  <span className="text-[9px] text-slate-600 font-mono">2020 – En curso</span>
                </div>
                <p className="text-slate-600 text-[9px]">Universidad Tecnológica Nacional — Facultad Regional Santa Fe (UTN FRSF)</p>
              </div>
            </div>
          </section>
          
          {/* Certificaciones e Idiomas */}
          <section>
            <SectionTitle>Certificaciones e Idiomas</SectionTitle>
            <div className="space-y-0.5 text-[9.5px] text-slate-700 leading-snug">
              <p><strong>Certificaciones:</strong> Enterprise Full Stack with Spring Boot & Angular (Dev Senior Code, 2026) • Ciberseguridad y Hacking Ético (BIG School, 2026).</p>
              <p><strong>Idiomas:</strong> Español (Nativo) • Inglés (Nivel Intermedio / Técnico +A2/B1).</p>
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
