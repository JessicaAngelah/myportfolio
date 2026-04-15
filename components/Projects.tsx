"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { link } from "fs";

interface ProjectsProps {
  darkMode: boolean;
}

export default function Projects({ darkMode }: ProjectsProps) {
  const projects = [
    {
      title: "Akselerasi.co",
      role: "Frontend Developer & Design | Capstone Project",
      desc: "Built an AI-powered HR platform for fair, data-driven employee evaluations. Led frontend development and UI/UX design, while managing project coordination and stakeholder communication. Improved evaluation transparency and reduced bias through structured scoring.",
      image: "/assets/Projects/Akselerasi.png",
      tech: ["JavaScript", "Firebase", "Frontend", "UI/UX", "HTML", "CSS", "TypeScript"],
      actions: [
        {
          label: "View Source Code",
          link: "https://github.com/ferd78/Akselerasi.coCapstone-SE-PMS.git",
        },
      ],
    },
    {
      title: "Moralm",
      role: "Design & Frontend Developer | Web Application Development & Security",
      desc: "Built a role-based web app to digitize the moringa supply chain with real-time tracking. Developed Harbor interface and contributed to central dashboard, focusing on responsive UI and API integration. Improved efficiency, transparency, and cross-team collaboration.",
      image: "/assets/Projects/Moralm.png",
      tech: ["JavaScript", "Firebase", "Frontend", "UI/UX", "HTML", "CSS"],
      actions: [
        {
          label: "View Source Code",
          link: "https://github.com/JessicaAngelah/WADS-MoralmHarbor-FP-Done.git",
        },
        {
          label:"View Harbor Live Link",
          link: "https://harbor-moralm.vercel.app/",
        },
      ],
    },
    {
      title: "Stylofit",
      role: "Design & Frontend Developer | Mobile Application",
      desc: "Created a fashion app to discover outfits and locate similar items in nearby stores. Led idea, UI/UX design, and frontend development using React Native. Combined social inspiration with location-based shopping to solve everyday outfit decisions.",
      image: "/assets/Projects/Stylofit.png",
      tech: ["JavaScript", "Firebase", "Frontend", "UI/UX", "HTML", "CSS"],
      actions: [
        {
          label: "View Prototype Design",
          link: "https://www.figma.com/proto/vSUjAvxbm2DzSxUpcdEBT4/MobAppDev?node-id=2-3&p=f&t=nzR0MfpGmIrhozKA-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A3&show-proto-sidebar=1",
        },
        {
          label: "View Source Code",
          link: "https://github.com/abasiman/stylofitApp",
        },
      ],
    },
    {
      title: "Recykle Web App",
      role: "Frontend Developer | Human Computer Interaction",
      desc: "Designed and built frontend UI for an incentive-based recycling application using modern web technologies.Contributed to concept, UI/UX design, and prototyping, combining gamification with real-world environmental impact.",
      link: "https://www.figma.com/proto/L7oNRgCqHdEe1Z2G7RPcIK/Recykle?node-id=2-2",
      linkLabel: "View Prototype Design →",
      image: "/assets/Projects/Recykle.png",
    },
    {
      title: "Kleanse",
      role: "Frontend Developer | Project Hatchery",
      desc: "Designed a service app to simplify booking and managing cleaning services. Focused on UI/UX and frontend to create a seamless experience for scheduling and tracking. Won Favorite Winner at “Innovation is Our Middle Name” (Project Hatchery) and advanced as a finalist.",
      link: "https://www.figma.com/proto/XEUtq5uctT3yBSFs53yV2e/Kleanse---Prototype2",
      linkLabel: "View Prototype Design →",
      image: "/assets/Projects/Kleanse.png",
    },
    {
      title: "ANTAM Stock Price Prediction",
      role: "Machine Learning | Time Series Forecasting",
      desc: "Built and compared XGBoost and Random Forest to predict ANTAM stock prices. Implemented buy/sell signal generation based on predicted returns and evaluated performance using backtesting strategies.",
      image: "/assets/Projects/MLStockPrediction.png",
      tech: ["Python", "XGBoost", "Random Forest", "Pandas", "NumPy", "Matplotlib"],
      actions: [
        {
          label: "View Source Code",
          link: "https://github.com/JessicaAngelah/MLStockPrediction-usingXGBoost-RandomForest.git",
        },
      ],
    },
    {
      title: "Grocery Management System",
      role: "Developer | Database",
      desc: "Database-driven Grocery Management System built with Python and MySQL.",
      image: "/assets/Projects/GroceryStore.png",
      tech: ["Python", "MySQL", "XAMPP"],
      actions: [
        {
          label: "View Source Code",
          link: "https://github.com/VaniaAgnes/Database-FP.git",
        },
      ],
    },
    {
      title: "FindMyCoffee",
      role: "Design | Professional Practices & Entrepreneurship",
      desc: "Designed UI for an F&B mobile application.",
      link: "https://www.figma.com/proto/LaPg4XUtCYTbk9NkitEKuw/FindMyCoffee?node-id=74-66&p=f&t=e2Xk5PgtlelRsFpG-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=74%3A66",
      linkLabel: "View Prototype Design →",
      image: "/assets/Projects/FindMyCoffee.png",
    },
    {
      title: "Modeling Infection Dynamics with Antibiotic Treatment",
      role: "Computational Biology",
      desc: "A mathematical model simulating interactions between sensitive and resistant bacterial populations under various antibiotic treatments.",
      image: "/assets/Projects/InfectionDynamics.png",
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
      image: "/assets/Projects/DensitySimulator.png",
      tech: ["Python"],
      actions: [
        {
          label: "View Source Code",
          link: "https://github.com/VaniaAgnes/Density-Simulator",
        },
      ],
    },
    {
      title: "Flower Management System",
      role: "Developer | Data Structures",
      desc: "Built a system to manage flower inventory using structured data handling and algorithmic logic with Java.",
      image: "/assets/Projects/FlowerShop.png",
      tech: ["Java"],
      actions: [
        {
          label: "View Source Code",
          link: "https://github.com/VaniaAgnes/FlowerShop-Management-System.git",
        },
      ],
    },
    {
      title: "To-Do List Web App",
      role: "Frontend Developer",
      desc: "A responsive to-do list web application that allows users to add, complete, and delete tasks. Deployed using Vercel with a clean and intuitive UI.",
      image: "/assets/Projects/Todolist.png",
      tech: ["JavaScript", "HTML", "CSS"],
      actions: [
        {
          label: "Live Demo",
          link: "https://to-do-list-app-ten-beige.vercel.app/",
        },
        {
          label: "View Source Code",
          link: "https://github.com/JessicaAngelah/ToDoListApp.git",
        },
      ],
    },
    {
      title: "Alarm Clock Finite State Machine (FSM)",
      role: "Developer | Embedded Systems & Logic Design",
      desc: "Implemented an Alarm Clock system using a Finite State Machine (FSM) in C.",
      image: "/assets/Projects/FSM.png",
      tech: ["C", "Finite State Machine", "Logic Design"],
      actions: [
        {
          label: "View Source Code",
          link: "https://github.com/JessicaAngelah/FSM-VirtualFinalProject-Optional.git",
        },
      ],
    },
  ];

  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // RESPONSIVE ITEMS COUNT
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) setItemsPerPage(1); // mobile
      else if (window.innerWidth < 1024) setItemsPerPage(2); // tablet
      else setItemsPerPage(5); // desktop
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  const maxPage = Math.ceil(projects.length / itemsPerPage) - 1;

  const nextPage = () => page < maxPage && setPage(page + 1);
  const prevPage = () => page > 0 && setPage(page - 1);

  const visibleProjects = projects.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <section
      id="projects"
      className={`px-6 sm:px-10 py-20 ${
        darkMode ? "bg-[#291B25]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-12 text-center">
          Projects
        </h2>

        {/* SLIDER */}
        <div className="flex items-center gap-4">
          
          {/* LEFT BUTTON */}
          <button
            onClick={prevPage}
            disabled={page === 0}
            className={`hidden sm:flex items-center justify-center w-12 h-12 rounded-full shadow-md transition
              ${
                darkMode
                  ? "bg-[#6A1E55] text-white"
                  : "bg-pink-100 text-pink-600"
              }
              hover:scale-110 hover:shadow-lg disabled:opacity-30`}
          >
            ←
          </button>

          {/* CARDS */}
          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={page}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
              >
                {visibleProjects.map((project, index) => (
                  <div
                    key={index}
                    className={`rounded-2xl shadow flex flex-col ${
                      darkMode ? "bg-[#6A1E55]" : "bg-pink-50"
                    }`}
                  >
                    <div className="relative w-full aspect-square">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover rounded-t-2xl"
                      />
                    </div>

                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="text-sm font-semibold mb-1">
                        {project.title}
                      </h3>

                      <p className={`text-xs mb-2 ${
                        darkMode ? "text-pink-200" : "text-pink-600"
                      }`}>
                        {project.role}
                      </p>

                      <p className="text-xs opacity-90 mb-3">
                        {project.desc}
                      </p>

                      {project.tech && (
                        <div className="flex flex-wrap gap-1 mb-2">
                          {project.tech.map((t, i) => (
                            <span
                              key={i}
                              className="text-[9px] px-2 py-1 rounded-full bg-pink-200 text-pink-800"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}

                    <div className="mt-auto flex flex-col gap-1">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          className="text-xs text-pink-500 hover:underline"
                        >
                          {project.linkLabel}
                        </a>
                      )}

                      {project.actions &&
                        project.actions.map((a, i) => (
                          <a
                            key={i}
                            href={a.link}
                            target="_blank"
                            className="text-xs text-pink-500 hover:underline"
                          >
                            {a.label} →
                          </a>
                        ))}
                    </div>
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
            className={`hidden sm:flex items-center justify-center w-12 h-12 rounded-full shadow-md transition
              ${
                darkMode
                  ? "bg-[#6A1E55] text-white"
                  : "bg-pink-100 text-pink-600"
              }
              hover:scale-110 hover:shadow-lg disabled:opacity-30`}
          >
            →
          </button>
        </div>
        {/* CTA BUTTON */}
        <div className="flex justify-center mt-12">
          <a
            href="#"
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-md
              ${
                darkMode
                  ? "bg-[#6A1E55] text-white"
                  : "bg-pink-100 text-pink-600"
              }
              hover:scale-105 hover:shadow-lg`}
          >
            Check out my blog for more! 📚💗 (coming soon✨)
          </a>
        </div>
      </div>
    </section>
  );
}