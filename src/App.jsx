import React, { useState, useRef } from "react";
import Home from "./components/Home/Home";
import About from "./components/Home/About";
import Navbar from "./components/Home/Navbar";
import Contact from "./components/Home/Contact";
import Footer from "./components/Home/Footer";
import Projects from "./components/Projects/Projects";
import ScrollToTop from "./components/custom/ScrollToTop";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const projectsRef = useRef(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("/contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={toggleDarkMode} />
      <Home darkMode={darkMode} scrollToContact={scrollToContact} setDarkMode={toggleDarkMode} />
      <About darkMode={darkMode} setDarkMode={toggleDarkMode} />
      <div ref={projectsRef} darkMode={darkMode} >
        <Projects darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <Contact darkMode={darkMode} setDarkMode={setDarkMode} />
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
      <ScrollToTop targetRef={projectsRef} />
    </>
  );
}

export default App;
