document.querySelectorAll('.number')
    .forEach( el => el.addEventListener('click', clickNumber) );
document.querySelectorAll('.operation')
    .forEach( el => el.addEventListener('click', clickOperation) );
document.querySelector('.calculator').addEventListener('click', clickCalculator);
document.querySelector('.reset').addEventListener('click', clickReset);
const display = document.querySelector('.display');

function clickNumber(event) {
    display.value += event.target.innerText;
}
function clickOperation(event) {
    display.value += event.target.innerText;
}
function clickReset() {
  display.value = '';
}
function clickCalculator() {
    display.value = eval(display.value);
}

    