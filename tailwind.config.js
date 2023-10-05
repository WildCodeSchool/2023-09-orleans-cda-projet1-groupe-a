/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        lines: 'lines 4s infinite 0s',
      },
      keyframes: {
        lines: {
          '100%': {
            'stroke-dashoffset': 3000,
          },
        },
      },
    },
  },
  plugins: [],
};
