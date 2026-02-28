"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Code2, Rocket } from "lucide-react";

const projects = [
  {
    title: "Siru Design",
    description: "A high-end interior design site focusing on luxury aesthetics and spatial harmony. Built to showcase premium design solutions with a minimalist user experience.",
    image: "/siru.png",
    tech: ["Next.js", "Design", "Tailwind"],
    link: "https://www.sirudesign.co/",
    github: "https://github.com/OghenetegaV/siru-design-backup"
  },
  /*{
    title: "Aurora Care",
    description: "A specialized healthcare interface for fetal and maternal monitoring. Designed to link directly with hardware vitals for real-time safety tracking.",
    image: "/aurora.png",
    tech: ["React", "HealthTech", "Hardware"],
    link: "https://aurora-care.vercel.app/",
    github: "https://github.com/OghenetegaV/siru-design-backup"
  },*/
  {
    title: "Microscope App",
    description: "An engineering tool built for my Civil Engineering final project. It enables precise measurement of structural cracks and records data over time to track growth or closure.",
    image: "/microscope.png",
    tech: ["Automation", "Visualization", "Data"],
    link: "https://microscope-app-green.vercel.app/",
    github: "https://github.com/OghenetegaV/LittleLights-Jaundice-App"
  }
];

export default function Projects() {
  return (
    <section id="selected-works" className="relative w-full py-20 px-8">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mb-24 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <Rocket size={14} className="text-cyan-400" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Selected Works</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter">
            THE <span className="text-gradient">PORTFOLIO</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
            >
              
              <div className="relative w-full lg:w-3/5 group">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                
                {/* Changed bg to black and padding to ensure contain works beautifully */}
                <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 bg-black flex items-center justify-center">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    // Changed from object-cover to object-contain to prevent cutting
                    className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                    <a href={project.link} target="_blank" className="p-4 bg-white text-black rounded-full hover:scale-110 transition-transform"><ExternalLink size={20}/></a>
                    <a href={project.github} target="_blank" className="p-4 bg-black text-white border border-white/20 rounded-full hover:scale-110 transition-transform"><Github size={20}/></a>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-2/5 flex flex-col gap-6">
                <div className="flex gap-3">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-4xl font-black tracking-tight text-white">{project.title}</h3>
                
                <p className="text-gray-400 leading-relaxed text-lg italic">
                  "{project.description}"
                </p>

                <div className="flex items-center gap-6">
                  <a 
                    href={project.link} 
                    target="_blank"
                    className="text-white font-bold text-sm flex items-center gap-2 group/link"
                  >
                    VIEW PROJECT 
                    <div className="h-px w-6 bg-purple-500 group-hover/link:w-12 transition-all" />
                  </a>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Code2 size={16} />
                    <span className="text-[10px] font-mono">2026_BUILD</span>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}