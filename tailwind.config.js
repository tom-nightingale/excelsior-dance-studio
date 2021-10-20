module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      'sans': ['Nunito Sans', 'Arial', 'sans-serif'],
      'mono': ['Lucida Console', 'Courier', 'monospace'],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      screens: {
        'landscape': {'raw': '(orientation: landscape)'},
      },
      colors: {
        'black': '#000',
        'white': '#FFF',
        'primary': {
          light: '#FFC1F2',
          DEFAULT: '#230119',
          dark: '#010101',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}