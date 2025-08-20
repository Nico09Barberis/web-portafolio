import ProfilePublicationImg from "../assets/profile-img.jpg";
import { Ellipsis, Link } from "lucide-react";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import CarouselPost from "./CarouselPost";
import React from "react";

const Publication = ({ title, content, projectLink, postImages, date }) => {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => setLiked(!liked);
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded(!expanded);

  const MAX_LINES = 3;
  const contentLines = content.split("\n");

  return (
    <section className="bg-[#fefefe] text-black hover:bg-[#bae6fd] dark:bg-[#0a192f] dark:text-white dark:hover:bg-[#112240] max-w-3xl mx-auto mb-4 p-4 rounded-lg">
      {/* === FILA 1: Avatar + Encabezado + Opciones === */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1">
          {/* Avatar */}
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white flex-shrink-0">
            <img
              src={ProfilePublicationImg}
              alt="Imagen de perfil"
              className="block w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Encabezado */}
          <div>
            <p className="font-bold">Nico Barberis</p>
            <p className="text-gray-500 dark:text-gray-300 text-sm">
              @NicoBarberis
            </p>
          </div>
        </div>

        {/* Botón opciones */}
        <Ellipsis
          className="cursor-pointer hover:scale-110 transition-transform"
          aria-label="Más opciones"
        />
      </div>

      {/* === FILA 2: resto del contenido === */}
      <div className="mt-4">
        {/* Título */}
        {title && (
          <h2 className="mt-2 text-2xl font-bold text-gray-600 dark:text-gray-300">
            {title}
          </h2>
        )}

        {/* Contenido */}
        <p className="mt-1 text-start md:text-justify text-gray-600 dark:text-gray-300 whitespace-pre-line">
          {expanded
            ? content
            : contentLines.slice(0, MAX_LINES).join("\n")}
        </p>

        {/* Enlace al proyecto */}
        {expanded && projectLink && (
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

        {/* Ver más / Ver menos */}
        {contentLines.length > MAX_LINES && (
          <div
            onClick={toggleExpand}
            className="inline-block text-blue-500 dark:text-blue-400 cursor-pointer hover:underline mt-2"
          >
            {expanded ? "Ver menos" : "Ver más"}
          </div>
        )}

        {/* Imagen del post */}
        <div className="mt-4">
          <CarouselPost images={postImages} />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 px-2">
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {new Date(date).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLike}
              aria-label={liked ? "Quitar me gusta" : "Dar me gusta"}
              className="m-2 p-1 rounded-lg cursor-pointer hover:scale-110 transition-colors duration-200"
            >
              <FaRegHeart
                size={26}
                className={
                  liked ? "text-red-500" : "dark:text-white text-black"
                }
              />
            </button>

            <button
              aria-label="Compartir publicación"
              className="p-1 rounded-lg cursor-pointer hover:scale-110 transition-transform"
            >
              <Link size={26} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publication;
