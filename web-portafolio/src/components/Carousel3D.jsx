import React from "react";

const Carousel3D = ({ items }) => {
  return (
    <div className="relative w-[400px] h-[200px] transform-style-preserve-3d animate-autoRun3d hover:[animation-play-state:paused]">
      {items.map((item, i) => (
        <div
          key={i}
          className="absolute w-[80px] h-[112px] bg-gray-300 border-2 border-gray-300 rounded-md top-1/2 left-1/2 transform-origin-center animate-animateBrightness hover:[animation-play-state:paused] flex flex-col items-center justify-center text-gray-800 text-sm font-medium"
          style={{
            transform: `translate(-50%, -50%) rotateY(${
              i * (360 / items.length)
            }deg) translateZ(150px)`,
            animationDelay: `-${i * 2}s`,
          }}
        >
          <div className="text-2xl mb-1">{item.icon}</div>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Carousel3D;
