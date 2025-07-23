import { FaReact, FaJava, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiJavascript } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io5";

const techSkills = [
  { icon: <FaReact size={32} />, name: "C" },
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
    title: "Curso Full Stack MERN",
    provider: "Coderhouse",
    year: "2024",
    link: "/cerfificados/curso",
  },
  {
    title: "JavaScript Avanzado",
    provider: "Udemy",
    year: "2023",
    link: "/cerfificados/curso",
  },
  {
    title: "Desarrollo Web desde Cero",
    provider: "freeCodeCamp",
    year: "2022",
    link: "/cerfificados/curso",
  },
];

const SkillsSection = () => {
  return (
    <section className="bg-white dark:bg-[#0b1d3a] text-black dark:text-white py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Habilidades</h2>

        {/* Habilidades técnicas */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {techSkills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-2 w-24">
              <div className="text-blue-600 dark:text-blue-400">
                {skill.icon}
              </div>
              <p className="text-sm text-center">{skill.name}</p>
            </div>
          ))}
        </div>

        {/* Certificaciones */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Certificaciones & Cursos
          </h3>
          <ul className="space-y-2">
            {certifications.map((cert, index) => (
              <li
                key={index}
                className="border border-gray-200 dark:border-gray-600 rounded-lg p-4"
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
