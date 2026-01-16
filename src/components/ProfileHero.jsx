import { motion } from "framer-motion";

export default function ProfileHero() {
  return (
    <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[400px] h-[400px] bg-maroon/30 blur-[140px] rounded-full top-20 left-20"></div>
      <div className="absolute w-[300px] h-[300px] bg-wine/30 blur-[140px] rounded-full bottom-20 right-20"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center z-10 px-20">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold tracking-widest mb-4">
            UI / UX DESIGNER
          </p>

          <h1 className="text-6xl font-light leading-tight text-white">
            Designing digital <br />
            <span className="text-maroon font-semibold">
              experiences
            </span> that connect.
          </h1>

          <p className="text-gray mt-6 max-w-lg">
            I craft premium user experiences focused on clarity, emotion, and usability.
          </p>

          <div className="mt-10 flex gap-6">
            <button className="bg-maroon text-white px-8 py-3 rounded-full shadow-lg hover:bg-wine transition">
              View Work
            </button>

            <button className="border border-maroon text-maroon px-8 py-3 rounded-full hover:bg-maroon hover:text-white transition">
              Contact
            </button>
          </div>
        </motion.div>

        {/* PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >

          {/* Glow */}
          <div className="absolute w-[340px] h-[420px] bg-maroon/30 blur-[120px] rounded-full"></div>

          {/* Brush Mask Image */}
          <div
            className="w-[320px] h-[380px] overflow-hidden shadow-2xl"
            style={{
              WebkitMaskImage: "url(/brush-mask.png)",
              maskImage: "url(/brush-mask.png)",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          >
            <img
              src="/profile.jpeg"
              className="w-full h-full object-cover"
              alt="profile"
            />
          </div>

        </motion.div>

      </div>

    </section>
  );
}
