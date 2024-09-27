import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginLess } from '@rsbuild/plugin-less'

export default defineConfig({
  html: {
    favicon: './src/assets/Vae.jpg',
    title: '☁️时光刻录机☁️'
  },
  output: {
    assetPrefix: '/time/'
  },
  plugins: [pluginReact(), pluginLess()]
})
