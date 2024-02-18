/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.purple, // accent color
        secondary: colors.zinc, // choose a dark color.
        tertiary: colors.rose, // highlight effects color
      },
    },
    plugins: [],
  }
}

