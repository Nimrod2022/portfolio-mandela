import { useState } from "react";
import Home from "./components/Home/Home";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
    <Home/>
     </>
  )

}

export default App;
