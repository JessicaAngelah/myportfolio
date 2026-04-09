"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface AchievementsProps {
  darkMode: boolean;
}

export default function Achievements({ darkMode }: AchievementsProps) {

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(y, { stiffness: 70, damping: 18 });
  const rotateY = useSpring(x, { stiffness: 70, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    x.set((px - 0.5) * 14);
    y.set(-(py - 0.5) * 14);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="achievements"
      className={`px-4 sm:px-6 lg:px-10 py-16 sm:py-8 transition-colors duration-300 ${
        darkMode ? "bg-[#291B25]" : "bg-white"
      }`}
    >
      <div className="max-w-xs sm:max-w-md mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl font-semibold mb-10 sm:mb-12 text-center"
        >
          Achievements
        </motion.h2>

        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={reset}

          style={{
            rotateX,
            rotateY,
            transformPerspective: 800
          }}

          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}

          animate={{
            y: [0, -12, 0]
          }}

          transition={{
            opacity: { duration: 0.4 },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}

          className={`rounded-2xl shadow-lg overflow-hidden ${
            darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
          }`}
        >

          <div className="relative w-full aspect-square">
            <Image
              src="/assets/Achievements/Achievements1.png"
              alt="Favorite Winner Innovation is Our Middle Name"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-4 sm:p-4 text-center">
            <h3 className="text-sm sm:text-base font-semibold mb-2">
              ⭐ Favorite Winner
            </h3>

            <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
              “Innovation is Our Middle Name” Competition
              <br />
              <span className="opacity-70">(Project Hatchery)</span>
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}