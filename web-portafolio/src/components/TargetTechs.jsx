// TargetTechs.jsx
import React from "react";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiVite, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";

export default function TargetTechs() {
  // EJEMPLO: 12 tecnologías personalizadas
  const items = [
    { title: "React", icon: <FaReact /> },
    { title: "JavaScript", icon: <SiJavascript /> },
    { title: "TypeScript", icon: <SiTypescript /> },
    { title: "Vite", icon: <SiVite /> },
    { title: "TailwindCSS", icon: <SiTailwindcss /> },
    { title: "HTML5", icon: <FaHtml5 /> },
    { title: "CSS3", icon: <FaCss3Alt /> },
    { title: "NodeJS", icon: <FaNodeJs /> },
    { title: "Git", icon: <FaGitAlt /> },
    { title: "Next.js", icon: <SiNextdotjs /> },
    { title: "Vercel", icon: <IoLogoVercel /> },
    { title: "MongoDB", icon: <DiMongodb /> },
  ];

  return (
    <div className="w-full flex justify-center my-10 px-4">

      {/* Contenedor principal SIN fondo, SIN borde */}
      <div
        className="
          group relative 
          w-full max-w-xl
          rounded-xl
          transition-all duration-500 ease-in-out

          /* Altura fija = altura matriz */
          min-h-[360px] sm:min-h-[380px] lg:min-h-[400px]

          /* NO background → tarjetas flotan */
        "
      >

        {/* Vista principal */}
        <div
          className="
            absolute inset-0 
            flex items-center justify-center
            text-2xl sm:text-3xl font-bold
            transition-all duration-500 ease-in-out
            group-hover:opacity-0 
            group-hover:scale-95
            p-6 text-center
          "
        >
          Tecnologías
        </div>

        {/* MATRIZ 3×4 flotante */}
        <div
          className="
            absolute inset-0
            opacity-0 scale-95
            group-hover:opacity-100 
            group-hover:scale-100
            transition-all duration-500 ease-in-out

            p-4 grid gap-4
            grid-cols-3
            grid-rows-4
          "
        >
          {items.map((it, idx) => (
            <div
              key={idx}
              className="
                flex flex-col items-center justify-center
                backdrop-blur-md         /* EFECTO GLASS sutil */
                bg-white/10 dark:bg-white/5
                shadow-lg shadow-black/20
                rounded-xl
                p-4 text-sm
                transition-all duration-300 ease-in-out
                hover:scale-110 hover:bg-white/20
              "
            >
              <span className="text-2xl mb-1">{it.icon}</span>
              <span className="text-center">{it.title}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
