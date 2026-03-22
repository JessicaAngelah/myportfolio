"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface EducationProps {
  darkMode: boolean;
}

export default function Education({ darkMode }: EducationProps) {
  return (
    <section
      id="education"
      className={`px-4 sm:px-6 lg:px-10 py-16 sm:py-20 transition-colors duration-300 ${
        darkMode ? "bg-[#3B1C32]" : "bg-white"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl font-semibold mb-8 sm:mb-10 text-center"
        >
          Education
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              image: "/assets/Binus.png",
              name: "Binus International University",
              location: "Jakarta, Indonesia",
              degree: "Bachelor’s Degree, Computer Science",
              year: "2022 – 2026",
            },
            {
              image: "/assets/Latrobe.png",
              name: "La Trobe University",
              location: "Melbourne, Australia",
              degree: "Bachelor’s Degree, Computer Science",
              year: "2022 – 2026",
            },
            {
              image: "/assets/Universal.png",
              name: "Universal School Kemayoran",
              location: "Jakarta, Indonesia",
              degree: "High School – Cambridge Curriculum",
              year: "2015 – 2022",
            },
          ].map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-4 sm:p-6 shadow ${
                darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
              }`}
            >
              <div className="relative w-full h-20 sm:h-24 mb-4">
                <Image
                  src={edu.image}
                  alt={edu.name}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-sm sm:text-base font-semibold">{edu.name}</h3>
              <p className="text-xs sm:text-sm opacity-80">{edu.location}</p>
              <p className="text-xs sm:text-sm mt-2">{edu.degree}</p>
              <p className="text-xs mt-1 opacity-70">{edu.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
