/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'text-color-b': 'var(--text-color-b)',
        'text-color-w': 'var(--text-color-w)',
        'background-color': 'var(--background-color)',
        'bg-color': 'var(--bg-color)'
      }
    },
  },
  plugins: [],
}
