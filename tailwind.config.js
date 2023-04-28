module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ["DM Serif Text", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        redhat: ["Red Hat Display", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        pally: ["Pally", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        nelsa_lime: "#DDF246",
        nelsa_orange: "#8A2E95",
        nelsa_blue: "#ff312e",
      },
      backgroundImage: {
        "app-bg": "url('./assets/images/app-bg.png')",
        "world-map": "url('./assets/images/world_map.svg')",
      },
    },
  },
  plugins: [],
};
