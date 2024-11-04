import { MISSION_VISION } from '../../constants/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';


const Mission = () => {
  return (
    <div id="missionsection" className="my-16 sm:my-24">
      <div className='flex flex-col sm:flex-row sm:gap-5'>
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col text-center mb-8 w-full sm:mb-0 sm:w-1/3"
        >
          <FontAwesomeIcon icon={faLinkedin} className='text-7xl sm:text-6xl' />
          <h3 className="my-2 font-semibold text-2xl"> {MISSION_VISION[0].title}</h3>
          <p className="text-stone-400">{MISSION_VISION[0].description}</p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col text-center mb-8 w-full sm:mb-0 sm:w-1/3"
        >
          <FontAwesomeIcon icon={faLinkedin} className='text-7xl sm:text-6xl' />
          <h3 className="my-2 font-semibold text-2xl">{MISSION_VISION[1].title}</h3>
          <p className="text-stone-400">{MISSION_VISION[1].description}</p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col text-center w-full sm:w-1/3"
        >
          <FontAwesomeIcon icon={faLinkedin} className='text-7xl sm:text-6xl' />
          <h3 className="my-2 font-semibold text-2xl">{MISSION_VISION[2].title}</h3>
          <p className="text-stone-400">{MISSION_VISION[2].description}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Mission;
