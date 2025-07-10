import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FlipCardProps {
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  fullDescription: string;
  color: string;
  index: number;
  agentName: string;
}

const colorMap: Record<string, string> = {
  blue: 'border-blue-500/50 shadow-blue-500/20 from-blue-500/5 text-blue-400 bg-blue-500/20',
  purple: 'border-purple-500/50 shadow-purple-500/20 from-purple-500/5 text-purple-400 bg-purple-500/20',
  orange: 'border-orange-500/50 shadow-orange-500/20 from-orange-500/5 text-orange-400 bg-orange-500/20',
  green: 'border-green-500/50 shadow-green-500/20 from-green-500/5 text-green-400 bg-green-500/20',
  yellow: 'border-yellow-500/50 shadow-yellow-500/20 from-yellow-500/5 text-yellow-400 bg-yellow-500/20',
  red: 'border-red-500/50 shadow-red-500/20 from-red-500/5 text-red-400 bg-red-500/20',
  gray: 'border-gray-500/50 shadow-gray-500/20 from-gray-500/5 text-gray-400 bg-gray-500/20',
  cyan: 'border-cyan-500/50 shadow-cyan-500/20 from-cyan-500/5 text-cyan-400 bg-cyan-500/20',
};

export default function FlipCard({ 
  icon: Icon, 
  title, 
  shortDescription,
  fullDescription,
  color, 
  index,
  agentName
}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const colorClasses = colorMap[color] || colorMap.blue;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative h-80"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className="relative w-full h-full preserve-3d transition-transform duration-700" 
           style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>
        
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden">
          <div className={`
            bg-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 h-full
            transition-all duration-500 group-hover:${colorClasses.split(' ')[0]} group-hover:shadow-lg group-hover:${colorClasses.split(' ')[1]}
            relative overflow-hidden flex flex-col justify-center items-center text-center
          `}>
            <div className={`
              absolute inset-0 bg-gradient-to-br ${colorClasses.split(' ')[2]} to-transparent 
              opacity-0 group-hover:opacity-100 transition-opacity duration-500
            `}></div>
            
            <div className="relative z-10">
              <div className={`
                w-16 h-16 rounded-lg ${colorClasses.split(' ')[4]} flex items-center justify-center mb-4 mx-auto
                transition-all duration-500 group-hover:scale-110
              `}>
                <Icon className={`w-8 h-8 ${colorClasses.split(' ')[3]} group-hover:animate-pulse`} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-500">
                {title}
              </h3>
              
              <div className="text-xs font-mono text-gray-500 mb-3 group-hover:text-cyan-400 transition-colors duration-500">
                {agentName}
              </div>
              
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500 text-sm">
                {shortDescription}
              </p>
              
              <div className="mt-4 text-xs text-cyan-400 opacity-70">
                Hover to learn more
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
          <div className={`
            bg-gray-900/80 backdrop-blur-md border ${colorClasses.split(' ')[0]} rounded-xl p-6 h-full
            shadow-lg ${colorClasses.split(' ')[1]} relative overflow-hidden
          `}>
            <div className={`
              absolute inset-0 bg-gradient-to-br ${colorClasses.split(' ')[2]} to-transparent opacity-30
            `}></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center mb-4">
                <Icon className={`w-6 h-6 ${colorClasses.split(' ')[3]} mr-3`} />
                <h3 className="text-lg font-bold text-white">{title}</h3>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                <div className="text-gray-300 leading-relaxed text-sm whitespace-pre-line">
                  {fullDescription}
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-600/50">
                <div className="text-xs font-mono text-cyan-400">
                  {agentName}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}