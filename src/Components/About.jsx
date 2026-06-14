import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    // Added id="about" here
    <div id="about" className="border-b border-neutral-900 pb-4 scroll-mt-24">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap items-center">
        {/* Left Column: Controlled About Image Container */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 p-4 lg:p-8 flex justify-center"
        >
          {/* Controlled width container to match the hero image scale */}
          <div className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[360px]">
            <img
              className="rounded-2xl w-full h-auto object-cover shadow-xl border border-neutral-800/40"
              src={aboutImg}
              alt="about"
            />
          </div>
        </motion.div>

        {/* Right Column: Text Content */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start text-center lg:text-left">
            <p className="my-2 max-w-xl py-6 font-light leading-relaxed text-neutral-400">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
