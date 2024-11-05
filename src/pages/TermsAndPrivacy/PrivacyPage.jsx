import React, { useState } from 'react';
import './Modal.css';
import { PRIVACRY_CONTENT } from '../../constants';

function PrivacyPage() {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }
  return (
    <>
      <button
        className="text-sm leading-relaxed text-center w-max px-2 my-1 text-stone-500 sm:my-0 transform transition-transform duration-300 hover:scale-110"
        onClick={toggleModal}
      >
        User Privacy Policy
      </button>
      {modal && (
        <div className="fixed h-full w-full inset-0 z-10">
          <div className="h-full w-full inset-0 bg-overlay-background/80">
            <div className="absolute top-1/2 left-1/2 bg-white transform -translate-x-1/2 -translate-y-1/2 rounded-md max-w-[37.5rem] min-w-80">
              <div className="flex flex-col items-center m-5 text-black">
                <h2>{PRIVACRY_CONTENT[0].title}</h2>
                <p>{PRIVACRY_CONTENT[0].text}</p>
                <button
                  className="p-3 my-4 bg-black text-white rounded-full w-1/4"
                  onClick={toggleModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PrivacyPage;
