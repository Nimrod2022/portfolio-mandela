import React from "react";

const ProjectsDiv = ({ darkMode, title, description, image, technologies, isNew }) => {
  return (
    <div className="relative h-[630px] w-[565px] rounded-3xl md:my-5 overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
      {isNew && (
        <div className="absolute top-3 text-xl left-5 font-semibold bg-red-500 text-white px-5 py-3 rounded-lg ">
          New
        </div>
      )}
      <img src={image} alt={title} className="image   "  />
      <div className="bg-[#26313F] text-center items-center h-full">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl text-white mt-2">{title}</h1>
          <p className="text-xl text-start mt-2 px-10 text-[#A9A9A9]">{description}</p>
        </div>

        <div className="justify-center flex flex-col items-center">
          {/* <h3 className="project-tech text-white mt-2 text-xl ">
            Technologies
          </h3> */}
          <div className="gap-5 mt-5 flex ">
            {technologies.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt={`Technology icon ${index}`}
                className="size-10 "
              />
            ))}
          </div>
        </div>
        <div className="mt-8 text-md">
          <button
            className={`${darkMode ? "live-demo-dark" : "live-demo-light"} text-lg mr-10 px-3 py-3`}
            type="button"
          >
            View Live Demo
          </button>
          <button
            className="visit-site border text-lg px-6 py-3 text-white"
            type="button"
          >
            Visit Site
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDiv;
