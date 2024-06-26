import React from 'react';

function ScrollToAbout({ onClick, visible }) {
  return (
    <button 
      onClick={onClick} 
      className={`scroll-to-about-button ${!visible ? 'hidden' : ''}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490 490">
        <path d="M437.2 178.7c12.8 12.8 12.8 33.4 0 46.2-6.4 6.4-14.7 9.6-23.1 9.6s-16.7-3.2-23.1-9.6L277.7 111.5v345.8c0 18-14.6 32.7-32.7 32.7s-32.7-14.6-32.7-32.7V111.5L99 224.9c-12.8 12.8-33.4 12.8-46.2 0s-12.8-33.4 0-46.2L221.9 9.6C228 3.4 236.3 0 245 0c8.7 0 17 3.4 23.1 9.6l169.1 169.1z" />
      </svg>
    </button>
  );
}

export default ScrollToAbout;
