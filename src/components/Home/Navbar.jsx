import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
const logoDarkMode = "/assets/logo-dark-mode.svg";
const logoLightMode = "/assets/logo-light-mode.svg";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Contact from "./Contact";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // Contact modal
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed exo px-28 w-full h-20 dark:text-white z-40 ">
      <div className="flex  justify-between items-center w-full h-full 2xl:px-16">
        <div className=" w-[40%] h-[100%] px-2 items-center ">
          <Link to="/" className="h-7">
            <img
              alt="logo"
              src={darkMode ? logoDarkMode : logoLightMode}
              className="size-12 pt-6 hover:cursor-pointer"
            />
          </Link>
        </div>
        <div className=" w-[60%] h-[100%] items-center px-6 flex justify-end ">
          <ul className="hidden md:flex">
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className={`hover:cursor-pointer text-2xl mt-8 ${
                  darkMode ? "text-white" : "text-black"
                }`}
              />
            </li>

            <Link href="/projects">
              <li className="text-sm uppercase mt-6 hover:text-[#75fbfd] bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-6">
                Projects
              </li>
            </Link>

            <Link to="/resume">
              <li className="text-sm uppercase mt-6 hover:text-[#75fbfd] bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8       ">
                Resume
              </li>
            </Link>

            <Link href="/contact">
              <button
                onClick={toggleModal}
                className="text-sm uppercase mt-6 hover:text-[#75fbfd] bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8        "
              >
                Contact
              </button>
            </Link>
          </ul>
          <Contact isOpen={isOpen} closeModal={toggleModal} />
          <div className="md:hidden">
            {nav ? (
              <AiOutlineClose
                size={25}
                onClick={handleNav}
                className="z-10 text-white mt-6"
              />
            ) : (
              <BiMenuAltRight size={25} onClick={handleNav} className="mt-6" />
            )}
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed  top-20 w-full h-screen bg-black/70" : "hidden"
        }
      >
        <div
          className={
            nav
              ? "fixed w-[100%] sm:w-[60%] top-20 md-[45%] h-[55%] bg-[#111]  ease-in duration-500"
              : "fixed left-[-100%] h-[55%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="text-[hsla(2, 0%, 100%, 0.7)]">
            <ul className="py-4 flex flex-col">
              <Link
                href="#projects"
                style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.12)" }}
                onClick={handleNav}
              >
                <li className="py-4 p-10 text-sm">Projects</li>
              </Link>
              <Link
                href="#resume"
                style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.12)" }}
                onClick={handleNav}
              >
                <li className="py-4 p-10 text-sm">Resume</li>
              </Link>
              <Link
                href="#contact"
                style={{ borderBottom: "1px solid hsla(0, 0%, 100%, 0.12)" }}
                onClick={handleNav}
              >
                <li className="py-4 p-10 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="flex items-center justify-between sm:w-[60%] px-10">
              <Link href="https://www.linkedin.com/in/kimutai01">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                  <FaLinkedinIn />
                </div>
              </Link>

              <Link href="https://github.com/Kimutai01">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                  <FaGithub />
                </div>
              </Link>
              <Link href="mailto:kiprotichkimutai01@gmail.com">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                  <AiOutlineMail />
                </div>
              </Link>

              <Link href="tel: +254790841979">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                  <BsPersonLinesFill />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
