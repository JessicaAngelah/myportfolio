"use client";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  return (
    <nav
      className={`flex items-center justify-between px-10 py-6 shadow-sm sticky top-0 z-50 transition-colors duration-300 ${
        darkMode ? "bg-[#6A1E55]" : "bg-white"
      }`}
    >
      <h1 className="text-xl font-semibold">
        Jessica Angela Huang
      </h1>

      <ul className="flex items-center gap-8 text-sm font-medium">
        <li>
          <a className="hover:text-pink-500" href="#about">
            About Me
          </a>
        </li>
        <li>
          <a className="hover:text-pink-500" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="hover:text-pink-500" href="#projects">
            Projects
          </a>
        </li>
        <li>
          <a className="hover:text-pink-500" href="#certificates">
            Certificates
          </a>
        </li>
        <li>
          <a className="hover:text-pink-500" href="#contact">
            Contact Me
          </a>
        </li>

        {/* Dark Mode Toggle */}
        <li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
              darkMode ? "bg-[#A64D79]" : "bg-gray-300"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-300 ${
                darkMode ? "translate-x-6" : ""
              }`}
            />
          </button>
        </li>
      </ul>
    </nav>
  );
}
