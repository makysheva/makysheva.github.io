const nameField = document.querySelector('#name')
const surnameField = document.querySelector('#surname')
const maleMenField = document.querySelector('#male-men')
const maleWomenField = document.querySelector('#male-women')
const emailField = document.querySelector('#email')
const sitiesField = document.querySelector('#sities')
const textField = document.querySelector('#text')
const btn = document.querySelector('#btn')

window.addEventListener('beforeunload', function() {
    localStorage.setItem('name', nameField.value)
    localStorage.setItem('surname', surnameField.value)
    localStorage.setItem('maleMen', maleMenField.value)
    localStorage.setItem('maleWomen', maleWomenField.value)
    localStorage.setItem('email', emailField.value)
    localStorage.setItem('sities', sitiesField.value)
    localStorage.setItem('text', textField.value)
});


window.addEventListener('DOMContentLoaded', function() {
    nameField.value = localStorage.getItem('name')
    surnameField.value = localStorage.getItem('surname')
    maleMenField.value = localStorage.getItem('maleMen')
    maleWomenField.value = localStorage.getItem('maleWomen')
    emailField.value = localStorage.getItem('email')
    sitiesField.value = localStorage.getItem('sities')
    textField.value = localStorage.getItem('text')
});

btn.addEventListener('click', () => {
    alert('Форма отправлена')
})

