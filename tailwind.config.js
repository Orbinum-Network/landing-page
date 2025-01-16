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
        secondary: {
          DEFAULT: '#333333',
          50: '#F5F5F5',
          100: '#E0E0E0',
          200: '#BDBDBD',
          300: '#9E9E9E',
          400: '#757575',
          500: '#616161',
          600: '#424242',
          700: '#333333',
          800: '#212121',
          900: '#111111',
        },
      }
    },
  },
  plugins: [],
}

