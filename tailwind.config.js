/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darck: "#1C202B",
        blue: "#0A327B",
        lightGray: "#5E6778",
        mdGray: "#939CAD",
        lightGreen: "#F7FAFD",
      },
    },
  },
  plugins: [],
};
