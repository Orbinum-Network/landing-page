/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D74444',
        'primary-hover': '#b63535',
        'primary-focus': '#e05c5c',
      }
    },
  },
  plugins: [],
}

