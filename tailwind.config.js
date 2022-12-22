/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./app/**/*.{ts,tsx,jsx,js}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
    },
  },
  plugins: [],
}
