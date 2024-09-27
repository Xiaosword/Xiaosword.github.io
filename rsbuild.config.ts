import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import { pluginLess } from '@rsbuild/plugin-less'

export default defineConfig({
  html: {
    favicon: 'http://tuchuang.zaibk.com/2024/09/27/87ecbc041a1de.jpg',
    title: '☁️时光刻录机☁️'
  },
  plugins: [pluginReact(), pluginLess()]
})
