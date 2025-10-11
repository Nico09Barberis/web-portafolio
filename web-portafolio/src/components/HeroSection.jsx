import Nav from "./Nav";
import { Rss, Cake, BriefcaseBusiness, Mail, Link } from "lucide-react";
import SubscribeForm from "./Subs";

const HeroSection = () => {
  return (
    <section className="bg-white text-black dark:bg-[#0a192f] dark:text-white mx-auto max-w-6xl font-audiowide py-8 px-2">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Información personal */}
        <div className="flex-1">
          {/* Botón Seguir */}
          <div className="flex justify-end mb-4 pr-4 md:pr-12">
            <button className="flex items-center gap-2 bg-pink-600 px-4 py-2 rounded-full cursor-pointer hover:scale-105 transition">
              <span className="text-white text-base font-bold tracking-wide">
                Seguir
              </span>
              <Rss size={20} color="white" />
            </button>
          </div>

          <div className="text-left mt-12 pl-4 md:pl-12">
            <h2 className="text-2xl md:text-3xl">Nicolás Barberis</h2>
            <p className="text-lg md:text-xl mt-1">
              Técnico Universitario en Programación
            </p>
            <p className="mt-2 text-sm md:text-base">
              Apasionado por la tecnología y la automatización, creo soluciones
              funcionales con código limpio y eficiente.
            </p>

            {/* Datos adicionales */}
            <ul className="mt-4  text-sm grid grid-cols-2 gap-4 md:flex md:items-center md:gap-6">
              <li>
                <button
                  className="flex items-center gap-1 cursor-pointer hover:text-pink-600 transition-colors"
                  aria-label="Ver enlaces personales"
                >
                  <Link size={20} />
                  <span>/Links</span>
                </button>
              </li>

              <li className="flex items-center gap-1">
                <BriefcaseBusiness size={20} aria-hidden="true" />
                <span>500Millas</span>
              </li>

              <li>
                <a
                  href="mailto:barberisnicolas.dev@gmail.com"
                  className="flex items-center gap-1 hover:text-pink-600 transition-colors"
                >
                  <Mail size={20} aria-hidden="true" />
                  <span>Contacto</span>
                </a>
              </li>

              <li className="flex items-center gap-1">
                <Cake size={20} aria-hidden="true" />
                <span>7 Nov. 02'</span>
              </li>
            </ul>
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
