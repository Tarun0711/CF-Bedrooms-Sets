/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          'slide-down': {
            '0%': { transform: 'translateY(-10%)', opacity: 0 },
            '100%': { transform: 'translateY(0)', opacity: 1 },
          },
          'fade-in': {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
          'bounce-slow': {
            '0%, 100%': { transform: 'translateY(-5%)' },
            '50%': { transform: 'translateY(0)' },
          },
          'pulse': {
            '0%, 100%': { opacity: 1 },
            '50%': { opacity: 0.5 },
          },
          'grid-pulse': {
            '0%': { opacity: 0.15 },
            '50%': { opacity: 0.25 },
            '100%': { opacity: 0.15 }
          },
          'spin-slow': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' }
          },
          slideIn: {
              '0%': { transform: 'translateX(100%)' },
              '100%': { transform: 'translateX(0)' },
          },
          'wave-ping': {
            '0%': { transform: 'scale(1)', opacity: '0.6' },
            '100%': { transform: 'scale(2)', opacity: '0' },
          },
        },
        animation: {
          'slide-down': 'slide-down 0.3s ease-out',
          'fade-in': 'fade-in 0.5s ease-out',
          'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
          'bounce': 'bounce 3s infinite',
          'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'grid-pulse': 'grid-pulse 6s ease-in-out infinite',
          'spin-slow': 'spin-slow 25s linear infinite',
          slideIn: 'slideIn 0.5s ease-out forwards',
          'wave-1': 'wave-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
          'wave-2': 'wave-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite 0.6s',
          'wave-3': 'wave-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite 1.2s',
        },
        colors: {
          primary: '#1791c8',
          secondary: '#1477a0',
        },
        boxShadow: {
          'neumorphic': '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff',
          'neumorphic-hover': '12px 12px 24px #c2cad6, -12px -12px 24px #ffffff'
        }
      },
    },
    plugins: [],
  } 