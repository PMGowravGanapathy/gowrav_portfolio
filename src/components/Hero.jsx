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
      className="relative min-h-screen bg-black text-white flex items-center px-24 overflow-hidden"
    >

      {/* Background glow */}
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] bg-maroon/20 blur-[200px] top-[-100px] left-[-100px] rounded-full"
      />
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-gold/10 blur-[200px] bottom-[-100px] right-[-100px] rounded-full"
      />

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-24 items-center w-full">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="tracking-widest text-gold text-sm mb-4">
            {roles[roleIndex].slice(0, charIndex)}
            <span className="animate-pulse">|</span>
          </p>

          <h1 className="text-6xl leading-tight font-light mb-6">
            PM{" "}
            <span className="bg-gradient-to-r from-maroon via-gold to-maroon bg-clip-text text-transparent font-semibold ">
              Gowrav
            </span>
            <br />
            Ganapathy
          </h1>

          <p className="text-gray text-lg max-w-xl leading-relaxed">
            Designing meaningful, interactive and user-centered digital experiences
            that connect emotion with usability.
          </p>

          <div className="mt-12 flex gap-6 flex-wrap">

            <a
              href="/Gowrav-Resume.pdf"
              download
              className="bg-maroon px-8 py-3 rounded-full text-white hover:scale-105 hover:shadow-[0_0_25px_rgba(128,0,0,0.6)] transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-gold text-gold px-8 py-3 rounded-full hover:bg-gold hover:text-black hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,154,0.6)] transition"
            >
              Contact Me
            </a>

            <a
              href="/Extracurricular"
              className="border border-maroon text-maroon px-6 py-3 rounded-full hover:bg-maroon hover:text-white transition flex items-center gap-2"
            >
              ✨ Beyond Code
            </a>

          </div>

          {/* Scroll indicator */}
          <div className="mt-14 text-gold text-sm animate-bounce">
            ↓ Scroll
          </div>
        </motion.div>

        {/* RIGHT IMAGE (STATIC NOW) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Glow ring */}
          <div className="absolute w-[380px] h-[380px] border border-maroon/40 rounded-full blur-sm"></div>

          <img
            src="/profile.png"
            alt="PM Gowrav"
            className="w-[360px] relative z-10 drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)] hover:scale-105 transition"
          />
        </motion.div>

      </div>
      
    </section>
  );
}
