import HeroSection from "../components/HeroSection";
import LastWorks from "../components/LastWorks";
import Profile from "../components/Profile";
import Publication from "../components/Publication";
import PostImg from "../assets/works.png";
import Social from "../components/Social";
import ButtonMode from "../components/ButtonMode";
import WorksImg from '../assets/works.png';
import { ArrowRight } from 'lucide-react';
import ProjectNum from "../components/ProjectNum";
import Works from "../components/Works";

const Project = () => {
  return (
    <div className="relative">
      {/* Botón de modo claro/oscuro en la esquina superior derecha */}
      <div className="absolute top-2 right-2 md:fixed z-50">
        <ButtonMode />
      </div>

      <section className="max-w-4xl mx-auto">
        {/* Contenido principal */}
        <div className="w-full border border-gray-600">
          <Profile />
          <HeroSection />

          <LastWorks />      
          <Works />
          <Social />
        </div>
      </section>
    </div>
  );
};

export default Project;
