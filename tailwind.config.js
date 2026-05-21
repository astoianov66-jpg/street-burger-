
export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#4a9e57',
          dark: '#1a1a1a',
          card: '#242424',
          text: '#f0f0f0',
          muted: '#aaaaaa',
        },
      },
      fontFamily: {
        display: ['Bangers', 'cursive'],
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
}
