import React from "react";

const ProjectsDiv = ({
  darkMode,
  title,
  description,
  image,
  technologies,
  siteurl,
  githubURL,
  isNew,
  handleModal,
  handleVisitSite,
}) => {
  return (
    <div className="relative   md:w-[45%]  md:px-0 px-5 rounded-none md:rounded-3xl md:my-5  overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
      {isNew && (
        <div className="absolute top-4 left-6 md:top-3 text-xl md:left-5 font-semibold bg-red-500 text-white px-3 py-2 md:px-3 md:py-2 rounded-lg ">
          New
        </div>
      )}
      <img src={image} alt={title} className="md:h-[50%] w-full  " />
      <div className="bg-[#26313F] text-center items-center md:h-[50%] md:py-0 py-5">
        <div className="flex flex-col justify-center items-center">
          <h1 className="md:text-2xl text-xl text-white mt-2">{title}</h1>
          <p className="md:text-lg text-sm text-start mt-2 px-10 text-[#A9A9A9]">
            {description}
          </p>
        </div>

        <div className="justify-center flex flex-col items-center">
          <div className="gap-5 mt-3 md:mt-3 flex ">
            {technologies.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt={`Technology icon ${index}`}
                className="md:size-8 size-7 "
              />
            ))}
          </div>
        </div>
        <div className="md:mt-8 mt-5 text-md">
          <button
            className={`${
              darkMode ? "live-demo-dark" : "live-demo-light"
            } text-md md:text-lg md:mr-10 mr-8 px-5 py-2  hover:bg-[#00142D] hover:text-white dark:hover:bg-[#00A359]`}
            type="button"
            onClick={() => handleVisitSite(siteurl)}
          >
            Visit Site
          </button>

          <button
            className="visit-site border text-md md:text-lg px-3 md:px-6 py-2 text-white hover:border-none hover:bg-[#00142D] "
            type="button"
            onClick={() => handleVisitSite(githubURL)}
          >
            Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDiv;
