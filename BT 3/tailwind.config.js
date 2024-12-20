module.exports = {
  content: [
    "./*.html",
    
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontSize:{
        h2:["48px","64px"],
        lead1:["18px","32px"]
      },
      spacing:{
        93:["372"],
      }
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}