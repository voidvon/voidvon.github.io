
<template>
  <footer class="bg-[var(--vp-c-bg-soft)] border-t-1 border-[var(--vp-c-divider)] mt-16">
    <div class="max-w-[1152px] mx-auto px-6 md:px-12 lg:px-6 py-12 md:py-12 lg:py-12">
      <!-- 主要内容区域 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-6 md:gap-8 lg:gap-12 mb-8">
        <!-- 网站信息 -->
        <div class="flex flex-col text-center md:text-left">
          <h3 class="text-lg md:text-xl font-semibold mb-3 color-[var(--vp-c-text-1)]">void feng</h3>
          <p class="text-sm md:text-base color-[var(--vp-c-text-2)] leading-relaxed mb-4">
            分享前端技术、开发心得和生活感悟的个人博客
          </p>
          <!-- 社交链接 -->
          <div class="flex justify-center md:justify-start gap-4">
            <a 
              href="https://github.com/voidfeng" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center justify-center w-11 h-11 md:w-10 md:h-10 rounded-lg bg-[var(--vp-c-default-soft)] color-[var(--vp-c-text-2)] no-underline transition-all duration-250 hover:bg-[var(--vp-c-brand-soft)] hover:color-[var(--vp-c-brand-1)] hover:transform hover:translate-y-[-2px]"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- 快速链接 -->
        <div class="flex flex-col text-center md:text-left">
          <h4 class="text-sm md:text-sm font-semibold color-[var(--vp-c-text-1)] mb-4 uppercase tracking-wider">快速链接</h4>
          <ul class="list-none p-0 m-0 space-y-2">
            <li><a href="/docs/" class="text-sm md:text-sm color-[var(--vp-c-text-2)] no-underline transition-colors duration-250 hover:color-[var(--vp-c-brand-1)] block py-1">首页</a></li>
            <li><a href="/docs/JavaScript/" class="text-sm md:text-sm color-[var(--vp-c-text-2)] no-underline transition-colors duration-250 hover:color-[var(--vp-c-brand-1)] block py-1">JavaScript</a></li>
            <li><a href="/docs/Vue/" class="text-sm md:text-sm color-[var(--vp-c-text-2)] no-underline transition-colors duration-250 hover:color-[var(--vp-c-brand-1)] block py-1">Vue</a></li>
            <li><a href="/docs/开发技能/" class="text-sm md:text-sm color-[var(--vp-c-text-2)] no-underline transition-colors duration-250 hover:color-[var(--vp-c-brand-1)] block py-1">开发技能</a></li>
          </ul>
        </div>

        <!-- 技术栈 -->
        <div class="flex flex-col text-center md:text-left">
          <h4 class="text-sm md:text-sm font-semibold color-[var(--vp-c-text-1)] mb-4 uppercase tracking-wider">技术栈</h4>
          <ul class="list-none p-0 m-0 space-y-2">
            <li><a href="https://vitepress.dev/" target="_blank" rel="noopener noreferrer" class="text-sm md:text-sm color-[var(--vp-c-text-2)] no-underline transition-colors duration-250 hover:color-[var(--vp-c-brand-1)] block py-1">VitePress</a></li>
            <li><a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" class="text-sm md:text-sm color-[var(--vp-c-text-2)] no-underline transition-colors duration-250 hover:color-[var(--vp-c-brand-1)] block py-1">Vue.js</a></li>
            <li><a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer" class="text-sm md:text-sm color-[var(--vp-c-text-2)] no-underline transition-colors duration-250 hover:color-[var(--vp-c-brand-1)] block py-1">Vite</a></li>
            <li><a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" class="text-sm md:text-sm color-[var(--vp-c-text-2)] no-underline transition-colors duration-250 hover:color-[var(--vp-c-brand-1)] block py-1">TypeScript</a></li>
          </ul>
        </div>
      </div>

      <!-- 分隔线 -->
      <div class="h-px bg-[var(--vp-c-divider)] my-6"></div>

      <!-- 底部版权信息 -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <div>
          <p class="m-0 text-xs color-[var(--vp-c-text-3)]">&copy; {{ currentYear }} void feng. All rights reserved.</p>
        </div>
        <div class="text-xs color-[var(--vp-c-text-3)]">
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" class="hover:underline">闽ICP备2022012905号-1</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

