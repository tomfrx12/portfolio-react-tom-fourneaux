/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
      extend: {
        colors: {
          black: "#000000",
          colortext: "#ffffff",
        },
      },
    },
  plugins: [require("tailwind-variants")],
}