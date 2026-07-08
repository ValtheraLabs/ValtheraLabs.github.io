import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#0C0C0C',
        deep: '#0C0C0C',
        surface: '#1A1A1A',
        panel: '#141414',
        border: '#2A2A2A',
        silver: '#A0A0A0',
        white: '#FFFFFF',
        accent: '#7C3AED',
        'accent-soft': 'rgba(124, 58, 237, 0.12)',
        'accent-glow': 'rgba(124, 58, 237, 0.3)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
