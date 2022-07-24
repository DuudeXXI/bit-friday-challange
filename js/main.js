const buttonDOM = document.querySelectorAll('.button');

buttonDOM.forEach(button => {
    button.addEventListener('click', function () {
        buttonDOM.forEach(button => { button.classList.remove('active')});
        button.classList.add('active');
    })
});

function getTime() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();

    hours=('0' + hours).slice(-2);
    minutes=('0' + minutes).slice(-2);
    seconds=('0' + seconds).slice(-2);

    document.getElementById('time').innerHTML = 
    hours + ' : ' + minutes;
    
    setTimeout(getTime, 500);
}
>>>>>>> c2499e8516efb7c3397d2812dcd1ad8f2a771415
