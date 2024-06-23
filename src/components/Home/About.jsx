import { useState, useEffect } from "react";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";

import { FaGithubSquare, FaXingSquare } from "react-icons/fa";
import { TbBrandDjango } from "react-icons/tb";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaDatabase,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiPostgresql,
  SiOpenlayers,
  SiLeaflet,
  SiQgis,
  SiTypescript,
  SiArcgis,
} from "react-icons/si";

const darkModeProfileAbout = "/assets/about-profile-dark.svg";
const lightModeProfileAbout = "/assets/about-profile-light.svg";

const About = ({ darkMode }) => {
  const icons = [
    {
      icon: <FaReact className="size-6 text-[#686565] dark:text-[#A9A9A9]" />,
      name: "React",
    },
    {
      icon: <FaJs className="size-6 text-[#686565] dark:text-[#A9A9A9]" />,
      name: "JavaScript",
    },
    {
      icon: (
        <SiTailwindcss className="size-6 text-[#686565] dark:text-[#A9A9A9]" />
      ),
      name: "Tailwind CSS",
    },
    {
      icon: <FaHtml5 className="size-6 text-[#686565] dark:text-[#A9A9A9]" />,
      name: "HTML",
    },
    {
      icon: <FaCss3Alt className="size-6 text-[#686565] dark:text-[#A9A9A9]" />,
      name: "CSS",
    },
    {
      icon: <FaPython className="size-6 text-[#686565] dark:text-[#A9A9A9]" />,
      name: "Python",
    },
    {
      icon: (
        <SiPostgresql className="size-6 text-[#686565] dark:text-[#A9A9A9]" />
      ),
      name: "PostgreSQL",
    },
    {
      icon: (
        <SiOpenlayers className="size-6 text-[#686565] dark:text-[#A9A9A9]" />
      ),
      name: "OpenLayers",
    },
    //  {
    //    icon: <SiLeaflet className="size-6 text-[#686565] dark:text-[#A9A9A9]" />,
    //    name: "Leaflet",
    //  },
    {
      icon: <SiQgis className="size-6 text-[#686565] dark:text-[#A9A9A9]" />,
      name: "QGIS",
    },
    //  {
    //    icon: (
    //      <SiTypescript className="size-6 text-[#686565] dark:text-[#A9A9A9]" />
    //    ),
    //    name: "TypeScript",
    //  },
    {
      icon: <SiArcgis className="size-6 text-[#686565] dark:text-[#A9A9A9]" />,
      name: "ArcGIS",
    },
    //  {
    //    icon: (
    //      <TbBrandDjango className="size-6 text-[#686565] dark:text-[#A9A9A9]" />
    //    ),
    //    name: "Django",
    //  },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedIcons = isMobile ? icons.slice(0, 5) : icons;
  return (
    <>
      <div id="about" className={darkMode ? "dark" : ""}>
        <div className="dark:bg-[#222a33]  bg-[#e8e8ec] md:w-full ">
          <div className=" px-5 md:px-0 pt-14  md:py-20  mx-auto md:w-5/6 xl:w-4/6 ">
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

                <div className=" text-lg pt-2 text-[#686565] dark:text-[#A9A9A9]  md:text-start">
                  <p className="py-3">
                    I am a frontend web developer currently completing a
                    master’s degree in applied geoinformatics from the
                    University of Salzburg, Austria. I have a keen interest in
                    web development including Web GIS. My studies have equipped
                    me with hands-on skills in GIS methods and remote sensing,
                    including data acquisition, processing, analysis, and
                    visualization using QGIS and ArcGIS Pro/Online.
                    Additionally, I have gained backend development skills
                    especially in designing and developing spatial data
                    infrastructures using PostgreSQL/PostGIS and Python, as well
                    as frameworks like Django, GeoServer, and OpenLayers.
                  </p>

                  <p>
                    My passion for showcasing projects on the web drove me to
                    delve deeper into frontend development. Therefore, I
                    undertook a comprehensive web development mentorship program
                    which enhanced my problem-solving skills and deepened my
                    understanding of frontend technologies through working on
                    diverse projects. I aim to combine my frontend skills with
                    my backend expertise in geospatial data management to build
                    innovative, customizable, and sustainable software
                    solutions.
                  </p>

                  <h3 className="text-white md:text-xl md:text-start text-center pt-5">
                    Technologies
                  </h3>

                  <div className="flex md:justify-start justify-center  pt-5 items-center gap-3 md:gap-x-4">
                    {displayedIcons.map((item, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div>{item.icon}</div>
                        <span className="text-xs text-center md:text-sm text-[#686565] dark:text-[#A9A9A9]">
                          {item.name}
                        </span>
                      </div>
                    ))}
                    <div
                      className="flex flex-col items-center cursor-pointer"
                      onClick={() => setExpanded(!expanded)}
                    >
                      {/* <div className="">
                        {expanded ? (
                          <FaMinus className=" size-3 text-black dark:text-white" />
                        ) : (
                          <FaPlus className="size-3 text-black dark:text-white" />
                        )}
                      </div> */}
                    </div>
                  </div>
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
                  className=" items-center justify-center md:justify-start flex md:pb-0 pb-5  pt-5"
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
