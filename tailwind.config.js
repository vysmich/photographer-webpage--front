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
      xxl: "1400px",
      xxxl: "1920px",
    },
    colors: {
      primary: "#ad8965",
      secondary: "#d6cbb7",
      light: "#d6cbb7",
      dark: "#945532",
      white: "#F7F8F5",
      black: "#000000",
    },
    container: {
      center: true,

      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        xxl: "1320px",
        xxxl: "1730px",
      },
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
};
