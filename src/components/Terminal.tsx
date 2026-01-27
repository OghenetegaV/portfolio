"use client";
import React, { useState, useEffect } from "react";
import { Terminal as TerminalIcon, Cpu, Zap, Shield } from "lucide-react";

const logs = [
  "> Initializing Victoria_OS...",
  "> Loading Automation Modules...",
  "> Connecting to Next.js Frontend...",
  "> Establishing Three.js Canvas Link...",
  "> Optimizing Workflow for Small Businesses...",
  "> Status: Systems Operational.",
  "> Ready for deployment."
];

function TypewriterLine({ text, onComplete }: { text: string; onComplete: () => void }) {
  // Start with an empty string to prevent the glitch
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  
  useEffect(() => {
    // Small timeout to ensure the previous line has fully settled
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, 100);

    if (started) {
      let i = 0;
      const interval = setInterval(() => {
        // We use the functional update to ensure we are always working with the latest index
        setDisplayedText(text.slice(0, i));
        i++;
        if (i > text.length) {
          clearInterval(interval);
          onComplete();
        }
      }, 30);
      return () => clearInterval(interval);
    }

    return () => clearTimeout(startTimeout);
  }, [text, onComplete, started]);

  return (
    <div className="flex gap-2 mb-1">
      <span className="text-purple-500 font-bold">➜</span>
      <span className="text-gray-300 min-h-[1.5rem]">{displayedText}</span>
    </div>
  );
}

export default function Terminal() {
  const [lineIndex, setLineIndex] = useState(0);
  const [completedLines, setCompletedLines] = useState<string[]>([]);

  const handleLineComplete = () => {
    if (lineIndex < logs.length) {
      setCompletedLines((prev) => [...prev, logs[lineIndex]]);
      setLineIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="glass-morphism rounded-2xl overflow-hidden border border-white/10 w-full max-w-2xl mx-auto shadow-2xl">
      {/* Terminal Header */}
      <div className="bg-white/10 px-4 py-2 flex items-center justify-between border-b border-white/10">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold flex items-center gap-2">
          <TerminalIcon size={12} /> Victoria_Terminal — 80x24
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-6 font-mono text-sm sm:text-base min-h-[340px] bg-black/40">
        {completedLines.map((line, i) => (
          <div key={i} className="flex gap-2 mb-1">
            <span className="text-purple-500 font-bold">➜</span>
            <span className="text-gray-400">{line}</span>
          </div>
        ))}
        
        {lineIndex < logs.length ? (
          <TypewriterLine 
            key={lineIndex}
            text={logs[lineIndex]} 
            onComplete={handleLineComplete} 
          />
        ) : (
          <div className="flex gap-2 mb-1">
             <span className="text-purple-500 font-bold">➜</span>
             <span className="text-green-400 font-bold italic">System Online. Waiting for input...</span>
          </div>
        )}
        
        <div className="w-2 h-5 bg-purple-500 animate-pulse mt-2" />
      </div>

      {/* Stats Footer */}
      <div className="grid grid-cols-3 border-t border-white/10 bg-black/60">
        <div className="p-4 flex flex-col items-center border-r border-white/10">
          <Cpu size={16} className="text-blue-400 mb-1" />
          <span className="text-[10px] text-gray-500 uppercase">CPU Load</span>
          <span className="text-xs font-bold text-blue-400 tracking-widest uppercase">Stable</span>
        </div>
        <div className="p-4 flex flex-col items-center border-r border-white/10">
          <Zap size={16} className="text-yellow-400 mb-1" />
          <span className="text-[10px] text-gray-500 uppercase">Network</span>
          <span className="text-xs font-bold text-yellow-400 tracking-widest uppercase">Fast</span>
        </div>
        <div className="p-4 flex flex-col items-center">
          <Shield size={16} className="text-green-400 mb-1" />
          <span className="text-[10px] text-gray-500 uppercase">Security</span>
          <span className="text-xs font-bold text-green-400 tracking-widest uppercase">Safe</span>
        </div>
      </div>
    </div>
  );
}