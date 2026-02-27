/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B4F8A',
        primaryDeep: '#0E5DA3',
        primaryMedium: '#1677C8',
        primaryBright: '#1E8EDC',
        primaryLight: '#4FB3E8',
        accent: '#79C2F2',
        yellow: '#F4C20D',
        yellowGold: '#E0B000',
        yellowDark: '#C99800',
        white: '#FFFFFF',
        offWhite: '#F5F7FA',
        textDark: '#1E1E1E',
        textGray: '#6B7280',
        bgLight: '#F5F7FA',
        bgGray: '#E8EEF5',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
