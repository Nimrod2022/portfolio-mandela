const darkHomeProfile = "/assets/home-profile-dark.png";

const lightHomeProfile = "/assets/home-profile-light.png";

const Home = ({ darkMode, scrollToContact }) => {
  return (
    <>
      <div id="/#" className={darkMode ? "dark" : ""}>
        <div className="dark:bg-[#151C25]  bg-[#F0F0F4]  min-h-screen satoshi pt-20 md:pt-0 flex flex-col md:justify-center">
          <div className="px-8   text-white md:flex md:gap-5 md:justify-center ">
            <div className="items-center   md:w-[40%] ">
              <div className="flex items-center justify-center">
              <div className="home-animation  flex items-center justify-center ">
                  <img
                    src="/assets/imagekibe.png"
                    alt="animation"
                    className=" "
                  />
                </div>
              </div>
              <p className="text-3xl pt-3 text-[#26313F] dark:text-white text-center ">
                Nimrod Kibet
              </p>
              <h1 className="  text-[#55E5A4] pt-2 font-extrabold text-2xl md:text-3xl text-center">
                Frontend & GIS Developer
              </h1>
              <p className="  text-xl text-[#686565] dark:text-[#A9A9A9] pt-3  text-center ">
                I specialize in crafting immersive user experiences using the
                latest frontend technologies and frameworks to bring your vision
                to life. Additionally, my expertise extends to geoinformatics,
                where I excel in harnessing the power of spatial data to uncover
                actionable insights.
              </p>
              <div className="items-center flex justify-center pt-8 md:pt-5 ">
                <button
                  onClick={scrollToContact}
                  type="button"
                  className="bg-[#26313F] dark:bg-[#55E5A4] text-#FAFAFA dark:text-black hover:bg-[#00142D] dark:hover:bg-[#00A359] font-semibold text-md rounded-lg px-2 py-2 mr-8"
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

            {/* <div className="md:pt-0 md:hidden block pt-20">
              <img
                src={darkMode ? darkHomeProfile : lightHomeProfile}
                alt="home-profile"
                className="h-64 md:h-72"
              />
            </div> */}
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
