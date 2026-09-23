/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#E9E7DC',
        'paper-raised': '#F1EFE5',
        ink: '#14171F',
        'ink-soft': '#4A4E5A',
        'ink-faint': '#8A8D93',
        pine: '#2F5D50',
        'pine-deep': '#20423A',
        ochre: '#B8862B',
        rule: 'rgba(20, 23, 31, 0.14)',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
}
