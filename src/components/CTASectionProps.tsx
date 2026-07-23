"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  // Staggered text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
    hover: {
      backgroundColor: "rgba(255, 255, 255, 0.15)",
      transition: {
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        style={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <source src="/images/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* Dark Overlay - Full background dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      {/* Minimal decorative light */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"
      />

      {/* Content - Centered vertically */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl text-center"
        >
          {/* Minimal separator line */}
          <motion.div
            variants={itemVariants}
            className="mx-auto mb-6 h-[1px] w-12 bg-white/30"
          />

          {/* Main headline - Smaller, more refined */}
          <motion.h1
            variants={itemVariants}
            className="text-white font-light tracking-[0.15em] text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase"
          >
            <span className="block font-thin tracking-[0.2em]">Our Story</span>
            <motion.span
              variants={itemVariants}
              className="block font-light tracking-[0.3em] text-white/90"
            >
              Your Style
            </motion.span>
          </motion.h1>

          {/* Subtitle - Smaller, elegant */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-4 max-w-2xl text-xs font-light leading-relaxed tracking-[0.2em] text-white/60 sm:text-sm md:text-base uppercase"
          >
            Crafting timeless fashion with quality, innovation,
            <br className="hidden sm:block" />
            and sophistication at the core.
          </motion.p>

          {/* Button - Minimal outline style */}
          <motion.button
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            className="group relative mt-12 overflow-hidden  bg-white/10 backdrop-blur-md px-12 py-4 text-sm font-light tracking-[0.15em] text-white transition-all duration-500 hover:bg-white hover:text-black border border-white/20 hover:border-transparent"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
              Explore About Us
            </span>
            <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
          </motion.button>

         
        </motion.div>
      </div>
    </section>
  );
}