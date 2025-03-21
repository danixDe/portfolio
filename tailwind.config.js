/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber': {
          black: '#0A0A0A',
          dark: '#121212',
        },
        'neon': {
          primary: '#FFFFFF',
          secondary: '#8B5CF6',
          accent: '#6D28D9',
          highlight: '#4C1D95',
          dark: '#2E1065',
        },
        'glass': 'rgba(255, 255, 255, 0.03)',
      },
      fontFamily: {
        'cyber': ['Outfit', 'sans-serif'],
        'body': ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px #8B5CF6, 0 0 20px #6D28D9' },
          '100%': { textShadow: '0 0 20px #4C1D95, 0 0 30px #2E1065' },
        },
      },
    },
  },
  plugins: [],
}