import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchIntensity?: number;
}

export default function GlitchText({ text, className = '', glitchIntensity = 0.1 }: GlitchTextProps) {
  const [glitchedText, setGlitchedText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`';
    
    const glitchInterval = setInterval(() => {
      if (Math.random() < glitchIntensity) {
        setIsGlitching(true);
        
        // Create glitched version
        const chars = text.split('');
        const glitched = chars.map(char => {
          if (Math.random() < 0.1 && char !== ' ') {
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }
          return char;
        }).join('');
        
        setGlitchedText(glitched);
        
        // Restore original text after brief moment
        setTimeout(() => {
          setGlitchedText(text);
          setIsGlitching(false);
        }, 50 + Math.random() * 100);
      }
    }, 100);

    return () => clearInterval(glitchInterval);
  }, [text, glitchIntensity]);

  return (
    <span 
      className={`${className} ${isGlitching ? 'text-cyan-400' : ''} transition-colors duration-75`}
      style={{
        textShadow: isGlitching 
          ? '2px 0 #ff0040, -2px 0 #00ffff, 0 0 20px #ffffff40' 
          : '0 0 10px rgba(255,255,255,0.3)'
      }}
    >
      {glitchedText}
    </span>
  );
}