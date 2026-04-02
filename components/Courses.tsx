"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface CoursesProps {
  darkMode: boolean;
}

export default function Courses({ darkMode }: CoursesProps) {
  const courses = [
    {
      title: "Java (Basic) – HackerRank",
      image: "/assets/Hackerrank.png",
      desc: "Certification awarded by HackerRank for successfully passing the Java (Basic) programming assessment.",
    },
    {
      title: "Java Programming",
      image: "/assets/GreatLearning.png",
      desc: "Certification of Completion awarded by Great Learning for completing a course in Java Programming.",
    },
    {
      title: "AWS Academy Cloud Developing [101404]",
      image: "/assets/AWS.png",
      desc: "Certification awarded through AWS Academy for completing the Cloud Developing course, covering fundamental cloud development concepts and practices.",
    },
    {
      title: "Mathematics for AI: Beginner_OEC3003_01 (이상구)",
      image: "/assets/SKKU1.png",
      desc: "Course taught by Professor Kim, Kyoung Hwon (English subtitles available). This course introduces the fundamental mathematics and algorithms required to understand artificial intelligence, with practical coding exercises to reinforce theoretical concepts. This course is provided by SKKU (Sungkyunkwan University)",
    },
    {
      title: "Korean Starter Pack: Beginner_OEC3001_01 (김경훤)",
      image: "/assets/SKKU2.png",
      desc: "Course taught by Professor Lee, Sanggu (English subtitles available). Students learn how to read and write Hangeul accurately while gaining insight into Korean culture, pronunciation, and essential everyday communication skills. This course is provided by SKKU (Sungkyunkwan University)",
    },
  ];

  return (
    <section
      id="courses"
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
          Courses
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
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
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="text-sm font-semibold mb-2 line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-xs opacity-80">
                  {course.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}