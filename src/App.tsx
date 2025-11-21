/**
 * src/App.tsx
 *
 * Main application shell.
 * Implements "Alternating Backgrounds" to avoid monotony.
 */

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Strengths from "./components/Strengths";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Philosophy from "./components/Philosophy";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-amber-200 selection:text-amber-900 antialiased font-sans">
      <Navbar />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        {/* About Section - White Background */}
        <section id="about" className="py-20 md:py-32 bg-white scroll-mt-20 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <About />
            </div>
        </section>

        {/* Strengths Section - Warm Gray Background to break monotony */}
        <section id="strengths" className="py-20 md:py-32 bg-[#F8FAFC] border-y border-slate-200 scroll-mt-20 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-16 text-center">Core Competencies</h2>
                <Strengths />
            </div>
        </section>

        {/* Experience Section - White Background */}
        <section id="experience" className="py-20 md:py-32 bg-white scroll-mt-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <Experience />
            </div>
        </section>

        {/* Education Section - Slate Tint Background */}
        <section id="education" className="py-20 md:py-32 bg-slate-50 scroll-mt-20 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <Education />
            </div>
        </section>

        {/* Philosophy Section - Dark Contrast */}
        <section id="philosophy" className="py-20 md:py-32 bg-[#0B1120] text-white scroll-mt-20 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
                <Philosophy />
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
