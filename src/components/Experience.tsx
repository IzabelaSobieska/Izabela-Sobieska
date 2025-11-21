
/**
 * src/components/Experience.tsx
 * 
 * Exact Match to Resume:
 * 1. CryptoVision Research (2018-Present)
 * 2. Man Group (2014-2017)
 * 3. Deutsche Bank (2010-2014)
 */
import React from "react";
import { Briefcase, Globe, TrendingUp, Building2, Layers } from "lucide-react";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string; 
  description: React.ReactNode;
  icon: React.ReactNode;
  current?: boolean;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      period: "JAN 2018 — PRESENT",
      role: "Founder & Digital Asset Portfolio Manager",
      company: "CryptoVision Research",
      location: "Europe (Remote / Hybrid)",
      type: "Entrepreneurship",
      current: true,
      icon: <Layers className="w-5 h-5" />,
      description: (
        <div className="space-y-3">
           <p>
             Founded a proprietary research firm to provide institutional-grade analysis for the digital asset market.
             Leading an independent team serving European clients.
           </p>
           <ul className="list-disc pl-5 space-y-2 marker:text-amber-400">
             <li>Full-sector coverage: <strong>BTC, ETH, DeFi, Layer 2, and AI tokens</strong>.</li>
             <li>Analyzing on-chain data and market structure to guide portfolio construction.</li>
             <li>Helping traditional investors enter the crypto market through financial education and allocation strategies.</li>
             <li>Navigated through the 2020-2021 bull market and 2022-2023 bear cycle with resilient strategies.</li>
           </ul>
        </div>
      )
    },
    {
      period: "JAN 2014 — DEC 2017", 
      role: "Trader / Market Strategist",
      company: "Man Group",
      location: "London, UK",
      type: "Hedge Fund",
      current: false,
      icon: <TrendingUp className="w-5 h-5" />,
      description: (
        <div className="space-y-3">
          <p>
            Served as a core trader for one of the world's largest hedge funds. 
            Focused on multi-asset execution and quantitative strategies.
          </p>
          <ul className="list-disc pl-5 space-y-2 marker:text-slate-300">
            <li>Assisted in managing hedge fund portfolios with rigorous risk parameters.</li>
            <li>Early exposure to <strong>Bitcoin and digital asset derivatives</strong>, alongside equities and commodities.</li>
            <li>Developed short-term and mid-to-long-term trading strategies.</li>
            <li>Utilized Bloomberg, Python, and Excel for deep data analysis and modeling.</li>
          </ul>
        </div>
      )
    },
    {
      period: "JUL 2010 — DEC 2014",
      role: "Financial Analyst (Asset Management)",
      company: "Deutsche Bank",
      location: "Frankfurt, Germany",
      type: "Investment Banking",
      current: false,
      icon: <Building2 className="w-5 h-5" />,
      description: (
        <div className="space-y-3">
          <p>
            Started career at a top-tier global investment bank. Responsible for European/Global market analysis.
          </p>
          <ul className="list-disc pl-5 space-y-2 marker:text-slate-300">
            <li>Analyzed European & Global equities, bonds, gold, and FX volatility.</li>
            <li>Conducted portfolio analysis and risk assessments for corporate and HNW clients.</li>
            <li>Collaborated on strategic asset allocation to preserve and grow private wealth.</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="relative container mx-auto px-4">
      
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Professional Experience</h2>
        <p className="text-slate-500 max-w-2xl mx-auto font-light italic text-lg">
           “From traditional banking in Frankfurt to crypto entrepreneurship.”
        </p>
      </div>

      {/* Timeline Container */}
      <div className="max-w-4xl mx-auto space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="group flex flex-col md:flex-row gap-6 md:gap-12 items-start relative">
            
            {/* Decorative Line (Desktop only) */}
            {index !== experiences.length - 1 && (
                <div className="hidden md:block absolute left-[31%] top-24 bottom-[-48px] w-px bg-slate-200 border-l border-dashed border-slate-300"></div>
            )}

            {/* Left Column: Year & Meta */}
            <div className="md:w-[30%] md:text-right shrink-0 pt-2">
                <h3 className={`text-lg font-bold mb-1 uppercase tracking-wider ${exp.current ? "text-amber-600" : "text-slate-400"}`}>
                    {exp.period}
                </h3>
                <div className="text-xl font-serif text-slate-900 mb-2">
                    {exp.company}
                </div>
                
                <div className="flex md:justify-end items-center gap-2 mb-2">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide border ${
                        exp.current 
                        ? "bg-amber-50 text-amber-800 border-amber-100" 
                        : "bg-slate-50 text-slate-500 border-slate-100"
                    }`}>
                        {exp.type}
                    </span>
                </div>
                
                <div className="text-sm text-slate-400 font-medium flex md:justify-end items-center gap-1">
                    {exp.location}
                </div>
            </div>

            {/* Right Column: Card */}
            <div className={`flex-1 bg-white p-8 rounded-2xl border transition-all duration-300 relative z-10
                ${exp.current 
                    ? "shadow-md border-amber-100 ring-1 ring-amber-50" 
                    : "shadow-sm border-slate-100 hover:shadow-md hover:border-slate-200"
                }`}>
                
                <div className="flex items-start justify-between mb-6">
                    <div>
                        <h4 className="text-2xl font-serif text-slate-900 leading-tight mb-1">
                            {exp.role}
                        </h4>
                    </div>
                    <div className="text-slate-300">
                        {exp.icon}
                    </div>
                </div>

                <div className="text-slate-600 leading-relaxed font-light text-[15px]">
                    {exp.description}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
