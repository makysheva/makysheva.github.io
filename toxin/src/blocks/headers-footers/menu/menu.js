// (function(){
//     const menuExpander = document.querySelectorAll('.js-menu__expander')
//     const submenu = document.querySelectorAll('.js-menu__submenu')

//     menuExpander.forEach(elem => {
//         elem.addEventListener('click', (e) => {
//             e.preventDefault()

//             submenu.forEach(item => {
//                 console.log(item)
//                 item.classList.toggle('menu__submenu--visible')
//             })
//         })
//     })
// })();

let dropdownButtons = document.querySelectorAll(".js-menu__expander");
let subLists = document.querySelectorAll(".js-menu__submenu");
let checkmarks = document.querySelectorAll(".menu__checkmark");

// Dropdown appears when you click the button
for (let i = 0; i < dropdownButtons.length; i++) {
    dropdownButtons[i].onclick = function(e) {
        e.preventDefault()
        subLists[i].classList.toggle("show");
        checkmarks[i].classList.toggle("checkmark__down");
        checkmarks[i].classList.toggle("checkmark__up");
    }
}


// Close the dropdown if the user clicks outside of it
// window.onclick = function(e) {
//   console.log(e.target.matches('.abc', '.menu__checkmark'));
    // if (!e.target.matches('.menu__item_dropdown')) {
    //     for (let i = 0; i < dropdownButtons.length; i++) {
    //         if (subLists[i].classList.contains('show')) {
    //             subLists[i].classList.remove('show');
    //         }
    //     }
    // }
// }

// window.onclick = function(event){
//  if (document.getElementsByClassName('menu__item_dropdown')[0].contains(event.target)){
    
//   } else {
//     // outside
//     alert('foo');
//   }
// };