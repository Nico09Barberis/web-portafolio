import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiJavascript } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";
import { motion } from "framer-motion";
import { BsCCircleFill } from "react-icons/bs";

const techSkills = [
  { icon: <BsCCircleFill size={32} />, name: "C" },
  { icon: <TiHtml5 size={32} />, name: "HTML" },
  { icon: <IoLogoCss3 size={32} />, name: "CSS" },
  { icon: <FaJava size={32} />, name: "Java" },
  { icon: <FaReact size={32} />, name: "React" },
  { icon: <FaNodeJs size={32} />, name: "Node.js" },
  { icon: <SiTailwindcss size={32} />, name: "TailwindCSS" },
  { icon: <SiJavascript size={32} />, name: "JavaScript" },
  { icon: <SiMongodb size={32} />, name: "MongoDB" },
  { icon: <FaDatabase size={32} />, name: "SQL / NoSQL" },
  { icon: <FaGitAlt size={32} />, name: "Git" },
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

        {/* Habilidades técnicas */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {techSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-2 w-24"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-blue-600 dark:text-blue-400">
                {skill.icon}
              </div>
              <p className="text-sm text-center">{skill.name}</p>
            </motion.div>
          ))}
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
