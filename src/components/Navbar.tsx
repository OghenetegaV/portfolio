"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#selected-works" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fullText = "Hi there!";
  
  const getCharColor = (index: number) => {
    if (index < 2 || index === 8) return "text-white"; // "Hi" and "!"
    if (index >= 3 && index <= 7) return "text-purple-500"; // "there"
    return "text-white"; 
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[10000] px-6 py-4 flex justify-center">
      <div ref={navRef} className="relative flex flex-col items-center w-full max-w-4xl">
        
        {/* Main Nav Bar */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`flex items-center justify-between md:justify-center gap-8 px-6 md:px-8 py-3 rounded-2xl transition-all duration-300 w-full md:w-auto ${
            scrolled || isOpen
              ? "bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl"
              : "bg-transparent"
          }`}
        >
          {/* Mobile Logo with Dynamic Typing Cursor */}
          <div className="md:hidden text-[10px] font-black tracking-widest uppercase flex items-center">
            <div className="flex items-center">
              {fullText.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ display: "none", opacity: 0 }}
                  animate={{ display: "inline-block", opacity: 1 }}
                  transition={{ 
                    delay: i * 0.1, 
                    duration: 0.01
                  }}
                  className={getCharColor(i)}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              
              {/* Blinking Cursor that follows text flow */}
              <motion.span
                animate={{ opacity: [1, 0] }}
                    transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "reverse",
                }}
                className="ml-1 w-[2px] h-3 bg-purple-500"
              />
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors font-bold"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-1 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </motion.div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 10, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="absolute top-full left-0 right-0 mt-2 p-4 bg-black/90 backdrop-blur-2xl border border-white/10 rounded-2xl flex flex-col gap-2 md:hidden z-[10001] shadow-2xl"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[10px] uppercase tracking-[0.3em] text-gray-300 hover:text-white py-4 px-4 rounded-xl hover:bg-white/5 transition-all text-center font-bold"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}