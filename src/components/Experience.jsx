import { motion } from "framer-motion";

const experiences = [
  {
    role: "UI/UX Design Intern",
    company: "Experimind Labs",
    duration: "June 2025 – July 2025",
    description: [
      "Led a design team in creating high-fidelity website prototypes using Figma for client Torq.",
      "Developed responsive user interfaces using React, Next.js, and JavaScript.",
      "Refined UI/UX through iterative feedback and delivered a polished, client-ready solution."
    ],
    tech: ["Figma", "React", "Next.js", "JavaScript", "MongoDB"]
  },
  {
    role: "Creative Team Volunteer",
    company: "TEDx SJEC",
    duration: "2024",
    description: [
      "Worked as part of the creative team to design event visuals and digital assets.",
      "Collaborated with cross-functional teams to maintain brand consistency."
    ],
    tech: ["Canva", "Figma", "Design Systems"]
  },
  {
    role: "Senior Cadet (Leading Cadet)",
    company: "Naval NCC Wing",
    duration: "2022 – 2025",
    description: [
      "Completed NCC ‘A’, ‘B’, and ‘C’ certificates.",
      "Demonstrated leadership, discipline, and teamwork through training and camps."
    ],
    tech: ["Leadership", "Teamwork", "Discipline"]
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        bg-dark text-white
        px-6 sm:px-10 md:px-16 lg:px-24
        py-24 sm:py-28 md:py-32
      "
    >
      {/* Header */}
      <div className="max-w-3xl mb-16 sm:mb-20">
        <p className="text-gold tracking-widest text-xs sm:text-sm mb-3">
          EXPERIENCE
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6">
          Professional <span className="text-maroon font-semibold">Journey</span>
        </h2>

        <p className="text-gray text-base sm:text-lg">
          A timeline of hands-on experience, leadership, and creative contribution.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="
          absolute left-2 sm:left-4 md:left-1/2
          top-0 h-full w-[2px]
          bg-maroon/40
        "></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`
              relative mb-16 sm:mb-20
              flex flex-col md:flex-row
              ${index % 2 === 0 ? "md:flex-row-reverse" : ""}
            `}
          >
            {/* Dot */}
            <div className="
              absolute left-[2px] sm:left-[10px] md:left-1/2
              transform md:-translate-x-1/2
              w-4 h-4
              bg-maroon rounded-full
              shadow-[0_0_20px_rgba(107,15,26,0.8)]
            "></div>

            {/* Card */}
            <div className="
              bg-black border border-maroon/30 rounded-2xl
              p-6 sm:p-8
              shadow-lg
              w-full md:w-[45%]
              ml-6 sm:ml-10 md:ml-0
            ">
              <p className="text-gold text-xs tracking-widest mb-2">
                {exp.duration}
              </p>

              <h3 className="text-lg sm:text-xl font-semibold mb-1">
                {exp.role}
              </h3>

              <p className="text-gray mb-4 text-sm sm:text-base">
                {exp.company}
              </p>

              <ul className="space-y-2 text-sm text-gray mb-4 list-disc list-inside">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tech.map((tool, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full
                               border border-gold/40 text-gold"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
