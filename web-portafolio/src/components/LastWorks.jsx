import WorksImg from "../assets/works.png";
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

// Subcomponente para evitar repetición
const WorkCard = ({ image, title, description, repoUrl }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-center justify-between border-b p-4 gap-4">
      {/* Imagen con efecto hover */}
      <div className="w-full lg:w-40 h-auto relative group overflow-hidden rounded-lg">
        <img
          src={image}
          alt="imagen de trabajo"
          className="transition-all duration-300 group-hover:blur-sm group-hover:opacity-40 w-full"
        />
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <FaGithub size={32} className="text-black dark:text-white" />
        </a>
      </div>

      {/* Texto + flecha en contenedor aparte */}
      <div className="flex flex-col md:flex-row md:justify-center md:items-center w-full gap-2">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p>{description}</p>
        </div>

        {/* Flecha */}
        <div className="group flex justify-center md:justify-end mt-2 md:mt-0 text-blue-600 font-semibold cursor-pointer">
          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
        </div>
      </div>
    </div>
  );
};

const LastWorks = () => {
  const works = [
    {
      image: WorksImg,
      title: "250",
      description: "Página para un sancor",
      repoUrl: "https://github.com/usuario/repositorio1",
    },
    {
      image: WorksImg,
      title: "250",
      description: "Página para otro proyecto",
      repoUrl: "https://github.com/usuario/repositorio2",
    },
    {
      image: WorksImg,
      title: "250",
      description: "Proyecto con dinosaurios",
      repoUrl: "https://github.com/usuario/repositorio3",
    },
  ];

  return (
    <section className="bg-white text-black dark:bg-[#0b1d3a] dark:text-white max-w-3xl mx-auto p-4 rounded-lg">
      <div className="mt-2 flex flex-col lg:flex-row items-start gap-2 w-full">
        {/* Sección izquierda */}
        <div className="w-full lg:w-1/2 text-center lg:text-left p-4">
          <h2 className="text-3xl font-bold my-4">
            Estos son algunos de los ultimos trabajos
          </h2>
          <p>
            en el ámbito laboral, como así también los dinosaurios y empanadas
            de jamón y queso
          </p>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 mx-auto my-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n}>
                <h2 className="text-3xl font-bold text-[#f8ca34]">250</h2>
                <p>ddd dddd dddd</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sección derecha con los trabajos */}
        <div className="w-full lg:w-1/2 text-center lg:text-left p-4">
          {works.map((work, index) => (
            <WorkCard key={index} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LastWorks;
