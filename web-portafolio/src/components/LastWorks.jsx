import WorksImg from "../assets/works.png";
import { ArrowRight } from "lucide-react";
import { FaGlobe } from "react-icons/fa";
import morseExpress from "../assets/morse-express.png";
import clavePro from "../assets/clave-pro.png";

const WorkCard = ({ image, title, description, demoUrl }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between border-b p-4 gap-4">
      {/* Imagen con efecto hover */}
      <div className="w-full md:w-40 relative group overflow-hidden rounded-lg">
        <img
          src={image}
          alt={`Captura de ${title}`}
          className="transition-all duration-300 group-hover:blur-sm group-hover:opacity-40 w-full"
        />
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver repositorio de ${title}`}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <FaGlobe size={22} className="text-black dark:text-white" />
        </a>
      </div>

      {/* Descripción */}
      <div className="flex flex-col md:flex-row md:justify-between items-center w-full gap-2">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>

        {/* Flecha decorativa */}
        <div className="group mt-2 md:mt-0 text-blue-600 cursor-pointer">
          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};

const LastWorks = () => {
  const works = [
    {
      image: morseExpress,
      title: "Morse Express",
      description: "Traductor de codigo morse.",
      demoUrl: "https://morse-traslator.vercel.app/",
    },
    {
      image: clavePro,
      title: "Clave Pro",
      description: "Generador de contraseñas seguras",
      demoUrl: "https://password-generator-smoky-gamma-95.vercel.app/",
    },
  ];

  return (
    <section className="bg-white text-black dark:bg-[#0a192f] dark:text-white max-w-4xl mx-auto p-8 rounded-lg">
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* Descripción general */}
        <div className="w-full lg:w-1/2 p-6">
          <h2 className="text-3xl font-bold mb-4">
            Últimos Trabajos Realizados
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Una selección de proyectos recientes que integran diseño funcional,
            desarrollo eficiente y soluciones personalizadas para distintas
            necesidades y contextos.
          </p>
        </div>

        {/* Lista de trabajos */}
        <div className="w-full lg:w-1/2 p-4 space-y-4">
          {works.map((work, index) => (
            <WorkCard key={index} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LastWorks;
