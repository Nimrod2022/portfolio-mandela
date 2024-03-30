import { useState } from "react";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaXing } from "react-icons/fa";
const logo = "../../public/assets/logo-no-background.png";
const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <img alt="logo" src={logo} className="h-16 " />
            <ul
              className="justify-en
            d flex items-center"
            >
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
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
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Nimrod Kibet
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Frontend & GIS Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I specialize in crafting immersive user experiences using the
              latest frontend technologies and frameworks to bring your vision
              to life. Additionally, my expertise extends to geoinformatics,
              where I excel in harnessing the power of spatial data to uncover
              actionable insights.
            </p>
            <div className="text-5xl flex justify-center gap-10 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/Nimrod2022">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/nimrod-kibet-b6b340115/">
                <AiFillLinkedin />
              </a>
              <a href="https://www.xing.com/profile/Nimrod_Kibet/web_profiles">
                <FaXing />
              </a>
              <a href="https://twitter.com/MandelaGI">
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
