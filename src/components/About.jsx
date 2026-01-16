import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-dark text-white px-24 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24"
      >

        {/* LEFT STORY */}
        <div>
          <p className="text-gold tracking-widest mb-3 text-sm">
            ABOUT ME
          </p>

          <h2 className="text-5xl font-light mb-8 leading-tight">
            Designing with <span className="text-maroon font-semibold">purpose</span><br />
            and empathy
          </h2>

          <p className="text-gray text-lg mb-6 leading-relaxed">
            I am PM Gowrav Ganapathy, a passionate UI/UX designer focused on creating
            meaningful, accessible, and visually refined digital experiences.
          </p>

          <p className="text-gray text-lg mb-6 leading-relaxed">
            My design approach blends user research, interaction design, and visual
            storytelling to build products that people love to use.
          </p>

          <p className="text-gray text-lg leading-relaxed">
            I believe great design is not just how it looks, but how it works.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-2 gap-10">

          <div className="bg-black rounded-2xl p-8 border border-maroon/30 shadow-lg">
            <p className="text-gold text-sm mb-2">EDUCATION</p>
            <p className="text-xl font-medium"> St Joseph Engineering College</p>
            <p className="text-gray text-sm"> CSE - CGPA: 9.32</p>
          </div>

          <div className="bg-black rounded-2xl p-8 border border-maroon/30 shadow-lg">
            <p className="text-gold text-sm mb-2">ROLE</p>
            <p className="text-xl font-medium">UI / UX Designer</p>
            <p className="text-gray text-sm">Design Systems, UX Research</p>
          </div>

          <div className="bg-black rounded-2xl p-8 border border-maroon/30 shadow-lg">
            <p className="text-gold text-sm mb-2">TOOLS</p>
            <p className="text-xl font-medium">Figma</p>
            <p className="text-gray text-sm">Prototyping & Wireframing</p>
          </div>

          <div className="bg-black rounded-2xl p-8 border border-maroon/30 shadow-lg">
            <p className="text-gold text-sm mb-2">LANGUAGES</p>
            <p className="text-xl font-medium">English, Hindi, Kannada</p>
            <p className="text-gray text-sm">Communication & Collaboration</p>
          </div>

        </div>

      </motion.div>
    </section>
  );
}
