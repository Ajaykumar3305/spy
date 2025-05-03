import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const phrases = ["I'm a Competitive Programmer", "I'm a Web Developer"];
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [isInView, controls]);

  useEffect(() => {
    let timer;
    const currentPhrase = phrases[phraseIndex];

    if (isTyping) {
      if (text !== currentPhrase) {
        timer = setTimeout(() => setText(currentPhrase.slice(0, text.length + 1)), 100);
      } else {
        timer = setTimeout(() => setIsTyping(false), 1500);
      }
    } else {
      if (text === "") {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      } else {
        timer = setTimeout(() => setText(text.slice(0, text.length - 1)), 50);
      }
    }
    return () => clearTimeout(timer);
  }, [text, isTyping, phraseIndex]);

  return (
    <section id="hero" className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 to-gray-900 relative overflow-hidden">
      <motion.div
        ref={ref}
        className="text-center text-gray-100 z-10 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-amber-300"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, type: "spring" }}
        >
          B.V.M.Santhosh kumar
        </motion.h1>
        <p className="text-2xl md:text-3xl mb-8 font-light text-gray-400">
          {text}
          <span className="animate-pulse">|</span>
        </p>
        <motion.button
          onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
          className="bg-emerald-300 text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-emerald-200 transition-all"
          whileHover={{ opacity: 0.8 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore More
        </motion.button>
        <div className="mt-8 flex justify-center space-x-6">
          <motion.a
            href="https://github.com/santosh-3120"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 text-3xl"
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/b-v-m-santhosh-kumar-5332a6291/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 text-3xl"
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <FaLinkedin />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}