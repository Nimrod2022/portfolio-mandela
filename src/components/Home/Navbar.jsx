import { Link } from "react-scroll";
import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { useState } from "react";

const logoDarkMode = "assets/logo-dark-mode.svg";
const logoLightMode = "assets/logo-light-mode.svg";

const darkIcon = "/assets/dark-theme-icon.svg";
const lightIcon = "/assets/light-theme-icon.png";

const Navbar = ({ darkMode, setDarkMode }) => {
  //  Sticky nav handling
  const [scrolled, setScrolled] = useState(false);
  const [bgColor, setBgColor] = useState(darkMode ? "#151C25" : "#F0F0F4");

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
        <div className="md:py-3 relative" style={{ backgroundColor: bgColor }}>
          <nav className="flex justify-between md:items-center satoshi text-lg text-white px-8 md:px-36 py-4 md:py-4">
            <Link to="/#" smooth={true} duration={700}>
              <img
                src={darkMode ? logoDarkMode : logoLightMode}
                alt="logo"
                className="hover:cursor-pointer pt-4 md:pt-0 size-12"
              />
            </Link>

            {/* Sidebar to cover entire screen */}
            <div className="block md:hidden fixed inset-0 z-50 items-center">
              <Sidebar darkMode={darkMode} />
            </div>

            <div className="flex gap-10">
              <Link to="/about" smooth={true} duration={1000}>
                <button
                  type="button"
                  className="bg-[#26313F] dark:bg-[#55E5A4] text-[#FFFFFF] dark:text-black text-md font-semibold hidden w-24 md:block rounded-md py-1 px-4 "
                >
                  About
                </button>
              </Link>

              <Link to="/projects" smooth={true} duration={700}>
                <button
                  type="button"
                  className="bg-[#26313F] dark:bg-[#55E5A4] text-[#FFFFFF] dark:text-black  text-md font-semibold w-24 hidden md:block rounded-md py-1 px-4 "
                >
                  Projects
                </button>
              </Link>

              <Link to="/contact" smooth={true} duration={700}>
                <button
                  type="button"
                  className="border border-[#26313F] dark:border-[white] text-[#26313F] dark:text-white text-md font-semibold w-24 hidden md:block rounded-md py-1 px-4 "
                >
                  Contact
                </button>
              </Link>
              <button className="mr-12 dark-mode-button size-6 md:size-auto pt-5 md:pt-0">
                <img
                  src={darkMode ? lightIcon : darkIcon}
                  alt="theme"
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                />
              </button>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
