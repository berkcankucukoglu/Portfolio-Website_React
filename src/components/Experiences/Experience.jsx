import { EXPERIENCES } from "../../constants";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div id="experiencesection" className="my-16 sm:my-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.75 }}
                className="my-10 text-center text-4xl">Experiences
            </motion.h2>
            {EXPERIENCES.map((exp, index) => (
                <div className="mb-10 flex flex-wrap md:justify-center" key={index}>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -25 }}
                        transition={{ duration: 1 }}
                        className="w-full md:w-1/4">
                        <p className="mb-2 text-sm text-stone-400">
                            {exp.timespan}
                        </p>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -25 }}
                        transition={{ duration: 0.75 }}
                        className="w-full max-w-xl md:w-3/4">
                        <h3 className="mb-2 font-semibold">
                            {exp.role} - {" "}
                            <span className="text-sm text-stone-500">
                                {exp.company}
                            </span>
                        </h3>
                        <p className="my-2 text-stone-400">
                            {exp.description}
                        </p>
                        <div className="flex flex-wrap">
                            {exp.technologies.map((tech, index) => (
                                <motion.span
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: -25 }}
                                    transition={{ duration: 1.25 }}
                                    className="mr-2 mt-2 rounded bg-stone-900 px-2 py-2 text-sm font-medium text-stone-300"
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

export default Experience;
