'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundTexture from '../decorations/BackgroundTexture';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isDestroyed, setIsDestroyed] = useState(false);

  useEffect(() => {
    // Disable scroll on mount
    document.body.style.overflow = 'hidden';

    const duration = 400; // 0.4s load progress
    const intervalTime = 16;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(nextProgress);

      if (nextProgress === 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsExiting(true);
          // Re-enable scrolling when curtain split begins
          document.body.style.overflow = 'unset';
        }, 100);
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleExitComplete = () => {
    setIsDestroyed(true);
  };

  if (isDestroyed) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Curtain Panels */}
      <AnimatePresence>
        {!isExiting && (
          <>
            {/* Top Panel */}
            <motion.div
              initial={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
              className="absolute top-0 left-0 w-full h-1/2 pointer-events-auto overflow-hidden shadow-md"
            >
              <BackgroundTexture variant="marble" className="w-full h-full" />
            </motion.div>

            {/* Bottom Panel */}
            <motion.div
              initial={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
              onAnimationComplete={handleExitComplete}
              className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-auto overflow-hidden shadow-md"
            >
              <BackgroundTexture variant="marble" className="w-full h-full" />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Loading Content Wrapper (centered overlay) */}
      <AnimatePresence>
        {!isExiting && (
          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, y: -30 }}
            transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto z-10"
          >
            <div className="flex flex-col items-center gap-7">
              {/* Detailed Real Leaf Loader with sliding overlay */}
              <div className="relative w-32 h-32 flex items-center justify-center bg-white/40 backdrop-blur-md rounded-full shadow-inner border border-white/50 p-6 overflow-hidden">
                {/* Background Dash Ring (rotating continuously) */}
                <svg className="absolute inset-0 w-full h-full p-2 pointer-events-none" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="preloaderGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D4920B" />
                      <stop offset="100%" stopColor="#F5D061" />
                    </linearGradient>
                  </defs>
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="44"
                    stroke="url(#preloaderGoldGrad)"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    fill="none"
                    opacity="0.8"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
                    style={{ originX: '50px', originY: '50px' }}
                  />
                </svg>

                {/* The Real Leaf Box (Using photorealistic leaf image and sliding frosted overlay) */}
                <div className="relative w-[76px] h-[76px] flex items-center justify-center overflow-hidden rounded-full select-none bg-white shadow-inner p-1">
                  {/* Underlay / Background: A faint grey silhouette of the leaf */}
                  <img
                    src="/images/real_leaf.png"
                    alt="Leaf loader track"
                    className="absolute inset-0 w-full h-full object-contain opacity-[0.12] filter grayscale mix-blend-multiply pointer-events-none"
                  />

                  {/* Foreground: The real colored leaf */}
                  <img
                    src="/images/real_leaf.png"
                    alt="Real leaf loader"
                    className="absolute inset-0 w-full h-full object-contain mix-blend-multiply pointer-events-none z-10"
                  />

                  {/* Sliding White Overlay overlaying the leaf (which shifts down as loading progresses) */}
                  <motion.div
                    className="absolute inset-0 bg-white/85 z-20 pointer-events-none"
                    style={{ 
                      top: `${progress}%`,
                      height: '100%',
                      width: '100%'
                    }}
                    transition={{ ease: 'easeOut', duration: 0.1 }}
                  />
                </div>
              </div>

              {/* Staggered text reveal */}
              <div className="text-center flex flex-col items-center gap-1.5">
                <motion.span
                  initial={{ letterSpacing: '0.1em', opacity: 0 }}
                  animate={{ letterSpacing: '0.25em', opacity: 1 }}
                  transition={{ duration: 1.0, ease: 'easeOut' }}
                  className="font-heading italic text-3xl font-extrabold text-primary-950 tracking-wider"
                >
                  Pankhuri
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="font-body text-[10px] font-bold uppercase text-accent-orange tracking-[0.3em] mt-0.5"
                >
                  Reloaded
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="text-xs text-red-600 font-bold italic mt-1"
                >
                  (Pure Vegetarian)
                </motion.span>
              </div>

              {/* Progress counter & loader bar */}
              <div className="flex flex-col items-center gap-2 mt-2 w-48">
                <div className="flex justify-between items-center w-full font-body text-xs font-semibold text-primary-800">
                  <span className="opacity-75">Loading Heritage</span>
                  <span className="text-accent-orange font-bold font-heading">{progress}%</span>
                </div>
                {/* Thin Sleek Progress Bar */}
                <div className="w-full h-[3px] bg-primary-100/30 rounded-full overflow-hidden relative">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary-600 via-primary-700 to-accent-orange rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: 'easeOut' }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
