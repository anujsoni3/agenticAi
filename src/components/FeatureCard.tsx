import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  subtitle: string;
  description: string;
  example: {
    input: string;
    output: string;
  };
  color: string;
  index: number;
}

export default function FeatureCard({ 
  title, 
  subtitle, 
  description,
  example, 
  color,
  index
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.3 }}
      className="mb-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Feature Header */}
        <div className="text-center mb-12">
          <motion.h3 
            className={`text-5xl md:text-6xl font-bold mb-6 ${color}`}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 + 0.2, duration: 0.6 }}
          >
            {title}
          </motion.h3>
          <motion.p 
            className="text-2xl text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 + 0.4, duration: 0.6 }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Feature Description */}
        <motion.div 
          className="bg-gray-900/50 backdrop-blur-md border border-purple-500/30 rounded-xl p-8 mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.3 + 0.6, duration: 0.6 }}
        >
          <div className="text-xl text-gray-300 leading-relaxed whitespace-pre-line">
            {description}
          </div>
        </motion.div>

        {/* Console Example */}
        <motion.div 
          className="bg-black/80 backdrop-blur-md border border-cyan-500/30 rounded-lg overflow-hidden shadow-2xl shadow-cyan-500/10 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.3 + 0.8, duration: 0.6 }}
        >
          <div className="bg-gray-900/90 px-6 py-3 border-b border-cyan-500/30 flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-cyan-400 text-sm font-mono ml-4">LIFELOOP_SIMULATION</span>
          </div>
          
          <div className="p-6 font-mono text-sm space-y-4">
            <div className="text-green-400">
              <span className="text-green-500">{'> '}</span>
              {example.input}
            </div>
            
            <motion.div 
              className="bg-cyan-900/20 border-l-4 border-cyan-500 pl-4 py-3 rounded-r"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3 + 1, duration: 0.8 }}
            >
              <div className="text-cyan-300 whitespace-pre-line leading-relaxed">
                {example.output}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}