/**
 * src/components/Volunteering.tsx
 *
 * Community service and volunteering activities.
 */

import React from "react";

export default function Volunteering(): JSX.Element {
  return (
    <div>
       <h2 className="text-3xl font-serif text-slate-900 mb-8">Volunteering</h2>
       <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-slate-50">
                <div>
                    <h3 className="font-medium text-slate-900">Tanzania Relief Fund</h3>
                    <p className="text-slate-600 text-sm">Fundraising Volunteer</p>
                </div>
                <span className="text-sm text-slate-400 mt-2 md:mt-0 font-mono">2022 - Present</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-slate-50">
                <div>
                    <h3 className="font-medium text-slate-900">Eleanor Roosevelt Child Welfare Center</h3>
                    <p className="text-slate-600 text-sm">Fundraising Volunteer</p>
                </div>
                <span className="text-sm text-slate-400 mt-2 md:mt-0 font-mono">2008 - Present</span>
            </div>
       </div>
    </div>
  );
}
