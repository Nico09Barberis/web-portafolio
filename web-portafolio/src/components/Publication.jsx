import PublicationImg from "../assets/works.png";
import ProfilePublicationImg from "../assets/img-hero.png";
import { Ellipsis, Heart, Link } from 'lucide-react';

const Publication = ( {postImg, content} ) => {
  return (
    <section className="bg-white text-black hover:bg-red-50 dark:bg-[#0b1d3a] dark:text-white dark:hover:bg-[#2d3f61] max-w-3xl mx-auto p-4  rounded-lg">
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
            <p className="text-gray-400">@NicoBarberis</p>
          </div>
          <h2 className="mb-2 text-2xl font-bold">Hello word!</h2>
          <p>{content}</p>
          <div className="mt-4">
            <img
              src={postImg}
              alt="imagen de publicacion"
              className="object-cover w-full h-auto rounded-lg"
            />
          </div>
        </div>
        <div>
          <Ellipsis className="cursor-pointer"/>
        </div>
      </div>

      <div className="flex items-center max-w-3xl mx-auto gap-1 mt-4 pr-8 justify-end">
        <Heart size={36} className="m-2 p-1 rounded-lg hover:bg-[#3f5988]"/>
        <Link size={36} className="cursor-pointer p-1 rounded-lg hover:bg-[#3f5988]"/>
      </div>
    </section>
  );
};

export default Publication;
