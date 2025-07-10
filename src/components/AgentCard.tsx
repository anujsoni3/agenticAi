import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface AgentCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
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

export default function AgentCard({ 
  icon: Icon, 
  title, 
  description, 
  color, 
  index,
  agentName
}: AgentCardProps) {
  const colorClasses = colorMap[color] || colorMap.blue;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
      }}
      className="group relative h-full"
    >
      <div className={`
        bg-gray-900/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-6 h-full
        transition-all duration-500 group-hover:${colorClasses.split(' ')[0]} group-hover:shadow-lg group-hover:${colorClasses.split(' ')[1]}
        relative overflow-hidden
      `}>
        {/* Animated background gradient */}
        <div className={`
          absolute inset-0 bg-gradient-to-br ${colorClasses.split(' ')[2]} to-transparent 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500
        `}></div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]"></div>
        
        <div className="relative z-10">
          <div className={`
            w-14 h-14 rounded-lg ${colorClasses.split(' ')[4]} flex items-center justify-center mb-4
            group-hover:${colorClasses.split(' ')[4]} transition-all duration-500 group-hover:scale-110
          `}>
            <Icon className={`w-7 h-7 ${colorClasses.split(' ')[3]} group-hover:animate-pulse`} />
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-500">
            {title}
          </h3>
          
          <div className="text-xs font-mono text-gray-500 mb-3 group-hover:text-cyan-400 transition-colors duration-500">
            {agentName}
          </div>
          
          <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-500 text-sm">
            {description}
          </p>
        </div>

        {/* Hover border animation */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-cyan-500/50 transition-all duration-500 animate-pulse opacity-0 group-hover:opacity-100"></div>
      </div>
    </motion.div>
  );
}