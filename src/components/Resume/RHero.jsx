import React from "react";
// import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaXing } from "react-icons/fa";

// import { BiLogoXing } from "react-icons/bi";

const RHero = ({ language }) => {
  return (
    <div className="mt-10 pb-10 ">
      <div className="mx-auto  flex">
        <div className="md:flex gap-10 mx-4">
          {/* Image Section */}
          <div className="border border-gray-500 rounded-lg">
            <img
              src="./assets/image.png"
              alt=""
              className="rounded-lg w-[300px] md:w-[250px]  h-[280] "
            />
            <div className="flex gap-10 md:gap-2 md:justify-between py-3 px-2 md:px-5">
              <FaXing
                color="#026466"
                className="cursor-pointer border-2 border-[#026466] h-[40px] p-1 w-[40px] rounded-full"
                onClick={() =>
                  window.open("https://www.xing.com/profile/Nimrod_Kibet")
                }
              />
              <AiFillLinkedin
                color="#0e76a8"
                className="cursor-pointer border-2 border-[#0e76a8] h-[40px] p-1 w-[40px] rounded-full"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/nimrod-kibet-b6b340115/"
                  )
                }
              />
              <FaGithub
                color="#24292e"
                className="cursor-pointer border-2 border-[#24292e] h-[40px] p-1 w-[40px] rounded-full"
                onClick={() => window.open("https://github.com/Nimrod2022")}
              />
              <AiFillTwitterCircle
                color="#1da1f2"
                className="cursor-pointer border-2 border-[#1da1f2] h-[40px] p-1 w-[40px] rounded-full"
                onClick={() =>
                  window.open(
                    "https://twitter.com/MandelaGI?t=ejgoi2MMFnyuNXcdNoMXtA&s=09"
                  )
                }
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl md:text-4xl mt-10 md:mt-32 font-medium">
              Resume
            </h1>
            <div className=" flex items-center">
              <ul className="list-disc ml-4">
                <li className="capitalize  hover:text-blue-500 cursor-pointer">
                  <ScrollLink
                    to="bio"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer hover:text-blue-500"
                  >
                    Bio & Tech stack
                  </ScrollLink>
                </li>

                <li className="mt-5 cursor-pointer hover:text-blue-500">
                  <ScrollLink
                    to="experience"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer hover:text-blue-500"
                  >
                    Work Experience
                  </ScrollLink>
                </li>

                <li className="mt-5 capitalize cursor-pointer hover:text-blue-500 ">
                  <ScrollLink
                    to="education"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer hover:text-blue-500"
                  >
                    Education
                  </ScrollLink>
                </li>
                <li className="mt-5 cursor-pointer hover:text-blue-500">
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={1000}
                    className="cursor-pointer hover:text-blue-500"
                  >
                    Contact
                  </ScrollLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RHero;
