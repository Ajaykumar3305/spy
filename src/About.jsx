import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import pic from './images/spy.jpg';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [isInView, controls]);

  return (
    <section id="about" className="py-24 px-4 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-amber-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="flex-shrink-0"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img
              src={pic}
              alt="Ajay Kumar"
              className="w-80 h-80 object-cover rounded-lg border-2 border-gray-800 shadow-lg"
            />
          </motion.div>
          <motion.div
            ref={ref}
            className="bg-gray-900 p-8 rounded-lg shadow-lg flex-1 border border-gray-800"
            initial={{ opacity: 0, x: 100 }}
            animate={controls}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-200 text-lg mb-4 leading-relaxed">
              I'm B.V.M.Santosh kumar, a B.Tech student and dedicated developer with a passion for creating robust web applications and mastering new technologies.
            </p>
            <p className="text-gray-200 text-lg mb-4 leading-relaxed">
              My expertise includes Java, React, Spring Framework and MongoDB. I thrive on solving complex problems and continuously enhancing my skill set through hands-on experience.
            </p>
            <p className="text-gray-200 text-lg leading-relaxed">
              Beyond coding, I enjoy playing basketball and listening to music. I am eager to collaborate on innovative projects and contribute to impactful solutions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}