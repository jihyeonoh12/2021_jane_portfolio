
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        themeColor: '#244cff',
        yellow: '#fff175',
        green: '#00eb79',
        blue: '#2e8cff',
        background: '#C6D8FB',
        error: '#ff2f05'
      },
      boxShadow: {
        card: '0px 0px 15px #8383961f',
        navbar: '0px 0px 15px #8383961f'
      },
      animation: {
        fade: 'fadeOut 1s ease-in-out',
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: '0', marginBottom: '50px' },
          '100%': { opacity: '1', marginBottom: '10px' },
        }
      }
    },
  },
  plugins: [],
}