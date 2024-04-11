import React, { useState } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./components/Home/Home";
import About from "./components/Home/About";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
   
      <Home  darkMode={darkMode} setDarkMode={toggleDarkMode}/>
      <About/>
    </>
  );
}

export default App;

{
  /* <Router>
      <Navbar darkMode={darkMode} setDarkMode={toggleDarkMode} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home darkMode={darkMode} setDarkMode={toggleDarkMode} />}
        />
        <Route
          exact
          path="/resume"
          element={<Resume darkMode={darkMode} setDarkMode={toggleDarkMode} />}
        />
        <Route
          exact
          path="/projects"
          element={<Projects darkMode={darkMode} setDarkMode={toggleDarkMode} />}
        />
        <Route
          exact
          path="/contact"
          element={<Contact darkMode={darkMode} setDarkMode={toggleDarkMode} />}
        />
      </Routes>
    </Router> */
}
