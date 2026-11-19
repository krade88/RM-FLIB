/* ==========================================================================
   RM-FLIB — roadmap content
   13 stages, 118 topics. Each topic contains:
   practice, checkpoint and resources.
   Loaded before app.js.
   ========================================================================== */

const STAGES = [
{
    n: 0, key: "s0", group: "Фундамент",
    title: "Старт: как устроен веб и инструменты",
    lead: "Прежде чем писать код, разберись, где он живёт: как браузер общается с сервером, как работает терминал и как не потерять изменения в Git. Этот этап экономит месяцы боли в будущем.",
    hours: 25,
    tech: ["Терминал", "Git", "GitHub", "VS Code", "HTTP", "DevTools"],
    learn: [
      {
        title: "Как работает интернет",
        desc: "Клиент и сервер, DNS, IP, порты, HTTP/HTTPS, методы, статус-коды, заголовки, cookies. Цель — понимать, что происходит после ввода адреса.",
        practice: "Нарисуй схему пути запроса к /novels/42: DNS → TCP → HTTP → ответ сервера → рендер. Подпиши, что происходит на каждом шаге.",
        checkpoint: "Объясняешь без подсказок, что происходит между вводом URL и появлением страницы, и чем 404 отличается от 500.",
        resources: [
          ["MDN: How the web works", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works"],
          ["MDN: HTTP overview", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"]
        ]
      },
      {
        title: "Браузер и DevTools",
        desc: "Вкладки Elements, Console, Network, Application, Sources. Учись читать ошибки, смотреть запросы и находить, почему страница выглядит не так.",
        practice: "Открой любой сайт, найди в Network HTML-документ, посмотри статус, заголовки и время. В Console выполни 3 выражения и найди один 404-запрос.",
        checkpoint: "Можешь по Network и Console объяснить, почему запрос упал или страница выглядит сломанной.",
        resources: [
          ["Chrome DevTools", "https://developer.chrome.com/docs/devtools/"],
          ["MDN: Browser developer tools", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools"]
        ]
      },
      {
        title: "Терминал",
        desc: "Навигация по папкам, создание и удаление файлов, переменные окружения, пути. PowerShell на Windows и базовый bash пригодятся в Docker и на сервере.",
        practice: "Создай папку проекта, три файла, переименуй и перемести их, выведи содержимое. Задай переменную окружения и прочитай её в новом процессе.",
        checkpoint: "Свободно ходишь по файловой системе и не боишься путей с пробелами и кириллицей.",
        resources: [
          ["MDN: Command line crash course", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"],
          ["PowerShell docs", "https://learn.microsoft.com/en-us/powershell/"]
        ]
      },
      {
        title: "Git и GitHub",
        desc: "init/clone/status/add/commit/push/pull, ветки, merge, конфликты, .gitignore, SSH-ключи, pull request. Коммить часто и осмысленно.",
        practice: "Инициализируй репозиторий, сделай 5 коммитов в двух ветках, слей их и специально вызови конфликт, чтобы разрешить его вручную.",
        checkpoint: "Понимаешь, что делает каждая команда, и можешь откатить файл или коммит без страха потерять работу.",
        resources: [
          ["Git Book (рус.)", "https://git-scm.com/book/ru/v2"],
          ["Learn Git Branching", "https://learngitbranching.js.org/?locale=ru_RU"]
        ]
      },
      {
        title: "VS Code",
        desc: "Рабочая область, расширения, форматирование, встроенный терминал, отладчик, поиск по проекту, сниппеты.",
        practice: "Настрой 5 расширений, форматирование при сохранении, пользовательский сниппет и отладку простого JS-файла с breakpoint.",
        checkpoint: "Рабочее место настроено, отладчик останавливается на breakpoint и показывает значения переменных.",
        resources: [
          ["VS Code docs", "https://code.visualstudio.com/docs"],
          ["VS Code tips", "https://code.visualstudio.com/docs/getstarted/tips-and-tricks"]
        ]
      },
      {
        title: "Markdown и документация",
        desc: "README, issues, комментарии, конспекты. Умение объяснить решение — часть инженерной работы.",
        practice: "Напиши README для будущего проекта: описание, стек, установка, структура папок и один скриншот.",
        checkpoint: "README понятен человеку, который видит проект впервые и ничего о нём не знает.",
        resources: [
          ["Markdown Guide", "https://www.markdownguide.org"],
          ["GitHub: About READMEs", "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"]
        ]
      },
      {
        title: "Гигиена безопасности",
        desc: "Менеджер паролей, 2FA, секреты не попадают в Git, .env в .gitignore, принцип минимальных прав.",
        practice: "Включи 2FA на GitHub, настрой менеджер паролей, проверь .gitignore и историю репозитория на случайные секреты.",
        checkpoint: "Секреты не попадают в git, доступы защищены, а при утечке понятно, что делать.",
        resources: [
          ["GitHub: 2FA", "https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa"],
          ["GitHub: Secret scanning", "https://docs.github.com/en/code-security/secret-scanning"]
        ]
      }
    ],
    practice: [
      "Собери личную страницу-визитку на HTML/CSS и выложи на GitHub Pages.",
      "Заведи репозиторий с README, сделай 10 осмысленных коммитов, отдельную ветку и pull request."
    ],
    checkpoint: [
      "Объясняешь путь запроса от URL до ответа сервера.",
      "Делаешь commit/push и решаешь конфликт без подсказок.",
      "Понимаешь, зачем нужен .env и почему секреты не коммитят."
    ],
    resources: [
      ["MDN: How the web works", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works"],
      ["Git Book (рус.)", "https://git-scm.com/book/ru/v2"],
      ["GitHub Skills", "https://skills.github.com"],
      ["Learn Git Branching", "https://learngitbranching.js.org/?locale=ru_RU"]
    ]
  },
  {
    n: 1, key: "s1", group: "Фундамент",
    title: "HTML и CSS: фундамент интерфейса",
    lead: "HTML отвечает за смысл и структуру, CSS — за внешний вид. Здесь ты научишься превращать макет в адаптивную страницу, которая нормально выглядит на телефоне и не стыдит на десктопе.",
    hours: 60,
    tech: ["HTML", "CSS", "Flexbox", "Grid", "Tailwind CSS", "Адаптив", "A11y"],
    learn: [
      {
        title: "Семантический HTML",
        desc: "header/nav/main/section/article/footer, заголовки, списки, ссылки, изображения, таблицы. Семантика помогает SEO, доступности и тебе самому.",
        practice: "Разметь страницу новеллы: header, main, article, aside, footer. Проверь документ через W3C-валидатор.",
        checkpoint: "Валидатор не находит ошибок, а структуру страницы можно понять с отключённым CSS.",
        resources: [
          ["MDN: HTML elements", "https://developer.mozilla.org/ru/docs/Web/HTML/Element"],
          ["web.dev: Semantic HTML", "https://web.dev/learn/html/semantic-html"]
        ]
      },
      {
        title: "Формы",
        desc: "input всех типов, label, fieldset, встроенная валидация, autocomplete. Формы — основа регистрации, публикации глав и админки.",
        practice: "Сверстай форму регистрации с label, required, autocomplete, fieldset и блоком сообщений об ошибках.",
        checkpoint: "Форма заполняется с клавиатуры, браузер валидирует поля, а ошибки понятны без цвета.",
        resources: [
          ["MDN: Forms guide", "https://developer.mozilla.org/ru/docs/Learn_web_development/Extensions/Forms"],
          ["web.dev: Forms", "https://web.dev/learn/forms"]
        ]
      },
      {
        title: "Доступность (a11y)",
        desc: "alt, контраст, клавиатурная навигация, focus-visible, aria только там, где без неё нельзя.",
        practice: "Прогони страницу через Lighthouse Accessibility, исправь три проблемы и пройди весь интерфейс клавишей Tab.",
        checkpoint: "Фокус всегда видим, контраст не ниже 4.5:1, у изображений есть alt, а порядок Tab логичен.",
        resources: [
          ["web.dev: Learn Accessibility", "https://web.dev/learn/accessibility"],
          ["MDN: Accessibility", "https://developer.mozilla.org/ru/docs/Web/Accessibility"]
        ]
      },
      {
        title: "Ядро CSS",
        desc: "Каскад, специфичность, наследование, блочная модель, единицы, типографика, псевдоклассы и псевдоэлементы.",
        practice: "Сверстай карточку новеллы и объясни, почему конкретное свойство победило в каскаде. Сделай то же без !important.",
        checkpoint: "Понимаешь специфичность и можешь предсказать, какое правило применится.",
        resources: [
          ["MDN: CSS first steps", "https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Styling_basics"],
          ["web.dev: Learn CSS", "https://web.dev/learn/css"]
        ]
      },
      {
        title: "Flexbox и Grid",
        desc: "Когда что использовать, выравнивание, переносы, minmax/fr, вложенные сетки. Это 80% всей вёрстки.",
        practice: "Сделай шапку на Flex, каталог карточек на Grid и перестрой оба блока под три ширины экрана.",
        checkpoint: "Выбираешь layout без гугла и объясняешь, почему здесь Flex, а там Grid.",
        resources: [
          ["CSS-Tricks: Flexbox", "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"],
          ["CSS-Tricks: Grid", "https://css-tricks.com/snippets/css/complete-guide-grid/"]
        ]
      },
      {
        title: "Адаптивность",
        desc: "Mobile-first, media queries, clamp(), min/max, responsive images, container queries. Проверяй 360/768/1440 px.",
        practice: "Сделай mobile-first страницу с тремя брейкпоинтами, clamp-типографикой и responsive-изображениями.",
        checkpoint: "На 360px нет горизонтального скролла, текст читается, а картинки не растягиваются.",
        resources: [
          ["web.dev: Responsive design", "https://web.dev/learn/design"],
          ["MDN: Media queries", "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_media_queries/Using_media_queries"]
        ]
      },
      {
        title: "Визуальные эффекты",
        desc: "transition, transform, @keyframes, CSS-переменные, тёмная тема. Анимации должны помогать, а не мешать.",
        practice: "Добавь hover-состояния, переход темы и анимацию появления карточек. Проверь prefers-reduced-motion.",
        checkpoint: "Анимации не ломают layout и отключаются для пользователей с reduced motion.",
        resources: [
          ["MDN: CSS transitions", "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_transitions/Using_CSS_transitions"],
          ["web.dev: Animations", "https://web.dev/learn/css/animations"]
        ]
      },
      {
        title: "Tailwind CSS",
        desc: "Utility-first подход, шкала отступов, варианты состояний и брейкпоинтов, @theme-токены, сборка через Vite. Именно Tailwind используется в FLIB.",
        practice: "Перепиши одну секцию на Tailwind, настрой тему через @theme и добавь dark variant.",
        checkpoint: "Нет хаоса классов, сборка проходит, а стили выглядят консистентно на всех страницах.",
        resources: [
          ["Tailwind docs", "https://tailwindcss.com/docs"],
          ["Tailwind: Theme variables", "https://tailwindcss.com/docs/theme"]
        ]
      },
      {
        title: "Основы дизайна",
        desc: "Ритм, сетка, иерархия, типографика, цвет, состояния компонентов. Учись читать Figma и повторять макет.",
        practice: "Повтори экран каталога из Figma или хорошего референса и сравни свой результат со скриншотом.",
        checkpoint: "Иерархия, отступы и типографика выглядят цельно, а не как набор случайных блоков.",
        resources: [
          ["Refactoring UI", "https://www.refactoringui.com"],
          ["Figma: Learn", "https://help.figma.com/hc/en-us/categories/360002051613-Learn-Figma"]
        ]
      }
    ],
    practice: [
      "Сверстай лендинг книжной платформы: шапка, hero, каталог карточек, преимущества, футер.",
      "Добавь тёмную тему, форму подписки и адаптив под 360/768/1440 px. Прогони Lighthouse до 90+."
    ],
    checkpoint: [
      "Свёрстать простой макет за 1–2 дня без подсказок.",
      "Объяснить разницу между Flexbox и Grid и когда какой выбирать.",
      "Форма работает с клавиатуры и со скринридером."
    ],
    resources: [
      ["MDN: Learn HTML", "https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Structuring_content"],
      ["web.dev: Learn CSS", "https://web.dev/learn/css"],
      ["Tailwind CSS docs", "https://tailwindcss.com/docs"],
      ["Flexbox Froggy", "https://flexboxfroggy.com/#ru"],
      ["Grid Garden", "https://cssgridgarden.com/#ru"]
    ]
  },
  {
    n: 2, key: "s2", group: "Фундамент",
    title: "JavaScript: язык и браузер",
    lead: "JavaScript оживляет интерфейс: реагирует на клики, грузит данные, хранит настройки. Здесь важно не заучить синтаксис, а научиться думать состояниями и событиями.",
    hours: 80,
    tech: ["JavaScript", "DOM", "Fetch", "Async/await", "LocalStorage", "DevTools"],
    learn: [
      {
        title: "Синтаксис и типы",
        desc: "Переменные, примитивы, операторы, условия, циклы, функции, области видимости, hoisting, строгое равенство.",
        practice: "Реши 15 задач на массивы, строки и условия без подсказок. Сделай шпаргалку по типам и приведению.",
        checkpoint: "Объясняешь разницу null/undefined, ==/===, let/const и что такое hoisting.",
        resources: [
          ["javascript.info: Types", "https://learn.javascript.ru/types"],
          ["MDN: JavaScript guide", "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide"]
        ]
      },
      {
        title: "Массивы и объекты",
        desc: "map/filter/reduce/find/sort, деструктуризация, spread/rest, JSON, копирование и мутация.",
        practice: "Преобразуй массив глав: отфильтруй опубликованные, отсортируй по дате и собери объект по id.",
        checkpoint: "Используешь map/filter/reduce осознанно и не мутируешь входные данные без причины.",
        resources: [
          ["javascript.info: Arrays", "https://learn.javascript.ru/array"],
          ["MDN: Array", "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array"]
        ]
      },
      {
        title: "Функции и замыкания",
        desc: "Стрелочные функции, колбэки, замыкания, this, bind/call/apply. Это база для Vue-хуков и серверного JS.",
        practice: "Напиши counter, once и debounce на замыканиях. Объясни this в трёх разных контекстах вызова.",
        checkpoint: "Можешь объяснить, где живёт переменная после того, как функция вернула результат.",
        resources: [
          ["javascript.info: Closures", "https://learn.javascript.ru/closure"],
          ["MDN: Functions", "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions"]
        ]
      },
      {
        title: "DOM и события",
        desc: "querySelector, создание элементов, классы и стили, всплытие, делегирование, формы, валидация.",
        practice: "Сделай список глав с добавлением, удалением, поиском и делегированием событий.",
        checkpoint: "События не дублируются после перерисовки, а элементы не теряют обработчики.",
        resources: [
          ["javascript.info: DOM", "https://learn.javascript.ru/document"],
          ["MDN: Events", "https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Scripting/Events"]
        ]
      },
      {
        title: "Асинхронность",
        desc: "Event loop, Promises, async/await, fetch, обработка ошибок, AbortController, параллельные запросы. Обязательно понять, а не скопировать.",
        practice: "Загрузи данные с публичного API, обработай loading/error/empty и отмени запрос через AbortController.",
        checkpoint: "Объясняешь event loop и порядок microtask/macrotask на примере своего кода.",
        resources: [
          ["javascript.info: Async", "https://learn.javascript.ru/async"],
          ["MDN: Promises", "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise"]
        ]
      },
      {
        title: "Модули и сборка",
        desc: "import/export, npm, package.json, скрипты, семантическое версионирование.",
        practice: "Разбей прототип на пять ES-модулей, настрой package.json и запусти сборку одной командой.",
        checkpoint: "Нет глобальных переменных, а модули можно переиспользовать в другом проекте.",
        resources: [
          ["javascript.info: Modules", "https://learn.javascript.ru/modules"],
          ["MDN: Modules", "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Modules"]
        ]
      },
      {
        title: "Хранение на клиенте",
        desc: "localStorage, sessionStorage, cookies, лимиты и безопасность. Пригодится для настроек ридера.",
        practice: "Сохрани настройки ридера и прогресс чтения в localStorage, восстанови их после перезагрузки.",
        checkpoint: "Данные не ломаются при пустом, старом или битом JSON.",
        resources: [
          ["MDN: localStorage", "https://developer.mozilla.org/ru/docs/Web/API/Window/localStorage"],
          ["javascript.info: Storage", "https://learn.javascript.ru/localstorage"]
        ]
      },
      {
        title: "Отладка",
        desc: "Точки останова, стек вызовов, Network, логирование. Умение найти баг важнее, чем знание ещё одного фреймворка.",
        practice: "Поставь breakpoint, поймай ошибку в асинхронном коде, прочитай stack trace и исправь причину.",
        checkpoint: "Находишь баг через DevTools за 10–15 минут, а не перебором изменений.",
        resources: [
          ["Chrome DevTools: Debug JS", "https://developer.chrome.com/docs/devtools/javascript/"],
          ["javascript.info: Debugging", "https://learn.javascript.ru/debugging-chrome"]
        ]
      },
      {
        title: "Паттерны UI",
        desc: "Debounce/throttle, пагинация, бесконечный скролл, состояния загрузки, ошибки и пустоты.",
        practice: "Добавь debounce поиска, пагинацию и скелетоны загрузки в прототип каталога.",
        checkpoint: "Нет лишних запросов, а состояния загрузки, ошибки и пустоты понятны пользователю.",
        resources: [
          ["CSS-Tricks: Debounce", "https://css-tricks.com/debouncing-throttling-explained-examples/"],
          ["MDN: IntersectionObserver", "https://developer.mozilla.org/ru/docs/Web/API/IntersectionObserver"]
        ]
      }
    ],
    practice: [
      "Сделай прототип ридера: каталог новелл из JSON, страница главы, настройки шрифта/интервала/темы.",
      "Сохраняй прогресс скролла и закладки в localStorage, добавь поиск и фильтры. Без фреймворков."
    ],
    checkpoint: [
      "Написать SPA на чистом JS с fetch к внешнему API.",
      "Объяснить event loop и разницу между синхронным и асинхронным кодом.",
      "Найти баг через DevTools, а не гадать."
    ],
    resources: [
      ["javascript.info (рус.)", "https://learn.javascript.ru"],
      ["MDN: JavaScript", "https://developer.mozilla.org/ru/docs/Web/JavaScript"],
      ["You Don't Know JS Yet", "https://github.com/getify/You-Dont-Know-JS"],
      ["Frontend Mentor", "https://www.frontendmentor.io/challenges"]
    ]
  },
  {
    n: 3, key: "s3", group: "Фундамент",
    title: "TypeScript и современный тулинг",
    lead: "TypeScript ловит ошибки до запуска, а Vite собирает фронтенд за секунды. Вместе с линтерами это делает код предсказуемым — как в реальных проектах, а не в учебных примерах.",
    hours: 40,
    tech: ["TypeScript", "Vite", "npm", "ESLint", "Prettier", "strict"],
    learn: [
      {
        title: "Базовые типы",
        desc: "primitives, object, array, tuple, enum, any/unknown/never, strict-режим.",
        practice: "Типизируй 10 функций и структур, включи strict и исправь все ошибки без any.",
        checkpoint: "В проекте нет any, а ошибки типов исправлены по существу, а не заглушены as.",
        resources: [
          ["TS: Everyday types", "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"],
          ["TS Playground", "https://www.typescriptlang.org/play"]
        ]
      },
      {
        title: "Структуры",
        desc: "interface и type, optional/readonly, union/intersection, literal types, вложенные типы.",
        practice: "Опиши модели Novel, Chapter и User через interface/type и переиспользуй общие поля.",
        checkpoint: "Модели не дублируются, а изменения структуры ловятся компилятором.",
        resources: [
          ["TS: Object types", "https://www.typescriptlang.org/docs/handbook/2/objects.html"]
        ]
      },
      {
        title: "Функции и generics",
        desc: "Типизация аргументов и возврата, generics с constraints, вывод типов, перегрузки.",
        practice: "Напиши типизированный API-клиент и функцию groupBy с generics.",
        checkpoint: "Generics выводятся без ручных подсказок, а вызовы не требуют any.",
        resources: [
          ["TS: Generics", "https://www.typescriptlang.org/docs/handbook/2/generics.html"],
          ["TS: More on functions", "https://www.typescriptlang.org/docs/handbook/2/functions.html"]
        ]
      },
      {
        title: "Сужение типов",
        desc: "typeof/instanceof, type guards, discriminated unions, assertion. Учись не использовать as без нужды.",
        practice: "Обработай discriminated union статусов загрузки через type guard и switch без приведения типов.",
        checkpoint: "Компилятор сам сужает тип в каждой ветке, а as остаётся только в крайнем случае.",
        resources: [
          ["TS: Narrowing", "https://www.typescriptlang.org/docs/handbook/2/narrowing.html"]
        ]
      },
      {
        title: "Utility types",
        desc: "Partial, Pick, Omit, Record, ReturnType, keyof/typeof — повседневные инструменты.",
        practice: "Сделай DTO для создания и обновления новеллы через Pick, Omit и Partial.",
        checkpoint: "Не копируешь поля вручную и не теряешь связь DTO с доменной моделью.",
        resources: [
          ["TS: Utility types", "https://www.typescriptlang.org/docs/handbook/utility-types.html"]
        ]
      },
      {
        title: "tsconfig",
        desc: "strict, target, moduleResolution, paths, include/exclude. Понимай, что включает каждая опция.",
        practice: "Включи strict, path aliases и noUncheckedIndexedAccess, затем объясни каждую опцию в конфиге.",
        checkpoint: "Конфиг понятен, сборка не ломается, а алиасы работают в IDE и Vite.",
        resources: [
          ["TS: tsconfig reference", "https://www.typescriptlang.org/tsconfig/"]
        ]
      },
      {
        title: "Vite",
        desc: "Dev server, HMR, build, preview, env-переменные, алиасы, плагины.",
        practice: "Настрой dev/build/preview, env-переменные и alias, проверь HMR и production-сборку.",
        checkpoint: "Production build открывается локально и работает без dev-сервера.",
        resources: [
          ["Vite: Getting started", "https://vite.dev/guide/"],
          ["Vite: Env variables", "https://vite.dev/guide/env-and-mode"]
        ]
      },
      {
        title: "npm и качество кода",
        desc: "package.json, lockfile, scripts; ESLint flat config, Prettier, vue-tsc. Единый стиль экономит ревью.",
        practice: "Настрой ESLint flat config, Prettier и скрипты lint/format/typecheck для проекта.",
        checkpoint: "Одна команда проверяет весь фронтенд, а CI запускает её без отличий.",
        resources: [
          ["npm docs", "https://docs.npmjs.com"],
          ["ESLint: Getting started", "https://eslint.org/docs/latest/use/getting-started"],
          ["Prettier", "https://prettier.io/docs/"]
        ]
      },
      {
        title: "Типизация API",
        desc: "DTO, ответы-обёртки, дженерик-запросы, валидация через zod (по желанию).",
        practice: "Типизируй ответы публичного API и провалидируй их zod-схемой перед использованием.",
        checkpoint: "Неизвестный или битый ответ API не роняет приложение, а даёт понятную ошибку.",
        resources: [
          ["zod docs", "https://zod.dev"],
          ["TS: TypeScript from JS", "https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html"]
        ]
      }
    ],
    practice: [
      "Перенеси ридер на Vite + TypeScript в strict-режиме.",
      "Опиши модели Novel/Chapter/User, типизируй ответы API, настрой ESLint/Prettier и добейся сборки без ошибок."
    ],
    checkpoint: [
      "В проекте нет any, ошибки типов понятны и исправляются.",
      "Сборка и линтеры запускаются одной командой.",
      "Объяснить, зачем нужен strict и как работает вывод типов."
    ],
    resources: [
      ["TypeScript Handbook", "https://www.typescriptlang.org/docs/handbook/intro.html"],
      ["Vite docs", "https://vite.dev/guide/"],
      ["ESLint docs", "https://eslint.org/docs/latest/"],
      ["Prettier docs", "https://prettier.io/docs/"]
    ]
  },
{
    n: 4, key: "s4", group: "Фронтенд",
    title: "Vue 3: компонентный интерфейс",
    lead: "Vue — слой, из которого состоит весь интерфейс FLIB. Освой компонентное мышление, реактивность и управление состоянием, прежде чем лезть в Laravel.",
    hours: 80,
    tech: ["Vue 3", "Composition API", "Pinia", "Vue Router", "Composables", "Tailwind"],
    learn: [
      {
        title: "Основы Vue",
        desc: "Создание приложения, шаблоны, директивы v-if/v-for/v-bind/v-on/v-model, реактивность.",
        practice: "Создай приложение-счётчик и список новелл с v-for, v-if и v-model.",
        checkpoint: "Понимаешь, как шаблон связан с состоянием и почему интерфейс обновляется сам.",
        resources: [
          ["Vue: Quick start", "https://vuejs.org/guide/quick-start.html"],
          ["Vue: Template syntax", "https://vuejs.org/guide/essentials/template-syntax.html"]
        ]
      },
      {
        title: "Composition API",
        desc: "script setup, ref/reactive, computed, watch/watchEffect, lifecycle-хуки, template refs.",
        practice: "Перепиши компонент на script setup с computed, watch и lifecycle-хуком.",
        checkpoint: "Нет лишних watcher-ов, computed кэшируется, а побочные эффекты убраны в lifecycle.",
        resources: [
          ["Vue: Reactivity fundamentals", "https://vuejs.org/guide/essentials/reactivity-fundamentals.html"],
          ["Vue: Lifecycle hooks", "https://vuejs.org/guide/essentials/lifecycle.html"]
        ]
      },
      {
        title: "Компоненты",
        desc: "props/emits, slots, provide/inject, динамические компоненты, keep-alive, границы ответственности.",
        practice: "Сделай NovelCard с props, emits и слотом для действий, не завязывая его на родителя.",
        checkpoint: "Компонент переиспользуется в двух местах и не знает о конкретной странице.",
        resources: [
          ["Vue: Components", "https://vuejs.org/guide/essentials/component-basics.html"],
          ["Vue: Slots", "https://vuejs.org/guide/components/slots.html"]
        ]
      },
      {
        title: "Composables",
        desc: "Паттерн useSomething для переиспользования логики: useReaderSettings, usePagination, useAuth.",
        practice: "Вынеси настройки ридера в composable useReaderSettings с сохранением в localStorage.",
        checkpoint: "Логика используется в двух компонентах без копипасты и без глобального состояния.",
        resources: [
          ["Vue: Composables", "https://vuejs.org/guide/reusability/composables.html"]
        ]
      },
      {
        title: "Формы",
        desc: "Двусторонняя привязка, валидация, состояния ошибок и загрузки, обработка серверных ошибок.",
        practice: "Сделай форму главы с валидацией, ошибками у полей и блокировкой кнопки во время отправки.",
        checkpoint: "Ошибки показываются рядом с полями, а повторная отправка не создаёт дубликаты.",
        resources: [
          ["Vue: Form input bindings", "https://vuejs.org/guide/essentials/forms.html"]
        ]
      },
      {
        title: "Vue Router",
        desc: "Маршруты, params/query, guards, lazy loading, scroll behavior, 404.",
        practice: "Добавь маршруты каталог → новелла → глава, 404 и ленивую загрузку страниц.",
        checkpoint: "Прямой переход по глубокому URL работает, а 404 не ломает layout.",
        resources: [
          ["Vue Router", "https://router.vuejs.org/guide/"]
        ]
      },
      {
        title: "Pinia",
        desc: "Stores, state/getters/actions, setup-стиль, персистентность, модульность.",
        practice: "Создай store библиотеки с фильтрами и сохранением списка чтения.",
        checkpoint: "Состояние не дублируется в компонентах, а actions описывают бизнес-операции.",
        resources: [
          ["Pinia: Getting started", "https://pinia.vuejs.org/getting-started.html"]
        ]
      },
      {
        title: "Стили и анимации",
        desc: "Scoped CSS, Tailwind, transition/transition-group, скелетоны загрузки.",
        practice: "Добавь transition между страницами и анимацию списка, проверь reduced motion.",
        checkpoint: "Анимации не вызывают layout shift и не мешают быстрым переходам.",
        resources: [
          ["Vue: Transitions", "https://vuejs.org/guide/built-ins/transition.html"],
          ["Tailwind: Transitions", "https://tailwindcss.com/docs/transition-property"]
        ]
      },
      {
        title: "Производительность и a11y",
        desc: "v-memo, ленивые компоненты, клавиатура, aria, контраст.",
        practice: "Лениво загрузи тяжёлый компонент, добавь v-memo и проверь интерфейс только клавиатурой.",
        checkpoint: "Lighthouse и Tab-навигация не ухудшаются после оптимизаций.",
        resources: [
          ["Vue: Performance", "https://vuejs.org/guide/best-practices/performance.html"],
          ["Vue: Accessibility", "https://vuejs.org/guide/best-practices/accessibility.html"]
        ]
      }
    ],
    practice: [
      "Сделай трекер чтения: каталог с фильтрами, карточка новеллы, избранное, формы добавления, роутинг и Pinia.",
      "Разбей интерфейс на переиспользуемые компоненты и сохраняй настройки пользователя."
    ],
    checkpoint: [
      "Сделать переиспользуемый компонент и composable без копипасты.",
      "Объяснить, как работает реактивность и когда computed, а когда watch.",
      "Навигация и формы работают без перезагрузки страницы."
    ],
    resources: [
      ["Vue 3 docs (рус.)", "https://ru.vuejs.org/guide/introduction.html"],
      ["Pinia docs", "https://pinia.vuejs.org"],
      ["Vue Router docs", "https://router.vuejs.org"],
      ["Vue Mastery: free course", "https://www.vuemastery.com/courses/intro-to-vue-3/"]
    ]
  },
  {
    n: 5, key: "s5", group: "Бэкенд",
    title: "PHP: серверный язык",
    lead: "PHP — язык бэкенда FLIB. После JS он кажется простым, но именно здесь важно освоить ООП, пространства имён и Composer: на них стоит Laravel.",
    hours: 60,
    tech: ["PHP 8.3", "OOP", "Composer", "PSR", "Exceptions", "Sessions"],
    learn: [
      {
        title: "Синтаксис PHP",
        desc: "Типы, переменные, массивы, строки, функции, include/require, суперглобальные переменные.",
        practice: "Напиши CLI-калькулятор или парсер CSV на массивах и функциях с обработкой аргументов.",
        checkpoint: "Код запускается без notice и warning, а входные данные проверяются.",
        resources: [
          ["PHP: Language reference", "https://www.php.net/manual/ru/langref.php"],
          ["PHP: Getting started", "https://www.php.net/manual/ru/getting-started.php"]
        ]
      },
      {
        title: "ООП",
        desc: "Классы, свойства, методы, конструкторы, наследование, интерфейсы, абстрактные классы, трейты, enum.",
        practice: "Смоделируй Book, Author и Library с интерфейсом, абстрактным классом и трейтом.",
        checkpoint: "Объясняешь разницу interface, abstract class и trait и применяешь их по назначению.",
        resources: [
          ["PHP: OOP", "https://www.php.net/manual/ru/language.oop5.php"],
          ["PHP: Interfaces", "https://www.php.net/manual/ru/language.oop5.interfaces.php"]
        ]
      },
      {
        title: "Пространства имён и автозагрузка",
        desc: "namespace/use, PSR-4, Composer autoload. Без этого Laravel-код выглядит магией.",
        practice: "Разложи классы по PSR-4 и подключи автозагрузку Composer без ручных require.",
        checkpoint: "Класс находится по namespace без include, а структура папок совпадает с namespace.",
        resources: [
          ["PHP: Namespaces", "https://www.php.net/manual/ru/language.namespaces.php"],
          ["Composer: Autoloading", "https://getcomposer.org/doc/01-basic-usage.md#autoloading"]
        ]
      },
      {
        title: "Composer",
        desc: "require/update, версии, scripts, автозагрузка, Packagist. Аналог npm для PHP.",
        practice: "Подключи сторонний пакет, настрой autoload и scripts, обнови lock-файл.",
        checkpoint: "composer install на чистой машине воспроизводит рабочее окружение.",
        resources: [
          ["Composer: Basic usage", "https://getcomposer.org/doc/01-basic-usage.md"],
          ["Packagist", "https://packagist.org"]
        ]
      },
      {
        title: "Ошибки и исключения",
        desc: "try/catch/finally, уровни ошибок, логирование, PSR-3. Не глуши ошибки.",
        practice: "Сделай try/catch с логированием и кастомным исключением для бизнес-ошибки.",
        checkpoint: "Пользователь не видит stack trace, а в логе есть контекст и причина.",
        resources: [
          ["PHP: Exception", "https://www.php.net/manual/ru/class.exception.php"],
          ["PSR-3 logger", "https://www.php-fig.org/psr/psr-3/"]
        ]
      },
      {
        title: "Файлы, JSON и HTTP",
        desc: "Чтение и запись, json_encode/decode, заголовки, статус-коды, сессии и cookies.",
        practice: "Сделай мини-API на чистом PHP: JSON, статус-коды, чтение тела запроса и сессия.",
        checkpoint: "Возвращаешь корректные 200/400/404/500 и не отдаёшь лишние данные.",
        resources: [
          ["PHP: Filesystem", "https://www.php.net/manual/ru/book.filesystem.php"],
          ["PHP: JSON", "https://www.php.net/manual/ru/book.json.php"],
          ["PHP: Sessions", "https://www.php.net/manual/ru/book.session.php"]
        ]
      },
      {
        title: "Безопасность",
        desc: "Экранирование вывода, password_hash, подготовленные запросы, валидация входных данных.",
        practice: "Сохрани пароль через password_hash, проверь вывод через htmlspecialchars и используй PDO-запрос с параметрами.",
        checkpoint: "В коде нет SQL-конкатенации и XSS в выводе пользовательских данных.",
        resources: [
          ["PHP: Security", "https://www.php.net/manual/ru/security.php"],
          ["PHP: password_hash", "https://www.php.net/manual/ru/function.password-hash.php"]
        ]
      },
      {
        title: "Стандарты",
        desc: "PSR-1, PSR-4, PSR-12, именование. Код должен читаться одинаково в любом проекте.",
        practice: "Прогони код через Pint или PHPCS, исправь именование, отступы и длину строк.",
        checkpoint: "Код соответствует PSR-12, а ревью не тратит время на стиль.",
        resources: [
          ["PSR-12", "https://www.php-fig.org/psr/psr-12/"],
          ["PHP-FIG", "https://www.php-fig.org"]
        ]
      },
      {
        title: "Отладка",
        desc: "var_dump, Xdebug, логи. Учись читать stack trace.",
        practice: "Настрой Xdebug, поставь breakpoint и пройди по шагам через функцию с вложенными вызовами.",
        checkpoint: "Видишь значения переменных и стек без var_dump и временных print.",
        resources: [
          ["Xdebug docs", "https://xdebug.org/docs"],
          ["PHP: Error handling", "https://www.php.net/manual/ru/book.errorfunc.php"]
        ]
      }
    ],
    practice: [
      "Консольная библиотека: классы Book, Author, Library, интерфейс Storage, JSON-хранилище, Composer-автозагрузка.",
      "Добавь обработку ошибок и простые unit-тесты, если уже знаком с PHPUnit."
    ],
    checkpoint: [
      "Написать классы с интерфейсами и автозагрузкой через Composer.",
      "Объяснить, зачем нужны namespace и PSR-4.",
      "Обработать ошибку и не показать пользователю стектрейс."
    ],
    resources: [
      ["PHP manual (рус.)", "https://www.php.net/manual/ru/"],
      ["PHP: The Right Way", "https://phptherightway.com"],
      ["Composer docs", "https://getcomposer.org/doc/"],
      ["PHPStan docs", "https://phpstan.org/user-guide/getting-started"]
    ]
  },
  {
    n: 6, key: "s6", group: "Бэкенд",
    title: "SQL и проектирование данных",
    lead: "Данные — основа платформы. Плохая схема превращает любую фичу в боль: дубли, медленные запросы, невозможность миграций. Научись проектировать таблицы до того, как писать модели.",
    hours: 35,
    tech: ["SQL", "MySQL", "SQLite", "Индексы", "Транзакции", "Redis"],
    learn: [
      {
        title: "Реляционная модель",
        desc: "Таблицы, первичные и внешние ключи, ограничения, связи 1:1, 1:N, N:N, каскады.",
        practice: "Нарисуй ER-диаграмму для новелл, глав, пользователей и комментариев.",
        checkpoint: "У каждой связи есть внешний ключ и понятная кардинальность, нет висячих ссылок.",
        resources: [
          ["SQLBolt", "https://sqlbolt.com"],
          ["MySQL: Data types", "https://dev.mysql.com/doc/refman/8.4/en/data-types.html"]
        ]
      },
      {
        title: "SELECT",
        desc: "WHERE, ORDER BY, LIMIT, агрегаты, GROUP BY/HAVING, подзапросы.",
        practice: "Напиши 10 запросов с WHERE, ORDER BY, GROUP BY и HAVING по учебной базе.",
        checkpoint: "Запросы дают ожидаемый результат без подсматривания в шпаргалку.",
        resources: [
          ["SQLBolt: SELECT", "https://sqlbolt.com/lesson/select_queries_introduction"],
          ["MySQL: SELECT", "https://dev.mysql.com/doc/refman/8.4/en/select.html"]
        ]
      },
      {
        title: "JOIN",
        desc: "INNER/LEFT/RIGHT, соединение нескольких таблиц, агрегация связанных данных.",
        practice: "Собери список новелл с автором и числом глав через JOIN и GROUP BY.",
        checkpoint: "LEFT JOIN не теряет новеллы без глав, а COUNT не удваивается из-за связи.",
        resources: [
          ["SQLBolt: JOINs", "https://sqlbolt.com/lesson/select_queries_with_joins"],
          ["MySQL: JOIN", "https://dev.mysql.com/doc/refman/8.4/en/join.html"]
        ]
      },
      {
        title: "Изменение данных",
        desc: "INSERT/UPDATE/DELETE, transactions, ACID, откат при ошибке.",
        practice: "Оберни перенос главы и обновление счётчика в транзакцию с откатом при ошибке.",
        checkpoint: "При сбое данные не остаются частично изменёнными.",
        resources: [
          ["SQLBolt: Modifying data", "https://sqlbolt.com/lesson/inserting_rows"],
          ["MySQL: Transactions", "https://dev.mysql.com/doc/refman/8.4/en/commit.html"]
        ]
      },
      {
        title: "Индексы",
        desc: "B-tree, составные индексы, EXPLAIN, почему индекс может замедлить запись.",
        practice: "Добавь индекс под запрос поиска и сравни план EXPLAIN до и после.",
        checkpoint: "Понимаешь, почему индекс ускорил запрос или почему оптимизатор его не выбрал.",
        resources: [
          ["Use The Index, Luke", "https://use-the-index-luke.com"],
          ["MySQL: EXPLAIN", "https://dev.mysql.com/doc/refman/8.4/en/explain.html"]
        ]
      },
      {
        title: "Нормализация",
        desc: "1NF–3NF, когда денормализация оправдана, именование таблиц и колонок.",
        practice: "Приведи таблицу жанров к третьей нормальной форме и вынеси повторяющиеся данные.",
        checkpoint: "Нет дублей и аномалий обновления, а денормализация осознанна.",
        resources: [
          ["Database normalization (Microsoft)", "https://learn.microsoft.com/en-us/office/troubleshoot/access/database-normalization-description"],
          ["SQLBolt", "https://sqlbolt.com"]
        ]
      },
      {
        title: "N+1",
        desc: "Проблема запросов в цикле и концепция eager loading — позже пригодится в Eloquent.",
        practice: "Смоделируй N+1 на чистом PHP/SQL и исправь его одним JOIN или предзагрузкой.",
        checkpoint: "Число запросов не растёт линейно с числом новелл.",
        resources: [
          ["Laravel: Eager loading", "https://laravel.com/docs/eloquent-relationships#eager-loading"],
          ["freeCodeCamp: N+1", "https://www.freecodecamp.org/news/n-plus-one-query-problem/"]
        ]
      },
      {
        title: "MySQL и SQLite",
        desc: "Различия, типы, GUI-клиенты, дампы и восстановление.",
        practice: "Сделай дамп базы, восстанови его в чистую БД и сравни поведение с SQLite.",
        checkpoint: "Данные восстановились без ошибок, а различия диалектов понятны.",
        resources: [
          ["MySQL docs", "https://dev.mysql.com/doc/"],
          ["SQLite docs", "https://www.sqlite.org/docs.html"]
        ]
      },
      {
        title: "Redis",
        desc: "Строки, хеши, списки, множества, TTL, кэширование, сессии и очереди, инвалидация.",
        practice: "Закэшируй список новелл с TTL и инвалидируй кэш при изменении данных.",
        checkpoint: "Кэш не отдаёт устаревшие данные дольше TTL и не ломает приложение при падении Redis.",
        resources: [
          ["Redis: Data types", "https://redis.io/docs/latest/develop/data-types/"],
          ["Redis: Caching", "https://redis.io/docs/latest/develop/use/patterns/"]
        ]
      }
    ],
    practice: [
      "Спроектируй схему FLIB: users, novels, chapters, genres, tags, comments, reviews, likes, bookmarks, follows, teams.",
      "Напиши 20 SQL-запросов, заполни данными и проверь планы через EXPLAIN."
    ],
    checkpoint: [
      "Схема без дублирования и с адекватными индексами.",
      "Объяснить, где будет N+1 и как его избежать.",
      "Понимать, какие данные логично держать в Redis."
    ],
    resources: [
      ["SQLBolt", "https://sqlbolt.com"],
      ["Use The Index, Luke", "https://use-the-index-luke.com"],
      ["MySQL docs", "https://dev.mysql.com/doc/"],
      ["Redis docs", "https://redis.io/docs/latest/"]
    ]
  },
{
    n: 7, key: "s7", group: "Бэкенд",
    title: "Laravel: сердце платформы",
    lead: "Самый большой этап. Laravel даёт маршруты, ORM, авторизацию, очереди и десятки инструментов. Учись не «магии», а слоям: HTTP → контроллер → сервис → модель → БД.",
    hours: 130,
    tech: ["Laravel 13", "Eloquent", "Breeze", "Sanctum", "Policies", "Queues", "Blade"],
    learn: [
      {
        title: "Основы Laravel",
        desc: "Установка, структура, .env, config, artisan, жизненный цикл запроса.",
        practice: "Установи Laravel, изучи структуру папок, запусти сервер и выведи список маршрутов через artisan route:list.",
        checkpoint: "Понимаешь, где живут маршруты, контроллеры, конфиг и .env, и что происходит с запросом.",
        resources: [
          ["Laravel: Installation", "https://laravel.com/docs/installation"],
          ["Laravel: Lifecycle", "https://laravel.com/docs/lifecycle"]
        ]
      },
      {
        title: "Маршруты и контроллеры",
        desc: "Route::get/post/resource, параметры, middleware, группы, именованные маршруты.",
        practice: "Сделай resource-маршруты новелл и вложенные маршруты глав с именами.",
        checkpoint: "URL и имена маршрутов соответствуют REST, а вложенность не создаёт конфликтов.",
        resources: [
          ["Laravel: Routing", "https://laravel.com/docs/routing"],
          ["Laravel: Controllers", "https://laravel.com/docs/controllers"]
        ]
      },
      {
        title: "Запросы и валидация",
        desc: "FormRequest, правила, сообщения, старые значения, обработка ошибок.",
        practice: "Сделай FormRequest для создания новеллы с пятью правилами и понятными сообщениями.",
        checkpoint: "Ошибки возвращаются к полям, старые значения сохраняются, а невалидные данные не попадают в БД.",
        resources: [
          ["Laravel: Validation", "https://laravel.com/docs/validation"],
          ["Laravel: Form requests", "https://laravel.com/docs/validation#form-request-validation"]
        ]
      },
      {
        title: "Blade",
        desc: "Шаблоны, layouts, components, slots. Для Inertia понадобится меньше, но понимать нужно.",
        practice: "Сверстай layout и страницу новеллы на Blade-компонентах со слотами.",
        checkpoint: "Нет дублирования HTML, а layout и компоненты переиспользуются.",
        resources: [
          ["Laravel: Blade", "https://laravel.com/docs/blade"]
        ]
      },
      {
        title: "Eloquent",
        desc: "Модели, миграции, relationships, eager loading, casts, accessors, scopes.",
        practice: "Создай миграции и модели Novel, Chapter, User с отношениями и предзагрузкой.",
        checkpoint: "На странице каталога нет N+1, а связи описаны с обеих сторон.",
        resources: [
          ["Laravel: Eloquent", "https://laravel.com/docs/eloquent"],
          ["Laravel: Relationships", "https://laravel.com/docs/eloquent-relationships"]
        ]
      },
      {
        title: "Сиды и фабрики",
        desc: "Тестовые данные, faker, состояния, детерминированные сиды.",
        practice: "Заполни базу 20 новеллами и 100 главами через фабрики и сиды.",
        checkpoint: "migrate:fresh --seed работает с нуля и даёт одинаковый набор данных.",
        resources: [
          ["Laravel: Seeding", "https://laravel.com/docs/seeding"],
          ["Laravel: Factories", "https://laravel.com/docs/eloquent-factories"]
        ]
      },
      {
        title: "Сервисный слой",
        desc: "Вынесение бизнес-логики из контроллеров, DI, контейнер, DTO. Так устроен FLIB.",
        practice: "Вынеси публикацию главы в ChapterService с DTO и событием.",
        checkpoint: "Контроллер тонкий, логика тестируется отдельно, зависимости внедряются.",
        resources: [
          ["Laravel: Service container", "https://laravel.com/docs/container"],
          ["Laravel: Service providers", "https://laravel.com/docs/providers"]
        ]
      },
      {
        title: "Авторизация",
        desc: "Breeze, сессии, Sanctum, сброс пароля, подтверждение email, policies/gates, роли.",
        practice: "Настрой Breeze, роли и policy: автор редактирует только свои новеллы.",
        checkpoint: "Чужой пользователь получает 403, а гость — редирект на вход.",
        resources: [
          ["Laravel: Authentication", "https://laravel.com/docs/authentication"],
          ["Laravel: Authorization", "https://laravel.com/docs/authorization"],
          ["Laravel: Sanctum", "https://laravel.com/docs/sanctum"]
        ]
      },
      {
        title: "События и очереди",
        desc: "Events/listeners, jobs, retries, failed jobs, scheduler, notifications, mail.",
        practice: "Отправь уведомление в очередь после публикации главы и настрой retry.",
        checkpoint: "Воркер обрабатывает job, failed job виден, повтор не создаёт дубликаты.",
        resources: [
          ["Laravel: Queues", "https://laravel.com/docs/queues"],
          ["Laravel: Events", "https://laravel.com/docs/events"],
          ["Laravel: Scheduling", "https://laravel.com/docs/scheduling"]
        ]
      },
      {
        title: "Кэш и файлы",
        desc: "Cache, Redis, filesystem disks, загрузка обложек, image handling.",
        practice: "Загрузи обложку в storage, отдай её по URL и закэшируй каталог на пять минут.",
        checkpoint: "Файл доступен, кэш инвалидируется при изменении, а загрузка проверяется.",
        resources: [
          ["Laravel: File storage", "https://laravel.com/docs/filesystem"],
          ["Laravel: Cache", "https://laravel.com/docs/cache"]
        ]
      },
      {
        title: "Локализация и время",
        desc: "lang-файлы, часовые пояса, форматирование дат.",
        practice: "Вынеси строки в lang-файлы, настрой часовой пояс и локализованные даты.",
        checkpoint: "Переключение языка меняет интерфейс, а даты не сдвигаются.",
        resources: [
          ["Laravel: Localization", "https://laravel.com/docs/localization"],
          ["Carbon", "https://carbon.nesbot.com/"]
        ]
      },
      {
        title: "Логи и ошибки",
        desc: "Каналы логов, Pail, обработка исключений, понятные сообщения пользователю.",
        practice: "Настрой канал логов, залогируй ошибку с контекстом и проверь её в Pail.",
        checkpoint: "Ошибку можно найти по пользователю и запросу, а пользователь видит понятное сообщение.",
        resources: [
          ["Laravel: Logging", "https://laravel.com/docs/logging"],
          ["Laravel: Error handling", "https://laravel.com/docs/errors"]
        ]
      },
      {
        title: "Тесты",
        desc: "Feature-тесты CRUD и авторизации, RefreshDatabase, фабрики.",
        practice: "Напиши feature-тесты на создание новеллы и запрет редактирования чужой.",
        checkpoint: "Тесты идут на SQLite in-memory, не зависят от порядка и падают при регрессии.",
        resources: [
          ["Laravel: Testing", "https://laravel.com/docs/testing"],
          ["Laravel: HTTP tests", "https://laravel.com/docs/http-tests"],
          ["Laravel: Database testing", "https://laravel.com/docs/database-testing"]
        ]
      }
    ],
    practice: [
      "Собери MVP платформы: регистрация/вход, роли, каталог новелл, карточка, главы, публикация, закладки, минимальная админка.",
      "Бизнес-логику вынеси в сервисы, доступ — через policies."
    ],
    checkpoint: [
      "Полный CRUD с авторизацией и валидацией.",
      "Работающая очередь и scheduled-задача.",
      "20+ осмысленных тестов.",
      "Объяснить контейнер и зачем сервисный слой."
    ],
    resources: [
      ["Laravel docs", "https://laravel.com/docs"],
      ["Laravel Bootcamp", "https://bootcamp.laravel.com"],
      ["Laracasts: курсы по Laravel", "https://laracasts.com/topics/laravel"],
      ["30 Days to Learn Laravel", "https://laracasts.com/series/30-days-to-learn-laravel-11"]
    ]
  },
  {
    n: 8, key: "s8", group: "Связка",
    title: "Inertia.js: Laravel + Vue без API-боли",
    lead: "FLIB — это Inertia-приложение: серверный роутинг Laravel и SPA-интерфейс Vue без ручного API. Этап учит связывать два мира так, чтобы не писать fetch на каждый чих.",
    hours: 60,
    tech: ["Inertia 2", "Vue", "Ziggy", "useForm", "Breeze", "Vite"],
    learn: [
      {
        title: "Как работает Inertia",
        desc: "Протокол, X-Inertia, ответы-страницы, отсутствие отдельного API, плюсы и ограничения.",
        practice: "Нарисуй схему запроса Inertia: браузер → Laravel → props → Vue и обратно.",
        checkpoint: "Объясняешь, почему не нужен отдельный API и в чём ограничения подхода.",
        resources: [
          ["Inertia: How it works", "https://inertiajs.com/how-it-works"],
          ["Inertia: Protocol", "https://inertiajs.com/the-protocol"]
        ]
      },
      {
        title: "Настройка",
        desc: "Laravel + Vite + Vue, root template, middleware, resolve страниц.",
        practice: "Подключи Inertia к Laravel, Vue и Vite и сделай первую страницу с props.",
        checkpoint: "Страница открывается без перезагрузки и получает данные с сервера.",
        resources: [
          ["Inertia: Server-side setup", "https://inertiajs.com/server-side-setup"],
          ["Inertia: Client-side setup", "https://inertiajs.com/client-side-setup"]
        ]
      },
      {
        title: "Страницы и layout",
        desc: "Pages, persistent layout, вложенные layout, props, shared data, usePage.",
        practice: "Сделай persistent layout с навигацией и общим auth-пользователем.",
        checkpoint: "Layout не перемонтируется при переходах, а shared data доступна на всех страницах.",
        resources: [
          ["Inertia: Pages", "https://inertiajs.com/pages"],
          ["Inertia: Layouts", "https://inertiajs.com/pages#persistent-layouts"]
        ]
      },
      {
        title: "Ссылки и навигация",
        desc: "Link, router.visit, replace/preserveState/preserveScroll, prefetch.",
        practice: "Добавь Link с preserveScroll на фильтрах каталога.",
        checkpoint: "Фильтры меняют URL без потери скролла и с сохранением состояния.",
        resources: [
          ["Inertia: Links", "https://inertiajs.com/links"],
          ["Inertia: Manual visits", "https://inertiajs.com/manual-visits"]
        ]
      },
      {
        title: "Формы",
        desc: "useForm, submit, ошибки валидации, прогресс, сброс, файлы.",
        practice: "Сделай форму главы через useForm с ошибками Laravel и индикатором отправки.",
        checkpoint: "Ошибки отображаются у полей, кнопка блокируется, данные не дублируются.",
        resources: [
          ["Inertia: Forms", "https://inertiajs.com/forms"]
        ]
      },
      {
        title: "Частичные загрузки",
        desc: "Only/except, lazy и deferred props, клики без перезагрузки.",
        practice: "Обнови только счётчик комментариев через only и проверь ответ в Network.",
        checkpoint: "В Network видно частичный ответ Inertia, а страница не перезагружается.",
        resources: [
          ["Inertia: Partial reloads", "https://inertiajs.com/partial-reloads"],
          ["Inertia: Deferred props", "https://inertiajs.com/deferred-props"]
        ]
      },
      {
        title: "Авторизация",
        desc: "Auth-поток Breeze, flash-сообщения, редиректы, 403/404 страницы.",
        practice: "Закрой кабинет автора middleware и покажи flash после входа.",
        checkpoint: "Гость редиректится, сообщение показывается один раз, 403 не выглядит как баг.",
        resources: [
          ["Inertia: Authentication", "https://inertiajs.com/authentication"],
          ["Inertia: Authorization", "https://inertiajs.com/authorization"]
        ]
      },
      {
        title: "Ziggy",
        desc: "Именованные маршруты в JS, параметры, генерация URL.",
        practice: "Используй route() в Vue для трёх именованных маршрутов.",
        checkpoint: "URL не хардкодятся в компонентах, а параметры передаются явно.",
        resources: [
          ["Ziggy docs", "https://github.com/tighten/ziggy"]
        ]
      },
      {
        title: "Файлы",
        desc: "Загрузка обложек, превью, прогресс, валидация на сервере.",
        practice: "Загрузи обложку через Inertia-форму с превью и серверной валидацией.",
        checkpoint: "Файл сохраняется, ошибки размера и типа показываются, имя не ломает URL.",
        resources: [
          ["Inertia: File uploads", "https://inertiajs.com/file-uploads"]
        ]
      },
      {
        title: "SEO и мета",
        desc: "Title/meta через Head, Open Graph, обработка ошибок.",
        practice: "Настрой Head title/description для страниц новеллы и главы, проверь 404.",
        checkpoint: "Заголовки уникальны, Open Graph заполнен, страницы ошибок выглядят как часть продукта.",
        resources: [
          ["Inertia: Title & meta", "https://inertiajs.com/title-and-meta"],
          ["Inertia: Error handling", "https://inertiajs.com/error-handling"]
        ]
      }
    ],
    practice: [
      "Переведи MVP на Inertia: кабинет автора с формами создания и редактирования, ридер, админ-таблицы с фильтрами.",
      "Все переходы — через Inertia, без ручных API-контроллеров."
    ],
    checkpoint: [
      "Полный CRUD-цикл через Inertia с валидацией.",
      "Понимаешь, когда partial reload реально нужен.",
      "Нет дублирования API и серверных роутов."
    ],
    resources: [
      ["Inertia.js docs", "https://inertiajs.com"],
      ["Laravel Breeze docs", "https://laravel.com/docs/starter-kits"],
      ["Ziggy docs", "https://github.com/tighten/ziggy"],
      ["Inertia: формы", "https://inertiajs.com/forms"]
    ]
  },
  {
    n: 9, key: "s9", group: "Качество",
    title: "Тесты, качество кода и безопасность",
    lead: "Код, который никто не проверяет, гниёт. Тесты, статический анализ, CI и базовая безопасность — то, что отличает учебный проект от продукта.",
    hours: 60,
    tech: ["Pest", "PHPStan", "Pint", "ESLint", "GitHub Actions", "OWASP", "CSP"],
    learn: [
      {
        title: "Пирамида тестов",
        desc: "Unit vs feature, что тестировать, а что нет, скорость и надёжность.",
        practice: "Составь карту тестов проекта: unit, feature, e2e и список того, что не тестируем.",
        checkpoint: "Понимаешь, почему большинство тестов — feature, а unit не дублируют фреймворк.",
        resources: [
          ["Martin Fowler: Test pyramid", "https://martinfowler.com/articles/practical-test-pyramid.html"],
          ["Laravel: Testing", "https://laravel.com/docs/testing"]
        ]
      },
      {
        title: "Pest",
        desc: "Синтаксис, expectations, datasets, hooks, Laravel-плагин, RefreshDatabase.",
        practice: "Напиши пять тестов с expectations, dataset и beforeEach.",
        checkpoint: "Тесты читаются как спецификация и не зависят от порядка запуска.",
        resources: [
          ["Pest docs", "https://pestphp.com/docs/installation"],
          ["Pest: Laravel plugin", "https://pestphp.com/docs/plugins/laravel"]
        ]
      },
      {
        title: "Тесты сценариев",
        desc: "Авторизация, policies, валидация, очереди, уведомления, граничные случаи.",
        practice: "Покрой публикацию главы, права доступа и валидацию feature-тестами.",
        checkpoint: "Критические пути защищены от регрессии, а негативные сценарии тоже проверены.",
        resources: [
          ["Laravel: HTTP tests", "https://laravel.com/docs/http-tests"],
          ["Laravel: Authorization tests", "https://laravel.com/docs/authorization#testing"]
        ]
      },
      {
        title: "PHPStan",
        desc: "Level 7, baseline, generics, типизация массивов; Pint для стиля.",
        practice: "Запусти PHPStan level 7 и убери десять ошибок без добавления в baseline.",
        checkpoint: "Analyse проходит, baseline не растёт, а типы описывают реальные данные.",
        resources: [
          ["PHPStan: Getting started", "https://phpstan.org/user-guide/getting-started"],
          ["Larastan", "https://github.com/larastan/larastan"]
        ]
      },
      {
        title: "Фронтенд-качество",
        desc: "ESLint, Prettier, vue-tsc, Vitest для composables и компонентов.",
        practice: "Настрой vue-tsc, ESLint и Prettier, добавь Vitest для одного composable.",
        checkpoint: "Одна команда проверяет типы, стиль и тесты фронтенда.",
        resources: [
          ["ESLint", "https://eslint.org/docs/latest/"],
          ["Vitest", "https://vitest.dev/guide/"],
          ["vue-tsc", "https://github.com/vuejs/language-tools"]
        ]
      },
      {
        title: "CI",
        desc: "GitHub Actions: тесты, линтеры, сборка на каждый PR, кэш зависимостей.",
        practice: "Сделай workflow с тестами, линтерами, сборкой и кэшем зависимостей.",
        checkpoint: "PR с красным CI нельзя смержить, а пайплайн воспроизводится локально.",
        resources: [
          ["GitHub Actions: Quickstart", "https://docs.github.com/en/actions/quickstart"],
          ["Laravel: CI example", "https://github.com/laravel/.github"]
        ]
      },
      {
        title: "OWASP Top 10",
        desc: "XSS, CSRF, SQLi, mass assignment, IDOR, небезопасные загрузки, SSRF.",
        practice: "Пройди чеклист OWASP по своему проекту и заведи issue на каждую найденную дыру.",
        checkpoint: "Нет критичных пунктов без плана исправления, а риск каждого понятен.",
        resources: [
          ["OWASP Top 10", "https://owasp.org/www-project-top-ten/"]
        ]
      },
      {
        title: "Защита Laravel",
        desc: "Экранирование Blade, CSRF-токены, policies, rate limiting, подписанные URL.",
        practice: "Добавь rate limit на логин, policy на комментарии и проверь CSRF-защиту.",
        checkpoint: "Атаки из чеклиста не проходят, а легитимные сценарии не ломаются.",
        resources: [
          ["Laravel: Security", "https://laravel.com/docs/security"],
          ["Laravel: CSRF", "https://laravel.com/docs/csrf"],
          ["Laravel: Rate limiting", "https://laravel.com/docs/routing#rate-limiting"]
        ]
      },
      {
        title: "Контент и CSP",
        desc: "HTML Purifier для пользовательского HTML, CSP-заголовки, безопасные ссылки.",
        practice: "Очисти HTML комментария через Purifier и включи CSP в report-only режиме.",
        checkpoint: "Скрипт в комментарии не выполняется, а CSP не ломает нужные ресурсы.",
        resources: [
          ["HTML Purifier", "http://htmlpurifier.org/"],
          ["MDN: CSP", "https://developer.mozilla.org/ru/docs/Web/HTTP/CSP"]
        ]
      },
      {
        title: "Секреты и бэкапы",
        desc: ".env, менеджер секретов, ротация ключей, резервные копии и проверка восстановления.",
        practice: "Проверь .env и историю git, включи secret scanning и восстанови бэкап.",
        checkpoint: "Секретов в git нет, а бэкап реально восстанавливается на чистом окружении.",
        resources: [
          ["GitHub: Secret scanning", "https://docs.github.com/en/code-security/secret-scanning"],
          ["Laravel: Encryption", "https://laravel.com/docs/encryption"]
        ]
      }
    ],
    practice: [
      "Покрой тестами регистрацию, публикацию главы и права доступа. Настрой GitHub Actions.",
      "Пройди чеклист OWASP и исправь найденное. Добавь Purifier и CSP."
    ],
    checkpoint: [
      "CI зелёный на каждом PR.",
      "Ключевые сценарии покрыты feature-тестами.",
      "Можешь объяснить каждую защиту и её ограничения."
    ],
    resources: [
      ["Pest docs", "https://pestphp.com/docs/installation"],
      ["PHPStan docs", "https://phpstan.org/user-guide/getting-started"],
      ["OWASP Top 10", "https://owasp.org/www-project-top-ten/"],
      ["Laravel security docs", "https://laravel.com/docs/security"],
      ["GitHub Actions docs", "https://docs.github.com/actions"]
    ]
  },
{
    n: 10, key: "s10", group: "Качество",
    title: "Docker, сервер и деплой",
    lead: "Локально работает — не значит готово. Docker делает окружение воспроизводимым, а деплой на VPS учит видеть проект целиком: nginx, PHP-FPM, БД, Redis, очереди, HTTPS и бэкапы.",
    hours: 45,
    tech: ["Docker", "Compose", "nginx", "PHP-FPM", "VPS", "HTTPS", "Supervisord"],
    learn: [
      {
        title: "Docker",
        desc: "Образы, контейнеры, слои, Dockerfile, multi-stage build, тома и сети.",
        practice: "Собери образ для Laravel, запусти контейнер и зайди внутрь через docker exec.",
        checkpoint: "Понимаешь разницу image, container и volume и не путаешь их в командах.",
        resources: [
          ["Docker: Get started", "https://docs.docker.com/get-started/"],
          ["Dockerfile reference", "https://docs.docker.com/reference/dockerfile/"]
        ]
      },
      {
        title: "Compose",
        desc: "Сервисы, env, depends_on, healthcheck, профили, общие сети.",
        practice: "Опиши app, db и redis в compose с healthcheck и переменными окружения.",
        checkpoint: "docker compose up поднимает всё одной командой без ручных шагов.",
        resources: [
          ["Docker Compose", "https://docs.docker.com/compose/"]
        ]
      },
      {
        title: "nginx + PHP-FPM",
        desc: "Server blocks, fastcgi_pass, статика, gzip, кэширование, лимиты.",
        practice: "Настрой server block, fastcgi и статику, проверь ответы 404 и 500.",
        checkpoint: "PHP выполняется через FPM, статика отдаётся nginx, ошибки не раскрывают пути.",
        resources: [
          ["nginx: Beginner's guide", "https://nginx.org/en/docs/beginners_guide.html"],
          ["PHP-FPM", "https://www.php.net/manual/ru/install.fpm.php"]
        ]
      },
      {
        title: "Supervisord",
        desc: "Queue worker и scheduler внутри контейнера, автоперезапуск.",
        practice: "Запусти queue worker и scheduler под supervisord и убей процесс, чтобы проверить перезапуск.",
        checkpoint: "Процессы поднимаются сами, логируются и не плодят дубликаты.",
        resources: [
          ["Supervisord", "http://supervisord.org/"]
        ]
      },
      {
        title: "MySQL/Redis в контейнерах",
        desc: "Persistence, healthcheck, пароли, volumes.",
        practice: "Добавь volume, healthcheck и пароли для MySQL и Redis.",
        checkpoint: "Данные переживают перезапуск контейнеров, а без healthcheck сервис не стартует зря.",
        resources: [
          ["Docker: MySQL", "https://hub.docker.com/_/mysql"],
          ["Docker: Redis", "https://hub.docker.com/_/redis"]
        ]
      },
      {
        title: "Конфигурация production",
        desc: "APP_ENV, config/route cache, optimize, права на storage, логи.",
        practice: "Собери production-образ, включи config/route cache и optimize, выключи debug.",
        checkpoint: "APP_DEBUG=false, ошибки не показывают стек, а конфиг закэширован.",
        resources: [
          ["Laravel: Deployment", "https://laravel.com/docs/deployment"],
          ["Laravel: Optimization", "https://laravel.com/docs/deployment#optimization"]
        ]
      },
      {
        title: "VPS и SSH",
        desc: "Пользователи, ключи, firewall, обновления, домен и DNS.",
        practice: "Создай пользователя, настрой ключи и firewall, отключи вход root по паролю.",
        checkpoint: "SSH по паролю закрыт, открыты только нужные порты, обновления ставятся.",
        resources: [
          ["DigitalOcean: SSH setup", "https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-22-04"],
          ["UFW", "https://help.ubuntu.com/community/UFW"]
        ]
      },
      {
        title: "HTTPS",
        desc: "Let's Encrypt, автопродление, редиректы, HSTS.",
        practice: "Выпусти сертификат Let's Encrypt и настрой автоматическое обновление.",
        checkpoint: "HTTP редиректит на HTTPS, сертификат валиден и обновляется без простоя.",
        resources: [
          ["Certbot", "https://certbot.eff.org/"],
          ["Let's Encrypt", "https://letsencrypt.org/ru/"]
        ]
      },
      {
        title: "Мониторинг и логи",
        desc: "Pail, journalctl, uptime-мониторинг, алерты, дисковое пространство.",
        practice: "Настрой uptime-проверку, внешний лог и алерт на диск или 500-е ошибки.",
        checkpoint: "Падение замечается без ручной проверки, а логи хватает для диагностики.",
        resources: [
          ["Laravel: Logging", "https://laravel.com/docs/logging"],
          ["Laravel: Pail", "https://laravel.com/docs/logging#pail"]
        ]
      },
      {
        title: "Бэкапы",
        desc: "Дамп БД, файлы, ротация, восстановление на чистом окружении.",
        practice: "Настрой ежедневный дамп БД и файлов с ротацией и восстанови его на чистой машине.",
        checkpoint: "Восстановление укладывается в 30 минут и не требует ручных догадок.",
        resources: [
          ["spatie/laravel-backup", "https://spatie.be/docs/laravel-backup"],
          ["MySQL: mysqldump", "https://dev.mysql.com/doc/refman/8.4/en/mysqldump.html"]
        ]
      }
    ],
    practice: [
      "Собери docker-compose для проекта и подними его на VPS с доменом и HTTPS.",
      "Настрой очередь и cron, сделай бэкап и восстанови его на чистой машине."
    ],
    checkpoint: [
      "Одна команда поднимает проект с нуля.",
      "Сайт доступен по HTTPS, очередь обрабатывает задачи.",
      "Бэкап реально восстанавливается.",
      "Понимаешь каждый контейнер и порт."
    ],
    resources: [
      ["Docker docs", "https://docs.docker.com"],
      ["Laravel deployment", "https://laravel.com/docs/deployment"],
      ["nginx docs", "https://nginx.org/ru/docs/"],
      ["Let's Encrypt", "https://letsencrypt.org/ru/"],
      ["DigitalOcean tutorials", "https://www.digitalocean.com/community/tutorials"]
    ]
  },
  {
    n: 11, key: "s11", group: "Продукт",
    title: "Сборка FogrestRead: большой продукт",
    lead: "Теперь не учишь технологии, а строишь продукт. Разбей работу на спринты по 1–2 недели, после каждого — рабочая версия, тесты и деплой. Сверяйся с FLIB, но не копируй слепо: принимай решения сам.",
    hours: 220,
    tech: ["Laravel", "Vue", "Inertia", "MySQL", "Redis", "Docker", "Sprints"],
    learn: [
      {
        title: "Спринт 1 — MVP чтения",
        desc: "Регистрация, профиль, роли, каталог, новелла, главы, ридер с настройками, прогресс, закладки.",
        practice: "Сделай sprint 1 целиком: auth, каталог, новелла, глава, ридер и закладки.",
        checkpoint: "Пользователь проходит путь регистрация → чтение → возврат к сохранённому месту.",
        resources: [
          ["FLIB (ваш репозиторий)", "https://github.com/krade88/FLIB"],
          ["Laravel docs", "https://laravel.com/docs"]
        ]
      },
      {
        title: "Спринт 2 — Социальные функции",
        desc: "Комментарии деревом, лайки, спойлеры, рецензии, подписки, коллекции, поиск и фильтры.",
        practice: "Добавь комментарии деревом, лайки, рецензии, подписки, коллекции и поиск.",
        checkpoint: "Счётчики и уведомления не расходятся с БД после удаления и модерации.",
        resources: [
          ["Laravel: Relationships", "https://laravel.com/docs/eloquent-relationships"],
          ["Laravel: Notifications", "https://laravel.com/docs/notifications"]
        ]
      },
      {
        title: "Спринт 3 — Авторы и команды",
        desc: "Кабинет автора, черновики, планирование, версии глав, импорт, команды, роли, обсуждения, активность, статистика.",
        practice: "Сделай кабинет автора, черновики, версии, импорт, команды и ленту активности.",
        checkpoint: "Автор публикует главу, команда видит активность, а версии можно откатить.",
        resources: [
          ["Laravel: File storage", "https://laravel.com/docs/filesystem"],
          ["Laravel: Queues", "https://laravel.com/docs/queues"]
        ]
      },
      {
        title: "Спринт 4 — Админка",
        desc: "Дашборд, модерация, жалобы, пользователи и роли, очереди, настройки, кэш.",
        practice: "Сделай админку: пользователи, жалобы, скрытие контента, очереди и настройки.",
        checkpoint: "Модератор закрывает жалобу, действие логируется, а права не обходятся через URL.",
        resources: [
          ["Laravel: Authorization", "https://laravel.com/docs/authorization"],
          ["Laravel: Queues", "https://laravel.com/docs/queues"]
        ]
      },
      {
        title: "Спринт 5 — Полировка",
        desc: "Календарь, уведомления, тёмная тема, мобильный ридер манги, доступность, производительность, SEO.",
        practice: "Доведи мобильный ридер, тёмную тему, календарь, a11y и Lighthouse на ключевых страницах.",
        checkpoint: "Нет горизонтального скролла, Lighthouse 90+, а клавиатура проходит весь сценарий.",
        resources: [
          ["Lighthouse", "https://developer.chrome.com/docs/lighthouse/overview/"],
          ["WCAG quick reference", "https://www.w3.org/WAI/WCAG22/quickref/"]
        ]
      },
      {
        title: "Инженерные практики",
        desc: "ADR, code review, changelog, issue-трекер, релизы, тесты на новую логику, деплой после спринта.",
        practice: "Введи ADR, changelog, code review и релизы по спринтам.",
        checkpoint: "У каждого решения есть запись, у релиза — тег, у фичи — тест.",
        resources: [
          ["Shape Up", "https://basecamp.com/shapeup"],
          ["Conventional Commits", "https://www.conventionalcommits.org/ru/"],
          ["Keep a Changelog", "https://keepachangelog.com/ru/"]
        ]
      },
      {
        title: "Работа с чужим кодом",
        desc: "Читай FLIB: сервисы, policies, миграции, компоненты. Сравнивай со своим и выписывай решения.",
        practice: "Разбери один модуль FLIB: сервис, policy и тесты, затем повтори подход у себя.",
        checkpoint: "Можешь объяснить поток данных модуля и чем твоё решение отличается.",
        resources: [
          ["FLIB (ваш репозиторий)", "https://github.com/krade88/FLIB"],
          ["GitHub: Code navigation", "https://docs.github.com/en/repositories/working-with-files/using-files/navigating-code-on-github"]
        ]
      },
      {
        title: "Метрики качества",
        desc: "Lighthouse, покрытие ключевых сценариев, время ответа, N+1, размер бандла.",
        practice: "Сними TTFB, LCP, число запросов и размер бандла, заведи дашборд и baseline.",
        checkpoint: "Есть baseline и план улучшений, а метрики не ухудшаются от спринта к спринту.",
        resources: [
          ["web.dev: Core Web Vitals", "https://web.dev/articles/vitals"],
          ["Laravel Pulse", "https://laravel.com/docs/pulse"],
          ["Lighthouse", "https://developer.chrome.com/docs/lighthouse/overview/"]
        ]
      }
    ],
    practice: [
      "Веди проект как продукт: бэклог, спринты, демо в конце каждого, деплой.",
      "На финале пройди по сценариям FLIB и закрой пробелы."
    ],
    checkpoint: [
      "Все ключевые сценарии FLIB работают.",
      "Есть тесты, CI, деплой и документация.",
      "Ты можешь объяснить каждое архитектурное решение.",
      "Проект не стыдно показать в портфолио."
    ],
    resources: [
      ["FLIB (ваш репозиторий)", "https://github.com/krade88/FLIB"],
      ["Laravel docs", "https://laravel.com/docs"],
      ["Inertia docs", "https://inertiajs.com"],
      ["Shape Up (free)", "https://basecamp.com/shapeup"],
      ["Refactoring UI", "https://www.refactoringui.com"]
    ]
  },
  {
    n: 12, key: "s12", group: "Продукт",
    title: "Финиш: портфолио и выход на рынок",
    lead: "Финальный этап — упаковать результат. Код без истории и демо никто не увидит. Сделай так, чтобы проект можно было открыть, запустить и понять за 10 минут.",
    hours: 25,
    tech: ["README", "Демо", "Видео", "Интервью", "Портфолио"],
    learn: [
      {
        title: "README и документация",
        desc: "Скриншоты, стек, архитектура, запуск, переменные окружения, тесты, деплой.",
        practice: "Напиши README с запуском, скриншотами, архитектурой, тестами и деплоем.",
        checkpoint: "Новый человек запускает проект по шагам и не задаёт вопросов.",
        resources: [
          ["Make a README", "https://www.makeareadme.com"],
          ["GitHub: About READMEs", "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"]
        ]
      },
      {
        title: "Демо",
        desc: "Рабочая ссылка, тестовые аккаунты, 2–3-минутное видео с ключевыми сценариями.",
        practice: "Запиши трёхминутное видео ключевых сценариев и выложи рабочее демо.",
        checkpoint: "Демо работает без твоего участия, а видео показывает продукт, а не код.",
        resources: [
          ["OBS Studio", "https://obsproject.com/"],
          ["Loom", "https://www.loom.com"]
        ]
      },
      {
        title: "История проекта",
        desc: "Чистые коммиты, issues, roadmap, changelog. Показывает инженерную зрелость.",
        practice: "Приведи коммиты к Conventional Commits, добавь CHANGELOG и roadmap.",
        checkpoint: "История читается как развитие продукта, а не как свалка правок.",
        resources: [
          ["Conventional Commits", "https://www.conventionalcommits.org/ru/"],
          ["Keep a Changelog", "https://keepachangelog.com/ru/"]
        ]
      },
      {
        title: "Самопрезентация",
        desc: "Уметь за 5 минут объяснить архитектуру, компромиссы, N+1, очереди, безопасность.",
        practice: "Запиши пятиминутный рассказ об архитектуре и компромиссах проекта.",
        checkpoint: "Укладываешься в пять минут и отвечаешь на пять вопросов по решениям.",
        resources: [
          ["STAR method", "https://www.themuse.com/advice/star-interview-method"],
          ["Tech Interview Handbook: resume", "https://www.techinterviewhandbook.org/resume/"]
        ]
      },
      {
        title: "Подготовка к интервью",
        desc: "Алгоритмы базово, SQL, HTTP, Laravel, Vue, system design для одной фичи.",
        practice: "Пройди 20 задач по SQL/HTTP/JS и три mock-интервью с записью.",
        checkpoint: "Решаешь базовые задачи без гугла и объясняешь решения вслух.",
        resources: [
          ["Tech Interview Handbook", "https://www.techinterviewhandbook.org"],
          ["System Design Primer", "https://github.com/donnemartin/system-design-primer"]
        ]
      },
      {
        title: "Куда расти",
        desc: "Observability, payments, мобильное приложение, AI-функции, масштабирование, open source.",
        practice: "Составь план на шесть месяцев: observability, платежи, мобильное приложение или AI.",
        checkpoint: "План конкретен, связан с целями и не начинается с «выучить всё».",
        resources: [
          ["roadmap.sh", "https://roadmap.sh"],
          ["System Design Primer", "https://github.com/donnemartin/system-design-primer"]
        ]
      }
    ],
    practice: [
      "Оформи портфолио-кейс: README, скриншоты, схема БД, демо, видео, список технологий и решений.",
      "Проведи 3 mock-интервью и собери фидбэк."
    ],
    checkpoint: [
      "Проект запускается по инструкции с чистой машины.",
      "Есть демо и видео.",
      "Ты защищаешь архитектурные решения уверенно."
    ],
    resources: [
      ["roadmap.sh", "https://roadmap.sh"],
      ["System Design Primer", "https://github.com/donnemartin/system-design-primer"],
      ["Tech Interview Handbook", "https://www.techinterviewhandbook.org"],
      ["FLIB (ваш репозиторий)", "https://github.com/krade88/FLIB"]
    ]
  }
];
const GROUPS = [
  { name: "Фундамент", color: "#8b5cf6" },
  { name: "Фронтенд", color: "#22d3ee" },
  { name: "Бэкенд", color: "#34d399" },
  { name: "Связка", color: "#fbbf24" },
  { name: "Качество", color: "#fb7185" },
  { name: "Продукт", color: "#60a5fa" }
];
