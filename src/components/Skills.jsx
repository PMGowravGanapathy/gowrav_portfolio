import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-24 py-32 bg-white dark:bg-black transition-colors duration-500"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="mb-20">
          <p className="text-gold tracking-widest text-sm mb-4">
            SKILLS
          </p>
          <h2 className="text-5xl font-light leading-tight">
            Tools, technologies &{" "}
            <span className="text-maroon font-semibold">strengths</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* UI / UX */}
          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-2xl border border-maroon/30 p-8 shadow-lg
                       bg-white dark:bg-black transition"
          >
            <h3 className="text-xl font-medium mb-4 text-gold">
              UI / UX Design
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray">
              <li>Figma</li>
              <li>User Research</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>Design Systems</li>
              <li>Interaction Design</li>
            </ul>
          </motion.div>

          {/* Frontend */}
          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-2xl border border-maroon/30 p-8 shadow-lg
                       bg-white dark:bg-black transition"
          >
            <h3 className="text-xl font-medium mb-4 text-gold">
              Frontend Development
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray">
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Responsive Design</li>
            </ul>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-2xl border border-maroon/30 p-8 shadow-lg
                       bg-white dark:bg-black transition"
          >
            <h3 className="text-xl font-medium mb-4 text-gold">
              Soft Skills
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray">
              <li>Leadership (NCC LC)</li>
              <li>Team Collaboration</li>
              <li>Creative Thinking</li>
              <li>Communication</li>
              <li>Problem Solving</li>
            </ul>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
