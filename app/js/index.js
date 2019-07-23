// Фильтрация в портфолио

(function () {
    const filterBtn = document.querySelectorAll('.btn')
    const portfolio = document.querySelectorAll('.portfolio-item')

    filterBtn.forEach((btn) => {
        btn.addEventListener('click', function() {
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

// Показать меню при клике на иконку
$('.mobile-menu').on('click', function(event) {
    event.preventDefault();
    $('.menu-wrap').toggleClass('menu-active')
    $('.menu-btn').toggleClass('menu-active')
})