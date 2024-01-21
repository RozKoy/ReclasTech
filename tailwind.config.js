/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0A1652',
        'primary2': '#114EF5',
        'secondary': '#0062F7',
        'srBlack': '#292C33',
        'srWhite': '#F7F7F7',
        'navbar': 'rgba(6, 0, 86, 0.70)',
      },
    },
  },
  plugins: [
    // ...
    require('flowbite/plugin'),
  ],
}

