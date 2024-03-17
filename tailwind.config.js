/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'purple' : '#a45deb',
      'transparent': 'rgba(255, 255, 255, 0.2)',
      'white': '#ffffff',
      'blueGray': '#64748b',
      'textBlack': '#334155',
      'yellow': '#f5b014',
      'green': '#10b981',
      'primaryPurple': '#7b34dd',
      'blueGrayLight': '#e2e8f0',
      'darkBlueTransparent': 'rgba(28, 28, 45, 0.9)',
      'paleGray': '#f8fafc',
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};