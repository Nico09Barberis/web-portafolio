import PublicationImg from "../assets/works.png";
import ProfilePublicationImg from "../assets/img-hero.png";
import { Ellipsis, Link } from 'lucide-react';
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";

const Publication = ({ postImg, content }) => {

  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked(!liked);

  return (
    <section className="bg-[#fefefe] text-black hover:bg-[#bae6fd] dark:bg-[#0a192f] dark:text-white dark:hover:bg-[#112240] max-w-3xl mx-auto mb-4 p-4 rounded-lg">
      <div className="max-w-3xl mx-auto mt-2 flex items-start gap-2">
        {/*Imagen pequeña a la derecha*/}
        <div className="w-28 h-28">
          <img
            src={ProfilePublicationImg}
            alt="Imagen de perfil"
            className="border-white rounded-full flex-shrink-0"
          />
        </div>
        <div className="text-left">
          <div className="flex items-start gap-2">
            <p className="font-bold">Nico Barberis</p>
            <p className="text-gray-500 dark:text-gray-400">@NicoBarberis</p>
          </div>
          <h2 className="mb-2 text-2xl font-bold">Hello word!</h2>
          <p>{content}</p>
          <div className="mt-4">
            <img
              src={postImg}
              alt="imagen de publicacion"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>
        <div>
          <Ellipsis className="cursor-pointer"/>
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
        <Link size={36} className="cursor-pointer p-1 rounded-lg hover:scale-110 transition-all"/>
      </div>
    </section>
  );
};

export default Publication;
