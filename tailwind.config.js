const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      variants: {
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
