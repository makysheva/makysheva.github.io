import './form-elements.scss'


console.log('in form-elements.js');


const dropdownSelect = document.querySelectorAll('.form-elements__input--dropdown')
const dropdownOpen = document.querySelectorAll('.dropdown__menu')


dropdownSelect.forEach((elem) => {//нашел нужный div
    elem.addEventListener('click', () => {// при клике на div

        dropdownOpen.forEach((elemDropdown)=> {// добавлять класс
            elemDropdown.classList.add('dropdown__menu--open')
        })
    })    
})

dropdownSelect.forEach((elem) => {//нашел нужный div
    elem.removeEventListener('click', () => {// убрать слушатель
            
        dropdownOpen.forEach((elemDropdown)=> {// добавлять класс
            elemDropdown.classList.remove('dropdown__menu--open')
        })
    })
})

