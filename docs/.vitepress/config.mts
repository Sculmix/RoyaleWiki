import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  cleanUrls: true,
  title: "Bisquit Wiki",
  description: "База знаний лучшего хостинга Bisquit.Host",
  themeConfig: {
    outline: {
      label: "На этой странице",
    },
    logo: '/64.webp',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      {
        text: 'RoyaleRP',
        items: [
          {
            // You may also omit the title.
            items: [
              { text: 'Основной сайт', link: 'https://royalerp.ru' },
              { text: 'Discord', link: 'https://discord.gg/ymYpxTr436' },
              { text: 'Вконтакте', link: 'https://vk.com/royalerp1' },
              { text: 'Telegram', link: 'https://telegram' },
            ]
          }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Старт',
        collapsed: false,
        items: [
          { text: 'Начать', link: '/start' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Bisquit-Host' }
    ]
  }
})