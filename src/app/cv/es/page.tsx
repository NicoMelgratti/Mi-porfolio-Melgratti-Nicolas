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

export default function ResumeES() {
  return (
    <div className="bg-slate-100 min-h-screen py-10 print:py-0 w-full flex justify-center text-slate-800 selection:bg-slate-200">
      <div className="fixed top-6 right-6 flex flex-col gap-3 print:hidden z-50">
        <button
          onClick={() => window.print()}
          className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-5 rounded shadow-lg flex items-center gap-2 text-sm"
        >
          <Printer size={16} /> Imprimir PDF (ATS)
        </button>
      </div>

      {/* A4 Sheet - Single Column ATS Optimized */}
      <div className="bg-white w-full max-w-[210mm] min-h-[297mm] shadow-xl print:shadow-none print:w-full print:max-w-none print:min-h-0 overflow-hidden flex flex-col relative px-12 py-10">
        
        {/* HEADER */}
        <header className="text-center mb-6">
          <h1 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tight">Nicolás Melgratti</h1>
          <p className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-2">
            Desarrollador Full Stack | Ingeniero de Software
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
          
          {/* Resumen */}
          <section>
            <SectionTitle>Resumen Profesional</SectionTitle>
            <p className="leading-relaxed text-justify">
              Desarrollador Full Stack excepcional especializado en arquitecturas escalables con Java / Spring Boot y React / Next.js. Diseño y lanzo soluciones tecnológicas integrales que resuelven problemas de negocio críticos, combinando el rigor académico de la Ingeniería en Sistemas con entrega probada en producción. Impulso el rendimiento de las aplicaciones, la optimización de motores de búsqueda (Search Engine Optimization - SEO) y la mantenibilidad del código mediante la aplicación estricta de Clean Code y Programación Orientada a Objetos (OOP).
            </p>
          </section>

          {/* Habilidades Técnicas */}
          <section>
            <SectionTitle>Habilidades Técnicas</SectionTitle>
            <div className="space-y-1.5">
              <p><strong>Lenguajes de Programación:</strong> Java, TypeScript, JavaScript, Node.js, SQL.</p>
              <p><strong>Frameworks y Librerías:</strong> Spring Boot, React, Next.js, Tailwind CSS.</p>
              <p><strong>Bases de Datos y Cloud:</strong> PostgreSQL, Docker, Arquitecturas Multi-tenant.</p>
              <p><strong>Herramientas y Metodologías:</strong> Git, Continuous Integration / Continuous Deployment (CI/CD), Application Programming Interface (API) REST, Clean Code, SOLID, Agile, Scrum.</p>
            </div>
          </section>

          {/* Experiencia Profesional */}
          <section>
            <SectionTitle>Experiencia Profesional</SectionTitle>
            
            <div className="mb-5">
              <div className="flex justify-between font-bold text-slate-900 mb-1">
                <h3>Desarrollador Full Stack — Zinerva (E-commerce)</h3>
                <span>Ene 2026 – Presente</span>
              </div>
              <p className="italic text-slate-700 mb-2">Next.js 15, React 18, PostgreSQL, REST API</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Logré el lanzamiento de una plataforma e-commerce de alto rendimiento, generando una mejora del 40% en tiempos de carga (sub-2s) que potencia la retención, mediante la implementación de Server-Side Rendering (SSR) en Next.js.</li>
                <li>Logré la automatización del proceso logístico, generando un ahorro de 10+ horas semanales en gestión manual, mediante la integración en tiempo real de la API de Correo Argentino.</li>
                <li>Logré estructurar el sistema core de ventas, generando soporte para más de 500 SKUs y un aumento estimado del 25% en la tasa de conversión, mediante la creación de un flujo de checkout optimizado (UX).</li>
              </ul>
            </div>

            <div className="mb-5">
              <div className="flex justify-between font-bold text-slate-900 mb-1">
                <h3>Desarrollador Backend / Arquitecto de Software — Proyecto Freelance</h3>
                <span>Ene 2025 – Dic 2025</span>
              </div>
              <p className="italic text-slate-700 mb-2">Java, Spring Boot 3, React, PostgreSQL</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Logré la creación de un producto SaaS B2B desde cero, generando un ecosistema seguro con 100% de aislamiento de datos para múltiples clientes, mediante políticas a nivel de esquema en PostgreSQL y Role-Based Access Control (RBAC).</li>
                <li>Logré modernizar la infraestructura de transacciones, generando la capacidad de procesar cientos de reservas recurrentes sin latencia, mediante el desarrollo de 15+ APIs REST aplicando principios SOLID.</li>
              </ul>
            </div>

            <div className="mb-5">
              <div className="flex justify-between font-bold text-slate-900 mb-1">
                <h3>Desarrollador de Software — Proyecto Académico (UTN)</h3>
                <span>Mar 2024 – Nov 2024</span>
              </div>
              <p className="italic text-slate-700 mb-2">SWI-Prolog, Programación Lógica</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Logré la validación automatizada de hardware, generando una reducción del 100% en errores de conflictos de interrupciones (IRQ), mediante la arquitectura de un motor declarativo de restricciones en SWI-Prolog.</li>
              </ul>
            </div>
          </section>

          {/* Formación */}
          <section>
            <SectionTitle>Formación</SectionTitle>
            <div className="flex justify-between font-bold text-slate-900">
              <h3>Ingeniería en Sistemas de Información</h3>
              <span>Mar 2020 – Presente</span>
            </div>
            <p className="text-slate-700">Universidad Tecnológica Nacional (UTN FRSF) · 4.° año</p>
          </section>
          
          <section className="mt-4">
            <SectionTitle>Certificaciones e Idiomas</SectionTitle>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Certificaciones:</strong> Enterprise Full Stack (Spring Boot 4 & Angular 21, 2026), Ciberseguridad y Hacking Ético (BIG School, 2026).</li>
              <li><strong>Idiomas:</strong> Español (Nativo), Inglés (Nivel +A2).</li>
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
