/**
 * src/components/Navbar.tsx
 *
 * High-end navigation bar.
 * Style: Dark background (Navy) + Gold text for high contrast & luxury feel.
 * Mobile: Hamburger menu with smooth drawer.
 */

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  mobile?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, onClick, mobile }) => {
  // Desktop: Gold/White hover effect
  const desktopClasses = "text-slate-300 hover:text-amber-400 transition-colors font-medium tracking-wide";
  // Mobile: Large clickable areas
  const mobileClasses = "block w-full py-4 text-xl font-serif border-b border-white/10 text-white hover:text-amber-400";

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${mobile ? mobileClasses : desktopClasses}`}
    >
      {label}
    </a>
  );
};

export default function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Strengths", href: "#strengths" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5 ${
        scrolled || isOpen ? "bg-[#0B1120]/95 backdrop-blur-md shadow-lg py-2" : "bg-[#0B1120] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo - FIXED NAME */}
          <a href="#home" className="text-xl md:text-2xl font-serif font-bold text-white tracking-tight flex items-center gap-2">
            <span>Izabela</span>
            <span className="text-amber-500">Sobieska</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <NavLink key={item.label} href={item.href} label={item.label} />
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 -mr-2 text-amber-400 hover:text-amber-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer - Dark Theme */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0B1120] border-t border-white/10 shadow-2xl px-6 pb-10 h-screen animate-in slide-in-from-top-5 fade-in duration-200">
          <nav className="flex flex-col pt-4">
            {menuItems.map((item) => (
              <NavLink
                key={item.label}
                href={item.href}
                label={item.label}
                mobile
                onClick={() => setIsOpen(false)}
              />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
