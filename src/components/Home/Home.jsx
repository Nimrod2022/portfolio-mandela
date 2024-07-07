import { useState, useEffect } from "react";
import ScrollToAbout from "../custom/ScrollToAbout";


const Home = ({ darkMode, scrollToContact }) => {
  const [showScrollToAboutButton, setShowScrollToAboutButton] = useState(false);



  

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const aboutSection = document.getElementById("about");

      if (aboutSection) {
        const aboutSectionTop = aboutSection.getBoundingClientRect().top;

        if (scrollPosition < window.innerHeight / 99 && aboutSectionTop > 0) {
          setShowScrollToAboutButton(true);
        } else {
          setShowScrollToAboutButton(false);
        }
      }
    };

    // Initial check when the component mounts
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAboutClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleGetInTouchClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div id="home" className={darkMode ? "dark" : ""}>
        <div className="dark:bg-[#151C25] bg-[#F0F0F4] min-h-screen satoshi pt-20 md:pt-24 lg:pt-40 flex flex-col ">
          <div className="px-8 text-white md:flex md:gap-5 md:justify-center">
            <div className="items-center md:w-[45%]">
              <div className="flex items-center justify-center">
                {/*  className="home-animation flex items-center justify-center" */}
                <div>
                  <img
                    src="/assets/home-kibet.jpg"
                    alt="animation"
                    className="rounded-full h-40 md:h-56"
                  />
                </div>
              </div>
              <p className="text-3xl md:text-5xl pt-3 md:pt-5 text-[#26313F] dark:text-white text-center">
                Nimrod Kibet
              </p>
              <h1 className="text-[#55E5A4] pt-2 md:pt-5 font-extrabold text-2xl md:text-3xl text-center">
                Front-end Developer
              </h1>
              <p className="text-xl text-[#686565] dark:text-[#A9A9A9] pt-3 text-center">
                I am an innovative and detail-oriented Front End Developer with
                a passion for creating responsive and user-friendly websites.
                Additionally, my expertise extends to geoinformatics, where I
                excel in harnessing the power of spatial data to uncover
                actionable insights.
              </p>
              <div className="items-center flex justify-center md:pb-0 pb-8 pt-8 md:pt-5">
                <div className="flex flex-col items-center">
                  <scrollTo selector="contact">
                    <button
                      onClick={handleGetInTouchClick}
                      type="button"
                      className="bg-[#26313F] dark:bg-[#55E5A4] text-#FAFAFA dark:text-black hover:bg-[#00142D] dark:hover:bg-[#00A359] font-semibold text-md rounded-lg px-2 py-2  mr-8"
                    >
                      Get in Touch
                    </button>
                  </scrollTo>
                </div>

                <div className="flex items-center">
                  <div className="circle"></div>
                  <p className="text-center text-[#686565] dark:text-[#A9A9A9] ml-3">
                    Available for work
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="about"></div>
        </div>
        <ScrollToAbout
          onClick={handleAboutClick}
          visible={showScrollToAboutButton}
        />
      </div>
    </>
  );
};

export default Home;
