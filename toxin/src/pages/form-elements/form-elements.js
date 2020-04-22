import 'jquery'
import 'air-datepicker'
import './form-elements.scss'
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


// отображение выбранных дат в двух input в календаре air-datepicker

var dateDropdownLeft = $('.text-field-datepicker--left')
var dateDropdownRight = $('.text-field-datepicker--right')


var dateDropdownDatepicker = dateDropdownLeft.datepicker({
    range: true,
    inline: false,
    dateFormat: 'dd.mm.yyyy',

    onSelect: function(date){
        dateDropdownLeft.val(dateDropdownDatepicker.selectedDates[0].toLocaleDateString());
        dateDropdownRight.val(dateDropdownDatepicker.selectedDates[1].toLocaleDateString());
    }
}).data('datepicker');

dateDropdownLeft.click(function(){
    dateDropdownDatepicker.show()
})

dateDropdownRight.click(function(){
    dateDropdownLeft.trigger('click') //Выполнить событие click и запустить обработчики, прикреплённые к элементу dateDropdownLeft (левый input)
})

//  При клике на кнопку Применить в календаре происходит закрытие календаря

const applyBtn = document.createElement('span')

const parent = document.getElementsByClassName('datepicker--buttons')[0]

parent.appendChild(applyBtn) // вставить кнопку Применить после родительского элемента

applyBtn.innerHTML = 'Применить'

applyBtn.classList.add('datepicker--button', '-apply-') // добавить классы

applyBtn.addEventListener('click', closedDropdown) // при клике по кнопке Применить закрыть календарь

function closedDropdown(){
    dateDropdownDatepicker.hide()
}

// checkbox buttons

const markSmoke = document.getElementById('mark-smoke')
const markNursling = document.getElementById('mark-nursling')
const markGuests = document.getElementById('mark-guests')
const checkboxSmoke = document.getElementById('checkbox-smoke')
const checkboxNursling = document.getElementById('checkbox-nursling')
const checkboxGuests = document.getElementById('checkbox-guests')

// function smokeChecked(){         
//     markSmoke.classList.toggle('checkbox__mark--checked')    
// }

// function nurslingChecked(){         
//     markNursling.classList.toggle('checkbox__mark--checked')    
// }

// function guestsChecked(){         
//     markGuests.classList.toggle('checkbox__mark--checked')    
// }

const btn = document.querySelectorAll('.js-checkbox')
const checkboxHide = document.querySelectorAll('.checkbox')

checkboxHide.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {

      
            let attrdataType = checkbox.getAttribute('data-type')

            if(attrdataType === 'smoke') {
                markSmoke.classList.toggle('checkbox__mark--checked')
            } else if(attrdataType === 'nursling') {
                markNursling.classList.toggle('checkbox__mark--checked')
            } else if(attrdataType === 'guests') {
                markGuests.classList.toggle('checkbox__mark--checked')
            }
        
        
    })
})

// checkboxSmoke.addEventListener('click', smokeChecked)
// checkboxNursling.addEventListener('click', nurslingChecked)
// checkboxGuests.addEventListener('click', guestsChecked)

    