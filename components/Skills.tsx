"use client";

import { motion } from "framer-motion";

interface SkillsProps {
  darkMode: boolean;
}

export default function Skills({ darkMode }: SkillsProps) {
  return (
    <section
      id="skills"
      className={`px-10 py-20 transition-colors duration-300 ${
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
          className="text-2xl font-semibold mb-12 text-center"
        >
          Skills & Experience
        </motion.h2>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            {[
              ["Programming & Web", "Python, HTML, CSS, JavaScript, Java, C, SQL, TypeScript, phpMyAdmin"],
              ["Frontend Development", "ReactJS (learning), UI wireframing, responsive design, Node.js"],
              ["Data & Analytics", "Power BI, Tableau, Google Colab"],
              ["Tools & Platforms", "Visual Studio Code (VSC), Jira, Slack, Microsoft Teams, Google Workspace, Microsoft Office"],
              ["Design & Prototyping", "Figma, Canva, Miro, Draw.io"],
              ["APIs & Backend (Basic)", "REST APIs, Firebase"],
            ].map(([title, content], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-2xl p-5 shadow ${
                  darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
                }`}
              >
                <p className="font-medium">{title}</p>
                <p className="opacity-80 mt-1">{content}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-8 max-w-4xl mx-auto mb-16">
          {[
            {
              title: "Business Analyst Intern — Amar Bank",
              period: "Jakarta, Indonesia | 12 February 2026 – 11 May 2026",
              points: [
                "Assisted with data analysis and market research to support business decision-making.",
                "Created financial models and tracked performance metrics using Excel.",
                "Contributed to business presentations and reports.",
                "Collaborated with cross-functional teams to solve business problems.",
              ],
            },
            {
              title: "Co-owner — Small-scale Fashion Business",
              period: "Indonesia | 2022 – Present",
              points: [
                "Founded and managed a fashion business specializing in imported clothing.",
                "Managed Shopee online store operations.",
                "Handled customer service and supplier coordination.",
                "Maintained sales and inventory records.",
              ],
            },
          ].map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-6 shadow ${
                darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
              }`}
            >
              <h4 className="font-semibold text-lg">{exp.title}</h4>
              <p className="text-xs opacity-70 mb-4">{exp.period}</p>

              <ul className="text-sm space-y-2">
                {exp.points.map((p, i) => (
                  <li key={i}>• {p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Languages & Key Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Languages */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Languages</h3>
            <div className="flex flex-wrap gap-4">
              {[
                ["English", "Native"],
                ["Indonesian", "Native"],
                ["Chinese", "Intermediate"],
              ].map(([lang, level], index) => (
                <div
                  key={index}
                  className={`px-5 py-3 rounded-full shadow text-sm font-medium ${
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
            <h3 className="text-xl font-semibold mb-6">Key Skills</h3>
            <div className="grid grid-cols-1 gap-4 text-sm">
              {[
                "Strong communication & interpersonal skills",
                "Ability to multitask in fast-paced environments",
                "Positive attitude with strong work ethic",
                "Works well independently or in a team",
              ].map((skill, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-4 shadow ${
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
