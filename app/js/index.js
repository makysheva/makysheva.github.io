// Фильтрация в портфолио

(function () {
    const filterBtn = document.querySelectorAll('.btn')
    const portfolio = document.querySelectorAll('.portfolio-item')

    filterBtn.forEach((btn) => {

        btn.addEventListener('click', () => {
            let attrDataTypeView = btn.getAttribute('data-type')

            portfolio.forEach((portfolioItem) => {
                let filterDataType = portfolioItem.getAttribute('data-type')
                
                if(filterDataType === attrDataTypeView) {
                    portfolioItem.classList.add('portfolio-item_hidden');
                } else {
                    portfolioItem.classList.remove('portfolio-item_hidden');
                }
            })
        })
    })
})();

// Закрытие меню при клике на пункт меню
(function () {
    const menuItems = document.querySelectorAll('.menu-item')
    const menuWrap = document.querySelectorAll('.menu-wrap')

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener('click', () => {
            menuWrap.forEach((wrap) => {

                // if(wrap)
                // wrap.style.display = "none"
                
            })     
        })
    })
})();

// Показать меню при клике на иконку
$('.mobile-menu').on('click', function(event) {
    event.preventDefault();
    $('.menu-wrap').toggleClass('menu-active')
    $('.menu-btn').toggleClass('menu-active')
})