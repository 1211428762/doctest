import { defineUserConfig } from 'vuepress'
import { photoSwipePlugin } from 'vuepress-plugin-photo-swipe'
// import { searchPlugin } from '@vuepress/plugin-search'
import fullTextSearchPlugin from 'vuepress-plugin-full-text-search2'
import path from 'path'
import theme from './theme'
export default defineUserConfig({
  base: '/',
  dest: './dist', // 设置输出目录,
  locales: {
    // TODO 多语言 待开发，目前只有中文
    '/': {
      lang: 'zh-CN',
      title: 'Aceup-Doc',
      description: 'A Doc for Aceup',
    },
    // '/zh/': {
    //   lang: 'zh-CN',
    //   title: 'Aceup-Doc',
    //    description: 'A Doc for Aceup',
    // },
  },

  theme,
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
  shouldPrefetch: false,
  plugins: [fullTextSearchPlugin(), photoSwipePlugin({ selector: '.theme-hope-content img' })],
})
