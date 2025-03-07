// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: [
//       "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de que apunta a tu carpeta de componentes
//     ],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // Define el nuevo breakpoint más pequeño que sm
      },
    },
  },
  plugins: [],
}
