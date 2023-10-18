/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        lines: 'lines 4s infinite 0s',
        back: 'back 100s linear infinite',
        scrollTop: 'scrollTop 150s linear infinite',
        scrollBottom: 'scrollBottom 150s linear infinite',
      },
      colors: {
        light: 'var(--light)',
        dark: 'var(--dark)',
      },
      boxShadow: {
        md: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        julius: ['Julius Sans One', 'sans'],
        aurore: ['La Belle Aurore', 'cursive'],
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
        scrollTop: {
          '0%': {
            transform: 'translateY(0%)',
          },
          '100%': {
            transform: 'translateY(-80%)',
          },
        },
        scrollBottom: {
          '0%': {
            transform: 'translateY(-80%)',
          },
          '100%': {
            transform: 'translateY(0%)',
          },
        },
      },
    },
  },
  plugins: [],
};
