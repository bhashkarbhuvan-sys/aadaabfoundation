/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        aadaabOrange: "#E87722",
        aadaabGreen: "#2E7D32",
        aadaabLightGreen: "#4CAF50",
        aadaabCream: "#FFF8F0",
        aadaabDark: "#333333",
      },
      fontFamily: {
        heading: ["Georgia", "serif"],
        body: ["system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
