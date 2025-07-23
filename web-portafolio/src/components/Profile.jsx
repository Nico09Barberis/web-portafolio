import React from "react";
import ProfileImg from "../assets/img-hero.png";
import BgProfile from "../assets/works.png"
import Nav from "./Nav";
import { Rss, Cake, BriefcaseBusiness, CalendarDays, Link } from "lucide-react";

const Profile = () => {
  return (
    <div className="relative flex w-full max-w-6xl h-[300px] mx-auto bg-white text-black dark:bg-[#0b1d3a] dark:text-white">
      {/* Círculo a la izquierda, sobresaliendo hacia abajo */}
      <div className="absolute left-0 bottom-0 translate-y-1/2 mx-12 border-4 border-white bg-black rounded-full w-44 h-44 z-10">
        <img
          src={ProfileImg}
          alt="imagen de perfil"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Contenedor de secciones en columna */}
      <div className="flex bg-[#0b1d3a] flex-col flex-1 mt-12 md:mt-0 overflow-hidden">
        {/* Sección superior con imagen */}
        <div className="flex-1 bg-blue-500 overflow-hidden">
          <img
            src={BgProfile}
            alt="imagen de perfil"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
