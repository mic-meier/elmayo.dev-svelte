module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            code: {
              color: theme('colors.purple.700')
            }
          }
        }
      })
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
