import { useState } from "react";

import Home from "./components/Home/Home";
import About from "./components/Home/About";
import Navbar from "./components/Home/Navbar";
import Contact from "./components/Home/Contact";
import Footer from "./components/Home/Footer";

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
      <Contact darkMode={darkMode} setDarkMode={setDarkMode} />
      <Footer darkMode={darkMode} setDarkMode={setDarkMode} />

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
