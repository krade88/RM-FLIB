/* ==========================================================================
   RM-FLIB — roadmap content
   17 stages, 176 topics. Each topic contains:
   practice, checkpoint, resources and typical mistakes.
   Practice platforms and Russian alternatives are included
   in stage resources.
   ========================================================================== */

const STAGES = [
  {
    n: 0,
    key: "s0",
    group: "Фундамент",
    title: "Старт: веб, терминал и Git",
    lead: "Самый первый этап — не про код, а про среду. Разберись, как браузер общается с сервером, как работает терминал, как не потерять изменения в Git и как искать ответы, когда что-то сломалось. Это фундамент, на котором держатся все остальные этапы.",
    hours: 30,
    tech: [
      "Терминал",
      "Git",
      "GitHub",
      "HTTP",
      "DevTools",
      "VS Code",
      "Markdown",
      "Security"
    ],
    learn: [
      {
        title: "Как работает интернет",
        desc: "Клиент и сервер, DNS, IP, порты, HTTP/HTTPS, методы, статус-коды, заголовки, cookies. Цель — понимать, что происходит после ввода адреса.",
        practice: "Нарисуй схему пути запроса к /novels/42: DNS → TCP → HTTP → ответ сервера → рендер. Подпиши каждый шаг и объясни, где может возникнуть ошибка.",
        checkpoint: "Объясняешь без подсказок, что происходит между вводом URL и появлением страницы, и чем 404 отличается от 500.",
        mistakes: ["Путать DNS с HTTP и думать, что браузер «просто открывает файл на сервере».", "Считать 404 ошибкой сервера — это ответ клиенту о том, что ресурс не найден."],
        resources: [
          ["MDN: How the web works", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works"],
          ["MDN: HTTP overview", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"]
        ]
      },
      {
        title: "Браузер, DevTools и кэш",
        desc: "Вкладки Elements, Console, Network, Application, Sources. Как браузер кэширует файлы, хранит cookies и localStorage и почему изменения не видны.",
        practice: "Открой сайт, найди HTML-документ в Network, посмотри статус, заголовки и время. Найди закэшированный ресурс и проверь cookies/localStorage в Application.",
        checkpoint: "По Network и Application объясняешь, почему запрос упал, откуда взялся старый файл и где хранится состояние.",
        mistakes: ["Искать ошибку в CSS, когда в Network видно, что запрос вообще не выполнился.", "Забывать про кэш и смотреть старую версию файла после изменений."],
        resources: [
          ["Chrome DevTools", "https://developer.chrome.com/docs/devtools/"],
          ["MDN: HTTP caching", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching"]
        ]
      },
      {
        title: "Терминал и файловая система",
        desc: "Навигация по папкам, создание и удаление файлов, пути, переменные окружения, процессы. PowerShell на Windows и базовый bash пригодятся в Docker и на сервере.",
        practice: "Создай папку проекта, три файла, переименуй и перемести их, выведи содержимое. Задай переменную окружения и прочитай её в новом процессе.",
        checkpoint: "Свободно ходишь по файловой системе, понимаешь абсолютные и относительные пути и не боишься пробелов в путях.",
        mistakes: ["Не экранировать пробелы и кириллицу в путях.", "Запускать команды не в той папке и удивляться, что файл не найден."],
        resources: [
          ["MDN: Command line crash course", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"],
          ["PowerShell docs", "https://learn.microsoft.com/en-us/powershell/"]
        ]
      },
      {
        title: "Git: основы и история",
        desc: "Репозиторий, рабочая директория, staging, commit, log, status, diff, .gitignore. Как сохранять изменения и читать историю проекта.",
        practice: "Инициализируй репозиторий, сделай пять коммитов, посмотри историю и diff, добавь .gitignore и проверь, что лишние файлы не попадают в статус.",
        checkpoint: "Понимаешь разницу между рабочей директорией, индексом и коммитом и можешь объяснить, что делает каждая команда.",
        mistakes: ["Коммитить .env, node_modules и файлы IDE.", "Писать коммиты вида «fix» без объяснения, что изменилось."],
        resources: [
          ["Git Book (рус.)", "https://git-scm.com/book/ru/v2"],
          ["Git: gitignore", "https://git-scm.com/docs/gitignore"]
        ]
      },
      {
        title: "Git: ветки, конфликты и откат",
        desc: "Ветки, merge, rebase, конфликты, restore, reset, revert. Как экспериментировать безопасно и не бояться потерять работу.",
        practice: "Сделай две ветки с разными изменениями, слей их и специально вызови конфликт. Откати файл через restore и один коммит через revert.",
        checkpoint: "Разрешаешь конфликт вручную, понимаешь, чем reset отличается от revert, и можешь безопасно откатить изменение.",
        mistakes: ["Паниковать при конфликте и удалять репозиторий вместо разрешения.", "Делать rebase в общей ветке без согласования с командой."],
        resources: [
          ["Learn Git Branching", "https://learngitbranching.js.org/?locale=ru_RU"],
          ["Git: restore", "https://git-scm.com/docs/git-restore"]
        ]
      },
      {
        title: "GitHub и командная работа",
        desc: "Remote, push/pull, SSH-ключи, pull request, issues, review, защищённые ветки. Как работать так, чтобы не ломать main.",
        practice: "Запушь репозиторий на GitHub, создай отдельную ветку, открой pull request и опиши изменения так, чтобы ревьюер понял их без вопросов.",
        checkpoint: "Делаешь fork/branch/PR без подсказок, понимаешь, что такое remote и как подтянуть изменения из main.",
        mistakes: ["Работать напрямую в main без ветки и PR.", "Забывать подтянуть main перед созданием pull request."],
        resources: [
          ["GitHub Skills", "https://skills.github.com"],
          ["GitHub Flow", "https://docs.github.com/en/get-started/using-github/github-flow"]
        ]
      },
      {
        title: "VS Code и рабочее окружение",
        desc: "Рабочая область, расширения, форматирование, встроенный терминал, отладчик, поиск по проекту, сниппеты.",
        practice: "Настрой пять расширений, форматирование при сохранении, пользовательский сниппет и отладку простого JS-файла с breakpoint.",
        checkpoint: "Рабочее место настроено, отладчик останавливается на breakpoint и показывает значения переменных.",
        mistakes: ["Ставить десятки расширений, но не настроить форматирование и отладку.", "Игнорировать встроенный отладчик и отлаживать только console.log."],
        resources: [
          ["VS Code docs", "https://code.visualstudio.com/docs"],
          ["VS Code tips", "https://code.visualstudio.com/docs/getstarted/tips-and-tricks"]
        ]
      },
      {
        title: "Markdown, README и документация",
        desc: "README, issues, комментарии, конспекты. Умение объяснить решение — часть инженерной работы.",
        practice: "Напиши README для будущего проекта: описание, стек, установка, структура папок и один скриншот.",
        checkpoint: "README понятен человеку, который видит проект впервые и ничего о нём не знает.",
        mistakes: ["README без команды запуска и переменных окружения.", "Скриншоты без подписей и контекста."],
        resources: [
          ["Markdown Guide", "https://www.markdownguide.org"],
          ["GitHub: About READMEs", "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"]
        ]
      },
      {
        title: "Как искать ответы и читать ошибки",
        desc: "Чтение stack trace, формулировка проблемы, поиск по документации, Stack Overflow и issue-трекерам. Учись задавать вопрос так, чтобы на него можно было ответить.",
        practice: "Возьми реальную ошибку из консоли, сформулируй проблему в трёх предложениях и найди ответ в документации или обсуждении. Запиши ход мысли.",
        checkpoint: "Не копируешь первое решение, а понимаешь причину ошибки и можешь объяснить, почему выбранный фикс работает.",
        mistakes: ["Копировать решение со Stack Overflow без понимания и проверки версии.", "Игнорировать первые строки stack trace и читать только последнюю."],
        resources: [
          ["Stack Overflow: How to ask", "https://stackoverflow.com/help/how-to-ask"],
          ["MDN: Debugging HTML", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML"],
          ["freeCodeCamp: How to Google", "https://www.freecodecamp.org/news/how-to-google-like-a-pro/"]
        ]
      },
      {
        title: "Безопасность аккаунта и секретов",
        desc: "Менеджер паролей, 2FA, секреты не попадают в Git, .env в .gitignore, принцип минимальных прав.",
        practice: "Включи 2FA на GitHub, настрой менеджер паролей, проверь .gitignore и историю репозитория на случайные секреты.",
        checkpoint: "Секреты не попадают в git, доступы защищены, а при утечке понятно, что делать.",
        mistakes: ["Хранить токены и пароли прямо в коде или коммите.", "Использовать один пароль для GitHub, почты и хостинга."],
        resources: [
          ["GitHub: 2FA", "https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa"],
          ["GitHub: Secret scanning", "https://docs.github.com/en/code-security/secret-scanning"]
        ]
      }
    ],
    practice: [
      "Собери личную страницу-визитку на HTML/CSS и выложи на GitHub Pages.",
      "Заведи репозиторий с README, сделай 10 осмысленных коммитов, отдельную ветку и pull request.",
      "Нарисуй схему запроса URL → сервер и заведи конспект с командами терминала и Git."
    ],
    checkpoint: [
      "Объясняешь путь запроса от URL до ответа сервера.",
      "Делаешь commit/push, создаёшь ветку и решаешь конфликт без подсказок.",
      "Понимаешь, зачем нужен .env и почему секреты не коммитят."
    ],
    resources: [
      ["MDN: How the web works", "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works"],
      ["Git Book (рус.)", "https://git-scm.com/book/ru/v2"],
      ["GitHub Skills", "https://skills.github.com"],
      ["Learn Git Branching", "https://learngitbranching.js.org/?locale=ru_RU"],
      ["Stack Overflow: How to ask", "https://stackoverflow.com/help/how-to-ask"],
      ["Oh My Git!", "https://ohmygit.org/"],
      ["Command Line Challenge", "https://cmdchallenge.com/"]
    ]
  },
  {
    n: 1,
    key: "s1",
    group: "Фундамент",
    title: "HTML и CSS: от структуры до адаптивного интерфейса",
    lead: "HTML отвечает за смысл и структуру, CSS — за внешний вид. Здесь ты не просто выучишь теги и свойства, а научишься собирать интерфейс, который понятен браузеру, скринридеру и человеку на телефоне.",
    hours: 70,
    tech: [
      "HTML",
      "CSS",
      "Flexbox",
      "Grid",
      "Tailwind CSS",
      "Адаптив",
      "A11y",
      "Figma"
    ],
    learn: [
      {
        title: "Документ и структура HTML",
        desc: "doctype, html, head, meta, title, body, заголовки, списки, ссылки. Как из отдельных тегов получается логичный документ.",
        practice: "Сверстай скелет страницы новеллы: head с meta, header, main, article, aside, footer. Проверь через W3C-валидатор.",
        checkpoint: "Документ проходит валидатор, а его структуру можно понять с отключёнными стилями.",
        mistakes: ["Забывать viewport meta и потом удивляться мобильной вёрстке.", "Использовать div вместо заголовков и списков там, где они очевидны."],
        resources: [
          ["MDN: HTML basics", "https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Structuring_content"],
          ["web.dev: Semantic HTML", "https://web.dev/learn/html/semantic-html"]
        ]
      },
      {
        title: "Семантика и доступность",
        desc: "header/nav/main/section/article/footer, landmarks, alt, порядок заголовков, keyboard focus. Семантика помогает SEO, доступности и тебе самому.",
        practice: "Перепиши страницу так, чтобы по ней можно было пройти клавишей Tab, а скринридер читал заголовки и ссылки осмысленно.",
        checkpoint: "У страницы есть один h1, логичный порядок заголовков, alt у изображений и видимый focus.",
        mistakes: ["Делать кликабельные div вместо button и ссылок.", "Писать alt вида «картинка» или «изображение»."],
        resources: [
          ["web.dev: Learn Accessibility", "https://web.dev/learn/accessibility"],
          ["MDN: Accessibility", "https://developer.mozilla.org/ru/docs/Web/Accessibility"]
        ]
      },
      {
        title: "Изображения, медиа и таблицы",
        desc: "img, figure, figcaption, srcset, video/audio, table, caption, th. Когда таблица уместна, а когда это уже layout.",
        practice: "Добавь на страницу обложку с srcset, figure с подписью и таблицу характеристик с caption и th.",
        checkpoint: "Картинки не растягиваются, таблица читается на мобильном, а медиа не ломает layout.",
        mistakes: ["Растягивать изображение без aspect-ratio и получать скачки layout.", "Использовать table для вёрстки колонок."],
        resources: [
          ["MDN: Images", "https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Structuring_content/HTML_images"],
          ["MDN: Tables", "https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics"]
        ]
      },
      {
        title: "Формы и валидация",
        desc: "input всех типов, label, fieldset, required, pattern, autocomplete. Формы — основа регистрации, публикации глав и админки.",
        practice: "Сверстай форму регистрации с label, required, autocomplete, fieldset и блоком сообщений об ошибках.",
        checkpoint: "Форма заполняется с клавиатуры, браузер валидирует поля, а ошибки понятны без цвета.",
        mistakes: ["Использовать placeholder вместо label.", "Полагаться только на клиентскую валидацию и не проверять данные на сервере."],
        resources: [
          ["MDN: Forms guide", "https://developer.mozilla.org/ru/docs/Learn_web_development/Extensions/Forms"],
          ["web.dev: Forms", "https://web.dev/learn/forms"]
        ]
      },
      {
        title: "Каскад, специфичность и наследование",
        desc: "Селекторы, каскад, специфичность, наследование, слои, порядок правил. Почему одно правило побеждает другое.",
        practice: "Сверстай карточку новеллы и объясни, почему конкретное свойство победило. Перепиши конфликт без !important.",
        checkpoint: "Понимаешь специфичность и можешь предсказать, какое правило применится, не открывая DevTools.",
        mistakes: ["Воевать с CSS через !important и делать стили непредсказуемыми.", "Не понимать, почему правило не применилось, и добавлять ещё десять селекторов."],
        resources: [
          ["MDN: Cascade and inheritance", "https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts"],
          ["web.dev: The cascade", "https://web.dev/learn/css/the-cascade"]
        ]
      },
      {
        title: "Блочная модель, единицы и типографика",
        desc: "box-sizing, margin/padding/border, px/rem/em/%, line-height, font-size, контраст, читаемость. Основа аккуратного интерфейса.",
        practice: "Собери типографическую шкалу и карточку с box-sizing: border-box, проверь контраст и читаемость на мобильном.",
        checkpoint: "Отступы не «схлопываются» неожиданно, текст читается, а размеры не зависят от случайного родителя.",
        mistakes: ["Забывать box-sizing: border-box и считать ширину вручную.", "Делать слишком мелкий текст и низкий контраст."],
        resources: [
          ["MDN: Box model", "https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Styling_basics/Box_model"],
          ["web.dev: Typography", "https://web.dev/learn/css/typography"]
        ]
      },
      {
        title: "Flexbox",
        desc: "Главная и поперечная оси, justify-content, align-items, flex-wrap, flex-grow/shrink, gap. Одномерные раскладки: шапки, тулбары, карточки.",
        practice: "Сделай шапку сайта, панель фильтров и карточку с действиями на Flexbox, проверь перенос на узком экране.",
        checkpoint: "Можешь объяснить, где main axis, а где cross axis, и выбрать Flexbox осознанно.",
        mistakes: ["Путать главную и поперечную оси.", "Ставить flex: 1 всем элементам без понимания, что должно расти."],
        resources: [
          ["CSS-Tricks: Flexbox", "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"],
          ["Flexbox Froggy", "https://flexboxfroggy.com/#ru"]
        ]
      },
      {
        title: "Grid",
        desc: "grid-template-columns/rows, fr, minmax, repeat, auto-fit, grid-area, выравнивание. Двумерные раскладки: каталоги, дашборды, страницы.",
        practice: "Сделай каталог карточек на Grid с auto-fit/minmax и перестрой его под три ширины экрана.",
        checkpoint: "Выбираешь Grid для двумерной раскладки и объясняешь, почему не Flexbox.",
        mistakes: ["Использовать Grid для простого одномерного списка.", "Фиксировать все колонки в px и ломать адаптивность."],
        resources: [
          ["CSS-Tricks: Grid", "https://css-tricks.com/snippets/css/complete-guide-grid/"],
          ["Grid Garden", "https://cssgridgarden.com/#ru"]
        ]
      },
      {
        title: "Позиционирование, z-index и overflow",
        desc: "static/relative/absolute/fixed/sticky, stacking context, z-index, overflow, обрезка и скролл. Как делать модалки, тултипы и липкие панели.",
        practice: "Сделай липкую шапку, карточку с бейджем absolute и модальное окно без z-index 9999.",
        checkpoint: "Понимаешь, почему z-index не сработал, и не используешь абсолютное позиционирование для всей страницы.",
        mistakes: ["Строить весь layout на position: absolute.", "Создавать z-index: 9999 вместо понимания stacking context."],
        resources: [
          ["MDN: Positioning", "https://developer.mozilla.org/ru/docs/Learn_web_development/Core/CSS_layout/Positioning"],
          ["MDN: Stacking context", "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context"]
        ]
      },
      {
        title: "Адаптивность и mobile-first",
        desc: "Mobile-first, media queries, clamp(), min/max, responsive images, container queries. Как один интерфейс работает на 360 и 1440 px.",
        practice: "Сделай mobile-first страницу с тремя брейкпоинтами, clamp-типографикой и responsive-изображениями.",
        checkpoint: "На 360px нет горизонтального скролла, текст читается, а картинки не растягиваются.",
        mistakes: ["Делать desktop-first и потом чинить мобильную версию костылями.", "Проверять вёрстку только на своём мониторе."],
        resources: [
          ["web.dev: Responsive design", "https://web.dev/learn/design"],
          ["MDN: Media queries", "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_media_queries/Using_media_queries"]
        ]
      },
      {
        title: "Псевдоклассы, эффекты и тёмная тема",
        desc: "hover/focus/active/disabled, ::before/::after, transition, transform, @keyframes, CSS-переменные, prefers-reduced-motion, тёмная тема.",
        practice: "Добавь состояния кнопок, переход темы на CSS-переменных, анимацию появления карточек и проверь prefers-reduced-motion.",
        checkpoint: "Фокус всегда видим, анимации не ломают layout и отключаются для reduced motion.",
        mistakes: ["Убирать outline у фокуса без замены.", "Делать анимации, которые вызывают layout shift или мешают чтению."],
        resources: [
          ["MDN: Pseudo-classes", "https://developer.mozilla.org/ru/docs/Web/CSS/Pseudo-classes"],
          ["MDN: Using CSS custom properties", "https://developer.mozilla.org/ru/docs/Web/CSS/Using_CSS_custom_properties"],
          ["MDN: CSS animations", "https://developer.mozilla.org/ru/docs/Web/CSS/CSS_animations/Using_CSS_animations"],
          ["MDN: prefers-reduced-motion", "https://developer.mozilla.org/ru/docs/Web/CSS/@media/prefers-reduced-motion"]
        ]
      },
      {
        title: "Tailwind CSS",
        desc: "Utility-first подход, шкала отступов, варианты состояний и брейкпоинтов, @theme-токены, dark variant, сборка через Vite. Именно Tailwind используется в FLIB.",
        practice: "Перепиши одну секцию на Tailwind, настрой тему через @theme и добавь dark variant.",
        checkpoint: "Нет хаоса классов, сборка проходит, а стили выглядят консистентно на всех страницах.",
        mistakes: ["Сваливать десятки классов в одну строку без компонентов и повторного использования.", "Использовать arbitrary values вместо токенов темы."],
        resources: [
          ["Tailwind docs", "https://tailwindcss.com/docs"],
          ["Tailwind: Theme variables", "https://tailwindcss.com/docs/theme"]
        ]
      },
      {
        title: "Дизайн-основы и Figma",
        desc: "Ритм, сетка, иерархия, типографика, цвет, состояния компонентов. Как читать макет и не угадывать отступы.",
        practice: "Повтори экран каталога из Figma или хорошего референса и сравни свой результат со скриншотом.",
        checkpoint: "Иерархия, отступы и типографика выглядят цельно, а не как набор случайных блоков.",
        mistakes: ["Делать все элементы одного размера и веса.", "Копировать референс без понимания сетки и отступов."],
        resources: [
          ["Refactoring UI", "https://www.refactoringui.com"],
          ["Figma: Learn", "https://help.figma.com/hc/en-us/categories/360002051613-Learn-Figma"],
          ["web.dev: Learn Design", "https://web.dev/learn/design"]
        ]
      }
    ],
    practice: [
      "Сверстай лендинг книжной платформы: шапка, hero, каталог карточек, преимущества, футер.",
      "Добавь семантическую форму, тёмную тему, адаптив под 360/768/1440 px и прогони Lighthouse.",
      "Проверь страницу клавиатурой и исправь три проблемы доступности."
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
      ["Grid Garden", "https://cssgridgarden.com/#ru"],
      ["Frontend Mentor", "https://www.frontendmentor.io/challenges"],
      ["freeCodeCamp: Responsive Web Design", "https://www.freecodecamp.org/learn/2022/responsive-web-design/"],
      ["Tailwind CSS на русском", "https://tailwindcss.ru/"]
    ]
  },
  {
    n: 2,
    key: "s2",
    group: "Фундамент",
    title: "JavaScript: от синтаксиса до интерфейса",
    lead: "JavaScript оживляет интерфейс: реагирует на клики, грузит данные, хранит настройки. Здесь важно не заучить синтаксис, а понять, как выполняется код, как устроены события и почему асинхронность ломает мозг.",
    hours: 90,
    tech: [
      "JavaScript",
      "DOM",
      "Events",
      "Fetch",
      "Async",
      "Modules",
      "Storage",
      "DevTools"
    ],
    learn: [
      {
        title: "Как выполняется JavaScript",
        desc: "Движок, стек вызовов, куча, single-thread, Web APIs, очередь задач. Почему JS не выполняется параллельно, но кажется асинхронным.",
        practice: "Нарисуй схему выполнения короткого скрипта: синхронный код → Promise → setTimeout. Объясни порядок вывода.",
        checkpoint: "Объясняешь, что такое call stack и почему тяжёлый цикл блокирует интерфейс.",
        mistakes: ["Думать, что JavaScript выполняет несколько функций одновременно.", "Путать стек вызовов и кучу."],
        resources: [
          ["javascript.info: Introduction", "https://learn.javascript.ru/intro"],
          ["MDN: Execution model", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model"]
        ]
      },
      {
        title: "Переменные, типы и приведение",
        desc: "let/const, примитивы, объекты, null/undefined, NaN, приведение типов, == и ===. Как не ловить баги на ровном месте.",
        practice: "Реши 15 задач на типы и приведение, выпиши пять неочевидных примеров и объясни каждый.",
        checkpoint: "Объясняешь разницу null/undefined, ==/===, let/const и почему объекты сравниваются по ссылке.",
        mistakes: ["Сравнивать через == и надеяться на магию приведения.", "Считать null и undefined одним и тем же."],
        resources: [
          ["javascript.info: Types", "https://learn.javascript.ru/types"],
          ["MDN: Data structures", "https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Data_structures"]
        ]
      },
      {
        title: "Операторы, условия и циклы",
        desc: "Арифметика, логические операторы, тернарник, switch, for/while, break/continue. Управление потоком выполнения.",
        practice: "Напиши функцию расчёта скидки с ветвлениями и циклом, покрой граничные случаи и проверь в консоли.",
        checkpoint: "Читаешь чужой код с вложенными условиями и можешь упростить его без изменения поведения.",
        mistakes: ["Забывать break в switch и проваливаться в следующий case.", "Использовать присваивание = вместо сравнения ==="],
        resources: [
          ["javascript.info: Operators", "https://learn.javascript.ru/operators"],
          ["javascript.info: Conditions", "https://learn.javascript.ru/ifelse"]
        ]
      },
      {
        title: "Функции, области видимости и hoisting",
        desc: "Объявления функций, выражения, стрелочные функции, параметры, return, область видимости, hoisting, TDZ.",
        practice: "Напиши пять функций с разными способами объявления и объясни, какие из них доступны до объявления.",
        checkpoint: "Понимаешь, где живёт переменная, почему let падает до инициализации и как работает return.",
        mistakes: ["Полагаться на hoisting и вызывать функцию до объявления.", "Создавать функции внутри циклов без необходимости."],
        resources: [
          ["javascript.info: Functions", "https://learn.javascript.ru/function-basics"],
          ["javascript.info: Variable scope", "https://learn.javascript.ru/let-const"]
        ]
      },
      {
        title: "Замыкания, this и контекст",
        desc: "Замыкания, лексическое окружение, this, call/apply/bind, потеря контекста в колбэках.",
        practice: "Напиши counter, once и debounce на замыканиях. Объясни this в трёх разных контекстах вызова.",
        checkpoint: "Объясняешь, где живёт переменная после возврата функции и почему this потерялся в колбэке.",
        mistakes: ["Терять this при передаче метода как колбэка.", "Замыкать изменяемую переменную цикла и получать одинаковые значения."],
        resources: [
          ["javascript.info: Closures", "https://learn.javascript.ru/closure"],
          ["javascript.info: Object methods and this", "https://learn.javascript.ru/object-methods"]
        ]
      },
      {
        title: "Массивы и объекты",
        desc: "Методы массивов, объекты, деструктуризация, spread/rest, JSON, поверхностное и глубокое копирование, мутация.",
        practice: "Преобразуй массив глав: отфильтруй опубликованные, отсортируй по дате и собери объект по id.",
        checkpoint: "Используешь map/filter/reduce осознанно и не мутируешь входные данные без причины.",
        mistakes: ["Мутировать входной массив и удивляться побочным эффектам.", "Делать поверхностную копию и думать, что она глубокая."],
        resources: [
          ["javascript.info: Arrays", "https://learn.javascript.ru/array"],
          ["javascript.info: Objects", "https://learn.javascript.ru/object"]
        ]
      },
      {
        title: "ES6+ и функциональные методы",
        desc: "map/filter/reduce/find/some/every, optional chaining, nullish coalescing, шаблонные строки, деструктуризация.",
        practice: "Перепиши пять циклов на map/filter/reduce и добавь безопасную обработку null через optional chaining.",
        checkpoint: "Выбираешь подходящий метод массива и не пишешь reduce там, где достаточно map.",
        mistakes: ["Использовать reduce для всего, включая простой поиск.", "Забывать про optional chaining и падать на null."],
        resources: [
          ["javascript.info: Array methods", "https://learn.javascript.ru/array-methods"],
          ["javascript.info: Optional chaining", "https://learn.javascript.ru/optional-chaining"]
        ]
      },
      {
        title: "DOM: выбор и изменение",
        desc: "querySelector, createElement, append/remove, classList, textContent, dataset, шаблоны. Как безопасно менять страницу.",
        practice: "Сделай список глав с добавлением, удалением, поиском и обновлением счётчика.",
        checkpoint: "Не используешь innerHTML для пользовательских данных и не теряешь ссылки на элементы.",
        mistakes: ["Вставлять пользовательский HTML через innerHTML и получать XSS.", "Менять DOM в цикле по одному элементу вместо фрагмента."],
        resources: [
          ["javascript.info: DOM", "https://learn.javascript.ru/document"],
          ["javascript.info: Searching elements", "https://learn.javascript.ru/searching-elements-dom"]
        ]
      },
      {
        title: "События и делегирование",
        desc: "addEventListener, bubbling, capture, preventDefault, stopPropagation, делегирование, удаление обработчиков.",
        practice: "Сделай список с делегированием: клик по кнопке внутри карточки не должен срабатывать как клик по карточке.",
        checkpoint: "Понимаешь всплытие, умеешь остановить нежелательное поведение и не плодишь обработчики.",
        mistakes: ["Вешать отдельный обработчик на каждый элемент списка.", "Забывать preventDefault у формы и получать перезагрузку."],
        resources: [
          ["javascript.info: Events", "https://learn.javascript.ru/events"],
          ["javascript.info: Bubbling and capturing", "https://learn.javascript.ru/event-bubbling"]
        ]
      },
      {
        title: "Формы и пользовательский ввод",
        desc: "submit, input/change, FormData, валидация, блокировка кнопки, состояния ошибок и загрузки.",
        practice: "Сделай форму поиска с debounce, проверкой пустого значения и состоянием загрузки.",
        checkpoint: "Форма не перезагружает страницу, ошибки показываются у полей, а ввод не спамит запросами.",
        mistakes: ["Читать значение поля только при submit и терять реакцию на ввод.", "Доверять клиентской валидации и не проверять данные на сервере."],
        resources: [
          ["javascript.info: Form elements", "https://learn.javascript.ru/form-elements"],
          ["MDN: Form validation", "https://developer.mozilla.org/ru/docs/Learn_web_development/Extensions/Forms/Form_validation"]
        ]
      },
      {
        title: "Асинхронность: event loop, Promises, async/await",
        desc: "Микрозадачи и макрозадачи, Promise, then/catch/finally, async/await, параллельные и последовательные запросы.",
        practice: "Напиши три функции: последовательные запросы, параллельные через Promise.all и обработку ошибки через try/catch.",
        checkpoint: "Объясняешь порядок microtask/macrotask и не путаешь await с блокировкой потока.",
        mistakes: ["Думать, что setTimeout(0) выполнится раньше Promise.", "Не обрабатывать reject и получать unhandled rejection."],
        resources: [
          ["javascript.info: Event loop", "https://learn.javascript.ru/event-loop"],
          ["javascript.info: Promises", "https://learn.javascript.ru/promise-basics"],
          ["Loupe: Event loop visualizer", "http://latentflip.com/loupe/"]
        ]
      },
      {
        title: "Fetch, HTTP и обработка ошибок",
        desc: "fetch, headers, JSON, статус-коды, response.ok, ошибки сети, AbortController, таймауты, повторные запросы.",
        practice: "Загрузи данные с публичного API, обработай loading/error/empty и отмени запрос через AbortController при уходе со страницы.",
        checkpoint: "Проверяешь response.ok, читаешь JSON-ошибки и не оставляешь висящие запросы.",
        mistakes: ["Проверять только response.ok и забывать, что тело ошибки тоже JSON.", "Не отменять запрос при уходе со страницы."],
        resources: [
          ["javascript.info: Fetch", "https://learn.javascript.ru/fetch"],
          ["javascript.info: Error handling", "https://learn.javascript.ru/error-handling"]
        ]
      },
      {
        title: "Модули, npm и сборка",
        desc: "import/export, package.json, scripts, зависимости, lockfile, npx, сборка через Vite.",
        practice: "Разбей прототип на пять ES-модулей, настрой package.json и запусти сборку одной командой.",
        checkpoint: "Нет глобальных переменных, а модули можно переиспользовать в другом проекте.",
        mistakes: ["Импортировать весь пакет ради одной функции.", "Коммитить node_modules и ломать воспроизводимость."],
        resources: [
          ["javascript.info: Modules", "https://learn.javascript.ru/modules"],
          ["npm docs", "https://docs.npmjs.com"]
        ]
      },
      {
        title: "Хранение на клиенте",
        desc: "localStorage, sessionStorage, cookies, IndexedDB, лимиты, сериализация JSON, безопасность.",
        practice: "Сохрани настройки ридера и прогресс чтения в localStorage, восстанови их после перезагрузки и обработай битый JSON.",
        checkpoint: "Данные не ломаются при пустом, старом или битом JSON, а лимиты storage обрабатываются.",
        mistakes: ["Хранить токены в localStorage без понимания рисков.", "Превышать лимит и не обрабатывать ошибку записи."],
        resources: [
          ["javascript.info: localStorage", "https://learn.javascript.ru/localstorage"],
          ["MDN: IndexedDB", "https://developer.mozilla.org/ru/docs/Web/API/IndexedDB_API"]
        ]
      },
      {
        title: "Отладка и DevTools",
        desc: "Breakpoints, call stack, scope, watch, Network, console, source maps. Как найти причину, а не симптом.",
        practice: "Поставь breakpoint, поймай ошибку в асинхронном коде, прочитай stack trace и исправь причину.",
        checkpoint: "Находишь баг через DevTools за 10–15 минут, а не перебором изменений.",
        mistakes: ["Ставить console.log вместо breakpoint и терять контекст.", "Исправлять симптом, не понимая причину."],
        resources: [
          ["javascript.info: Debugging", "https://learn.javascript.ru/debugging-chrome"],
          ["Chrome DevTools: Debug JS", "https://developer.chrome.com/docs/devtools/javascript/"]
        ]
      },
      {
        title: "Паттерны UI",
        desc: "Debounce/throttle, пагинация, бесконечный скролл, скелетоны, состояния загрузки, ошибки и пустоты.",
        practice: "Добавь debounce поиска, пагинацию и скелетоны загрузки в прототип каталога.",
        checkpoint: "Нет лишних запросов, а состояния загрузки, ошибки и пустоты понятны пользователю.",
        mistakes: ["Отправлять запрос на каждое нажатие клавиши.", "Забывать состояния пустоты и ошибки, оставляя пустой экран."],
        resources: [
          ["CSS-Tricks: Debounce", "https://css-tricks.com/debouncing-throttling-explained-examples/"],
          ["MDN: IntersectionObserver", "https://developer.mozilla.org/ru/docs/Web/API/IntersectionObserver"]
        ]
      }
    ],
    practice: [
      "Сделай прототип ридера: каталог новелл из JSON, страница главы, настройки шрифта/интервала/темы.",
      "Добавь fetch к публичному API, поиск, фильтры и сохранение прогресса в localStorage.",
      "Найди и исправь три бага через DevTools, один из них — в асинхронном коде."
    ],
    checkpoint: [
      "Написать SPA на чистом JS с fetch к внешнему API.",
      "Объяснить event loop и разницу между синхронным и асинхронным кодом.",
      "Найти баг через DevTools, а не гадать.",
      "Данные в localStorage не ломаются после перезагрузки."
    ],
    resources: [
      ["javascript.info (рус.)", "https://learn.javascript.ru"],
      ["MDN: JavaScript", "https://developer.mozilla.org/ru/docs/Web/JavaScript"],
      ["You Don't Know JS Yet", "https://github.com/getify/You-Dont-Know-JS"],
      ["Frontend Mentor", "https://www.frontendmentor.io/challenges"],
      ["Exercism: JavaScript", "https://exercism.org/tracks/javascript"],
      ["JavaScript30", "https://javascript30.com/"]
    ]
  },
  {
    n: 3,
    key: "s3",
    group: "Фундамент",
    title: "TypeScript и инструменты качества",
    lead: "TypeScript ловит ошибки до запуска, Vite собирает фронтенд за секунды, а линтеры и тесты не дают проекту разваливаться. Здесь ты учишься не «писать типы», а проектировать предсказуемый код.",
    hours: 55,
    tech: [
      "TypeScript",
      "Vite",
      "npm",
      "ESLint",
      "Prettier",
      "Vitest",
      "Zod"
    ],
    learn: [
      {
        title: "Зачем TypeScript и как работает компилятор",
        desc: "Типы существуют только на этапе компиляции, tsc проверяет код, strict-режим, source maps.",
        practice: "Скомпилируй небольшой TS-файл, посмотри JS-выход и source map. Включи strict и объясни, что изменилось.",
        checkpoint: "Понимаешь, что типы исчезают в runtime, и не ждёшь от них защиты данных.",
        mistakes: ["Думать, что TypeScript проверяет данные в runtime.", "Отключать strict, чтобы ошибки «прошли»."],
        resources: [
          ["TS: TypeScript from scratch", "https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html"],
          ["TS: strict", "https://www.typescriptlang.org/tsconfig/strict.html"]
        ]
      },
      {
        title: "Примитивы, массивы, кортежи и enum",
        desc: "Базовые типы, вывод типов, массивы, tuple, enum, any/unknown/never.",
        practice: "Типизируй 10 функций и структур, убери все any и замени их на unknown с проверкой.",
        checkpoint: "В проекте нет any, а unknown используется с явной проверкой.",
        mistakes: ["Использовать any при первой ошибке.", "Путать unknown и any и считать их одинаково безопасными."],
        resources: [
          ["TS: Everyday types", "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"],
          ["TS Playground", "https://www.typescriptlang.org/play"]
        ]
      },
      {
        title: "Объекты, interface и type",
        desc: "interface vs type, optional/readonly, вложенные объекты, index signatures, расширение типов.",
        practice: "Опиши модели Novel, Chapter и User через interface/type и переиспользуй общие поля.",
        checkpoint: "Модели не дублируются, а изменения структуры ловятся компилятором.",
        mistakes: ["Дублировать типы вместо переиспользования.", "Делать все поля optional и терять гарантии."],
        resources: [
          ["TS: Object types", "https://www.typescriptlang.org/docs/handbook/2/objects.html"],
          ["TS: Interfaces", "https://www.typescriptlang.org/docs/handbook/2/objects.html#interfaces"]
        ]
      },
      {
        title: "Union, intersection и литеральные типы",
        desc: "Объединения, пересечения, literal types, дискриминированные union-ы для состояний.",
        practice: "Смоделируй состояние загрузки через union idle/loading/success/error вместо набора boolean-флагов.",
        checkpoint: "Состояние невозможно представить в недопустимой комбинации.",
        mistakes: ["Моделировать состояние набором boolean-флагов.", "Забывать обработать все варианты union."],
        resources: [
          ["TS: Union types", "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types"],
          ["TS: Literal types", "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types"]
        ]
      },
      {
        title: "Сужение типов и type guards",
        desc: "typeof/instanceof, in, type guards, discriminated unions, assertion functions, exhaustive checks.",
        practice: "Обработай discriminated union статусов загрузки через type guard и switch без приведения типов.",
        checkpoint: "Компилятор сам сужает тип в каждой ветке, а as остаётся только в крайнем случае.",
        mistakes: ["Верить as вместо реальной проверки.", "Забывать, что typeof null === object."],
        resources: [
          ["TS: Narrowing", "https://www.typescriptlang.org/docs/handbook/2/narrowing.html"],
          ["TypeScript Exercises", "https://typescript-exercises.github.io/"]
        ]
      },
      {
        title: "Функции, перегрузки и this",
        desc: "Параметры, optional/default/rest, возвращаемые типы, overloads, this-типизация.",
        practice: "Напиши типизированную функцию с перегрузкой и объясни, почему она лучше union-аргумента.",
        checkpoint: "Функции типизированы без any, а overloads используются только там, где действительно нужны.",
        mistakes: ["Типизировать всё any и называть это типизацией.", "Игнорировать this и получать ошибки в методах."],
        resources: [
          ["TS: More on functions", "https://www.typescriptlang.org/docs/handbook/2/functions.html"],
          ["TypeScript Playground", "https://www.typescriptlang.org/play"]
        ]
      },
      {
        title: "Generics",
        desc: "Обобщения, constraints, вывод типов, generic-компоненты и API-клиенты.",
        practice: "Напиши типизированный API-клиент и функцию groupBy с generics.",
        checkpoint: "Generics выводятся без ручных подсказок, а вызовы не требуют any.",
        mistakes: ["Писать generic ради generic.", "Забывать constraints и терять свойства аргумента."],
        resources: [
          ["TS: Generics", "https://www.typescriptlang.org/docs/handbook/2/generics.html"],
          ["TypeScript Exercises", "https://typescript-exercises.github.io/"]
        ]
      },
      {
        title: "Utility types",
        desc: "Partial, Pick, Omit, Record, ReturnType, Parameters, keyof/typeof.",
        practice: "Сделай DTO для создания и обновления новеллы через Pick, Omit и Partial.",
        checkpoint: "Не копируешь поля вручную и не теряешь связь DTO с доменной моделью.",
        mistakes: ["Копировать DTO вручную.", "Делать Partial на доменной модели без причины."],
        resources: [
          ["TS: Utility types", "https://www.typescriptlang.org/docs/handbook/utility-types.html"],
          ["TypeScript Playground", "https://www.typescriptlang.org/play"]
        ]
      },
      {
        title: "Модули и tsconfig",
        desc: "import/export, strict, target, moduleResolution, paths, include/exclude, declaration.",
        practice: "Включи strict, path aliases и noUncheckedIndexedAccess, затем объясни каждую опцию в конфиге.",
        checkpoint: "Конфиг понятен, сборка не ломается, а алиасы работают в IDE и Vite.",
        mistakes: ["Копировать tsconfig из чужого проекта без понимания.", "Включать skipLibCheck и не понимать, какие ошибки скрываются."],
        resources: [
          ["TS: tsconfig reference", "https://www.typescriptlang.org/tsconfig/"],
          ["TS: Modules", "https://www.typescriptlang.org/docs/handbook/2/modules.html"]
        ]
      },
      {
        title: "Vite",
        desc: "Dev server, HMR, build, preview, env-переменные, алиасы, плагины, production-сборка.",
        practice: "Настрой dev/build/preview, env-переменные и alias, проверь HMR и production-сборку.",
        checkpoint: "Production build открывается локально и работает без dev-сервера.",
        mistakes: ["Коммитить dist и путать его с исходниками.", "Хардкодить API URL вместо env-переменной."],
        resources: [
          ["Vite: Getting started", "https://vite.dev/guide/"],
          ["Vite: Env variables", "https://vite.dev/guide/env-and-mode"]
        ]
      },
      {
        title: "npm и управление зависимостями",
        desc: "package.json, scripts, semver, lockfile, npx, аудит зависимостей.",
        practice: "Настрой скрипты dev/build/lint/test и объясни, чем dependencies отличаются от devDependencies.",
        checkpoint: "Проект ставится с нуля по lockfile, а версии зависимостей не «плывут».",
        mistakes: ["Использовать latest без lockfile.", "Игнорировать npm audit и предупреждения безопасности."],
        resources: [
          ["npm docs", "https://docs.npmjs.com"],
          ["npm: package.json", "https://docs.npmjs.com/cli/v11/configuring-npm/package-json"]
        ]
      },
      {
        title: "ESLint, Prettier и vue-tsc",
        desc: "Единый стиль, правила, flat config, форматирование, проверка типов, интеграция с IDE.",
        practice: "Настрой ESLint, Prettier и vue-tsc, добавь скрипты lint/format/typecheck и исправь все ошибки.",
        checkpoint: "Одна команда проверяет стиль и типы, а CI запускает её без отличий.",
        mistakes: ["Спорить о стиле вместо автоформата.", "Отключать правила пачкой, чтобы проверка прошла."],
        resources: [
          ["ESLint", "https://eslint.org/docs/latest/"],
          ["Prettier", "https://prettier.io/docs/"],
          ["Vue Language Tools", "https://github.com/vuejs/language-tools"]
        ]
      },
      {
        title: "Типизация API и DTO",
        desc: "DTO, ответы-обёртки, unknown, runtime-валидация через zod, обработка неожиданных данных.",
        practice: "Типизируй ответы публичного API и провалидируй их zod-схемой перед использованием.",
        checkpoint: "Неизвестный или битый ответ API не роняет приложение, а даёт понятную ошибку.",
        mistakes: ["Верить, что API всегда вернёт ожидаемое.", "Типизировать ответ без runtime-проверки."],
        resources: [
          ["zod docs", "https://zod.dev"],
          ["TS: TypeScript from scratch", "https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html"]
        ]
      },
      {
        title: "Vitest: первые тесты",
        desc: "describe/it, expect, matchers, тестирование функций и composables, моки, watch-режим.",
        practice: "Напиши пять тестов на функции форматирования и фильтрации, один тест с моком и запусти coverage.",
        checkpoint: "Тесты проверяют поведение, а не реализацию, и падают при реальной регрессии.",
        mistakes: ["Тестировать реализацию вместо поведения.", "Писать тесты, которые проходят всегда."],
        resources: [
          ["Vitest", "https://vitest.dev/guide/"],
          ["Vitest: Mocking", "https://vitest.dev/guide/mocking"]
        ]
      }
    ],
    practice: [
      "Перенеси ридер на Vite + TypeScript в strict-режиме.",
      "Опиши модели Novel/Chapter/User, типизируй API и добавь runtime-валидацию.",
      "Настрой ESLint/Prettier/vue-tsc и напиши первые тесты на Vitest."
    ],
    checkpoint: [
      "В проекте нет any, ошибки типов понятны и исправляются.",
      "Сборка, линтеры и тесты запускаются одной командой.",
      "Объяснить, зачем нужен strict и как работает вывод типов.",
      "Один тест действительно ловит регрессию."
    ],
    resources: [
      ["TypeScript Handbook", "https://www.typescriptlang.org/docs/handbook/intro.html"],
      ["Vite docs", "https://vite.dev/guide/"],
      ["ESLint docs", "https://eslint.org/docs/latest/"],
      ["Prettier docs", "https://prettier.io/docs/"],
      ["Vitest docs", "https://vitest.dev/guide/"],
      ["Exercism: TypeScript", "https://exercism.org/tracks/typescript"],
      ["TypeScript Exercises", "https://typescript-exercises.github.io/"],
      ["Metanit: TypeScript (рус.)", "https://metanit.com/web/typescript/"]
    ]
  },
  {
    n: 4,
    key: "s4",
    group: "Фронтенд",
    title: "Vue 3: компонентный интерфейс",
    lead: "Vue — слой, из которого состоит весь интерфейс FLIB. Освой компонентное мышление, реактивность и управление состоянием, прежде чем лезть в Laravel.",
    hours: 95,
    tech: [
      "Vue 3",
      "Composition API",
      "Pinia",
      "Vue Router",
      "Composables",
      "Tailwind"
    ],
    learn: [
      {
        title: "Основы Vue",
        desc: "Создание приложения, шаблоны, директивы v-if/v-for/v-bind/v-on/v-model, реактивность.",
        practice: "Создай приложение-счётчик и список новелл с v-for, v-if и v-model.",
        checkpoint: "Понимаешь, как шаблон связан с состоянием и почему интерфейс обновляется сам.",
        resources: [
          ["Vue: Quick start", "https://vuejs.org/guide/quick-start.html"],
          ["Vue: Template syntax", "https://vuejs.org/guide/essentials/template-syntax.html"]
        ],
        mistakes: ["Смешивать Options API и Composition API без причины.", "Забывать key в v-for и получать странные перерисовки."]
      },
      {
        title: "Composition API",
        desc: "script setup, ref/reactive, computed, watch/watchEffect, lifecycle-хуки, template refs.",
        practice: "Перепиши компонент на script setup с computed, watch и lifecycle-хуком.",
        checkpoint: "Нет лишних watcher-ов, computed кэшируется, а побочные эффекты убраны в lifecycle.",
        resources: [
          ["Vue: Reactivity fundamentals", "https://vuejs.org/guide/essentials/reactivity-fundamentals.html"],
          ["Vue: Lifecycle hooks", "https://vuejs.org/guide/essentials/lifecycle.html"]
        ],
        mistakes: ["Использовать reactive для примитива.", "Создавать computed с побочными эффектами."]
      },
      {
        after: "Composition API",
        title: "Реактивность в деталях",
        desc: "ref и reactive, глубокая и поверхностная реактивность, computed vs watch, ловушки при деструктуризации и передаче объектов.",
        practice: "Собери компонент с ref, reactive, computed и watch. Разбери, где теряется реактивность при деструктуризации, и исправь это через toRefs.",
        checkpoint: "Объясняешь, почему reactive-объект теряет реактивность после деструктуризации и когда нужен computed вместо watch.",
        mistakes: ["Делать всё reactive, включая примитивы.", "Забывать про глубокую реактивность и мутировать вложенные объекты."],
        resources: [
          ["Vue: Reactivity in depth", "https://vuejs.org/guide/extras/reactivity-in-depth.html"],
          ["Vue: Computed", "https://vuejs.org/guide/essentials/computed.html"]
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
        ],
        mistakes: ["Мутировать props внутри дочернего компонента.", "Забывать объявлять emits и терять контракт события."]
      },
      {
        after: "Компоненты",
        title: "TypeScript во Vue",
        desc: "Типизация props и emits, defineProps/defineEmits, generic-компоненты, типизация слотов и template refs.",
        practice: "Переведи NovelCard и форму главы на типизированные props/emits и добавь generic-компонент списка.",
        checkpoint: "Компоненты не используют any, а ошибки props/emits ловятся vue-tsc.",
        mistakes: ["Использовать any в props и считать это типизацией.", "Забывать объявлять emits и терять проверку событий."],
        resources: [
          ["Vue: TypeScript overview", "https://vuejs.org/guide/typescript/overview.html"],
          ["Vue: TypeScript with Composition API", "https://vuejs.org/guide/typescript/composition-api.html"]
        ]
      },
      {
        title: "Composables",
        desc: "Паттерн useSomething для переиспользования логики: useReaderSettings, usePagination, useAuth.",
        practice: "Вынеси настройки ридера в composable useReaderSettings с сохранением в localStorage.",
        checkpoint: "Логика используется в двух компонентах без копипасты и без глобального состояния.",
        resources: [
          ["Vue: Composables", "https://vuejs.org/guide/reusability/composables.html"],
          ["Vue Examples", "https://vuejs.org/examples/"]
        ],
        mistakes: ["Возвращать глобальное состояние из composable.", "Создавать composable ради одной строки кода."]
      },
      {
        title: "Формы",
        desc: "Двусторонняя привязка, валидация, состояния ошибок и загрузки, обработка серверных ошибок.",
        practice: "Сделай форму главы с валидацией, ошибками у полей и блокировкой кнопки во время отправки.",
        checkpoint: "Ошибки показываются рядом с полями, а повторная отправка не создаёт дубликаты.",
        resources: [
          ["Vue: Form input bindings", "https://vuejs.org/guide/essentials/forms.html"],
          ["Vue Examples", "https://vuejs.org/examples/"]
        ],
        mistakes: ["Хранить пароль в открытом виде в состоянии.", "Не обрабатывать серверные ошибки и показывать только свою валидацию."]
      },
      {
        title: "Vue Router",
        desc: "Маршруты, params/query, guards, lazy loading, scroll behavior, 404.",
        practice: "Добавь маршруты каталог → новелла → глава, 404 и ленивую загрузку страниц.",
        checkpoint: "Прямой переход по глубокому URL работает, а 404 не ломает layout.",
        resources: [
          ["Vue Router", "https://router.vuejs.org/guide/"],
          ["Vue Router: Navigation guards", "https://router.vuejs.org/guide/advanced/navigation-guards.html"]
        ],
        mistakes: ["Забывать 404 и прямой переход по глубокому URL.", "Делать guards с побочными эффектами и запросами."]
      },
      {
        title: "Pinia",
        desc: "Stores, state/getters/actions, setup-стиль, персистентность, модульность.",
        practice: "Создай store библиотеки с фильтрами и сохранением списка чтения.",
        checkpoint: "Состояние не дублируется в компонентах, а actions описывают бизнес-операции.",
        resources: [
          ["Pinia: Getting started", "https://pinia.vuejs.org/getting-started.html"],
          ["Pinia: Cookbook", "https://pinia.vuejs.org/cookbook/"]
        ],
        mistakes: ["Дублировать серверное состояние в store.", "Мутировать state напрямую вне actions."]
      },
      {
        after: "Pinia",
        title: "Тестирование Vue",
        desc: "Vitest, Vue Test Utils, тестирование компонентов, composables и store без браузера.",
        practice: "Напиши тесты для useReaderSettings и NovelCard: рендер, props, emit и изменение состояния.",
        checkpoint: "Тесты проверяют поведение компонента, а не его внутреннюю реализацию.",
        mistakes: ["Тестировать CSS и детали реализации.", "Мокать всё, включая собственные composables."],
        resources: [
          ["Vue Test Utils", "https://test-utils.vuejs.org/guide/"],
          ["Vitest", "https://vitest.dev/guide/"]
        ]
      },
      {
        after: "Pinia",
        title: "Архитектура Vue-проекта",
        desc: "Feature-папки, dumb/smart-компоненты, общие UI-компоненты, алиасы, границы ответственности и масштабирование.",
        practice: "Разложи текущий проект по feature-папкам, вынеси общие компоненты и объясни, что где лежит.",
        checkpoint: "Новый разработчик находит нужный компонент за минуту, а фича не тянет за собой весь проект.",
        mistakes: ["Складывать всё в одну папку components.", "Абстрагировать раньше, чем появилась повторяемость."],
        resources: [
          ["Vue: State management", "https://vuejs.org/guide/scaling-up/state-management.html"],
          ["Vue: Tooling", "https://vuejs.org/guide/scaling-up/tooling.html"]
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
        ],
        mistakes: ["Анимации, которые ломают layout и вызывают скачки.", "Использовать scoped CSS и ждать, что он пробьёт дочерние компоненты."]
      },
      {
        title: "Производительность и a11y",
        desc: "v-memo, ленивые компоненты, клавиатура, aria, контраст.",
        practice: "Лениво загрузи тяжёлый компонент, добавь v-memo и проверь интерфейс только клавиатурой.",
        checkpoint: "Lighthouse и Tab-навигация не ухудшаются после оптимизаций.",
        resources: [
          ["Vue: Performance", "https://vuejs.org/guide/best-practices/performance.html"],
          ["Vue: Accessibility", "https://vuejs.org/guide/best-practices/accessibility.html"]
        ],
        mistakes: ["Оптимизировать без замеров и baseline.", "Убирать фокус у модалок и терять клавиатурную навигацию."]
      },
      {
        after: "Производительность и a11y",
        title: "Доступность в SPA",
        desc: "Управление фокусом после переходов, aria-live, клавиатурная навигация, модалки, skip-links и скринридеры.",
        practice: "Проверь ридер и модалку клавиатурой и скринридером, добавь управление фокусом и aria-live для уведомлений.",
        checkpoint: "После перехода фокус не теряется, модалка закрывается Escape, а динамические сообщения озвучиваются.",
        mistakes: ["Не управлять фокусом после клиентского перехода.", "Забывать aria-live для динамических сообщений."],
        resources: [
          ["Vue: Accessibility", "https://vuejs.org/guide/best-practices/accessibility.html"],
          ["WAI-ARIA Authoring Practices", "https://www.w3.org/WAI/ARIA/apg/"]
        ]
      }
    ],
    practice: ["Сделай трекер чтения: каталог с фильтрами, карточка новеллы, избранное, формы добавления, роутинг и Pinia.", "Разбей интерфейс на переиспользуемые компоненты и сохраняй настройки пользователя."],
    checkpoint: [
      "Сделать переиспользуемый компонент и composable без копипасты.",
      "Объяснить, как работает реактивность и когда computed, а когда watch.",
      "Навигация и формы работают без перезагрузки страницы."
    ],
    resources: [
      ["Vue 3 docs (рус.)", "https://ru.vuejs.org/guide/introduction.html"],
      ["Pinia docs", "https://pinia.vuejs.org"],
      ["Vue Router docs", "https://router.vuejs.org"],
      ["Vue Mastery: free course", "https://www.vuemastery.com/courses/intro-to-vue-3/"],
      ["Vue Examples", "https://vuejs.org/examples/"]
    ]
  },
  {
    n: 5,
    key: "s5",
    group: "Бэкенд",
    title: "PHP: серверный язык",
    lead: "PHP — язык бэкенда FLIB. После JS он кажется простым, но именно здесь важно освоить ООП, пространства имён и Composer: на них стоит Laravel.",
    hours: 75,
    tech: [
      "PHP 8.3",
      "OOP",
      "Composer",
      "PSR",
      "Exceptions",
      "Sessions"
    ],
    learn: [
      {
        title: "Синтаксис PHP",
        desc: "Типы, переменные, массивы, строки, функции, include/require, суперглобальные переменные.",
        practice: "Напиши CLI-калькулятор или парсер CSV на массивах и функциях с обработкой аргументов.",
        checkpoint: "Код запускается без notice и warning, а входные данные проверяются.",
        resources: [
          ["PHP: Language reference", "https://www.php.net/manual/ru/langref.php"],
          ["PHP: Getting started", "https://www.php.net/manual/ru/getting-started.php"]
        ],
        mistakes: ["Смешивать HTML и бизнес-логику без шаблонизатора.", "Игнорировать strict_types и получать неожиданные приведения."]
      },
      {
        after: "Синтаксис PHP",
        title: "Массивы, строки и функции PHP",
        desc: "Ассоциативные массивы, array_map/filter/reduce, работа со строками, mb_* функции, области видимости и аргументы.",
        practice: "Напиши набор функций для нормализации и группировки массива глав без использования фреймворка.",
        checkpoint: "Не используешь strlen для UTF-8 и понимаешь, когда массив передаётся по значению, а когда по ссылке.",
        mistakes: ["Использовать strlen для кириллицы.", "Игнорировать копирование массивов и неожиданно мутировать данные."],
        resources: [
          ["PHP: Arrays", "https://www.php.net/manual/ru/language.types.array.php"],
          ["PHP: Strings", "https://www.php.net/manual/ru/language.types.string.php"]
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
        ],
        mistakes: ["Делать все свойства public.", "Наследовать ради переиспользования вместо композиции."]
      },
      {
        after: "ООП",
        title: "Enums, readonly и PHP 8+",
        desc: "Enum, readonly-свойства, именованные аргументы, match, nullsafe-оператор и constructor promotion.",
        practice: "Переведи роли и статусы на enum, сделай DTO с readonly-полями и замени switch на match.",
        checkpoint: "Состояния представлены enum, а не строками, и компилятор/анализ ловит неверные значения.",
        mistakes: ["Использовать enum для всего, включая простые числа.", "Пытаться изменить readonly-свойство после конструктора."],
        resources: [
          ["PHP: Enumerations", "https://www.php.net/manual/ru/language.enumerations.php"],
          ["PHP: Readonly properties", "https://www.php.net/manual/ru/language.oop5.properties.php#language.oop5.properties.readonly-properties"]
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
        ],
        mistakes: ["Забывать namespace/use и путать классы.", "Дублировать классы без PSR-4."]
      },
      {
        title: "Composer",
        desc: "require/update, версии, scripts, автозагрузка, Packagist. Аналог npm для PHP.",
        practice: "Подключи сторонний пакет, настрой autoload и scripts, обнови lock-файл.",
        checkpoint: "composer install на чистой машине воспроизводит рабочее окружение.",
        resources: [
          ["Composer: Basic usage", "https://getcomposer.org/doc/01-basic-usage.md"],
          ["Packagist", "https://packagist.org"]
        ],
        mistakes: ["Коммитить vendor и ломать воспроизводимость.", "Обновлять зависимости без lockfile и тестов."]
      },
      {
        title: "Ошибки и исключения",
        desc: "try/catch/finally, уровни ошибок, логирование, PSR-3. Не глуши ошибки.",
        practice: "Сделай try/catch с логированием и кастомным исключением для бизнес-ошибки.",
        checkpoint: "Пользователь не видит stack trace, а в логе есть контекст и причина.",
        resources: [
          ["PHP: Exception", "https://www.php.net/manual/ru/class.exception.php"],
          ["PSR-3 logger", "https://www.php-fig.org/psr/psr-3/"]
        ],
        mistakes: ["Глушить ошибки через @.", "Показывать пользователю stack trace."]
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
        ],
        mistakes: ["Доверять имени и типу файла от пользователя.", "Забывать про кодировку и корректные статус-коды."]
      },
      {
        after: "Файлы, JSON и HTTP",
        title: "HTTP-запрос в PHP",
        desc: "Суперглобальные переменные, заголовки, метод, тело запроса, cookies, сессии и коды ответа. Что происходит до Laravel.",
        practice: "Сделай endpoint на чистом PHP, который принимает JSON, проверяет метод и возвращает корректный статус и заголовки.",
        checkpoint: "Понимаешь, откуда берутся $_GET/$_POST/$_SERVER и почему доверять заголовкам клиента нельзя.",
        mistakes: ["Доверять заголовкам клиента без проверки.", "Забывать про коды ответа и отдавать 200 на ошибку."],
        resources: [
          ["PHP: $_SERVER", "https://www.php.net/manual/ru/reserved.variables.server.php"],
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
        ],
        mistakes: ["Конкатенировать SQL-запросы.", "Хранить пароли через md5/sha1."]
      },
      {
        title: "Стандарты",
        desc: "PSR-1, PSR-4, PSR-12, именование. Код должен читаться одинаково в любом проекте.",
        practice: "Прогони код через Pint или PHPCS, исправь именование, отступы и длину строк.",
        checkpoint: "Код соответствует PSR-12, а ревью не тратит время на стиль.",
        resources: [
          ["PSR-12", "https://www.php-fig.org/psr/psr-12/"],
          ["PHP-FIG", "https://www.php-fig.org"]
        ],
        mistakes: ["Спорить о стиле вместо линтера.", "Игнорировать PSR-4 и autoload."]
      },
      {
        after: "Стандарты",
        title: "Тестирование PHP",
        desc: "PHPUnit/Pest, arrange-act-assert, фикстуры, моки, изоляция тестов и запуск на CI.",
        practice: "Напиши 10 тестов на классы Library и Storage, включая негативные сценарии и мок файловой системы.",
        checkpoint: "Тесты не зависят от порядка, не ходят в реальную БД и падают при регрессии.",
        mistakes: ["Тестировать только геттеры и сеттеры.", "Делать тесты зависимыми от общего состояния."],
        resources: [
          ["PHPUnit docs", "https://docs.phpunit.de/en/12.5/"],
          ["Pest docs", "https://pestphp.com/docs/installation"]
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
        ],
        mistakes: ["Отлаживать через var_dump в production.", "Не читать stack trace и гадать."]
      }
    ],
    practice: ["Консольная библиотека: классы Book, Author, Library, интерфейс Storage, JSON-хранилище, Composer-автозагрузка.", "Добавь обработку ошибок и простые unit-тесты, если уже знаком с PHPUnit."],
    checkpoint: [
      "Написать классы с интерфейсами и автозагрузкой через Composer.",
      "Объяснить, зачем нужны namespace и PSR-4.",
      "Обработать ошибку и не показать пользователю стектрейс."
    ],
    resources: [
      ["PHP manual (рус.)", "https://www.php.net/manual/ru/"],
      ["PHP: The Right Way", "https://phptherightway.com"],
      ["Composer docs", "https://getcomposer.org/doc/"],
      ["PHPStan docs", "https://phpstan.org/user-guide/getting-started"],
      ["Exercism: PHP", "https://exercism.org/tracks/php"]
    ]
  },
  {
    n: 6,
    key: "s6",
    group: "Бэкенд",
    title: "SQL и проектирование данных",
    lead: "Данные — основа платформы. Плохая схема превращает любую фичу в боль: дубли, медленные запросы, невозможность миграций. Научись проектировать таблицы до того, как писать модели.",
    hours: 50,
    tech: [
      "SQL",
      "MySQL",
      "SQLite",
      "Индексы",
      "Транзакции",
      "FTS"
    ],
    learn: [
      {
        title: "Реляционная модель",
        desc: "Таблицы, первичные и внешние ключи, ограничения, связи 1:1, 1:N, N:N, каскады.",
        practice: "Нарисуй ER-диаграмму для новелл, глав, пользователей и комментариев.",
        checkpoint: "У каждой связи есть внешний ключ и понятная кардинальность, нет висячих ссылок.",
        resources: [
          ["SQLBolt", "https://sqlbolt.com"],
          ["MySQL: Data types", "https://dev.mysql.com/doc/refman/8.4/en/data-types.html"]
        ],
        mistakes: ["Хранить несколько значений в одной колонке.", "Не ставить внешние ключи и ограничения."]
      },
      {
        title: "SELECT",
        desc: "WHERE, ORDER BY, LIMIT, агрегаты, GROUP BY/HAVING, подзапросы.",
        practice: "Напиши 10 запросов с WHERE, ORDER BY, GROUP BY и HAVING по учебной базе.",
        checkpoint: "Запросы дают ожидаемый результат без подсматривания в шпаргалку.",
        resources: [
          ["SQLBolt: SELECT", "https://sqlbolt.com/lesson/select_queries_introduction"],
          ["MySQL: SELECT", "https://dev.mysql.com/doc/refman/8.4/en/select.html"]
        ],
        mistakes: ["Выбирать * без необходимости.", "Забывать WHERE и читать/менять всю таблицу."]
      },
      {
        after: "SELECT",
        title: "Агрегации, GROUP BY и HAVING",
        desc: "COUNT/SUM/AVG, GROUP BY, HAVING, фильтрация агрегатов и типичные ошибки при группировке.",
        practice: "Посчитай число новелл по жанрам, средний рейтинг и количество глав, отфильтруй группы через HAVING.",
        checkpoint: "Понимаешь разницу WHERE и HAVING и не группируешь по случайным колонкам.",
        mistakes: ["Забывать GROUP BY и получать неопределённый результат.", "Фильтровать агрегаты в PHP вместо HAVING."],
        resources: [
          ["SQLBolt: Aggregates", "https://sqlbolt.com/lesson/select_queries_with_aggregates"],
          ["MySQL: GROUP BY", "https://dev.mysql.com/doc/refman/8.4/en/group-by-handling.html"]
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
        ],
        mistakes: ["Получать дубли из-за JOIN и не агрегировать.", "Путать LEFT и INNER JOIN."]
      },
      {
        after: "JOIN",
        title: "Подзапросы, CTE и window functions",
        desc: "Подзапросы, EXISTS, CTE, window functions, ROW_NUMBER, RANK и агрегаты без потери строк.",
        practice: "Найди последнюю главу каждой новеллы через window function и перепиши запрос через CTE.",
        checkpoint: "Можешь объяснить план запроса и когда window function лучше отдельного подзапроса.",
        mistakes: ["Использовать window function там, где достаточно GROUP BY.", "Не проверять EXPLAIN у сложного запроса."],
        resources: [
          ["MySQL: CTE", "https://dev.mysql.com/doc/refman/8.4/en/with.html"],
          ["MySQL: Window functions", "https://dev.mysql.com/doc/refman/8.4/en/window-functions.html"]
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
        ],
        mistakes: ["Делать несколько изменений без транзакции.", "Забывать WHERE в UPDATE/DELETE."]
      },
      {
        after: "Изменение данных",
        title: "Блокировки и конкурентность",
        desc: "Транзакции, уровни изоляции, SELECT FOR UPDATE, deadlocks, идемпотентность и race conditions.",
        practice: "Смоделируй две параллельные покупки/лайка и покажи, как транзакция и блокировка предотвращают потерю обновления.",
        checkpoint: "Понимаешь, почему два запроса могут перезаписать друг друга, и умеешь выбрать стратегию блокировки.",
        mistakes: ["Держать транзакцию открытой во время HTTP-запроса.", "Не понимать причину deadlock и просто повторять запрос."],
        resources: [
          ["MySQL: Locking reads", "https://dev.mysql.com/doc/refman/8.4/en/innodb-locking-reads.html"],
          ["MySQL: Deadlocks", "https://dev.mysql.com/doc/refman/8.4/en/innodb-deadlocks.html"]
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
        ],
        mistakes: ["Индексировать всё подряд.", "Создавать индекс, не проверив EXPLAIN."]
      },
      {
        title: "Нормализация",
        desc: "1NF–3NF, когда денормализация оправдана, именование таблиц и колонок.",
        practice: "Приведи таблицу жанров к третьей нормальной форме и вынеси повторяющиеся данные.",
        checkpoint: "Нет дублей и аномалий обновления, а денормализация осознанна.",
        resources: [
          ["Database normalization (Microsoft)", "https://learn.microsoft.com/en-us/office/troubleshoot/access/database-normalization-description"],
          ["SQLBolt", "https://sqlbolt.com"]
        ],
        mistakes: ["Денормализовать преждевременно.", "Хранить жанры строкой вместо связи."]
      },
      {
        title: "N+1",
        desc: "Проблема запросов в цикле и концепция eager loading — позже пригодится в Eloquent.",
        practice: "Смоделируй N+1 на чистом PHP/SQL и исправь его одним JOIN или предзагрузкой.",
        checkpoint: "Число запросов не растёт линейно с числом новелл.",
        resources: [
          ["Laravel: Eager loading", "https://laravel.com/docs/eloquent-relationships#eager-loading"],
          ["freeCodeCamp: N+1", "https://www.freecodecamp.org/news/n-plus-one-query-problem/"]
        ],
        mistakes: ["Загружать связи в цикле.", "Использовать lazy loading везде без замеров."]
      },
      {
        after: "N+1",
        title: "Полнотекстовый поиск",
        desc: "FULLTEXT в MySQL, FTS5 в SQLite, релевантность, стоп-слова, индексы и поиск без LIKE %...%.",
        practice: "Сделай поиск по названию и описанию новелл через FULLTEXT и сравни с LIKE на 10 000 записей.",
        checkpoint: "Поиск использует индекс, выдаёт релевантные результаты и не сканирует всю таблицу.",
        mistakes: ["Искать через LIKE %...% на больших данных.", "Не обновлять поисковый индекс после изменения данных."],
        resources: [
          ["MySQL: Full-text search", "https://dev.mysql.com/doc/refman/8.4/en/fulltext-search.html"],
          ["SQLite: FTS5", "https://www.sqlite.org/fts5.html"]
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
        ],
        mistakes: ["Писать SQL под MySQL и запускать на SQLite без проверки.", "Не делать бэкап перед миграцией."]
      }
    ],
    practice: ["Спроектируй схему FLIB: users, novels, chapters, genres, tags, comments, reviews, likes, bookmarks, follows, teams.", "Напиши 20 SQL-запросов, заполни данными и проверь планы через EXPLAIN."],
    checkpoint: [
      "Схема без дублирования и с адекватными индексами.",
      "Объяснить, где будет N+1 и как его избежать.",
      "Понимать, когда нужен индекс и полнотекстовый поиск."
    ],
    resources: [
      ["SQLBolt", "https://sqlbolt.com"],
      ["Use The Index, Luke", "https://use-the-index-luke.com"],
      ["MySQL docs", "https://dev.mysql.com/doc/"],
      ["SQL Academy (рус.)", "https://sql-academy.org/ru"]
    ]
  },
  {
    n: 7,
    key: "s7",
    group: "Бэкенд",
    title: "Laravel Core: основа приложения",
    lead: "Первая половина Laravel: маршруты, валидация, Blade, Eloquent, сервисы и авторизация. Здесь появляется ядро платформы, на котором держатся все продуктовые фичи.",
    hours: 80,
    tech: [
      "Laravel 13",
      "Eloquent",
      "Blade",
      "Breeze",
      "Policies",
      "Validation",
      "Services"
    ],
    learn: [
      {
        title: "Основы Laravel",
        desc: "Установка, структура, .env, config, artisan, жизненный цикл запроса.",
        practice: "Установи Laravel, изучи структуру папок, запусти сервер и выведи список маршрутов через artisan route:list.",
        checkpoint: "Понимаешь, где живут маршруты, контроллеры, конфиг и .env, и что происходит с запросом.",
        resources: [
          ["Laravel: Installation", "https://laravel.com/docs/installation"],
          ["Laravel: Lifecycle", "https://laravel.com/docs/lifecycle"]
        ],
        mistakes: ["Не читать жизненный цикл запроса и путать middleware с контроллером.", "Хардкодить конфиг в коде вместо config/env."]
      },
      {
        title: "Маршруты и контроллеры",
        desc: "Route::get/post/resource, параметры, middleware, группы, именованные маршруты.",
        practice: "Сделай resource-маршруты новелл и вложенные маршруты глав с именами.",
        checkpoint: "URL и имена маршрутов соответствуют REST, а вложенность не создаёт конфликтов.",
        resources: [
          ["Laravel: Routing", "https://laravel.com/docs/routing"],
          ["Laravel: Controllers", "https://laravel.com/docs/controllers"]
        ],
        mistakes: ["Дублировать URL в контроллерах.", "Забывать middleware auth на закрытых маршрутах."]
      },
      {
        title: "Запросы и валидация",
        desc: "FormRequest, правила, сообщения, старые значения, обработка ошибок.",
        practice: "Сделай FormRequest для создания новеллы с пятью правилами и понятными сообщениями.",
        checkpoint: "Ошибки возвращаются к полям, старые значения сохраняются, а невалидные данные не попадают в БД.",
        resources: [
          ["Laravel: Validation", "https://laravel.com/docs/validation"],
          ["Laravel: Form requests", "https://laravel.com/docs/validation#form-request-validation"]
        ],
        mistakes: ["Валидировать вручную в контроллере.", "Доверять only() без правил и авторизации."]
      },
      {
        title: "Blade",
        desc: "Шаблоны, layouts, components, slots. Для Inertia понадобится меньше, но понимать нужно.",
        practice: "Сверстай layout и страницу новеллы на Blade-компонентах со слотами.",
        checkpoint: "Нет дублирования HTML, а layout и компоненты переиспользуются.",
        resources: [
          ["Laravel: Blade", "https://laravel.com/docs/blade"],
          ["Laravel: Blade components", "https://laravel.com/docs/blade#components"]
        ],
        mistakes: ["Экранировать вручную и забывать про {!! !!}.", "Писать бизнес-логику в шаблоне."]
      },
      {
        title: "Eloquent",
        desc: "Модели, миграции, relationships, eager loading, casts, accessors, scopes.",
        practice: "Создай миграции и модели Novel, Chapter, User с отношениями и предзагрузкой.",
        checkpoint: "На странице каталога нет N+1, а связи описаны с обеих сторон.",
        resources: [
          ["Laravel: Eloquent", "https://laravel.com/docs/eloquent"],
          ["Laravel: Relationships", "https://laravel.com/docs/eloquent-relationships"]
        ],
        mistakes: ["Использовать модели в миграциях.", "Забывать про casts и получать строки вместо дат/boolean."]
      },
      {
        title: "Сиды и фабрики",
        desc: "Тестовые данные, faker, состояния, детерминированные сиды.",
        practice: "Заполни базу 20 новеллами и 100 главами через фабрики и сиды.",
        checkpoint: "migrate:fresh --seed работает с нуля и даёт одинаковый набор данных.",
        resources: [
          ["Laravel: Seeding", "https://laravel.com/docs/seeding"],
          ["Laravel: Factories", "https://laravel.com/docs/eloquent-factories"]
        ],
        mistakes: ["Сидить production.", "Делать неидемпотентные сиды и дубликаты."]
      },
      {
        title: "Сервисный слой",
        desc: "Вынесение бизнес-логики из контроллеров, DI, контейнер, DTO. Так устроен FLIB.",
        practice: "Вынеси публикацию главы в ChapterService с DTO и событием.",
        checkpoint: "Контроллер тонкий, логика тестируется отдельно, зависимости внедряются.",
        resources: [
          ["Laravel: Service container", "https://laravel.com/docs/container"],
          ["Laravel: Service providers", "https://laravel.com/docs/providers"],
          ["Martin Fowler: Service Layer", "https://martinfowler.com/eaaCatalog/serviceLayer.html"]
        ],
        mistakes: ["Оставлять толстые контроллеры.", "Передавать Request в сервис вместо DTO."]
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
        ],
        mistakes: ["Проверять роль в Blade вместо policy.", "Забывать 403 и отдавать 404/500."]
      },
      {
        title: "Локализация и время",
        desc: "lang-файлы, часовые пояса, форматирование дат.",
        practice: "Вынеси строки в lang-файлы, настрой часовой пояс и локализованные даты.",
        checkpoint: "Переключение языка меняет интерфейс, а даты не сдвигаются.",
        resources: [
          ["Laravel: Localization", "https://laravel.com/docs/localization"],
          ["Carbon", "https://carbon.nesbot.com/"]
        ],
        mistakes: ["Хардкодить русские строки.", "Путать UTC и локальное время."]
      }
    ],
    practice: ["Собери ядро платформы: регистрация, роли, каталог, новеллы, главы, CRUD и policies.", "Бизнес-логику вынеси в сервисы, доступ — через policies, данные — через миграции и фабрики."],
    checkpoint: [
      "Полный CRUD с авторизацией и валидацией.",
      "Роли и policies закрывают чужие действия.",
      "Сервисный слой отделён от контроллеров.",
      "Миграции и фабрики воспроизводят БД с нуля."
    ],
    resources: [
      ["Laravel docs", "https://laravel.com/docs"],
      ["Laravel Bootcamp", "https://bootcamp.laravel.com"],
      ["Laracasts: курсы по Laravel", "https://laracasts.com/topics/laravel"],
      ["Laravel.su (рус.)", "https://laravel.su/docs/"]
    ]
  },
  {
    n: 8,
    key: "s8",
    group: "Бэкенд",
    title: "Redis и кэширование",
    lead: "Redis — не «ещё одна база», а инструмент для кэша, сессий, очередей и быстрых счётчиков. Здесь ты научишься выбирать структуры данных, TTL, инвалидацию и защиту от cache stampede.",
    hours: 20,
    tech: [
      "Redis",
      "Кэш",
      "TTL",
      "Сессии",
      "Очереди",
      "Инвалидация"
    ],
    learn: [
      {
        title: "Redis: структуры данных и TTL",
        desc: "Строки, хеши, списки, множества, sorted sets, TTL, ключи и память. Какую структуру выбрать под задачу и когда данные должны исчезнуть.",
        practice: "В redis-cli сохрани новеллу в hash, список глав в list и рейтинг в sorted set; выставь TTL и проверь память.",
        checkpoint: "Выбираешь структуру под задачу и понимаешь, что произойдёт при истечении TTL или eviction.",
        resources: [
          ["Redis: Data types", "https://redis.io/docs/latest/develop/data-types/"],
          ["Redis: EXPIRE", "https://redis.io/docs/latest/commands/expire/"]
        ],
        mistakes: ["Использовать KEYS в production.", "Кэшировать всё без TTL и политики вытеснения."]
      },
      {
        title: "Кэш-паттерны и ключи",
        desc: "Cache-aside, write-through, TTL jitter, версионирование ключей, hit/miss и выбор того, что вообще стоит кэшировать.",
        practice: "Закэшируй каталог через cache-aside: стабильные ключи, TTL с джиттером и метрики hit/miss.",
        checkpoint: "Объясняешь, что кэшируется, на сколько и как ключ инвалидируется при изменении.",
        mistakes: ["Кэшировать без инвалидации.", "Строить ключи из нестабильных данных и плодить дубли."],
        resources: [
          ["Redis: Caching patterns", "https://redis.io/docs/latest/develop/use/patterns/"],
          ["Laravel: Cache", "https://laravel.com/docs/cache"]
        ]
      },
      {
        title: "Сессии, очереди и счётчики",
        desc: "Redis для сессий, очередей, rate limiting, счётчиков и рейтингов. Атомарность, TTL и поведение при недоступности Redis.",
        practice: "Переведи сессии и очередь на Redis, сделай атомарный счётчик rate limit и sorted set для рейтинга.",
        checkpoint: "Понимаешь, какие операции должны быть атомарными и что произойдёт при потере Redis.",
        mistakes: ["Использовать Redis как основную БД без персистентности.", "Делать неатомарный read-modify-write для счётчика."],
        resources: [
          ["Laravel: Queues", "https://laravel.com/docs/queues"],
          ["Laravel: Rate limiting", "https://laravel.com/docs/routing#rate-limiting"]
        ]
      },
      {
        title: "Инвалидация и cache stampede",
        desc: "Инвалидация по событию, TTL, версии ключей, cache stampede, hot keys, single-flight и fallback при падении кэша.",
        practice: "Смоделируй одновременные запросы после истечения TTL и добавь lock/single-flight, чтобы не убить БД.",
        checkpoint: "Кэш не создаёт шторм запросов, устаревание ограничено, а при недоступности Redis есть fallback.",
        mistakes: ["Сбрасывать весь кэш при каждом изменении.", "Не иметь fallback при недоступности Redis."],
        resources: [
          ["Laravel: Atomic locks", "https://laravel.com/docs/cache#atomic-locks"],
          ["Redis: Caching patterns", "https://redis.io/docs/latest/develop/use/patterns/"]
        ]
      }
    ],
    practice: [
      "Закэшируй каталог новелл через cache-aside, настрой TTL и инвалидацию при изменении.",
      "Переведи сессии/очереди на Redis и добавь атомарный счётчик для rate limiting.",
      "Смоделируй cache stampede и защити БД блокировкой или single-flight."
    ],
    checkpoint: [
      "Кэш не отдаёт устаревшие данные дольше TTL.",
      "Понимаешь, когда Redis — кэш, а не источник истины.",
      "При падении Redis приложение деградирует, а не падает."
    ],
    resources: [
      ["Redis: Data types", "https://redis.io/docs/latest/develop/data-types/"],
      ["Redis: Caching patterns", "https://redis.io/docs/latest/develop/use/patterns/"],
      ["Laravel: Cache", "https://laravel.com/docs/cache"],
      ["Laravel: Atomic locks", "https://laravel.com/docs/cache#atomic-locks"]
    ]
  },
  {
    n: 9,
    key: "s9",
    group: "Бэкенд",
    title: "Laravel Advanced: API, очереди и real-time",
    lead: "Вторая половина Laravel — production-возможности: API, очереди, события, WebSockets, кэш, observability и тесты. Именно здесь приложение начинает вести себя как продукт.",
    hours: 80,
    tech: [
      "Sanctum",
      "API",
      "Queues",
      "Reverb",
      "Pulse",
      "Sentry",
      "Tests"
    ],
    learn: [
      {
        after: "Авторизация",
        title: "API и внешние клиенты",
        desc: "JSON-ресурсы, версионирование, Sanctum abilities, токены, rate limits и контракт API для мобильного клиента или Telegram WebApp.",
        practice: "Сделай API каталога и глав: JSON Resource, токен с ability read:chapters и версия /api/v1.",
        checkpoint: "API отдаёт стабильный контракт, не светит лишние поля и проверяет abilities.",
        mistakes: ["Отдавать Eloquent-модель напрямую.", "Использовать session-auth для внешнего API без понимания."],
        resources: [
          ["Laravel: API resources", "https://laravel.com/docs/eloquent-resources"],
          ["Laravel: Sanctum abilities", "https://laravel.com/docs/sanctum#token-abilities"]
        ]
      },
      {
        after: "Авторизация",
        title: "Rate limiting и защита API",
        desc: "Лимиты по IP/пользователю, throttle, 429, заголовки Retry-After, защита логина, поиска и публичных endpoint-ов.",
        practice: "Настрой отдельные лимиты для логина, поиска и API, проверь 429 и заголовки ответа.",
        checkpoint: "Лимиты не ломают легитимные сценарии и реально останавливают перебор.",
        mistakes: ["Полагаться на лимиты только на фронтенде.", "Ставить один лимит на все endpoint-ы."],
        resources: [
          ["Laravel: Rate limiting", "https://laravel.com/docs/routing#rate-limiting"],
          ["OWASP API Security", "https://owasp.org/API-Security/"]
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
        ],
        mistakes: ["Делать тяжёлую работу прямо в запросе.", "Не обрабатывать failed jobs."]
      },
      {
        after: "События и очереди",
        title: "Broadcasting и WebSockets",
        desc: "Laravel Reverb, Echo, приватные каналы, авторизация каналов, события и обновление прогресса в реальном времени.",
        practice: "Отправь событие JobProgressUpdated в приватный канал и покажи прогресс в Vue через Echo.",
        checkpoint: "Чужой пользователь не может подписаться на канал, а при обрыве соединение восстанавливается.",
        mistakes: ["Открывать приватный канал без авторизации.", "Путать broadcast события и очередь jobs."],
        resources: [
          ["Laravel: Broadcasting", "https://laravel.com/docs/broadcasting"],
          ["Laravel: Reverb", "https://laravel.com/docs/reverb"]
        ]
      },
      {
        after: "События и очереди",
        title: "Очереди в production",
        desc: "Retry, backoff, failed jobs, идемпотентность, таймауты, мониторинг воркеров и безопасный перезапуск.",
        practice: "Настрой retry/backoff для тяжёлой задачи, сделай её идемпотентной и разбери failed job.",
        checkpoint: "Повторная обработка не создаёт дубликаты, а failed job виден и воспроизводим.",
        mistakes: ["Не настраивать retry/backoff.", "Не мониторить failed jobs и узнавать о них от пользователей."],
        resources: [
          ["Laravel: Failed jobs", "https://laravel.com/docs/queues#dealing-with-failed-jobs"],
          ["Laravel: Job retries", "https://laravel.com/docs/queues#job-retries"]
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
        ],
        mistakes: ["Кэшировать без ключей и инвалидации.", "Хранить пользовательские файлы в public без проверки."]
      },
      {
        title: "Логи и ошибки",
        desc: "Каналы логов, Pail, обработка исключений, понятные сообщения пользователю.",
        practice: "Настрой канал логов, залогируй ошибку с контекстом и проверь её в Pail.",
        checkpoint: "Ошибку можно найти по пользователю и запросу, а пользователь видит понятное сообщение.",
        resources: [
          ["Laravel: Logging", "https://laravel.com/docs/logging"],
          ["Laravel: Error handling", "https://laravel.com/docs/errors"]
        ],
        mistakes: ["Логировать пароли и токены.", "Писать всё в один файл без контекста."]
      },
      {
        after: "Логи и ошибки",
        title: "Health checks и observability",
        desc: "Health endpoint, Pulse, Sentry, метрики, медленные запросы, ошибки и алерты — как видеть состояние production.",
        practice: "Добавь health endpoint, подключи Sentry и Pulse, создай алерт на ошибки и медленные запросы.",
        checkpoint: "Понимаешь, где смотреть ошибку, latency и очередь, и не узнаёшь о падении от пользователей.",
        mistakes: ["Путать health check с полноценным мониторингом.", "Логировать персональные данные и токены."],
        resources: [
          ["Laravel Pulse", "https://laravel.com/docs/pulse"],
          ["Sentry for Laravel", "https://docs.sentry.io/platforms/php/guides/laravel/"]
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
        ],
        mistakes: ["Тестировать только happy path.", "Зависеть от порядка тестов."]
      }
    ],
    practice: [
      "Добавь API с Sanctum abilities и rate limiting.",
      "Вынеси тяжёлые задачи в очереди, настрой retry/failed jobs и broadcast прогресса.",
      "Подключи кэш, health checks, Sentry/Pulse и покрой сценарии тестами."
    ],
    checkpoint: [
      "API отдаёт стабильный контракт и проверяет abilities.",
      "Очереди переживают retry и не создают дубликаты.",
      "Приватные каналы защищены, health/ошибки видны.",
      "Ключевые сценарии покрыты feature-тестами."
    ],
    resources: [
      ["Laravel: Broadcasting", "https://laravel.com/docs/broadcasting"],
      ["Laravel: Reverb", "https://laravel.com/docs/reverb"],
      ["Laravel: Pulse", "https://laravel.com/docs/pulse"],
      ["Laracasts: 30 Days to Learn Laravel", "https://laracasts.com/series/30-days-to-learn-laravel-11"]
    ]
  },
  {
    n: 10,
    key: "s10",
    group: "Связка",
    title: "Inertia.js: Laravel + Vue без API-боли",
    lead: "FLIB — это Inertia-приложение: серверный роутинг Laravel и SPA-интерфейс Vue без ручного API. Этап учит связывать два мира так, чтобы не писать fetch на каждый чих.",
    hours: 70,
    tech: [
      "Inertia 2",
      "Vue",
      "Ziggy",
      "useForm",
      "Breeze",
      "Vite"
    ],
    learn: [
      {
        title: "Как работает Inertia",
        desc: "Протокол, X-Inertia, ответы-страницы, отсутствие отдельного API, плюсы и ограничения.",
        practice: "Нарисуй схему запроса Inertia: браузер → Laravel → props → Vue и обратно.",
        checkpoint: "Объясняешь, почему не нужен отдельный API и в чём ограничения подхода.",
        resources: [
          ["Inertia: How it works", "https://inertiajs.com/how-it-works"],
          ["Inertia: Protocol", "https://inertiajs.com/the-protocol"]
        ],
        mistakes: ["Думать, что Inertia — это отдельный API.", "Забывать про серверный роутинг и контроллеры."]
      },
      {
        title: "Настройка",
        desc: "Laravel + Vite + Vue, root template, middleware, resolve страниц.",
        practice: "Подключи Inertia к Laravel, Vue и Vite и сделай первую страницу с props.",
        checkpoint: "Страница открывается без перезагрузки и получает данные с сервера.",
        resources: [
          ["Inertia: Server-side setup", "https://inertiajs.com/server-side-setup"],
          ["Inertia: Client-side setup", "https://inertiajs.com/client-side-setup"]
        ],
        mistakes: ["Забывать root template и получать пустую страницу.", "Ломать Vite HMR неверной настройкой."]
      },
      {
        after: "Настройка",
        title: "Inertia + TypeScript",
        desc: "Типизация PageProps, shared data, useForm, ошибок валидации и props страниц без any.",
        practice: "Опиши PageProps и типы форм, включи strict и убери any из Inertia-страниц.",
        checkpoint: "Props страниц типизированы, а неожиданное изменение серверного контракта ловится vue-tsc.",
        mistakes: ["Типизировать props как any.", "Дублировать типы страниц в каждом компоненте."],
        resources: [
          ["Inertia docs", "https://inertiajs.com/"],
          ["Vue: TypeScript overview", "https://vuejs.org/guide/typescript/overview.html"]
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
        ],
        mistakes: ["Перемонтировать layout на каждом переходе.", "Дублировать shared data в каждой странице."]
      },
      {
        title: "Ссылки и навигация",
        desc: "Link, router.visit, replace/preserveState/preserveScroll, prefetch.",
        practice: "Добавь Link с preserveScroll на фильтрах каталога.",
        checkpoint: "Фильтры меняют URL без потери скролла и с сохранением состояния.",
        resources: [
          ["Inertia: Links", "https://inertiajs.com/links"],
          ["Inertia: Manual visits", "https://inertiajs.com/manual-visits"]
        ],
        mistakes: ["Использовать <a> вместо Link и терять SPA-переходы.", "Забывать preserveScroll на фильтрах."]
      },
      {
        title: "Формы",
        desc: "useForm, submit, ошибки валидации, прогресс, сброс, файлы.",
        practice: "Сделай форму главы через useForm с ошибками Laravel и индикатором отправки.",
        checkpoint: "Ошибки отображаются у полей, кнопка блокируется, данные не дублируются.",
        resources: [
          ["Inertia: Forms", "https://inertiajs.com/forms"],
          ["Inertia: Validation", "https://inertiajs.com/validation"]
        ],
        mistakes: ["Отправлять форму вручную через fetch.", "Не показывать серверные ошибки валидации."]
      },
      {
        after: "Формы",
        title: "Ошибки, пустота и загрузка",
        desc: "Единые состояния loading/empty/error, обработка 404/403/500, flash-сообщения и восстановление после сбоя.",
        practice: "Сделай для каталога и кабинета состояния загрузки, пустоты и ошибки с понятными действиями.",
        checkpoint: "Пользователь не видит пустой экран и понимает, что произошло и что делать дальше.",
        mistakes: ["Оставлять пустой экран вместо empty state.", "Показывать техническую ошибку без действия."],
        resources: [
          ["Inertia: Error handling", "https://inertiajs.com/error-handling"],
          ["Inertia: Form errors", "https://inertiajs.com/forms#form-errors"]
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
        ],
        mistakes: ["Делать partial reload без необходимости.", "Забывать про deferred props и тяжёлые данные."]
      },
      {
        title: "Авторизация",
        desc: "Auth-поток Breeze, flash-сообщения, редиректы, 403/404 страницы.",
        practice: "Закрой кабинет автора middleware и покажи flash после входа.",
        checkpoint: "Гость редиректится, сообщение показывается один раз, 403 не выглядит как баг.",
        resources: [
          ["Inertia: Authentication", "https://inertiajs.com/authentication"],
          ["Inertia: Authorization", "https://inertiajs.com/authorization"]
        ],
        mistakes: ["Забывать flash-сообщения после входа.", "Отдавать 403 как 500."]
      },
      {
        after: "Авторизация",
        title: "Тестирование Inertia",
        desc: "Feature-тесты страниц, assertInertia, проверка props, ошибок валидации, редиректов и прав.",
        practice: "Напиши feature-тесты для каталога, кабинета автора и запрета чужого редактирования.",
        checkpoint: "Тесты проверяют компонент, props и статус, а не только HTTP-код.",
        mistakes: ["Тестировать только Vue-компоненты без серверной страницы.", "Не проверять props и ошибки валидации."],
        resources: [
          ["Inertia: Testing", "https://inertiajs.com/testing"],
          ["Laravel: Testing", "https://laravel.com/docs/testing"]
        ]
      },
      {
        title: "Ziggy",
        desc: "Именованные маршруты в JS, параметры, генерация URL.",
        practice: "Используй route() в Vue для трёх именованных маршрутов.",
        checkpoint: "URL не хардкодятся в компонентах, а параметры передаются явно.",
        resources: [
          ["Ziggy docs", "https://github.com/tighten/ziggy"],
          ["Laravel: Named routes", "https://laravel.com/docs/routing#named-routes"]
        ],
        mistakes: ["Хардкодить URL в компонентах.", "Забывать параметры именованного маршрута."]
      },
      {
        title: "Файлы",
        desc: "Загрузка обложек, превью, прогресс, валидация на сервере.",
        practice: "Загрузи обложку через Inertia-форму с превью и серверной валидацией.",
        checkpoint: "Файл сохраняется, ошибки размера и типа показываются, имя не ломает URL.",
        resources: [
          ["Inertia: File uploads", "https://inertiajs.com/file-uploads"],
          ["Laravel: File storage", "https://laravel.com/docs/filesystem"]
        ],
        mistakes: ["Не валидировать файл на сервере.", "Забывать прогресс и ошибки загрузки."]
      },
      {
        title: "SEO и мета",
        desc: "Title/meta через Head, Open Graph, обработка ошибок.",
        practice: "Настрой Head title/description для страниц новеллы и главы, проверь 404.",
        checkpoint: "Заголовки уникальны, Open Graph заполнен, страницы ошибок выглядят как часть продукта.",
        resources: [
          ["Inertia: Title & meta", "https://inertiajs.com/title-and-meta"],
          ["Inertia: Error handling", "https://inertiajs.com/error-handling"]
        ],
        mistakes: ["Одинаковый title на всех страницах.", "Забывать 404-страницу и canonical."]
      }
    ],
    practice: ["Переведи MVP на Inertia: кабинет автора с формами создания и редактирования, ридер, админ-таблицы с фильтрами.", "Все переходы — через Inertia, без ручных API-контроллеров."],
    checkpoint: [
      "Полный CRUD-цикл через Inertia с валидацией.",
      "Понимаешь, когда partial reload реально нужен.",
      "Нет дублирования API и серверных роутов."
    ],
    resources: [
      ["Inertia.js docs", "https://inertiajs.com"],
      ["Laravel Breeze docs", "https://laravel.com/docs/starter-kits"],
      ["Ziggy docs", "https://github.com/tighten/ziggy"],
      ["Inertia: формы", "https://inertiajs.com/forms"],
      ["Laravel.su: Inertia (рус.)", "https://laravel.su/docs/12.x/inertia"]
    ]
  },
  {
    n: 11,
    key: "s11",
    group: "Качество",
    title: "Тестирование и качество кода",
    lead: "Тесты, статический анализ, компонентные и E2E-тесты, CI. Здесь ты учишься доказывать, что код работает, а не надеяться на ручную проверку.",
    hours: 55,
    tech: [
      "Pest",
      "PHPStan",
      "ESLint",
      "Vitest",
      "Playwright",
      "Mutation",
      "CI"
    ],
    learn: [
      {
        title: "Пирамида тестов",
        desc: "Unit vs feature, что тестировать, а что нет, скорость и надёжность.",
        practice: "Составь карту тестов проекта: unit, feature, e2e и список того, что не тестируем.",
        checkpoint: "Понимаешь, почему большинство тестов — feature, а unit не дублируют фреймворк.",
        resources: [
          ["Martin Fowler: Test pyramid", "https://martinfowler.com/articles/practical-test-pyramid.html"],
          ["Laravel: Testing", "https://laravel.com/docs/testing"]
        ],
        mistakes: ["Писать только unit или только E2E.", "Гнаться за 100% покрытием без смысла."]
      },
      {
        title: "Pest",
        desc: "Синтаксис, expectations, datasets, hooks, Laravel-плагин, RefreshDatabase.",
        practice: "Напиши пять тестов с expectations, dataset и beforeEach.",
        checkpoint: "Тесты читаются как спецификация и не зависят от порядка запуска.",
        resources: [
          ["Pest docs", "https://pestphp.com/docs/installation"],
          ["Pest: Laravel plugin", "https://pestphp.com/docs/plugins/laravel"]
        ],
        mistakes: ["Делать тесты зависимыми от порядка.", "Мокать всё, включая простые value-объекты."]
      },
      {
        title: "Тесты сценариев",
        desc: "Авторизация, policies, валидация, очереди, уведомления, граничные случаи.",
        practice: "Покрой публикацию главы, права доступа и валидацию feature-тестами.",
        checkpoint: "Критические пути защищены от регрессии, а негативные сценарии тоже проверены.",
        resources: [
          ["Laravel: HTTP tests", "https://laravel.com/docs/http-tests"],
          ["Laravel: Authorization tests", "https://laravel.com/docs/authorization#testing"]
        ],
        mistakes: ["Тестировать реализацию, а не поведение.", "Забывать негативные и граничные кейсы."]
      },
      {
        title: "PHPStan",
        desc: "Level 7, baseline, generics, типизация массивов; Pint для стиля.",
        practice: "Запусти PHPStan level 7 и убери десять ошибок без добавления в baseline.",
        checkpoint: "Analyse проходит, baseline не растёт, а типы описывают реальные данные.",
        resources: [
          ["PHPStan: Getting started", "https://phpstan.org/user-guide/getting-started"],
          ["Larastan", "https://github.com/larastan/larastan"]
        ],
        mistakes: ["Добавлять всё в baseline.", "Использовать @var вместо реальных типов."]
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
        ],
        mistakes: ["Игнорировать vue-tsc.", "Отключать правила ESLint пачкой."]
      },
      {
        after: "Фронтенд-качество",
        title: "Vitest и компонентные тесты",
        desc: "Тестирование компонентов, composables и store, Vue Test Utils, моки и проверка доступности.",
        practice: "Покрой компонент ридера и useReaderSettings тестами Vitest + Vue Test Utils.",
        checkpoint: "Тесты ловят регрессию в поведении, а не в CSS-классах.",
        mistakes: ["Тестировать внутренние детали компонента.", "Забывать await nextTick при проверке DOM."],
        resources: [
          ["Vue Test Utils", "https://test-utils.vuejs.org/guide/"],
          ["Vitest", "https://vitest.dev/guide/"]
        ]
      },
      {
        after: "Фронтенд-качество",
        title: "Playwright E2E",
        desc: "Сквозные сценарии в браузере, селекторы, авторизация, тестовые данные, CI и отчёты.",
        practice: "Напиши E2E-сценарий регистрация → чтение главы → закладка и запусти его в CI.",
        checkpoint: "E2E проходит на чистой БД и не зависит от ручных шагов.",
        mistakes: ["Запускать E2E на реальной БД без сидов.", "Использовать хрупкие CSS-селекторы."],
        resources: [
          ["Playwright", "https://playwright.dev/docs/intro"],
          ["Playwright: CI", "https://playwright.dev/docs/ci"]
        ]
      },
      {
        after: "Pest",
        title: "Pest mutation testing",
        desc: "Мутационное тестирование, min score, выбор классов и интерпретация выживших мутантов.",
        practice: "Запусти mutation testing для RatingCalculator и подними score до 80%.",
        checkpoint: "Выжившие мутанты показывают реальные пробелы в тестах, а не шум.",
        mistakes: ["Гнаться за 100% и тратить время на эквивалентные мутанты.", "Мутировать весь проект сразу."],
        resources: [
          ["Pest: Mutation testing", "https://pestphp.com/docs/mutation-testing"],
          ["Pest docs", "https://pestphp.com/docs/installation"]
        ]
      },
      {
        title: "CI",
        desc: "GitHub Actions: тесты, линтеры, сборка на каждый PR, кэш зависимостей.",
        practice: "Сделай workflow с тестами, линтерами, сборкой и кэшем зависимостей.",
        checkpoint: "PR с красным CI нельзя смержить, а пайплайн воспроизводится локально.",
        resources: [
          ["GitHub Actions: Quickstart", "https://docs.github.com/en/actions/quickstart"],
          ["Laravel: CI example", "https://github.com/laravel/.github"],
          ["GitHub Actions: Workflow syntax", "https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions"]
        ],
        mistakes: ["CI без кэша и матрицы.", "Пускать красный CI в main."]
      },
      {
        after: "Секреты и бэкапы",
        title: "Dependency и secret audits",
        desc: "Composer audit, npm audit, Dependabot, secret scanning, обновление зависимостей и проверка лицензий.",
        practice: "Настрой Dependabot и audit в CI, обнови одну зависимость и проверь, что тесты проходят.",
        checkpoint: "Уязвимости и секреты находятся автоматически, а обновления не ломают проект.",
        mistakes: ["Игнорировать audit до инцидента.", "Обновлять всё сразу без тестов."],
        resources: [
          ["GitHub Dependabot", "https://docs.github.com/en/code-security/dependabot"],
          ["Composer audit", "https://getcomposer.org/doc/03-cli.md#audit"]
        ]
      }
    ],
    practice: ["Покрой регистрацию, публикацию главы и права доступа feature-тестами.", "Добавь Vitest для компонентов, Playwright для сквозного сценария, mutation testing и CI с coverage gate."],
    checkpoint: [
      "CI зелёный на каждом PR.",
      "Ключевые сценарии покрыты feature-тестами.",
      "Компонентные и E2E-тесты ловят регрессии.",
      "Coverage и mutation дают осмысленный сигнал."
    ],
    resources: [
      ["Pest docs", "https://pestphp.com/docs/installation"],
      ["PHPStan docs", "https://phpstan.org/user-guide/getting-started"],
      ["GitHub Actions docs", "https://docs.github.com/actions"],
      ["Playwright docs", "https://playwright.dev/docs/intro"],
      ["Vitest docs", "https://vitest.dev/guide/"]
    ]
  },
  {
    n: 12,
    key: "s12",
    group: "Качество",
    title: "Безопасность веб-приложения",
    lead: "OWASP, XSS/CSRF/IDOR, rate limiting, CSP, Purifier, секреты и бэкапы. Безопасность — не чеклист раз в год, а набор привычек в коде.",
    hours: 20,
    tech: [
      "OWASP",
      "CSRF",
      "XSS",
      "CSP",
      "Purifier",
      "Secrets",
      "Backups"
    ],
    learn: [
      {
        title: "OWASP Top 10",
        desc: "XSS, CSRF, SQLi, mass assignment, IDOR, небезопасные загрузки, SSRF.",
        practice: "Пройди чеклист OWASP по своему проекту и заведи issue на каждую найденную дыру.",
        checkpoint: "Нет критичных пунктов без плана исправления, а риск каждого понятен.",
        resources: [
          ["OWASP Top 10", "https://owasp.org/www-project-top-ten/"],
          ["OWASP Cheat Sheet Series", "https://cheatsheetseries.owasp.org/"]
        ],
        mistakes: ["Считать безопасность разовым чеклистом.", "Игнорировать IDOR и mass assignment."]
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
        ],
        mistakes: ["Полагаться только на фронтенд.", "Забывать rate limit на логине."]
      },
      {
        title: "Контент и CSP",
        desc: "HTML Purifier для пользовательского HTML, CSP-заголовки, безопасные ссылки.",
        practice: "Очисти HTML комментария через Purifier и включи CSP в report-only режиме.",
        checkpoint: "Скрипт в комментарии не выполняется, а CSP не ломает нужные ресурсы.",
        resources: [
          ["HTML Purifier", "http://htmlpurifier.org/"],
          ["MDN: CSP", "https://developer.mozilla.org/ru/docs/Web/HTTP/CSP"]
        ],
        mistakes: ["Разрешать unsafe-inline в CSP.", "Не чистить пользовательский HTML."]
      },
      {
        title: "Секреты и бэкапы",
        desc: ".env, менеджер секретов, ротация ключей, резервные копии и проверка восстановления.",
        practice: "Проверь .env и историю git, включи secret scanning и восстанови бэкап.",
        checkpoint: "Секретов в git нет, а бэкап реально восстанавливается на чистом окружении.",
        resources: [
          ["GitHub: Secret scanning", "https://docs.github.com/en/code-security/secret-scanning"],
          ["Laravel: Encryption", "https://laravel.com/docs/encryption"]
        ],
        mistakes: ["Хранить секреты в репозитории.", "Не проверять восстановление бэкапа."]
      }
    ],
    practice: ["Пройди OWASP-чеклист по проекту и заведи issues на найденное.", "Настрой rate limiting, CSP report-only, Purifier и secret scanning; проверь восстановление бэкапа."],
    checkpoint: [
      "Нет критичных пунктов OWASP без плана.",
      "Пользовательский HTML очищается, CSP не ломает приложение.",
      "Секретов в git нет, бэкап восстанавливается."
    ],
    resources: [
      ["OWASP Top 10", "https://owasp.org/www-project-top-ten/"],
      ["Laravel: Security", "https://laravel.com/docs/security"],
      ["MDN: CSP", "https://developer.mozilla.org/ru/docs/Web/HTTP/CSP"],
      ["HTML Purifier", "http://htmlpurifier.org/"],
      ["GitHub: Secret scanning", "https://docs.github.com/en/code-security/secret-scanning"]
    ]
  },
  {
    n: 13,
    key: "s13",
    group: "Качество",
    title: "Docker и контейнеризация",
    lead: "Docker делает окружение воспроизводимым: образы, Compose, nginx, PHP-FPM, Supervisord и данные в volume. Локально и на сервере — одинаково.",
    hours: 30,
    tech: [
      "Docker",
      "Compose",
      "nginx",
      "PHP-FPM",
      "Supervisord",
      "MySQL"
    ],
    learn: [
      {
        title: "Docker",
        desc: "Образы, контейнеры, слои, Dockerfile, multi-stage build, тома и сети.",
        practice: "Собери образ для Laravel, запусти контейнер и зайди внутрь через docker exec.",
        checkpoint: "Понимаешь разницу image, container и volume и не путаешь их в командах.",
        resources: [
          ["Docker: Get started", "https://docs.docker.com/get-started/"],
          ["Dockerfile reference", "https://docs.docker.com/reference/dockerfile/"]
        ],
        mistakes: ["Запускать всё от root.", "Хранить данные внутри контейнера без volume."]
      },
      {
        title: "Compose",
        desc: "Сервисы, env, depends_on, healthcheck, профили, общие сети.",
        practice: "Опиши app, db и redis в compose с healthcheck и переменными окружения.",
        checkpoint: "docker compose up поднимает всё одной командой без ручных шагов.",
        resources: [
          ["Docker Compose", "https://docs.docker.com/compose/"],
          ["Docker: Awesome Compose", "https://github.com/docker/awesome-compose"]
        ],
        mistakes: ["Хардкодить пароли в compose.", "Забывать healthcheck и depends_on."]
      },
      {
        title: "nginx + PHP-FPM",
        desc: "Server blocks, fastcgi_pass, статика, gzip, кэширование, лимиты.",
        practice: "Настрой server block, fastcgi и статику, проверь ответы 404 и 500.",
        checkpoint: "PHP выполняется через FPM, статика отдаётся nginx, ошибки не раскрывают пути.",
        resources: [
          ["nginx: Beginner's guide", "https://nginx.org/en/docs/beginners_guide.html"],
          ["PHP-FPM", "https://www.php.net/manual/ru/install.fpm.php"]
        ],
        mistakes: ["Отдавать PHP как статику.", "Открывать лишние порты наружу."]
      },
      {
        title: "Supervisord",
        desc: "Queue worker и scheduler внутри контейнера, автоперезапуск.",
        practice: "Запусти queue worker и scheduler под supervisord и убей процесс, чтобы проверить перезапуск.",
        checkpoint: "Процессы поднимаются сами, логируются и не плодят дубликаты.",
        resources: [
          ["Supervisord", "http://supervisord.org/"],
          ["Laravel: Supervisor configuration", "https://laravel.com/docs/queues#supervisor-configuration"]
        ],
        mistakes: ["Запускать воркеры без автоперезапуска.", "Дублировать scheduler в нескольких контейнерах."]
      },
      {
        title: "MySQL/Redis в контейнерах",
        desc: "Persistence, healthcheck, пароли, volumes.",
        practice: "Добавь volume, healthcheck и пароли для MySQL и Redis.",
        checkpoint: "Данные переживают перезапуск контейнеров, а без healthcheck сервис не стартует зря.",
        resources: [
          ["Docker: MySQL", "https://hub.docker.com/_/mysql"],
          ["Docker: Redis", "https://hub.docker.com/_/redis"]
        ],
        mistakes: ["Забывать volume и терять данные.", "Оставлять БД без пароля."]
      },
      {
        title: "Конфигурация production",
        desc: "APP_ENV, config/route cache, optimize, права на storage, логи.",
        practice: "Собери production-образ, включи config/route cache и optimize, выключи debug.",
        checkpoint: "APP_DEBUG=false, ошибки не показывают стек, а конфиг закэширован.",
        resources: [
          ["Laravel: Deployment", "https://laravel.com/docs/deployment"],
          ["Laravel: Optimization", "https://laravel.com/docs/deployment#optimization"]
        ],
        mistakes: ["Оставлять APP_DEBUG=true.", "Кэшировать конфиг с секретами в образе."]
      }
    ],
    practice: ["Собери Dockerfile и compose для Laravel, nginx, MySQL и Redis.", "Настрой Supervisord для очередей, volume для данных и production-конфиг."],
    checkpoint: [
      "Одна команда поднимает проект с нуля.",
      "PHP работает через FPM, статика через nginx.",
      "Данные переживают перезапуск, production-конфиг без debug."
    ],
    resources: [
      ["Docker docs", "https://docs.docker.com"],
      ["Docker Compose", "https://docs.docker.com/compose/"],
      ["nginx: Beginner guide", "https://nginx.org/en/docs/beginners_guide.html"],
      ["Supervisord", "http://supervisord.org/"],
      ["Laravel: Deployment", "https://laravel.com/docs/deployment"]
    ]
  },
  {
    n: 14,
    key: "s14",
    group: "Качество",
    title: "Деплой и эксплуатация",
    lead: "Сервер, HTTPS, CI/CD, staging, zero-downtime, мониторинг, нагрузка и бэкапы. Здесь проект превращается в сервис, который работает без тебя.",
    hours: 30,
    tech: [
      "VPS",
      "SSH",
      "HTTPS",
      "CI/CD",
      "Staging",
      "Sentry",
      "Pulse",
      "Backups"
    ],
    learn: [
      {
        title: "VPS и SSH",
        desc: "Пользователи, ключи, firewall, обновления, домен и DNS.",
        practice: "Создай пользователя, настрой ключи и firewall, отключи вход root по паролю.",
        checkpoint: "SSH по паролю закрыт, открыты только нужные порты, обновления ставятся.",
        resources: [
          ["DigitalOcean: SSH setup", "https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-22-04"],
          ["UFW", "https://help.ubuntu.com/community/UFW"]
        ],
        mistakes: ["Разрешать root-логин по паролю.", "Оставлять SSH открытым для всех."]
      },
      {
        title: "HTTPS",
        desc: "Let's Encrypt, автопродление, редиректы, HSTS.",
        practice: "Выпусти сертификат Let's Encrypt и настрой автоматическое обновление.",
        checkpoint: "HTTP редиректит на HTTPS, сертификат валиден и обновляется без простоя.",
        resources: [
          ["Certbot", "https://certbot.eff.org/"],
          ["Let's Encrypt", "https://letsencrypt.org/ru/"]
        ],
        mistakes: ["Использовать самоподписанный сертификат в production.", "Забывать автообновление сертификата."]
      },
      {
        after: "Конфигурация production",
        title: "CI/CD pipeline",
        desc: "GitHub Actions: тесты, сборка образа, пуш в registry, миграции и деплой на сервер. Разделение CI и CD.",
        practice: "Сделай pipeline: тесты → сборка Docker-образа → деплой на staging по тегу.",
        checkpoint: "Деплой запускается автоматически, а при падении тестов не доходит до сервера.",
        mistakes: ["Деплоить без тестов.", "Печатать секреты в логах CI."],
        resources: [
          ["GitHub Actions: Deployment", "https://docs.github.com/en/actions/deployment"],
          ["Laravel: Deployment", "https://laravel.com/docs/deployment"]
        ]
      },
      {
        after: "CI/CD pipeline",
        title: "Staging и zero-downtime",
        desc: "Отдельное окружение, миграции без простоя, health checks, blue-green/rolling и rollback.",
        practice: "Подними staging, проверь деплой без простоя и откат на предыдущий релиз.",
        checkpoint: "Миграции совместимы со старой версией, а rollback возвращает рабочее состояние.",
        mistakes: ["Делать несовместимые миграции в один шаг.", "Не иметь плана rollback."],
        resources: [
          ["Laravel: Zero-downtime deployment", "https://laravel.com/docs/deployment#zero-downtime-deployment"],
          ["GitHub Actions environments", "https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment"]
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
        ],
        mistakes: ["Узнавать о падении от пользователей.", "Писать логи без контекста и request id."]
      },
      {
        after: "Мониторинг и логи",
        title: "Sentry, Pulse и health checks",
        desc: "Ошибки, медленные запросы, очереди, health endpoint, алерты и корреляция событий по request id.",
        practice: "Подключи Sentry и Pulse, добавь health endpoint и алерт на 500-е и рост очереди.",
        checkpoint: "Ошибка находится по request id, а деградация видна до жалоб пользователей.",
        mistakes: ["Смотреть только логи и не видеть метрики.", "Логировать PII и токены."],
        resources: [
          ["Sentry for Laravel", "https://docs.sentry.io/platforms/php/guides/laravel/"],
          ["Laravel Pulse", "https://laravel.com/docs/pulse"]
        ]
      },
      {
        after: "Sentry, Pulse и health checks",
        title: "Нагрузочное тестирование",
        desc: "k6, сценарии нагрузки, baseline, p95/p99, узкие места, профилирование запросов и фронтенда.",
        practice: "Сними baseline каталога через k6, найди узкий запрос и исправь его, затем сравни p95.",
        checkpoint: "Есть baseline и понятный план, а оптимизация подтверждена замерами, а не ощущениями.",
        mistakes: ["Запускать нагрузку на production без предупреждения.", "Смотреть только среднее и игнорировать p95/p99."],
        resources: [
          ["k6 docs", "https://k6.io/docs/"],
          ["Laravel Telescope", "https://laravel.com/docs/telescope"]
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
        ],
        mistakes: ["Делать бэкап без проверки восстановления.", "Хранить бэкап на том же сервере."]
      }
    ],
    practice: ["Разверни VPS с HTTPS, CI/CD и staging.", "Настрой rollback, Sentry/Pulse, алерты, нагрузочный baseline и восстановление бэкапа."],
    checkpoint: [
      "Деплой и rollback автоматизированы.",
      "HTTPS и health checks работают.",
      "Мониторинг замечает деградацию до пользователей.",
      "Бэкап восстанавливается на чистой машине."
    ],
    resources: [
      ["Laravel: Deployment", "https://laravel.com/docs/deployment"],
      ["Certbot", "https://certbot.eff.org/"],
      ["DigitalOcean tutorials", "https://www.digitalocean.com/community/tutorials"],
      ["GitHub Actions: Deployment", "https://docs.github.com/en/actions/deployment"],
      ["Laravel Pulse", "https://laravel.com/docs/pulse"]
    ]
  },
  {
    n: 15,
    key: "s15",
    group: "Продукт",
    title: "Сборка FogrestRead: большой продукт",
    lead: "Теперь не учишь технологии, а строишь продукт. Разбей работу на спринты по 1–2 недели, после каждого — рабочая версия, тесты и деплой. Сверяйся с FLIB, но не копируй слепо: принимай решения сам.",
    hours: 240,
    tech: [
      "Laravel",
      "Vue",
      "Inertia",
      "MySQL",
      "Redis",
      "Docker",
      "Sprints"
    ],
    learn: [
      {
        title: "Спринт 1 — MVP чтения",
        desc: "Регистрация, профиль, роли, каталог, новелла, главы, ридер с настройками, прогресс, закладки.",
        practice: "Сделай sprint 1 целиком: auth, каталог, новелла, глава, ридер и закладки.",
        checkpoint: "Пользователь проходит путь регистрация → чтение → возврат к сохранённому месту.",
        resources: [
          ["FLIB (ваш репозиторий)", "https://github.com/krade88/FLIB"],
          ["Laravel docs", "https://laravel.com/docs"]
        ],
        mistakes: ["Пытаться построить всё сразу.", "Не иметь критериев готовности спринта."]
      },
      {
        title: "Спринт 2 — Социальные функции",
        desc: "Комментарии деревом, лайки, спойлеры, рецензии, подписки, коллекции, поиск и фильтры.",
        practice: "Добавь комментарии деревом, лайки, рецензии, подписки, коллекции и поиск.",
        checkpoint: "Счётчики и уведомления не расходятся с БД после удаления и модерации.",
        resources: [
          ["Laravel: Relationships", "https://laravel.com/docs/eloquent-relationships"],
          ["Laravel: Notifications", "https://laravel.com/docs/notifications"]
        ],
        mistakes: ["Добавлять соцфункции без модерации.", "Допускать расхождение счётчиков и БД."]
      },
      {
        title: "Спринт 3 — Авторы и команды",
        desc: "Кабинет автора, черновики, планирование, версии глав, импорт, команды, роли, обсуждения, активность, статистика.",
        practice: "Сделай кабинет автора, черновики, версии, импорт, команды и ленту активности.",
        checkpoint: "Автор публикует главу, команда видит активность, а версии можно откатить.",
        resources: [
          ["Laravel: File storage", "https://laravel.com/docs/filesystem"],
          ["Laravel: Queues", "https://laravel.com/docs/queues"]
        ],
        mistakes: ["Делать версии глав без тестов.", "Импортировать главы без лимитов."]
      },
      {
        title: "Спринт 4 — Админка",
        desc: "Дашборд, модерация, жалобы, пользователи и роли, очереди, настройки, кэш.",
        practice: "Сделай админку: пользователи, жалобы, скрытие контента, очереди и настройки.",
        checkpoint: "Модератор закрывает жалобу, действие логируется, а права не обходятся через URL.",
        resources: [
          ["Laravel: Authorization", "https://laravel.com/docs/authorization"],
          ["Laravel: Queues", "https://laravel.com/docs/queues"]
        ],
        mistakes: ["Делать админку без audit log.", "Проверять права только на фронтенде."]
      },
      {
        title: "Спринт 5 — Полировка",
        desc: "Календарь, уведомления, тёмная тема, мобильный ридер манги, доступность, производительность, SEO.",
        practice: "Доведи мобильный ридер, тёмную тему, календарь, a11y и Lighthouse на ключевых страницах.",
        checkpoint: "Нет горизонтального скролла, Lighthouse 90+, а клавиатура проходит весь сценарий.",
        resources: [
          ["Lighthouse", "https://developer.chrome.com/docs/lighthouse/overview/"],
          ["WCAG quick reference", "https://www.w3.org/WAI/WCAG22/quickref/"]
        ],
        mistakes: ["Полировать без метрик и baseline.", "Тестировать мобильный ридер только в эмуляторе."]
      },
      {
        after: "Спринт 5 — Полировка",
        title: "Спринт 6 — Real-time уведомления",
        desc: "Reverb/Echo, приватные каналы, прогресс импорта, уведомления о главах и обсуждения команд в реальном времени.",
        practice: "Сделай real-time прогресс импорта и уведомление о новой главе в приватном канале.",
        checkpoint: "Событие приходит только своим пользователям, а при обрыве соединение восстанавливается.",
        mistakes: ["Открывать приватные каналы без auth.", "Дублировать уведомления при переподключении."],
        resources: [
          ["Laravel Broadcasting", "https://laravel.com/docs/broadcasting"],
          ["Laravel Reverb", "https://laravel.com/docs/reverb"]
        ]
      },
      {
        after: "Спринт 5 — Полировка",
        title: "Спринт 7 — PWA и offline-чтение",
        desc: "Service worker, manifest, IndexedDB, кэш глав, offline-страница, обновление приложения и лимиты хранилища.",
        practice: "Сделай PWA: установка, кэш текущей главы, offline-страница и синхронизация прогресса.",
        checkpoint: "Глава открывается без сети, прогресс не теряется, а обновление не ломает кэш.",
        mistakes: ["Кэшировать вообще всё.", "Забывать обновление service worker и получать старую версию."],
        resources: [
          ["vite-plugin-pwa", "https://vite-pwa-org.netlify.app/guide/"],
          ["web.dev: Learn PWA", "https://web.dev/learn/pwa"]
        ]
      },
      {
        after: "Спринт 5 — Полировка",
        title: "Спринт 8 — Редактор и медиа",
        desc: "Tiptap, сноски, вставка изображений, санитайзинг HTML, cropper, WebP, несколько обложек и манга-страницы.",
        practice: "Сделай редактор главы с изображениями, сносками и превью, добавь обработку и лимиты.",
        checkpoint: "Пользовательский HTML очищается, изображения оптимизируются, а лимиты не обходятся.",
        mistakes: ["Вставлять HTML без санитайзинга.", "Хранить оригиналы без лимитов и ресайза."],
        resources: [
          ["Tiptap docs", "https://tiptap.dev/docs"],
          ["Cropper.js", "https://github.com/fengyuanchen/cropperjs"]
        ]
      },
      {
        after: "Спринт 5 — Полировка",
        title: "Спринт 9 — Поиск, SEO и discovery",
        desc: "FULLTEXT/FTS5, релевантность, фильтры, sitemap, robots, canonical, Open Graph и рекомендации.",
        practice: "Сделай поиск с фильтрами, sitemap и SEO-мета для новеллы, главы и команды.",
        checkpoint: "Поиск не сканирует таблицу, sitemap не содержит приватных URL, а страницы индексируются корректно.",
        mistakes: ["Искать через LIKE %...% на больших данных.", "Отправлять в sitemap приватные и удалённые страницы."],
        resources: [
          ["MySQL: Full-text search", "https://dev.mysql.com/doc/refman/8.4/en/fulltext-search.html"],
          ["Sitemaps protocol", "https://www.sitemaps.org/protocol.html"]
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
          ["Keep a Changelog", "https://keepachangelog.com/ru/"],
          ["ADR", "https://adr.github.io/"]
        ],
        mistakes: ["Не вести ADR.", "Релизить без changelog и тегов."]
      },
      {
        title: "Работа с чужим кодом",
        desc: "Читай FLIB: сервисы, policies, миграции, компоненты. Сравнивай со своим и выписывай решения.",
        practice: "Разбери один модуль FLIB: сервис, policy и тесты, затем повтори подход у себя.",
        checkpoint: "Можешь объяснить поток данных модуля и чем твоё решение отличается.",
        resources: [
          ["FLIB (ваш репозиторий)", "https://github.com/krade88/FLIB"],
          ["GitHub: Code navigation", "https://docs.github.com/en/repositories/working-with-files/using-files/navigating-code-on-github"]
        ],
        mistakes: ["Копировать код без понимания.", "Не читать тесты и истории решений."]
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
        ],
        mistakes: ["Оптимизировать без baseline.", "Смотреть только Lighthouse и игнорировать бэкенд."]
      }
    ],
    practice: ["Веди проект как продукт: бэклог, спринты, демо в конце каждого, деплой.", "На финале пройди по сценариям FLIB и закрой пробелы."],
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
    n: 16,
    key: "s16",
    group: "Продукт",
    title: "Финиш: портфолио и выход на рынок",
    lead: "Финальный этап — упаковать результат. Код без истории и демо никто не увидит. Сделай так, чтобы проект можно было открыть, запустить и понять за 10 минут.",
    hours: 35,
    tech: [
      "README",
      "Демо",
      "Видео",
      "Интервью",
      "Портфолио"
    ],
    learn: [
      {
        title: "README и документация",
        desc: "Скриншоты, стек, архитектура, запуск, переменные окружения, тесты, деплой.",
        practice: "Напиши README с запуском, скриншотами, архитектурой, тестами и деплоем.",
        checkpoint: "Новый человек запускает проект по шагам и не задаёт вопросов.",
        resources: [
          ["Make a README", "https://www.makeareadme.com"],
          ["GitHub: About READMEs", "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes"]
        ],
        mistakes: ["README без команды запуска.", "Скриншоты без контекста."]
      },
      {
        after: "README и документация",
        title: "Архитектурная схема и ADR",
        desc: "C4-диаграмма, границы сервисов, decisions log, компромиссы и объяснение архитектуры за 5 минут.",
        practice: "Нарисуй C4-схему проекта и напиши три ADR: стек, Inertia и выбор БД.",
        checkpoint: "Схема совпадает с кодом, а каждое ключевое решение имеет контекст и альтернативы.",
        mistakes: ["Писать ADR без контекста и альтернатив.", "Оставлять схему устаревшей после изменений."],
        resources: [
          ["ADR", "https://adr.github.io/"],
          ["C4 model", "https://c4model.com/"]
        ]
      },
      {
        title: "Демо",
        desc: "Рабочая ссылка, тестовые аккаунты, 2–3-минутное видео с ключевыми сценариями.",
        practice: "Запиши трёхминутное видео ключевых сценариев и выложи рабочее демо.",
        checkpoint: "Демо работает без твоего участия, а видео показывает продукт, а не код.",
        resources: [
          ["OBS Studio", "https://obsproject.com/"],
          ["Loom", "https://www.loom.com"],
          ["YC: How to demo", "https://www.ycombinator.com/library/6q-how-to-demo"]
        ],
        mistakes: ["Демо падает на тестовых данных.", "Видео про код, а не про продукт."]
      },
      {
        title: "История проекта",
        desc: "Чистые коммиты, issues, roadmap, changelog. Показывает инженерную зрелость.",
        practice: "Приведи коммиты к Conventional Commits, добавь CHANGELOG и roadmap.",
        checkpoint: "История читается как развитие продукта, а не как свалка правок.",
        resources: [
          ["Conventional Commits", "https://www.conventionalcommits.org/ru/"],
          ["Keep a Changelog", "https://keepachangelog.com/ru/"]
        ],
        mistakes: ["Коммиты fix/fix2 без смысла.", "Отсутствие changelog и roadmap."]
      },
      {
        title: "Самопрезентация",
        desc: "Уметь за 5 минут объяснить архитектуру, компромиссы, N+1, очереди, безопасность.",
        practice: "Запиши пятиминутный рассказ об архитектуре и компромиссах проекта.",
        checkpoint: "Укладываешься в пять минут и отвечаешь на пять вопросов по решениям.",
        resources: [
          ["STAR method", "https://www.themuse.com/advice/star-interview-method"],
          ["Tech Interview Handbook: resume", "https://www.techinterviewhandbook.org/resume/"]
        ],
        mistakes: ["Рассказ дольше пяти минут.", "Не упоминать компромиссы."]
      },
      {
        after: "Самопрезентация",
        title: "Soft skills и командная работа",
        desc: "Код-ревью, оценка задач, ADR/RFC, демо, обратная связь и разбор инцидентов без поиска виноватых.",
        practice: "Проведи ревью чужого PR по чеклисту, оцени задачу с запасом и проведи ретроспективу инцидента.",
        checkpoint: "Фидбэк конкретен и уважителен, оценка содержит риски, а ретро заканчивается действиями.",
        mistakes: ["Код-ревью как критика личности.", "Оценка задачи без запаса и рисков."],
        resources: [
          ["Google code review", "https://google.github.io/eng-practices/review/"],
          ["Conventional Commits", "https://www.conventionalcommits.org/ru/"]
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
        ],
        mistakes: ["Зубрить ответы без практики.", "Молчать при решении задачи."]
      },
      {
        after: "Подготовка к интервью",
        title: "System design для одной фичи",
        desc: "Требования, ограничения, API, схема данных, кэш, очереди, масштабирование и компромиссы на примере ленты или поиска.",
        practice: "Спроектируй ленту обновлений и поиск по новеллам на 100 000 пользователей, защити решения.",
        checkpoint: "Умеешь объяснить границы, узкие места и что изменится при росте нагрузки в 10 раз.",
        mistakes: ["Рисовать микросервисы для MVP.", "Игнорировать лимиты и стоимость инфраструктуры."],
        resources: [
          ["System Design Primer", "https://github.com/donnemartin/system-design-primer"],
          ["System Design 101", "https://github.com/ByteByteGoHq/system-design-101"]
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
        ],
        mistakes: ["Учить всё сразу.", "Не иметь измеримой цели на полгода."]
      }
    ],
    practice: ["Оформи портфолио-кейс: README, скриншоты, схема БД, демо, видео, список технологий и решений.", "Проведи 3 mock-интервью и собери фидбэк."],
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
  {
    name: "Фундамент",
    color: "#8b5cf6"
  },
  {
    name: "Фронтенд",
    color: "#22d3ee"
  },
  {
    name: "Бэкенд",
    color: "#34d399"
  },
  {
    name: "Связка",
    color: "#fbbf24"
  },
  {
    name: "Качество",
    color: "#fb7185"
  },
  {
    name: "Продукт",
    color: "#60a5fa"
  }
];
