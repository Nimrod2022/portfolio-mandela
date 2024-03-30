import { useState } from "react";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaXing } from "react-icons/fa";
const logoDarkMode = "/assets/logo-dark-mode.svg";
const logoLightMode = "/assets/logo-light-mode.svg";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="exo bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-16 md:py-10 mb-4 md:mb-12 flex justify-center md:justify-between gap-x-4 md:gap-x-0  dark:text-white">
            <img
              alt="logo"
              src={darkMode ? logoDarkMode : logoLightMode}
              className="h-7 hover:cursor-pointer"
            />
            <ul className="justify-end flex items-center ">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="hover:cursor-pointer text-2xl"
                />
              </li>

              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className=" py-2 text-teal-600 font-medium dark:text-teal-400 text-3xl md:text-6xl">
              Nimrod Kibet
            </h2>
            <h3 className=" py-2 dark:text-white text-xl md:text-3xl">
              Frontend & GIS Developer.
            </h3>
            <p className=" py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto text-md md:text-xl">
              I specialize in crafting immersive user experiences using the
              latest frontend technologies and frameworks to bring your vision
              to life. Additionally, my expertise extends to geoinformatics,
              where I excel in harnessing the power of spatial data to uncover
              actionable insights.
            </p>
            <div className="text-5xl flex justify-center gap-10 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="https://github.com/Nimrod2022"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/nimrod-kibet-b6b340115/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://www.xing.com/profile/Nimrod_Kibet/web_profiles"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXing />
              </a>
              <a
                href="https://twitter.com/MandelaGI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillTwitterCircle />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
