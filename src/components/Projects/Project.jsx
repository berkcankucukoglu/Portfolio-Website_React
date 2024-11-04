import { PROJECTS } from '../../constants/index';
import { motion } from 'framer-motion';

const Project = () => {
  return (
    <div id="projectsection" className="my-16 sm:my-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -25 }}
        transition={{ duration: 0.75 }}
        className="my-10 text-center text-4xl"
      >
        Projects
      </motion.h2>
      {PROJECTS.map((project, index) => (
        <div key={index} className="flex flex-wrap mb-10 justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.75 }}
            className="w-full h-auto sm:w-1/4"
          >
            <img
              src={project.image}
              alt={project.title}
              width={250}
              height={250}
              className="mb-2 rounded"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -25 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl sm:w-3/4 sm:pl-5"
          >
            <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
            <p className="my-2 text-stone-400">{project.description}</p>
            <div className="flex flex-wrap">
              {project.technologies.map((tech, index) => (
                <motion.span
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -25 }}
                  transition={{ duration: 1.25 }}
                  className="mr-2 mt-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                  key={index}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Project;
