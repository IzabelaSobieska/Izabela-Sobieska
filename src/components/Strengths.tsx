
/**
 * src/components/Strengths.tsx
 * 
 * Core Competencies Section.
 * Exact match to screenshot: "Investment Strategy" vs "Risk & Operations".
 */
import React from "react";
import { Check } from "lucide-react";

export default function Strengths() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      
      {/* Left Column: Investment Strategy */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60">
        <h3 className="text-xl font-serif text-slate-900 mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
          Investment Strategy
        </h3>
        <ul className="space-y-4">
          {[
            "Multi-asset portfolio construction & rebalancing.",
            "Crypto day trading & derivatives strategies.",
            "Systematic investment in BTC, ETH, & DeFi.",
            "Macro-cycle analysis combined with on-chain data."
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-700">
              <Check className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <span className="font-light leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column: Risk & Operations */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60">
        <h3 className="text-xl font-serif text-slate-900 mb-6 flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-900 rounded-full"></span>
          Risk & Operations
        </h3>
        <ul className="space-y-4">
          {[
            "Institutional-grade risk budgeting & control.",
            "HNW client coverage & wealth preservation.",
            "Cross-market due diligence & compliance.",
            "Financial education for traditional investors."
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-700">
              <Check className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
              <span className="font-light leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
