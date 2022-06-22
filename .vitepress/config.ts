import { defineConfigWithTheme } from 'vitepress'
import baseConfig from '@vue/theme/config'
import { nav } from './nav'
import { sidebar } from './siderbar'



export default defineConfigWithTheme({
  extends: baseConfig,
  base: '/blog',
  lang: 'zh-CN',
  title: '晓枫博客',
  description: '日常学习记录',
  srcDir: 'src',

  themeConfig: {
    nav,
    sidebar
  },
  vue: {
    reactivityTransform: true
  }
})