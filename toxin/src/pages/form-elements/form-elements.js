import './form-elements.scss'
import 'jquery'
import 'air-datepicker'
import '../../blocks/form-elements/calendar/calendar'
import '../../blocks/form-elements/calendar/calendar.scss'

console.log('in form-elements.js');


// const dropdownSelect = document.querySelectorAll('.form-elements__input--dropdown')
// const dropdownOpen = document.querySelectorAll('.dropdown__menu')


// dropdownSelect.forEach((elem) => {//нашел нужный div
//     elem.addEventListener('click', () => {// при клике на div

//         dropdownOpen.forEach((elemDropdown)=> {// добавлять класс
//             elemDropdown.classList.add('dropdown__menu--open')
//         })
//     })    
// })


//функция для октрытия/закрытия dropdown 
    (function () {
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
            elem.removeEventListener('click', () => {// при клике на div
        
                dropdownOpen.forEach((elemDropdown)=> {// добавлять класс
                    elemDropdown.classList.remove('dropdown__menu--open')//не работает
                })
            })    
        })

    })();

// функция для увеличения/уменьшения выбора количества гостей

const minusBtn = document.querySelectorAll('.dropdown__minus')



Array.from(minusBtn).forEach(minusButtons => {
    minusButtons.addEventListener('click', function (minusButton) {
        minusButton
    })
})


// правый datepicker при клике на который отображается calendar

const datepickerRight = $('#datepicker--right')

datepickerRight.click().show()