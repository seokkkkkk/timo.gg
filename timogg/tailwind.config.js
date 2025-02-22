/** @type {import('tailwindcss').Config} */
import pxtoRem from 'tailwindcss-preset-px-to-rem';
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [pxtoRem],
  theme: {
    extend: {},
  },
  plugins: [],
};
