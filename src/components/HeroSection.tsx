"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@/components/icons/Icons";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
const slides = [
  {
    id: 1,
    image: "/images/hero/hero1.jpg",
    brand: "MAISON",
    title: "Eternal Grace",
    subtitle: "The Art of Modesty",
    number: "01",
    description: "Luxurious abayas crafted from the finest Italian crepe — where elegance meets effortless sophistication",
    accent: "#C9A96E",
    year: "2025",
    collection: "Luxury Abaya Collection",
  },
  {
    id: 2,
    image: "/images/hero/hero2.webp",
    brand: "ATELIER",
    title: "Velvet Reverie",
    subtitle: "Softness Reimagined",
    number: "02",
    description: "Plush velvet abayas that drape like a dream — a perfect blend of comfort and regal elegance",
    accent: "#D4AF37",
    year: "2025",
    collection: "Velvet Abaya Edition",
  },
  {
    id: 3,
    image: "/images/hero/hero3.jpg",
    brand: "ARCHIVE",
    title: "Silk Whispers",
    subtitle: "Fluidity in Motion",
    number: "03",
    description: "Pure silk abayas that flow with every movement — a celebration of feminine grace and refinement",
    accent: "#C9A96E",
    year: "2025",
    collection: "Silk Abaya Capsule",
  },
];

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 800);
    }, 7000);

    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const goToSlide = (index: number) => {
    if (index !== currentSlide && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 800);
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen bg-[#0A0A0A] overflow-hidden"
    >
      {/* Ultra-Premium Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A]/80" />
      </div>

      {/* Animated Gradient Orbs - Enhanced */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, #C9A96E15, transparent 70%)" }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, #D4AF3710, transparent 70%)" }}
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Main Sliding Image with Premium Depth */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.id}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1 : 1.08,
              rotateX: index === currentSlide ? mousePosition.y * 3 : 0,
              rotateY: index === currentSlide ? mousePosition.x * 3 : 0,
              filter: index === currentSlide ? "blur(0px)" : "blur(8px)",
            }}
            transition={{
              duration: 1.6,
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1200px",
            }}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover object-top"
              quality={100}
            />
            
            {/* Sophisticated Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 via-transparent to-[#0A0A0A]/30" />
            
            {/* Diagonal Accent Lines - More Refined */}
        
        
          </motion.div>
        ))}
      </div>

      {/* Floating Particles - Ultra Premium */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [0, -40 - Math.random() * 30, 0],
              x: [0, (Math.random() - 0.5) * 60, 0],
              scale: [0, 1 + Math.random() * 0.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeOut",
            }}
            style={{
              width: 1 + Math.random() * 2,
              height: 1 + Math.random() * 2,
              background: `radial-gradient(circle, ${slides[currentSlide].accent}88, transparent 80%)`,
              boxShadow: `0 0 20px ${slides[currentSlide].accent}44`,
            }}
          />
        ))}
      </div>

      {/* Content Container - Refined Layout */}
      <div className="absolute inset-0 flex flex-col justify-end px-8 md:px-20 lg:px-32 pb-16 md:pb-20 lg:pb-28 z-30">
        {/* Main Text Content */}
        <div className="relative mb-12 md:mb-16">
         <AnimatePresence mode="wait">
  {slides.map((slide, index) => (
    index === currentSlide && (
      <motion.div
        key={slide.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-5"
      >
      
        {/* Main Title - Mask Reveal with Clip */}
        <motion.h1
          className="text-white font-light leading-[0.95]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="block text-5xl md:text-6xl lg:text-8xl tracking-[0.02em]">
            {slide.title.split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-4 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.08 }}
              >
                <motion.span
                  className="block"
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    delay: 0.3 + i * 0.08, 
                    duration: 1.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  {word}
                </motion.span>
              </motion.span>
            ))}
          </span>
          <span className="block text-4xl md:text-5xl lg:text-7xl tracking-[0.05em] text-white/60 font-extralight mt-2">
            {slide.subtitle.split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-3 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.08 }}
              >
                <motion.span
                  className="block"
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    delay: 0.5 + i * 0.08, 
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  {word}
                </motion.span>
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Description - Mask Reveal */}
        <motion.div
          className="flex items-start gap-6 max-w-xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <motion.div 
            className="w-px h-12 bg-[#C9A96E]/40 mt-1"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
          <motion.p
            className="text-white/40 text-sm md:text-base font-light leading-relaxed tracking-[0.08em]"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {slide.description}
          </motion.p>
        </motion.div>
      </motion.div>
    )
  ))}
</AnimatePresence>
        </div>

        {/* Preview Boxes - Ultra Premium Design */}
        <div className="flex gap-4 md:gap-5">
          {slides.map((slide, idx) => {
            const isActive = idx === currentSlide;
            
            return (
              <motion.button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                className="relative group flex-1 max-w-[200px]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                  animate={{
                    opacity: isActive ? 1 : 0.4,
                    scale: isActive ? 1 : 0.9,
                    rotateY: isActive ? 0 : 8,
                  }}
                  transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
                >
                  {/* Image */}
                  <Image
                    src={slide.image}
                    alt={`Preview ${slide.number}`}
                    fill
                    className="object-cover object-top"
                    quality={90}
                  />

                  {/* Overlay with Gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/30 to-transparent"
                    animate={{
                      opacity: isActive ? 1 : 0.7,
                    }}
                  />

                  {/* Active Border with Glow Effect */}
                  {isActive && (
                    <motion.div
                      className="absolute -inset-[2px] rounded-2xl border border-[#C9A96E]/40"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="absolute inset-0 rounded-2xl shadow-[0_0_60px_rgba(201,169,110,0.12)]" />
                    </motion.div>
                  )}

                  {/* Hover Luminous Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-[#C9A96E]/0 via-[#C9A96E]/5 to-[#C9A96E]/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  />

                </motion.div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls - Refined */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex items-center gap-8">
        {/* Slide Counter */}
        <div className="flex items-center gap-3">
      

    
        </div>

        {/* Progress Bar - Ultra Thin */}
        <div className="w-32 h-[1px] bg-white/5 relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#C9A96E]/40 via-[#C9A96E] to-[#C9A96E]/40"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: (currentSlide + 1) / slides.length }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          />
        </div>
      </div>

      {/* Side Navigation - Minimalist */}
      <motion.button
        onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-40 group hidden lg:flex"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="w-14 h-14 rounded-full border border-white/5 backdrop-blur-md bg-white/5 flex items-center justify-center transition-all duration-700 hover:border-[#C9A96E]/30 hover:bg-white/10">
          <ArrowLeftIcon className="w-4 h-4 text-white/20 group-hover:text-[#C9A96E]/60 transition-all duration-700" />
        </div>
      </motion.button>

      <motion.button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-40 group hidden lg:flex"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="w-14 h-14 rounded-full border border-white/5 backdrop-blur-md bg-white/5 flex items-center justify-center transition-all duration-700 hover:border-[#C9A96E]/30 hover:bg-white/10">
 <ArrowRightIcon className="w-4 h-4 text-white/20 group-hover:text-[#C9A96E]/60 transition-all duration-700" />
        </div>
      </motion.button>

      {/* Scroll Indicator - Ultra Premium */}
      <motion.div
        className="absolute bottom-12 right-12 z-40 hidden xl:flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-white/20 text-[8px] tracking-[0.3em] font-light writing-mode-vertical">
          SCROLL
        </span>
        <motion.div
          className="w-[1px] h-16 bg-gradient-to-b from-[#C9A96E]/30 to-transparent"
          animate={{
            scaleY: [0, 1, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 1.5,
            ease: "easeInOut",
          }}
        />
      </motion.div>

   
    </section>
  );
}