const Resume = ({ darkMode, setDarkmode }) => {
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="exo flex justify-center items-center flex-col pt-2 dark:bg-gray-900">
        <div className=" flex justify-start w-full px-5 md:px-0 md:w-[50%] mb-2 font-semibold stext-xl md:text-2xl md:mb-5">
          <h1 className="text-start">Experience</h1>
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

        <div className=" flex justify-start w-full px-5 md:px-0 md:w-[50%] mb-2 font-semibold stext-xl md:text-2xl md:mb-5">
          <h1 className="text-start">Education</h1>
        </div>

        <div
          className="dark:bg-gray-200 mx-4 md:mx-0 mt-5 md:mt-0 border md:w-[50%] border-gray-400 leading-7 cursor-pointer shadow-lg mb-16 rounded-lg p-10 hover:transform hover:scale-105 transition duration-300 ease-in-out"
          id="experience"
        >
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

        <div
          className="dark:bg-gray-200 mx-4 md:mx-0 mt-5 md:mt-0 border md:w-[50%] border-gray-400 leading-7 cursor-pointer shadow-lg mb-16 rounded-lg p-10 hover:transform hover:scale-105 transition duration-300 ease-in-out"
          id="experience"
        >
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
