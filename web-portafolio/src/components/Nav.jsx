import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {

   const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Acerca de mi", path: "/about-me" },
    { name: "Proyectos", path: "/projects" },
    { name: "habilidades", path: "/skills" },
  ];

  return (
    <nav className="max-w-3xl mx-auto bg-white text-black dark:bg-[#0b1d3a] dark:text-white">
      <ul className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-0 sm:grid-rows-2 md:flex justify-between items-center h-16">
        {navItems.map((item, index) => (
          <li key={index} className="font-bold">
            <Link
              to={item.path}
              className="relative px-4 py-2 block hover:bg-red-50 dark:hover:bg-[#2d3f61] group transition"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-[#FF00FF] group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
