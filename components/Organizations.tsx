"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface OrganizationsProps {
  darkMode: boolean;
}

export default function Organizations({ darkMode }: OrganizationsProps) {
  return (
    <section
      id="organizations"
      className={`px-10 py-20 transition-colors duration-300 ${
        darkMode ? "bg-[#3B1C32]" : "bg-white"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold mb-12 text-center"
        >
          Organizations
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`rounded-2xl p-8 shadow ${
            darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
          }`}
        >
          <div className="flex justify-center mb-6">
            <div className="relative w-80 h-24">
              <Image
                src="/assets/GDSC.png"
                alt="Google Developer Student Club"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-1 text-center">
            Regular Member
          </h3>

          <p
            className={`text-sm mb-2 text-center ${
              darkMode ? "text-pink-200" : "text-pink-600"
            }`}
          >
            Google Developer Student Club (GDSC)
          </p>

          <p className="text-xs opacity-70 mb-4 text-center">
            Oct 2023 – Sept 2024
          </p>

          <ul className="text-sm space-y-2 max-w-md mx-auto">
            <li>• Attended workshops and seminars</li>
            <li>• Connected with fellow regular and core members</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
