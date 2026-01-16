import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        formRef.current,
        import.meta.env.VITE_EMAIL_PUBLIC
      )
      .then(() => {
        setStatus("Message sent successfully!");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("Something went wrong. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="
        bg-black text-white
        px-6 sm:px-10 md:px-16 lg:px-24
        py-24 sm:py-28 md:py-32
        flex items-center justify-center
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          w-full max-w-6xl
          grid grid-cols-1 md:grid-cols-2
          gap-16 md:gap-20
        "
      >
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <p className="text-gold tracking-widest mb-3 text-xs sm:text-sm">
            CONTACT
          </p>

          <h2 className="text-4xl sm:text-5xl font-light mb-6">
            Let’s <span className="text-maroon font-semibold">connect</span>
          </h2>

          <p className="text-gray text-base sm:text-lg mb-10 max-w-md mx-auto md:mx-0">
            Have a project or opportunity in mind? I’d love to hear from you.
          </p>

          <div className="space-y-8">

            <div>
              <p className="text-gold text-xs tracking-widest mb-1">EMAIL</p>
              <p className="text-base sm:text-lg">
                parlakotigowrav@gmail.com
              </p>
            </div>

            <div>
              <p className="text-gold text-xs tracking-widest mb-1">PHONE</p>
              <p className="text-base sm:text-lg">
                +91 8618002667
              </p>
            </div>

            <div>
              <p className="text-gold text-xs tracking-widest mb-1">SOCIAL</p>
              <div className="flex justify-center md:justify-start gap-6 text-gray">
                <a
                  href="https://www.linkedin.com/in/gowrav-ganapathy"
                  target="_blank"
                  className="hover:text-gold transition"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/PMGowravGanapathy"
                  target="_blank"
                  className="hover:text-gold transition"
                >
                  GitHub
                </a>
                <a
                  href="https://www.instagram.com/parlakoti_gowrav"
                  target="_blank"
                  className="hover:text-gold transition"
                >
                  Instagram
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-dark rounded-2xl p-6 sm:p-8 md:p-10 border border-white/5 shadow-lg">

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">

            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="
                w-full bg-black border border-white/5 rounded-xl
                px-5 py-4 text-sm
                outline-none focus:border-gold transition
              "
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="
                w-full bg-black border border-white/5 rounded-xl
                px-5 py-4 text-sm
                outline-none focus:border-gold transition
              "
            />

            <textarea
              name="message"
              rows="5"
              required
              placeholder="Your Message"
              className="
                w-full bg-black border border-white/5 rounded-xl
                px-5 py-4 text-sm
                outline-none focus:border-gold transition resize-none
              "
            />

            <button
              type="submit"
              className="
                w-full bg-maroon py-4 rounded-xl
                hover:bg-gold hover:text-black transition
                font-medium tracking-wide
              "
            >
              Send Message
            </button>

            {status && (
              <p className="text-gold text-sm text-center mt-4">
                {status}
              </p>
            )}

          </form>
        </div>
      </motion.div>
    </section>
  );
}
