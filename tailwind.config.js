/** @type {import('tailwindcss').Config} */
module.exports = {
  // ADD THIS SECTION:
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'portfolio-bg': '#171123',
        'portfolio-accent': '#ff3b3f',
        'portfolio-main': '#F5B700',
        'portfolio-dain': '#689D00',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
