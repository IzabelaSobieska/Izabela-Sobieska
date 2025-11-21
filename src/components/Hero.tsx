
/**
 * src/components/Hero.tsx
 * 
 * Strict recreation of the provided reference image.
 * FIXED: Adjusted height constraints and image positioning to show full bust/flower details.
 */
import React from "react";
import { Mail } from "lucide-react";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function Hero() {
  return (
    <section className="relative w-full bg-[#050A14] flex flex-col lg:flex-row overflow-hidden">
      
      {/* === Left Column: Text Content === 
          Added max-width constraints to ensure text doesn't overlap image too much
      */}
      <div className="relative z-20 w-full lg:w-[50%] flex flex-col justify-center px-8 md:px-20 pt-28 pb-16 lg:pt-32 lg:pb-20 bg-[#050A14]">
        <div className="max-w-lg">
          
          {/* 1. Name Title */}
          <h1 className="font-serif leading-none text-white mb-8">
            <span className="block text-5xl md:text-6xl font-normal tracking-wide mb-2">Izabela</span>
            <span className="block text-6xl md:text-8xl font-normal text-slate-100">Sobieska</span>
          </h1>

          {/* 2. Description with Left Border Line */}
          <div className="flex border-l-2 border-slate-700 pl-6 mb-10">
            <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
              Bridging traditional finance and the digital asset future. Specializing in{' '}
              <span className="text-amber-400 font-normal">crypto strategies</span>, asset
              management, and risk control with a background at Deutsche Bank and
              Man Group.
            </p>
          </div>

          {/* 3. Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-14">
            <a 
              href="mailto:contact@example.com" 
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white min-w-[140px] px-6 py-3.5 rounded-md font-medium transition-all shadow-[0_0_20px_rgba(245,158,11,0.15)] hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            
            <a 
              href="https://wa.me/1234567890" 
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white min-w-[140px] px-6 py-3.5 rounded-md font-medium transition-all shadow-[0_0_20px_rgba(37,211,102,0.2)] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)]"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* 4. Bottom Info stats (Location / Experience) */}
          <div className="flex gap-12 border-t border-slate-800 pt-8">
            <div>
              <h4 className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-1">Location</h4>
              <p className="text-slate-300 text-sm font-medium">POLAND / GLOBAL</p>
            </div>
            <div>
              <h4 className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-1">Experience</h4>
              <p className="text-slate-300 text-sm font-medium">15+ YEARS</p>
            </div>
          </div>

        </div>
      </div>

      {/* === Right Column: Image === 
          Fixed height to prevent excessive zooming on large screens.
          Using object-center to ensure the body/flower is visible.
      */}
      <div className="relative w-full lg:w-[50%] min-h-[500px] lg:min-h-0 lg:h-auto">
        {/* The Main Image */}
        <div className="absolute inset-0 w-full h-full">
             <img 
              src="https://pub-cdn.sider.ai/u/U005HE02679/web-coder/69204927965d1d957f097986/resource/ba165ca0-a100-4ee7-a491-4c677216a8cf.png" 
              alt="Izabela Sobieska" 
              className="w-full h-full object-cover object-center" 
            />
        </div>

        {/* 5. The Gradient Fade - Crucial for the "Ghost/Mist" effect */}
        {/* Strong gradient on the left to seamlessly blend into the dark background */}
        <div className="absolute inset-y-0 left-0 w-[15%] lg:w-[25%] bg-gradient-to-r from-[#050A14] to-transparent"></div>
        
        {/* Bottom gradient for mobile blending */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#050A14] to-transparent lg:hidden"></div>
      </div>

    </section>
  );
}
