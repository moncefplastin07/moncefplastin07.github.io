module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {  
     extend: {
      screens: {
        'xs': {'max': '639px'},
      },
      rotate: {
        '360': '360deg',
      },  
      keyframes: {
        roll: {
          '0%': { transform: 'translateX(0) rotate(0deg)' },
          '25%': { transform: 'translateX(0.1rem) rotate(80deg)' },
          '50%': { transform: 'translateX(-0.1rem) rotate(-20deg)' },
          '75%': { transform: 'translateX(0.1rem) rotate(80deg)' },
          '100%': { transform: 'translateX(0) rotate(0deg)' },
        }
      },
      animation: {
        roll: 'roll 0.9s '
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}