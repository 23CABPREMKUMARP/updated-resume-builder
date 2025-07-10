import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        resume: {
          10: '#F3F8FF',
          50: '#E7EEFA',
          100: '#C7D6E4',
          200: '#A8B9CC',
          300: '#889DB3',
          400: '#7188A1',
          500: '#59748F',
          600: '#4C667E',
          700: '#3C5268',
          800: '#2E4052',
          900: '#1C2C3A',
        },
        custom: {
          grey: '#E2E7ED',
          grey100: '#E5E5E5',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        slab: ['Roboto Slab', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        md: '4px',
      },
      boxShadow: {
        'level-4px-0.25': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        'level-8dp':
          '0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)',
        'level-4dp':
          '0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)',
        'level-hard': 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
      },
      screens: {
        'max-md': { max: '767px' },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1C2C3A 0%, #4C667E 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },

      // 💡 Add custom keyframes + animation here
      keyframes: {
        neonPulse: {
          '0%, 100%': {
            boxShadow: '0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #0ff',
            backgroundColor: '#0ff',
          },
          '33%': {
            boxShadow: '0 0 10px #f0f, 0 0 20px #f0f, 0 0 40px #f0f',
            backgroundColor: '#f0f',
          },
          '66%': {
            boxShadow: '0 0 10px #0f0, 0 0 20px #0f0, 0 0 40px #0f0',
            backgroundColor: '#0f0',
          },
        },
      },
      animation: {
        neon: 'neonPulse 3s infinite ease-in-out',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
