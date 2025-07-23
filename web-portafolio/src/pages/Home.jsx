import HeroSection from "../components/HeroSection";
import LastWorks from "../components/LastWorks";
import Profile from "../components/Profile";
import Publication from "../components/Publication";
import PostImg from "../assets/works.png";
import Social from "../components/Social";
import ButtonMode from "../components/ButtonMode";

const Home = () => {
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
        <Publication
          postImg={PostImg}
          content={
            "¡Hola! Soy Nico Barberis, desarrollador web apasionado por la tecnología y el diseño digital. Desde que comencé en este mundo, me ha fascinado la capacidad de crear experiencias interactivas que no solo funcionan bien, sino que también se sienten bien para el usuario."
          }
        />
        <Publication
          postImg={PostImg}
          content={
            "¡Hola! Soy Nico Barberis, desarrollador web apasionado por la tecnología y el diseño digital. Desde que comencé en este mundo, me ha fascinado la capacidad de crear experiencias interactivas que no solo funcionan bien, sino que también se sienten bien para el usuario."
          }
        />
        <Publication
          postImg={PostImg}
          content={
            "¡Hola! Soy Nico Barberis, desarrollador web apasionado por la tecnología y el diseño digital. Desde que comencé en este mundo, me ha fascinado la capacidad de crear experiencias interactivas que no solo funcionan bien, sino que también se sienten bien para el usuario."
          }
        />
        <Social />
      </div>
    </section>
    </div>
  );
};

export default Home;
