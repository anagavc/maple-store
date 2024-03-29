module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      gold: "#D2CAA2",
      pry: {
        50: "#F2FFFD",
        100: "#1E3330",
      },
      red: {
        100: "#EB5757",
        200: "#e91e63",
      },
      white: "#ffffff",
      current: "currentColor",
      grey: "#AAC0C5",
    },
    fontFamily: {
      heading: ["Playfair Display"],
      body: ["Lato"],
    },
    extend: {
      transitionProperty: {
        left: "left",
      },
    },
  },
  plugins: [],
};
