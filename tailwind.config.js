/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          maroon: {
            50: '#FDF2F2',
            100: '#FDE8E8',
            200: '#FBD5D5',
            300: '#F8B4B4',
            400: '#F98080',
            500: '#E02424',
            600: '#C81E1E',
            700: '#9B1C1C',
            800: '#800000',
            900: '#701A1A',
          },
          dark: '#0F172A',
          card: '#FFFFFF',
          surface: '#F8FAFC',
          muted: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'system-ui', 'sans-serif'],
        technical: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
