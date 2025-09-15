import { FaGithub, FaGlobe } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

import morseExpress from "../assets/proyects/morse-express.png";
import clavePro from "../assets/proyects/clave-pro.png";
import reciclApp from "../assets/proyects/reciclapp.png";
import gestorTurnos from "../assets/proyects/gestor-turnos.png";

// Proyectos personales
const personalWorks = [
  {
    title: "Morse Express",
    description: "Traductor de código morse.",
    img: morseExpress,
    repo: "https://github.com/Nico09Barberis/morse-translator.git",
    demo: "https://morse-traslator.vercel.app/",
    techs: ["React", "Tailwind", "Vite"],
  },
  {
    title: "Clave Pro",
    description: "Generador de contraseñas seguras.",
    img: clavePro,
    repo: "https://github.com/Nico09Barberis/password-generator.git",
    demo: "https://password-generator-smoky-gamma-95.vercel.app/",
    techs: ["React", "Tailwind", "Vite"],
  },
  {
    title: "reciclApp",
    description: "Aprende a reciclar correctamente.",
    img: reciclApp,
    repo: "https://github.com/Nico09Barberis/app-reciclaje.git",
    demo: "https://app-reciclaje-khaki.vercel.app/",
    techs: ["React", "Tailwind", "Vite"],
  },
  {
    title: "Gestor de turnos",
    description: "Aprende a reciclar correctamente.",
    img: gestorTurnos,
    repo: "https://github.com/Nico09Barberis/app-reciclaje.git",
    demo: "https://gestor-turnos-flame.vercel.app/",
    techs: ["React", "Tailwind", "Vite"],
  },
];

// Colaboraciones
const collaborations = [];

// Componente de tarjeta con título, descripción y tooltips en iconos
const WorkCard = ({ title, description, img, repo, demo, techs, index }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative group bg-white dark:bg-[#112240] rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
        {/* Imagen */}
        <div className="w-full h-56 overflow-hidden rounded-t-xl">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay con iconos */}
          {(repo || demo) && (
            <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {repo && (
                <a
                  href={repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver repositorio en GitHub"
                  title="Ver repositorio"
                  className="text-white hover:text-gray-300 transition-colors pointer-events-auto"
                >
                  <FaGithub size={28} />
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver demo del proyecto"
                  title="Ver proyecto"
                  className="text-white hover:text-gray-300 transition-colors pointer-events-auto"
                >
                  <FaGlobe size={28} />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Contenido: título y descripción */}
        <div className="p-5 flex flex-col justify-between gap-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>

          {techs && techs.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {techs.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center2 text-blue-600 dark:text-blue-400 font-semibold group hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              Ver proyecto
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// Sección de proyectos
const WorkSection = ({ title, works }) => (
  <div className="mb-12">
    <h3 className="text-3xl font-bold mb-6 text-center">{title}</h3>

    {works.length === 0 ? (
      <p className="text-center text-gray-500 italic">
        🚧 Próximamente nuevas colaboraciones... trabajando en algo increíble.
      </p>
    ) : (
      <div className="flex flex-col gap-6">
        {works.map((work, index) => (
          <WorkCard key={index} index={index} {...work} />
        ))}
      </div>
    )}
  </div>
);

// Componente principal Works
const Works = () => {
  return (
    <section className="bg-white dark:bg-[#0a192f] text-black dark:text-white py-12 px-4 max-w-5xl mx-auto rounded-2xl">
      <h2 className="text-3xl font-extrabold text-center mb-4">Mis Trabajos</h2>
      <p className="text-md md:text-lg text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-10">
        Aquí encontrarás una selección de mis proyectos personales y
        colaboraciones. Desde herramientas útiles hasta desarrollos creativos,
        cada uno refleja mi pasión por el código y el aprendizaje constante.
      </p>

      <WorkSection title="Proyectos Personales" works={personalWorks} />
      <WorkSection title="Colaboraciones" works={collaborations} />
    </section>
  );
};

export default Works;
