"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { 
  ExternalLink, 
  Github, 
  Globe, 
  FolderGit2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Maximize2,
  Eye
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export type ProjectImage = {
  url: string;
  title: string;
  caption: string;
};

export type Project = {
  id: string;
  title: string;
  tag: string;
  badge?: string;
  desc: string;
  longDesc?: string;
  features?: string[];
  architecture?: string;
  tech: string[];
  repoUrl: string;
  repoUrlFront?: string;
  accent: string;
  linkType: 'github' | 'live';
  featured?: boolean;
  images?: ProjectImage[];
};

const projects: Project[] = [
  {
    id: 'zinerva',
    title: 'Zinerva E-commerce',
    tag: 'Full-Stack Web',
    badge: 'Producción en Vercel',
    desc: 'Plataforma e-commerce de indumentaria desplegada en producción sobre Vercel. Integra pasarela Mercado Pago Checkout Pro (E2E), inventario matricial (talle/color) y logística en tiempo real con Correo Argentino (PAQ.AR).',
    longDesc: 'Plataforma de comercio electrónico de indumentaria de diseño completamente desplegada y operativa en producción sobre Vercel. Diseñada con enfoque mobile-first y una experiencia de usuario sumamente refinada, integra pasarela de cobros segura de punta a punta, control estricto de inventario matricial y cálculo logístico automatizado.',
    features: [
      'Pasarela de pagos Mercado Pago Checkout Pro con Webhooks automatizados para conciliación y confirmación inmediata.',
      'Gestión de inventario matricial (combinaciones dinámicas de talle y color) con reserva en tiempo real para evitar sobreventas.',
      'Integración logística oficial con Correo Argentino (API PAQ.AR) para cotización de envíos a domicilio y retiro en sucursal.',
      'Panel de administración protegido para carga rápida de prendas, administración de stock, precios y banners promocionales.',
      'Drawer de carrito lateral interactivo con desglose transparente de costos de transferencia vs. tarjeta.'
    ],
    architecture: 'Next.js (App Router), React, PostgreSQL, Tailwind CSS, Mercado Pago SDK, Correo Argentino API, Vercel Serverless.',
    tech: ['Next.js', 'React', 'PostgreSQL', 'Mercado Pago', 'Tailwind CSS', 'Vercel'],
    repoUrl: 'https://zinerva-e-commerce-web.vercel.app/',
    accent: '#c4b5fd',
    linkType: 'live',
    featured: true,
    images: [
      {
        url: '/projects/zinerva/home.png',
        title: 'Portada Principal & Destacados',
        caption: 'Hero banner con identidad de marca, navegación intuitiva y vitrina de prendas destacadas.',
      },
      {
        url: '/projects/zinerva/catalog.png',
        title: 'Catálogo con Filtros en Tiempo Real',
        caption: 'Filtrado instantáneo por género, tipo de prenda y ordenamiento dinámico por novedad y precio.',
      },
      {
        url: '/projects/zinerva/cart-drawer.png',
        title: 'Drawer Lateral de Carrito de Compras',
        caption: 'Resumen dinámico con cálculo en vivo de descuentos por transferencia bancaria y botón directo al checkout.',
      },
      {
        url: '/projects/zinerva/checkout.png',
        title: 'Checkout Pro & Selección de Envío',
        caption: 'Flujo paso a paso con validación de datos, sucursales de retiro y pasarela de pago segura.',
      },
      {
        url: '/projects/zinerva/admin.png',
        title: 'Panel de Administración & Stock Matricial',
        caption: 'Backoffice para gestión integral de variantes (talles/colores), pesos de envío y promociones.',
      },
    ],
  },
  {
    id: 'sicrocare',
    title: 'SicroCare — Sistema de Control Médico',
    tag: 'Salud & Asistencia',
    badge: 'Título Universitario UTN',
    desc: 'Sistema integral de control y asistencia médica para personas con discapacidad o adultos mayores. Genera reportes clínicos automáticos, alarmas inteligentes de administración de medicamentos y monitoreo de signos vitales en tiempo real.',
    longDesc: 'Sistema integral de control y asistencia médica diseñado como proyecto de titulación en la Universidad Tecnológica Nacional (UTN FRSF). Desarrollado para reducir la sobrecarga cognitiva de cuidadores y profesionales médicos, centraliza el historial clínico, eventos vitales y la comunicación en emergencias.',
    features: [
      'Línea de tiempo médica cronológica en tiempo real con categorización visual de higiene, alimentación, medicación y estado anímico.',
      'Ficha de emergencia de acceso rápido con llamada directa en 1 toque al 107 (SAME), grupo sanguíneo y alergias severas.',
      'Control y confirmación horaria de administración de medicamentos con trazabilidad del cuidador responsable.',
      'Gestión de equipo asistencial: administración de roles, asignación de turnos (mañana, tarde, noche) y auditoría de accesos.',
      'Generación y descarga de informes clínicos y bitácora integral en formato PDF aptos para emergencias médicas.'
    ],
    architecture: 'Arquitectura en capas (Clean Architecture), Backend en Java + Spring Boot, Frontend en React + TypeScript, PostgreSQL y autenticación JWT.',
    tech: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'REST API'],
    repoUrl: 'https://github.com/NicoMelgratti/SicroCare-Back',
    repoUrlFront: 'https://github.com/NicoMelgratti/SicroCare-Front',
    accent: '#67e8f9',
    linkType: 'github',
    featured: true,
    images: [
      {
        url: '/projects/sicrocare/dashboard.png',
        title: 'Dashboard del Paciente & Línea de Tiempo',
        caption: 'Monitoreo en tiempo real con registro de las últimas 12h, eventos rápidos (Quick Log) y estado del turno.',
      },
      {
        url: '/projects/sicrocare/clinical-records.png',
        title: 'Registros Clínicos & Bitácora Integral',
        caption: 'Historial completo con ficha de emergencia, medicamentos administrados y exportación a PDF para ambulancias.',
      },
      {
        url: '/projects/sicrocare/emergency-card.png',
        title: 'Ficha de Emergencia Vital',
        caption: 'Modal de acceso rápido con llamada inmediata al 107 (SAME), grupo sanguíneo, alergias y diagnósticos base.',
      },
      {
        url: '/projects/sicrocare/team-management.png',
        title: 'Gestión de Equipo & Turnos',
        caption: 'Control de cuidadores activos, asignación horaria por turnos e invitaciones con permisos personalizados.',
      },
    ],
  },
  {
    id: 'licencias',
    title: 'Sistema de Emisión de Licencias',
    tag: 'TP Institucional',
    badge: 'UTN · Scrum Híbrido',
    desc: 'Plataforma para la gestión y emisión de licencias de conducir desarrollada bajo metodologías ágiles Scrum híbrido. Administración de solicitantes, validación de vigencias, auditoría y control de exámenes.',
    longDesc: 'Solución empresarial desarrollada para la gestión y otorgamiento de licencias de conducir en dependencias de tránsito. El proyecto siguió un ciclo de vida con Scrum Híbrido, garantizando entregables continuos y modelado exhaustivo de reglas de negocio.',
    features: [
      'Validación automática de vigencias, tipos de licencias (A, B, C, D, E) y requisitos de edad según marco normativo.',
      'Módulo de evaluación teórica y práctica con generación de actas de aprobación o rechazo.',
      'Trazabilidad completa de trámites y auditoría de modificaciones por operador.',
      'Exportación de licencias oficiales y reportes estadísticos para directivos.'
    ],
    architecture: 'Java Spring Boot con Hibernate/JPA, frontend reactivo, base de datos relacional PostgreSQL con restricciones de integridad complejas.',
    tech: ['Java', 'Spring Boot', 'React/Angular', 'TypeScript', 'PostgreSQL', 'Scrum'],
    repoUrl: 'https://github.com/NicoMelgratti/Sistema-Emitir-Licencia-Back',
    repoUrlFront: 'https://github.com/NicoMelgratti/Sistema-Emitir-Licencia-Front',
    accent: '#93c5fd',
    linkType: 'github',
    featured: true,
    images: [
      {
        url: '/projects/licencias/dashboard.png',
        title: 'Panel de Gestión de Solicitantes',
        caption: 'Control de postulantes, filtrado por categorías (A, B, Profesional) y estado de exámenes.',
      },
      {
        url: '/projects/licencias/exam-evaluation.png',
        title: 'Evaluación y Emisión de Licencias',
        caption: 'Módulo de calificación teórico-práctica, verificación de identidad y emisión digital con validación QR.',
      },
    ],
  },
  {
    id: 'alpine',
    title: 'Gestión Hotelera Alpine',
    tag: 'Web App',
    badge: 'UTN',
    desc: 'Sistema de administración hotelera para control de ocupación de habitaciones en tiempo real, registro de huéspedes y módulo de facturación.',
    longDesc: 'Plataforma integral para hoteles y hosterías que centraliza las operaciones diarias: reservas anticipadas, check-in/check-out express, control de estado de limpieza por habitación y cálculo de consumos adicionales.',
    features: [
      'Mapa interactivo de ocupación de habitaciones por piso y categoría.',
      'Gestión de reservas con verificación de disponibilidad en tiempo real.',
      'Módulo de facturación de estadía y servicios con cálculo de impuestos.',
      'Control de historial de huéspedes y preferencias de alojamiento.'
    ],
    architecture: 'Backend desacoplado RESTful en Java, frontend modular en React, base de datos relacional.',
    tech: ['Java', 'React', 'JavaScript', 'REST API'],
    repoUrl: 'https://github.com/FranciscoSoltermann/Gestion-hotelera-Alpine.git',
    repoUrlFront: 'https://github.com/FranciscoSoltermann/FrontEnd-Alpine.git',
    accent: '#38bdf8',
    linkType: 'github',
    images: [
      {
        url: '/projects/alpine/floor-map.png',
        title: 'Mapa de Ocupación por Pisos',
        caption: 'Visualización en vivo de estados de habitaciones (ocupada, disponible, limpieza) y check-in diario.',
      },
      {
        url: '/projects/alpine/billing-checkout.png',
        title: 'Facturación & Check-out de Huéspedes',
        caption: 'Desglose automático de noches, consumos de frigobar, servicios de spa y liquidación final.',
      },
    ],
  },
  {
    id: 'hardware-sim',
    title: 'Hardware Configuration Simulator',
    tag: 'Modelado Lógico',
    badge: 'UTN',
    desc: 'Simulador en SWI-Prolog que modela configuraciones de hardware y resuelve lógica de líneas de interrupción (IRQs), rangos de direcciones E/S y asignación de puertos.',
    longDesc: 'Motor de inferencia lógica desarrollado en SWI-Prolog para verificar la compatibilidad de componentes de hardware, resolver conflictos de líneas IRQ y optimizar la asignación de canales DMA y direcciones de memoria E/S.',
    features: [
      'Base de conocimiento con reglas axiomáticas sobre arquitecturas computacionales.',
      'Detección automática de colisiones en canales de interrupción (IRQs).',
      'Resolución de restricciones por unificación y backtracking.'
    ],
    architecture: 'Programación lógica declarativa en SWI-Prolog con motor de unificación.',
    tech: ['SWI-Prolog', 'Logic Programming', 'Hardware Modeling'],
    repoUrl: 'https://github.com/NicoMelgratti/Hardware-Configuration-Simulator.git',
    accent: '#a5f3fc',
    linkType: 'github',
    images: [
      {
        url: '/projects/hardware-sim/dashboard.png',
        title: 'Simulador de Arquitectura & Conflictos IRQ',
        caption: 'Mapeo de registros de CPU, árbol de deducción en Prolog y análisis de interrupciones en tiempo real.',
      },
    ],
  },
  {
    id: 'data-hiding',
    title: 'Data Hiding in Images',
    tag: 'Estenografía & Visión',
    desc: 'Algoritmos de ocultamiento de datos en imágenes digitales aplicando Least Significant Bit (LSB) y Transformadas de Fourier 2D.',
    longDesc: 'Implementación de técnicas avanzadas de esteganografía y procesamiento digital de señales para ocultar mensajes secretos en medios gráficos sin degradación perceptual apreciable.',
    features: [
      'Codificación y decodificación LSB en canales RGB con clave simétrica.',
      'Inserción espectral mediante Transformada Rápida de Fourier 2D (FFT2).',
      'Análisis de métricas de calidad de imagen: PSNR y MSE.'
    ],
    architecture: 'Python con bibliotecas científicas NumPy, OpenCV y SciPy.',
    tech: ['Python', 'NumPy', 'OpenCV', 'Fourier Analysis'],
    repoUrl: 'https://github.com/NicoMelgratti/Data-Hiding-in-Images-Using-LSB-and-2D-Fourier.git',
    accent: '#ddd6fe',
    linkType: 'github',
    images: [
      {
        url: '/projects/data-hiding/dashboard.png',
        title: 'Herramienta de Esteganografía & Análisis FFT',
        caption: 'Descomposición de planos de bits LSB, espectro de magnitud por Transformada de Fourier y métricas PSNR/MSE.',
      },
    ],
  },
];

// Carousel Component
function ImageCarousel({ images, accent }: { images: ProjectImage[]; accent: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevImage, nextImage]);

  const current = images[currentIndex];

  return (
    <div className="flex flex-col gap-3">
      {/* Main Image View */}
      <div className="relative w-full aspect-video bg-slate-950/80 rounded-2xl overflow-hidden border border-blue-900/60 shadow-2xl group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="relative w-full h-full"
          >
            <Image
              src={current.url}
              alt={current.title}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-contain object-center select-none"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Counter Badge */}
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-mono font-medium text-white bg-slate-950/80 backdrop-blur-md border border-white/20 shadow-md">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Imagen anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-slate-950/70 hover:bg-slate-900/90 text-white backdrop-blur-md border border-white/15 hover:border-cyan-400 transition-all opacity-80 group-hover:opacity-100 hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Imagen siguiente"
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-slate-950/70 hover:bg-slate-900/90 text-white backdrop-blur-md border border-white/15 hover:border-cyan-400 transition-all opacity-80 group-hover:opacity-100 hover:scale-110 active:scale-95 cursor-pointer shadow-lg"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Floating Title & Caption Overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-transparent backdrop-blur-[2px]">
          <h4 className="text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5" style={{ color: accent }}>
            <Sparkles size={14} />
            {current.title}
          </h4>
          <p className="text-slate-300 text-[11px] sm:text-xs line-clamp-2 mt-0.5 font-normal">
            {current.caption}
          </p>
        </div>
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 px-1 scrollbar-thin">
          {images.map((img, idx) => (
            <button
              key={img.url}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`relative shrink-0 w-16 sm:w-20 aspect-video rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                idx === currentIndex
                  ? 'border-cyan-400 scale-105 shadow-md shadow-cyan-500/20'
                  : 'border-slate-800 opacity-60 hover:opacity-90 hover:border-slate-600'
              }`}
            >
              <Image
                src={img.url}
                alt={img.title}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Modal Component
function ProjectDetailModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.94, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 26, stiffness: 320 }}
        className="liquid-glass-modal w-full max-w-4xl rounded-3xl p-5 sm:p-8 max-h-[92vh] overflow-y-auto relative my-auto border border-blue-500/40 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full liquid-glass-subtle text-slate-300 hover:text-white hover:border-cyan-400 transition-all hover:scale-110 active:scale-95 cursor-pointer z-10"
        >
          <X size={18} />
        </button>

        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3 pr-10">
          {project.badge && (
            <span
              className="px-3 py-1 text-xs font-sans font-semibold rounded-full uppercase tracking-wider liquid-glass-subtle border"
              style={{
                color: project.accent,
                borderColor: `${project.accent}66`,
              }}
            >
              {project.badge}
            </span>
          )}
          <span className="px-3 py-1 text-xs font-sans font-medium text-slate-300 rounded-full liquid-glass-subtle border border-slate-700">
            {project.tag}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-white mb-4">
          {project.title}
        </h2>

        {/* Image Carousel (if images present) */}
        {project.images && project.images.length > 0 && (
          <div className="mb-6">
            <ImageCarousel images={project.images} accent={project.accent} />
          </div>
        )}

        {/* Deep Dive Description */}
        <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed mb-6 font-normal">
          <p>{project.longDesc || project.desc}</p>
        </div>

        {/* Key Features Bullet Points */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6 p-4 sm:p-5 rounded-2xl liquid-glass-subtle border border-blue-900/60">
            <h3 className="text-sm sm:text-base font-headline font-bold text-white flex items-center gap-2 mb-3.5" style={{ color: project.accent }}>
              <Layers size={16} />
              Características y Funcionalidades Principales
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Architecture Note */}
        {project.architecture && (
          <div className="mb-6 text-xs text-slate-300 bg-slate-950/60 p-3.5 rounded-xl border border-blue-950 flex flex-col gap-1 font-mono">
            <span className="text-cyan-300 font-bold uppercase tracking-wider text-[10px]">Arquitectura & Stack:</span>
            <span>{project.architecture}</span>
          </div>
        )}

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 liquid-glass-subtle text-xs font-sans font-medium text-cyan-200 rounded-lg border border-[#1e3a8a]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions Footer */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800">
          {project.repoUrlFront ? (
            <>
              <a
                href={project.repoUrlFront}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-3 px-5 rounded-xl text-xs sm:text-sm font-sans font-semibold text-cyan-200 bg-blue-950/80 hover:bg-blue-900 border border-[#1e3a8a] hover:border-cyan-400 transition-all active:scale-95 shadow-md cursor-pointer"
              >
                <Github size={16} /> Repositorio Frontend
                <ExternalLink size={13} className="opacity-70" />
              </a>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-3 px-5 rounded-xl text-xs sm:text-sm font-sans font-semibold text-blue-200 bg-blue-950/80 hover:bg-blue-900 border border-[#1e3a8a] hover:border-blue-400 transition-all active:scale-95 shadow-md cursor-pointer"
              >
                <Github size={16} /> Repositorio Backend
                <ExternalLink size={13} className="opacity-70" />
              </a>
            </>
          ) : (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-3 px-6 rounded-xl text-xs sm:text-sm font-sans font-semibold text-white liquid-glass-btn hover:border-cyan-300 transition-all active:scale-95 shadow-lg cursor-pointer"
            >
              {project.linkType === 'live' ? (
                <>
                  <Globe size={16} className="text-cyan-200" />
                  Ver Sitio Web en Vivo
                  <ExternalLink size={14} />
                </>
              ) : (
                <>
                  <Github size={16} className="text-blue-200" />
                  Ver Repositorio en GitHub
                  <ExternalLink size={14} />
                </>
              )}
            </a>
          )}

          <button
            onClick={onClose}
            className="ml-auto py-2.5 px-5 rounded-xl text-xs sm:text-sm font-sans font-medium text-slate-400 hover:text-white liquid-glass-subtle transition-all cursor-pointer"
          >
            Cerrar
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Project Card Component
function ProjectCard({ 
  project, 
  idx, 
  onOpenDetails 
}: { 
  project: Project; 
  idx: number; 
  onOpenDetails: (project: Project) => void; 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.08, duration: 0.5 }}
      onClick={() => onOpenDetails(project)}
      className="liquid-glass-card rounded-2xl p-5 sm:p-7 flex flex-col justify-between relative group cursor-pointer border border-blue-900/50 hover:border-cyan-400/80 transition-all duration-300 hover:shadow-[0_10px_35px_rgba(30,58,138,0.45)]"
    >
      <div>
        {/* Optional Image Banner if Project has images */}
        {project.images && project.images.length > 0 && (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 bg-slate-950 border border-blue-900/60 group-hover:border-cyan-400/60 transition-all">
            <Image
              src={project.images[0].url}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
            
            {/* Gallery badge */}
            <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg text-[11px] font-sans font-semibold text-white bg-slate-950/85 backdrop-blur-md border border-cyan-400/40 flex items-center gap-1.5 shadow-md">
              <Eye size={12} className="text-cyan-300" />
              <span>{project.images.length} capturas</span>
            </div>

            <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[10px] font-mono uppercase text-cyan-200 bg-blue-950/80 backdrop-blur-sm border border-blue-700/50">
              Click para explorar
            </div>
          </div>
        )}

        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          {project.badge ? (
            <span
              className="px-3 py-1 text-[11px] font-sans font-semibold rounded-full uppercase tracking-wider liquid-glass-subtle border"
              style={{
                color: project.accent,
                borderColor: `${project.accent}55`,
              }}
            >
              {project.badge}
            </span>
          ) : (
            <span className="text-[11px] font-sans text-slate-400 uppercase tracking-wider">
              {project.tag}
            </span>
          )}

          <div className="flex items-center gap-1 text-[11px] font-sans text-cyan-300/90 group-hover:text-cyan-200 transition-colors">
            <span>Ver detalles</span>
            <Maximize2 size={11} />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-headline font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 font-normal line-clamp-3">
          {project.desc}
        </p>
      </div>

      <div>
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 liquid-glass-subtle text-[11px] font-sans font-medium text-cyan-200 rounded-lg border border-[#1e3a8a]"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="px-2 py-1 text-[11px] font-sans text-slate-400">
              +{project.tech.length - 5}
            </span>
          )}
        </div>

        {/* Actions */}
        {project.repoUrlFront ? (
          <div className="grid grid-cols-2 gap-2.5" onClick={(e) => e.stopPropagation()}>
            <a
              href={project.repoUrlFront}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-sans font-semibold text-cyan-200 bg-blue-950/70 hover:bg-blue-900/90 border border-[#1e3a8a] hover:border-cyan-400 transition-all active:scale-95 text-center shadow-md cursor-pointer"
            >
              <Github size={13} /> Frontend
            </a>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-sans font-semibold text-blue-200 bg-blue-950/70 hover:bg-blue-900/90 border border-[#1e3a8a] hover:border-blue-400 transition-all active:scale-95 text-center shadow-md cursor-pointer"
            >
              <Github size={13} /> Backend
            </a>
          </div>
        ) : (
          <div onClick={(e) => e.stopPropagation()}>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-sans font-semibold text-white liquid-glass-btn-secondary hover:border-cyan-400 transition-all active:scale-95 cursor-pointer"
            >
              {project.linkType === 'live' ? (
                <>
                  <Globe size={13} className="text-cyan-300" />
                  Ver Sitio en Vivo
                  <ExternalLink size={11} className="opacity-70" />
                </>
              ) : (
                <>
                  <Github size={13} className="text-blue-300" />
                  Ver en GitHub
                  <ExternalLink size={11} className="opacity-70" />
                </>
              )}
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portafolio" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Tactical Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-[#1e3a8a]/60 pb-3">
        <div className="flex items-center gap-3">
          <span className="font-tungsten text-2xl sm:text-3xl text-slate-400">04</span>
          <span className="h-4 w-[2px] bg-azul"></span>
          <h2 className="font-tungsten text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
            Portafolio de <span className="text-azul">Proyectos</span>
          </h2>
        </div>
        <a
          href="https://github.com/NicoMelgratti"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-300 hover:text-white transition-colors"
        >
          <Github size={14} />
          VER TODOS EN GITHUB
          <ExternalLink size={12} />
        </a>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            idx={idx} 
            onOpenDetails={(p) => setSelectedProject(p)}
          />
        ))}
      </div>

      {/* Interactive Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
