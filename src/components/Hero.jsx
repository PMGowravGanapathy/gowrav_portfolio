import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "UI / UX Designer",
  "Creative Problem Solver",
  "Frontend Enthusiast"
];

export default function Hero() {

  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing animation
  useEffect(() => {
    const current = roles[roleIndex];

    if (!deleting && charIndex === current.length) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCharIndex(prev => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 90);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="
        relative min-h-screen bg-black text-white overflow-hidden
        flex items-center
        pt-28 md:pt-0
        px-6 sm:px-10 md:px-16 lg:px-24
      "
    >

      {/* Background glow */}
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] md:w-[600px] md:h-[600px]
                   bg-maroon/20 blur-[200px] top-[-150px] left-[-150px] rounded-full"
      />
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px]
                   bg-gold/10 blur-[200px] bottom-[-150px] right-[-150px] rounded-full"
      />

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 w-full items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <p className="tracking-widest text-gold text-xs sm:text-sm mb-4">
            {roles[roleIndex].slice(0, charIndex)}
            <span className="animate-pulse">|</span>
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
            PM{" "}
            <span className="bg-gradient-to-r from-maroon via-gold to-maroon bg-clip-text text-transparent font-semibold">
              Gowrav
            </span>
            <br />
            Ganapathy
          </h1>

          <p className="text-gray text-base sm:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
            Designing meaningful, interactive and user-centered digital experiences
            that connect emotion with usability.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">

            <a
              href="/P M Gowrav Ganapathy - Resume.pdf"
              download
              className="bg-maroon px-8 py-3 rounded-full text-white
                         hover:scale-105 hover:shadow-[0_0_25px_rgba(128,0,0,0.6)]
                         transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-gold text-gold px-8 py-3 rounded-full
                         hover:bg-gold hover:text-black hover:scale-105
                         hover:shadow-[0_0_25px_rgba(212,175,154,0.6)]
                         transition"
            >
              Contact Me
            </a>

            <a
              href="/Extracurricular"
              className="border border-maroon text-maroon px-6 py-3 rounded-full
                         hover:bg-maroon hover:text-white transition
                         flex items-center justify-center gap-2"
            >
              ✨ Beyond Code
            </a>

          </div>

          {/* Scroll indicator — NOW VISIBLE ON MOBILE */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="mt-12 text-gold text-sm"
          >
            ↓ Scroll
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center mt-10 md:mt-0"
        >
          <div className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px]
                          lg:w-[380px] lg:h-[380px]
                          border border-maroon/40 rounded-full blur-sm" />

          <img
            src="/profile.png"
            alt="PM Gowrav"
            className="w-[240px] sm:w-[300px] lg:w-[360px]
                       relative z-10
                       drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]
                       hover:scale-105 transition"
          />
        </motion.div>

      </div>
    </section>
  );
}
