const autoprefixer = require("autoprefixer");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1500px",
      xxxl: "1920px",
    },
    colors: {
      primary: "#ad8965",
      secondary: "#d6cbb7",
      light: "#d6cbb7",
      dark: "#945532",
      white: "#F7F8F5",
      black: "#000000",
      bgsecondary: "#E8E2D4",
      border: "#D3D0C7",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        ptserif: ["PT Serif", "serif"],
        quitcher: ["Qwitcher Grypen", "cursive"],
      },
      spacing: {
        "75vh": "75vh",
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require("tailwindcss-fluid-type")],
};
