
import ProjectsDiv from "./Projects/ProjectsDiv";

const AllProjects = () => {
  return (
    <>
      <div className="satoshi dark:bg-[#151C25] bg-[#F0F0F4] md:pt-32 pt-10">
        <h1 className="text-center text-[#151C25] dark:text-white text-4xl">
          All Projects
        </h1>
        <div className="satoshi flex gap-10 flex-wrap md:py-20 justify-center dark:bg-[#151C25] bg-[#F0F0F4] pt-20">
          {/* Render all projects */}
          {filteredProjects.map((project, index) => (
            <ProjectsDiv
              key={index}
              title={project.title}
              category={project.category}
              image={project.image}
              description={project.description}
              technologies={project.technologies}
              isNew={index < 2 && project.isNew}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProjects;
