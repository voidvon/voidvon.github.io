import fs from 'fs'
import path from 'path'
import { defineLoader, type SiteConfig } from 'vitepress'

export interface SidebarItem {
  text: string
  link?: string
  items?: SidebarItem[]
  collapsed?: boolean
}

export interface Sidebar {
  [key: string]: SidebarItem[]
}

const data: Sidebar = {}
export { data }

export default defineLoader({
  watch: ['**/*.md'],
  load(watchedFiles) {
    const config: SiteConfig = (globalThis as any).VITEPRESS_CONFIG
    const docsRoot = config.srcDir
    const sidebar = generateSidebar(docsRoot)
    return sidebar
  },
})

function generateSidebar(directory: string): Sidebar {
  const sidebar: Sidebar = {}
  const dirents = fs.readdirSync(directory, { withFileTypes: true })

  for (const dirent of dirents) {
    if (dirent.isDirectory()) {
      if (dirent.name === '.vitepress' || dirent.name === 'node_modules') {
        continue
      }
      const dirPath = path.join(directory, dirent.name)
      const sidebarKey = `/${dirent.name}/`
      sidebar[sidebarKey] = [{
        text: dirent.name,
        items: generateSidebarItems(dirPath, directory),
        collapsed: false
      }]
    }
  }
  return sidebar
}

function generateSidebarItems(directory: string, docsRoot: string): SidebarItem[] {
  const items: SidebarItem[] = []
  const dirents = fs.readdirSync(directory, { withFileTypes: true })

  dirents.sort((a, b) => {
    if (a.isDirectory() && !b.isDirectory()) return -1
    if (!a.isDirectory() && b.isDirectory()) return 1
    return a.name.localeCompare(b.name)
  })

  for (const dirent of dirents) {
    const fullPath = path.join(directory, dirent.name)
    if (dirent.isDirectory()) {
      items.push({
        text: dirent.name,
        items: generateSidebarItems(fullPath, docsRoot),
        collapsed: true,
      })
    } else if (dirent.isFile() && dirent.name.endsWith('.md')) {
      const text = path.basename(dirent.name, '.md')
      if (text.toLowerCase() === 'index') continue;

      const link = '/' + path.relative(docsRoot, fullPath).replace(/\\/g, '/').replace(/\.md$/, '')

      items.push({
        text,
        link,
      })
    }
  }
  return items
}
