/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./nested/search.html",
    "./nested/camp.html",
    "./src/js/*.js",    
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2.2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    }, 
    extend: {
      fontSize: {        
        sm2: '0.9rem',
        lg2: '1.06em'
      },   
    },
  },
  plugins: [],
}

