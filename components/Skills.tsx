"use client";

import { motion } from "framer-motion";

interface SkillsProps {
  darkMode: boolean;
}

export default function Skills({ darkMode }: SkillsProps) {
  return (
    <section
      id="skills"
      className={`px-4 sm:px-6 lg:px-10 py-16 sm:py-20 transition-colors duration-300 ${
        darkMode ? "bg-[#3B1C32]" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl font-semibold mb-10 sm:mb-12 text-center"
        >
          Skills & Experience
        </motion.h2>

        {/* Technical Skills */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6">
            Technical Skills
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 text-xs sm:text-sm">
            {[
              ["Programming & Web", "Python, HTML, CSS, JavaScript, Java, C, SQL, TypeScript, phpMyAdmin"],
              ["Frontend Development", "ReactJS (learning), UI wireframing, responsive design, Node.js"],
              ["Data & Analytics", "Power BI, Tableau, Google Colab"],
              ["Tools & Platforms", "VSC, Jira, Slack, Microsoft Teams, Google Workspace, Microsoft Office"],
              ["Design & Prototyping", "Figma, Canva, Miro, Draw.io"],
              ["APIs & Backend (Basic)", "REST APIs, Firebase"],
            ].map(([title, content], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-2xl p-4 sm:p-5 shadow ${
                  darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
                }`}
              >
                <p className="font-medium text-sm sm:text-base">{title}</p>
                <p className="opacity-80 mt-1">{content}</p>
              </motion.div>
            ))}
          </div>
        </div>


        {/* Languages & Key Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">

          {/* Languages */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6">
              Languages
            </h3>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {[
                ["English", "Native"],
                ["Indonesian", "Native"],
                ["Chinese", "Intermediate"],
              ].map(([lang, level], index) => (
                <div
                  key={index}
                  className={`px-3 sm:px-5 py-2 sm:py-3 rounded-full shadow text-xs sm:text-sm font-medium ${
                    darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
                  }`}
                >
                  {lang} — <span className="opacity-70">{level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Skills */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6">
              Key Skills
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:gap-4 text-xs sm:text-sm">
              {[
                "Strong communication & interpersonal skills",
                "Ability to multitask in fast-paced environments",
                "Positive attitude with strong work ethic",
                "Works well independently or in a team",
              ].map((skill, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-3 sm:p-4 shadow ${
                    darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
                  }`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
