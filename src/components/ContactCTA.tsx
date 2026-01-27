"use client";
import { Mail } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function ContactCTA() {
  return (
    <section className="py-40 px-6 text-center">
      <div className="glass-morphism p-20 rounded-[3rem] max-w-5xl mx-auto border border-purple-500/20 relative overflow-hidden">
        <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tighter text-white">Ready to <span className="text-gradient">Scale</span>?</h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Currently accepting new projects for 2026. Let's build something that works for you.
        </p>
        <div className="flex justify-center">
          <MagneticButton>
            <button className="flex items-center gap-3 px-12 py-5 bg-white text-black font-black rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-shadow">
              <Mail size={20} /> GET IN TOUCH
            </button>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}