/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#2C3E5D',
          dark: '#1e2d45',
          light: '#3a5070',
          50: '#eef2f7',
        },
        gold: {
          DEFAULT: '#C9A962',
          light: '#dfc07e',
          pale: '#f5edda',
          faint: 'rgba(201,169,98,0.12)',
        },
        ivory: '#F9F7F3',
        linen: '#F0EDE6',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.22em',
        widest3: '0.3em',
      },
    },
  },
  plugins: [],
}
