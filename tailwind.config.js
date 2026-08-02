/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
      colors: {
        background: '#0f172a',
        foreground: '#f1f5f9',
      },
    },
  },
  plugins: [],
}
