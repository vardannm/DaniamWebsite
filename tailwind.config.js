/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
        noto: ['Noto Sans Armenian', 'sans-serif'],
        reddit: ['Reddit Mono', 'monospace'],
      },
      colors: {
        customGray: "#1C1C1C", 
        cardGray:"#1A1A1A",
        cardBorder:"#262626",
        pageBackground:"#020f12",
        navBack:'#0E0F0F',
      },
      
    },
  },
  plugins: [],
};
