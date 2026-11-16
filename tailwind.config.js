const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '475px',
        ...defaultTheme.screens,
      },
      colors: {
        // Engine-editor palette. robo = Robotics accent, sel = selection / Game & Software accent.
        editor: {
          bg: '#0f1113',
          view: '#0b0c0e',
          panel: '#17191c',
          panel2: '#1e2125',
          line: '#2c3036',
          ink: '#d5d9df',
          muted: '#8a919c',
          sel: '#3d8bfd',
          robo: '#f5a524',
          x: '#e5484d',
          y: '#46a758',
        },
        neutral: colors.slate,
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#b9e5fe',
          300: '#7cd1fd',
          400: '#36bbfa',
          500: '#0ca3eb',
          600: '#0082c9',
          700: '#0168a3',
          800: '#065786',
          900: '#06283d',
        },
      },
      fontFamily: {
        sans: ['Inter', '"IBM Plex Sans KR"', '"Apple SD Gothic Neo"', '"Malgun Gothic"', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
        lato: ['Lato', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'tranlate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
