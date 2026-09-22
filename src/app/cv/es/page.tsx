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

export default function ResumeES() {
  return (
    <div className="bg-slate-100 min-h-screen py-8 print:py-0 w-full flex justify-center text-slate-800 selection:bg-slate-200 font-sans">
      <div className="fixed top-6 right-6 flex flex-col gap-3 print:hidden z-50">
        <button
          onClick={() => window.print()}
          className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-2.5 px-5 rounded-lg shadow-lg flex items-center gap-2 text-sm cursor-pointer transition-all active:scale-95"
        >
          <Printer size={16} /> Imprimir / Guardar en PDF
        </button>
      </div>

      {/* A4 Sheet - ATS Optimized Single Column */}
      <div className="bg-white w-full max-w-[210mm] min-h-[297mm] shadow-xl print:shadow-none print:w-full print:max-w-none print:min-h-0 overflow-hidden flex flex-col relative px-10 py-8 print:px-8 print:py-6">
        
        {/* HEADER */}
        <header className="text-center mb-3">
          <h1 className="text-2xl font-black text-slate-900 mb-1 uppercase tracking-tight">Nicolás Melgratti</h1>
          <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Desarrollador Full Stack | Analista y Desarrollador Universitario en Sistemas (En trámite)
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
          
          {/* Resumen */}
          <section>
            <SectionTitle>Resumen Profesional</SectionTitle>
            <p className="leading-snug text-justify text-slate-700">
              Desarrollador Full Stack y Analista Universitario en Sistemas (UTN FRSF) con sólida base en ingeniería de software, patrones de diseño y metodologías ágiles (Scrum). Especializado en la arquitectura e implementación de servicios backend escalables con <strong>Java y Spring Boot</strong>, y desarrollo frontend moderno y reactivo con <strong>React, Next.js y TypeScript</strong>. Capacidad demostrada en el diseño de soluciones de punta a punta, desde modelos de bases de datos relacionales hasta interfaces de usuario optimizadas y despliegue en producción.
            </p>
          </section>

          {/* Habilidades Técnicas */}
          <section>
            <SectionTitle>Habilidades Técnicas</SectionTitle>
            <div className="space-y-1 text-slate-700">
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
            <div className="mb-2.5">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <h3 className="text-xs">SicroCare — Sistema de Control Médico y Teleasistencia (Proyecto de Título UTN)</h3>
                <span className="text-[10px] text-slate-600 font-mono">2025 – 2026</span>
              </div>
              <p className="italic text-[10.5px] text-slate-600 mb-1">Java, Spring Boot, React, TypeScript, PostgreSQL, REST API</p>
              <ul className="list-disc pl-4 space-y-0.5 text-slate-700">
                <li>Diseñé y construí un sistema integral para el cuidado de adultos mayores y personas con discapacidad, implementando registro y seguimiento de signos vitales en tiempo real.</li>
                <li>Desarrollé un módulo inteligente de alarmas para la toma de medicamentos y generación automatizada de reportes clínicos exportables para profesionales de la salud.</li>
                <li>Estructuré una arquitectura cliente-servidor desacoplada con APIs REST seguras y persistencia relacional en PostgreSQL.</li>
              </ul>
            </div>

            {/* Sistema de Emisión de Licencias */}
            <div className="mb-2.5">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <h3 className="text-xs">Sistema de Emisión de Licencias de Conducir (TP Institucional UTN)</h3>
                <span className="text-[10px] text-slate-600 font-mono">2024 – 2025</span>
              </div>
              <p className="italic text-[10.5px] text-slate-600 mb-1">Java, Spring Boot, React/Angular, PostgreSQL, Metodología Scrum Híbrido</p>
              <ul className="list-disc pl-4 space-y-0.5 text-slate-700">
                <li>Lideré el desarrollo de un sistema institucional para la emisión y renovación de licencias de conducir, aplicando metodología ágil Scrum híbrido con entregas iterativas.</li>
                <li>Implementé reglas de negocio para validación de vigencias, auditoría de trámites, control de exámenes y gestión de roles y permisos (RBAC).</li>
              </ul>
            </div>

            {/* E22 GYM */}
            <div className="mb-2.5">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <h3 className="text-xs">E22 GYM — Gestión Deportiva & Asistente IA (Google Gemini)</h3>
                <span className="text-[10px] text-slate-600 font-mono">2026 – Presente</span>
              </div>
              <p className="italic text-[10.5px] text-slate-600 mb-1">Next.js 15, React, Tailwind CSS, PostgreSQL, Google Gemini Flash Lite, TypeScript</p>
              <ul className="list-disc pl-4 space-y-0.5 text-slate-700">
                <li>Desarrollé una plataforma integral con estética Stealth Dark, control de membresías de 30 días, verificación de comprobantes y telemetría de gimnasio.</li>
                <li>Digitalicé la planilla técnica oficial con periodización en 4 fases, control RIR (Kg, Repeticiones, Series), marcas PR y exportación a PDF A4.</li>
                <li>Integré IA multimodal con Google Gemini para escaneo OCR de rutinas manuscritas/Excel y Coach Virtual interactivo en tiempo real (~950 ms).</li>
              </ul>
            </div>

            {/* Zinerva */}
            <div className="mb-2.5">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <h3 className="text-xs">Zinerva — Plataforma E-commerce de Indumentaria (Producción en Vercel)</h3>
                <span className="text-[10px] text-slate-600 font-mono">2025 – Presente</span>
              </div>
              <p className="italic text-[10.5px] text-slate-600 mb-1">Next.js 15, React, PostgreSQL, Mercado Pago Checkout Pro (E2E), API Correo Argentino (PAQ.AR), Vercel</p>
              <ul className="list-disc pl-4 space-y-0.5 text-slate-700">
                <li>Desarrollé y desplegué en <strong>Vercel</strong> una plataforma de comercio electrónico de alto rendimiento con Server-Side Rendering (SSR) optimizada para SEO y tiempos de carga sub-segundo.</li>
                <li>Integré la pasarela de pagos <strong>Mercado Pago Checkout Pro</strong> con cifrado y seguridad End-to-End (E2E), garantizando transacciones seguras y conciliación automática de órdenes.</li>
                <li>Automaticé la cotización y despacho logístico mediante la integración en tiempo real de la API de Correo Argentino, junto con un sistema de inventario matricial (talle y color).</li>
              </ul>
            </div>

            {/* Otros Proyectos */}
            <div>
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <h3 className="text-xs">Gestión Hotelera Alpine & Simulador de Hardware</h3>
                <span className="text-[10px] text-slate-600 font-mono">UTN Académico</span>
              </div>
              <p className="italic text-[10.5px] text-slate-600 mb-0.5">Java, React, SWI-Prolog, Python</p>
              <ul className="list-disc pl-4 space-y-0.5 text-slate-700">
                <li>Desarrollo de sistema de ocupación hotelera y facturación en Java + React, y modelado declarativo de restricciones de hardware (IRQs/IO) en Prolog.</li>
              </ul>
            </div>
          </section>

          {/* Formación Académica */}
          <section>
            <SectionTitle>Formación Académica</SectionTitle>
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline font-bold text-slate-900">
                <h3>Analista y Desarrollador Universitario en Sistemas</h3>
                <span className="text-[10px] text-slate-600 font-mono">Título en trámite</span>
              </div>
              <p className="text-slate-700">Universidad Tecnológica Nacional — Facultad Regional Santa Fe (UTN FRSF)</p>

              <div className="flex justify-between items-baseline font-bold text-slate-900 pt-1">
                <h3>Ingeniería en Sistemas de Información</h3>
                <span className="text-[10px] text-slate-600 font-mono">2020 – En curso (4.° año)</span>
              </div>
              <p className="text-slate-700">Universidad Tecnológica Nacional — Facultad Regional Santa Fe (UTN FRSF)</p>
            </div>
          </section>
          
          {/* Certificaciones e Idiomas */}
          <section>
            <SectionTitle>Certificaciones e Idiomas</SectionTitle>
            <div className="space-y-1 text-slate-700">
              <p><strong>Certificaciones:</strong> Enterprise Full Stack with Spring Boot & Angular (Dev Senior Code, 2026) • Ciberseguridad y Hacking Ético (BIG School, 2026).</p>
              <p><strong>Idiomas:</strong> Español (Nativo) • Inglés (Nivel Intermedio / Técnico +A2).</p>
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
