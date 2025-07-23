import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const ButtonMode = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect (() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button 
      onClick={() => setDarkMode(!darkMode)}
      className="bg-white text-black hover:bg-[#969faf] dark:bg-[#0b1d3a] dark:text-white p-1 m-0 rounded-lg dark:hover:bg-[#3f5988]"
    >
      {darkMode ? <Sun /> : <Moon />}
    </button>
  )  
}

export default ButtonMode;