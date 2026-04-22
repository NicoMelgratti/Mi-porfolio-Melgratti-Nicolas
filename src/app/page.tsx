import React from 'react';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Footer from '@/components/Footer';
import TerminalSection from '@/components/TerminalSection';
import CodeMatrixBackground from '@/components/CodeMatrixBackground';
import ContactModal from '@/components/ContactModal';
import MobileNav from '@/components/MobileNav';

export default function App() {
  return (
    <div className="min-h-screen text-slate-200 relative bg-slate-950">
      <CodeMatrixBackground />
      <ContactModal />

      <Sidebar />

      <main className="md:ml-64 min-h-screen relative z-10">
        <div className="max-w-5xl mx-auto">
          <Hero />
          <TechStack />
          <TerminalSection />
          <Projects />
          <Education />
          <Certifications />
        </div>
        <Footer />
      </main>

      <MobileNav />
    </div>
  );
}
