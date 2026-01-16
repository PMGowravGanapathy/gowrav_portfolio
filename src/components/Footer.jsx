export default function Footer() {
  return (
    <footer
      className="
        text-white
        px-6 sm:px-10 md:px-16 lg:px-24
        py-16 sm:py-18 md:py-20
        border-t border-white/5
        bg-gradient-to-b from-[#1a1a1a] via-[#141414] to-[#0e0e0e]
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          grid grid-cols-1 md:grid-cols-3
          gap-12
          text-center md:text-left
        "
      >
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">
            PM <span className="text-gold">Gowrav</span> Ganapathy
          </h3>

          <p className="text-gray text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
            UI/UX Designer crafting meaningful, user-centered and visually refined
            digital experiences.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-gold tracking-widest text-sm mb-4">
            NAVIGATION
          </p>

          <ul className="space-y-3 text-gray text-sm">
            <li>
              <a href="#home" className="hover:text-gold transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gold transition">
                About
              </a>
            </li>
            <li>
              <a href="#work" className="hover:text-gold transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gold transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-gold tracking-widest text-sm mb-4">
            CONNECT
          </p>

          <ul className="space-y-3 text-gray text-sm">
            <li>
              <a
                href="mailto:parlakotigowrav@gmail.com"
                className="hover:text-gold transition"
              >
                parlakotigowrav@gmail.com
              </a>
            </li>

            <li>
              <a
                href="tel:8618002667"
                className="hover:text-gold transition"
              >
                +91 8618002667
              </a>
            </li>

            <li className="flex justify-center md:justify-start gap-6 pt-2">
              <a
                href="https://www.linkedin.com/in/gowrav-ganapathy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/PMGowravGanapathy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition"
              >
                GitHub
              </a>

              <a
                href="https://www.instagram.com/parlakoti_gowrav"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-14 pt-6 border-t border-white/5 text-center text-gray text-sm">
        <p>
          © {new Date().getFullYear()} PM Gowrav Ganapathy. All rights reserved.
        </p>

        <p className="mt-2">
          Designed with love{" "}
          <span className="text-red-500">❤️</span> by PM Gowrav Ganapathy.
        </p>
      </div>
    </footer>
  );
}
