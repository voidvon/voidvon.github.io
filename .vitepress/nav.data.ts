import fs from 'fs'
import path from 'path'

export interface NavItem {
  text: string
  items?: NavItem[]
  link?: string
}

// 直接生成导航数据
console.log('🚀 开始生成导航数据...')
const docsRoot = 'docs'  // 相对于当前目录

const data: NavItem[] = generateNav(docsRoot)
export { data }

function generateNav(directory: string): NavItem[] {
  const nav: NavItem[] = [{ text: '首页', link: '/' }]
  
  // 确保目录存在
  if (!fs.existsSync(directory)) {
    console.log('❌ 目录不存在:', directory)
    return nav
  }
  
  const dirents = fs.readdirSync(directory, { withFileTypes: true })
  console.log('📂 正在处理目录:', directory)
  console.log('📋 目录内容:', dirents.map((d: any) => d.name))

  dirents.sort((a: any, b: any) => a.name.localeCompare(b.name));

  for (const dirent of dirents) {
    if (dirent.isDirectory()) {
      // 跳过隐藏文件夹和特殊文件夹
      if (dirent.name.startsWith('.') || dirent.name === 'node_modules') {
        continue
      }

      const dirPath = path.join(directory, dirent.name)
      console.log('🔍 处理文件夹:', dirent.name, '路径:', dirPath)
      const subItems = generateNavItemsForDir(dirPath, directory)
      console.log('📄 找到的子项:', subItems.length, '个')

      if (subItems.length > 0) {
        nav.push({
          text: dirent.name,
          items: subItems,
        })
      }
    }
  }
  
  console.log('✅ 最终生成的导航项数量:', nav.length)
  return nav
}

function generateNavItemsForDir(directory: string, docsRoot: string): NavItem[] {
  const items: NavItem[] = []
  
  // 确保目录存在
  if (!fs.existsSync(directory)) {
    console.log('❌ 子目录不存在:', directory)
    return items
  }
  
  const dirents = fs.readdirSync(directory, { withFileTypes: true })
  console.log(`📁 处理子目录 ${path.basename(directory)} 中的文件:`, dirents.filter((d: any) => d.isFile() && d.name.endsWith('.md')).map((d: any) => d.name))

  dirents.sort((a: any, b: any) => a.name.localeCompare(b.name));

  for (const dirent of dirents) {
    if (dirent.isFile() && dirent.name.endsWith('.md')) {
      const text = path.basename(dirent.name, '.md')
      const fullPath = path.join(directory, dirent.name)
      const link = '/' + path.relative(docsRoot, fullPath).replace(/\\/g, '/').replace(/\.md$/, '')

      console.log(`📝 添加文件: ${text} -> ${link}`)

      items.push({
        text,
        link,
      })
    }
  }

  console.log(`✅ ${path.basename(directory)} 文件夹共找到 ${items.length} 个markdown文件`)
  return items
}
