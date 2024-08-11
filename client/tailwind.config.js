/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,}"
  ],
  theme: {
    extend: {
      colors:{
        "gray":"var(--gray)",
        "lightgray":" var(--light-gray)",
        "primarygreen":"var(--primary-green)",
        "secondarygreen":"var(--secondary-green)",
        "blue":"var(--blue)",
      },
        backgroundImage:{
            'BackgroundImg': "url(/public/backgroung.png)"
        }
    },
  },
  plugins: [],
}
