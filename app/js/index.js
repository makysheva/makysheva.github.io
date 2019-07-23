 // Показать меню при клике на иконку
$('.mobile-menu').on('click', function(event) {
    event.preventDefault();
    $('.menu-wrap').toggleClass('menu-active')
    $('.menu-btn').toggleClass('menu-active')
})
