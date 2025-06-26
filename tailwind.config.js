// /** @type {import('tailwindcss').Config} */
// export default {
// content: [
//     './index.html',
//     './src/**/*.{js,jsx,ts,tsx}', // Make sure this matches your file types
//   ],
//   theme: {
//     extend: {
//       animation: {
//         spinSlow: 'spin 1.5s linear infinite',
//     },},
//   },
//   plugins: [],
// };

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Make sure this matches your file types
  ],
  theme: {
    extend: {
        animation: {
        spinSlow: 'spin 1.5s linear infinite',},
    },
  },
  plugins: [],
}