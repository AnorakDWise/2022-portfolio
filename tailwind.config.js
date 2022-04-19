const stoneBlack = "#1c1917";
const stoneWhite = "#f5f5f4";
const black = "#000000";

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        defaultWallpaper: "url('../assets/images/background.svg')",
      },

      fontFamily: {
        nunito: "'Nunito', sans-serif",
      },

      dropShadow: {
        whiteNeon: "0px 7.5px 10px " + stoneWhite,
        defaultShadow: "0px 7.5px 15px " + black,
        defaultFarShadow: "0px 7.5px 30px " + black,
      },
    },
  },
  plugins: [],
};
