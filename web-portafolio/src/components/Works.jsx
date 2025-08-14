import { motion } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";
import ProjectNum from "./ProjectNum";
import EcommerceImg from "../assets/works.png";
import OngImg from "../assets/works.png";
import morseExpress from "../assets/morse-express.png";
import clavePro from "../assets/clave-pro.png";
import reciclApp from "../assets/reciclapp.png";

// Proyectos personales
const personalWorks = [
  {
    img: morseExpress,
    description: "Morse Express, traductor de codigo morse",
    repo: "https://github.com/Nico09Barberis/morse-translator.git",
    demo: "https://morse-traslator.vercel.app/", // opcional
  },
  {
    img: clavePro,
    description: "Clave Pro, generador de contraseñas seguras",
    repo: "https://github.com/Nico09Barberis/password-generator.git",
    demo: "https://password-generator-smoky-gamma-95.vercel.app/", // opcional
  },
  {
    img: reciclApp,
    description: "reciclApp, aprende a reciclar correctamente",
    repo: "https://github.com/Nico09Barberis/app-reciclaje.git",
    demo: "https://app-reciclaje-khaki.vercel.app/", // opcional
  },
];

// Colaboraciones
const collaborations = [];

const WorkSection = ({ title, works }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-semibold mb-6 text-center">{title}</h3>

    {works.length === 0 ? (
      <p className="text-center text-gray-500 italic">
        🚧 Próximamente nuevas colaboraciones... trabajando en algo increíble.
      </p>
    ) : (
      <div className="flex flex-wrap justify-center gap-8">
        {works.map((work, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center max-w-xs text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative group w-full max-w-xs sm:max-w-full overflow-hidden rounded-lg shadow-md">
              <img
                src={work.img}
                alt={work.description}
                className="w-full h-48 sm:h-auto object-cover transition-all duration-300 group-hover:blur-sm group-hover:opacity-40"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2">
                {work.repo && (
                  <motion.a
                    href={work.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver repositorio en GitHub"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaGithub
                      size={28}
                      className="text-black dark:text-white"
                    />
                  </motion.a>
                )}
                {work.demo && (
                  <motion.a
                    href={work.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Ver demo del proyecto"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaGlobe size={24} className="text-black dark:text-white" />
                  </motion.a>
                )}
              </div>
            </div>
            <p className="text-base mt-4">{work.description}</p>
          </motion.div>
        ))}
      </div>
    )}
  </div>
);

const Works = () => {
  return (
    <section className="bg-white text-black dark:bg-[#0a192f] dark:text-white py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Mis Trabajos</h2>
      <p className="text-center max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-10">
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
