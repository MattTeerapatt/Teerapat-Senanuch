/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "deep-blue": "#010026",
        "dark-grey": "#102542",
        "opaque-black": "rgba(0,0,0,0.35)",
        black: "#191716",
        grey: "#efe5dc",
        brown: "#4c5454",
        "navbar-main": "#676f54",
        "navbar-mobile": "#829b78",

        "intense-yel": "#ffad05",
        whity: "#151c0d",
        button: "#676f54",
        "color-button-font": "#e1e5ba",
        "bg-main":"#afbe8f",
        "light-black": "#353535",
      },
      backgroundImage: {
        "gradient-1":
          "linear-gradient(90deg, #ffcc80 50.53%, #ffb74d 86.36%, #e57373 127.73%)",

        "gradient-2":
          "linear-gradient(90deg, #ffd699 50.73%, #ffad80 86.36%, #ff8c66 127.73%)",

          "gradient-raingreen": "bg-gradient-to-r from-indigo-500"
,

          "gradient-rainblue":
          "linear-gradient(90deg, #588157 15%, #75a083 45%, #588157 75%, #344e41 100%)",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
