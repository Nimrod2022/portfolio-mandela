const darkHomeProfile = "/assets/home-profile-dark.png";

const lightHomeProfile = "/assets/home-profile-light.png";

const Home = ({ darkMode }) => {
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <div className="dark:bg-[#151C25] bg-[#F0F0F4] h-screen satoshi">
          {/* <Navbar /> */}
          <div className="px-8 md:px-48 pt-10 md:pt-40 text-white md:flex md:gap-5 md:justify-center ">
            <div className="items-center md:w-[45%]">
              <p className="text-xl text-[#26313F] dark:text-white ">
                Nimrod Kibet
              </p>
              <h1 className=" text-[#26313F]  dark:text-[#55E5A4] pt-2 font-black text-2xl md:text-2xl">
                Frontend & GIS Developer
              </h1>
              <p className="md:w-[100%] text-lg  text-[#686565] dark:text-[#A9A9A9] pt-3 ">
                I specialize in crafting immersive user experiences using the
                latest frontend technologies and frameworks to bring your vision
                to life. Additionally, my expertise extends to geoinformatics,
                where I excel in harnessing the power of spatial data to uncover
                actionable insights.
              </p>
              <div className="items-center flex pt-8 md:pt-5 ">
                <button
                  type="button"
                  className="bg-[#26313F] dark:bg-[#55E5A4] text-#FAFAFA dark:text-black font-semibold text-md rounded-lg px-2 py-2 mr-8"
                >
                  Get in Touch
                </button>

                <div className="flex items-center">
                  <div className="circle"></div>
                  <p className="text-center text-[#686565] dark:text-[#A9A9A9] ml-3">
                    Available for work
                  </p>
                </div>
              </div>
            </div>

            <div className="md:pt-0 pt-10">
              <img
                src={darkMode ? darkHomeProfile : lightHomeProfile}
                alt="home-profile"
                className="h-64"
              />
            </div>
          </div>

          {/* <div className="items-center flex flex-col pb-10 pt-8 justify-center md:hidden">
            <button
              type="button"
              className="bg-[#26313F] dark:bg-[#55E5A4] text-white dark:text-black text-md font-semibold rounded-lg px-2 py-2"
            >
              Get in Touch
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
