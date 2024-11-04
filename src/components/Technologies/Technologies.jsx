import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faSquareJs,
  faWindows,
} from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const iconVariants = (dur) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: dur,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const Technologies = () => {
  return (
    <div id="technologiessection" className="my-16 sm:my-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -25 }}
        transition={{ duration: 0.75 }}
        className="my-10 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -25 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
        >
          <FontAwesomeIcon icon={faReact} className=" text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <FontAwesomeIcon
            icon={faSquareJs}
            className=" text-7xl text-yellow-400"
          />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(5.5)}
          className="p-4"
        >
          <FontAwesomeIcon
            icon={faWindows}
            className=" text-7xl text-blue-400"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
