import PublicationImg from "../assets/works.png";
import ProfilePublicationImg from "../assets/profile-img.jpg";
import { Ellipsis, Link } from "lucide-react";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";

const Publication = ({ postImg, content }) => {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => setLiked(!liked);

  return (
    <section className="bg-[#fefefe] text-black hover:bg-[#bae6fd] dark:bg-[#0a192f] dark:text-white dark:hover:bg-[#112240] max-w-3xl mx-auto mb-4 p-2 rounded-lg">
      <div className="max-w-4xl mx-auto mt-2 flex items-start gap-4">
        {/* Avatar: contenedor fijo y recortado */}
        <div className="w-12 h-12 flex-none rounded-full overflow-hidden border-2 border-white">
          <img
            src={ProfilePublicationImg}
            alt="Imagen de perfil"
            className="block w-full h-full object-cover"
          />
        </div>

        {/* Contenido principal: permitir que se encoja correctamente */}
        <div className="text-left flex-1 min-w-0">
          <div className="flex items-start gap-2">
            <p className="font-bold">Nico Barberis</p>
            <p className="text-gray-500 dark:text-gray-300">@NicoBarberis</p>
          </div>

          <h2 className="mb-2 text-2xl font-bold">Hello word!</h2>
          <p className="text-justify text-gray-500 dark:text-gray-300">{content}</p>
          <div className="mt-4">
            <img
              src={postImg}
              alt="imagen de publicacion"
              className="w-full max-h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="flex-shrink-0">
          <Ellipsis className="cursor-pointer" />
        </div>
      </div>

      <div className="flex items-center max-w-3xl mx-auto gap-1 mt-4 pr-8 justify-end">
        <FaRegHeart
          size={36}
          onClick={toggleLike}
          className={`m-2 p-1 rounded-lg cursor-pointer hover:scale-110 transition-colors duration-200 ${
            liked ? "text-red-500" : "dark:text-white text-black"
          }`}
        />
        <Link
          size={36}
          className="cursor-pointer p-1 rounded-lg hover:scale-110 transition-all"
        />
      </div>
    </section>
  );
};

export default Publication;
