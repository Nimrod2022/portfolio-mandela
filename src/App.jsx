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
  const AboutRef = useRef(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={toggleDarkMode} />
      <Home
        darkMode={darkMode}
        setDarkMode={toggleDarkMode}
      />
      <div ref={AboutRef}>
        <About darkMode={darkMode} setDarkMode={toggleDarkMode} />
      </div>

      <Projects darkMode={darkMode} setDarkMode={setDarkMode} />

      <Contact darkMode={darkMode} setDarkMode={setDarkMode} />
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
      <ScrollToTop targetRef={AboutRef} />
    </>
  );
}

export default App;
