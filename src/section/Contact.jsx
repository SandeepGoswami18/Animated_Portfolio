import { useState } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticleBackground.jsx";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Development",
    budget: "",
    idea: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen relative bg-black overflow-hidden text-white py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10 pt-24"
    >
      <ParticlesBackground />

      {/* GOLD BLOBS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-gradient-to-r from-[#ffb000] via-[#ffd36a] to-[#fff1c1] opacity-15 blur-[150px]" />
        <div className="absolute bottom-0 -right-24 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#fff1c1] via-[#ffd36a] to-[#ffb000] opacity-15 blur-[170px]" />
      </div>

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-10">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <motion.img
            src="/images/Astra.png"
            alt="Contact"
            className="w-72 md:w-[420px] rounded-2xl shadow-[0_0_30px_rgba(255,176,0,0.15)] border border-yellow-400/20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 bg-black/65 backdrop-blur-xl p-8 rounded-2xl border border-yellow-400/20"
        >
          <h2 className="text-3xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ffb000] via-[#ffd36a] to-[#fff1c1]">
            Let’s Work Together
          </h2>

          {/* ✅ NETLIFY FORM (FIXED) */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/thank-you"
            className="flex flex-col gap-5"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-md bg-white/10 border border-yellow-400/20 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-md bg-white/10 border border-yellow-400/20 focus:outline-none"
            />

            <select
              name="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="p-3 rounded-md bg-white/10 border border-yellow-400/20 text-white focus:outline-none"
            >
              <option value="Web Development" className="text-black bg-white">
                Web Development
              </option>
              <option value="Mobile Application" className="text-black bg-white">
                Mobile Application
              </option>
              <option value="Others" className="text-black bg-white">
                Others
              </option>
            </select>

            <input
              type="number"
              name="budget"
              placeholder="Budget"
              value={formData.budget}
              onChange={handleChange}
              className="p-3 rounded-md bg-white/10 border border-yellow-400/20 focus:outline-none"
            />

            <textarea
              name="idea"
              rows="4"
              placeholder="Your Idea"
              required
              value={formData.idea}
              onChange={handleChange}
              className="p-3 rounded-md bg-white/10 border border-yellow-400/20 focus:outline-none"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="text-black py-3 rounded-md font-semibold bg-gradient-to-r from-[#ffb000] via-[#ff9f1a] to-[#ffd36a]"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
