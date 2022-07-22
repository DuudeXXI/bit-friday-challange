const buttonDOM = document.querySelectorAll('.button');

for (let i = 0; i < buttonDOM.length; i++) {
    let button = buttonDOM[i]
    button.addEventListener('click', function () {
            console.log('button cliked');
            button.classList.toggle('active');
    });
    
}