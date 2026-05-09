export const structureData = [
  {
    id: 1,
    name: "node_modules",
    desc: "Сторонние библиотеки и зависимости проекта.",
  },
  {
    id: 2,
    name: "public",
    desc: "Статические файлы доступные на сервере: favicon, manifest.json, index.html.",
  },
  {
    id: 3,
    name: "src",
    desc: "Основная папка с исходным кодом приложения.",
    isFolder: true,
  },
  {
    id: 4,
    name: "assets",
    desc: "Изображения, шрифты, глобальные стили.",
    parent: "src",
  },
  {
    id: 5,
    name: "components",
    desc: "Переиспользуемые компоненты (кнопки, инпуты).",
    parent: "src",
  },
  {
    id: 6,
    name: "constants",
    desc: "Данные для отрисовки в компонентах",
    parent: "src",
  },
  {
    id: 7,
    name: "context",
    desc: "Контексты для управления состоянием приложения.",
    parent: "src",
  },
  {
    id: 8,
    name: "hooks",
    desc: "Переиспользуемые пользовательские хуки.",
    parent: "src",
  },
  {
    id: 9,
    name: "pages",
    desc: "Основные страницы/экраны приложения.",
    parent: "src",
  },
  {
    id: 10,
    name: "styles",
    desc: "Глобальные стили или модули стилей.",
    parent: "src",
  },
  {
    id: 11,
    name: "App.tsx",
    desc: "Корневой компонент приложения.",
    parent: "src",
  },
  {
    id: 12,
    name: "main.tsx",
    desc: "Точка входа, где React монтируется в DOM.",
    parent: "src",
  },
  {
    id: 13,
    name: "package.json",
    desc: "Конфигурация проекта и список зависимостей.",
  },
  { id: 14, name: "vite.config.ts", desc: "Настройки сборщика Vite." },
  {
    id: 15,
    name: "gitignore.",
    desc: "Файлы которые не должны попасть в GitHub",
  },
  {
    id: 16,
    name: "eslint.config.js",
    desc: "Файл конфигурации для разработки, содержит готовые плагины и конфиги",
  },
  {
    id: 17,
    name: "index.html",
    desc: "Файл в который внедряется ввесь JS код",
  },
  {
    id: 18,
    name: "package-lock.json",
    desc: "Снимок (snapshot) всех зависимостей проекта",
  },
  {
    id: 19,
    name: "README.md",
    desc: "Описание проекта, автоматически отображается в репо gitHub",
  },
];
