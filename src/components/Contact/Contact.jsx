import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFontAwesome } from '@fortawesome/free-brands-svg-icons';
import {
  faSquarePhone,
  faSquareEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { CONTACT_TEXT, USER_INFO, CONTACT_PRIVACRY } from '../../constants';
import { motion } from 'framer-motion';
import React, { useState } from 'react';


const ContactInfo = () => {
  return (
    <>
      {/* MailAddress */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -25 }}
        transition={{ duration: 0.75 }}
        className="flex items-center px-1 py-4"
      >
        <FontAwesomeIcon icon={faSquareEnvelope} size="2xl" />
        <p className="ml-2 my-2 max-w-lg w-full text-sm sm:text-lg leading-relaxed tracking-wide">
          {USER_INFO.email}
        </p>
      </motion.div>

      {/* Call */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -25 }}
        transition={{ duration: 1 }}
        className="flex items-center px-1 py-4"
      >
        <FontAwesomeIcon icon={faSquarePhone} size="2xl" />
        <p className="ml-2 my-2 max-w-lg w-full text-sm sm:text-lg leading-relaxed tracking-wide">
          {USER_INFO.phoneNo}
        </p>
      </motion.div>

      {/* Address */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -25 }}
        transition={{ duration: 1.25 }}
        className="flex items-center px-1 py-4"
      >
        <FontAwesomeIcon icon={faSquareFontAwesome} size="2xl" />
        <p className="ml-2 my-2 max-w-lg w-full text-sm sm:text-lg leading-relaxed tracking-wide">
          {USER_INFO.address}
        </p>
      </motion.div>
    </>
  );
};

const Contact = () => {

  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div id="contactsection" className="my-16 sm:my-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -25 }}
        transition={{ duration: 0.75 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <div className="flex flex-col-reverse md:flex-row md:gap-16">
        <div className="md:flex md:flex-col-reverse md:justify-end px-1 md:w-1/2">
          <div>
            {show ? <ContactInfo /> :
              <>
                <motion.button
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  onClick={toggleShow}
                  className="bg-white rounded-full p-4 mb-4 text-sm sm:text-base font-bold text-stone-800 text-center w-full md:w-auto transform transition-transform duration-300 hover:scale-110">
                  Show Contact Information
                </motion.button>
                <motion.ul
                  className='list-disc pl-5'
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 1.25 }}
                >
                  {CONTACT_PRIVACRY.map((tech, index) => (
                    <li
                      className="text-sm italic leading-relaxed tracking-tighter text-stone-500 py-1"
                      key={index}
                    >
                      {tech}
                    </li>
                  ))}
                </motion.ul>
              </>
            }
          </div>
          <div className="mt-5 md:mt-0">
            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -25 }}
              transition={{ duration: 1 }}
              className="text-lg"
            >
              Have Questions? Just Ask!
            </motion.h1>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -25 }}
              transition={{ duration: 1.25 }}
              className="my-2 max-w-2xl py-4 text-base leading-relaxed tracking-tighter"
            >
              {CONTACT_TEXT}
            </motion.p>
          </div>
        </div>
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.75 }}
          className="px-1 my-10 md:my-0 md:w-1/2"
        >
          <form className="px-1 contact-form">
            <label className="text-lg leading-relaxed" htmlFor="nameInput">
              Your Name
            </label>
            <input
              id="nameInput"
              className="px-5 py-2 mb-8 w-full text-white border-none rounded bg-input-gray"
              type="text"
              placeholder="Enter your name..."
              name="name"
            />

            <label className="text-lg leading-relaxed" htmlFor="emailInput">
              Your Email
            </label>
            <input
              id="emailInput"
              className="px-5 py-2 mb-8 w-full text-white border-none rounded bg-input-gray"
              type="email"
              placeholder="Enter your email..."
              name="email"
            />

            <label className="text-lg leading-relaxed" htmlFor="emailInput">
              Your Massage
            </label>
            <textarea
              id="c"
              className="px-5 py-2 mb-8 w-full text-white border-none rounded bg-input-gray"
              name="message"
              rows={6}
              placeholder="Enter your message..."
            ></textarea>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-white rounded-full p-4 text-sm sm:text-base font-bold text-stone-800 text-center w-full md:w-auto transform transition-transform duration-300 hover:scale-110"
                onClick={(e) => {
                  e.preventDefault();
                  const confirmDownload = window.confirm(
                    'Confirm submission? Please ensure all details are correct, as edits are not possible after submission.'
                  );
                  if (confirmDownload) {
                    console.log('Done.');
                  }
                }}
              >
                Confirm & Submit Now
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
