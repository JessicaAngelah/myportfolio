"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface AboutMeProps {
  darkMode: boolean;
}

export default function AboutMe({ darkMode }: AboutMeProps) {
  return (
    <section
      id="about"
      className={`flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-10 py-16 transition-colors duration-300 ${
        darkMode ? "bg-[#1A1A1A]" : "bg-[#FFF8F0]"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 max-w-4xl"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-32 h-32 sm:w-40 sm:h-40 relative"
        >
          <Image
            src="/assets/Profile.png"
            alt="Jessica Angela Huang"
            fill
            className="rounded-full object-cover"
            priority
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center md:text-left"
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
            Computer Science student at Binus University with a passion for technology and innovation.
            Fast learner with strong communication skills, excellent teamwork,
            and high adaptability. Experienced in handling multiple tasks under
            pressure and maintaining a positive attitude.
            Open to relocation and available for full-time opportunities.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
