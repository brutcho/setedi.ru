module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { 
    extend: {
      colors: {
        spa: {
          // Тёмные фоны
          light: '#0A0A0A',
          cream: '#1A1A1A',
          pastel: '#151515',
          // Фиолетовые акценты
          copper: '#9333EA', // Основной фиолетовый
          emerald: '#A855F7', // Светлый фиолетовый
          // Светлые цвета для текста
          dark: '#F5F5F5',
          // Белый для контраста
          white: '#000000',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
