/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['"Orbitron"', 'sans-serif'],
        audiowide: ['"Audiowide"', 'sans-serif'],
        pressStart: ['"Press Start 2P"', 'system-ui'],
        quantico: ['"Quantico"', 'sans-serif'],
        shareTechMono: ['"Share Tech Mono"', 'monospace'],
        vt323: ['"VT323"', 'monospace'],
      },
      keyframes: {
        autoRun3d: {
          from: { transform: 'perspective(800px) rotateY(-360deg)' },
          to: { transform: 'perspective(800px) rotateY(0deg)' },
        },
        animateBrightness: {
          '10%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(0.1)' },
          '90%': { filter: 'brightness(1)' },
        },
      },
      animation: {
        autoRun3d: 'autoRun3d 20s linear infinite',
        animateBrightness: 'animateBrightness 20s linear infinite',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.transform-style-preserve-3d': {
          transformStyle: 'preserve-3d',
        },
      });
    },
    function ({ addUtilities }) {
      addUtilities({
        '.rotate3d-init': {
          transform: 'rotate3d(1, -1, 1, 60deg)',
        },
      });
    },
  ],
}
