import HeroSection from "../components/HeroSection";
import LastWorks from "../components/LastWorks";
import Profile from "../components/Profile";
import Publication from "../components/Publication";
import PostImg1 from "../assets/about-me-1.jpg";
import PostImg2 from "../assets/about-me-2.jpg";
import Social from "../components/Social";
import ButtonMode from "../components/ButtonMode";
import CardCV from "../components/cardCv";

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
          <section className="bg-white text-black text-justify dark:bg-[#0a192f] dark:text-white max-w-3xl mx-auto p-6 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6 text-center">
              ¡Hola a todos!
            </h2>

            <div className="space-y-4 text-base leading-relaxed">
              <p>
                Soy Técnico Universitario en Programación, apasionado por la
                tecnología y el desarrollo de software. Disfruto profundamente
                enfrentar desafíos y resolver problemas a través del código,
                siempre buscando mejorar mis habilidades y aprender algo nuevo
                cada día.
              </p>

              <p>
                Me considero una persona autodidacta, con una fuerte orientación
                al crecimiento constante y la superación personal. Tengo
                experiencia práctica en una variedad de tecnologías, incluyendo
                lenguajes como C, Java, HTML, CSS y herramientas modernas como
                Bootstrap, React, TailwindCSS, así como en el desarrollo de
                backends con Node.js y Express.
              </p>

              <p>
                También tengo conocimientos en bases de datos relacionales como
                SQL Server y no relacionales como MongoDB. Estoy comprometido
                con el aprendizaje continuo y la mejora constante, con la
                convicción de que cada nuevo proyecto representa una oportunidad
                para crecer tanto técnica como profesionalmente.
              </p>
            </div>

            <div className="mt-6">
              <img
                src={PostImg1}
                alt="imagen de acerca de mi"
                className="object-cover w-full h-auto rounded-lg shadow-sm"
              />
            </div>

            <div className="mt-6 space-y-4 text-base leading-relaxed">
              <p>
                Fuera del mundo del desarrollo, me gusta disfrutar de las
                pequeñas cosas que me recargan de energía. Tocar la guitarra es
                una de mis pasiones: me permite desconectarme, expresarme y
                seguir aprendiendo algo nuevo con cada acorde. También valoro
                mucho compartir momentos con mis amigos, mi familia y mis
                mascotas, que son una parte fundamental de mi vida.
              </p>

              <p>
                Soy una persona proactiva y dinámica, con una marcada
                inclinación por mantenerme en constante actividad. Me motiva
                aprender, mejorar y asumir nuevos desafíos, ya sea resolviendo
                problemas, desarrollando ideas o explorando nuevas habilidades.
                Disfruto optimizar mi tiempo y aprovechar cada día al máximo.
              </p>
            </div>

            <div className="mt-6">
              <img
                src={PostImg2}
                alt="imagen de acerca de mi"
                className="object-cover w-full h-auto rounded-lg shadow-sm"
              />
            </div>

            <div className="mt-6 space-y-4 text-base leading-relaxed">
              <p>
                Me caracterizo por una mentalidad de aprendizaje continuo,
                buscando cada día ampliar mis conocimientos y habilidades. Me
                capacito de forma constante y me mantengo al tanto de las nuevas
                tecnologías, tendencias y herramientas en el ámbito del
                desarrollo, la programación, la inteligencia artificial y el
                mundo IT en general.
              </p>

              <p>
                Considero fundamental evolucionar junto con el sector,
                adaptándome a los cambios y adoptando innovaciones que aporten
                valor. Estoy en un proceso permanente de crecimiento, no solo
                como profesional, sino también a nivel personal, cultivando
                habilidades que me permitan afrontar desafíos con una visión
                integral, estratégica y humana.
              </p>
            </div>

            <div className="mt-6 space-y-4 text-base leading-relaxed">
              <p>
                Si querés conocer más sobre mi trayectoria, experiencia y
                formación, te invito a descargar mi CV.
              </p>
            </div>

            <CardCV />
            
          </section>
          <Social />
        </div>
      </section>
    </div>
  );
};

export default Home;
