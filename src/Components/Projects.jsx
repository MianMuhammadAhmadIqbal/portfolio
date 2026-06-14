import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div
      id="projects"
      className="border-b border-neutral-900 pb-4 scroll-mt-24"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
            {/* Left Column: Clean, static image */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 flex justify-center lg:justify-start"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded object-cover"
              />
            </motion.div>

            {/* Right Column: Text Information & Link Hub */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              {/* Clean static title (Links removed) */}
              <h6 className="mb-2 font-semibold text-lg text-white">
                {project.title}
              </h6>

              <p className="mb-4 text-neutral-400 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Technologies Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-2 py-1 text-xs font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* 🔗 Interactive Action Link Group */}
              <div className="flex items-center gap-6 text-sm font-medium">
                {/* Live Demo Redirect (Uses your original project.link) */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 underline underline-offset-4 decoration-purple-500/30 hover:decoration-purple-400 transition-all duration-200"
                >
                  <span>Live Demo</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-3.5 h-3.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>

                {/* Source Code Redirect (Uses project.githubLink) */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-stone-400 hover:text-stone-200 underline underline-offset-4 decoration-stone-700 hover:decoration-stone-400 transition-all duration-200"
                >
                  <span>Source Code</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-3.5 h-3.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
