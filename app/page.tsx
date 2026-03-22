"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import AboutMe from "@/components/AboutMe";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Organizations from "@/components/Organizations";
import Certificates from "@/components/Certificates";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main
      className={`transition-colors duration-300 ${
        darkMode
          ? "bg-[#1A1A1A] text-white"
          : "bg-[#FFF8F0] text-gray-900"
      }`}
    >
      {/* Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Sections */}
      <AboutMe darkMode={darkMode} />
      <Education darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Organizations darkMode={darkMode} />
      <Certificates darkMode={darkMode} />
      <Achievements darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </main>
  );
}
