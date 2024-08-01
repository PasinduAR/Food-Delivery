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
        fadeIn1: 'fadeIn 3s ease-in-out',
        fadeIn2: 'fadeIn 1s',
        fadeIn3: 'fadeIn 0.5s',
      },
      fontSize: {
        'responsive01': 'max(4.5vw,22px)',
        'responsive02': 'max(1vw,13px)',
        'responsive03': 'max(1.4vw,16px)',
        'responsive04': 'max(2vw,24px)',
        'responsive05': 'max(1vw,12px)',
      },
      gridTemplateColumns: {
        'auto-fill-minmax': 'repeat(auto-fill, minmax(240px, 1fr))',
        'custom': '2fr 1fr 1fr',
        'custom-layout': '1fr 1.5fr 1fr 1fr 1fr 0.5fr',
      },
      boxShadow: {
        'custom': '0px 0px 10px #00000015',
      },
      borderRadius: {
        'custom-tl-br': '15px 15px 0px 0px',
      },
      width: {
        'custom-max': 'max(23vw,330px)',
        'custom-width1': 'max(15vw,200px)',
        'custom-width2': 'max(10vw,150px)',
      },
      maxWidth: {
        'custom-max1': 'max(30%,500px)',
        'custom-max2': 'max(40%,500px)',
      },
      spacing: {
        'custom-gap1': 'max(12vw,20px)',
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

