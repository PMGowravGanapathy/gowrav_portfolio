import { motion } from "framer-motion";

export default function Extracurricular() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-[#0e0b0b] to-black text-white px-20 py-20">

      {/* Header */}
      <div className="flex justify-between items-center mb-16">
        <p className="text-sky-400 tracking-widest text-sm">BEYOND CODE</p>

        <a
          href="/"
          className="border border-sky-400 text-sky-400 px-6 py-2 rounded-full hover:bg-sky-400 hover:text-black transition"
        >
          ← Back to portfolio
        </a>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-light leading-tight mb-8">
            Discipline, art &{" "}
            <span className="text-maroon font-semibold">identity.</span>
          </h1>

          <p className="text-gray text-lg leading-relaxed mb-12">
            Beyond academics and design, my journey is shaped by discipline from
            NCC and creativity through drawing — two worlds that balance leadership
            and self-expression in my life.
          </p>

          <h3 className="text-2xl font-medium mb-4">
            Roles & experiences
          </h3>

          <p className="text-gray mb-10 leading-relaxed">
            These experiences taught me responsibility, patience, confidence and
            the importance of consistency — values I carry into both design and life.
          </p>

          <div className="space-y-10">

            <div>
              <h4 className="text-lg font-semibold mb-2">
                NCC Cadet — Leading Cadet
              </h4>
              <p className="text-gray leading-relaxed">
                Served as a Leading Cadet in NCC. Attended Ek Bharat Shreshtha Bharat
                camp and successfully completed A, B and C certificates, building
                discipline, leadership and a strong sense of service.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">
                Parade, Training & Leadership
              </h4>
              <p className="text-gray leading-relaxed">
                Participated in drills, parades, leadership tasks and training programs,
                learning to perform under pressure while guiding fellow cadets.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">
                Drawing & Visual Expression
              </h4>
              <p className="text-gray leading-relaxed">
                Passionate about drawing and visual storytelling. My artworks reflect
                culture, emotion and imagination — strengthening observation,
                creativity and patience.
              </p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT GALLERY */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="grid grid-cols-2 gap-6"
        >

          {[
            "/extra1.jpeg",
            "/extra2.jpeg",
            "/extra3.jpeg",
            "/extra4.jpeg",
          ].map((img, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden bg-black shadow-lg hover:scale-105 transition"
            >
              <img
                src={img}
                alt="Extracurricular"
                className="w-full h-full object-contain bg-black"
              />
            </div>
          ))}

        </motion.div>
      </div>

    </section>
  );
}
