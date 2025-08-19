import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Acerca de mi", path: "/about-me" },
    { name: "Proyectos", path: "/projects" },
    { name: "Habilidades", path: "/skills" },
  ];

  return (
    <nav className="max-w-3xl mx-auto bg-white text-black dark:bg-[#0a192f] dark:text-white">
      <ul className="grid grid-cols-2 sm:grid-cols-2 sm:grid-rows-2 gap-y-4 md:flex md:justify-between justify-center items-center h-16 text-center">
        {navItems.map((item, index) => (
          <li key={index} className="font-bold flex-1">
            <Link
              to={item.path}
              className="relative w-full h-full flex items-center py-2 justify-center hover:bg-[#bae6fd] dark:hover:bg-[#112240] group transition"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-[#112240] dark:bg-[#FF00FF] group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
