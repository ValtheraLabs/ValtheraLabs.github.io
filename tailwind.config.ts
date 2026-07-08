import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#1F1F1F',
        graphite: '#2a2a2a',
        silver: '#e6e6e6',
        white: '#ffffff',
        accent: '#5739fb',
        'accent-soft': 'rgba(87, 57, 251, 0.15)',
        'accent-glow': 'rgba(87, 57, 251, 0.35)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Barlow Condensed"', 'sans-serif'],
        mono: ['Inconsolata', 'monospace'],
      },
      fontSize: {
        'hero': 'clamp(4rem, 12vw, 12rem)',
        'section': 'clamp(2.5rem, 6vw, 6rem)',
      },
      letterSpacing: {
        'display': '-0.04em',
        'wide-display': '0.02em',
      },
    },
  },
  plugins: [],
}

export default config
