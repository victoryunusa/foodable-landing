module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ["DM Serif Text", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        redhat: ["Red Hat Display", "sans-serif"],
      },
      colors: {
        nelsa_lime: "#DDF246",
        nelsa_lime_1: "#E6F859",
      },
      backgroundImage: {
        "app-bg": "url('./assets/images/app-bg.png')",
        "world-map": "url('./assets/images/world_map.svg')",
      },
    },
  },
  plugins: [],
};
