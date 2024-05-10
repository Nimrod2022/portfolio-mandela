import React from "react";

const ProjectsDiv = ({
  darkMode,
  title,
  description,
  image,
  technologies,
  siteurl,
  videourl,
  isNew,
  handleModal,
}) => {
  const handleLiveDemoClick = () => {
    openModal(videourl);
  };

  const handleVisitSite = () => {
    window.open(siteurl, "_blank");
  };

  return (
    <div className="relative md:h-[630px] md:w-[565px] h-[450px] w-[520px] md:px-0 px-4 rounded-3xl md:my-5 overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
      {isNew && (
        <div className="absolute top-4 left-6 md:top-3 text-xl md:left-5 font-semibold bg-red-500 text-white px-3 py-2 md:px-5 md:py-3 rounded-lg ">
          New
        </div>
      )}
      <img
        src={image}
        alt={title}
        className="md:h-[320px] md:w-[565px] h-[220px] w-[565px] image"
      />
      <div className="bg-[#26313F] text-center items-center h-full">
        <div className="flex flex-col justify-center items-center">
          <h1 className="md:text-3xl text-xl text-white mt-2">{title}</h1>
          <p className="md:text-xl text-sm text-start mt-2 px-10 text-[#A9A9A9]">
            {description}
          </p>
        </div>

        <div className="justify-center flex flex-col items-center">
          <div className="gap-5 mt-3 md:mt-5 flex ">
            {technologies.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt={`Technology icon ${index}`}
                className="md:size-10 size-7 "
              />
            ))}
          </div>
        </div>
        <div className="md:mt-8 mt-5 text-md">
          <button
            className={`${darkMode ? "live-demo-dark" : "live-demo-light"} text-md md:text-lg md:mr-10 mr-8 px-3 py-2 md:py-3 hover:bg-[#00142D] hover:text-white dark:hover:bg-[#00A359]`}
            type="button"
            onClick={handleModal}
          >
            Live Demo
          </button>
          <button
            className="visit-site border text-md md:text-lg px-3 md:px-6 py-2 md:py-3 text-white hover:border-none hover:bg-[#00142D] "
            type="button"
            onClick={handleVisitSite}
          >
            Visit Site
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDiv;
