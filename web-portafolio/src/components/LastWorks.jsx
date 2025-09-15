import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { FaGlobe } from "react-icons/fa";

import gestorTurnos from "../assets/proyects/gestor-turnos.png";
import clavePro from "../assets/proyects/clave-pro.png";
import reciclApp from "../assets/proyects/reciclapp.png";

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
          {/* Overlay con ícono */}
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver demo de ${title}`}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <FaGlobe size={28} className="text-white" />
          </a>
        </div>

        {/* Contenido */}
        <div className="p-5 flex flex-col justify-between gap-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
          <div>
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-2 text-blue-600 dark:text-blue-400 font-semibold group hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
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
      image: gestorTurnos,
      title: "Gestor de turnos",
      description: "Sistema de gestión de turnos para profesionales y consultorios",
      demoUrl: "https://gestor-turnos-flame.vercel.app/",
    },
    {
      image: clavePro,
      title: "Clave Pro",
      description: "Generador de contraseñas seguras.",
      demoUrl: "https://password-generator-smoky-gamma-95.vercel.app/",
    },
    {
      image: reciclApp,
      title: "reciclApp",
      description: "Aprende a reciclar correctamente.",
      demoUrl: "https://app-reciclaje-khaki.vercel.app/",
    },
  ];

  return (
    <section className="bg-white dark:bg-[#0a192f] text-black dark:text-white max-w-5xl mx-auto p-8 rounded-2xl">
      
      {/* Descripción general */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold mb-4">Últimos Trabajos Realizados</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Una selección de proyectos recientes que integran diseño funcional,
          desarrollo eficiente y soluciones personalizadas para distintas
          necesidades y contextos.
        </p>
      </div>

      {/* Lista de trabajos en columna */}
      <div className="flex flex-col gap-6">
        {works.map((work, index) => (
          <WorkCard key={index} {...work} />
        ))}
      </div>
    </section>
  );
};

export default LastWorks;
