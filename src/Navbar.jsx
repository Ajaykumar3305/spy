import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-gray-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.span
            className="text-2xl font-bold text-amber-300 cursor-pointer"
            onClick={() => scrollToSection("hero")}
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            Portfolio
          </motion.span>
          <div className="hidden md:flex space-x-6">
            {["hero", "about", "skills", "projects", "contact"].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-200 hover:text-emerald-300 px-3 py-2 text-sm font-medium"
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.button>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-200 p-2">
              <div className="w-6 h-6 relative">
                <span className={`absolute h-0.5 w-full bg-gray-200 transform transition duration-300 ${isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"}`} />
                <span className={`absolute h-0.5 w-full bg-gray-200 transform transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
                <span className={`absolute h-0.5 w-full bg-gray-200 transform transition duration-300 ${isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"}`} />
              </div>
            </button>
          </div>
        </div>
      </div>
      <motion.div
        className={`md:hidden bg-gray-900/90 backdrop-blur-md ${isOpen ? "max-h-64" : "max-h-0"} overflow-hidden`}
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {["hero", "about", "skills", "projects", "contact"].map((item) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-gray-200 hover:text-emerald-300 block px-3 py-2 text-base font-medium w-full text-left"
              whileHover={{ opacity: 0.8 }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </nav>
  );
}