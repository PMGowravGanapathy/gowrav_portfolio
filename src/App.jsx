import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Skills from "./components/Skills";
import Extracurricular from "./pages/Extracurricular";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-black text-white transition-colors duration-500">
      <Routes>

        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route path="/extracurricular" element={<Extracurricular />} />

      </Routes>
    </div>
  );
}
