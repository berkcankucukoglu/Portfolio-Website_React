import React, { useState } from 'react';
import './Modal.css';
import { PRIVACRY_CONTENT } from '../../constants';

function TermsPage() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add('active-modal')
  }
  else {
    document.body.classList.remove('active-modal')
  }
  return (
    <>
      <button
        className="text-sm leading-relaxed text-center w-max px-2 my-1 text-stone-500 sm:my-0 transform transition-transform duration-300 hover:scale-110"
        onClick={toggleModal}>
        {PRIVACRY_CONTENT[1].title}
      </button>
      {modal && (
        <div className="fixed h-full w-full inset-0 z-10">
          <div className="h-full w-full inset-0 bg-overlay-background/80">
            <div onClick={toggleModal} className="absolute top-1/2 left-1/2 bg-white transform -translate-x-1/2 -translate-y-1/2 rounded-md max-w-[37.5rem] min-w-80">
              <div className='flex flex-col items-center m-5 text-black'>
                <h3 className="mb-2 font-semibold text-2xl">{PRIVACRY_CONTENT[1].title}</h3>
                <ul className='list-disc pl-5'>
                  {PRIVACRY_CONTENT[1].listItems.map((tech, index) => (
                    <li
                      className="text-sm font-medium "
                      key={index}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <p className='hidden sm:block text-center mt-2 italic text-sm text-stone-500'>Click here to close this popup</p>
                <p className='sm:hidden text-center mt-2 italic text-sm text-stone-500'>Touch here to close this popup</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TermsPage;
