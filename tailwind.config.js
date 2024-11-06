/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'input-gray': `#32323c`,
        'overlay-background': `#313131`,
        'hover-notactive-blue': `#172554`,
      },
    },
  },
  plugins: [],
};
