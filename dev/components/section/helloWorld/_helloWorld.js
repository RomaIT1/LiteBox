Modules.helloWorld = function helloWorld(){
   const page = document.createElement('div')
   page.classList.add('hello', 'container')
   page.setAttribute('style', 'text-align: center; margin-top: 50px; padding: 30px 0 50px')
   page.insertAdjacentHTML('afterbegin', `
      <h2 style='margin-bottom: 25px; font-size: 40px; font-weight: 500;'>Hello, LiteBox</h2>
      <p style='font-size: 18px; max-width: 820px; margin: 0 auto; line-height: 130%; '>
         Если вы видите это окно - это значим, что сборка "LiteBox" была успешно загружена и подключена к проекту. Что бы
         убрать окно приветствия - нужно удалить данную секцию из section и отключить ее в файле app.js. Приятной разработки :)
      </p>
   `)
   document.querySelector('.page').appendChild(page)
}