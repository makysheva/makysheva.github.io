const { contains } = require("jquery");

(function(){
    const menuExpander = document.querySelectorAll('.js-menu__expander')
    const submenu = document.querySelectorAll('.js-menu__submenu')

    menuExpander.forEach((menu) => {
        menu.addEventListener('click', (e) => {
            e.preventDefault()
            submenu.forEach((el) =>{
                el.classList.toggle('menu__submenu--visible')
                e.preventDefault()
            })
        })
    })
})();