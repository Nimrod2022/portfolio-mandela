import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = ({ darkMode, setDarkMode }) => {
  //  Sticky nav handling
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // scroll to section

  const scrollToSection = (id) => {
    console.log("Scrolling to section:", id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <header className={scroll ? "stickynav" : ""}>
        <div className="md:pt-5 relative dark:bg-[#151C25] bg-[#F0F0F4] satoshi">
          <nav className="flex justify-between md:items-center text-lg text-white px-8 md:px-36 py-4 md:py-4">
            <a href="/#">
              <img
                src="assets/logo-light-mode.svg"
                alt="logo"
                className="hover:cursor-pointer size-10"
              />
            </a>

            {/* Sidebar to cover entire screen */}
            <div className="block md:hidden fixed inset-0 z-50 items-center">
              <Sidebar />
            </div>

            <div className="flex gap-10">
              <button
                onClick={() => {
                  scrollToSection("about");
                }}
                type="button"
                className="bg-[#26313F] dark:bg-[#55E5A4] text-[#FFFFFF] dark:text-black text-md font-semibold hidden w-24 md:block rounded-md py-1 px-4 "
              >
                About
              </button>

              <button
                type="button"
                className="bg-[#26313F] dark:bg-[#55E5A4] text-[#FFFFFF] dark:text-black  text-md font-semibold w-24 hidden md:block rounded-md py-1 px-4 "
              >
                Projects
              </button>

              <button
                type="button"
                className="border border-[#26313F] dark:border-[white] text-[#26313F] dark:text-white text-md font-semibold w-24 hidden md:block rounded-md py-1 px-4 "
              >
                Contact
              </button>
              <button>
                <BsFillMoonStarsFill
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                  className={`md:size-8 ${
                    darkMode ? "text-white" : "text-black"
                  }`}
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
