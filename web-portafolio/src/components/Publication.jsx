import ProfilePublicationImg from "../assets/profile-img.jpg";
import { Ellipsis, Link } from "lucide-react";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import CarouselPost from "./CarouselPost";

const Publication = ({ title, content, projectLink, postImages }) => {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => setLiked(!liked);

  return (
    <section className="bg-[#fefefe] text-black hover:bg-[#bae6fd] dark:bg-[#0a192f] dark:text-white dark:hover:bg-[#112240] max-w-3xl mx-auto mb-4 p-4 rounded-lg">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white flex-shrink-0">
          <img
            src={ProfilePublicationImg}
            alt="Imagen de perfil"
            className="block w-full h-full object-cover"
          />
        </div>

        {/* Contenido completo alineado al avatar */}
        <div className="flex-1 min-w-0">
          {/* Encabezado */}
          <div className="flex items-center gap-2 flex-wrap">
            <p className="font-bold">Nico Barberis</p>
            <p className="text-gray-500 dark:text-gray-300 text-sm">
              @NicoBarberis
            </p>
          </div>

          {/* Título */}
          {title && (
            <h2 className="mt-2 text-2xl font-bold text-gray-500 dark:text-gray-300">
              {title}
            </h2>
          )}

          {/* Texto */}
          <p className="mt-1 text-justify text-gray-500 dark:text-gray-300">
            {content}
          </p>

       {/* Enlace al proyecto (opcional) */}
          {projectLink && (
            <div className="mt-1">
              <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-500 dark:text-blue-400 hover:underline"
              >
                Ver proyecto
              </a>
            </div>
          )}

          {/* Imagen del post */}
          <div className="mt-4">
            <CarouselPost images={postImages} />
          </div>
        </div>

        {/* Botón opciones */}
        <div className="flex-shrink-0">
          <Ellipsis className="cursor-pointer" />
        </div>
      </div>

      {/* Acciones */}
      <div className="flex items-center justify-end gap-1 mt-4 pr-8">
        <FaRegHeart
          size={36}
          onClick={toggleLike}
          className={`m-2 p-1 rounded-lg cursor-pointer hover:scale-110 transition-colors duration-200 ${
            liked ? "text-red-500" : "dark:text-white text-black"
          }`}
        />
        <Link size={28} className="cursor-pointer hover:scale-110" />
      </div>
    </section>
  );
};

export default Publication;
