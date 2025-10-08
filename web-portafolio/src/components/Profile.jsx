import React from "react";
import ProfileImg from "../assets/profile-img.jpg";
import BgProfile from "../assets/portada-img.jpg";

const Profile = () => {
  return (
    <div className="relative flex w-full max-w-6xl h-[210px] md:h-[300px] mx-auto bg-white text-black dark:bg-[#0a192f] dark:text-white">
      {/* Círculo a la izquierda, sobresaliendo hacia abajo */}
      <div className="absolute left-0 bottom-0 translate-y-1/2 mx-12 border-4 border-white bg-black rounded-full w-44 h-44 z-10">
        <img
          src={ProfileImg}
          alt="imagen de perfil"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Contenedor de secciones en columna */}
      <div className="flex bg-[#0a192f] flex-col flex-1 overflow-hidden">
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
