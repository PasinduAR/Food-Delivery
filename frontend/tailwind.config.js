/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 3s ease-in-out',
      },
      fontSize: {
        'responsive01': 'max(4.5vw, 22px)',
        'responsive02': 'max(1vw, 13px)',
        'responsive03': 'max(1.4vw, 16px)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',  /* IE and Edge */
          'scrollbar-width': 'none',  /* Firefox */
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',  /* WebKit browsers */
        },
      });
    },
  ],
}

