import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const ButtonMode = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme") === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
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
      aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
      className="
        fixed top-4 right-4 z-50
        relative p-2 rounded-full
        bg-white/70 dark:bg-[#0a192f]/70 
        text-black dark:text-white
        shadow-md hover:shadow-lg backdrop-blur-md
        transition-all duration-500 ease-in-out
        flex items-center justify-center
      "
    >
      {/* Ícono con animación de rotación */}
      <span
        className={`transform transition-transform duration-500 ${
          darkMode ? "rotate-[360deg]" : "rotate-0"
        }`}
      >
        {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
      </span>

      {/* Fondo animado al pasar el mouse */}
      <span className="absolute inset-0 rounded-full bg-gray-300 dark:bg-gray-700 opacity-0 hover:opacity-30 transition-opacity duration-300"></span>
    </button>
  );
};

export default ButtonMode;
