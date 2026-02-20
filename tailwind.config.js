/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep background palette
        void: {
          950: '#010409',
          900: '#030712',
          800: '#060d1f',
          700: '#0a1628',
        },
        // Surface palette
        surface: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
        },
        // Electric blue accent palette
        electric: {
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
        // Cyan accent
        cyber: {
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
        },
        // Text palette
        text: {
          primary: '#f8fafc',
          secondary: '#cbd5e1',
          muted: '#64748b',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(14,165,233,0.03) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(14,165,233,0.03) 1px, transparent 1px)`,
        'radial-glow': 'radial-gradient(ellipse at center, rgba(14,165,233,0.12) 0%, transparent 70%)',
        'hero-glow': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(14,165,233,0.15) 0%, transparent 60%)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      },
      boxShadow: {
        'electric': '0 0 20px rgba(14,165,233,0.3), 0 0 60px rgba(14,165,233,0.1)',
        'electric-sm': '0 0 10px rgba(14,165,233,0.2)',
        'card': '0 4px 32px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.04) inset',
      },
    },
  },
  plugins: [],
}
