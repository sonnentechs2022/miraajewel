/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "1/1": "100%",
      },
      important: true,
      fontFamily:{
        'Alegreya':'Alegreya',
        'avenir-next':['Avenir-Next'],
        'Roboto':'Roboto',
        'Montserrat':'Montserrat'
       
      },
      colors:{
        'RedPrime':'rgb(253, 90, 46)',
        'GoldSec':'#ffdde4',
        'GoldTer':'#FAECD6',
        'FooterBg':'#EAE0DA',
      'Testimonial':'#f6f7f9;',
      'RedPro':'#850000',
      'GrayPrime':'#444444'
      }
      
    },
   
  },
  variants: {},
  plugins: [require("tailwind-scrollbar-hide")],
};
