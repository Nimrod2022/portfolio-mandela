





const About = () => {
  return (
    <div className="bg-[#151C25] gap-20 px-60 h-96 satoshi flex justify-center ">
      {/* Image */}
      <div>
      <div className="relative">
        <div className="bg-[#55E5A4] h-72 w-64 rounded-sm"></div>
        <img
          src="/assets/profile.png"
          className="absolute top-4 left-4 h-72 rounded-sm"
          alt="Your Image"
        />
        <div>

        </div>
      </div>

      </div>
      {/* Text */}
      <div className="">
        <h1 className="text-3xl text-white">About Me</h1>
        <div className="flex gap-2 pt-2 items-center">
          <hr className="about-line w-[5%] ml-6 border-[#55E5A4]" />
          <h3 className="text-[#55E5A4] text-sm font-semibold">Who am I?</h3>
        </div>

        <p className="w-[85%] pt-5 text-[#A9A9A9]">
          I am currently a master’s student in Applied Geoinformatics at the
          University of Salzburg, Austria. I have a keen interest in front-end
          and GIS development. My goal is to use my expertise in building
          exciting and functional user interfaces. Additionally, employ my
          geospatial analysis, modeling, and process automation skills to
          engineer innovative, customizable, and sustainable software solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
