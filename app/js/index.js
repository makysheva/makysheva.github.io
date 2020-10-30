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

// const mobileMenu = document.querySelector('.mobile-menu')
// const menuWrap = document.querySelector('.menu-wrap')

// // Показать меню при клике на иконку
// $('.mobile-menu').on('click', function(event) {
//     event.preventDefault();
//     $('.menu-wrap').toggleClass('menu-active')
//     $('.menu-btn').toggleClass('menu-active')
//     $('body').toggleClass('lock')
// })

// $('.menu-wrap').on('click', function(event) {
//     event.preventDefault();
//     $('.menu-wrap').toggleClass('menu-active')
//     $('.menu-btn').toggleClass('menu-active')
//     $('body').toggleClass('lock')
// })

// mobileMenu.addEventListener('click', () => {
//     //menu.classList.toggle('active')
//     menuBurger.classList.toggle('active')
//     document.body.classList.toggle('lock')
// })

//-открытие/закрытие меню-гамбургера
const menuBurger = document.querySelector('.menu__burger')
const menu = document.querySelector('.menu__wrapper')
const menuList = document.querySelector('.site-nav-menu__list')

menuBurger.addEventListener('click', () => {
    menu.classList.toggle('active')
    menuBurger.classList.toggle('active')
    menuList.classList.toggle('active')
    document.body.classList.toggle('lock')
})

menuList.addEventListener('click', () => {
    menu.classList.toggle('active')
    menuBurger.classList.toggle('active')
    menuList.classList.toggle('active')
    document.body.classList.toggle('lock')
})

//-анимация плавного переходя по якорным ссылкам меню
$(function(){
    $('a[href^="#"]').on('click', function(event) {
        // отменяем стандартное действие
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        /*
        * sc - в переменную заносим информацию о том, к какому блоку надо перейти
        * dn - определяем положение блока на странице
        */

        $('html, body').animate({scrollTop: dn}, 1000);

        /*
        * 1000 скорость перехода в миллисекундах
        */
    });
})