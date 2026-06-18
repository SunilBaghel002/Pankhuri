'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import BilvaLeafIcon from '../icons/BilvaLeafIcon';
import MandalaPattern from '../decorations/MandalaPattern';
import FloatingLeaf from '../decorations/FloatingLeaf';

interface PreloaderProps {
  onComplete?: () => void;
  minDisplayTime?: number; // Minimum display time (default 2000ms)
}

export default function Preloader({ onComplete, minDisplayTime = 1800 }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showSkip, setShowSkip] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Disable scrolling on load
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'unset';
      onComplete?.();
    }, minDisplayTime);

    // Show skip button after 3 seconds if minDisplayTime is longer
    const skipTimer = setTimeout(() => {
      setShowSkip(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(skipTimer);
      document.body.style.overflow = 'unset';
    };
  }, [minDisplayTime, onComplete]);

  const handleSkip = () => {
    setIsLoading(false);
    document.body.style.overflow = 'unset';
    onComplete?.();
  };

  // Split brand name "Shankara Vegis" for staggered text reveal
  const brandName = "Shankara Vegis";
  
  const trishulPulse = shouldReduceMotion 
    ? {} 
    : {
        opacity: [0.4, 1, 0.4],
        scale: [0.96, 1.04, 0.96],
        transition: { repeat: Infinity, duration: 2.4, ease: 'easeInOut' }
      };

  const omPulse = shouldReduceMotion
    ? {}
    : {
        scale: [1, 1.05, 1],
        transition: { repeat: Infinity, duration: 3, ease: 'easeInOut' }
      };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          role="status"
          aria-label="Loading Shankara Vegis Restaurant"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.08, 
            filter: 'blur(10px)',
            transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#F4F9F0] to-[#E8F0DE] overflow-hidden select-none"
        >
          {/* 1. Mandala Background Layer (Slow Rotation) */}
          <div className="absolute inset-0 flex items-center justify-center z-0 opacity-[0.06]">
            <MandalaPattern size={600} className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px]" />
          </div>

          {/* Background Floating Sage Leaves */}
          <FloatingLeaf size="md" rotation={15} opacity={0.12} delay={0} duration={8} className="top-10 left-10 text-primary-400" />
          <FloatingLeaf size="sm" rotation={-45} opacity={0.15} delay={1.5} duration={6} className="bottom-20 left-16 text-primary-400" />
          <FloatingLeaf size="md" rotation={30} opacity={0.12} delay={3} duration={7} className="top-24 right-16 text-primary-400" />

          {/* 2. Middle Layer: Sacred Om Watermark (Pulsing) */}
          <motion.div
            animate={omPulse}
            className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none opacity-[0.08] mix-blend-multiply"
          >
            <div className="relative w-[140px] h-[140px] sm:w-[170px] sm:h-[170px] lg:w-[200px] lg:h-[200px]">
              <Image
                src="/images/loader_om.png"
                alt="Om Watermark"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* 3. Foreground Layer: Trishul (Centered and Pulsing) */}
          <div className="relative flex flex-col items-center justify-center z-20 gap-8">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 100, damping: 15 }}
              className="relative w-[50px] h-[100px] sm:w-[58px] sm:h-[115px] lg:w-[65px] lg:h-[130px] flex items-center justify-center"
            >
              {/* Trishul Glow Aura */}
              <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-accent-saffron/15 blur-xl -z-10" />

              <motion.div
                animate={trishulPulse}
                className="w-full h-full flex items-center justify-center cursor-pointer relative mix-blend-multiply"
              >
                <Image
                  src="/images/loader_trishul.png"
                  alt="Mahadev Trishul"
                  fill
                  className="object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]"
                  priority
                />
              </motion.div>
            </motion.div>

            {/* 4. Decorative Layer: Floating/Falling Bilva Leaves */}
            {!shouldReduceMotion && (
              <>
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 15, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  className="absolute -top-10 -left-12 opacity-60"
                >
                  <BilvaLeafIcon size={24} />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -12, 0], rotate: [0, -20, 20, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -bottom-8 -right-12 opacity-60"
                >
                  <BilvaLeafIcon size={28} />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 1 }}
                  className="absolute top-20 -right-16 opacity-50"
                >
                  <BilvaLeafIcon size={20} />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [0, -15, 15, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1.5 }}
                  className="absolute -top-12 right-10 opacity-55"
                >
                  <BilvaLeafIcon size={25} />
                </motion.div>
              </>
            )}

            {/* 5. Brand Layer: Staggered Text Reveal */}
            <div className="flex flex-col items-center text-center gap-2">
              <div className="flex justify-center items-center">
                {brandName.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.7 + index * 0.05,
                      type: 'spring',
                      stiffness: 120,
                      damping: 14
                    }}
                    className={`font-heading italic text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-500 tracking-wider ${
                      letter === " " ? "mr-2.5" : ""
                    }`}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* 6. Tagline: Fades In */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="font-body text-[10px] sm:text-xs font-semibold uppercase text-gray-500 tracking-[0.25em]"
              >
                Family Owned Since 1992
              </motion.span>

              {/* 7. Loading Indicator: Gradient Loading Bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="w-32 h-[3px] bg-primary-100/30 rounded-full mt-4 overflow-hidden relative"
              >
                <motion.div
                  animate={shouldReduceMotion ? {} : {
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.6,
                    ease: 'easeInOut'
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-primary-500 via-accent-saffron to-accent-orange rounded-full w-20"
                />
              </motion.div>
            </div>
          </div>

          {/* 8. Skip Button (Appears after 3 seconds) */}
          {showSkip && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={handleSkip}
              className="absolute bottom-6 right-6 px-4.5 py-2 rounded-full border border-primary-200/50 bg-white/60 backdrop-blur-sm text-xs font-semibold font-body text-primary-800 hover:bg-white hover:border-accent-saffron/40 hover:text-accent-saffron shadow-sm transition-all z-[99999]"
            >
              Skip Intro
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
