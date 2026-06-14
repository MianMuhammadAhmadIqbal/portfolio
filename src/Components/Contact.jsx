import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaWhatsapp, FaGithub, FaUserCheck } from "react-icons/fa";

export const Contact = () => {
  const whatsappMessage = encodeURIComponent(
    "Hi Ahmad, I saw your portfolio and would love to discuss an internship or project opportunity with you!",
  );

  // Updated pre-filled email fields tailored for an Internship Inquiry
  const hireSubject = encodeURIComponent(
    "Internship Inquiry: Frontend Developer",
  );
  const hireBody = encodeURIComponent(
    "Hi Ahmad,\n\nI came across your frontend portfolio and would love to discuss an internship or junior project opportunity with you.\n\nOpportunity Details:\n- Company/Organization Name: \n- Type (Remote / On-site Internship):\n- Expected Start Date & Duration:\n\nLooking forward to connecting!",
  );

  return (
    <div
      id="contact"
      className="border-b border-neutral-900 pb-20 scroll-mt-12"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-10 text-center text-4xl"
      >
        Get In <span className="text-neutral-500">Touch</span>
      </motion.h2>

      <p className="text-center text-neutral-400 mb-12 max-w-md mx-auto px-4">
        Have an internship opportunity or want to collaborate on a frontend
        project? Let's build something amazing together!
      </p>

      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {/* WhatsApp Card */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 flex flex-col items-center justify-between hover:border-green-500/50 transition-colors duration-300"
        >
          <div className="flex flex-col items-center">
            <FaWhatsapp className="text-4xl text-green-500 mb-4 animate-pulse" />
            <h4 className="text-lg font-semibold mb-2">WhatsApp Chat</h4>
            <p className="text-sm text-neutral-400 mb-4">{CONTACT.phoneNo}</p>
          </div>
          <a
            href="https://wa.me/923149671114"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-600 hover:bg-green-500 text-white font-medium py-2 px-4 rounded-xl text-sm transition-colors duration-200"
          >
            Send Message
          </a>
        </motion.div>

        {/* GitHub / Source Code Card */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 flex flex-col items-center justify-between hover:border-white/30 transition-colors duration-300"
        >
          <div className="flex flex-col items-center">
            <FaGithub className="text-4xl text-neutral-100 mb-4" />
            <h4 className="text-lg font-semibold mb-2">Open Source</h4>
            <p className="text-sm text-neutral-400 mb-1 font-medium text-slate-300">
              Review My Repositories
            </p>
            <p className="text-xs text-neutral-500 mb-4 leading-relaxed">
              Explore my raw codebases, architecture styles, and complete
              project version histories.
            </p>
          </div>
          <a
            href="https://github.com/MianMuhammadAhmadIqbal"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white font-medium py-2 px-4 rounded-xl text-sm border border-neutral-700 transition-all duration-200"
          >
            Explore GitHub
          </a>
        </motion.div>

        {/* Updated "Hire Me" Card tailored for Internship Opportunities */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 flex flex-col items-center justify-between hover:border-purple-500/50 transition-colors duration-300"
        >
          <div className="flex flex-col items-center">
            <FaUserCheck className="text-4xl text-purple-400 mb-4" />
            <h4 className="text-lg font-semibold mb-2">Hire Me</h4>
            <p className="text-sm text-neutral-400 mb-1 font-medium text-purple-300">
              Seeking Internships
            </p>
            {/*  Cleaned up copy to accurately reflect your student status & goals */}
            <p className="text-xs text-neutral-500 mb-4 leading-relaxed">
              Available for remote or on-site engineering internships and
              collaborative frontend projects.
            </p>
          </div>
          <a
            href={`mailto:${CONTACT.email}?subject=${hireSubject}&body=${hireBody}`}
            className="w-full bg-gradient-to-r from-pink-300 via-purple-500 to-indigo-600 hover:opacity-90 text-white font-medium py-2 px-4 rounded-xl text-sm transition-all duration-200 shadow-md"
          >
            Start Inquiry
          </a>
        </motion.div>
      </div>
    </div>
  );
};
