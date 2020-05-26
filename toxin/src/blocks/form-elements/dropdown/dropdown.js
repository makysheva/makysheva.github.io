//функция для октрытия/закрытия dropdown
(function () {
    const dropdownSelect = document.querySelectorAll('.form-elements__input--dropdown')
    const dropdownOpen = document.querySelectorAll('.dropdown__menu')

    dropdownSelect.forEach((elem) => {//нашел нужный div
        elem.addEventListener('click', () => {// при клике на div

            dropdownOpen.forEach((elemDropdown)=> {// добавлять класс
                elemDropdown.classList.toggle('dropdown__menu--open')
            })
        })
    })

    // dropdownSelect.forEach((elem) => {//нашел нужный div
    //     elem.removeEventListener('click', () => {// при клике на div

    //         dropdownOpen.forEach((elemDropdown)=> {// добавлять класс
    //             elemDropdown.classList.remove('dropdown__menu--open')//не работает
    //         })
    //     })
    // })

})();

// функция для увеличения/уменьшения выбора количества гостей

const minusBtn = document.querySelectorAll('.dropdown__minus')

Array.from(minusBtn).forEach(minusButtons => {
    minusButtons.addEventListener('click', function (minusButton) {
        minusButton
    })
})