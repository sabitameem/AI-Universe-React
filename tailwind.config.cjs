/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#5226e2",
        
"secondary": "#769ddb",
        
"accent": "#e5d650",
        
"neutral": "#191C1F",
        
"base-100": "#F1EBF4",
        
"info": "#4291EB",
        
"success": "#1D7C74",
        
"warning": "#DE910D",
        
"error": "#EF4E83",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
