import { motion } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa";
import ProjectNum from "./ProjectNum";
import EcommerceImg from "../assets/works.png";
import OngImg from "../assets/works.png";

// Proyectos personales
const personalWorks = [
  {
    img: EcommerceImg,
    description: "Landing para Sancor Seguros",
    repo: "https://github.com/usuario/proyecto1",
    demo: "https://sancor-demo.vercel.app", // opcional
  },
  {
    img: EcommerceImg,
    description: "E-commerce de ropa urbana",
    repo: "https://github.com/usuario/proyecto2",
    demo: "https://urbanwear-demo.netlify.app", // opcional
  },
];

// Colaboraciones
const collaborations = [
  {
    img: OngImg,
    description: "Panel de control para ONG",
    repo: "https://github.com/usuario/colaboracion1",
  },
  {
    img: OngImg,
    description: "Sistema de reservas para evento cultural",
    repo: "https://github.com/usuario/colaboracion2",
    demo: "https://reservas-evento.vercel.app", // opcional
  },
];

const WorkSection = ({ title, works }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-semibold mb-6 text-center">{title}</h3>
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
          <div className="relative group w-full overflow-hidden rounded-lg shadow-md">
            <img
              src={work.img}
              alt={work.description}
              className="w-full h-auto transition-all duration-300 group-hover:blur-sm group-hover:opacity-40"
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
                  <FaGithub size={28} className="text-black dark:text-white" />
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
  </div>
);

const Works = () => {
  return (
    <section className="bg-white text-black dark:bg-[#0a192f] dark:text-white py-12 px-4">
      <div className="flex items-center justify-center">
        <ProjectNum />
      </div>
      <h2 className="text-3xl font-bold text-center mb-10">Mis Trabajos</h2>
      <WorkSection title="Proyectos Personales" works={personalWorks} />
      <WorkSection title="Colaboraciones" works={collaborations} />
    </section>
  );
};

export default Works;
