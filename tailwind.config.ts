import type { Config } from 'tailwindcss'

const config: Config = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: 'auto 1fr auto'
      },
      transitionProperty: {
        'max-height': 'max-height'
      }
    },
  },
  plugins: [
    require('tailwindcss'),
  ],
}
export default config
