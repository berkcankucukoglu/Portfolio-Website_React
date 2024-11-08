import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
    USER_INFO,
    FOOTER_AUTHOR,
    FOOTER_CONTENT,
    LINKS,
    CURRENT_DATE
} from '../../constants/index';
import { motion } from 'framer-motion';
import TermsPage from '../../pages/TermsAndPrivacy/TermsPage';
import PrivacyPage from '../../pages/TermsAndPrivacy/PrivacyPage'

const Footer = () => {
    return (
        <div id="footersection" className="mb-10 sm:mb-5">
            <div className="flex flex-col justify-between sm:flex-row sm:items-start">
                <div className="sm:my-3">
                    <motion.p
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-sm leading-relaxed sm:pr-2">{FOOTER_CONTENT}
                    </motion.p>
                    <motion.p
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-sm italic leading-relaxed mt-2 sm:pr-2">
                        ―&nbsp;{FOOTER_AUTHOR}
                    </motion.p>
                </div>
                <div className="flex m-3 items-center justify-center text-xl sm:text-base gap-4 sm:gap-4 lg:ml-10">
                    {/* Linkedin */}
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
                            const getInTouchElement =
                                document.getElementById('contactsection');
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
            </div>

            <div className="flex flex-col justify-between md:flex-row-reverse sm:mt-5">
                <div className="flex flex-col justify-center items-center mb-3 sm:flex-row">
                    <TermsPage></TermsPage>
                    <PrivacyPage></PrivacyPage>
                </div>
                <motion.p
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-sm italic leading-relaxed tracking-tighter text-center text-stone-500 md:text-start">
                    ©&nbsp;{CURRENT_DATE.year}&nbsp;Made by&nbsp;{USER_INFO.name}&nbsp;{USER_INFO.surname}. All rights
                    reserved.&nbsp;<span className='font-bold not-italic'>Last Update:&nbsp;{USER_INFO.siteLastUpdateTime}</span>
                </motion.p>
            </div>
        </div>
    );
};

export default Footer;
