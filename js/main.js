const buttonDOM = document.querySelectorAll('.button');
let timeDOM = document.querySelector('#home-time');
const dateDOM = document.querySelector('#home-day');

buttonDOM.forEach(button => {
    button.addEventListener('click', function () {
        buttonDOM.forEach(button => { button.classList.remove('active')});
        button.classList.add('active');
    })
});

let time = new Date();
console.log(time.setHours());