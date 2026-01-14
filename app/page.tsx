    "use client";

    import { useState } from "react";
    import Image from "next/image";
    import { motion } from "framer-motion";
import { link } from "fs";

    export default function Home() {
      const [darkMode, setDarkMode] = useState(false);

      return (
        <main
          className={`min-h-screen transition-colors duration-300 ${
            darkMode ? "bg-[#3B1C32] text-pink-100" : "bg-pink-50 text-gray-800"
          }`}
        >
          {/* Navbar */}
          <nav
            className={`flex items-center justify-between px-10 py-6 shadow-sm sticky top-0 z-50 transition-colors duration-300 ${
              darkMode ? "bg-[#6A1E55]" : "bg-white"
            }`}
          >
            <h1 className="text-xl font-semibold">Jessica Angela Huang</h1>

            <ul className="flex items-center gap-8 text-sm font-medium">
              <li><a className="hover:text-pink-500" href="#about">About Me</a></li>
              <li><a className="hover:text-pink-500" href="#skills">Skills</a></li>
              <li><a className="hover:text-pink-500" href="#projects">Projects</a></li>
              <li><a className="hover:text-pink-500" href="#certificates">Certificates</a></li>
              <li><a className="hover:text-pink-500" href="#contact">Contact Me</a></li>

              {/* Dark mode slider */}
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

          {/* Hero / Name Section */}
          <section className="flex min-h-[calc(100vh-96px)] items-center justify-center px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col md:flex-row items-center gap-10 max-w-4xl"
            >
              
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-40 h-40 relative"
              >
                <Image
                  src="/assets/Profile.png"
                  alt="Jessica Angela Huang"
                  fill
                  className="rounded-full object-cover"
                  priority
                />
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center md:text-left"
              >
                <h2 className="text-3xl font-bold mb-2">
                  Jessica Angela Huang
                </h2>

                <p
                  className={`text-lg font-medium mb-4 ${
                    darkMode ? "text-pink-200" : "text-pink-600"
                  }`}
                >
                  Computer Science Student
                </p>

                <p className="text-sm leading-relaxed max-w-xl">
                  Computer Science student seeking experience in an intern position.
                  Fast learner with strong communication skills, excellent teamwork,
                  and high adaptability. Experienced in handling multiple tasks under
                  pressure and maintaining a positive attitude. Technologically adept,
                  offer experience with many different media platforms. Bring a
                  positive attitude and the willingness and motivation to learn new
                  things.
                </p>
              </motion.div>

            </motion.div>
          </section>

          {/* About Me / Education */}
    <section
      id="about"
      className={`px-10 py-20 transition-colors duration-300 ${
        darkMode ? "bg-[#3B1C32]" : "bg-white"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold mb-10 text-center"
        >
          Education
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* BINUS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`rounded-2xl p-6 shadow ${
              darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
            }`}
          >
            <div className="relative w-full h-24 mb-4">
              <Image
                src="/assets/Binus.png"
                alt="Binus International University"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-semibold">
              Binus International University
            </h3>
            <p className="text-sm opacity-80">
              Jakarta, Indonesia
            </p>
            <p className="text-sm mt-2">
              Bachelor’s Degree, Computer Science
            </p>
            <p className="text-xs mt-1 opacity-70">
              2022 – 2026
            </p>
          </motion.div>

          {/* LA TROBE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`rounded-2xl p-6 shadow ${
              darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
            }`}
          >
            <div className="relative w-full h-24 mb-4">
              <Image
                src="/assets/Latrobe.png"
                alt="La Trobe University"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-semibold">
              La Trobe University
            </h3>
            <p className="text-sm opacity-80">
              Melbourne, Australia
            </p>
            <p className="text-sm mt-2">
              Bachelor’s Degree, Computer Science
            </p>
            <p className="text-xs mt-1 opacity-70">
              2022 – 2026
            </p>
          </motion.div>

          {/* UNIVERSAL SCHOOL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`rounded-2xl p-6 shadow ${
              darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
            }`}
          >
            <div className="relative w-full h-24 mb-4">
              <Image
                src="/assets/Universal.png"
                alt="Universal School Kemayoran"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-semibold">
              Universal School Kemayoran
            </h3>
            <p className="text-sm opacity-80">
              Jakarta, Indonesia
            </p>
            <p className="text-sm mt-2">
              High School – Cambridge Curriculum
            </p>
            <p className="text-xs mt-1 opacity-70">
              2015 – 2022
            </p>
          </motion.div>

        </div>
      </div>
    </section>

            {/* Skills */}
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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          {[
            ["Programming & Web", "Python, HTML, CSS, JavaScript"],
            ["Frontend Development", "ReactJS (learning), UI wireframing, responsive design"],
            ["Data & Analytics", "Power BI, Tableau, Google Colab"],
            ["Tools & Platforms", "Jira, Slack, Microsoft Teams, Google Workspace, Microsoft Office"],
            ["Design & Prototyping", "Figma, Canva, Miro, Draw.io"],
            ["APIs & Backend (Basic)", "REST APIs"],
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
      </motion.div>

      {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center">
            Experience
          </h3>

          <div className="flex justify-center">
            <div className="space-y-4 text-sm max-w-4xl w-full">
              {[
                "Collaborated with cross-functional teams to complete multiple academic and creative projects",
                "Communicated clearly with teammates to meet deadlines and maintain quality",
                "Led a group in preparing and delivering a major organisational presentation",
                "Demonstrated reliability, punctuality, and responsibility throughout project delivery",
                "Adapted quickly to new tools, instructions, and roles",
                "Participated in group-based events requiring coordination, time management, and service-oriented communication",
                "Handled multiple tasks under time pressure while staying organized and professional",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`flex gap-4 items-start rounded-2xl p-5 shadow ${
                    darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
                  }`}
                >
                  <span className="mt-1 text-pink-500">●</span>
                  <p className="opacity-90">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

                  {/* Languages + Key Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 mb-16">

              {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-6">Languages</h3>

          <div className="flex flex-wrap gap-4">
            {[
              ["English", "Native"],
              ["Indonesian", "Native"],
              ["Chinese", "Intermediate"],
            ].map(([lang, level], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`px-5 py-3 rounded-full shadow text-sm font-medium ${
                  darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
                }`}
              >
                {lang} — <span className="opacity-70">{level}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Key Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-6">Key Skills</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {[
              "Strong communication & interpersonal skills",
              "Ability to multitask in fast-paced environments",
              "Positive attitude with strong work ethic",
              "Works well independently or in a team",
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-2xl p-4 shadow ${
                  darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
                }`}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>


    </div>
  </section>

            {/* Projects */}
              <section
                id="projects"
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
                Projects
              </motion.h2>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Recykle Web App",
                    role: "Frontend Developer | Human Computer Interaction",
                    desc: "Designed and built frontend UI for an incentive-based recycling application using modern web technologies. Contributed to UX flow design and usability considerations.",
                    link: "https://www.figma.com/proto/L7oNRgCqHdEe1Z2G7RPcIK/Recykle?node-id=2-2",
                    linkLabel: "View Prototype Design →",
                    image: "/assets/Recykle.png",
                  },
                  {
                    title: "Kleanse",
                    role: "Frontend Developer | Project Hatchery",
                    desc: "Designed and built frontend UI for a cleaning service mobile app. Contributed to UX flow design and usability considerations.",
                    link: "https://www.figma.com/proto/XEUtq5uctT3yBSFs53yV2e/Kleanse---Prototype2",
                    linkLabel: "View Prototype Design →",
                    image: "/assets/Kleanse.png",
                  },
                  {
                    title: "Flower Management System",
                    role: "Developer | Data Structures",
                    desc: "Built a system to manage flower inventory using structured data handling and algorithmic logic with Java.",
                    image: "/assets/FlowerShop.png",
                    tech: ["Java"],
                    actions: [
                      {
                        label: "View Source Code",
                        link: "https://github.com/VaniaAgnes/FlowerShop-Management-System.git",
                      },
                    ],
                  },
                  {
                    title: "Grocery Management System",
                    role: "Developer | Database",
                    desc: "Database-driven Grocery Management System built with Python and MySQL.",
                    image: "/assets/GroceryStore.png",
                    tech: ["Python", "MySQL", "XAMPP"],
                    actions: [
                      {
                        label: "View Source Code",
                        link: "https://github.com/VaniaAgnes/Database-FP.git",
                      },
                    ],
                  },
                  {
                    title: "Stylofit",
                    role: "Design & Frontend Developer | Mobile Application",
                    desc: "UI/UX design and frontend for a fashion-focused social media app.",
                    image: "/assets/Stylofit.png",
                    tech: ["JavaScript", "Firebase", "Frontend", "UI/UX", "HTML", "CSS"],
                    actions: [
                      { 
                        label: "View Source Code",
                        link: "https://github.com/abasiman/stylofitApp",
                      },
                    ],
                  },
                  {
                    title: "Moralm",
                    role: "Design & Frontend Developer | Web App & Security",
                    desc: "Designed the prototype for the company’s supply chain and built the frontend for their delivery system.",
                    image: "/assets/Moralm.png",
                    tech: ["JavaScript", "Firebase", "Frontend", "UI/UX", "HTML", "CSS"],
                    actions: [
                      {
                        label: "View Source Code",
                        link: "https://github.com/JessicaAngelah/WADS-MoralmHarbor-FP-Done.git",
                      },
                    ],
                  },
                  {
                    title: "FindMyCoffee",
                    role: "Design | Professional Practices & Entrepreneurship",
                    desc: "Designed UI for an F&B mobile application.",
                    link: "https://www.figma.com/proto/LaPg4XUtCYTbk9NkitEKuw/FindMyCoffee?node-id=74-66&p=f&t=e2Xk5PgtlelRsFpG-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=74%3A66",
                    linkLabel: "View Prototype Design →",
                    image: "/assets/FindMyCoffee.png",
                  },
                  {
                    title: "Akselerasi.co",
                    role: "Design & Frontend Developer | Capstone Project",
                    desc: "UI/UX and frontend components for an HR-Tech platform.",
                    image: "/assets/Akselerasi.png",
                     tech: ["JavaScript", "Firebase", "Frontend", "UI/UX", "HTML", "CSS"],
                    actions: [
                      {
                        label: "View Source Code",
                        link: "https://github.com/ferd78/Akselerasi.coCapstone-SE-PMS.git",
                      },
                    ],
                  },
                  {
                    title: "Modeling Infection Dynamics with Antibiotic Treatment",
                    role: "Computational Biology",
                    desc: "A mathematical model simulating interactions between sensitive and resistant bacterial populations under various antibiotic treatments.",
                    image: "/assets/InfectionDynamics.png",
                    tech: ["Python", "NumPy", "Matplotlib"],
                    actions: [
                      {
                        label: "View Source Code",
                        link: "https://github.com/JessicaAngelah/CompBio-FP",
                      },
                    ],
                  },
                  {
                    title: "Density Simulation",
                    role: "Computational Physics",
                    desc: "Density-based interactive tool designed to help visualize and understand spatial behavior. Implemented in Python.",
                    image: "/assets/DensitySimulator.png",
                    tech: ["Python"],
                    actions: [
                      {
                        label: "View Source Code",
                        link: "https://github.com/VaniaAgnes/Density-Simulator",
                      },
                    ],
                  },
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className={`rounded-2xl shadow flex flex-col ${
                      darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
                    }`}
                  >
                    {/* Image */}
                    <div className="relative w-full aspect-square">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-semibold text-lg mb-1">{project.title}</h3>

                      <p className={`text-sm mb-2 ${
                        darkMode ? "text-pink-200" : "text-pink-600"
                      }`}>
                        {project.role}
                      </p>

                      <p className="text-sm opacity-90 mb-3">{project.desc}</p>

                      {/* Tech */}
                      {project.tech && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tech.map((t, i) => (
                            <span
                              key={i}
                              className="text-xs px-3 py-1 rounded-full bg-pink-200 text-pink-800"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Actions */}
                      <div className="mt-auto flex gap-3 flex-wrap">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-pink-500 hover:underline"
                          >
                            {project.linkLabel ?? "View →"}
                          </a>
                        )}

                        {project.actions?.map((action, i) => (
                          <a
                            key={i}
                            href={action.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-pink-500 hover:underline"
                          >
                            {action.label} →
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                ))}
              </div>



            </div> 
            </section>



{/* Organizations */}
<section
  id="organizations"
  className={`px-10 py-20 transition-colors duration-300 ${
    darkMode ? "bg-[#3B1C32]" : "bg-white"
  }`}
>
  <div className="max-w-4xl mx-auto">

    {/* Title */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-2xl font-semibold mb-12 text-center"
    >
      Organizations
    </motion.h2>

    {/* Organization Card */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`rounded-2xl p-8 shadow ${
        darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
      }`}
    >
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <div className="relative w-80 h-30">
          <Image
            src="/assets/GDSC.png"
            alt="Google Developer Student Club"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-1 text-center">
        Regular Member
      </h3>

      <p
        className={`text-sm mb-2 text-center ${
          darkMode ? "text-pink-200" : "text-pink-600"
        }`}
      >
        Google Developer Student Club (GDSC)
      </p>

      <p className="text-xs opacity-70 mb-4 text-center">
        Oct 2023 – Sept 2024
      </p>

      <ul className="text-sm space-y-2 max-w-md mx-auto">
        <li className="flex gap-3">
          <span className="text-pink-500">●</span>
          Attended workshops and seminars
        </li>
        <li className="flex gap-3">
          <span className="text-pink-500">●</span>
          Connected with fellow regular and core members
        </li>
      </ul>
    </motion.div>

  </div>
</section>



        {/* Certificates */}
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

      {[
        {
          title: "Career Camp Seminar Series – BINUS",
          image: "/assets/BFI1.png",
          desc: "How to Prepare Your Career Plan — focused on early career planning and goal setting.",
        },
        {
          title: "Career Camp Seminar Series – BINUS",
          image: "/assets/BFI2.png",
          desc: "Anatomy of Work Ethic: The Hidden Key to Success — discussed professionalism and mindset.",
        },
        {
          title: "Career Camp Seminar Series – BINUS",
          image: "/assets/BFI3.png",
          desc: "Casual Sharing About Prospective Career — industry insights and career pathways.",
        },
        {
          title: "Career Camp Seminar Series – BINUS",
          image: "/assets/BFI4.png",
          desc: "The Importance of Personal Branding for Your Career — building a professional identity.",
        },
        {
          title: "Career Camp Seminar Series – BINUS",
          image: "/assets/BFI5.png",
          desc: "Emerging Careers in Blockchain — explored skills, trends, and future opportunities.",
        },
        {
          title: "HackerRank Java (Basic)",
          image: "/assets/Hackerrank.png",
          desc: "Successfully passed the Java (Basic) skill assessment on HackerRank (28 Mar 2023).",
        },
        {
          title: "GitHub 101 Workshop – Robogals",
          image: "/assets/Robogals.png",
          desc: "Attended GitHub 101 workshop covering version control fundamentals.",
        },
        {
          title: "World Youth Skills Day",
          image: "/assets/WorldYouth.png",
          desc: "Focused on transforming youth skills for the future aligned with Sustainable Development Goals.",
        },
        {
          title: "Build Your First Mobile App with Flutter",
          image: "/assets/Flutter.png",
          desc: "Hands-on introduction to building mobile applications using Flutter.",
        },
      ].map((cert, index) => (
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
          {/* Image */}
          <div className="relative w-full aspect-square">
            <Image
              src={cert.image}
              alt={cert.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-5 text-center">
            <h3 className="text-sm font-semibold mb-2">
              {cert.title}
            </h3>
            <p className="text-xs opacity-80 leading-relaxed">
              {cert.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

{/* Achievement */}
<div className="mt-16 max-w-sm mx-auto">
  <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-2xl font-semibold mb-12 text-center"
    >
      Achievements
    </motion.h2>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className={`rounded-2xl shadow overflow-hidden ${
      darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
    }`}
  >
    {/* Image */}
    <div className="relative w-full aspect-square">
      <Image
        src="/assets/Achievement1.png"
        alt="Favorite Winner Innovation is Our Middle Name Competition"
        fill
        className="object-cover"
      />
    </div>

    {/* Text */}
    <div className="p-5 text-center">
      <h3 className="text-sm font-semibold mb-2">
        ⭐ Favorite Winner
      </h3>
      <p className="text-xs opacity-80 leading-relaxed">
        “Innovation is Our Middle Name” Competition <br />
        <span className="opacity-70">(Project Hatchery)</span>
      </p>
    </div>
  </motion.div>
</div>


    </div>
  </section>

          

          
{/* Contact Me */}
<section
  id="contact"
  className={`px-10 py-20 transition-colors duration-300 ${
    darkMode ? "bg-[#3B1C32]" : "bg-white"
  }`}
>
  <div className="max-w-4xl mx-auto text-center">

    {/* Title */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-2xl font-semibold mb-10"
    >
      Contact Me
    </motion.h2>

    {/* Contact Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">

      {/* Phone */}
      <div
        className={`rounded-2xl p-6 shadow text-sm ${
          darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
        }`}
      >
        📞 <span className="font-medium">Phone</span>
        <p className="mt-1 opacity-80">+62-812-8203-8877</p>
      </div>

      {/* Email */}
      <div
        className={`rounded-2xl p-6 shadow text-sm ${
          darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
        }`}
      >
        ✉️ <span className="font-medium">Email</span>
        <p className="mt-1 opacity-80">jessicaah2826@gmail.com</p>
      </div>

      {/* Location */}
      <div
        className={`rounded-2xl p-6 shadow text-sm ${
          darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
        }`}
      >
        📍 <span className="font-medium">Location</span>
        <p className="mt-1 opacity-80">North Jakarta, Indonesia</p>
      </div>

      {/* LinkedIn */}
      <div
        className={`rounded-2xl p-6 shadow text-sm ${
          darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
        }`}
      >
        💼 <span className="font-medium">LinkedIn</span>
        <p className="mt-1">
          <a
            href="https://www.linkedin.com/in/jessicaah287/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline"
          >
            linkedin.com/in/jessicaah287
          </a>
        </p>
      </div>

      {/* GitHub */}
        <div
          className={`rounded-2xl p-6 shadow text-sm sm:col-span-2 flex justify-center ${
            darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
          }`}
        >
          <div className="text-center">
            🐱 <span className="font-medium">GitHub</span>
            <p className="mt-1">
              <a
                href="https://github.com/jessicaangelah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:underline"
              >
                github.com/jessicaangelah
              </a>
            </p>
          </div>
        </div>


    </div>

    {/* Resume Download */}
    <motion.a
      href="/assets/JessicaAH-Resume.pdf"
      download
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="inline-block px-8 py-3 rounded-full font-medium shadow bg-pink-500 text-white hover:bg-pink-600 transition"
    >
      Download Resume
    </motion.a>


  </div>
</section>

          



        </main>
      );
    }
