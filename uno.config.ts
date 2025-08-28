import { defineConfig, presetMini, transformerDirectives } from 'unocss'

export default defineConfig({
    presets: [presetMini({
        dark: 'media'
    })],
    transformers: [transformerDirectives({
        applyVariable: '--apply'
    })]
})