import { defineConfig } from 'vitepress'
import { data as nav } from './nav.data'
import { data as sidebar } from './sidebar.data'
console.log(nav)
// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  outDir: "dist", // 将输出目录设置为项目根目录下的 dist 文件夹
  
  title: "全栈笔记",
  description: "前端开发人员迈向全栈的笔记。",
  
  vite: {
    publicDir: '../public' // 指定 public 目录路径
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    // 使用自定义页脚组件，因此禁用默认页脚
    // footer: {
    //   message: '基于 <a href="https://vitepress.dev/" target="_blank">VitePress</a> 构建',
    //   copyright: 'Copyright © 2024 void feng Blog'
    // }
  }
})
