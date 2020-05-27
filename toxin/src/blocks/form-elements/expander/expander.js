/* открытие/закрытие листа expander */

const expanderItems = document.querySelectorAll('.js-expander')
const expanderList = document.querySelectorAll('.expander__list')

expanderItems.forEach((expanderItem) => {
    expanderItem.addEventListener('click', () => {
        expanderList.forEach((expander) => {
            expander.classList.toggle('expander__list_hided')
        })
    })
})


/* переключение галочек на списке expander */
const markBreakfast = document.getElementById('mark-breakfast')
const markBreakfastOpen = document.getElementById('mark-breakfast--open')
const markDesk = document.getElementById('mark-desk')
const markFeedingChair = document.getElementById('mark-feeding-chair')
const markCot = document.getElementById('mark-cot')
const markTv = document.getElementById('mark-tv')
const markShampoo = document.getElementById('mark-shampoo')
const checkboxHide = document.querySelectorAll('.checkbox__input')

checkboxHide.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
        let checkboxAttr = checkbox.getAttribute('data-type')

        if(checkboxAttr === 'expander-breakfast'){
            markBreakfast.classList.toggle('checkbox__mark--checked')
        }
        if(checkboxAttr === 'expander-breakfast--open'){
            markBreakfastOpen.classList.toggle('checkbox__mark--checked')
        }
        if(checkboxAttr === 'expander-desk'){
            markDesk.classList.toggle('checkbox__mark--checked')
        }
        if(checkboxAttr === 'expander-feeding-chair'){
            markFeedingChair.classList.toggle('checkbox__mark--checked')
        }
        if(checkboxAttr === 'expander-cot'){
            markCot.classList.toggle('checkbox__mark--checked')
        }
        if(checkboxAttr === 'expander-tv'){
            markTv.classList.toggle('checkbox__mark--checked')
        }
        if(checkboxAttr === 'expander-shampoo'){
            markShampoo.classList.toggle('checkbox__mark--checked')
        }
    })
})
