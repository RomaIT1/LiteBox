Modules.header = function header(){
   //BURGER SCRIPT
   const iconMenu = document.querySelector('.menu-icon')
   const navMenu = document.querySelector('.nav')

   if (iconMenu){
      iconMenu.addEventListener('click', function(){
         document.body.classList.toggle('_frozen')
         iconMenu.classList.toggle('_active')
         navMenu.classList.toggle('_active')
      })
   }
}