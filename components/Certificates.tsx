"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface CertificatesProps {
  darkMode: boolean;
}

export default function Certificates({ darkMode }: CertificatesProps) {
  const certificates = [
    {
      title: "Career Camp Seminar Series – BINUS",
      image: "/assets/BFI1.png",
      desc: "How to Prepare Your Career Plan.",
    },
    {
      title: "HackerRank Java (Basic)",
      image: "/assets/Hackerrank.png",
      desc: "Successfully passed Java (Basic) assessment.",
    },
    {
      title: "GitHub 101 Workshop – Robogals",
      image: "/assets/Robogals.png",
      desc: "Version control fundamentals workshop.",
    },
  ];

  return (
    <section
      id="certificates"
      className={`px-10 py-20 transition-colors duration-300 ${
        darkMode ? "bg-[#3B1C32]" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold mb-12 text-center"
        >
          Certificates
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`rounded-2xl shadow overflow-hidden ${
                darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
              }`}
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="text-sm font-semibold mb-2">
                  {cert.title}
                </h3>
                <p className="text-xs opacity-80">
                  {cert.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
