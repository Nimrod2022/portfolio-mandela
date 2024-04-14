
import data from './data.json';
import ProjectsDiv from './ProjectsDiv';

const Projects = ({ darkMode }) => {

  return (
    <section className={darkMode ? 'dark' : ''}>
      <div>

        
      </div>
      <div id="/projects" className="satoshi flex gap-10 flex-wrap md:py-20 justify-center dark:bg-[#151C25] bg-[#F0F0F4] pt-20">
    
        {data.map((project) => (
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
    </section>
  );
};

export default Projects;
