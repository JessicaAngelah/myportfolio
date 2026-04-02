"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectsProps {
  darkMode: boolean;
}

export default function Projects({ darkMode }: ProjectsProps) {
  const projects = [
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
      desc: "Designed the prototype for the company’s supply chain and built the frontend for their delivery system & Settings.",
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
      tech: ["JavaScript", "Firebase", "Frontend", "UI/UX", "HTML", "CSS", "TypeScript"],
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
    {
      title: "ANTAM Stock Price Prediction",
      role: "Machine Learning | Time Series Forecasting",
      desc: "Built and compared XGBoost and Random Forest to predict ANTAM stock prices. Implemented buy/sell signal generation based on predicted returns and evaluated performance using backtesting strategies.",
      image: "/assets/MLStockPrediction.png",
      tech: ["Python", "XGBoost", "Random Forest", "Pandas", "NumPy", "Matplotlib"],
      actions: [
        {
          label: "View Source Code",
          link: "https://github.com/JessicaAngelah/MLStockPrediction-usingXGBoost-RandomForest.git",
        },
      ],
    },
    {
      title: "To-Do List Web App",
      role: "Frontend Developer",
      desc: "A responsive to-do list web application that allows users to add, complete, and delete tasks. Deployed using Vercel with a clean and intuitive UI.",
      image: "/assets/ToDoList.png",
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
      image: "/assets/FSM.png",
      tech: ["C", "Finite State Machine", "Logic Design"],
      actions: [
        {
          label: "View Source Code",
          link: "https://github.com/JessicaAngelah/FSM-VirtualFinalProject-Optional.git",
        },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className={`px-10 py-20 transition-colors duration-300 ${
        darkMode ? "bg-[#291B25]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
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

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold text-base mb-1">
                  {project.title}
                </h3>

                <p className={`text-xs mb-2 ${darkMode ? "text-pink-200" : "text-pink-600"}`}>
                  {project.role}
                </p>

                <p className="text-xs opacity-90 mb-3">
                  {project.desc}
                </p>

                {project.tech && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-1 rounded-full bg-pink-200 text-pink-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-xs font-medium text-pink-500 hover:underline"
                  >
                    {project.linkLabel}
                  </a>
                )}

                {project.actions && (
                  <div className="mt-auto flex flex-col gap-1">
                    {project.actions.map((action, i) => (
                      <a
                        key={i}
                        href={action.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-pink-500 hover:underline"
                      >
                        {action.label} →
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
