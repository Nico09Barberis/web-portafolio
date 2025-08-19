// CarouselPost.jsx
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CarouselPost = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images.length) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
      {/* Imagen actual */}
      <img
        src={images[currentIndex]}
        alt={`Imagen ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-all duration-300"
      />

      {/* Botones prev/next solo si hay más de una imagen */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="
              absolute left-2 top-1/2 transform -translate-y-1/2
              bg-black/40 hover:bg-black/60
              text-white text-2xl
              w-8 h-8 flex items-center justify-center
              rounded-full shadow-lg
              transition-all duration-200
            "
            aria-label="Imagen anterior"
          >
            <FaChevronLeft size={16}/>
          </button>

          <button
            onClick={nextImage}
            className="
              absolute right-2 top-1/2 transform -translate-y-1/2
              bg-black/40 hover:bg-black/60
              text-white text-2xl
              w-8 h-8 flex items-center justify-center
              rounded-full shadow-lg
              transition-all duration-200
            "
            aria-label="Siguiente imagen"
          >
            <FaChevronRight size={16} />
          </button>
        </>
      )}
    </div>
  );
};

export default CarouselPost;
