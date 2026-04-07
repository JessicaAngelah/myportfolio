"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ExperienceProps {
  darkMode: boolean;
}

export default function Experience({ darkMode }: ExperienceProps) {
  return (
    <section
      id="experience"
      className={`px-4 sm:px-6 lg:px-10 py-16 sm:py-20 transition-colors duration-300 ${
        darkMode ? "bg-[#291B25]" : "bg-white"
      }`}
    >
      <div className="max-w-5xl mx-auto">

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
            className={`rounded-2xl p-5 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 ${
              darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">

              {/* LEFT */}
              <div className="flex-1">
                <h4 className="text-base sm:text-lg font-semibold mb-1">
                  Business Analyst Intern — Amar Bank
                </h4>
                <p className="text-xs sm:text-sm opacity-70 mb-4">
                  Jakarta, Indonesia | February 2026 – May 2026
                </p>

                <ul className="text-xs sm:text-sm space-y-2 leading-relaxed max-w-xl">
                  <li>• Analyzed business and financial data using Excel to identify trends and support decision-making</li>
                  <li>• Developed reports and dashboards to track key performance metrics</li>
                  <li>• Conducted market and competitor analysis to support business strategy</li>
                  <li>• Collaborated with cross-functional teams to gather requirements and propose solutions</li>
                  <li>• Performed testing, debugging, and validation to ensure usability and performance</li>
                  <li>• Prepared business reports and presentations for stakeholders</li>
                </ul>
              </div>

              {/* RIGHT */}
              <div className="flex justify-center lg:justify-end">
                <div className="p-1 bg-white/80 rounded-xl shadow-sm">
                  <Image
                    src="/assets/Experience/AmarBank.png"
                    alt="Amar Bank Logo"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Small Business */}
          <div
            className={`rounded-2xl p-5 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 ${
              darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">

              {/* LEFT */}
              <div className="flex-1">
                <h4 className="text-base sm:text-lg font-semibold mb-1">
                  Co-owner — Small-scale Fashion Business
                </h4>
                <p className="text-xs sm:text-sm opacity-70 mb-4">
                  Indonesia | 2022 – Present
                </p>

                <ul className="text-xs sm:text-sm space-y-2 leading-relaxed max-w-xl">
                  <li>• Founded and managed a fashion business specializing in imported products</li>
                  <li>• Operated Shopee store including listings, pricing, and promotions</li>
                  <li>• Managed customer service and order fulfillment ensuring smooth operations</li>
                  <li>• Coordinated suppliers, inventory, and logistics</li>
                  <li>• Tracked sales performance and maintained transaction records</li>
                </ul>
              </div>

              {/* RIGHT */}
              <div className="flex justify-center lg:justify-end">
                <div className="p-1 bg-white/80 rounded-xl shadow-sm">
                  <Image
                    src="/assets/Experience/Fashion.png"
                    alt="Fashion Business"
                    width={200}
                    height={200}
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Other Experiences */}
          <div
            className={`rounded-2xl p-5 sm:p-7 shadow-md hover:shadow-xl transition-all duration-300 ${
              darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">

              {/* LEFT */}
              <div className="flex-1">
                <h4 className="text-base sm:text-lg font-semibold mb-2">
                  Other Experiences
                </h4>

                <ul className="text-xs sm:text-sm space-y-2 leading-relaxed max-w-xl">
                  <li>• Led academic group presentations</li>
                  <li>• Worked in cross-functional student teams</li>
                  <li>• Adapted quickly to new tools and systems</li>
                  <li>• Demonstrated strong time management</li>
                  <li>• Attended workshops and seminars</li>
                </ul>
              </div>

              {/* RIGHT */}
              <div className="flex justify-center lg:justify-end">
                <div className="p-1 bg-white/80 rounded-xl shadow-sm">
                  <Image
                    src="/assets/Experience/OtherExperience.png"
                    alt="Other Experiences"
                    width={200}
                    height={200}
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}