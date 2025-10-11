import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa"; // icono para email

const Social = () => {
  return (
    <section>
      <div className="flex gap-2 justify-center p-4 cursor-pointer">
        <a
          href="mailto:barberisnicolas.dev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope
            size={46}
            className="bg-white text-gray-700 hover:bg-[#bae6fd] dark:bg-[#0a192f] dark:text-white dark:hover:bg-[#112240] p-2 hover:scale-110 rounded-lg"
          />
        </a>

        <a
          href="https://www.instagram.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram
            size={46}
            className="bg-white text-gray-700 hover:bg-[#bae6fd] dark:bg-[#0a192f] dark:text-white dark:hover:bg-[#112240] p-2 hover:scale-110 rounded-lg"
          />
        </a>

        <a
          href="https://github.com/Nico09Barberis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare
            size={46}
            className="bg-white text-gray-700 hover:bg-[#bae6fd] dark:bg-[#0a192f] dark:text-white dark:hover:bg-[#112240] p-2 hover:scale-110 rounded-lg"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/nico09barberis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            size={46}
            className="bg-white text-gray-700 hover:bg-[#bae6fd] dark:bg-[#0a192f] dark:text-white dark:hover:bg-[#112240] p-2 hover:scale-110 rounded-lg"
          />
        </a>
      </div>

      <div className="text-center p-2 font-audiowide">
        <p className="text-gray-700 dark:text-gray-100 text-sm md:text-base">
          © {new Date().getFullYear()} Barberis Nicolas. Todos los derechos
          reservados.
        </p>
      </div>
    </section>
  );
};

export default Social;
