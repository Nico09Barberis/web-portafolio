import HeroSection from "../components/HeroSection";
import LastWorks from "../components/LastWorks";
import Profile from "../components/Profile";
import Social from "../components/Social";
import ButtonMode from "../components/ButtonMode";
import Works from "../components/Works";

const ProjectPage = () => {
  return (
    <div className="relative">
      {/* Botón de modo claro/oscuro en la esquina superior derecha */}
      <div className="absolute top-2 right-2 md:fixed z-50">
        <ButtonMode />
      </div>

      <section className="max-w-4xl mx-auto">
        {/* Contenido principal */}
        <div className="w-full border-x border-gray-300 dark:border-gray-600">
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

export default ProjectPage;
