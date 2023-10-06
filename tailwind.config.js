/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        lines: 'lines 4s infinite 0s',
        back: 'back 100s linear infinite',
      },
      colors: {
        light: 'var(--light)',
        dark: 'var(--dark)',
      },
      keyframes: {
        lines: {
          '100%': {
            'stroke-dashoffset': 3000,
          },
        },
        back: {
          '0%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
          '100%': {
            'background-position': '0% 50%',
          },
        },
      },
    },
  },
  plugins: [],
};
