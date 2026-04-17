"use client";

import React from 'react';
import { Printer } from 'lucide-react';

/* ── Inline NM Logo ─────────────────────────────────────────── */
function NMLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg-es" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#0e7490" />
        </linearGradient>
        <linearGradient id="lt-es" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#93c5fd" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="7" fill="url(#bg-es)" />
      <rect x="1" y="1" width="30" height="30" rx="6.5" stroke="rgba(96,165,250,0.35)" strokeWidth="1" fill="none" />
      <path d="M5 24V8l8 10V8" stroke="url(#lt-es)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 24V8l5.5 7L27 8v16" stroke="url(#lt-es)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
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
export default function ResumeES() {
  return (
    <div className="bg-slate-200 min-h-screen py-10 print:py-0 w-full flex justify-center selection:bg-blue-200 selection:text-blue-900">

      {/* Botón de impresión */}
      <div className="fixed top-6 right-6 flex flex-col gap-3 print:hidden z-50">
        <button
          onClick={() => window.print()}
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-2xl flex items-center gap-2 transition-transform active:scale-95"
        >
          <Printer size={18} /> Imprimir / Guardar PDF
        </button>
      </div>

      {/* Hoja A4 */}
      <div className="bg-white w-full max-w-[210mm] min-h-[297mm] shadow-2xl print:shadow-none print:w-full print:max-w-none print:min-h-0 overflow-hidden relative text-slate-800">

        {/* ─── CABECERA ───────────────────────────────────────── */}
        <header className="bg-gradient-to-r from-[#1e3a8a] to-[#0e7490] text-white px-10 py-8 flex items-center gap-6">
          {/* Foto de perfil */}
          <div className="w-20 h-20 rounded-full overflow-hidden border-[3px] border-white/40 shrink-0 shadow-lg">
            <img src="/perfil.jpg" alt="Nicolás Melgratti" className="w-full h-full object-cover" />
          </div>

          {/* Nombre + título */}
          <div className="flex-1">
            <h1 className="text-3xl font-black tracking-tight leading-none mb-1">Nicolás Melgratti</h1>
            <p className="text-[13px] text-cyan-200 font-semibold tracking-widest uppercase">
              Estudiante de Ingeniería en Sistemas de Información
            </p>
            <p className="text-[10px] text-blue-200/70 mt-2 max-w-md leading-relaxed">
              Especializado en Java · Spring Boot · React · Next.js · PostgreSQL
            </p>
          </div>

          {/* Logo NM */}
          <div className="shrink-0 opacity-80">
            <NMLogo size={40} />
          </div>
        </header>

        {/* ─── CUERPO DOS COLUMNAS ────────────────────────────── */}
        <div className="flex min-h-0">

          {/* BARRA LATERAL IZQUIERDA */}
          <aside className="w-[34%] bg-slate-50 border-r border-slate-100 p-7 flex flex-col gap-7 shrink-0">

            {/* Contacto */}
            <div>
              <SectionTitle>Contacto</SectionTitle>
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

            {/* Educación */}
            <div>
              <SectionTitle>Educación</SectionTitle>
              <div className="space-y-4 text-[10px]">
                <div>
                  <p className="font-black text-[#1d4ed8] text-[9px] uppercase tracking-widest mb-0.5">2020 — Actualidad</p>
                  <p className="font-bold text-slate-800">Ingeniería en Sistemas de Información</p>
                  <p className="text-slate-500">UTN FRSF · Santa Fe</p>
                </div>
                <div>
                  <p className="font-black text-[#1d4ed8] text-[9px] uppercase tracking-widest mb-0.5">Finalizado</p>
                  <p className="font-bold text-slate-800">Bachillerato en Economía y Técnica</p>
                  <p className="text-slate-500">Educación Secundaria</p>
                </div>
              </div>
            </div>

            {/* Habilidades */}
            <div>
              <SectionTitle>Habilidades</SectionTitle>
              <div className="space-y-3 text-[10px]">
                {[
                  { cat: 'Backend', items: ['Java 21', 'Spring Boot 3', 'Node.js', 'Diseño REST API', 'JPA / Hibernate'] },
                  { cat: 'Frontend', items: ['React 18', 'Next.js 15', 'Angular', 'TypeScript', 'Tailwind CSS'] },
                  { cat: 'Bases de datos', items: ['PostgreSQL', 'MySQL', 'Supabase', 'Neon'] },
                  { cat: 'DevOps y CI/CD', items: ['Docker', 'Git', 'GitHub Actions', 'Vercel', 'Linux / Ubuntu'] },
                  { cat: 'Testing y Métodos', items: ['JUnit 5', 'Mockito', 'Scrum / Agile', 'Clean Code', 'SOLID'] },
                  { cat: 'Otros', items: ['Python', 'C / C++', 'SWI-Prolog', 'Bases de Ciberseguridad'] },
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

            {/* Certificaciones */}
            <div>
              <SectionTitle>Certificaciones</SectionTitle>
              <div className="space-y-3 text-[10px]">
                <div className="rounded-lg border border-[#1d4ed8]/20 bg-blue-50/60 p-3">
                  <p className="font-bold text-slate-800 leading-snug text-[10px]">
                    Enterprise Full Stack — Spring Boot 4 &amp; Angular 21
                  </p>
                  <p className="text-[#1d4ed8] font-semibold mt-0.5">Dev Senior Code</p>
                  <p className="text-slate-400 text-[9px] mt-0.5">Marzo 2026</p>
                </div>
                <div className="rounded-lg border border-[#0e7490]/20 bg-cyan-50/60 p-3">
                  <p className="font-bold text-slate-800 leading-snug text-[10px]">
                    Ciberseguridad y Hacking Ético
                  </p>
                  <p className="text-[#0e7490] font-semibold mt-0.5">BIG School</p>
                  <p className="text-slate-400 text-[9px] mt-0.5">10/04/2026 · 6 hs</p>
                </div>
              </div>
            </div>

            {/* Idiomas */}
            <div>
              <SectionTitle>Idiomas</SectionTitle>
              <div className="space-y-1.5 text-[10px]">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-700">Español</span>
                  <span className="text-[#1d4ed8] font-bold text-[9px] uppercase">Nativo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-700">Inglés</span>
                  <span className="text-[#1d4ed8] font-bold text-[9px] uppercase">Amateur</span>
                </div>
              </div>
            </div>
          </aside>

          {/* CONTENIDO DERECHO PRINCIPAL */}
          <main className="flex-1 p-8 space-y-7">

            {/* Perfil */}
            <div>
              <SectionTitle>Perfil Profesional</SectionTitle>
              <p className="text-[10.5px] text-slate-600 leading-relaxed">
                Desarrollador full stack con orientación al backend y estudiante de 4.° año de Ingeniería en Sistemas de Información en la UTN — ubicado en la intersección entre <strong>sólidas bases teóricas académicas</strong> (modelos formales de computación, diseño de bases de datos relacionales, programación lógica) y <strong>entrega de productos reales</strong> (3 proyectos en producción). Con formación previa en Economía, traduzco restricciones de negocio en soluciones técnicas pragmáticas. Experientado en arquitectar funcionalidades end-to-end con APIs Java/Spring Boot, frontends React/Next.js y capas de datos PostgreSQL — siendo dueño del ciclo completo desde el diseño del esquema hasta el despliegue en la nube.
              </p>
            </div>

            {/* Proyectos / Freelance */}
            <div>
              <SectionTitle>Proyectos / Freelance (2024–2026)</SectionTitle>

              {/* Zinerva — con etiqueta Live Production */}
              <div className="relative pl-5 mb-6 before:absolute before:left-[3px] before:top-0 before:bottom-0 before:w-px before:bg-slate-200">
                <div className="absolute left-0 top-1.5 w-[7px] h-[7px] rounded-full border-2 border-[#1d4ed8] bg-white" />
                <div className="flex items-center gap-2 flex-wrap mb-0.5">
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">E-commerce Full-Stack · Freelance</p>
                  <span className="px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-700 border border-emerald-300">
                    ✦ En Producción
                  </span>
                </div>
                <h3 className="text-[11px] font-bold text-slate-800 leading-snug">Zinerva — Plataforma de Indumentaria E-commerce</h3>
                <p className="text-[10px] text-[#1d4ed8] font-semibold mt-0.5 mb-1">
                  Next.js 15 · React 18 · PostgreSQL · REST API · Tailwind CSS
                </p>
                <p className="text-[9px] text-slate-400 mb-1.5">
                  🔗 <a href="https://zinerva-e-commerce-web.vercel.app/" className="underline text-[#1d4ed8]/70">zinerva-e-commerce-web.vercel.app</a>
                </p>
                <ul className="space-y-1">
                  <li className="text-[10px] text-slate-600 leading-relaxed pl-2 relative before:absolute before:left-0 before:top-[5px] before:w-1 before:h-1 before:rounded-full before:bg-[#1d4ed8]/50">
                    <strong>Logré automatizar el ciclo completo de logística de envíos</strong>, eliminando ~100% de la coordinación manual con correo por pedido, mediante la integración en tiempo real con la API REST PAQ.AR de Correo Argentino — gestionando cotización, generación de etiquetas y seguimiento dentro de un único flujo de checkout.
                  </li>
                  <li className="text-[10px] text-slate-600 leading-relaxed pl-2 relative before:absolute before:left-0 before:top-[5px] before:w-1 before:h-1 before:rounded-full before:bg-[#1d4ed8]/50">
                    <strong>Alcancé tiempos de carga inferiores a 2 segundos</strong> en páginas de catálogo (medidos con Vercel Analytics), implementando server-side rendering en Next.js 15, optimización de imágenes y un esquema PostgreSQL con consultas indexadas sobre 4 entidades relacionales (productos, variantes, pedidos, usuarios).
                  </li>
                  <li className="text-[10px] text-slate-600 leading-relaxed pl-2 relative before:absolute before:left-0 before:top-[5px] before:w-1 before:h-1 before:rounded-full before:bg-[#1d4ed8]/50">
                    Diseñé un sistema avanzado de gestión de inventario con matriz de talle/color en 3 tablas relacionales, habilitando seguimiento de stock a nivel de variante y un flujo de checkout personalizado con carga de comprobante de pago.
                  </li>
                </ul>
              </div>

              <TimelineItem
                period="Proyecto Académico — UTN"
                title="Simulador de Configuración de Hardware"
                subtitle="SWI-Prolog · Programación Lógica · Satisfacción de Restricciones"
                bullets={[
                  'Logré validación automática de compatibilidad de hardware, medida por la resolución de conflictos de IRQ entre hasta 12 restricciones de dispositivos simultáneas, implementando un motor de satisfacción de restricciones declarativo en SWI-Prolog — reduciendo la detección de errores de configuración de revisión manual a inferencia lógica en menos de un segundo.',
                  'Modelé rangos de direcciones de E/S y reglas de asignación de puertos en 3 categorías de dispositivos de hardware, demostrando conocimiento aplicado de modelos formales de computación más allá de los curricula estándar de POO.',
                ]}
              />

              <TimelineItem
                period="Proyecto Full-Stack · Freelance"
                title="Gestión Hotelera y SaaS Multi-tenant"
                subtitle="Java · Spring Boot · React · PostgreSQL · Multi-tenancy"
                bullets={[
                  'Arquitecté un SaaS multi-tenant con control de acceso basado en roles (RBAC), separando el aislamiento de datos por decorador-tenant en 6 entidades relacionales en PostgreSQL.',
                  'Desarrollé APIs REST desacopladas con Spring Boot 3 y frontend React 18, aplicando principios SOLID y prácticas de Clean Code en todo el proyecto.',
                  'Implementé bases de datos relacionales SQL con integridad referencial completa — cubriendo reservas, ciclos de facturación y flujos de gestión de clientes.',
                ]}
              />

              <TimelineItem
                period="Investigación Académica · UTN"
                title="Esteganografía y Prototipado de Algoritmos"
                subtitle="Python · NumPy · C++ · Transformadas de Fourier 2D"
                bullets={[
                  'Logré ocultamiento de datos con ~99,8% de fidelidad de imagen (PSNR >40 dB), implementando sustitución LSB y esteganografía con Transformada Discreta de Fourier 2D en Python con NumPy.',
                  'Desarrollé plataforma interactiva de aprendizaje de idiomas (IPA) en C++ — modelando autómatas finitos y algoritmos de análisis léxico.',
                ]}
              />
            </div>

            {/* En qué estoy trabajando ahora */}
            <div>
              <SectionTitle>En qué estoy trabajando ahora</SectionTitle>
              <ul className="space-y-1">
                <li className="text-[10px] text-slate-600 leading-relaxed pl-2 relative before:absolute before:left-0 before:top-[5px] before:w-1 before:h-1 before:rounded-full before:bg-[#0e7490]/60">
                  Integrando prácticas de <strong>Secure by Design</strong> en arquitecturas Spring Boot 3 — aplicando validación de entrada endurecida, gestión del ciclo de vida de tokens JWT y mitigaciones OWASP Top 10, informado por mi reciente certificación en Ciberseguridad y Hacking Ético (BIG School, abr. 2026).
                </li>
                <li className="text-[10px] text-slate-600 leading-relaxed pl-2 relative before:absolute before:left-0 before:top-[5px] before:w-1 before:h-1 before:rounded-full before:bg-[#0e7490]/60">
                  Explorando automatización de pipelines CI/CD con GitHub Actions para despliegues containerizados de Next.js + Spring Boot en entornos Linux.
                </li>
              </ul>
            </div>

            {/* Intereses profesionales */}
            <div>
              <SectionTitle>Intereses Profesionales</SectionTitle>
              <div className="flex flex-wrap gap-2">
                {[
                  'Arquitectura de Software', 'Desarrollo Backend', 'Clean Code',
                  'Principios SOLID', 'Scrum / Agile', 'Aprendizaje Continuo',
                  'Ciberseguridad / Secure by Design', 'Automatización CI/CD',
                ].map(i => <Badge key={i} label={i} />)}
              </div>
            </div>
          </main>
        </div>

        {/* Pie de página */}
        <footer className="border-t border-slate-100 px-10 py-3 flex justify-between items-center">
          <p className="text-[9px] text-slate-400 tracking-widest uppercase">Nicolás Melgratti · nicomelgratti@gmail.com</p>
          <NMFooterLogo />
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

function NMFooterLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="7" fill="#1e3a8a" />
      <path d="M5 24V8l8 10V8" stroke="#93c5fd" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 24V8l5.5 7L27 8v16" stroke="#93c5fd" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
