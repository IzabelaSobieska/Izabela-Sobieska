
/**
 * src/components/Philosophy.tsx
 *
 * Core Investment Philosophy.
 * Text Source: User provided resume.
 */
import React from "react";
import { Quote } from "lucide-react";

export default function Philosophy() {
  return (
    <div className="bg-slate-900 rounded-2xl p-8 md:p-20 text-center relative overflow-hidden">
      {/* Decorative background element */}
      <Quote className="absolute top-8 left-8 text-white/5 w-24 h-24" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl md:text-4xl font-serif text-white font-medium leading-tight md:leading-snug">
          “In the volatile world of crypto, adhere to long-term value, data-driven decisions, and strict discipline.”
        </h2>
        
        <div className="w-12 h-1 bg-amber-500 mx-auto opacity-80"></div>

        <p className="text-lg text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
          Maintain independent judgment amidst market noise. 
          Achieve sustainable asset growth through rational strategies and rigorous risk control.
        </p>
      </div>
    </div>
  );
}
