import { Link } from "react-scroll";
import React, { useEffect } from "react";

import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";

const logoDarkMode = "/assets/logo-dark-mode.svg";
const logoLightMode = "/assets/logo-light-mode.svg";

const darkIcon = "/assets/dark-theme-icon.svg";
const lightIcon = "/assets/light-theme-icon.svg";

const Navbar = ({ darkMode, setDarkMode }) => {
  //  Sticky nav handling
  const [scrolled, setScrolled] = useState(false);
  const [bgColor, setBgColor] = useState(darkMode ? "#151C25" : "#F0F0F4");
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Update the background color based on the current dark mode
    setBgColor(darkMode ? "#151C25" : "#F0F0F4");

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      if (window.scrollY > 10) setBgColor(darkMode ? "#26313F" : "#d6d7dc");
      else setBgColor(darkMode ? "#151C25" : "#F0F0F4");
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <header className={`${scrolled ? "stickynav" : ""}`}>
        <div
          className="md:py-2 py-3 relative"
          style={{ backgroundColor: bgColor }}
        >
          <nav className="flex justify-between items-center md:items-center w-[100%] mx-auto satoshi text-lg text-white px-5 md:px-28  md:py-4">
            <div>
              <Link to="/#" smooth={true} duration={700}>
                <img
                  src={darkMode ? logoDarkMode : logoLightMode}
                  alt="logo"
                  className="hover:cursor-pointer size-10  md:size-12"
                />
              </Link>
            </div>

            <div className="flex gap-10">
              <Link to="/about" smooth={true} duration={1000}>
                <button
                  type="button"
                  className="bg-[#26313F] dark:bg-[#55E5A4] text-[#FFFFFF] dark:text-black hover:bg-[#00142D] dark:hover:bg-[#00A359] text-md font-semibold hidden w-24 md:block rounded-md py-1 px-4 "
                >
                  About
                </button>
              </Link>

              <Link to="/projects" smooth={true} duration={700}>
                <button
                  type="button"
                  className="bg-[#26313F] dark:bg-[#55E5A4] text-[#FFFFFF] dark:text-black hover:bg-[#00142D] dark:hover:bg-[#00A359]  text-md font-semibold w-24 hidden md:block rounded-md py-1 px-4 "
                >
                  Projects
                </button>
              </Link>

              <Link to="/contact" smooth={true} duration={700}>
                <button
                  type="button"
                  className="border border-[#26313F] dark:border-[white] text-[#26313F] dark:text-white hover:bg-[#00142D] hover:text-white dark:hover:bg-[#55E5A4] dark:hover:text-[#26313F] dark:hover:border-[#26313F] text-md font-semibold w-24 hidden md:block rounded-md py-1 px-4 "
                >
                  Contact
                </button>
              </Link>
              <button className=" dark-mode-button size-6 md:size-auto ">
                <img
                  src={darkMode ? lightIcon : darkIcon}
                  alt="theme"
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                />
              </button>
            </div>

            {/* Sidebar to cover entire screen */}

            <div className="sm:hidden block z-10">
              {isOpen ? (
                <AiOutlineClose
                  className="text-3xl dark:text-[#55E5A4] text-[d6d7dc]"
                  onClick={toggleNav}
                />
              ) : (
                <BiMenuAltRight
                  className="text-4xl dark:text-[#55E5A4] text-[#26313F]"
                  onClick={toggleNav}
                />
              )}
            </div>
            {/*Mobile menu /> */}
            <div
              className={
                isOpen
                  ? "sm:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center text-center  w-full h-screen bg-[#000]/85 text-[#55E5A4] duration-300 ease-in-out"
                  : "sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center text-center w-full h-screen  bg-[#000]/85 text-white duration-300 ease-in-out"
              }
            >
              <ul onClick={toggleNav}>
                <Link
                  to="/#"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onClick={toggleNav}
                >
                  <li className="p-4">Home</li>
                </Link>
                <Link
                  to="/about"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onClick={toggleNav}
                >
                  <li className="p-4">About</li>
                </Link>

                <Link
                  to="/projects"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onClick={toggleNav}
                >
                  <li className="p-4">Projects</li>
                </Link>

                <Link
                  to="/contact"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onClick={toggleNav}
                >
                  <li className="p-4 text-white">Contact</li>
                </Link>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
