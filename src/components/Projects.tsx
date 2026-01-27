"use client";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import TiltCard from "./TiltCard";

const projects = [
  { title: "Siru Design", description: "High-end design solutions.", link: "https://www.sirudesign.co/", tags: ["Next.js", "Design"] },
  { title: "Aurora Care", description: "Healthcare platform.", link: "https://aurora-care.vercel.app/", tags: ["React", "HealthTech"] },
  { title: "Microscope App", description: "Data visualization tool.", link: "https://microscope-app-green.vercel.app/", tags: ["Automation", "Visualization"] },
];

export default function Projects() {
  return (
    <section id="selected-works" className="py-32 px-6 max-w-7xl mx-auto scroll-mt-20">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-16">
        <h2 className="text-5xl font-bold mb-4 tracking-tighter text-white">Selected Works</h2>
        <div className="h-1 w-20 bg-purple-600 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <TiltCard key={index}>
            <motion.a
              href={project.link} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              className="glass p-8 rounded-3xl group relative block h-full border border-white/5 hover:border-purple-500/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-purple-500/20 transition-colors">
                  <ExternalLink size={24} className="text-purple-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors text-white">{project.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-6">{project.description}</p>
              <div className="flex items-center gap-2 text-xs font-bold text-white group-hover:gap-4 transition-all uppercase tracking-widest">
                Explore Project <ArrowRight size={16} />
              </div>
            </motion.a>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}