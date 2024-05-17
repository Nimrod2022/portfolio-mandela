import React, { useEffect, useState } from 'react';

const backTopDark = "/assets/back-top-dark.svg";
const backTopLight = "/assets/back-top-light.svg";

function ScrollToTop({ targetRef, darkMode }) {
  const scrollOptions = {
    top: 0,
    left: 0,
    behavior: 'smooth',
  };

  const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;

  const scrollToTop = () => {
    if (supportsNativeSmoothScroll) {
      window.scrollTo(scrollOptions);
    } else {
      window.scrollTo(scrollOptions.left, scrollOptions.top);
    }
  };

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (targetRef.current) {
        const targetTop = targetRef.current.getBoundingClientRect().top;
        setShowButton(targetTop < window.innerHeight);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [targetRef]);

  const onClick = () => {
    scrollToTop();
  };

  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: darkMode ? '#26313F' : '#55e5a4',
    color: '#55e5a4',
    border: '2px solid',
    borderRadius: '10%',
    width: '35px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.5s',
    animation: 'bounce 2s infinite',
  };
  
  const iconStyle = {
    width: '16px',
    height: '20px',
    color: '#000',
  };

  return (
    showButton && (
      <div>
        <button onClick={onClick} style={buttonStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 490 490" style={iconStyle}>
            <path d="M437.2 178.7c12.8 12.8 12.8 33.4 0 46.2-6.4 6.4-14.7 9.6-23.1 9.6s-16.7-3.2-23.1-9.6L277.7 111.5v345.8c0 18-14.6 32.7-32.7 32.7s-32.7-14.6-32.7-32.7V111.5L99 224.9c-12.8 12.8-33.4 12.8-46.2 0s-12.8-33.4 0-46.2L221.9 9.6C228 3.4 236.3 0 245 0c8.7 0 17 3.4 23.1 9.6l169.1 169.1z" />
          </svg>
        </button>
      </div>
    )
  );
}

const styles = document.createElement('style');
styles.innerHTML = `
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-15px);
    }
    60% {
      transform: translateY(-15px);
    }
  }
`;
document.head.appendChild(styles);

export default ScrollToTop;
