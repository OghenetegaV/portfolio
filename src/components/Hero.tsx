"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { ChevronRight, Cpu, Sparkles } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for the text as you scroll
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-20 px-4"
    >
      {/* Dynamic Background Spotlight */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 blur-[120px] rounded-full" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full" />
      </div>

      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 max-w-7xl mx-auto text-center"
      >
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <Cpu size={14} className="text-purple-400" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">
            Next-Gen Automation & Web
          </span>
          <Sparkles size={14} className="text-blue-400" />
        </motion.div>

        {/* Main Heading */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-[10rem] font-black leading-[0.9] tracking-tighter"
          >
            VICTORIA <br />
            <span className="text-gradient">OMONIGHO</span>
          </motion.h1>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12 px-6"
        >
          Architecting high-performance digital systems where 
          <span className="text-white font-bold"> Web Development</span> meets 
          <span className="text-white font-bold"> Intelligent Automation</span>.
        </motion.p>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <MagneticButton>
            <button className="group relative flex items-center gap-3 px-10 py-5 bg-white text-black font-black rounded-2xl transition-all hover:scale-105 active:scale-95">
              EXPLORE MY CRAFT
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </MagneticButton>

          <button className="text-xs font-bold tracking-[0.4em] uppercase text-gray-500 hover:text-white transition-colors">
            Scroll to Discover
          </button>
        </motion.div>
      </motion.div>

      {/* Background Decorative Grid */}
      <div className="absolute inset-0 z-[-1] opacity-20 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
    </section>
  );
}