import { useState } from "react";

import Home from "./components/Home/Home";
import About from "./components/Home/About";
import Navbar from "./components/Home/Navbar";
import Contact from "./components/Home/Contact";
import Footer from "./components/Home/Footer";
import Projects from "./components/Projects/Projects";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={toggleDarkMode} />
      <Home darkMode={darkMode} setDarkMode={toggleDarkMode} />
      <About darkMode={darkMode} setDarkMode={toggleDarkMode} />

      <Projects darkMode={darkMode} setDarkMode={setDarkMode} />
      <Contact darkMode={darkMode} setDarkMode={setDarkMode} />
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  );
}

export default App;

