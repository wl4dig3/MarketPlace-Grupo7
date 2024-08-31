/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        thin: 100,
        medium: 500,
        extrabold: 800,
        black: 900,
      },
      fontStyle: {
        italic: "italic",
        normal: "normal",
      },
      textShadow: {
        white: '2px 2px 4px rgba(255, 255, 255, 0.8)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-white': {
          textShadow: '2px 2px 15px rgba(255, 255, 255, 0.4)',
        },
      });
    },
  ],
};
