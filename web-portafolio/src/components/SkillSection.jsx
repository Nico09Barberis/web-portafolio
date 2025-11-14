import { motion } from "framer-motion";
import Carousel3D from "./Carousel3D";
import TargetTechs from "./TargetTechs";

import {
  SiGooglefonts,
  SiCloudinary,
  SiGoogleforms,
  SiCanva,
  SiAdobeillustrator,
  SiPostman,
} from "react-icons/si";
import { RiNotionFill } from "react-icons/ri";
import { DiGoogleAnalytics } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { FaDrawPolygon } from "react-icons/fa";

const items = [
  { icon: <DiGoogleAnalytics />, label: "Google Analytics" },
  { icon: <SiCanva />, label: "Canva" },
  { icon: <SiPostman />, label: "Postman" },
  { icon: <RiNotionFill />, label: "Notion" },
  { icon: <SiCloudinary />, label: "Cloudinary" },
  { icon: <SiGoogleforms />, label: "Google Forms" },
  { icon: <SiAdobeillustrator />, label: "Adobe Ilustrator" },
  { icon: <IoLogoFirebase />, label: "Firebase" },
  { icon: <SiGooglefonts />, label: "Google Fonts" },
  { icon: <FaDrawPolygon />, label: "Drawio" },
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
    <section className="bg-white dark:bg-[#0a192f] py-10 px-4 font-audiowide">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl text-center mb-2 text-black dark:text-gray-100">
          Herramientas y tecnologías que utilizo
        </h1>
        <p className="text-center text-gray-900 dark:text-gray-100 max-w-2xl mx-auto mb-8">
          Desde lo visual hasta lo funcional, estas son las tecnologías que
          utilizo para crear soluciones eficientes, estables y orientadas a las
          necesidades reales de cada proyecto. Me apasiona mantenerme
          actualizado y seguir perfeccionándome día a día, incorporando nuevas
          herramientas, buenas prácticas y enfoques que potencien la calidad de
          mi trabajo y la experiencia de quienes utilizan mis desarrollos.
        </p>

        <TargetTechs />

        <h2 className="text-2xl md:text-3xl text-center mb-2 text-black dark:text-gray-100">
          Otras herramientas y tecnologías que utilizo
        </h2>
        <p className="text-center text-gray-900 dark:text-gray-100 max-w-2xl mx-auto mb-8">
          En mis proyectos trabajo con un conjunto de herramientas que me
          permiten organizar ideas, diseñar, optimizar flujos y llevar cada
          desarrollo a un nivel profesional. Utilizo plataformas como Notion
          para la planificación y documentación, Postman para pruebas de APIs y
          Firebase para manejar autenticación, bases de datos y almacenamiento
          en la nube.
          <br />
          <br />
          Para el diseño visual y la creación de recursos gráficos incorporo
          herramientas como Canva, Adobe Illustrator y Google Fonts, mientras
          que Cloudinary me permite optimizar y gestionar imágenes de forma
          eficiente. Complemento este flujo con Google Analytics y Google Forms
          para analizar métricas, recopilar información y mejorar la experiencia
          del usuario. Además, uso Draw.io para diagramar estructuras, flujos y
          sistemas, lo que me ayuda a planificar soluciones claras y bien
          fundamentadas.
          <br />
          <br />
          Cada una de estas herramientas es parte esencial de mi proceso de
          trabajo, y continuamente sigo perfeccionándome en su uso para ofrecer
          resultados cada vez más sólidos, organizados y visualmente cuidados.
        </p>

        <div className="font-quantico font-semibold flex items-center text-center justify-center">
          <Carousel3D items={items} />
        </div>

        <p className="text-justify text-gray-900 dark:text-gray-100 max-w-2xl mx-auto my-8">
          Día a día me mantengo en constante aprendizaje, explorando nuevas
          tecnologías y metodologías. Mi objetivo es identificar y utilizar las
          herramientas más adecuadas para resolver de forma eficiente cualquier
          desafío o proyecto que se presente, siempre buscando la mejor
          combinación entre innovación, rendimiento y practicidad.
        </p>

        {/* Certificaciones */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl mb-6 text-center text-gray-900 dark:text-gray-100">
            Certificaciones & Cursos
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
                    <p className="text-lg text-gray-800 dark:text-white">
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
