"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  // 🖱️ mouse tracking
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(px * 40);
    y.set(py * 40);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="contact"
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className={`relative overflow-hidden px-4 sm:px-6 lg:px-10 py-24 sm:py-28 transition-colors duration-300 ${
        darkMode ? "bg-[#291B25]" : "bg-white"
      }`}
    >
      {/* ✨ Interactive Background (moves ONLY on hover) */}
      {/* Top Blob */}
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="absolute w-[300px] h-[300px] bg-pink-500/10 blur-3xl rounded-full top-[-50px] left-[-60px]"
      />

      {/* Bottom Blob */}
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="absolute w-[350px] h-[350px] bg-purple-500/10 blur-3xl rounded-full bottom-[-80px] right-[-80px]"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl font-semibold mb-8 sm:mb-10"
        >
          Contact Me
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-8 sm:mb-10">
          {/* Phone */}
          <div className={`rounded-2xl p-4 sm:p-6 shadow text-sm ${
            darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
          }`}>
            📞 <span className="font-medium">Phone</span>
            <p className="mt-1 opacity-80 text-xs sm:text-sm">
              +62-812-8203-8877
            </p>
          </div>

          {/* Email */}
          <div className={`rounded-2xl p-4 sm:p-6 shadow text-sm ${
            darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
          }`}>
            ✉️ <span className="font-medium">Email</span>
            <p className="mt-1 opacity-80 text-xs sm:text-sm">
              jessicaah2826@gmail.com
            </p>
          </div>

          {/* Location */}
          <div className={`rounded-2xl p-4 sm:p-6 shadow text-sm ${
            darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
          }`}>
            📍 <span className="font-medium">Location</span>
            <p className="mt-1 opacity-80 text-xs sm:text-sm">
              North Jakarta, Indonesia
            </p>
          </div>

          {/* LinkedIn */}
          <div className={`rounded-2xl p-4 sm:p-6 shadow text-sm ${
            darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
          }`}>
            💼 <span className="font-medium">LinkedIn</span>
            <p className="mt-1 text-xs sm:text-sm">
              <a
                href="https://www.linkedin.com/in/jessicaah287/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline break-all"
              >
                linkedin.com/in/jessicaah287
              </a>
            </p>
          </div>

          {/* GitHub */}
          <div className={`rounded-2xl p-4 sm:p-6 shadow text-sm ${
            darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
          }`}>
            🐱 <span className="font-medium">GitHub</span>
            <p className="mt-1 text-xs sm:text-sm">
              <a
                href="https://github.com/jessicaangelah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline break-all"
              >
                github.com/jessicaangelah
              </a>
            </p>
          </div>

          {/* LeetCode */}
          <div className={`rounded-2xl p-4 sm:p-6 shadow text-sm ${
            darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
          }`}>
            💡 <span className="font-medium">LeetCode</span>
            <p className="mt-1 text-xs sm:text-sm">
              <a
                href="https://leetcode.com/u/Jris/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline break-all"
              >
                leetcode.com/u/Jris
              </a>
            </p>
          </div>
        </div>

        <motion.a
          href="/assets/JessicaAH-Resume.pdf"
          download
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full font-medium shadow bg-pink-500 text-white hover:bg-pink-600 transition"
        >
          Download Resume
        </motion.a>
      </div>
    </section>
  );
}