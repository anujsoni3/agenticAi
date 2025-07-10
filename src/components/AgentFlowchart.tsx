import React from 'react';
import { motion } from 'framer-motion';

export default function AgentFlowchart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="mb-16"
    >
      <div className="bg-gray-900/50 backdrop-blur-md border border-cyan-500/30 rounded-xl p-8 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
        
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
            🧠 Complete Agentic Architecture
          </h3>
          
          {/* Master Flowchart - Using your uploaded image */}
          <div className="bg-black/40 rounded-lg p-6 border border-purple-500/20">
            <img
              src="/src/assets/flowcharts/chaos lab2.png"
              alt="Complete Agent Architecture Flowchart"
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-300 text-lg">
              All 8 agents work in harmony to simulate your complete future timeline
            </p>
          </div>
        </div>
        
        {/* Animated border */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 animate-pulse"></div>
      </div>
    </motion.div>
  );
}
