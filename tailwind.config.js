/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: ["class", '[data-mode="dark"]'],
  content: [],
  theme: {
    extend: {
      colors: {
        brown: "var(--color-brown)",
      },
      // backgroundColor: {
      //   dark: "#000",
      // },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
