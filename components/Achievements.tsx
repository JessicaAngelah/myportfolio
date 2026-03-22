"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface AchievementsProps {
  darkMode: boolean;
}

export default function Achievements({ darkMode }: AchievementsProps) {
  return (
    <section
      id="achievements"
      className={`px-4 sm:px-6 lg:px-10 py-16 sm:py-20 transition-colors duration-300 ${
        darkMode ? "bg-[#3B1C32]" : "bg-white"
      }`}
    >
      <div className="max-w-md sm:max-w-lg mx-auto">
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`rounded-2xl shadow overflow-hidden ${
            darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
          }`}
        >
          <div className="relative w-full aspect-square">
            <Image
              src="/assets/Achievement1.png"
              alt="Favorite Winner Innovation is Our Middle Name"
              fill
              className="object-cover"
            />
          </div>

          <div className="p-4 sm:p-5 text-center">
            <h3 className="text-sm sm:text-base font-semibold mb-2">
              ⭐ Favorite Winner
            </h3>
            <p className="text-xs sm:text-sm opacity-80 leading-relaxed">
              “Innovation is Our Middle Name” Competition <br />
              <span className="opacity-70">(Project Hatchery)</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
