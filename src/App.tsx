import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Zap, Target, AlertTriangle, RotateCcw, BookCopy as Loop, Route, Eye, Database, Skull, Play, Download, RefreshCw } from 'lucide-react';

import Beams from './components/Beams';
import GlitchText from './components/GlitchText';
import TypewriterText from './components/TypewriterText';
import ConsoleInterface from './components/ConsoleInterface';
import FeatureCard from './components/FeatureCard';
import AgentCard from './components/AgentCard';
import AgentFlowchart from './components/AgentFlowchart';

function App() {
  const [showConsole, setShowConsole] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.3 });
  const { ref: ideaRef, inView: ideaInView } = useInView({ threshold: 0.3 });
  const { ref: featuresRef, inView: featuresInView } = useInView({ threshold: 0.1 });
  const { ref: agentsRef, inView: agentsInView } = useInView({ threshold: 0.1 });

  const features = [
    {
      title: "🔱 Chaos Lab",
      subtitle: "Stress-test your life against 47 crisis scenarios",
      example: {
        input: "What if I lose my job and market crashes?",
        output: `Crisis compound effect detected.
Assets depleted in 3.2 months.
Debt: ₹4.7L.
Recovery: 18 months.
Emergency protocols activated.`
      },
      flowchartImage: "/src/assets/flowcharts/chaos lab.png",
      color: "text-red-400",
      emotionalSummary: "Transforms paralyzing fear of the unknown into actionable preparation. Users report feeling 73% more confident about handling crises after running simulations.",
      technicalSummary: "Monte Carlo simulation engine with 47 crisis variables. Processes 10,000+ scenario combinations using real economic data and behavioral psychology models to stress-test your entire life."
    },
    {
      title: "⚛ Quantum Regret Engine",
      subtitle: "Simulates timelines A vs B for major decisions",
      example: {
        input: "Should I buy a house or invest in stocks?",
        output: `Timeline A (House): +23% short-term stability, +17% long-term wealth
Timeline B (Stocks): -8% stability, +31% growth potential
Net Happiness: House wins by 12%
Regret probability: 34% if you choose stocks
Confidence level: 87%`
      },
      flowchartImage: "/src/assets/flowcharts/quantum regret 2.png",
      color: "text-purple-400",
      emotionalSummary: "Eliminates decision paralysis by quantifying regret before you feel it. Users make 40% faster decisions with 60% higher satisfaction rates after seeing both timelines.",
      technicalSummary: "Parallel universe simulation using quantum probability matrices. Analyzes 15+ life variables across multiple timeline branches with advanced behavioral outcome prediction algorithms."
    },
    {
      title: "💀 SDCC Protocol",
      subtitle: "Self-Deception Collapse Core - Analyzes unrealistic life goals",
      example: {
        input: "I want to retire at 40",
        output: `[SDCC Protocol Engaged]
Analyzing behavior patterns...
Current savings rate: 12%
Required: 45%
Self-deception level: HIGH
Reality gap: 33 percentage points
Suggested retirement age: 52
Alternative path: Side business + 25% savings rate = retire at 45`
      },
      flowchartImage: "/src/assets/flowcharts/sdcc.png",
      color: "text-yellow-400",
      emotionalSummary: "Brutal honesty that liberates you from impossible dreams. Users initially resist but report 85% higher goal achievement rates after reality recalibration and actionable path creation.",
      technicalSummary: "Advanced behavioral pattern analysis with cognitive bias detection. Cross-references stated goals with actual behavior using machine learning models trained on 100K+ real user behavioral patterns."
    }
  ];

  const agents = [
    {
      icon: Brain,
      title: "Scenario Simulation Agent",
      description: "Simulates real-world events and predicts financial impact using Monte Carlo methods.",
      color: "blue",
      agentName: "scenario_simulation_agent"
    },
    {
      icon: AlertTriangle,
      title: "Emotion Trigger Agent",
      description: "Flags impulsive actions like panic selling or FOMO buying using behavioral analysis.",
      color: "purple",
      agentName: "emotion_trigger_agent"
    },
    {
      icon: RotateCcw,
      title: "Quantum Regret Engine",
      description: "Calculates regret scores by simulating timeline branches and decision outcomes.",
      color: "orange",
      agentName: "quantum_regret_engine_agent"
    },
    {
      icon: Loop,
      title: "Loop Report Agent",
      description: "Detects repeated negative spending or behavioral loops using pattern recognition.",
      color: "green",
      agentName: "loop_report_agent"
    },
    {
      icon: Route,
      title: "Agent Router",
      description: "Routes user prompts to correct module using advanced NLP and intent classification.",
      color: "yellow",
      agentName: "agent_router"
    },
    {
      icon: Eye,
      title: "Intent Detector",
      description: "Understands the true intent behind vague prompts using semantic analysis.",
      color: "cyan",
      agentName: "intent_detector"
    },
    {
      icon: Database,
      title: "Memory Sync Agent",
      description: "Maintains user data across modules for simulation continuity and learning.",
      color: "red",
      agentName: "memory_sync_agent"
    },
    {
      icon: Skull,
      title: "Black Mirror Agent",
      description: "Simulates apocalyptic and extreme edge cases for comprehensive stress testing.",
      color: "gray",
      agentName: "black_mirror_agent"
    }
  ];

  const handleLaunchSimulation = () => {
    setShowConsole(true);
    document.getElementById('console-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleConsoleComplete = () => {
    setShowFeatures(true);
    setTimeout(() => {
      document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Beams />
      
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative z-10 px-4">
        <div className="text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <GlitchText 
                text="LIFELOOP" 
                className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                glitchIntensity={0.05}
              />
            </h1>
            
            <motion.p 
              className="text-2xl md:text-3xl text-gray-300 mb-4"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 1 }}
            >
              The Simulation Layer for Your Entire Future
            </motion.p>
            
            <motion.p 
              className="text-xl text-cyan-400 mb-12"
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 1 }}
            >
              Rewriting destiny through Agentic AI. One choice at a time.
            </motion.p>
            
            <motion.button
              onClick={handleLaunchSimulation}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-xl font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.5, duration: 0.5 }}
              whileHover={{ boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
            >
              🔘 Launch the Simulation
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Core Idea Section */}
      <section ref={ideaRef} className="min-h-screen flex items-center justify-center relative z-10 px-4">
        <div className="text-center max-w-4xl mx-auto">
          <AnimatePresence>
            {ideaInView && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-4xl md:text-6xl font-bold mb-8 text-cyan-400">
                  The Spark
                </h2>
                
                <div className="bg-gray-900/50 backdrop-blur-md border border-cyan-500/30 rounded-lg p-8 mb-8">
                  <p className="text-2xl md:text-3xl text-white mb-6">
                    What if AI could simulate not just your finances, but your future?
                  </p>
                </div>

                {/* Animated Timeline */}
                <motion.div 
                  className="bg-black/60 backdrop-blur-md border border-purple-500/30 rounded-lg p-6 mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <div className="font-mono text-left space-y-2">
                    <motion.div 
                      className="text-green-400"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1, duration: 0.5 }}
                    >
                      2025: You saved ₹40K
                    </motion.div>
                    <motion.div 
                      className="text-red-400"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5, duration: 0.5 }}
                    >
                      2027: Market crash
                    </motion.div>
                    <motion.div 
                      className="text-yellow-400"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2, duration: 0.5 }}
                    >
                      2029: You left your job
                    </motion.div>
                  </div>
                </motion.div>

                <motion.button
                  onClick={handleLaunchSimulation}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-lg font-semibold hover:from-purple-400 hover:to-pink-500 transition-all duration-300 transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.5, duration: 0.5 }}
                >
                  🔘 Simulate My Future
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Console Interface Section */}
      <AnimatePresence>
        {showConsole && (
          <motion.section
            id="console-section"
            className="min-h-screen flex items-center justify-center relative z-10 px-4 py-20"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="w-full max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">
                  Agentic AI Console
                </h2>
                <p className="text-xl text-gray-300">
                  Terminal-style interface for life simulation
                </p>
              </motion.div>
              
              <ConsoleInterface onInteractionComplete={handleConsoleComplete} />
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* 3 God-Level Features Section */}
      <AnimatePresence>
        {showFeatures && (
          <motion.section
            id="features-section"
            ref={featuresRef}
            className="relative z-10 px-4 py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                  3 God-Level Features
                </h2>
                <p className="text-xl text-gray-300">
                  Redesigned for the future of decision making
                </p>
              </motion.div>

              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  {...feature}
                  index={index}
                />
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* All 8 Agentic Modules Section */}
      <AnimatePresence>
        {showFeatures && (
          <motion.section
            ref={agentsRef}
            className="relative z-10 px-4 py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={agentsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                  All 8 Agentic Modules
                </h2>
                <p className="text-xl text-gray-300">
                  Each agent specialized for different aspects of life simulation
                </p>
              </motion.div>

              {/* Master Agent Flowchart */}
              <AgentFlowchart />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {agents.map((agent, index) => (
                  <AgentCard
                    key={agent.title}
                    {...agent}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Embedded Explainer Video Section */}
      <AnimatePresence>
        {showFeatures && (
          <motion.section
            className="relative z-10 px-4 py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Watch LIFELOOP in Action
                </h2>
                <p className="text-xl text-gray-300 mb-12">
                  See how LIFELOOP simulates futures, collapses lies, and reprograms destiny.
                </p>
                
                <div className="bg-gray-900/50 backdrop-blur-md border border-cyan-500/30 rounded-lg p-8 aspect-video flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
                  <div className="text-center relative z-10">
                    <Play className="w-20 h-20 text-cyan-400 mx-auto mb-4 animate-pulse" />
                    <p className="text-gray-400 text-lg">1-2 minute walkthrough coming soon</p>
                    <p className="text-sm text-gray-500 mt-2">Intense music, glitch cuts, timeline switches</p>
                  </div>
                  
                  {/* Animated background elements */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute top-1/2 left-8 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Final Judgment Section */}
      <AnimatePresence>
        {showFeatures && (
          <motion.section
            className="min-h-screen flex items-center justify-center relative z-10 px-4 bg-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="mb-12">
                  <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                    <span className="block text-white">This is not FinTech.</span>
                    <span className="block text-cyan-400">This is FutureTech.</span>
                  </h2>
                  
                  <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed">
                    LIFELOOP doesn't show you numbers—it shows you yourself.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <motion.button
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-xl font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                    whileHover={{ boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)" }}
                  >
                    <Download className="w-6 h-6" />
                    🔘 Download Pitch Deck
                  </motion.button>
                  
                  <motion.button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-xl font-semibold hover:from-purple-400 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                    whileHover={{ boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)" }}
                  >
                    <RefreshCw className="w-6 h-6" />
                    🔘 Replay Simulation
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;