import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";


import tienda500millas from "../assets/proyects/500millas.png";
import dyfcelebraciones from "../assets/proyects/dyfcelebraciones.webp"
import nexWeb from "../assets/proyects/nex.webp";


// Componente WorkCard con efecto 3D
const WorkCard = ({ image, title, description, demoUrl }) => {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Animación al aparecer en pantalla
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
      } perspective-1000`}
    >
      <div className="relative group bg-white dark:bg-[#112240] rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
        {/* Imagen */}
        <div className="w-full h-48 overflow-hidden rounded-t-xl">
          <img
            src={image}
            alt={`Captura de ${title}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Contenido */}
        <div className="p-5 flex flex-col justify-between gap-3">
          <h3 className="text-xl text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-900 dark:text-gray-100">{description}</p>
          <div>
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-2 text-blue-600 dark:text-blue-400 group hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              Ver proyecto
              <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente LastWorks con tarjetas en columna
const LastWorks = () => {
  const works = [
    {
      image: tienda500millas,
      title: "500millas",
      description: "Pagina web institucional para una empresa dedicada a la produccion de alfajores santafesinos y panificados artesanales.",
      demoUrl: "https://500millasarg.com.ar/",
    },
    {
      image: dyfcelebraciones,
      title: "DyF Celebraciones",
      description: "Sitio web institucional para DyF Celebraciones.",
      demoUrl: "https://dyfcelebraciones.com.ar/",
    },
    {
      image: nexWeb,
      title: "NEX Servicios Aéreos",
      description:
        "Desarrollo de sitio web institucional para NEX, una empresa especializada en servicios audiovisuales con drones. La plataforma está enfocada en comunicar propuestas de valor, presentar planes de servicio y facilitar la captación de clientes mediante una experiencia clara, visual y orientada a conversión.",
      demoUrl: "https://nexairdata.com.ar/",
    },
  ];

  return (
    <section className="bg-white dark:bg-[#0a192f] text-black dark:text-white max-w-5xl mx-auto p-8 rounded-2xl font-audiowide">
      {/* Descripción general */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl mb-4">
          Últimos Trabajos Realizados
        </h2>
        <p className="text-gray-900 dark:text-gray-100 max-w-2xl mx-auto text-justify md:text-center text-base md:text-lg">
          Una selección de proyectos recientes que integran diseño funcional,
          desarrollo eficiente y soluciones personalizadas para distintas
          necesidades y contextos.
        </p>
      </div>

      {/* Lista de trabajos en columna */}
      <div className="flex flex-col gap-6 px-2 md:px-4">
        {works.map((work, index) => (
          <WorkCard key={index} {...work} />
        ))}
      </div>
    </section>
  );
};

export default LastWorks;
