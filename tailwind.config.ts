import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-jost)', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#09080a',
        deep: '#0f0e10',
        charcoal: '#1a191b',
        graphite: '#272528',
        muted: '#48454c',
        stone: '#79757f',
        taupe: '#b0a8b8',
        ivory: '#e4dced',
        warm: '#f0ebf5',
        gold: '#9a8060',
        glt: '#c4a97a',
        gdim: '#6b5940',
      },
    },
  },
  plugins: [],
}
export default config
