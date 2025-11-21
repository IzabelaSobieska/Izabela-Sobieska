
/**
 * src/components/Education.tsx
 * 
 * Updated with full resume details:
 * 1. LSE (Master's) 2008-2010
 * 2. Warsaw Univ (Bachelor) 2004-2008
 * 3. Certifications: CFA, FRM, IE Business School.
 */
import React from "react";
import { Award, BookOpen, GraduationCap } from "lucide-react";

const Education: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Education & Certifications</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Rigorous academic foundations combined with continuous professional development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Column 1: Academic Degrees */}
        <div className="space-y-6">
            <h3 className="flex items-center gap-2 text-xl font-serif text-slate-900 mb-6">
                <GraduationCap className="w-5 h-5 text-amber-600" />
                Academic Degrees
            </h3>

            {/* LSE */}
            <div className="group bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-amber-100 transition-colors">
                <div className="flex justify-between text-sm text-slate-400 mb-2 uppercase tracking-wider font-semibold">
                    <span>2008 — 2010</span>
                    <span>London, UK</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900">London School of Economics (LSE)</h4>
                <div className="text-amber-700 font-medium mb-3">M.Sc. in Finance & Asset Management</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Focus: Risk Control, Global Capital Markets, Derivatives.<br/>
                    Thesis: "Early Applications of Cryptographic Tech in Financial Systems".
                </p>
            </div>

            {/* Warsaw */}
            <div className="group bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-amber-100 transition-colors">
                <div className="flex justify-between text-sm text-slate-400 mb-2 uppercase tracking-wider font-semibold">
                    <span>2004 — 2008</span>
                    <span>Warsaw, Poland</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900">University of Warsaw</h4>
                <div className="text-amber-700 font-medium mb-3">B.A. in Finance & Accounting</div>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Focus: Econometrics, Investment Analysis.<br/>
                    Member of Student Investment Club; Early exposure to FX & Digital Payments.
                </p>
            </div>
        </div>

        {/* Column 2: Professional Certifications */}
        <div className="space-y-6">
            <h3 className="flex items-center gap-2 text-xl font-serif text-slate-900 mb-6">
                <Award className="w-5 h-5 text-amber-600" />
                Certifications & Training
            </h3>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 space-y-6">
                {/* Cert 1 */}
                <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-700 font-bold text-xs shrink-0">
                        FRM
                    </div>
                    <div>
                        <h4 className="text-slate-900 font-bold">Financial Risk Manager (FRM)</h4>
                        <p className="text-slate-500 text-sm">Certified 2016 • GARP</p>
                    </div>
                </div>

                {/* Cert 2 */}
                <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-700 font-bold text-xs shrink-0">
                        IE
                    </div>
                    <div>
                        <h4 className="text-slate-900 font-bold">Blockchain & Crypto Specialization</h4>
                        <p className="text-slate-500 text-sm">Completed 2014 • IE Business School Online</p>
                    </div>
                </div>

                {/* Cert 3 */}
                <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-700 font-bold text-xs shrink-0">
                        CFA
                    </div>
                    <div>
                        <h4 className="text-slate-900 font-bold">CFA Level I Passed</h4>
                        <p className="text-slate-500 text-sm">Passed 2012 • CFA Institute</p>
                        <p className="text-slate-500 text-xs mt-2 italic">
                            "Built rigorous analysis framework and investment discipline."
                        </p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Education;
