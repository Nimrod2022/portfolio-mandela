

const Home = ({darkMode}) => {
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-[#151C25] bg-[#F0F0F4] h-screen satoshi">
        {/* <Navbar /> */}
        <div className="container md:py-28 px-8 md:px-0 pt-10 md:mt-0 mx-auto flex flex-col text-white items-center josefin-sans">
          <div className="flex items-center flex-col">
            <p className="text-3xl text-[#26313F] dark:text-white ">Nimrod Kibet</p>
            <h1 className="md:w-[40%] text-[#26313F]  dark:text-[#55E5A4] text-center pt-6 md:pt-2 font-extrabold text-3xl md:text-3xl">
              Frontend & GIS Developer
            </h1>
            <p className="md:w-[44%] text-lg text-center text-[#686565] dark:text-[#A9A9A9] pt-4 ">
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
              className="bg-[#26313F] dark:bg-[#55E5A4] text-#FAFAFA dark:text-black font-semibold text-md rounded-lg px-2 py-2 mr-8"
            >
              Get in Touch
            </button>

            <div className="circle"></div>
            <p className="text-center text-[#686565] dark:text-[#A9A9A9] ml-3">
              Available for work
            </p>
          </div>
        </div>

        <div className="items-center flex flex-col pb-10 pt-8 justify-center md:hidden">
          <button
            type="button"
            className="bg-[#26313F] dark:bg-[#55E5A4] text-white dark:text-black text-md font-semibold rounded-lg px-2 py-2"
          >
            Get in Touch
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
