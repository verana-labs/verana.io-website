/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./layouts/**/*.tmpl",
    "./content/**/*.{md,html}",
    "./assets/js/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter','ui-sans-serif','system-ui','-apple-system','Segoe UI','Roboto','Noto Sans','Ubuntu','Cantarell','Helvetica Neue','Arial','Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji']
      },
      colors: {
        primary: {
          50: '#eef2ff', 100: '#e0e7ff', 200: '#c7d2fe', 300: '#a5b4fc',
          400: '#818cf8', 500: '#6366f1', 600: '#4f46e5', 700: '#4338ca',
          800: '#3730a3', 900: '#312e81'
        },
        brand: {
          100: '#E3AEFF',
          200: '#C59CFF',
          300: '#A97EFE',
          400: '#8C5BFF',
          500: '#763EF0'
        },
        verana: '#763EF0',
        'verana-light': '#9F7AEA',
        'verana-dark': '#553C9A'
      },
      maxWidth: {
        '8xl': '96rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

