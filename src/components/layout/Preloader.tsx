"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const text = "TECDURE";

  useEffect(() => {
    // Luxury "Wait" Rule: Minimum 1.5 second wait
    // We set it to 3s total to ensure a slow, premium unhurried feel
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500&display=swap');
        
        .gold-gradient {
          background: linear-gradient(
            45deg, 
            #BF953F, 
            #FCF6BA, 
            #B38728, 
            #FBF5B7, 
            #AA771C
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          display: inline-block;
        }
        
        .preloader-bg {
          background-color: #121212;
        }
      `}} />
      
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader-overlay"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ 
              duration: 1.2, 
              ease: [0.83, 0, 0.17, 1] 
            }}
            className="fixed inset-0 z-[99999] preloader-bg flex flex-col items-center justify-center overflow-hidden"
          >
            <div className="relative flex flex-col items-center">
              {/* Brand Logo Animation */}
              <div className="flex overflow-hidden px-4">
                {text.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      duration: 1.5,
                      ease: [0.33, 1, 0.68, 1],
                      delay: index * 0.12,
                    }}
                    className="gold-gradient text-5xl md:text-7xl lg:text-8xl font-serif tracking-[0.25em] font-light"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              
              {/* Luxury Tagline */}
              <motion.div
                initial={{ opacity: 0, letterSpacing: "0.4em" }}
                animate={{ opacity: 0.4, letterSpacing: "1em" }}
                transition={{ delay: 1.2, duration: 2.5, ease: "easeOut" }}
                className="mt-8 text-[#F5F5F0] text-[8px] md:text-[10px] font-light uppercase text-center"
              >
                Modern Arabian Luxury
              </motion.div>

              {/* Decorative line reveal */}
              <motion.div 
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 0.2 }}
                transition={{ delay: 0.8, duration: 1.5, ease: "circOut" }}
                className="w-32 md:w-48 h-[1px] bg-[#BF953F] mt-4 origin-center"
              />
            </div>

            {/* Cinematic background sweep */}
            <motion.div 
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "100%", opacity: 0.15 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FCF6BA] to-transparent pointer-events-none"
              style={{ mixBlendMode: 'overlay' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

