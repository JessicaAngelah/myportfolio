"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface CoursesProps {
  darkMode: boolean;
}

export default function Courses({ darkMode }: CoursesProps) {
  const courses = [
    {
      title: "Java (Basic) – HackerRank",
      image: "/assets/Courses/Hackerrank.png",
      desc: "Certification awarded by HackerRank for successfully passing the Java (Basic) programming assessment.",
    },
    {
      title: "Java Programming",
      image: "/assets/Courses/GreatLearning.png",
      desc: "Certification of Completion awarded by Great Learning for completing a course in Java Programming.",
    },
    {
      title: "AWS Academy Cloud Developing [101404]",
      image: "/assets/Courses/AWS.png",
      desc: "Certification awarded through AWS Academy for completing the Cloud Developing course, covering fundamental cloud development concepts and practices.",
    },
    {
      title: "Mathematics for AI: Beginner_OEC3003_01 (이상구)",
      image: "/assets/Courses/SKKU1.png",
      desc: "Course taught by Professor Kim, Kyoung Hwon (English subtitles available). This course introduces the fundamental mathematics and algorithms required to understand artificial intelligence, with practical coding exercises to reinforce theoretical concepts. This course is provided by SKKU (Sungkyunkwan University)",
    },
    {
      title: "Korean Starter Pack: Beginner_OEC3001_01 (김경훤)",
      image: "/assets/Courses/SKKU2.png",
      desc: "Course taught by Professor Lee, Sanggu (English subtitles available). Students learn how to read and write Hangeul accurately while gaining insight into Korean culture, pronunciation, and essential everyday communication skills. This course is provided by SKKU (Sungkyunkwan University)",
    },
  ];

  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [page, setPage] = useState(0);

  // 🔥 RESPONSIVE
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxPage = Math.ceil(courses.length / itemsPerPage) - 1;

  const nextPage = () => {
    if (page < maxPage) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  const visibleCourses = courses.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <section
      id="courses"
      className={`px-6 sm:px-10 py-20 ${
        darkMode ? "bg-[#291B25]" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-12 text-center">
          Courses ✨
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
                {visibleCourses.map((course, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ${
                      darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
                    }`}
                  >
                    <div className="relative w-full aspect-square">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-4 sm:p-5 text-center">
                      <h3 className="text-sm font-semibold mb-2 line-clamp-2">
                        {course.title}
                      </h3>
                      <p className="text-xs opacity-80">
                        {course.desc}
                      </p>
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