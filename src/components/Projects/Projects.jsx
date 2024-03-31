const Projects = ({darkMode}) => {

    return(
        <div className={darkMode ? "dark" : ""} >
           <div className="dark:bg-gray-900 h-screen">
           <h1>Projects are in the kitchen</h1>
           </div>
        </div>
    )
};

export default Projects;
