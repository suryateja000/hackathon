/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bright: {
          blue: '#0096FF',   // Bright Blue
          sky:  '#87CEEB',   // Sky Blue
          electric: '#7DF9FF',
          cobalt: '#0047AB',
        },
        surface: {
          base: '#F4FAFF',   // light background
          card: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Sora', 'Inter', 'ui-sans-serif'],
      },
    },
  },
  plugins: [],
};
