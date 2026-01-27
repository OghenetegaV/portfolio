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

  const techStack = ["Next.js", "React", "Automation", "Three.js", "Tailwind"];

  return (
    // Changed min-h-screen to h-screen and ensured overflow-hidden to prevent overlap
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden px-12">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center h-full">
        
        {/* LEFT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <Cpu size={14} className="text-purple-400" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">System Architect</span>
            <Sparkles size={14} className="text-cyan-400" />
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter mb-8">
            VICTORIA <br />
            <span className="text-gradient">OMONIGHO</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-xl leading-relaxed">
            Bridging high-end design with <span className="text-white font-bold text-gradient">intelligent logic</span>. I build digital engines that scale.
          </p>

          <div className="flex flex-wrap gap-8 items-center">
            <MagneticButton>
              <button 
                onClick={scrollToProjects}
                className="group flex items-center gap-3 px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-purple-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                EXPLORE MY CRAFT
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </MagneticButton>

            <div className="flex gap-4">
              {techStack.map((tech) => (
                <span key={tech} className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 border-l border-white/10 pl-3">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT: Fixed to prevent spilling into Automation section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-full flex items-end justify-center lg:justify-end pointer-events-none"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-500/5 blur-[100px] rounded-full" />
          
          <Image 
            src="/me.png" 
            alt="Victoria Omonigho" 
            width={700} 
            height={900} 
            // Changed object-cover to object-contain and ensured it stays at the bottom
            className="relative z-10 w-full h-auto max-h-[90vh] object-contain object-bottom drop-shadow-[0_0_50px_rgba(168,85,247,0.15)] grayscale-[15%] hover:grayscale-0 transition-all duration-1000"
            priority
          />

          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-0 lg:-right-4 p-4 glass-morphism border border-white/10 rounded-2xl z-20 hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-widest text-white">Live System</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}