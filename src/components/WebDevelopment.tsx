"use client";
import { motion } from "framer-motion";
import { Code, Monitor, Smartphone, Globe, Layout, MousePointer2 } from "lucide-react";

const features = [
  {
    title: "Modern Frameworks",
    desc: "Specializing in Next.js 15 and React for building fast, SEO-optimized web applications.",
    icon: <Code size={24} />,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Responsive Design",
    desc: "Ensuring pixel-perfect layouts that look stunning on everything from mobile to 4K displays.",
    icon: <Smartphone size={24} />,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Interactive UI",
    desc: "Crafting fluid animations and micro-interactions using Framer Motion and GSAP.",
    icon: <MousePointer2 size={24} />,
    color: "from-orange-500 to-yellow-400"
  },
  {
    title: "CMS Integration",
    desc: "Connecting headless CMS or specialized directories like Brilliant Directory to your frontend.",
    icon: <Layout size={24} />,
    color: "from-green-500 to-emerald-400"
  }
];

// Using Simple Icons CDN URLs for the actual brand logos
const brandLogos = [
  { name: "Next.js", url: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "React", url: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "TypeScript", url: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Tailwind CSS", url: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Framer", url: "https://cdn.simpleicons.org/framer/black" },
  { name: "Node.js", url: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Vercel", url: "https://cdn.simpleicons.org/vercel/white" },
  { name: "Git", url: "https://cdn.simpleicons.org/git/F05032" },
];

export default function WebDevelopment() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center mb-24">
        
        {/* Left: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="lg:col-span-4"
        >
          <div className="flex items-center gap-3 mb-4 text-purple-400">
            <div className="h-px w-8 bg-purple-400" />
            <span className="text-xs font-bold uppercase tracking-[0.4em]">Development</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-6">
            CRAFTING THE <span className="text-gradient">INTERFACE</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            I build websites that aren't just pretty—they are optimized for conversion, 
            accessibility, and insane speed.
          </p>
          <div className="flex items-center gap-4 text-white/40">
            <Monitor size={20} />
            <Globe size={20} />
            <div className="text-[10px] font-mono uppercase tracking-[0.2em]">W3C Standard Compliant</div>
          </div>
        </motion.div>

        {/* Right: Feature Grid */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className={`mb-6 w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-[1px]`}>
                <div className="w-full h-full bg-[#0a0a0f] rounded-[11px] flex items-center justify-center text-white">
                  {item.icon}
                </div>
              </div>

              <h4 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

{/* Actual Logos Marquee - Full Color & Persistent Names */}
      <div className="relative w-full py-12 border-y border-white/5 bg-white/[0.01] backdrop-blur-sm">
        <div className="flex w-[200%] animate-marquee">
          <div className="flex justify-around items-center w-full">
            {brandLogos.map((logo, i) => (
              <div key={i} className="flex flex-col items-center gap-3 group/item min-w-[140px]">
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  // Removed grayscale and set opacity to 100%
                  className="h-10 w-10 md:h-12 md:w-12 object-contain transition-all duration-500 group-hover/item:scale-125 group-hover/item:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 group-hover/item:text-white transition-all duration-300">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless looping */}
          <div className="flex justify-around items-center w-full">
            {brandLogos.map((logo, i) => (
              <div key={`dup-${i}`} className="flex flex-col items-center gap-3 group/item min-w-[140px]">
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="h-10 w-10 md:h-12 md:w-12 object-contain transition-all duration-500 group-hover/item:scale-125 group-hover/item:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70 group-hover/item:text-white transition-all duration-300">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}