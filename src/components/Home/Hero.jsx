import { BsFillMoonStarsFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import Contact from "./Contact";

const logoDarkMode = "/assets/logo-dark-mode.svg";
const logoLightMode = "/assets/logo-light-mode.svg";

const Hero = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={` ${darkMode ? "dark" : ""}`}>
      <main className="exo  px-10 bg-[#f9fbfc]  dark:bg-gray-900 md:px-20 lg:px-40">
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
            <li>
              <button
                onClick={openModal}
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </main>
      <Contact isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default Hero;
