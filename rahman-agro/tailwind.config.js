/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        primary: {
          50: '#f0f9f0',
          100: '#dcf0dc',
          200: '#bae0ba',
          300: '#8ec98e',
          400: '#5eab5e',
          500: '#3d8c3d',
          600: '#1A5D1A', // Primary brand color
          700: '#19511a',
          800: '#174017',
          900: '#153615',
          950: '#071d07',
        },
        secondary: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e4e4e4',
          300: '#d1d1d1',
          400: '#b4b4b4',
          500: '#9a9a9a',
          600: '#818181',
          700: '#6a6a6a',
          800: '#5a5a5a',
          900: '#4e4e4e',
          950: '#282828',
        },
        accent: {
          50: '#fff9eb',
          100: '#ffefc6',
          200: '#ffdc86',
          300: '#ffc246',
          400: '#ffa61c', // Accent color
          500: '#f98a00',
          600: '#dd6800',
          700: '#b74a02',
          800: '#943a08',
          900: '#7a320c',
          950: '#461802',
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-in-out',
        'slide-up': 'slide-up 0.8s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};