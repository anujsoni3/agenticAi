import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Zap, Target, AlertTriangle, RotateCcw, BookCopy as Loop, Route, Eye, Database, Skull, Play, Download, RefreshCw } from 'lucide-react';

import Beams from './components/Beams';
import GlitchText from './components/GlitchText';
import TypewriterText from './components/TypewriterText';
import ConsoleInterface from './components/ConsoleInterface';
import FeatureCard from './components/FeatureCard';
import FlipCard from './components/FlipCard';

function App() {
  const [showConsole, setShowConsole] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  const { ref: heroRef, inView: heroInView } = useInView({ threshold: 0.3 });
  const { ref: ideaRef, inView: ideaInView } = useInView({ threshold: 0.3 });
  const { ref: featuresRef, inView: featuresInView } = useInView({ threshold: 0.1 });
  const { ref: agentsRef, inView: agentsInView } = useInView({ threshold: 0.1 });

  const features = [
    {
      title: "🔥 Chaos Lab",
      subtitle: "Simulate Crisis Scenarios",
      description: `Enter the Chaos Lab—where disasters aren't feared, they're practiced.
LIFELOOP throws you into simulations of job loss, inflation spikes, emergencies, and economic meltdowns, so you're not just financially ready—you're emotionally armored.
Survival starts with rehearsal.`,
      example: {
        input: "What if I lose my job and market crashes?",
        output: `Crisis compound effect detected.
Assets depleted in 3.2 months.
Debt: ₹4.7L.
Recovery: 18 months.
Emergency protocols activated.`
      },
      color: "text-red-400"
    },
    {
      title: "⚙ Chain-Reaction Engine",
      subtitle: "Cross-Impact AI",
      description: `In LIFELOOP, every decision echoes.
Spend today, and watch how it reshapes your career path 5 years later.
This engine maps how one move causes a cascade of life shifts—like a domino run through your timeline.
One move isn't just one move.`,
      example: {
        input: "I want to buy an expensive car",
        output: `Chain reaction analysis:
Year 1: -₹8L savings, +lifestyle inflation
Year 3: Delayed house purchase by 2 years
Year 5: ₹15L less retirement corpus
Year 10: Career pivot limited by debt
Total cascade impact: 47% life trajectory shift`
      },
      color: "text-purple-400",
    },
    {
      title: "🖤 Black Mirror Mode",
      subtitle: "Financial Black Mirror Mode",
      description: `Turn on Black Mirror Mode, and face your darkest financial timeline.
No safety nets. No assistance. Just raw consequences.
This mode shows you the ugly truths behind your bad habits—before they destroy real-world stability.
Dare to look… and evolve.`,
      example: {
        input: "Show me my worst-case scenario",
        output: `[BLACK MIRROR MODE ACTIVATED]
Job loss at 35, no emergency fund
Credit card debt spirals to ₹12L
House foreclosure in 8 months
Family stress leads to divorce
Living with parents at 40
No retirement savings until 45
Reality check: This is your current trajectory.`
      },
      color: "text-yellow-400",
    }
  ];

  const agents = [
    {
      icon: Brain,
      title: "🔥 Simulate Crisis Scenarios",
      shortDescription: "Simulates real-world events and predicts financial impact using Monte Carlo methods.",
      fullDescription: `Enter the Chaos Lab—where disasters aren't feared, they're practiced.
LIFELOOP throws you into simulations of job loss, inflation spikes, emergencies, and economic meltdowns, so you're not just financially ready—you're emotionally armored.
Survival starts with rehearsal.`,
      color: "blue",
      agentName: "chaos_lab_agent"
    },
    {
      icon: RotateCcw,
      title: "⚙ Chain-Reaction Engine",
      shortDescription: "Maps how decisions create cascading life changes across your timeline.",
      fullDescription: `In LIFELOOP, every decision echoes.
Spend today, and watch how it reshapes your career path 5 years later.
This engine maps how one move causes a cascade of life shifts—like a domino run through your timeline.
One move isn't just one move.`,
      color: "purple",
      agentName: "chain_reaction_engine"
    },
    {
      icon: Skull,
      title: "🖤 Financial Black Mirror Mode",
      shortDescription: "Shows your darkest financial timeline without safety nets.",
      fullDescription: `Turn on Black Mirror Mode, and face your darkest financial timeline.
No safety nets. No assistance. Just raw consequences.
This mode shows you the ugly truths behind your bad habits—before they destroy real-world stability.
Dare to look… and evolve.`,
      color: "orange",
      agentName: "black_mirror_agent"
    },
    {
      icon: AlertTriangle,
      title: "🚨 Emotional Emergency Monitor",
      shortDescription: "Watches for stress signals and impulsive behavior patterns.",
      fullDescription: `Your bank balance doesn't feel your pain—but LIFELOOP does.
This AI watches for stress signals, impulsive behavior, and burnout patterns... and steps in before you derail.
It's not just smart—it's empathetic.
Because emotions spend money too.`,
      color: "green",
      agentName: "emotional_monitor_agent"
    },
    {
      icon: Route,
      title: "🌐 Exportable AI Core",
      shortDescription: "Export LIFELOOP's intelligence to your existing apps and platforms.",
      fullDescription: `LIFELOOP's intelligence isn't trapped.
You can export its simulation core into your own budgeting apps, fintech tools, or platforms—turning any system into a predictive oracle.
Bring the storm wherever you go.`,
      color: "yellow",
      agentName: "exportable_core_agent"
    },
    {
      icon: Database,
      title: "📬 The Loop Report",
      shortDescription: "Monthly AI-crafted digest of your financial narrative.",
      fullDescription: `Every month, LIFELOOP sends you a hyper-personalized digest.
Not boring numbers—but narratives: what changed, what might happen, and what you must prepare for.
A mix of logic and prophecy, delivered like a story.
Your future. Serialized.`,
      color: "cyan",
      agentName: "loop_report_agent"
    },
    {
      icon: Target,
      title: "🛡 SDCC Protocol",
      shortDescription: "Simulation-Driven Contingency Creation for backup planning.",
      fullDescription: `Think ahead. WAY ahead.
LIFELOOP auto-builds backup plans by simulating failures in your goals and creating financial detours—so even your Plan C has a Plan D.
It's not about "what if" anymore. It's "what next."
Contingency isn't optional. It's coded.`,
      color: "red",
      agentName: "sdcc_protocol_agent"
    },
    {
      icon: Zap,
      title: "🧬 QRE Protocol",
      shortDescription: "Quantum Risk Evaluator breaks down choices into ripple probabilities.",
      fullDescription: `The Quantum Risk Evaluator breaks down every choice into ripple probabilities.
It quantifies how likely your investments, plans, or risks will succeed, fail, or backfire—across multiple timelines.
You're not guessing anymore. You're simulating across dimensions.
This isn't statistics. It's foresight.`,
      color: "gray",
      agentName: "quantum_risk_evaluator"
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

      {/* About Section */}
      <AnimatePresence>
        {showFeatures && (
          <motion.section
            className="relative z-10 px-4 py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl md:text-6xl font-bold mb-12 text-white">
                  About LIFELOOP
                </h2>
                <div className="bg-gray-900/50 backdrop-blur-md border border-cyan-500/30 rounded-xl p-8 mb-12">
  <div className="text-xl text-gray-300 leading-relaxed space-y-6">
    <p>
      <span className="text-cyan-400 font-bold">💡 LIFELOOP</span> – Your Autonomous Financial Future<br/>
      LIFELOOP is an <span className="text-purple-400 font-bold">Agentic AI system built to automate, simulate, and secure your financial life — without the guesswork.</span>
    </p>
    <p>
      Powered by <span className="text-cyan-400 font-bold">Fi’s MCP Server</span> and <span className="text-cyan-400 font-bold">Google AI</span>, LIFELOOP understands your real financial data, simulates future outcomes, detects risks, and takes action on your behalf — from adjusting SIPs to pausing subscriptions during stress. 
      <span className="text-purple-400 font-bold"> It doesn’t just advise — it acts.</span>
    </p>
    <p>
      Whether it's a <span className="text-red-400">market crash</span>, <span className="text-yellow-400">emotional burnout</span>, or <span className="text-purple-400">what-if regret</span>, LIFELOOP’s intelligent agents respond instantly, making decisions that align with your <span className="text-cyan-400">goals, values, and future.</span>
    </p>
    <p>
      <span className="text-pink-400 font-bold">💼 Think of it as your personal CFO, therapist, and strategist — in one.</span>
    </p>
    <p className="text-3xl font-bold text-cyan-400">
      Welcome to the age where <strong>you don't just track your future.<br/>You test it.</strong>
    </p>
  </div>
</div>

              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* 3 Core Features Section */}
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
                  3 Core Features
                </h2>
                <p className="text-xl text-gray-300">
                  The foundation of future simulation
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

      {/* 8 Advanced Features Section */}
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
                  8 Advanced Features
                </h2>
                <p className="text-xl text-gray-300">
                  Hover over each card to explore the complete feature set
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {agents.map((agent, index) => (
                  <FlipCard
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

      {/* Video Section */}
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