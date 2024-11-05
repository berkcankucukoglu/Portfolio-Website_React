import { LINKS } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faFilePdf,
  faSquareEnvelope,
  faHouseUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-10">
      <div className="flex flex-shrink-0 items-center">
        <Link
          to="/"
          title="Home"
          className="transform transition-transform duration-300 hover:scale-110"
        >
          <FontAwesomeIcon icon={faHouseUser} size="2xl" />
        </Link>
      </div>

      <div className="flex items-center justify-center gap-4">
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
    </nav>
  );
};

export default Navbar;
