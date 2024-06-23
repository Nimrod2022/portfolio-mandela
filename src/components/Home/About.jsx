import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";

import { FaGithubSquare, FaXingSquare } from "react-icons/fa";

const darkModeProfileAbout = "/assets/about-profile-dark.svg";
const lightModeProfileAbout = "/assets/about-profile-light.svg";

const About = ({ darkMode }) => {
  return (
    <>
      <div id="about" className={darkMode ? "dark" : ""}>
        <div className="dark:bg-[#222a33]  bg-[#e8e8ec] md:w-full ">
          <div className=" px-5 md:px-0 pt-14 md:pt-20  mx-auto md:w-5/6 xl:w-4/6 ">
            <div className="flex flex-col md:flex-row  gap-10 md:gap-20 ">
              <div className="w-full    md:w-[40%]">
                <img
                  src={darkMode ? darkModeProfileAbout : lightModeProfileAbout}
                  alt="about-profile"
                  className="w-full xl:h-[80%] "
                />

                <div className="flex gap-3 mt-5  justify-center  ">
                  <a
                    href="https://github.com/Nimrod2022"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithubSquare className="size-10 text-[#26313F] s dark:text-[#55E5A4]" />
                  </a>

                  <a
                    href="https://www.xing.com/profile/Nimrod_Kibet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaXingSquare className="size-10 text-[#26313F] s dark:text-[#55E5A4]" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/nimrod-kibet-b6b340115/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="size-10 text-[#26313F] s dark:text-[#55E5A4]" />
                  </a>

                  <a
                    href="https://twitter.com/MandelaGI?t=ejgoi2MMFnyuNXcdNoMXtA&s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaSquareXTwitter className="size-10 text-[#26313F] s dark:text-[#55E5A4]" />
                  </a>
                </div>
              </div>

              <div className="md:w-[70%]">
                <div className="container mx-auto flex justify-center md:justify-start">
                  <div className="">
                    <h1 className="text-3xl text-center md:text-start font-extrabold text-[#000000] dark:text-white">
                      About Me
                    </h1>
                    <div className="flex gap-2 pt-2 items-center">
                      <hr className="about-line flex-grow border-[#26313F] dark:border-[#55E5A4]" />
                      <h3 className="text-[#26313F] font-bold dark:text-[#55E5A4] text-sm">
                        Who am I?
                      </h3>
                    </div>
                  </div>
                </div>

                <div className=" text-lg pt-5 text-[#686565] dark:text-[#A9A9A9]  md:text-start">
                  <p className="py-3">
                    I am a frontend web developer currently finalizing a
                    master’s degree in Applied Geoinformatics from the
                    University of Salzburg, Austria. My keen interest lies in
                    web development and Web GIS development, where I aim to
                    create dynamic and engaging user experiences that make an
                    impact.
                  </p>

                  <p>
                    During my studies at the Department of Geoinformatics, I
                    gained hands-on skills in GIS methods and remote sensing,
                    focusing on data acquisition, processing, analysis, and
                    visualization using software such as QGIS and ArcGIS
                    Pro/Online. The program also equipped me with skills in
                    backend development, especially in designing and developing
                    spatial data infrastructures using PostgreSQL and Python,
                    including working with frameworks and libraries such as
                    Django, GeoServer, and OpenLayers. However, with this
                    technical foundation, I also had a drive to showcase
                    projects on the web, which ignited my passion for frontend
                    development.
                  </p>

                  <p className="py-3">
                    I started by learning HTML, CSS, and JavaScript, and
                    advanced to ReactJS. Through a comprehensive mentorship
                    program, I gained hands-on experience with ReactJS,
                    JavaScript, HTML5, CSS3, Python, Django, and Tailwind CSS. I
                    worked on various projects that enhanced my problem-solving
                    skills and deepened my understanding of frontend
                    technologies.
                  </p>

                  <p>
                    Combining my frontend skills with my backend expertise in
                    geospatial data management, my goal is to use my expertise
                    to build exciting and functional user interfaces while also
                    leveraging my geospatial analysis, modeling, and process
                    automation skills to reveal new actionable insights from
                    data. I aim to engineer innovative, customizable, and
                    sustainable software solutions.
                  </p>
                </div>

                {/* <h3 className="text-[#26313F] text-center md:text-start my-5  font-semibold dark:text-[#55E5A4]">
                  Technologies
                </h3> */}

                {/* <div className="flex pb-7 gap-5 md:justify-start justify-center md:gap-8">
                  <div>
                    <img
                      src="/assets/react.svg"
                      alt="react"
                      className="size-8 md:size-10"
                    />
                    <h3 className="text-center text-sm text-[#686565] dark:text-[#A9A9A9]">
                      React
                    </h3>
                  </div>
                  <div>
                    <img
                      src="/assets/js.svg"
                      alt="Javascript"
                      className="size-8 md:size-10"
                    />
                    <h3 className="text-center text-sm text-[#686565] dark:text-[#A9A9A9]">
                      JS
                    </h3>
                  </div>

                  <div>
                    <img
                      src="/assets/tailwind.svg"
                      alt="tailwind"
                      className="size-8 md:size-10"
                    />
                    <h3 className="text-center text-sm text-[#686565] dark:text-[#A9A9A9]">
                      Tailwind
                    </h3>
                  </div>
                  <div>
                    <img
                      src="/assets/html.svg"
                      alt="html"
                      className="size-8 md:size-10"
                    />
                    <h3 className="text-center text-sm text-[#686565] dark:text-[#A9A9A9]">
                      HTML
                    </h3>
                  </div>

                  <div>
                    <img
                      src="/assets/css.svg"
                      alt="css"
                      className=" size-8 md:size-10"
                    />
                    <h3 className="text-center text-sm text-[#686565] dark:text-[#A9A9A9]">
                      CSS
                    </h3>
                  </div>

                  <div>
                    <img
                      src="/assets/python.svg"
                      alt="python"
                      className="size-8 md:size-10"
                    />
                    <h3 className="text-center text-sm text-[#686565] dark:text-[#A9A9A9]">
                      Python
                    </h3>
                  </div>
                </div> */}

                <div
                  id="projects"
                  className=" items-center justify-center md:justify-start flex md:py-10 py-5"
                >
                  <button
                    type="button"
                    className="border-2 border-[#26313F]  font-bold dark:hover:bg-[#02D375] hover:border-none dark:hover:text-black hover:text-white hover:bg-[#00142D] dark:border-[#55E5A4] text-md  w-48 rounded-md py-2 px-2 text-[#26313F] dark:text-[#55E5A4]"
                  >
                    <a
                      href="/assets/Nimrod Kibet CV.pdf"
                      download="Nimrod Kibet CV"
                    >
                      Download Resume
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
