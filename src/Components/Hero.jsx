import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/me2.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 pt-28 lg:pt-36 lg:mb-35">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Muhammad Ahmad Iqbal
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Frontend Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="pb-8"
            >
              <a
                href="/Ahmad_Iqbal_Resume.pdf"
                download="Ahmad_Iqbal_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-300 via-purple-500 to-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-lg hover:opacity-90 active:scale-95 hover:scale-105 transition-all duration-300 tracking-wide"
              >
                <span>Download Resume</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center">
          <div className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[360px]">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-2xl w-full h-auto object-cover shadow-xl border border-neutral-800/40"
              src={profilePic}
              alt="Muhammad Ahmad Iqbal"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
