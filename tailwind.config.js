/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      color: {
        brown: "var(--color-brown)",
      },
    },
  },
  plugin: [require("tailwind-scrollbar")],
};
