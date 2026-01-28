"use client";
import React from "react";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";
import MagneticButton from "./MagneticButton";

const socials = [
  { icon: <Github size={20} />, link: "#", label: "Github" },
  { icon: <Twitter size={20} />, link: "#", label: "X" },
  { icon: <Linkedin size={20} />, link: "#", label: "LinkedIn" },
];

export default function ContactCTA() {
  const email = "your.email@example.com"; // Replace with your actual email

  return (
    <section className="py-40 px-6 text-center">
      <div className="glass-morphism p-12 md:p-20 rounded-[3rem] max-w-5xl mx-auto border border-purple-500/20 relative overflow-hidden">
        
        {/* Decorative Background Glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-600/10 blur-[100px] rounded-full" />

        <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tighter text-white relative z-10">
          Ready to <span className="text-gradient">Scale</span>?
        </h2>
        
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto relative z-10">
          Currently accepting new projects for 2026. Let's build something that works for you.
        </p>
        
        <div className="flex flex-col items-center gap-12 relative z-10">
          {/* Main Email CTA */}
          <MagneticButton>
            <a 
              href={`mailto:${email}`}
              className="flex items-center gap-3 px-12 py-5 bg-white text-black font-black rounded-full hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all transform hover:scale-105"
            >
              <Mail size={20} /> GET IN TOUCH
            </a>
          </MagneticButton>

          {/* Social Links Dock */}
          <div className="flex items-center gap-6">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                aria-label={social.label}
              >
                <div className="group-hover:scale-110 transition-transform">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}