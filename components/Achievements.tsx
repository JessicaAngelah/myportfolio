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
      className={`px-10 py-20 transition-colors duration-300 ${
        darkMode ? "bg-[#3B1C32]" : "bg-white"
      }`}
    >
      <div className="max-w-sm mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold mb-12 text-center"
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

          <div className="p-5 text-center">
            <h3 className="text-sm font-semibold mb-2">
              ⭐ Favorite Winner
            </h3>
            <p className="text-xs opacity-80 leading-relaxed">
              “Innovation is Our Middle Name” Competition <br />
              <span className="opacity-70">(Project Hatchery)</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
