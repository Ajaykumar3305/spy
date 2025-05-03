import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import res from './images/res.jpg';
import todo from './images/todo.png';
import delay from './images/delay.jpg';
import travel from './images/travel.jpg';

export default function Projects() {
  const projects = [
    {
      title: "Restaurant Finder",
      description: "A React-based web app to search for restaurants by location, view details, and filter results, using APIs for real-time data.",
      //github: "https://github.com/santosh-3120/restaurant-finder",
      liveLink: "https://client-1gp5.onrender.com/",
      image: res,
    },
    {
      title: "Advanced To-Do List",
      description: "A feature-rich to-do list application with task filtering, progress tracking, and dark mode.",
      //github: "https://github.com/santosh-3120/todo-list",
      liveLink: "https://todolist-teal-pi-84.vercel.app/",
      image: todo,
    },
    {
      title: "Delay Management System",
      description: "A Spring Boot-based system to track and analyze machine delays using SQL and REST APIs.",
      github: "https://github.com/santosh-3120/Final",
     // liveLink: "https://client-1gp5.onrender.com/",
      image: delay,
    },
    {
      title: "Travelling Tales",
      description: "A MERN stack platform for booking flights and hotels with JWT authentication and MongoDB storage.",
      github: "https://github.com/neeraj10122004/AcrossIndia",
      //liveLink: "https://todolist-teal-pi-84.vercel.app/",
      image: travel,
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  return (
    <section id="projects" className="py-24 px-4 bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-amber-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800 hover:shadow-xl hover:border-emerald-300 transition-all duration-300"
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4 hover:brightness-110 transition-all duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              <h3 className="text-xl font-semibold text-gray-200 mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex items-center space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-200 hover:text-emerald-300"
                >
                  <FaGithub className="text-xl" />
                  <span>GitHub</span>
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-200 hover:text-emerald-300"
                >
                  <FaExternalLinkAlt className="text-xl" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
