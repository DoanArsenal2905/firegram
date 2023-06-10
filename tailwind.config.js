/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        input: '#f3f3f4',
        divider: '#e0e0e0',
        dark: '#0d0c22',
        pink: '#ff6584',
      },
      colors: {
        primary: '#0d0c22',
        pink: '#ff6584',
        divider: '#6e6d7a',
      },
      borderColor: {
        pink: '#ff6584',
      },
    },
  },
  plugins: [],
};
