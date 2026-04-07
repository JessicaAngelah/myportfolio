"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface CertificatesProps {
  darkMode: boolean;
}

export default function Certificates({ darkMode }: CertificatesProps) {
  const certificates = [
    {
      title: "Build Your First Mobile App with Flutter",
      image: "/assets/Certificates/Flutter.png",
      desc: "Certificate of attendance for attending a workshop on building mobile apps with Flutter, awarded by Binus University.",
    },
    {
      title: 'Workshop "GitHub 101"',
      image: "/assets/Certificates/Robogals.png",
      desc: "Certification of Participation awarded by Robogals Jakarta for attending a GitHub version control workshop.",
    },
    {
      title: "Transforming Youth Skills for the Future to Represent Sustainable Development Goals",
      image: "/assets/Certificates/WorldYouth.png",
      desc: "Certificate of Appreciation awarded by the Community Development Center Academic, Binus University.",
    },
    {
      title: "How to Prepare Your Career Plan",
      image: "/assets/Certificates/BFI1.png",
      desc: "Certificate of Attendance awarded by BFI Finance for participating in the Career Camp Seminar Series.",
    },
    {
      title: "Anatomy of Work Ethic: The Hidden Key to Success",
      image: "/assets/Certificates/BFI2.png",
      desc: "Certificate of Attendance awarded by Student Career Development – Internship Center, Binus University.",
    },
    {
      title: "Casual Sharing About Prospective Career",
      image: "/assets/Certificates/BFI3.png",
      desc: "Certificate of Attendance awarded by Binus University Alumni (Owner of @makeyourbrick).",
    },
    {
      title: "The Importance of Personal Branding for Your Career",
      image: "/assets/Certificates/BFI4.png",
      desc: "Certificate of Attendance awarded by PT Bank Multiarta Sentosa Tbk (Bank MAS).",
    },
    {
      title: "Emerging Careers in Blockchain: Skills, Trends, and Opportunities",
      image: "/assets/Certificates/BFI5.png",
      desc: "Certificate of Attendance awarded by Pixel8labs.",
    },
  ];

  return (
    <section
      id="certificates"
      className={`px-10 py-20 transition-colors duration-300 ${
        darkMode ? "bg-[#291B25]" : "bg-white"
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
