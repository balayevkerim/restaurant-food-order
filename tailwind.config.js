/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFBE35",
        secondary: "#1B2021",
        danger: "#ff0000",
        success: "#00ff00",

      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
