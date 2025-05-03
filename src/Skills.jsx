import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaJsSquare, FaReact, FaCss3Alt, FaHtml5, FaNodeJs, FaGitAlt, FaJava, FaDatabase } from "react-icons/fa";

export default function Skills() {
  const skills = [
    { name: "JavaScript", icon: <FaJsSquare className="text-5xl text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-5xl text-cyan-400" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-5xl text-blue-400" /> },
    { name: "HTML", icon: <FaHtml5 className="text-5xl text-orange-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-5xl text-green-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-5xl text-orange-600" /> },
    { name: "Java", icon: <FaJava className="text-5xl text-red-400" /> },
    { name: "MongoDB", icon: <FaDatabase className="text-5xl text-green-600" /> },
    // Spring Boot icon added here using image URL
    { name: "Spring Boot", icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1RNgloYivDxu-m0uthmQb78H2ULQhv94GZw&s" alt="Spring Boot Logo" className="w-12 h-12" /> },
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
    <section id="skills" className="py-24 px-4 bg-gradient-to-br from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-amber-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h2>
        <motion.div
          ref={ref}
          className="flex overflow-x-auto space-x-6 pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col items-center border border-gray-800 hover:shadow-xl hover:border-emerald-300 transition-all duration-300 snap-center"
            >
              {skill.icon}
              <h3 className="text-lg font-semibold mt-4 text-gray-200">{skill.name}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
