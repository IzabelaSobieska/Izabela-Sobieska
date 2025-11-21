/**
 * src/components/Footer.tsx
 *
 * Minimalist footer with Email and WhatsApp only.
 */

import React from "react";
import ContactButton from "./ContactButton";

export default function Footer(): JSX.Element {
  // Placeholder values - User should update these
  const email = "milajensen89@gmail.com";
  const whatsappNumber = "+46 764941721"; 

  const mailHref = `mailto:${email}`;
  const waHref = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-16 mt-12">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center space-y-8">
        
        <h2 className="text-3xl font-serif text-white">Contact</h2>
        <p className="text-slate-400 max-w-lg mx-auto">
            For collaboration, advisory opportunities, or speaking requests, feel free to get in touch.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
          <ContactButton href={mailHref} label="Email" variant="primary" />
          <ContactButton href={waHref} label="WhatsApp" variant="whatsapp" />
        </div>

        <div className="pt-12 text-sm text-slate-600 border-t border-slate-800 mt-12">
          © {new Date().getFullYear()} Izabela Sobieska. All rights reserved.
        </div>
      </div>
    </footer>
  );
}