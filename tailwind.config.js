module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Syne: ["Syne"],
      },

      keyframes: {
        bgAnimation: {
          "0%": {
            transform: "translate(0,0)"
          },
          "10%": {
            transform: "translate(-5%,-5%)"
          },
          "20%": {
            transform: "translate(-10%,5%)"
          },
          "30%": {
            transform: "translate(5%,-10%)"
          },
          "40%": {
            transform: "translate(-5%,15%)"
          },
          "50%": {
            transform: "translate(-10%,5%)"
          },
          "60%": {
            transform: "translate(15%,0)"
          },
          "70%": {
            transform: "translate(0,10%)"
          },
          "80%": {
            transform: "translate(-15%,0)"
          },
          "90%": {
            transform: "translate(10%,5%)"
          },
          "100%": {
            transform: "translate(5%,0)"
          },
        }
      },
      animation: {
        bgAnimation: "bgAnimation .2s infinite",
      },

      keyframes: {
        float: {
          '0%': {
            transform: 'translatey(0px)'
          },
          '50%': {
            transform: 'translatey(-30px)'

          },
          '100%': {
            transform: 'translatey(0px)'
          },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
  mode: "jit",
}
