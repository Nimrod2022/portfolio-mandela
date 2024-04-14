import  { useState } from "react";
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
        <h1 className="text-center text-[#151C25] dark:text-white text-4xl">Projects</h1>
        <div className="flex md:text-xl gap-x-5 justify-center mt-16 mb-8">
          {/* Filter buttons */}
          <button
            className={`mr-4 filter-btn-light dark:filter-btn  ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => filterProjects("all")}
          >
            All Projects
          </button>
          <button
            className={`mr-4  filter-btn-light dark:filter-btn  ${activeCategory === "frontend" ? "active" : ""}`}
            onClick={() => filterProjects("frontend")}
          >
            Frontend
          </button>
          <button
            className={`filter-btn-light dark:filter-btn ${activeCategory === "geoinformatics" ? "active" : ""}`}
            onClick={() => filterProjects("geoinformatics")}
          >
            Geoinformatics
          </button>
        </div>
        <div
          id="/projects"
          className="satoshi flex gap-10 flex-wrap md:py-20 justify-center dark:bg-[#151C25] bg-[#F0F0F4] pt-20"
        >
          {/* Render filtered projects */}
          {filteredProjects.map((project) => (
            <ProjectsDiv
              key={project.id}
              title={project.title}
              category={project.category}
              image={project.image}
              description={project.description}
              technologies={project.technologies}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
