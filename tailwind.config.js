module.exports = {
  content: [
    "./*.html",
    "./*/*.html",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary:"#3ce1c6",
        secondary:"#D6B1FF",
        addition: "8C30F5",
        background: "F4F5F7"
      },
      fontSize: {
        h1:["72px","48px"],
        h2:["48px","64px"],
        h3:["40px","54px"],
        h6:["20px","24px"],
        lead1:["18px","32px"]
      },
      spacing: {
        18: ["72px"],
        22: ["88px"],
        30: ["120px"]
      },
      fontFamily:{
        roboto:"Roboto"
      },
      screens:{
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}