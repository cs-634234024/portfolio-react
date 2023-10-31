/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors : {
        primary : '#82CD47' ,
        primaryBackground : '#112031' ,
        primaryTitle : '#D4ECDD',
        primaryBase : '#345B63',
        primaryContent : '#152D35'
      }
    },
  },
  plugins: [],
}