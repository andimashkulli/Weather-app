/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./src/*.js",],
  theme: {
    extend: {
      colors: {
        backgroundBlue : "#AAC6E5",
        headerColor : "#DEEBF4",
        textColor2: "#81BDF5",
        textColor3 : "#B3D0E3",
        shadowColor: "#09244F",
        glass: "rgba( 255, 255, 255, 0.15 )",
      },
      height: {
        100:"37rem",
        97:"35rem",
      },
      borderRadius: {
        4: "40px",
      },
      backgroundImage:{
        'cold': "url('/src/assets/cold.jpg')",
        'warm': "url('/src/assets/warm.jpg')",
        
      },
   fontSize :{
'xss':"0.870rem",
     },
     borderWidth:{
"sm":"0.2px",
     },
    },
  
  },
  plugins: [],
}
