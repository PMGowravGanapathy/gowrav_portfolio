import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]">

      <motion.h1
        initial={{ opacity: 0, letterSpacing: "0.5em" }}
        animate={{ opacity: 1, letterSpacing: "0.2em" }}
        transition={{ duration: 1.2 }}
        className="text-gold text-4xl tracking-widest mb-3"
      >
        PM GOWRAV
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-maroon text-lg tracking-widest"
      >
        UI / UX DESIGNER
      </motion.h2>

      {/* Loading bar */}
      <motion.div
        className="mt-10 w-48 h-[3px] bg-maroon/30 overflow-hidden rounded-full"
      >
        <motion.div
          className="h-full bg-gold"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        />
      </motion.div>

    </div>
  );
}
