import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

import morseExpress from "../assets/proyects/morse-express.png";
import clavePro from "../assets/proyects/clave-pro.png";
import reciclApp from "../assets/proyects/reciclapp.png";
import nexWeb from "../assets/proyects/nex.webp";
import tienda500millas from "../assets/proyects/500millas.png";
import unlook from "../assets/proyects/unlook.png";
import systemRegister from "../assets/proyects/system-register.png";
import dyfcelebraciones from "../assets/proyects/dyfcelebraciones.webp"

// Proyectos personales
const personalWorks = [
  {
    title: "Morse Express",
    description:
      "Este proyecto es una app para aprender código morse que combina un traductor, juegos prácticos y un diccionario, haciendo que el aprendizaje sea divertido y dinámico.",
    img: morseExpress,
    repo: "https://github.com/Nico09Barberis/morse-translator.git",
    demo: "https://morse-traslator.vercel.app/",
    techs: ["React", "Tailwind", "Vite"],
  },
  {
    title: "Clave Pro",
    description:
      "Este proyecto es un Generador de Contraseñas Seguras que crea claves únicas y robustas, permitiendo ajustar su complejidad y longitud, con el objetivo de mejorar la seguridad digital y fomentar buenas prácticas en la gestión de contraseñas.",
    img: clavePro,
    repo: "https://github.com/Nico09Barberis/password-generator.git",
    demo: "https://password-generator-smoky-gamma-95.vercel.app/",
    techs: ["React", "Tailwind", "Vite"],
  },
  {
    title: "reciclApp",
    description:
      "El proyecto es una aplicación interactiva que enseña a separar residuos y reciclar correctamente, combinando información clara con juegos para fomentar hábitos sostenibles de manera divertida.",
    img: reciclApp,
    repo: "https://github.com/Nico09Barberis/app-reciclaje.git",
    demo: "https://app-reciclaje-khaki.vercel.app/",
    techs: ["React", "Tailwind", "Vite"],
  },
  {
    title: "Ecommerce Un Look",
    description:
      "Tienda online de indumentaria urbana y deportiva. Diseño moderno, catálogo dinámico y experiencia de compra optimizada para dispositivos móviles.",
    img: unlook,
    demo: "https://unlook.ar/",
    techs: ["TiendaNube", "Google Tag Manager", "Google Analytics 4"],
  },
  {
    title: "500 millas",
    description:
      "Página web institucional para una empresa dedicada a la producción de alfajores santafesinos y panificados artesanales. Incluye secciones de inicio, productos y mas.",
    img: tienda500millas,
    demo: "https://500millasarg.com.ar/",
    techs: ["React", "Tailwind", "Vite", "Google forms"],
  },
  {
    title: "Sistema de checkin/checkout",
    description:
      "Sistema que permite gestionar empleados y registrar sus horarios de entrada y salida mediante un PIN único. Incluye panel de administración para crear y listar empleados, y registro automático de check-in/check-out.",
    img: systemRegister,
    demo: "https://500millasarg.com.ar/",
    techs: ["React", "Tailwind", "Next", "Prisma", "PostgreSQL"],
  },
  {
    title: "Web institucional - DyF Celebraciones",
    description:
      "Sitio web institucional desarrollado para DyF Celebraciones, una empresa dedicada a la organización y decoración de eventos. La web presenta sus servicios, portfolio visual de trabajos realizados y canales de contacto, con un diseño moderno, responsive y enfocado en transmitir profesionalismo y generar consultas.",
    img: dyfcelebraciones,
    demo: "https://dyfcelebraciones.com.ar/", // reemplazar por la URL real
    techs: ["React", "Next.js", "Tailwind CSS"],
  },
  {
  title: "Web institucional - NEX Servicios Aéreos",
  description:
    "Desarrollo de sitio web institucional para NEX, una empresa especializada en servicios audiovisuales con drones. La plataforma está enfocada en comunicar propuestas de valor, presentar planes de servicio y facilitar la captación de clientes mediante una experiencia clara, visual y orientada a conversión.",
  img: nexWeb,
  demo: "https://nexairdata.com.ar/", // reemplazar por la URL real
  techs: ["React", "Next.js", "Tailwind CSS"],
}
];

// Colaboraciones
const collaborations = [];

// Componente de tarjeta con título, descripción y tooltips en iconos
const WorkCard = ({ title, description, img, demo, techs, index }) => {
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
      
        </div>

        {/* Contenido: título y descripción */}
        <div className="p-5 flex flex-col justify-between gap-2">
          <h3 className="text-xl text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 text-sm md:text-base dark:text-gray-300 mb-2">
            {description}
          </p>

          {techs && techs.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {techs.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-gray-800 bg-gray-200 hover:bg-gray-300  dark:text-gray-200 dark:bg-gray-600 dark:hover:bg-gray-700  text-xs px-3 py-1 rounded-full"
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
              className="inline-flex items-center mt-2 text-blue-600 dark:text-blue-400 group hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
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
    <h3 className="text-2xl md:text-3xl mb-6 text-center">{title}</h3>

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
    <section className="bg-white dark:bg-[#0a192f] py-12 px-4 md:px-12 max-w-5xl mx-auto rounded-2xl font-audiowide">
      <h2 className="text-2xl md:text-3xl text-center mb-4">Mis Trabajos</h2>
      <p className="text-base md:text-lg text-justify md:text-center max-w-2xl mx-auto text-gray-900 dark:text-gray-100 mb-10">
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
