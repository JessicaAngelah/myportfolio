"use client";

import { useState } from "react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 shadow-sm sticky top-0 z-50 transition-colors duration-300 ${
        darkMode ? "bg-[#6A1E55]" : "bg-white"
      }`}
    >
      {/* Logo */}
      <h1 className="text-lg sm:text-xl font-semibold">
        Jessica Angela Huang
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
        <li><a href="#about" className="hover:text-pink-500">About</a></li>
        <li><a href="#skills" className="hover:text-pink-500">Skills</a></li>
        <li><a href="#projects" className="hover:text-pink-500">Projects</a></li>
        <li><a href="#courses" className="hover:text-pink-500">Courses</a></li>
        <li><a href="#certificates" className="hover:text-pink-500">Certificates</a></li>
        <li><a href="#contact" className="hover:text-pink-500">Contact</a></li>

        {/* Toggle */}
        <li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`relative w-12 h-6 rounded-full ${
              darkMode ? "bg-[#A64D79]" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                darkMode ? "translate-x-6" : ""
              }`}
            />
          </button>
        </li>
      </ul>

      {/* Mobile Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`absolute top-full left-0 w-full flex flex-col items-center gap-6 py-6 shadow-md md:hidden ${
            darkMode ? "bg-[#6A1E55]" : "bg-white"
          }`}
        >
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#courses" onClick={() => setOpen(false)}>Courses</a>
          <a href="#certificates" onClick={() => setOpen(false)}>Certificates</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

          {/* Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`relative w-12 h-6 rounded-full ${
              darkMode ? "bg-[#A64D79]" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform ${
                darkMode ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>
      )}
    </nav>
  );
}