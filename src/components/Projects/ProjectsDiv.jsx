import React from "react";

const ProjectsDiv = ({ darkMode, title, description, image, technologies }) => {
  return (
    <div className="h-[630px] w-[565px] rounded-3xl md:my-5 overflow-hidden">
      <img src={image} alt={title} className=" image" />
      <div className="bg-[#26313F] text-center items-center h-full  ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="project-title text-white ">{title}</h1>
          <p className="project-description text-[#A9A9A9] ">{description}</p>
        </div>

        <div className="justify-center flex flex-col items-center">
          <h3 className="project-tech text-white ">Technologies</h3>
          <div className="project-icons md:pt-[16px] flex ">
            {technologies.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt={`Technology icon ${index}`}
                className="size-10 mr-2"
              />
            ))}
          </div>
        </div>
        <div className="pt-4 text-md">
          <button
            className={`${darkMode ? "live-demo-dark" : "live-demo-light"} text-lg mr-10 p-3`}
            type="button"
          >
            View Live Demo
          </button>
          <button className="visit-site border text-lg md:px-6 p-3 text-white" type="button">Visit Site</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDiv;
