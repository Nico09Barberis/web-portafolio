import { motion } from "framer-motion";
import Carousel3D from "./carousel";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDatabase,
  FaJava,
} from "react-icons/fa";

import { SiMongodb, SiRender } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";

const items = [
  { icon: <FaReact />, label: "React" },
  { icon: <FaNodeJs />, label: "Node.js" },
  { icon: <FaHtml5 />, label: "HTML" },
  { icon: <FaCss3Alt />, label: "CSS" },
  { icon: <FaJs />, label: "JavaScript" },
  { icon: <FaGitAlt />, label: "Git" },
  { icon: <FaDatabase />, label: "SQL" },
  { icon: <FaJava />, label: "Java" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <IoLogoVercel />, label: "Vercel" },
  { icon: <SiRender />, label: "render" },
];

const certifications = [
  {
    title: "Primeros pasos del desarrollo frontend",
    provider: "Argentina Programa 4.0",
    year: "2023",
    link: "/certificates/front-curse.pdf",
  },
  {
    title: "Curso de Python",
    provider: "CODERHOUSE",
    year: "2022",
    link: "/certificates/python-curse.png",
  },
  {
    title: "Programador de Arduino ",
    provider: "Edutin Academy",
    year: "2022",
    link: "/certificates/arduino-curse.pdf",
  },
];

const SkillsSection = () => {
  return (
    <section className="bg-white dark:bg-[#0a192f]  py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-2 text-black dark:text-white">
          Herramientas y tecnologías que utilizo
        </h2>
        <p className="text-justify text-gray-600 dark:text-gray-300 mb-8">
          Desde lo visual hasta lo funcional, estas son las herramientas que uso
          para construir soluciones reales.
        </p>

        <div className="flex items-center justify-center">
          <Carousel3D items={items} />
        </div>

        <p className="text-justify text-gray-600 dark:text-gray-300 mb-8">
          Día a día me mantengo en constante aprendizaje, explorando nuevas
          tecnologías y metodologías. Mi objetivo es identificar y utilizar las
          herramientas más adecuadas para resolver de forma eficiente cualquier
          desafío o proyecto que se presente, siempre buscando la mejor
          combinación entre innovación, rendimiento y practicidad.
        </p>

        {/* Certificaciones */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-extrabold mb-6 text-center text-gray-800 dark:text-white">
            🎓 Certificaciones & Cursos
          </h3>
          <ul className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group border border-gray-300 dark:border-gray-700 bg-gradient-to-br from-[#f7f9fa] to-[#e9ecef] 
                  dark:from-[#0d1b2a] dark:to-[#112240] rounded-xl p-5 shadow-sm hover:shadow-lg 
                  transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  {/* Icono */}
                  <div
                    className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-100 dark:bg-blue-900 
                          rounded-full text-blue-600 dark:text-blue-300 text-lg font-bold"
                  >
                    {index + 1}
                  </div>

                  {/* Texto */}
                  <div>
                    <p className="font-semibold text-lg text-gray-800 dark:text-white">
                      {cert.title}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {cert.provider} · {cert.year}
                    </p>

                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 
                          mt-2 opacity-80 hover:opacity-100 hover:underline"
                      >
                        <span>Ver certificado</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 3h7m0 0v7m0-7L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
