
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        themeColor: '#244cff',
        background: '#a8befe',
        error: '#ff2f05'
      },
      boxShadow: {
        card: '0px 0px 15px #8383961f',
      },
    },
  },
  plugins: [],
}