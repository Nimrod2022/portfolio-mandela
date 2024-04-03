import { BsFillMoonStarsFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";

const logoDarkMode = "/assets/logo-dark-mode.svg";
const logoLightMode = "/assets/logo-light-mode.svg";

const Hero = ({ darkMode, setDarkMode }) => {
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="exo  px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="">
          <nav className="py-16 md:py-10 pb-4 md:pb-20 flex justify-center md:justify-between gap-x-4 md:gap-x-0  dark:text-white">
            <Link to="/" className="h-7">
              <img
                alt="logo"
                src={darkMode ? logoDarkMode : logoLightMode}
                className="h-full hover:cursor-pointer"
              />
            </Link>
            <ul className="justify-end flex items-center ">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="hover:cursor-pointer text-2xl"
                />
              </li>

              <li>
                <Link
                  to="/"
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/projects"
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/resume"
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  );
};

export default Hero;
