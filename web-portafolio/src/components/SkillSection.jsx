
import { motion } from "framer-motion";
import Carousel3D from "./carousel";

import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaPython, FaGitAlt, FaDatabase, FaCloud, FaDocker} from "react-icons/fa";

const items = [
    { icon: <FaReact />, label: "React" },
    { icon: <FaNodeJs />, label: "Node.js" },
    { icon: <FaHtml5 />, label: "HTML" },
    { icon: <FaCss3Alt />, label: "CSS" },
    { icon: <FaJs />, label: "JavaScript" },
    { icon: <FaPython />, label: "Python" },
    { icon: <FaGitAlt />, label: "Git" },
    { icon: <FaDatabase />, label: "SQL" },
    { icon: <FaCloud />, label: "Cloud" },
    { icon: <FaDocker />, label: "Docker" },
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
    <section className="bg-white dark:bg-[#0a192f] text-black dark:text-white py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">
          Herramientas y tecnologías que utilizo
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Desde lo visual hasta lo funcional, estas son las herramientas que uso
          para construir soluciones reales.
        </p>

        <div className="flex items-center justify-center">
            <Carousel3D items={items} />
          </div>

        {/* Certificaciones */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Certificaciones & Cursos
          </h3>
          <ul className="space-y-2">
            {certifications.map((cert, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-200 dark:border-gray-600 bg-white dark:bg-[#112240] rounded-lg p-4"
              >
                <p className="font-semibold">{cert.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {cert.provider} · {cert.year}
                </p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline mt-1 inline-block"
                  >
                    Ver certificado
                  </a>
                )}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
