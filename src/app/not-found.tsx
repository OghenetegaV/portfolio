"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, RefreshCcw } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float, Stars } from "@react-three/drei";
import MagneticButton from "../components/MagneticButton";
import AvailabilityBadge from "../components/AvailabilityBadge";

function GlitchSphere() {
  return (
    <Float speed={5} rotationIntensity={2} floatIntensity={2}>
      <Sphere args={[1, 100, 100]} scale={2.5}>
        <MeshDistortMaterial
          color="#ff0055"
          attach="material"
          distort={0.8}
          speed={5}
          roughness={0}
          metalness={1}
          emissive="#330011"
        />
      </Sphere>
    </Float>
  );
}

export default function NotFound() {
  return (
    <div className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-[#050005]">
      {/* Re-using the same Badge for consistency */}
      <AvailabilityBadge />

      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} color="#ff0055" intensity={2} />
          <pointLight position={[-10, -10, -10]} color="#7c3aed" intensity={1} />
          <Stars radius={50} depth={50} count={3000} factor={4} saturation={1} fade speed={2} />
          <GlitchSphere />
        </Canvas>
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[12rem] md:text-[18rem] font-black leading-none tracking-tighter text-white opacity-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            404
          </h1>
          
          <div className="glass-morphism p-12 rounded-[3rem] border border-red-500/20 backdrop-blur-xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white uppercase tracking-tighter">
              System <span className="text-red-500">Glitched</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto">
              The coordinate you requested does not exist in the current OS. 
              The automation link has been severed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <MagneticButton>
                <Link 
                  href="/" 
                  className="flex items-center gap-2 px-8 py-4 bg-white text-black font-black rounded-full hover:bg-gray-200 transition-all"
                >
                  <Home size={18} /> RETURN TO HOME
                </Link>
              </MagneticButton>
              
              <button 
                onClick={() => window.location.reload()}
                className="flex items-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all"
              >
                <RefreshCcw size={18} /> RETRY LINK
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_4px,3px_100%]" />
    </div>
  );
}