import { Link } from "react-scroll";

const githubDark = "/assets/github-dark.svg";
const github = "/assets/github.svg";

const xingDark = "/assets/xing-dark.svg";
const xing = "/assets/xing.svg";

const linkedinDark = "/assets/linkedin-dark.svg";
const linkedin = "/assets/linkedin.svg";

const twitterDark = "/assets/xing-dark.svg";
const twitter = "/assets/twitter.svg";

const Footer = ({ darkMode }) => {
  return (
    <>
      <section className={darkMode ? "dark" : ""}>
        <div className="dark:bg-[#26313F] bg-[#F0F4F8] satoshi pt-16 md:pt-0 pb-10 flex flex-col justify-center items-center">
          <div className="dark:text-[#A9A9A9] flex gap-4 md:gap-8  md:mt-20 text-center font-extrabold text-2xl text-[#686565]">
            <Link
              to="/about"
              smooth={true}
              duration={1000}
              className="hover:cursor-pointer"
            >
              About
            </Link>

            <Link
              to="/projects"
              smooth={true}
              duration={1000}
              className="hover:cursor-pointer"
            >
              Projects
            </Link>

            <Link
              to="/contact"
              smooth={true}
              duration={1000}
              className="hover:cursor-pointer"
            >
              Contact
            </Link>
          </div>

          <div className="flex gap-3 px-2 mt-5 md:mt-10 ">
            {/* <div className="socials socials-icon">
              <img src="/assets/bg-github.svg" alt="github" />
            </div> */}
            <a
              href="https://github.com/Nimrod2022"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={darkMode ? githubDark : github}
                alt="xing"
                className="size-20"
              />
            </a>

            <a
              href="https://www.xing.com/profile/Nimrod_Kibet"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={darkMode ? xingDark : xing}
                alt="github"
                className="size-20"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/nimrod-kibet-b6b340115/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={darkMode ? linkedinDark : linkedin}
                alt="github"
                className="size-20"
              />
            </a>

            <a
              href="https://twitter.com/MandelaGI?t=ejgoi2MMFnyuNXcdNoMXtA&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={darkMode ? twitterDark : twitter}
                alt="github"
                className="size-20"
              />
            </a>
          </div>
          <hr className="border border-[#A9A9A9] my-5 md:my-10 w-full"/>
          <p className="text-[#A9A9A9] md:text-lg">© 2024 Nimrod Kibet. All Rights Reserved</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
