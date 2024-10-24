import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DICK",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Dick', link: '/' },
      { text: '📄ОСНОВНОЕ', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '📄ОСНОВНОЕ',
        items: [
          { text: '🚀Начать игру', link: '/nachalo' },
          { text: 'Как зайти на сервер', link: '/podpunkt1' },
          { text: 'Моды', link: '/podpunkt2' },
          { text: '💳Понятия', link: '/pravila' },
          { text: '📄Пользовательское соглашение', link: '/polz' },
        text: 'КОМАНДА ROYALERP',
        items: [
          { text: '👋Наша команда', link: '/nash' }
    ],
          { text: '🎟️Подписки', link: '/podpiski' },
          { text: '⭐Чат', link: '/chat' },
          { text: '🪽Элитры', link: '/elitr' },
          { text: '💍Косметика', link: '/cosm' },
          { text: '🏐Мячик', link: '/myach' },
          { text: '🍺Brewery - алкоголь на сервере', link: '/brewery' },
          { text: '⚖️Банковская система', link: '/bank' },
          { text: '🛟Поводки', link: '/povodok' },
          { text: '🥕Фермерство', link: '/farm' },
          { text: '🧊Запрещённые вещества', link: '/zapr' },
          { text: '💨Вейп', link: '/vape' },
          { text: '🧱Быстрый бетон', link: '/beton' },
          { text: '🖼️ArtMap - рисование', link: '/art' },
          { text: '⚙️Armor Stand Tools', link: '/armor' },
          { text: '🚬Кальян', link: '/kalik' },
          { text: '🔧Крафты', link: '/crafts' },
          { text: '🪩Своя музыка', link: '/kussia' },
          { text: '☄️Экономика', link: '/econom' },
          { text: '📜Высшие чины Политического звена', link: '/chin' },
          { text: '📜Вето и Верховные суды', link: '/sud' },
          { text: '📜Налоги и Финансы', link: '/nalog' },
        ]
      }
     ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
