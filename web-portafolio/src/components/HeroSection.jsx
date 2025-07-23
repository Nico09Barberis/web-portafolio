import { Facebook, Instagram, Github, Linkedin } from "lucide-react";
import ProfileImagen from "../assets/img-hero.png";
import Nav from "./Nav";
import { Rss, Cake, BriefcaseBusiness, CalendarDays, Link } from "lucide-react";
import SubscribeForm from "./Subs";

const HeroSection = () => {
  return (
    <section className="bg-white text-black dark:bg-[#0b1d3a] dark:text-white mx-auto max-w-6xl py-8 px-4">
      {/* Sección inferior */}

      <div className="flex-1">
        <div className="flex items-end justify-end mr-4">
          <div className="flex items-center gap-2 bg-pink-600 px-4 py-2 rounded-full cursor-pointer hover:scale-105 transition">
            <span className="text-white text-lg font-bold tracking-wide">
              Seguir
            </span>
            <Rss size={20} color="white" />
          </div>
        </div>

        <div className="text-start mt-12 pl-12 mb-4">
          <h2 className="text-3xl font-bold text-start">Niki Barberis</h2>
          <p className="text-xl">Desarrollador web y amante de los gatos</p>
          <p>
            Desarrollador web y amante de los gatos, tambien me gusta pescar y
            la joda. soy de escorpio
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 sm:grid-rows-2 md:flex md:gap-6 items-center mt-4 font-semibold">
            <div className="flex items-center gap-1">
              <Link size={20} />
              <span className="cursor-pointer">/Links</span>
            </div>
            <div className="flex items-center gap-1">
              <BriefcaseBusiness size={20} />
              <span>500Millas</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarDays size={20} />
              <span>Te uniste en Jun '22</span>
            </div>
            <div className="flex items-center gap-1">
              <Cake size={20} />
              <span>27 Nov. 2002</span>
            </div>
          </div>
        </div>

        {/* Subscribirse*/}
        <div className="mt-6 text-center">
          <SubscribeForm />
        </div>
        <Nav />
      </div>
    </section>
  );
};

export default HeroSection;

{
  /*
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="lg:w-1/2 text-center lg:text-left">
          <p className="text-xl"> hola, soy</p>
          <h1 className="text-3xl md:text-4xl font-bold my-4">Niki Barberis</h1>
          <p className="text-gray-300 mb-6">
            A freelancer who provides services for digital programming and
            design content needs, for all businesses with more than 10 years of
            experience.
          </p>
        </div>

        <div className="w-64 h-64">
          <img
            src={ProfileImagen}
            alt="img-hero"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="lg:w-1/3 text-center lg:text-left">
          <h2 className="text-2xl text-white">Servicios</h2>
          <p className="font-medium">
            trabajo para lo que necesites, ya sea una pagina web o incluso
            reparacion de computadoras
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
            <div className="border bg-slate-400 border-slate-400 flex items-center rounded-3xl px-2 py-1 cursor-pointer gap-2 opacity-100 hover:opacity-60 transition">
              <span>Facebook</span>
              <Facebook size={20} className="text-yellow-300" />
            </div>
            <div className="border bg-slate-400 border-slate-400 flex items-center rounded-3xl px-2 py-1 cursor-pointer gap-2 opacity-100 hover:opacity-60 transition">
              <span>Instagram</span>
              <Instagram
                size={20}
                className="text-yellow-300 hover:scale-105 transition"
              />
            </div>
            <div className="border bg-slate-400 border-slate-400 flex items-center rounded-3xl px-2 py-1 cursor-pointer gap-2 opacity-100 hover:opacity-60 transition">
              <span>GitHub</span>
              <Github
                size={20}
                className="text-yellow-300 hover:scale-105 transition"
              />
            </div>
            <div className="border bg-slate-400 border-slate-400 flex items-center rounded-3xl px-2 py-1 cursor-pointer gap-2 opacity-100 hover:opacity-60 transition">
              <span>Linkedin</span>
              <Linkedin
                size={20}
                className="text-yellow-300 hover:scale-105 transition"
              />
            </div>
          </div>
        </div>
      </div>
  */
}
