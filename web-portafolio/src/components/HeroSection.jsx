import Nav from "./Nav";
import { Rss, Cake, BriefcaseBusiness, Mail, Link } from "lucide-react";
import SubscribeForm from "./Subs";

const HeroSection = () => {
  return (
    <section className="bg-white text-black dark:bg-[#0a192f] dark:text-white mx-auto max-w-6xl py-8 px-4">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Información personal */}
        <div className="flex-1">
          {/* Botón Seguir */}
          <div className="flex justify-end mb-4 pr-4 md:pr-12">
            <button className="flex items-center gap-2 bg-pink-600 px-4 py-2 rounded-full cursor-pointer hover:scale-105 transition">
              <span className="text-white text-lg font-bold tracking-wide">
                Seguir
              </span>
              <Rss size={20} color="white" />
            </button>
          </div>

          <div className="text-left mt-12 pl-4 md:pl-12">
            <h2 className="text-3xl font-bold">Nicolás Barberis</h2>
            <p className="text-xl font-semibold mt-1">
              Técnico Universitario en Programación
            </p>
            <p className="font-semibold mt-2">
              Apasionado por la tecnología y la automatización, creo soluciones
              funcionales con código limpio y eficiente.
            </p>

            {/* Datos adicionales */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:flex md:gap-6 items-center mt-4 font-semibold">
              <button className="flex items-center gap-1 cursor-pointer">
                <Link size={20} />
                <span>/Links</span>
              </button>
              <div className="flex items-center gap-1">
                <BriefcaseBusiness size={20} />
                <span>500Millas</span>
              </div>
              <a
                href="mailto:barberisnicolas.dev@gmail.com"
                className="flex items-center gap-1"
              >
                <Mail size={20} aria-hidden="true" />
                <span>Contacto</span>
              </a>
              <div className="flex items-center gap-1">
                <Cake size={20} />
                <span>7 Nov. 2002</span>
              </div>
            </div>
          </div>

          {/* Formulario de suscripción */}
          <div className="mt-6 text-center md:text-left">
            <SubscribeForm />
          </div>

          {/* Navegación */}
          <Nav />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
