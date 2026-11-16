/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Fraunces'", 'Georgia', 'serif'],
        body: ["'Hanken Grotesk'", 'system-ui', 'sans-serif'],
      },
      colors: {
        // Verde identitario de Ecopuerta Factory
        eco: {
          DEFAULT: '#3FA45B',
          light: '#6BCB85',
          deep: '#1F6B37',
        },
      },
    },
  },
  plugins: [],
}
