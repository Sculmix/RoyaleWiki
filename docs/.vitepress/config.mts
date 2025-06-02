import { defineConfig } from 'vitepress';
import lightbox from "vitepress-plugin-lightbox";

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
          root: {
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
    nav: [
      {
        text: 'RoyaleRP',
        items: [
          {
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
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },
    sidebar: [
      {
        text: 'Начало',
        collapsed: false,
        items: [
          { text: 'Как зайти на сервер', link: '/start' },
          { text: 'Моды', link: '/mods' },
          { text: 'Правила', link: '/rules' },
          { text: 'РП правила', link: '/rprules' },
          { text: 'Термины', link: '/termins' },
          { text: 'Пользовательское соглашение', link: '/userdoc' },
        ]
      },
      {
        text: 'Фишки',
        collapsed: false,
        items: [
          { text: 'Города', link: '/towns' },
          { text: 'Организации', link: '/org' },
          { text: 'Банк', link: '/bank' },
          { text: 'Чат', link: '/chat' },
          { text: 'Крафты', link: '/crafts' },
          { text: 'Элитры', link: '/elytra' },
          { text: 'Быстрый бетон', link: '/conc' },
          { text: 'Рисование', link: '/artmap' },
          { text: 'Своя метка на карте', link: '/banners' },
          { text: 'Защита артов', link: '/artlock' },
		  { text: 'Защитная станция', link: '/protectionstation' },
          { text: 'Арморстенды', link: '/armor' },
          { text: 'Поводки', link: '/leash' },
          { text: 'Своя музыка', link: '/music' },
          { text: 'Напитки', link: '/brewery' },
          { text: 'Мячик', link: '/ball' },
          { text: 'Кальян', link: '/hookah' },
          { text: 'Вейп', link: '/vape' },
          { text: 'Вещества', link: '/dragi' }
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
    ],
    darkModeSwitchLabel: 'Оформление',
    lightModeSwitchTitle: 'Переключить на светлую тему',
    darkModeSwitchTitle: 'Переключить на тёмную тему',
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Вернуться к началу',
    langMenuLabel: 'Изменить язык',
  },
  markdown: {
    config: (md) => {
      md.use(lightbox, {});
    },
  },
});
