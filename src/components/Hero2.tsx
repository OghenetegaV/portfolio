"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, MapPin, Cpu, Sparkles } from "lucide-react";
import MagneticButton from "./MagneticButton"; 

export default function Hero2() {
  const scrollToProjects = () => {
    const element = document.getElementById("selected-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const name = "VICTORIA".split("");

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-[#050508] overflow-hidden z-[9999]">
      
      {/* SOLID MASK */}
      <div className="absolute inset-0 bg-[#050508] opacity-100 z-0" />

      {/* STAGE LIGHT EFFECT */}
      <div 
        className="absolute inset-0 z-[5] pointer-events-none opacity-60"
        style={{
          background: "radial-gradient(circle at 50% -10%, rgba(168, 85, 247, 0.15) 0%, transparent 20%)"
        }}
      />
      
      {/* THE PRIMARY CONE */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-[5] pointer-events-none"
        style={{
          background: "conic-gradient(from 150deg at 50% 0%, transparent 0deg, rgba(255, 255, 255, 0.3) 30deg, transparent 60deg)",
          filter: "blur(5px)"
        }}
      />

      {/* BACKGROUND ATMOSPHERE */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full" />
      </div>

      {/* BIG BACKGROUND TEXT */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-10">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-[22vw] font-black leading-none tracking-tighter flex overflow-hidden"
          style={{
            WebkitTextStroke: "1px rgba(255, 255, 255, 0.15)",
            color: "transparent",
          }}
        >
          {name.map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: i * 0.08, duration: 1, ease: [0.33, 1, 0.68, 1] }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      {/* CENTER IMAGE */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-20 w-full h-full flex justify-center items-end"
      >
        <div className="relative w-full h-[85%] max-w-5xl">
          <Image 
            src="/me.png" 
            alt="Victoria Omonigho" 
            fill
            className="object-contain object-bottom grayscale brightness-[0.85] contrast-[1.1] transition-all duration-700 hover:grayscale-0 hover:brightness-100"
            priority
          />
        </div>
      </motion.div>

      {/* UI OVERLAY */}
      <div className="absolute inset-0 z-30 flex flex-col justify-between p-6 md:p-12 pointer-events-none max-w-[1440px] mx-auto w-full">
        <div className="flex justify-between items-start mt-12 md:mt-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-2 mt-10 md:mt-0"
          >
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-2 w-fit">
                <Cpu size={12} className="text-purple-400" />
                <span className="text-[12px] md:text-[10px] uppercase tracking-widest text-gray-400 font-bold whitespace-nowrap">I am a</span>
             </div>
            <span className="text-white font-bold text-[22px] md:text-2xl uppercase tracking-tighter leading-tight">
              Web Developer & <br />
              <span className="text-gradient">Automation Specialist</span>
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col items-end gap-1 text-right mt-[140px] md:mt-0"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-2 w-fit">
                <Sparkles size={12} className="text-cyan-400" />
                <span className="text-[12px] uppercase tracking-widest text-gray-400 font-bold">Stack 2026</span>
             </div>
            <span className="text-gray-400 font-bold text-[14px] md:text-sm uppercase tracking-widest">
              Next.js • React • Tailwind
            </span>
          </motion.div>
        </div>

        <div className="flex justify-between items-end mb-8 pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 text-white"
          >
            <div className="bg-purple-600/20 p-2 md:p-3 rounded-2xl border border-purple-500/30 backdrop-blur-md">
              <MapPin size={16} className="text-purple-400 md:w-5 md:h-5" />
            </div>
            <div className="flex flex-col text-[10px] md:text-xs font-bold leading-tight uppercase tracking-widest">
              <span className="text-white">Lagos, Nigeria</span>
              <span className="text-gray-500">Available Globally</span>
            </div>
          </motion.div>

          <div className="flex flex-col items-end gap-4 md:gap-6">
            <MagneticButton>
              <button 
                onClick={scrollToProjects}
                className="group flex items-center gap-2 md:gap-3 px-6 py-3 md:px-10 md:py-4 bg-white text-black text-[10px] md:text-sm font-black rounded-2xl hover:bg-purple-50 transition-all shadow-[0_0_40px_rgba(255,255,255,0.05)]"
              >
                EXPLORE MY CRAFT
                <ChevronRight size={16} className="md:w-[18px] md:h-[18px] group-hover:translate-x-1 transition-transform" />
              </button>
            </MagneticButton>
            
            <div className="flex items-center gap-3 md:gap-4 text-right">
              <div className="flex flex-col text-[10px] md:text-xs font-bold leading-tight uppercase tracking-tighter">
                <span className="text-gray-500">Curated By</span>
                <span className="text-white">Victoria Omonigho</span>
              </div>
              <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-white/5 p-1 border border-white/10 relative">
                <Image src="/me.png" alt="mini-me" fill className="object-cover rounded-full grayscale" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}