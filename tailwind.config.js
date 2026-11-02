/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        appleDark: {
          bg: '#050814',
          subtle: '#090E20',
          card: '#0D152D',
          cardHover: '#121D3D',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(56, 189, 248, 0.35)',
        },
        navy: {
          50: '#F0F5FA',
          100: '#E1ECF4',
          200: '#C3D8E8',
          300: '#9BBED9',
          400: '#6A9EC7',
          500: '#3D7DB0',
          600: '#2A6192',
          700: '#1E4B74',
          800: '#153655',
          900: '#0B233A',
          950: '#071626',
        },
        skyAccent: {
          light: '#7DD3FC',
          DEFAULT: '#38BDF8',
          hover: '#0284C7',
          glow: 'rgba(56, 189, 248, 0.25)',
        }
      },
      fontFamily: {
        sans: ['Prompt', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      boxShadow: {
        'apple-glass': '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'apple-glow': '0 0 35px -5px rgba(56, 189, 248, 0.25)',
        'apple-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}
