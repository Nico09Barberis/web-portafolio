import ProfilePublicationImg from "../assets/profile-img.jpg";
import { Ellipsis, Link } from "lucide-react";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import CarouselPost from "./CarouselPost";
import React from "react";

const Publication = ({ title, content, projectLink, postImages, date }) => {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => setLiked(!liked);
  const [expanded, setExpanded] = useState(false); // <- Estado para "Ver más"
  const toggleExpand = () => setExpanded(!expanded);

  const MAX_LINES = 3; // Cantidad de líneas que mostramos antes de "Ver más"
  const contentLines = content.split("\n");

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

          {/* Contenido */}
          <p className="mt-1 text-justify text-gray-500 dark:text-gray-300">
            {(expanded ? contentLines : contentLines.slice(0, MAX_LINES)).map(
              (line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              )
            )}
          </p>

          {/* Enlace al proyecto (solo cuando está expandido) */}
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

          {/* Botón Ver más / Ver menos (siempre debajo de todo) */}
          {contentLines.length > MAX_LINES && (
            <div
              onClick={toggleExpand}
              className="text-blue-500 dark:text-blue-400 cursor-pointer hover:underline mt-2"
            >
              {expanded ? "Ver menos" : "Ver más"}
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

      {/* Footer: fecha + acciones */}
      <div className="flex items-center justify-between mt-4 px-2">
        {/* Fecha a la izquierda */}
        <p className="text-sm text-gray-500 dark:text-gray-300">
          {new Date(date).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        {/* Acciones a la derecha */}
        <div className="flex items-center gap-2">
          <FaRegHeart
            size={32}
            onClick={toggleLike}
            className={`m-2 p-1 rounded-lg cursor-pointer hover:scale-110 transition-colors duration-200 ${
              liked ? "text-red-500" : "dark:text-white text-black"
            }`}
          />
          <Link size={26} className="cursor-pointer hover:scale-110" />
        </div>
      </div>
    </section>
  );
};

export default Publication;
