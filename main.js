let buttonSubmit = document.querySelector('.form__inner-submit');
let inputName = document.querySelector('.form__inner-username');
let inputPassword = document.querySelector('.form__inner-password');
let getForm = document.querySelector('.form__inner');

let correctName = /^[a-z0-9].{2,15}$/i;
let correctPass = /^[a-z0-9](?=.*[\#])(?=.*[\$]).{6,15}$/i;

inputName.addEventListener('input', () => {
    if (!correctName.test(inputName.value)) {
        inputName.classList.add('invalid')
    } else {
        inputName.classList.remove('invalid')
    } 
});

inputPassword.addEventListener('input', () => {
    if (!correctPass.test(inputPassword.value)) {
        inputPassword.classList.add('invalid')
    } else {
        inputPassword.classList.remove('invalid')
    } 
});

buttonSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    if(correctName.test(inputName.value) && correctPass.test(inputPassword.value)){
        console.log(inputName.value);
        getForm.reset();
    } else if (!correctName.test(inputName.value) && !correctPass.test(inputPassword.value)) {
        inputName.classList.add('invalid');
        inputPassword.classList.add('invalid');
    } else if (!correctName.test(inputName.value)) {
        inputName.classList.add('invalid');
    } else if (!correctPass.test(inputPassword.value)) {
        inputPassword.classList.add('invalid');
    }
});

