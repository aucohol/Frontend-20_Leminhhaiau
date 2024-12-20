module.exports = {
  content: [
    "./*.html"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary:"#3ce1c6",
        secondary:"#567AD7"
      },
      fontSize: {
        h1:["72px","48px"],
        h2:["48px","64px"],
        lead1:["18px","32px"]
      },
      spacing: {
        22: ["88px"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}