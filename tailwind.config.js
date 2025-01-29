/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#4eacb8', // Primary color
          700: '#07607b', // Darker shade of primary
        },
        secondary: {
          500: '#6cd1af', // Secondary color
          300: '#b8e7ca', // Lighter shade of secondary
        },
        accent: {
          100: '#f6f1d2', // Accent color
        },
      }
    },
  },
  plugins: [],
}