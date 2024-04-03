import React, { useState, useRef } from "react";
import RHero from "./RHero";
import { FaHtml5, FaCss3Alt, FaReact, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiPython, SiPostgresql } from "react-icons/si";

const Resume = ({ darkMode }) => {
  const form = useRef();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!firstname || !email || !subject || !message || !lastname || !phone) {
      toast.error("Email not sent, Please fill in all fields", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="exo flex justify-center items-center flex-col pt-2 dark:bg-gray-900">
        <div className="bg-white px mt-5 md:mt-0 border md:w-[50%] border-gray-400 leading-7 cursor-pointer shadow-lg mb-16 rounded-lg  hover:transform hover:scale-105 transition duration-300 ease-in-out">
          <RHero />
        </div>
        <div
          id="bio"
          className="dark:bg-gray-200 mx-4 md:mx-0 mt-5 md:mt-0 border md:w-[50%] border-gray-400 leading-7 cursor-pointer shadow-lg mb-16 rounded-lg p-10 hover:transform hover:scale-105 transition duration-300 ease-in-out"
        >
          <p>
            I am currently a master’s student in Applied Geoinformatics at the
            University of Salzburg, Austria. My career goal is to harness my
            expertise in geospatial analysis, modeling, and process automation
            to engineer innovative, customizable, and sustainable software
            solutions. I am excited to explore opportunities that allow me to
            apply my skills and make meaningful contributions to the geospatial
            community through my work.
          </p>

          <div className=" md:flex flex-wrap mt-4 gap-4">
            <div className="flex items-center gap-2">
              <FaHtml5 size={36} color="#E34F26" />
              <span>HTML</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCss3Alt size={36} color="#264DE4" />
              <span>CSS</span>
            </div>
            <div className="flex items-center gap-2">
              <SiTailwindcss size={36} color="#38B2AC" />
              <span>Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-2">
              <FaReact size={36} color="#61DAFB" />
              <span>React JS</span>
            </div>
            <div className="flex items-center gap-2">
              <FaJs size={36} color="#FED500" />
              <span>JavaScript</span>
            </div>
            <div className="flex items-center gap-2">
              <SiPython size={24} color="#3776AB" />
              <span>Python</span>
            </div>
            <div className="flex items-center gap-2">
              <SiPostgresql size={24} color="#336791" />
              <span>PostgreSQL</span>
            </div>
            <div className="items-center flex gap-x-2">
              <img src="/assets/arcgis.png" alt="" className="h-8" />
              <span>ArcGIS Pro/Online</span>
            </div>
            <div className="items-center flex gap-x-2">
              <img src="/assets/ecognition.png" alt="" className="h-10" />
            </div>
            <div className="items-center flex gap-x-2">
              <img src="/assets/qgis.png" alt="" className="h-8" />
            </div>
          </div>
        </div>

        <div
          id="experience"
          className=" flex justify-start w-full px-5 md:px-0 md:w-[50%] mb-2 font-semibold stext-xl md:text-2xl md:mb-5"
        >
          <h1 className="text-start dark:text-white">Experience</h1>
        </div>

        <div
          className="dark:bg-gray-200 mx-4 md:mx-0 mt-5 md:mt-0 border md:w-[50%] border-gray-400 leading-7 cursor-pointer shadow-lg mb-16 rounded-lg p-10 hover:transform hover:scale-105 transition duration-300 ease-in-out"
          id="experience"
        >
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-[90%]">
              <h2 className=" text-[#4f585b] font-bold text-xl">Intern</h2>
              <p className="mt-3">2024</p>
              <p className="mt-3">Spatial Services GmbH</p>
              <p className="text-[#4f585b] mt-2 font-semibold">
                Salzburg, Austria
              </p>
            </div>

            <div className="flex flex-col">
              <p className=" md:ml-16 w-[90%] ">
                Supporting the design and development of automated workflows for
                dwelling extraction, flood mapping and more using deep learning
                from remote sensing data.
              </p>

              <img
                src="/assets/spatial-services.png"
                alt=""
                className="mt-7 md:ml-16 w-56"
              />
            </div>
          </div>
        </div>

        <div
          className="dark:bg-gray-200 exo mx-4 md:mx-0 mt-5 md:mt-0 border md:w-[50%] border-gray-400 leading-7 cursor-pointer shadow-lg mb-16 rounded-lg p-10 hover:transform hover:scale-105 transition duration-300 ease-in-out"
          id="experience"
        >
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-[90%]">
              <h2 className="text-[#676E71] font-bold text-xl">
                Student assistant
              </h2>
              <p className="mt-3">2023</p>
              <p className="mt-3">Department of Geoinformatics</p>
              <p className="text-[#4f585b] mt-2 font-semibold">
                Salzburg, Austria
              </p>
            </div>

            <div className="flex flex-col">
              <p className=" md:ml-16 w-[90%]">
                I was tasked with providing technical support to students in
                remote sensing courses. Additionally, I helped in the
                redevelopment of remote sensing curriculumn for the UNIGIS
                master program.
              </p>

              <img
                src="/assets/zgis.png"
                alt=""
                className="mt-7 md:ml-16 w-56"
              />
            </div>
          </div>
        </div>

        <div
          className="dark:bg-gray-200 exo mx-4 md:mx-0 mt-5 md:mt-0 border md:w-[50%] border-gray-400 leading-7 cursor-pointer shadow-lg mb-16 rounded-lg p-10 hover:transform hover:scale-105 transition duration-300 ease-in-out"
          id="experience"
        >
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-[90%]">
              <h2 className="text-[#676E71] font-bold text-xl">
                Petroleum & Gas Officer
              </h2>
              <p className="mt-3">2021</p>
              <p className="mt-3">EPRA</p>
              <p className="text-[#4f585b] mt-2 font-semibold">
                Nairobi, Kenya
              </p>
            </div>

            <div className="flex flex-col">
              <p className=" md:ml-16 w-[90%]">
                I reviewed environmental reports for oil and gas projects and
                provided sector-specific comments based on my analysis. I was
                also tasked with technical audits, accident investigation and
                site inspections for Petroleum and LPG projects.
              </p>

              <img
                src="/assets/epra.png"
                alt=""
                className="mt-7 md:ml-16 w-56"
              />
            </div>
          </div>
        </div>

        <div
          className="dark:bg-gray-200 exo mx-4 md:mx-0 mt-5 md:mt-0 border md:w-[50%] border-gray-400 leading-7 cursor-pointer shadow-lg mb-16 rounded-lg p-10 hover:transform hover:scale-105 transition duration-300 ease-in-out"
          id="experience"
        >
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-[90%]">
              <h2 className="text-[#676E71] font-bold text-xl">
                Technical assistant
              </h2>
              <p className="mt-3">2017-2019</p>
              <p className="mt-3">Envertek Africa Consult</p>
              <p className="text-[#4f585b] mt-2 font-semibold">
                Kakamega, Kenya
              </p>
            </div>

            <div className="flex flex-col">
              <p className=" md:ml-16 w-[90%]">
                Conducted Environmental impact assessment and audits for
                Petroleum and other proposed projects. I also supported
                environmental research including data collection, and analysis.
              </p>

              {/* <img
                src="/assets/zgis.png"
                alt=""
                className="mt-7 md:ml-16 w-56"
              /> */}
            </div>
          </div>
        </div>

        <div
          className="dark:bg-gray-200 exo mx-4 md:mx-0 mt-5 md:mt-0 border md:w-[50%] border-gray-400 leading-7 cursor-pointer shadow-lg mb-16 rounded-lg p-10 hover:transform hover:scale-105 transition duration-300 ease-in-out"
          id="experience"
        >
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-[90%]">
              <h2 className="text-[#676E71] font-bold text-xl">Intern</h2>
              <p className="mt-3">2018</p>
              <p className="mt-3">The Water Project</p>
              <p className="text-[#4f585b] mt-2 font-semibold">
                Kakamega, Kenya
              </p>
            </div>

            <div className="flex flex-col">
              <p className=" md:ml-16 w-[90%]">
                I provided technical support for use and maintenance of GIS
                equipment and applications. Additionally, I supported
                development of water point maps and conducted environmental
                impact assessments for new water point projects.
              </p>

              <img
                src="/assets/water.png"
                alt=""
                className="mt-7 md:ml-16 w-56"
              />
            </div>
          </div>
        </div>

        {/* Education Section */}

        <div
          id="education"
          className=" flex justify-start w-full px-5 md:px-0 md:w-[50%] mb-2 font-semibold stext-xl md:text-2xl md:mb-5"
        >
          <h1 className="text-start dark:text-white">Education</h1>
        </div>

        <div className="dark:bg-gray-200 mx-4 md:mx-0 mt-5 md:mt-0 border md:w-[50%] border-gray-400 leading-7 cursor-pointer shadow-lg mb-16 rounded-lg p-10 hover:transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-[90%]">
              <h2 className=" text-[#4f585b] font-bold text-xl">
                MSc Applied Geoinformatics
              </h2>
              <p className="mt-3">2022 - 2025</p>
              <p className="mt-3">University of Salzburg</p>
              <p className="text-[#4f585b] mt-2 font-semibold">
                Salzburg, Austria
              </p>
              <img src="/assets/zgis.png" alt="" className="mt-7  w-56" />
            </div>

            <div className="flex flex-col">
              <p className=" md:ml-16 w-[90%] ">
                This program provides hands-on skills in integrating GIS and
                computers science concepts for multidisciplinary problem solving
                and research with a focus on:
              </p>
              <p className="pt-5">
                <ul className="list-disc md:ml-24">
                  <li>Advanved GIS concepts and methods</li>
                  <li>Remote Sensing & Earth Observation</li>
                  <li>Software development</li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div className="dark:bg-gray-200 mx-4 md:mx-0 mt-5 md:mt-0 border md:w-[50%] border-gray-400 leading-7 cursor-pointer shadow-lg mb-16 rounded-lg p-10 hover:transform hover:scale-105 transition duration-300 ease-in-out">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-[90%]">
              <h2 className=" text-[#4f585b] font-bold text-xl">
                BSc Disaster Mistigation & Sustainable Development
              </h2>
              <p className="mt-3">2014 - 2019</p>
              <p className="mt-3">University of Salzburg</p>
              <p className="text-[#4f585b] mt-2 font-semibold">
                Kakamega, Kenya
              </p>
            </div>

            <div className="flex flex-col">
              <p className=" md:ml-16 w-[90%] ">
                Central to the program was utilization of spatial data and GIS
                methods for disaster and emergency management, environmental
                management and natural resource management with a focus on
                sustainability approaches.
              </p>
              {/* <img src="/assets/mmust.png" alt="" className="mt-7 h-16  w-56" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
