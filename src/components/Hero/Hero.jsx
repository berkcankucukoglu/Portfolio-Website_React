import { HERO_CONTENT, USER_INFO } from '../../constants/index';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};
const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <div
      id="herosection"
      className="flex flex-wrap lg:flex-row-reverse mb-16 sm:mb-24"
    >
      <div className="w-full lg:w-1/2">
        <div className="flex justify-center lg:p-8">
          <motion.img
            src={USER_INFO.image}
            alt="Berkcan Kucukoglu"
            className="border border-stone-900 rounded-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            width={650}
            height={650}
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center lg:items-start mt-10"
        >
          <motion.h2
            variants={childVariants}
            className="pb-2 text-4xl tracking-tighter sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {USER_INFO.name + ' ' + USER_INFO.surname}
          </motion.h2>
          <motion.span
            variants={childVariants}
            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
          >
            {' '}
            {USER_INFO.title}
          </motion.span>
          <motion.p
            variants={childVariants}
            className="my-2 sm:my-0 sm:mt-2 max-w-lg py-6 sm:py-0 sm:pt-6 text-sm  lg:text-base leading-relaxed"
          >
            {HERO_CONTENT[0].text}
          </motion.p>
          <motion.p
            variants={childVariants}
            className="mb-2 mt-1 max-w-lg pb-6 text-sm lg:text-base leading-relaxed hidden sm:block"
          >
            {HERO_CONTENT[1].text}
          </motion.p>
          <div className='flex flex-col w-full lg:w-auto lg:flex-row gap-4 lg:gap-8'>
            <motion.a
              variants={childVariants}
              title="More information about me"
              href="/"
              rel="noref"
              className="bg-white rounded-full p-4 my-4 text-sm sm:text-base font-bold text-stone-800 text-center transform transition-transform duration-300 hover:scale-110"
            >
              More About Me
            </motion.a>
            <motion.a
              variants={childVariants}
              title="Get Berkcan's Latest Resume"
              href="/download_resume"
              rel="noref"
              className="bg-white rounded-full p-4 lg:my-4 text-sm sm:text-base font-bold text-stone-800 text-center transform transition-transform duration-300 hover:scale-110"
              onClick={(e) => {
                e.preventDefault();
                const confirmDownload = window.confirm(
                  'PDF Format – Download Resume ?'
                );
                if (confirmDownload) {
                  const downloadLink = document.createElement('a');
                  downloadLink.href = '/default_resume.pdf';
                  downloadLink.setAttribute('download', 'default_resume.pdf');
                  document.body.appendChild(downloadLink);
                  downloadLink.click();
                  document.body.removeChild(downloadLink);
                }
              }}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
