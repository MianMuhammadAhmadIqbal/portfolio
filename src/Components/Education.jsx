import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div
      id="education"
      className="border-b border-neutral-900 pb-12 scroll-mt-24"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h2>

      <div className="max-w-4xl mx-auto px-4">
        {EDUCATION.map((edu, index) => (
          <div
            key={index}
            className="mb-12 flex flex-wrap lg:justify-between items-start"
          >
            {/* Left Column: Timeline Duration */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 mb-2 lg:mb-0"
            >
              <p className="text-sm font-medium text-stone-400">
                {edu.duration}
              </p>
            </motion.div>

            {/* Right Column: Academic Information Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-3/4 max-w-xl"
            >
              <h6 className="mb-1 font-semibold text-xl text-white">
                {edu.degree}
              </h6>

              <p className="text-purple-400 font-medium text-sm mb-3">
                {edu.institution}
              </p>

              <p className="mb-4 text-neutral-400 text-sm leading-relaxed">
                {edu.description}
              </p>

              {/* Core Relevant Coursework Pills */}
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="rounded bg-neutral-900 px-2 py-1 text-xs font-medium text-stone-400 border border-neutral-800"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
