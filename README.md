# Краткое описание коробки

Коробка "LiteBox" создана для быстрой разработки веб - приложений и включает в себя компонентный подход для написания качественного кода. С данным шаблоном легко масштабировать и разрабатывать. Сама же коробка собирается с помощу технологии "GULP", по этому качество гарантируем. Так же сборка включает в себя использование SCSS.

## Быстрый старт (Начало работы)

Для старта вам понадобятся все файлы на вашем компьютере, которые есть в репозитории. После установки переименуйте корневую папку на текущее название вашего проекта, далее в консоле вы должны перейти в данную папку и установить полный пакет всех компонентов и модулей npm, набрав команду:

```bash
npm i
```

## Команды

Есть 2 команды, которые используются в данном проекте:

1. Первая - команда для разработки, по умолчанию открывает страницу сайта на вашем браузере. Если вы увидели окно приветствия на странице - поздравляю, теперь можно разрабатывать ваше приложение!

```bash
gulp
```

2. Вторая - команда для сборки проекта для production. Данная команда минифицирует весь исходный код, сжимает картинки и создает папку dist в корне проекта. 

```bash
gulp build
```

## Файловая структура проекта

После успешной установки всех модулей - сборка полностью готова к работе. Для начала мы ознакомимся с файловой структурой и поговорим о папках и файлах.

dev - папка со всеми исходными материалами для разработки.
    components - папка компонентов приложения
        section - папка с секциями (header, about, form, footer, main, aside...)
            header - папка уже с заготовкой для секции header 
                _header.html
                _header.scss
                _header.js

            footer - папка уже с заготовкой для секции footer
                _footer.html
                _footer.scss
                _footer.js

            welcome - папка уже с заготовкой для секции welcome, которая обычно идет после header'a как offer
               _welcome.html
               _welcome.scss
               _welcome.js

            head - папка с настройками тега <head>
                _head.html
            
            modules.js - файл, который в себе содержит все модули всех подключаемых секций

        widgets - папка уже с заготовленными компонентами, которые чаще всего используются на сайте.
            interactive.scss - стилистика кнопок, полей и других интерактивных компонентов
            logo.scss - стилистика для логотипа
            menu-icon.scss - стилистика для иконки меню - бургера
            nav.scss - стилистика для главной навигации сайта
            social.scss - стилистика для панельки социальных сетей
            title.scss - стилистика главных заголовков
   
    

        
    scss - папка с системными файлами scss и не только
        system.scss - системный файл для настроек, который никак не изменяется при разработке
        static - папка со статическими файлами scss
            fonts.scss - файл с подключением шрифтов, используется в разработке.
            reset.scss - файл обнуления стилей, никак не изменяется при разработке
    


```python
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)