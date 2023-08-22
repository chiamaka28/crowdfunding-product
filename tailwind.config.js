/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'mobileHeader': "url('/src/assets/image-hero-mobile.jpg')",
        'desktopHeader': "url('/src/assets/image-hero-desktop.jpg')",

      },
      colors: {
        cyan : 'hsl(176, 50%, 47%)',
        darkCyan: 'hsl(176, 72%, 28%)',
        darkGray: 'hsl(0, 0%, 48%)',
        overlay: "rgba(0,0,0,0.2)",
      }
    },
  },
  plugins: [],
}

