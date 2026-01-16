import { useState, useEffect } from "react";

const sections = ["home", "about", "work", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/5">

      <div className="flex items-center justify-between px-24 py-4">

        {/* Logo */}
        <a href="#home" className="text-white font-semibold tracking-wide text-lg">
          <span className="text-gold">Gowrav</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-sm">
          {sections.map(item => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`relative transition tracking-wide group
                  ${active === item ? "text-gold" : "text-white/80 hover:text-gold"}
                `}
              >
                {item.toUpperCase()}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gold transition-all duration-300
                    ${active === item ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="hidden md:flex gap-4">
          <a
            href="/Gowrav-Resume.pdf"
            download
            className="border border-gold text-gold px-5 py-2 rounded-full hover:bg-gold hover:text-black transition text-sm"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="bg-maroon px-5 py-2 rounded-full text-white hover:shadow-[0_0_25px_rgba(128,0,0,0.6)] transition text-sm"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black px-8 py-6 space-y-5 border-t border-white/10">
          {sections.map(item => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className={`block tracking-wide transition
                ${active === item ? "text-gold" : "text-white/80 hover:text-gold"}
              `}
            >
              {item.toUpperCase()}
            </a>
          ))}

          <a
            href="/Gowrav-Resume.pdf"
            download
            className="block border border-gold text-gold text-center py-2 rounded-full"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="block bg-maroon text-white text-center py-2 rounded-full"
          >
            Hire Me
          </a>
        </div>
      )}

    </nav>
  );
}
