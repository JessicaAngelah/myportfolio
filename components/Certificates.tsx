"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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

  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [page, setPage] = useState(0);

  // 🔥 RESPONSIVE LOGIC
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1); // mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // tablet
      } else {
        setItemsPerPage(3); // desktop
      }
    };

    handleResize(); // run once
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxPage = Math.ceil(certificates.length / itemsPerPage) - 1;

  const nextPage = () => {
    if (page < maxPage) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  const visibleCertificates = certificates.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <section
      id="certificates"
      className={`px-6 sm:px-10 py-20 ${
        darkMode ? "bg-[#291B25]" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-12 text-center">
          Certificates ✨
        </h2>

        <div className="flex items-center justify-center gap-4 sm:gap-6">

          {/* LEFT BUTTON */}
          <button
            onClick={prevPage}
            disabled={page === 0}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center
              shadow-lg transition-all duration-300
              ${
                darkMode
                  ? "bg-white/10 hover:bg-white/20 text-white"
                  : "bg-pink-200 hover:bg-pink-300 text-pink-800"
              }
              disabled:opacity-30`}
          >
            ←
          </button>

          {/* SLIDER */}
          <div className="flex-1 max-w-5xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4 }}
                className={`grid gap-6 sm:gap-8 ${
                  itemsPerPage === 1
                    ? "grid-cols-1"
                    : itemsPerPage === 2
                    ? "grid-cols-2"
                    : "grid-cols-3"
                }`}
              >
                {visibleCertificates.map((cert, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ${
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

                    <div className="p-4 sm:p-5 text-center">
                      <h3 className="text-sm font-semibold mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-xs opacity-80">{cert.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextPage}
            disabled={page === maxPage}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center
              shadow-lg transition-all duration-300
              ${
                darkMode
                  ? "bg-white/10 hover:bg-white/20 text-white"
                  : "bg-pink-200 hover:bg-pink-300 text-pink-800"
              }
              disabled:opacity-30`}
          >
            →
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-8 gap-2">
          {[...Array(maxPage + 1)].map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === page
                  ? "bg-pink-400 scale-125"
                  : "bg-gray-300 opacity-50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}