const buttonDOM = document.querySelectorAll('.button');

buttonDOM.forEach(button => {
    button.addEventListener('click', function () {
        buttonDOM.forEach(button => { button.classList.remove('active')});
        button.classList.add('active');
    })
});

function getTime() {
    let timeDOM = new Date();
    let hours = timeDOM.getHours();
    let minutes = timeDOM.getMinutes();

    hours=('0' + hours).slice(-2);
    minutes=('0' + minutes).slice(-2);
    seconds=('0' + seconds).slice(-2);
    document.getElementById('time').innerHTML = hours + ' : ' + minutes;
    
    setInterval(getTime, 1000);
}


