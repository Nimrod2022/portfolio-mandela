const darkModeProfileAbout = "/assets/about-profile-dark.svg";
const lightModeProfileAbout = "/assets/about-profile-light.svg";

const About = ({ darkMode }) => {
  return (
    <>
      <div id="/about" className={darkMode ? "dark" : ""}>
        <div className="dark:bg-[#222a33]  bg-[#e8e8ec] md:w-full ">
          <div className=" px-5 md:px-0 pt-14 md:pt-20  mx-auto md:w-5/6 xl:w-4/6 ">
            <div className="flex justify-center flex-col md:flex-row  gap-10 md:gap-20 ">
              <div className="w-full  md:h-[555px]  md:w-[100%]">
                <img
                  src={darkMode ? darkModeProfileAbout : lightModeProfileAbout}
                  alt="about-profile"
                  className="w-full xl:h-[80%]  "
                />
              </div>

              <div className="">
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

                <p className=" text-lg pt-5 text-[#686565] dark:text-[#A9A9A9]  md:text-start">
                  I am currently a master’s student in Applied Geoinformatics at
                  the University of Salzburg, Austria. I have a keen interest in
                  front-end and GIS development. My goal is to use my expertise
                  in building exciting and functional user interfaces.
                  Additionally, employ my geospatial analysis, modeling, and
                  process automation skills to engineer innovative,
                  customizable, and sustainable software solutions.
                </p>

                <h3 className="text-[#26313F] text-center md:text-start my-5  font-semibold dark:text-[#55E5A4]">
                  Technologies
                </h3>

                <div className="flex pb-7 gap-5  md:gap-8">
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

                <div className=" items-center justify-center md:justify-start flex ">
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
