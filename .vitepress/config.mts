import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Apex Legends Cheating Series",
  description: "Hacker Vs. Hacker",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' }
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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
