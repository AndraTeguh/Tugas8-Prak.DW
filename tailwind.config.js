/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class", // Menambahkan opsi dark mode
  theme: {
    extend: {
      colors: {
        primary: "#1D4E8",
        secondary: "#E11D48",
        darkPrimary: "#3B82F6",
        darkSecondary: "#EF4444",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
