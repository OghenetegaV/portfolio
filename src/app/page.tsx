"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Hero2 from "../components/Hero2";
import Automation from "../components/Automation";
import Projects from "../components/Projects";
import ContactCTA from "../components/ContactCTA";
import WebEngineering from "../components/WebDevelopment";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden selection:bg-purple-500/30">
      <Navbar />
      <Hero2 />

      <div className="relative z-10 flex flex-col w-full">
        <section id="services" className="w-full bg-transparent">
          <WebEngineering />
        </section>
        
        <section className="w-full bg-transparent">
          <Automation />
        </section>      
        
        <section id="selected-works" className="w-full bg-transparent">
          <Projects />
        </section>
        
        <section id="contact" className="w-full bg-transparent">
          <ContactCTA />
        </section>
      </div>
    </main>
  );
}