import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const BackToTop = () => {
    const [backToTopBtn, setBackToTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopBtn(true)
            }
            else {
                setBackToTopBtn(false)
            }
        })
    }, [])
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div>
            {backToTopBtn && (
                <motion.button
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 25 }}
                    transition={{ duration: 0.75 }}
                    title='Back to Top'
                    className='fixed flex items-center py-2 pl-2 pr-5 right-0 bottom-24 lg:bottom-16 xl:bottom-40 bg-stone-800 rounded-l-full'
                    onClick={scrollTop}>
                    <FontAwesomeIcon icon={faCircleChevronUp} className='text-4xl transform transition-transform duration-300 hover:scale-110' />&nbsp;</motion.button>
            )}
        </div>
    )
}

export default BackToTop