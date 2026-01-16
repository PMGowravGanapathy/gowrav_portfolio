import { useState } from "react";
import { motion } from "framer-motion";

export default function Projects() {

  const projects = [
    {
      title: "Event Management Application",
      category: "UI/UX",
      image: "/event management.png",
      link: "https://www.figma.com/design/0DGooS2xYOqWLbxP6EjQXq/event-management-application-design",
    },
    {
      title: "Restaurant Menu Design",
      category: "UI",
      image: "/restaurant menu.png",
      link: "https://www.figma.com/design/iUJITD8imjuoatPLaPZo8J/restaurant-menu",
    },
    {
      title: "Grocery Mobile App",
      category: "UX",
      image: "/grocery app.png",
      link: "https://www.figma.com/design/7BZKOeVHO7iS1RQcy3GaYj/Grocery-App",
    },
    {
      title: "Torq Designs Website",
      category: "UI/UX",
      image: "/torq webpage.jpeg",
      link: "https://www.figma.com/design/5rZzznQJMNP8KIodL5PNM6/Torq-Designs",
    },
    {
      title: "Arecabandhu Platform",
      category: "UX",
      image: "/arecabandhu.png",
      link: "https://www.figma.com/design/6yDXwl0D7UE0hEx4uJWAlI",
    },
    {
      title: "Expense Tracker App",
      category: "Development",
      image: "/expense tracker.png",
      link: "https://github.com/PMGowravGanapathy/expense-tracker",
    },
  ];

  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter(p => p.category === filter);

  return (
    <section
  id="work"
  className="px-24 py-32 text-white transition-colors duration-500
             bg-gradient-to-b from-[#1a1a1a] via-[#141414] to-[#0e0e0e]"
>


      {/* Header */}
      <div className="mb-16 max-w-3xl">
        <p className="text-gold tracking-widest mb-3 text-sm">
          PROJECTS
        </p>

        <h2 className="text-5xl font-light mb-6">
          Selected <span className="text-maroon font-semibold">Work</span>
        </h2>

        <p className="text-gray-700 dark:text-gray text-lg">
          A curated collection of UI/UX and development projects focused on
          usability, aesthetics and clarity.
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-6 mb-16 flex-wrap">
        {["All", "UI", "UX", "UI/UX", "Development"].map(tag => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`px-6 py-2 rounded-full border transition text-sm font-medium
              ${
                filter === tag
                  ? "bg-maroon text-white border-maroon shadow-[0_0_20px_rgba(107,15,26,0.6)]"
                  : "border-maroon text-maroon hover:bg-maroon hover:text-white"
              }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

        {filtered.map((project, index) => (

          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="group relative rounded-2xl overflow-hidden
                       bg-white dark:bg-dark
                       border border-maroon/40 hover:border-maroon
                       transition shadow-xl"
          >

            {/* Image */}
            <div className="h-[240px] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0
                            group-hover:opacity-100 transition
                            flex items-center justify-center">

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-maroon text-white px-6 py-3 rounded-full
                           hover:bg-gold hover:text-black transition
                           shadow-[0_0_25px_rgba(212,175,154,0.7)]"
              >
                View Project
              </a>

            </div>

            {/* Content */}
            <div className="p-6 bg-white dark:bg-dark relative z-10">

              <span className="inline-block mb-2 text-xs tracking-widest text-gold">
                {project.category}
              </span>

              <h3 className="text-xl font-medium leading-snug">
                {project.title}
              </h3>

            </div>

          </motion.div>

        ))}

      </div>
    </section>
  );
}
