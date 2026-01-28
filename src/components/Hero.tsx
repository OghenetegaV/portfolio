"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "./MagneticButton";
import { Cpu, Sparkles, ChevronRight } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("selected-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050508]"
      style={{
        maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
      }}
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[140px] rounded-full" />
        <div className="absolute -bottom-24 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row">
        
        {/* LEFT CONTENT - Centered on mobile, Left-aligned on desktop */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-[55%] px-6 md:px-12 lg:pl-24 flex flex-col justify-center items-center lg:items-start text-center lg:text-left pt-20 lg:pt-0"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 w-fit">
            <Cpu size={14} className="text-purple-400" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">System Architect</span>
            <Sparkles size={14} className="text-cyan-400" />
          </div>

          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black leading-[0.9] lg:leading-[0.85] tracking-tighter mb-8 text-white">
            VICTORIA <br />
            <span className="text-gradient">OMONIGHO</span>
          </h1>

          <div className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-gradient mb-2">
              Web Developer & Automation Specialist
            </h2>
            <p className="text-gray-500 font-mono text-xs md:text-sm tracking-[0.2em] mb-4 uppercase">
              Next.js • React • Tailwind
            </p>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed italic max-w-sm lg:max-w-none">
              Scalable web apps. Efficient systems.
            </p>
          </div>

          <MagneticButton>
            <button 
              onClick={scrollToProjects}
              className="group flex items-center gap-3 px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-purple-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              EXPLORE MY CRAFT
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </MagneticButton>
        </motion.div>

        {/* RIGHT CONTENT - Anchored to the edge on desktop */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full lg:w-[45%] h-[50vh] lg:h-screen flex items-end justify-center lg:justify-end"
        >
          <div className="relative w-full h-full lg:w-[120%] lg:h-[110%] lg:-mr-20 lg:-mb-10">
            <Image 
              src="/me.png" 
              alt="Victoria Omonigho" 
              fill
              // object-contain for mobile to show all, object-right-bottom for desktop to anchor it
              className="object-contain lg:object-cover lg:object-right-bottom grayscale"
              priority
            />
            {/* Darkening Overlay
            <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" /> */}
          </div>
        </motion.div>

      </div>
    </section>
  );
}