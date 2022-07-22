const buttonDOM = document.querySelectorAll('.button');
const timeDOM = document.querySelector('data-time')

buttonDOM.forEach(button => {
    button.addEventListener('click', function () {
        buttonDOM.forEach(button => { button.classList.remove('active')});
        button.classList.add('active');
    })
});

console.log(timeDOM);