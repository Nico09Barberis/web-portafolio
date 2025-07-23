import WorksImg from "../assets/works.png";
import { FaGithub } from "react-icons/fa";
import ProjectNum from "./ProjectNum";


const personalWorks = [
  {
    img: WorksImg,
    description: "Landing para Sancor Seguros",
    repo: "https://github.com/usuario/proyecto1",
  },
  {
    img: WorksImg,
    description: "E-commerce de ropa urbana",
    repo: "https://github.com/usuario/proyecto2",
  },
];

const collaborations = [
  {
    img: WorksImg,
    description: "Panel de control para ONG",
    repo: "https://github.com/usuario/colaboracion1",
  },
  {
    img: WorksImg,
    description: "Sistema de reservas para evento cultural",
    repo: "https://github.com/usuario/colaboracion2",
  },
];

const WorkSection = ({ title, works }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-semibold mb-6 text-center">{title}</h3>
    <div className="flex flex-wrap justify-center gap-8">
      {works.map((work, index) => (
        <div
          key={index}
          className="flex flex-col items-center max-w-xs text-center"
        >
          <div className="relative group w-full overflow-hidden rounded-lg shadow-md">
            <img
              src={work.img}
              alt={work.description}
              className="w-full h-auto transition-all duration-300 group-hover:blur-sm group-hover:opacity-40"
            />
            <a
              href={work.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <FaGithub size={32} className="text-black dark:text-white" />
            </a>
          </div>
          <p className="text-base mt-4">{work.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const Works = () => {
  return (
    <section className="bg-white text-black dark:bg-[#0b1d3a] dark:text-white py-12 px-4">
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

