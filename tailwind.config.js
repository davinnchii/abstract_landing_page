/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'page-bg': "url(/src/assets/page-bg.jpg)",
        'arrow-right': "url(/src/assets/icon-arrow-right.svg)",
        'arrow-right-white': "url(/src/assets/icon-arrow-right-white.svg)",
        'arrow-down': "url(/src/assets/icon-arrow-down.svg)"
      },
      fontFamily: {
        encode: ['Encode Sans', 'sans-serif']
      },
      colors: {
        'primaryPurple': '#3D2E87',
      },
      boxShadow: {
        'cardShadow': '0px 4px 90px 0px #00000026',
        'downloadButtonShadow': '0px 30px 10px 0px #00000026'
      }
    },
  },
  plugins: [],
}

