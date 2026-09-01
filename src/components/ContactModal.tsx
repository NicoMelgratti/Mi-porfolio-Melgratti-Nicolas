"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Mail, X, Copy, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openContactModal', handleOpen);
    return () => window.removeEventListener('openContactModal', handleOpen);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('nicomelgratti@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-950/85 backdrop-blur-xl"
          />

          {/* Modal Content - Apple Liquid Glass */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-md liquid-glass border border-[#1e3a8a] rounded-3xl overflow-hidden shadow-2xl p-8 flex flex-col items-center text-center"
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full liquid-glass-subtle text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Profile Image */}
            <div className="relative mb-4">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-cyan-400/50 p-0.5 bg-slate-950 shadow-lg">
                <Image
                  src="/perfil.jpg"
                  alt="Nicolás Melgratti"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            <h2 className="text-2xl font-headline font-bold text-white mb-1">
              Nicolás Melgratti
            </h2>
            <p className="text-xs text-slate-300 mb-6 max-w-[280px]">
              Disponible para oportunidades laborales y nuevos proyectos.
            </p>

            <div className="w-full flex flex-col gap-3">
              {/* Send via Gmail */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nicomelgratti@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full py-3.5 px-4 liquid-glass-btn text-white font-sans font-semibold text-xs sm:text-sm flex justify-center items-center gap-2 cursor-pointer active:scale-95 rounded-2xl shadow-lg"
              >
                <Mail size={16} />
                Enviar correo vía Gmail
                <ExternalLink size={13} className="ml-1 opacity-70" />
              </a>

              {/* Copy Email */}
              <button
                onClick={handleCopy}
                className="w-full py-3.5 px-4 liquid-glass-btn-secondary text-slate-200 font-medium rounded-2xl text-xs sm:text-sm flex justify-center items-center gap-2 transition-all cursor-pointer active:scale-95"
              >
                {copied ? (
                  <>
                    <CheckCircle2 size={16} className="text-emerald-400" />
                    <span className="text-emerald-300 font-mono font-semibold">¡Copiado al portapapeles!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} className="text-cyan-300" />
                    <span className="font-mono font-medium">nicomelgratti@gmail.com</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
