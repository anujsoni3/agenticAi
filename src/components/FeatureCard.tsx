import React from 'react';
import { motion } from 'framer-motion';
import { Expand } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  subtitle: string;
  example: {
    input: string;
    output: string;
  };
  flowchartImage: string;
  color: string;
  index: number;
  emotionalSummary: string;
  technicalSummary: string;
}

interface ImageModalProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

function ImageModal({ src, alt, isOpen, onClose }: ImageModalProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="relative max-w-7xl max-h-[90vh] p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain rounded-lg"
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
        >
          ×
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function FeatureCard({ 
  title, 
  subtitle, 
  example, 
  flowchartImage, 
  color,
  index,
  emotionalSummary,
  technicalSummary
}: FeatureCardProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.3 }}
      className="mb-32"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Column - Feature Info */}
        <div className="space-y-8">
          <div>
            <motion.h3 
              className={`text-5xl md:text-6xl font-bold mb-6 ${color}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3 + 0.2, duration: 0.6 }}
            >
              {title}
            </motion.h3>
            <motion.p 
              className="text-2xl text-gray-300 leading-relaxed mb-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3 + 0.4, duration: 0.6 }}
            >
              {subtitle}
            </motion.p>
          </div>

          {/* Console Example */}
          <motion.div 
            className="bg-black/80 backdrop-blur-md border border-cyan-500/30 rounded-lg overflow-hidden shadow-2xl shadow-cyan-500/10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.3 + 0.6, duration: 0.6 }}
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

          {/* Emotional & Technical Summary */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 + 1.2, duration: 0.6 }}
            >
              <h4 className="text-purple-400 font-bold mb-3 text-lg">💭 Emotional Impact</h4>
              <p className="text-gray-300 leading-relaxed">{emotionalSummary}</p>
            </motion.div>
            
            <motion.div 
              className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3 + 1.4, duration: 0.6 }}
            >
              <h4 className="text-blue-400 font-bold mb-3 text-lg">⚙️ Technical Core</h4>
              <p className="text-gray-300 leading-relaxed">{technicalSummary}</p>
            </motion.div>
          </div>
        </div>

        {/* Right Column - Flowchart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.3 + 0.8, duration: 0.8 }}
          className="relative"
        >
          <div className="bg-gray-900/50 backdrop-blur-md border border-purple-500/30 rounded-xl p-6 overflow-hidden relative group cursor-pointer"
               onClick={() => setIsModalOpen(true)}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5"></div>
            
            {/* Expand button */}
            <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white">
                <Expand className="w-4 h-4" />
              </div>
            </div>
            
            <div className="relative z-10 group-hover:scale-105 transition-transform duration-300">
              <img
                src={flowchartImage}
                alt={`${title} Flowchart`}
                className="w-full h-auto max-h-96 object-contain rounded-lg shadow-lg"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-cyan-900/20 pointer-events-none rounded-xl"></div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors">
              Click to view full flowchart
            </p>
          </div>
        </motion.div>
      </div>
      
      <ImageModal
        src={flowchartImage}
        alt={`${title} Flowchart`}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </motion.div>
  );
}