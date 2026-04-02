"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

interface AboutMeProps {
  darkMode: boolean;
}

export default function AboutMe({ darkMode }: AboutMeProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(y, { stiffness: 100, damping: 20 });
  const rotateY = useSpring(x, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    x.set((px - 0.5) * 15);
    y.set(-(py - 0.5) * 15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="about"
      className={`relative flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-10 py-20 overflow-hidden ${
        darkMode
          ? "bg-gradient-to-b from-[#1A1A1A] to-[#2A1B26]"
          : "bg-gradient-to-b from-[#FFF8F0] to-white"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-pink-500/20 blur-3xl rounded-full top-10 left-10 animate-pulse" />
      <div className="absolute w-[300px] h-[300px] bg-purple-500/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse" />

      {/* Content (NO CARD) */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center gap-10 sm:gap-12 max-w-4xl"
      >
        {/* Profile Image */}
        <motion.div
          className="w-32 h-32 sm:w-40 sm:h-40 relative"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.08, rotate: 3 }}
        >
          {/* Glow Ring */}
          <div className="absolute inset-0 rounded-full bg-pink-400/30 blur-xl" />

          <Image
            src="/assets/Profile.png"
            alt="Jessica Angela Huang"
            fill
            className="rounded-full object-cover relative z-10 shadow-2xl border-4 border-white/20"
            priority
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="text-center md:text-left"
          style={{
            translateZ: 20, // subtle depth effect
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Jessica Angela Huang
          </h2>

          <p
            className={`text-base sm:text-lg font-medium mb-4 ${
              darkMode ? "text-pink-200" : "text-pink-600"
            }`}
          >
            Computer Science Student
          </p>

          <p className="text-sm sm:text-base leading-relaxed max-w-xl">
            Computer Science student at Binus University with a passion for
            technology and innovation. Fast learner with strong communication
            skills, excellent teamwork, and high adaptability. Experienced in
            handling multiple tasks under pressure and maintaining a positive
            attitude. Open to relocation and available for full-time
            opportunities.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}