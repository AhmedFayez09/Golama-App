/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00A86B',
          50: '#E6F7EF',
          100: '#CCF0DF',
          400: '#22C387',
          500: '#00A86B',
          600: '#009160',
          700: '#00734D',
        },
        ink: {
          DEFAULT: '#0F172A',
          800: '#152036',
          700: '#1E293B',
        },
        surface: '#F5F7FA',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(15, 23, 42, 0.25)',
        card: '0 10px 30px -12px rgba(15, 23, 42, 0.12)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        ticker: 'ticker 22s linear infinite',
      },
    },
  },
  plugins: [],
}
