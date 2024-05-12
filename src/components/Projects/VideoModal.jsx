// VideoModal.jsx

import React, { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

const VideoModal = ({ isOpen, videourl, close }) => {
  const [videoLoading, setVideoLoading] = useState(true);

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <>
      {isOpen && (
        <section className="modal__bg">
          <div className="modal__align">
            <div className="modal__content">
              <IoCloseOutline
                className="modal__close"
                aria-label="Close modal"
                onClick={close}
              />
              <div className="modal__video-align">
                {videoLoading && (
                  <div className="modal__spinner">
                    <BiLoaderAlt className="modal__spinner-style" />
                  </div>
                )}
                <iframe
                  className="modal__video-style"
                  onLoad={spinner}
                  loading="lazy"
                  width="800"
                  height="500"
                  src={`https://www.youtube.com/embed/${videourl}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default VideoModal;
