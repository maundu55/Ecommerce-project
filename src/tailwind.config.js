/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust paths based on your project structure
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1D4ED8", 
          secondary: "#9333EA",
        },
        container:{
            center: true,
            padding:{
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '3rem',
                xl: '4rem',
                '2xl': '5rem',
            }
        }
    },
},
    plugins: [],
  };