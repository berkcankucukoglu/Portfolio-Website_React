import { LINKS } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faFilePdf,
  faSquareEnvelope,
  faXmark,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const NavLinks = () => {
  return (
    <>
      <NavLink className="block md:hidden transform transition-transform duration-300 hover:scale-110 px-2 py-1 rounded-full hover:bg-hover-notactive-blue hover:text-white" to="/">Home</NavLink>
      <NavLink to="/about" className="transform transition-transform duration-300 hover:scale-110 px-2 py-1 rounded-full hover:bg-hover-notactive-blue hover:text-white">About</NavLink>
      <NavLink to="/mission" className="transform transition-transform duration-300 hover:scale-110 px-2 py-1 rounded-full hover:bg-hover-notactive-blue hover:text-white">Mission</NavLink>
      <NavLink to="/projects" className="transform transition-transform duration-300 hover:scale-110 px-2 py-1 rounded-full hover:bg-hover-notactive-blue hover:text-white">Projects</NavLink>
      <NavLink to="/research" className="transform transition-transform duration-300 hover:scale-110 px-2 py-1 rounded-full hover:bg-hover-notactive-blue hover:text-white">Research</NavLink>
      {/* Email */}
      <a
        title="Get In Touch!"
        href="/contact_me"
        aria-label="Email"
        rel="noref"
        className="block sm:hidden transform transition-transform duration-300 hover:scale-110 hover:bg-hover-notactive-blue hover:text-white"
        onClick={(e) => {
          e.preventDefault();
          const getInTouchElement = document.getElementById('contactsection');
          if (getInTouchElement) {
            getInTouchElement.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        Contact
      </a>
    </>
  );
};

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-20 py-8 flex flex-wrap items-center justify-end">
      <nav className="flex items-center w-full justify-between">
        {/* Home */}
        <div className="flex flex-shrink-0 items-center sm:mr-5">
          <Link
            to="/"
            title="Home"
            className="font-medium text-2xl"
          >
            Berkcan Küçükoğlu
          </Link>
        </div>

        {/* Navlinks */}
        <div className="hidden md:flex w-full max-w-96 justify-between">
          <NavLinks />
        </div>

        {/* Navbar-RightSide */}
        <div className='flex flex-row sm:ml-5'>

          {/* Clickables */}
          <div className="hidden sm:flex gap-5">
            {/* LinkedIn */}
            <a
              title="Berkcan's Linkedin Profile"
              href={LINKS[0].url}
              target="_blank"
              aria-label="LinkedIn"
              rel="noref"
              className="transform transition-transform duration-300 hover:scale-110"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            </a>

            {/* GitHub */}
            <a
              title="Berkcan's GitHub Page"
              href={LINKS[1].url}
              target="_blank"
              aria-label="Github"
              rel="noref"
              className="transform transition-transform duration-300 hover:scale-110"
            >
              <FontAwesomeIcon icon={faSquareGithub} size="2xl" />
            </a>

            {/* Email */}
            <a
              title="Get In Touch!"
              href="/contact_me"
              aria-label="Email"
              rel="noref"
              className="transform transition-transform duration-300 hover:scale-110"
              onClick={(e) => {
                e.preventDefault();
                const getInTouchElement = document.getElementById('contactsection');
                if (getInTouchElement) {
                  getInTouchElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <FontAwesomeIcon icon={faSquareEnvelope} size="2xl" />
            </a>

            {/* Resume */}
            <a
              title="Get Berkcan's Latest Resume"
              href="/download_resume"
              aria-label="Resume/CV"
              rel="noref"
              className="transform transition-transform duration-300 hover:scale-110"
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
              <FontAwesomeIcon icon={faFilePdf} size="2xl" />
            </a>
          </div>

          {/* MobileMenuButton */}
          <div className='md:hidden flex items-center w-8 ml-5 h-auto justify-center transform transition-transform duration-300 hover:scale-110'>
            <button onClick={toggleNavbar}>{
              isOpen ? <FontAwesomeIcon icon={faXmark} size="2xl" /> : <FontAwesomeIcon icon={faBars} size="2xl" />
            }</button>


          </div>

        </div>
      </nav>

      {isOpen && (
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -25 }}
          transition={{ duration: 0.2 }}
          className='flex flex-col items-center basis-full gap-4 mt-6'>
          <NavLinks />
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
