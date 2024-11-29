import { defineConfig } from 'vitepress'
import lightbox from "vitepress-plugin-lightbox"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/512.webp' }]],
  cleanUrls: true,
  title: "Royale Wiki",
  description: "База знаний майнкрафт сервера RoyaleRP",
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          ru: { // используйте ключ `root`, если хотите перевести локаль по умолчанию
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск'
              },
              modal: {
                displayDetails: 'Отобразить подробный список',
                resetButtonTitle: 'Сбросить поиск',
                backButtonTitle: 'Закрыть поиск',
                noResultsText: 'Нет результатов по запросу',
                footer: {
                  selectText: 'выбрать',
                  selectKeyAriaLabel: 'выбрать',
                  navigateText: 'перейти',
                  navigateUpKeyAriaLabel: 'стрелка вверх',
                  navigateDownKeyAriaLabel: 'стрелка вниз',
                  closeText: 'закрыть',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
    },
    },
    outline: {
      label: "На этой странице",
    },
    logo: '/512.webp',
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
        text: 'Начало',
        collapsed: false,
        items: [
          { text: 'Как зайти на сервер', link: '/start' },
          { text: 'Моды', link: '/mods' },
          { text: 'Правила', link: '/rules' },
          { text: 'Термины', link: '/termins' },
          { text: 'Пользовательское соглашение', link: '/userdoc' },
        ]
      },
      {
        text: 'Фишки',
        collapsed: false,
        items: [
          { text: 'Чат', link: '/chat' },
          { text: 'Элитры', link: '/elytra' },
          { text: 'Мячик', link: '/ball' },
          { text: 'Защита артов', link: '/artlock' },
          { text: 'Кальян', link: '/hookah' },
          { text: 'Вейп', link: '/vape' },
          { text: 'Вещества', link: '/dragi' },
          { text: 'Быстрый бетон', link: '/conc' },
          { text: 'Поводки', link: '/leash' },
          { text: 'Крафты', link: '/crafts' },
          { text: 'Рисование', link: '/artmap' },
          { text: 'Поводки', link: '/leash' },
          { text: 'Медный голем', link: '/coppergolem' },
          { text: 'Напитки', link: '/brewery' },
          { text: 'Арморстенды', link: '/armor' },
          { text: 'Банк', link: '/bank' },
          { text: 'Своя музыка', link: '/music' },
        ]
      },
      {
        text: 'Система',
        collapsed: false,
        items: [
          { text: 'Высшие чины полит. звена', link: '/chin' },
          { text: 'Вето и суды', link: '/veto' },
          { text: 'Налоги и финансы', link: '/nalog' },
        ]
      },
      {
        text: 'Поддержка сервера',
        collapsed: false,
        items: [
          { text: 'Подписки', link: '/subs' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/RoyaleRP' }
    ]
  },
  markdown: {
    config: (md) => {
      // Use lightbox plugin
      md.use(lightbox, {});
    },
  },
});