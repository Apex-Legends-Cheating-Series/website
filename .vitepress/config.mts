import { defineConfig } from 'vitepress'
import { withPwa, type PwaOptions } from "@vite-pwa/vitepress"

// https://vitepress.dev/reference/site-config
export default withPwa(defineConfig({
  pwa: {
    registerType: 'autoUpdate',
    outDir: '.vitepress/dist',
    strategies: 'generateSW',
    manifest: {
      id: '/',
      name: 'Apex Legends Cheating Series',
      short_name: 'ALCS',
      description: 'Apex Legends Cheating Series 2',
      icons: [
        {
          src: 'logo.png',
          sizes: 'any',
          type: 'image/png',
          purpose: 'any'
        }
      ]
    },
    workbox: {
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}']
    },
    experimental: {
      includeAllowlist: true
    }
  },
  title: "Apex Legends Cheating Series",
  description: "Apex Legends Cheating Series",
  appearance: 'force-dark',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '赛事介绍', link: '/docs/Introduction'}
    ],

    sidebar: [
      {
        text: '介绍',
        items: [
          { text: '赛事介绍', link: '/docs/Introduction' },
          { text: '分组介绍', link: '/docs/Group' }
        ]
      },
      {
        text: 'DMA',
        items: [
          { text: "分组介绍", link: '/docs/dma/Introduction'},
          { text: "分组规则", link: '/docs/dma/rule'}
        ]
      },
      {
        text: '内存自瞄',
        items: [
          { text: "分组介绍", link: '/docs/aimbot/Introduction'},
          { text: "分组规则", link: '/docs/aimbot/rule'}
        ]
      },
      {
        text: '追踪',
        items: [
          { text: "分组介绍", link: '/docs/magicbullet/Introduction'},
          { text: "分组规则", link: '/docs/magicbullet/rule'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Apex-Legends-Cheating-Series' }
    ]
  }
}))
