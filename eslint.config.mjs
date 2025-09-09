// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import unocss from '@unocss/eslint-config/flat'

export default withNuxt(
  unocss,
  {
    rules: {
      'eslint/no-undef': 'off',
    },
  },
)
