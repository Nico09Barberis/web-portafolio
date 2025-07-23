import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef();

  // Cierra el sidebar si se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    }

    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <>
      {/* NAVBAR */}
      
      <nav className="bg-[#3a3a64] w-full sticky top-0 z-50">
        
        <div className="w-full px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-200">
            <Link to="/">MiPortafolio</Link>
          </div>

          {/* Botón hamburguesa */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-200 md:hidden"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Enlaces en pantallas medianas y grandes */}
          <div className="hidden md:flex justify-between items-center w-full ml-10">
            <div className="flex space-x-6">
              <Link
                to="/"
                className="text-gray-200 hover:text-blue-400 transition"
              >
                Inicio
              </Link>
              <Link
                to="/about"
                className="text-gray-200 hover:text-blue-400 transition"
              >
                Sobre mí
              </Link>
              <Link
                to="/projects"
                className="text-gray-200 hover:text-blue-400 transition"
              >
                Proyectos
              </Link>
              <Link
                to="/contact"
                className="text-gray-200 hover:text-blue-400 transition"
              >
                Contacto
              </Link>
            </div>
            <div className="flex space-x-4 ml-auto">
              <Link
                to="/"
                className="text-gray-200 hover:text-blue-400 transition"
              >
                *
              </Link>
              <Link
                to="/about"
                className="text-gray-200 hover:text-blue-400 transition"
              >
                *
              </Link>
              <Link
                to="/projects"
                className="text-gray-200 hover:text-blue-400 transition"
              >
                *
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* SIDEBAR MOBILE */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex">
          <div
            ref={sidebarRef}
            className="w-64 bg-[#2c2c50] h-full shadow-lg p-6 flex flex-col space-y-6"
          >
            <button
              onClick={() => setSidebarOpen(false)}
              className="self-end text-gray-200"
            >
              <X size={24} />
            </button>
            <Link
              to="/"
              onClick={() => setSidebarOpen(false)}
              className="text-gray-200 hover:text-blue-400 transition"
            >
              Inicio
            </Link>
            <Link
              to="/about"
              onClick={() => setSidebarOpen(false)}
              className="text-gray-200 hover:text-blue-400 transition"
            >
              Sobre mí
            </Link>
            <Link
              to="/projects"
              onClick={() => setSidebarOpen(false)}
              className="text-gray-200 hover:text-blue-400 transition"
            >
              Proyectos
            </Link>
            <Link
              to="/contact"
              onClick={() => setSidebarOpen(false)}
              className="text-gray-200 hover:text-blue-400 transition"
            >
              Contacto
            </Link>
            <div className="flex space-x-4 pt-4 border-t border-gray-600">
              <Link
                to="/"
                onClick={() => setSidebarOpen(false)}
                className="text-gray-200 hover:text-blue-400 transition"
              >
                *
              </Link>
              <Link
                to="/about"
                onClick={() => setSidebarOpen(false)}
                className="text-gray-200 hover:text-blue-400 transition"
              >
                *
              </Link>
              <Link
                to="/projects"
                onClick={() => setSidebarOpen(false)}
                className="text-gray-200 hover:text-blue-400 transition"
              >
                *
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
