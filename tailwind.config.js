/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom": "0px 2px 2px 0px rgba(154, 154, 154, 0.25)",
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "red-bg": "var(--red-bg)",
        "light-red-bg": "var(--light-red-bg)",
        "red-text": "var(--red-text)",
        "gray-color": "var(--gray-color)",
        "white-color": "var(--white-color)",
        "border-color": "var(--border-color)",
        "primary-text-color": "var(--primary-text-color)",
        "gray-text-color": "var(--gray-text-color)",
      },
    },
  },
  plugins: [],
}

