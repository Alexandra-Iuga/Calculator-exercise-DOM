//Calling
let numberOneInput = document.querySelector('#number1');
let numberTwoInput = document.querySelector('#number2');
let screen = document.querySelector('.screen');
let additionButton = document.querySelector('#addition');
let subtractionButton = document.querySelector('#subtraction');
let multiplicationButton = document.querySelector('#multiplication');
let divisionButton = document.querySelector('#division');
let errorMessage = document.querySelector('#error-message');

// Input validation (number1 and number 2)
function handleNumberOneInput(event) {
    let inputValue = event.target.value;
    if (isNaN(inputValue)) {
        errorMessage.innerHTML = `
        <p>Te rog sa introduci doar caractere numerice.</p>
        `
    } else {
        errorMessage.innerHTML = '';
    }
}

function handleNumberTwoInput(event) {
    let inputValue = event.target.value;
    if (isNaN(inputValue)) {
        errorMessage.innerHTML = `
        <p>Te rog sa introduci doar caractere numerice.</p>
        `
    } else {
        errorMessage.innerHTML = '';
    }
}

numberOneInput.addEventListener('input', handleNumberOneInput);
numberTwoInput.addEventListener('input', handleNumberTwoInput);

// Buttons
function handleAdditionButton() {
    let number1 = Number(numberOneInput.value);
    let number2 = Number(numberTwoInput.value);
    let sum = number1 + number2;
    screen.innerHTML = `Rezultatul operației este ${sum}`;
}

function handleSubtractionButton() {
    let number1 = Number(numberOneInput.value);
    let number2 = Number(numberTwoInput.value);
    let subtraction = number1 - number2;
    screen.innerHTML = `Rezultatul operației este ${subtraction}`;
}

function handleMultiplicationButton() {
    let number1 = Number(numberOneInput.value);
    let number2 = Number(numberTwoInput.value);
    let multiplication = number1 * number2;
    screen.innerHTML = `Rezultatul operației este ${multiplication}`;
}

function handleDivisionButton() {
    let number1 = Number(numberOneInput.value);
    let number2 = Number(numberTwoInput.value);
    let division = number1 / number2;
    screen.innerHTML = `Rezultatul operației este ${division}`;
}

additionButton.addEventListener('click', handleAdditionButton);
subtractionButton.addEventListener('click', handleSubtractionButton);
multiplicationButton.addEventListener('click', handleMultiplicationButton);
divisionButton.addEventListener('click', handleDivisionButton);