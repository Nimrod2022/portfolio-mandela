import { useState } from "react";
import data from "./data.json";
import ProjectsDiv from "./ProjectsDiv";

const Projects = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(data);

  const filterProjects = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setFilteredProjects(data);
    } else {
      const filtered = data.filter((project) => project.category === category);
      setFilteredProjects(filtered);
    }
  };



  return (
    <section className={darkMode ? "dark" : ""}>
      <div className="satoshi dark:bg-[#151C25] bg-[#F0F0F4]">
        <h1
          id="/projects"
          className="text-center text-[#151C25] dark:text-white text-4xl"
        >
          Projects
        </h1>
        <div className="flex md:text-xl gap-x-5 justify-center mt-10 ">
          {/* Filter buttons */}
          <button
            className={`mr-4 project-border     px-6 py-2 dark:border-[#55e5a4] border-[#26313F]  ${
              activeCategory === "all"
                ? "active dark:bg-[#55e5a4] bg-[#151C25] dark:text-[#000000] text-[#FFFFFF]"
                : "dark:text-white"
            }`}
            onClick={() => filterProjects("all")}
          >
            All Projects
          </button>
          <button
            className={`mr-4 project-border     px-6 py-2 dark:border-[#55e5a4] border-[#26313F]  ${
              activeCategory === "frontend"
                ? "active dark:bg-[#55e5a4] bg-[#151C25] dark:text-[#000000] text-[#FFFFFF]"
                : "dark:text-white"
            }`}
            onClick={() => filterProjects("frontend")}
          >
            Frontend
          </button>
          <button
            className={`project-border     px-6 py-2 dark:border-[#55e5a4] border-[#26313F] ${
              activeCategory === "geoinformatics"
                ? " active dark:bg-[#55e5a4] bg-[#151C25] dark:text-[#000000] text-[#FFFFFF]"
                : "dark:text-white"
            }`}
            onClick={() => filterProjects("geoinformatics")}
          >
            Geoinformatics
          </button>
        </div>
        <div className="satoshi flex gap-10 flex-wrap md:py-20 justify-center dark:bg-[#151C25] bg-[#F0F0F4] pt-20">
          {/* Render filtered projects */}
          {filteredProjects.map((project, index) => (
            <ProjectsDiv
              key={index}
              title={project.title}
              category={project.category}
              image={project.image}
              description={project.description}
              technologies={project.technologies}
              darkMode={darkMode}
              isNew={index < 2 && project.isNew}
            />
          ))}
        </div>

        <div className=" justify-center items-center flex flex-col">
          <button className="mr-4 project-border  text-xl px-6 py-2 dark:border-[#55e5a4] border-[#26313F]  hover:border-none hover:bg-[#00142D] dark:hover:bg-[#00A359]  dark:bg-[#55e5a4] bg-[#151C25] dark:text-[#000000] text-[#FFFFFF]">
            View all Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
