const darkModeProfileAbout = "/assets/about-profile-dark.svg";
const lightModeProfileAbout = "/assets/about-profile-light.svg";

const About = ({ darkMode }) => {
  return (
    <>
      <div id="/about" className={darkMode ? "dark" : ""}>
        <div className="dark:bg-[#151C25] bg-[#F0F0F4]  md:gap-16 px-8 md:px-80 satoshi md:flex md:pt-40 pt-10  justify-center ">
          {/* Image */}

          <img
            src={darkMode ? darkModeProfileAbout : lightModeProfileAbout}
            alt="about-profile"
            className="h-80 hidden md:block "
          />

          {/* Text */}
          <div className="">
            <h1 className="text-3xl pt-10 md:pt-0 text-center md:text-start font-extrabold text-[#000000] dark:text-white">
              About Me
            </h1>
            <div className="flex gap-2 pt-2 md:justify-start  justify-center items-center">
              <hr className="about-line w-[5%] ml-6 border-[#26313F] dark:border-[#55E5A4]" />
              <h3 className="text-[#26313F] font-bold dark:text-[#55E5A4] text-sm md:text-start text-center first-line:font-semibold">
                Who am I?
              </h3>
            </div>

            <p className="md:w-[95%]  text-lg pt-5 text-[#686565] dark:text-[#A9A9A9] md:text-start text-center">
              I am currently a master’s student in Applied Geoinformatics at the
              University of Salzburg, Austria. I have a keen interest in
              front-end and GIS development. My goal is to use my expertise in
              building exciting and functional user interfaces. Additionally,
              employ my geospatial analysis, modeling, and process automation
              skills to engineer innovative, customizable, and sustainable
              software solutions.
            </p>
            <h3 className="text-[#000000] font-extrabold dark:text-[#55E5A4] pt-8 text-xl md:text-start text-center">
              Technologies
            </h3>
            <div className="flex pt-5 gap-4  md:gap-6">
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
            </div>
            <div className="pt-8 pb-20 flex justify-center md:justify-start">
              <button
                type="button"
                className="border-2 border-[#26313F] font-bold dark:hover:bg-[#02D375] dark:hover:text-black hover:text-white hover:bg-[#00142D] dark:border-[#55E5A4] text-md  w-48 rounded-md py-2 px-2 text-[#26313F] dark:text-[#55E5A4]"
              >
                <a href="/assets/resume.pdf" download="Nimrod Kibet CV">
                  Download Resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
