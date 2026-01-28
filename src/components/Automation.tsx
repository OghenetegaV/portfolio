"use client";
import { motion } from "framer-motion";
import { Settings, Database } from "lucide-react";
import Terminal from "./Terminal";

export default function Automation() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-6 italic tracking-tight text-white">
            The Automation <span className="text-purple-500">Edge</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            I ensure your digital presence runs on autopilot. From reducing manual input by 80% to maintaining high-traffic directories.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-purple-500/10 rounded-xl"><Settings className="text-purple-400" /></div>
              <div>
                <h4 className="font-bold text-white uppercase tracking-wider text-sm">Task Optimization</h4>
                <p className="text-xs text-gray-500 mt-1">Custom scripts and workflow refinement.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-blue-500/10 rounded-xl"><Database className="text-blue-400" /></div>
              <div>
                <h4 className="font-bold text-white uppercase tracking-wider text-sm">Database Maintenance</h4>
                <p className="text-xs text-gray-500 mt-1">Specializing in high-traffic ecosystems and complex directory structures.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
}