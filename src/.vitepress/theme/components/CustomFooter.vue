
<template>
  <footer class="custom-footer">
    <div class="footer-container">
      <!-- 主要内容区域 -->
      <div class="footer-content">
        <!-- 网站信息 -->
        <div class="footer-section">
          <h3 class="footer-title">void feng Blog</h3>
          <p class="footer-description">
            分享前端技术、开发心得和生活感悟的个人博客
          </p>
          <!-- 社交链接 -->
          <div class="social-links">
            <a href="https://github.com/voidfeng" target="_blank" rel="noopener noreferrer" class="social-link">
              <svg class="icon" viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- 快速链接 -->
        <div class="footer-section">
          <h4 class="section-title">快速链接</h4>
          <ul class="link-list">
            <li><a href="/docs/">首页</a></li>
            <li><a href="/docs/JavaScript/">JavaScript</a></li>
            <li><a href="/docs/Vue/">Vue</a></li>
            <li><a href="/docs/开发技能/">开发技能</a></li>
          </ul>
        </div>

        <!-- 技术栈 -->
        <div class="footer-section">
          <h4 class="section-title">技术栈</h4>
          <ul class="link-list">
            <li><a href="https://vitepress.dev/" target="_blank" rel="noopener noreferrer">VitePress</a></li>
            <li><a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js</a></li>
            <li><a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a></li>
            <li><a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a></li>
          </ul>
        </div>
      </div>

      <!-- 分隔线 -->
      <div class="footer-divider"></div>

      <!-- 底部版权信息 -->
      <div class="footer-bottom">
        <div class="copyright">
          <p>&copy; {{ currentYear }} void feng Blog. All rights reserved.</p>
        </div>
        <div class="powered-by">
          <span>
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">闽ICP备2022012905号-1</a>
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.custom-footer {
  background-color: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
  margin-top: 64px;
}

.footer-container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 48px 24px 24px;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 48px;
  margin-bottom: 32px;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  
  .footer-container {
    padding: 32px 20px 20px;
  }
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 12px 0;
}

.footer-description {
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.6;
  margin: 0 0 16px 0;
}

.section-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 16px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.link-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.link-list li {
  margin-bottom: 8px;
}

.link-list a {
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.25s ease;
}

.link-list a:hover {
  color: var(--vp-c-brand-1);
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: var(--vp-c-default-soft);
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: all 0.25s ease;
}

.social-link:hover {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  transform: translateY(-2px);
}

.icon {
  width: 20px;
  height: 20px;
}

.footer-divider {
  height: 1px;
  background-color: var(--vp-c-divider);
  margin: 32px 0 24px;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

@media (max-width: 640px) {
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}

.copyright p {
  margin: 0;
  font-size: 13px;
  color: var(--vp-c-text-3);
}

.powered-by {
  font-size: 13px;
  color: var(--vp-c-text-3);
}

.powered-by a:hover {
  text-decoration: underline;
}
</style>
