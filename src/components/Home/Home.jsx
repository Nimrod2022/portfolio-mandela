const Home = () => {
  return (
    <>
      <div className="bg-[#151C25] h-screen satoshi">
        <div className="container md:py-28 px-8 md:px-0 pt-10 md:mt-0 mx-auto flex flex-col text-white items-center josefin-sans">
          <div className="flex items-center flex-col">
            <p className="text-3xl text-white ">Nimrod Kibet</p>
            <h1 className="md:w-[40%] text-[#55E5A4] text-center pt-6 md:pt-2 font-bold text-3xl md:text-3xl">
              Frontend & GIS Developer
            </h1>
            <p className="md:w-[44%] text-lg text-center text-white pt-4 ">
              I specialize in crafting immersive user experiences using the
              latest frontend technologies and frameworks to bring your vision
              to life. Additionally, my expertise extends to geoinformatics,
              where I excel in harnessing the power of spatial data to uncover
              actionable insights.
            </p>
          </div>

          <div className=" justify-center items-center pt-8 hidden md:flex">
            <button
              type="button"
              className="bg-[#55E5A4] text-black text-md rounded-lg px-2 py-2 mr-8"
            >
              Get in Touch
            </button>

            <div className="circle"></div>
            <p className="text-center ml-3">Available for work</p>
          </div>
        </div>

        <div className="items-center flex flex-col pb-10 pt-8 justify-center md:hidden">
          <button
            type="button"
            className="bg-[#55E5A4] text-black text-md rounded-lg px-2 py-2"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
