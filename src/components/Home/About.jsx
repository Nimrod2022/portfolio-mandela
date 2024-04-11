import { ImGithub } from "react-icons/im";

const About = () => {
  return (
    <div
      id="about"
      className="bg-[#151C25] md:h-screen md:gap-20 px-8 md:px-60 satoshi md:flex  justify-center "
    >
      {/* Image */}
      <div className="md:px-0 px-10 ">
        <div className="relative">
          <div className="bg-[#55E5A4] h-60 w-40 md:h-72 md:w-64 rounded-sm"></div>
          <img
            src="/assets/profile.png"
            className="absolute md:top-4 md:left-4 top-4 left-4 h-60 rounded-sm"
            alt="Your Image"
          />
        </div>
      </div>
      {/* Text */}
      <div className="">
        <h1 className="text-3xl pt-14 md:pt-0 text-center md:text-start text-white">
          About Me
        </h1>
        <div className="flex gap-2 pt-2 md:justify-start  justify-center items-center">
          <hr className="about-line w-[5%] ml-6 border-[#55E5A4]" />
          <h3 className="text-[#55E5A4] text-sm md:text-start text-center first-line:font-semibold">
            Who am I?
          </h3>
        </div>

        <p className="md:w-[85%] pt-5 text-[#A9A9A9]">
          I am currently a master’s student in Applied Geoinformatics at the
          University of Salzburg, Austria. I have a keen interest in front-end
          and GIS development. My goal is to use my expertise in building
          exciting and functional user interfaces. Additionally, employ my
          geospatial analysis, modeling, and process automation skills to
          engineer innovative, customizable, and sustainable software solutions.
        </p>
        <h3 className="text-[#55E5A4] pt-8 text-md">Technologies</h3>
        <div className="flex pt-5 gap-4 md:gap-6">
          <img
            src="/assets/react.svg"
            alt="react"
            className="size-12 md:size-14"
          />
          <img
            src="/assets/js.svg"
            alt="Javascript"
            className="size-12 md:size-14"
          />
          <img
            src="/assets/html.svg"
            alt="html"
            className="size-12 md:size-12"
          />

          <img
            src="/assets/css.svg"
            alt="css"
            className=" size-12 md:size-14"
          />

          <img src="/assets/tailwind.svg" alt="tailwind" className="size-12" />

          <img src="/assets/python.svg" alt="python" className="size-12" />
        </div>
        <div className="pt-8 pb-20 flex justify-center md:justify-start">
          <button
            type="button"
            className="border border-[#55E5A4] text-md font-semibold w-48 rounded-md py-2 px-2 text-[#55E5A4]"
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
