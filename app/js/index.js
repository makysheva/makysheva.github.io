// Фильтрация в портфолио

(function () {
    const filterBtn = document.querySelectorAll('.btn')
    const portfolio = document.querySelectorAll('.portfolio-item')

    // filterBtn.forEach((btn) => {

    //     btn.addEventListener('click', () => {
    //         let attrDataTypeView = btn.getAttribute('data-type')

    //         portfolio.forEach((portfolioItem) => {
    //             let filterDataType = portfolioItem.getAttribute('data-type')

    //             if(filterDataType === attrDataTypeView) {
    //                 portfolioItem.classList.add('portfolio-item_hidden');
    //             } else {
    //                 portfolioItem.classList.remove('portfolio-item_hidden');
    //             }
    //         })
    //     })
    // })

    for(let i=0; i < filterBtn.length; i++){
        filterBtn[i].onclick = function(e){
            e.preventDefault()
            let attrDataTypeView = filterBtn[i].getAttribute('data-type')

            for(let k=0; k < portfolio.length; k++){
                let filterDataType = portfolio[k].getAttribute('data-type')

                if(filterDataType === attrDataTypeView) {
                    portfolio[k].classList.add('portfolio-item_hidden');
                } else {
                    portfolio[k].classList.remove('portfolio-item_hidden');
                }
            }
        }

    }
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