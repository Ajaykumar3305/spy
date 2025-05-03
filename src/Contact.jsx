import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaLinkedin, FaInstagram, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [isInView, controls]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const subject = encodeURIComponent("Contact Form Submission from Portfolio");
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    const mailtoLink = `mailto:bonugusantosh@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-br from-gray-950 to-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-amber-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Get In Touch
        </motion.h2>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, x: -100 }}
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800">
            <h3 className="text-xl font-semibold text-gray-200 mb-4">Contact Information</h3>
            <div className="space-y-4">
              <motion.div className="flex items-center space-x-3" whileHover={{ opacity: 0.8 }}>
                <FaPhone className="text-emerald-300 text-xl" />
                <a href="tel:+918328344431" className="text-gray-200 hover:text-emerald-300">+91 7780310058</a>
              </motion.div>
              <motion.div className="flex items-center space-x-3" whileHover={{ opacity: 0.8 }}>
                <FaMapMarkerAlt className="text-emerald-300 text-xl" />
                <span className="text-gray-200">Visakhapatnam, India</span>
              </motion.div>
              <motion.div className="flex items-center space-x-3" whileHover={{ opacity: 0.8 }}>
                <FaLinkedin className="text-emerald-300 text-xl" />
                <a href="https://www.linkedin.com/in/b-v-m-santhosh-kumar-5332a6291/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-emerald-300">LinkedIn</a>
              </motion.div>
              <motion.div className="flex items-center space-x-3" whileHover={{ opacity: 0.8 }}>
                <FaInstagram className="text-emerald-300 text-xl" />
                <a href="https://www.instagram.com/_s_p_y__" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-emerald-300">Instagram</a>
              </motion.div>
            </div>
          </div>
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800">
              <div className="mb-6 relative">
                <label htmlFor="name" className={`absolute left-0 top-2 text-gray-400 text-sm transition-all duration-300 ${formData.name ? "-top-5 text-xs" : ""}`}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border-b border-gray-600 px-3 py-3 text-gray-200 focus:outline-none focus:border-emerald-300 rounded-sm"
                />
              </div>
              <div className="mb-6 relative">
                <label htmlFor="email" className={`absolute left-0 top-2 text-gray-400 text-sm transition-all duration-300 ${formData.email ? "-top-5 text-xs" : ""}`}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border-b border-gray-600 px-3 py-3 text-gray-200 focus:outline-none focus:border-emerald-300 rounded-sm"
                />
              </div>
              <div className="mb-6 relative">
                <label htmlFor="message" className={`absolute left-0 top-2 text-gray-400 text-sm transition-all duration-300 ${formData.message ? "-top-5 text-xs" : ""}`}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-gray-800 border-b border-gray-600 px-3 py-3 text-gray-200 focus:outline-none focus:border-emerald-300 rounded-sm"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`bg-emerald-300 text-gray-900 px-4 py-2 rounded-md font-semibold ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-emerald-200"}`}
                whileHover={{ opacity: 0.8 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
              {submitStatus === "success" && (
                <motion.div
                  className="mt-3 text-center text-green-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Message sent successfully!
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}