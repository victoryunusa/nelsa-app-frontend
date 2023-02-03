module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        open: ["Work Sans", "sans-serif"],
        prompt: ["Prompt", "sans-serif"],
        redhat: ["Red Hat Display", "sans-serif"],
      },
      colors: {
        nelsa_lime: "#DDF246",
        nelsa_lime_1: "#E6F859",
      },
      backgroundImage: {
        "dash-card": "url('./assets/images/topography.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};
