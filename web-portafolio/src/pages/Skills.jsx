import HeroSection from "../components/HeroSection";
import Profile from "../components/Profile";
import Social from "../components/Social";
import ButtonMode from "../components/ButtonMode";
import SkillsSection from "../components/SkillSection";


const Skills = () => {
  return (
    <div className="relative">
      {/* Botón de modo claro/oscuro en la esquina superior derecha */}
      <div className="absolute top-2 right-2 md:fixed z-50">
        <ButtonMode />
      </div>

      <section className="flex flex-wrap max-w-4xl mx-auto">
        {/* Contenido principal */}
        <div className="w-full flex-1 border border-gray-600">
          <Profile />
          <HeroSection />
          <SkillsSection />
          <Social />
        </div>
      </section>
    </div>
  );
};

export default Skills;
