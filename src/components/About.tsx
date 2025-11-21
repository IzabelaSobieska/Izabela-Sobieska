
/**
 * src/components/About.tsx
 * 
 * Comprehensive biography based on the user's full resume.
 * Covers: Warsaw Univ -> LSE -> Deutsche Bank -> Man Group -> CryptoVision.
 */
import React from "react";

export default function About() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
      {/* Left Column: Narrative Text */}
      <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-slate-700 font-light">
        <h2 className="text-3xl font-serif text-slate-900 mb-6">About Me</h2>
        
        <p>
          I am an independent investor and entrepreneurial finance professional based in Europe. 
          Born in Poland (1986) and educated at the <strong>University of Warsaw</strong> and <strong>LSE</strong>, 
          I operate at the intersection of traditional banking rigor and the emerging digital asset economy.
        </p>

        <p>
          My career began at <strong>Deutsche Bank</strong> in Frankfurt, where I managed asset allocation and 
          portfolio analysis for High-Net-Worth (HNW) clients, establishing a strong foundation in traditional 
          wealth management. I subsequently joined <strong>Man Group</strong> in London as a Trader & Market Strategist, 
          where I honed my skills in quantitative modeling, risk management frameworks, and global macro strategies.
        </p>

        <p>
          In 2018, I founded <strong>CryptoVision Research</strong> to apply institutional discipline to the crypto markets. 
          Leveraging years of practice in both traditional finance and digital assets, I have built a robust investment 
          system that combines macro-cycle analysis, on-chain data, and strict risk control to achieve sustainable growth 
          in this rapidly evolving sector.
        </p>
      </div>

      {/* Right Column: Profile Overview Card */}
      <div className="md:col-span-5 bg-white rounded-xl p-8 border border-slate-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
        <h3 className="text-lg font-serif text-slate-900 mb-6 pb-4 border-b border-slate-50">Profile Overview</h3>
        
        <div className="space-y-6">
          {/* Item 1 */}
          <div>
            <div className="text-[10px] uppercase tracking-[0.15em] text-slate-400 font-semibold mb-1">
              Nationality / Year
            </div>
            <div className="text-slate-900 font-medium">
              Polish / 1986 (Age 39)
            </div>
          </div>

          {/* Item 2 */}
          <div>
            <div className="text-[10px] uppercase tracking-[0.15em] text-slate-400 font-semibold mb-1">
              Focus Areas
            </div>
            <div className="text-slate-900 font-medium leading-snug">
              Cryptocurrency, Asset Management,<br/>
              Banking, Trading
            </div>
          </div>

          {/* Item 3 */}
          <div>
            <div className="text-[10px] uppercase tracking-[0.15em] text-slate-400 font-semibold mb-1">
              Education
            </div>
            <div className="text-slate-900 font-medium text-sm leading-snug">
              M.Sc. Finance (LSE)<br/>
              B.A. Finance & Accounting (Warsaw)
            </div>
          </div>

          {/* Item 4 */}
          <div>
            <div className="text-[10px] uppercase tracking-[0.15em] text-slate-400 font-semibold mb-1">
              Key Certifications
            </div>
            <div className="text-slate-900 font-medium text-sm leading-snug">
              CFA Level I Passed<br/>
              FRM Certified<br/>
              Blockchain Specialization (IE Business School)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
