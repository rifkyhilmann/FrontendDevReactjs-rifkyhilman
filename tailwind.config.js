/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
  			poppins: ['Poppins', 'sans-serif'],
  			playwrite: ['Playwrite SK', 'sans-serif'],
  			pridi: ['Pridi', 'sans-serif'],
  		},
    },
  },
  plugins: [],
}