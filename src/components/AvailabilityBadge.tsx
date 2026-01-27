"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";

export default function AvailabilityBadge() {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "omonighooghenetega16@gmail.com";

  const copyToClipboard = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Fixed: Mobile sits at bottom-6, Desktop sits at center-left
      className="fixed left-0 bottom-6 lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2 z-50 flex items-center"
    >
      <div className="relative flex items-stretch">
        {/* FRONT: System Status */}
        <div className="z-20 flex flex-col items-center gap-4 py-6 px-2 bg-[#0a0a0f]/95 backdrop-blur-xl border-y border-r border-white/10 rounded-r-2xl shadow-xl">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </div>
          
          <div className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-black tracking-[0.3em] uppercase text-gray-400 whitespace-nowrap">
            Available for Work — 2026
          </div>
        </div>

        {/* BACK: Streamlined Contact Drawer */}
        <motion.div 
          initial={false}
          animate={{ 
            x: isHovered ? 0 : "-100%",
            opacity: isHovered ? 1 : 0
          }}
          transition={{ type: "spring", damping: 25, stiffness: 120 }}
          className="z-10 flex flex-row items-center gap-5 py-6 px-2 bg-purple-600/10 backdrop-blur-2xl border-y border-r border-purple-500/20 rounded-r-2xl ml-[-12px] pl-8 pr-4"
        >
          {/* Side-by-Side Vertical Layout */}
          <div className="flex flex-row items-center gap-2">
            <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] uppercase tracking-[0.2em] text-purple-400 font-bold whitespace-nowrap">
              Direct Contact
            </span>
            
            <div className="w-[1px] h-10 bg-purple-500/20" />

            <div className="flex flex-col items-center gap-3">
              <button 
                onClick={copyToClipboard}
                className="p-1.5 hover:bg-white/10 rounded-md transition-all group active:scale-90"
                title="Copy Email"
              >
                {copied ? (
                  <Check size={14} className="text-green-500" />
                ) : (
                  <Copy size={14} className="text-gray-400 group-hover:text-purple-400" />
                )}
              </button>
              
              <div className="[writing-mode:vertical-lr] rotate-180 font-mono text-[10px] lg:text-[11px] text-gray-300 tracking-wider whitespace-nowrap">
                {email}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}