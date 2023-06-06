/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/components/AppDescription.js",
    "./src/components/Header.js",
    "./src/components/LogoHeaderFooter.js",
    "./src/components/Socials.js",
    "./src/components/Reviews.js",
    "./src/components/Menu.js",
    "./src/components/Location.js",
    "./src/components/Home.js",
  ],
  theme: {
    extend: {
      // that is animation class
      animation: {
        fade: "fadeOut 5s ease-in-out",
      },
      // that is actual animation
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { backgroundColor: theme("colors.red.300") },
          "100%": { backgroundColor: theme("colors.transparent") },
        },
      }),
    },
  },
  plugins: [],
};
