"use client";

import { motion } from "framer-motion";

interface ExperienceProps {
  darkMode: boolean;
}

export default function Experience({ darkMode }: ExperienceProps) {
  return (
    <section
      id="experience"
      className={`px-4 sm:px-6 lg:px-10 py-16 sm:py-20 transition-colors duration-300 ${
        darkMode ? "bg-[#3B1C32]" : "bg-white"
      }`}
    >
      <div className="max-w-4xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl font-semibold mb-10 sm:mb-12 text-center"
        >
          Experience
        </motion.h2>

        <div className="space-y-6 sm:space-y-8">

          {/* Amar Bank */}
          <div
            className={`rounded-2xl p-4 sm:p-6 shadow ${
              darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
            }`}
          >
            <h4 className="text-base sm:text-lg font-semibold">
              Business Analyst Intern — Amar Bank
            </h4>
            <p className="text-xs sm:text-sm opacity-70 mb-3 sm:mb-4">
              Jakarta, Indonesia | February 2026 – May 2026
            </p>

            <ul className="text-xs sm:text-sm space-y-2">
              <li>• Assisted with data analysis and market research.</li>
              <li>• Built financial models and tracked KPIs in Excel.</li>
              <li>• Created business presentations and reports.</li>
              <li>• Collaborated with cross-functional teams.</li>
              <li>• Conducted research for market analysis.</li>
            </ul>
          </div>

          {/* Small Business */}
          <div
            className={`rounded-2xl p-4 sm:p-6 shadow ${
              darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
            }`}
          >
            <h4 className="text-base sm:text-lg font-semibold">
              Co-owner — Small-scale Fashion Business
            </h4>
            <p className="text-xs sm:text-sm opacity-70 mb-3 sm:mb-4">
              Indonesia | 2022 – Present
            </p>

            <ul className="text-xs sm:text-sm space-y-2">
              <li>• Managed Shopee operations & supplier coordination.</li>
              <li>• Handled customer service and order processing.</li>
              <li>• Maintained inventory and financial records.</li>
            </ul>
          </div>

          {/* Other Experiences */}
          <div
            className={`rounded-2xl p-4 sm:p-6 shadow ${
              darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
            }`}
          >
            <h4 className="text-base sm:text-lg font-semibold">
              Other Experiences
            </h4>

            <ul className="text-xs sm:text-sm space-y-2">
              <li>• Led academic group presentations.</li>
              <li>• Worked in cross-functional student teams.</li>
              <li>• Adapted quickly to new tools and systems.</li>
              <li>• Demonstrated strong time management.</li>
              <li>• Attended workshops and seminars.</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
