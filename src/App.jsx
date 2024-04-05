import { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home/Home";
import Resume from "./components/Resume/Resume";
import Hero from "./components/Home/Hero";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Home/Contact";
import Navbar from "./components/Home/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <Navbar darkMode={darkMode} setDarkMode={toggleDarkMode} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home darkMode={darkMode} setDarkMode={toggleDarkMode} />}
        />
         <Route exact path="/resume" element={<Resume darkMode={darkMode} />} />
        <Route
          exact
          path="/projects"
          element={<Projects darkMode={darkMode} />}
        />
        <Route exact path="/contact" element={<Contact darkMode={darkMode} />} />
      </Routes>
    </Router>
  );
}

export default App;
