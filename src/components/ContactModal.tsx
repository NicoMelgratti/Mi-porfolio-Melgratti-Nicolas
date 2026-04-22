"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-md glass-strong border border-blue-500/20 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(37,99,235,0.15)]"
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>

            <div className="p-8 flex flex-col items-center text-center">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 blur-md opacity-60" />
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-blue-400/40 p-0.5 bg-slate-900">
                  <img
                    src="/perfil.jpg"
                    alt="Nicolás Melgratti"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              <h2 className="text-2xl font-black text-white font-headline tracking-tight mb-2">
                Nicolás Melgratti
              </h2>
              <p className="text-sm text-slate-400 mb-8 max-w-[260px]">
                I'm currently available for work. Let's discuss your next great idea!
              </p>

              <div className="w-full flex flex-col gap-3">
                {/* Send via Gmail */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=nicomelgratti@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-xl text-sm flex justify-center items-center gap-2 transition-all shadow-lg shadow-blue-500/25 active:scale-[0.98]"
                >
                  <Mail size={18} />
                  Send via Gmail
                  <ExternalLink size={14} className="ml-1 opacity-70" />
                </a>

                {/* Copy Email */}
                <button
                  onClick={handleCopy}
                  className="w-full py-3.5 px-4 glass-subtle hover:bg-white/5 border border-white/5 hover:border-white/10 text-slate-300 font-medium rounded-xl text-sm flex justify-center items-center gap-2 transition-all active:scale-[0.98]"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 size={18} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied to clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy size={18} />
                      nicomelgratti@gmail.com
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
