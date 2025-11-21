/**
 * src/components/ContactButton.tsx
 *
 * High saturation buttons for better CTA visibility.
 */

import React from "react";
import { Mail } from "lucide-react";
import WhatsAppIcon from "./icons/WhatsAppIcon";

interface ContactButtonProps {
  href: string;
  label: string;
  variant: "primary" | "whatsapp";
}

const ContactButton: React.FC<ContactButtonProps> = ({ href, label, variant }) => {
  // High saturation colors
  const isPrimary = variant === "primary";
  
  const baseClasses = "inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl";
  
  // Primary = Amber/Gold (Matches Hero accents)
  // WhatsApp = Brand Green (High Saturation)
  const variantClasses = isPrimary
    ? "bg-amber-500 hover:bg-amber-400 text-white shadow-amber-500/20"
    : "bg-[#25D366] hover:bg-[#1ebc57] text-white shadow-green-500/20";

  return (
    <a href={href} className={`${baseClasses} ${variantClasses}`}>
      {isPrimary ? <Mail size={20} /> : <WhatsAppIcon className="w-5 h-5 fill-current" />}
      <span className="tracking-wide">{label}</span>
    </a>
  );
};

export default ContactButton;
