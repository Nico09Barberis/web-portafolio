import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Social = () => {
  return (
    <section>
    <div className="flex gap-2 justify-center p-4 cursor-pointer">
      <FaFacebookSquare size={46} className="bg-white text-gray-500 hover:bg-[#bae6fd] dark:bg-[#0a192f] dark:text-white dark:hover:bg-[#112240] p-2 hover:scale-110 rounded-lg" />
      <FaInstagram size={46} className="bg-white text-gray-500 hover:bg-[#bae6fd] dark:bg-[#0a192f] dark:text-white dark:hover:bg-[#112240] p-2 hover:scale-110 rounded-lg" />
      <FaGithubSquare size={46} className="bg-white text-gray-500 hover:bg-[#bae6fd] dark:bg-[#0a192f] dark:text-white dark:hover:bg-[#112240] p-2 hover:scale-110 rounded-lg" />
      <FaLinkedin size={46} className="bg-white text-gray-500 hover:bg-[#bae6fd] dark:bg-[#0a192f] dark:text-white dark:hover:bg-[#112240] p-2 hover:scale-110 rounded-lg" />
    </div>
    <div className="text-center p-2">
      <p className="text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Nico Barberis. Todos los derechos reservados.
      </p>
    </div>
    </section>
  );
};

export default Social;
