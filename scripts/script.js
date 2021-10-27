const display = document.querySelector('.calc-display');
const numbtns = document.querySelectorAll('.num');
let displayValue = [];
numbtns.forEach(numbtn => addEventListener('click', getNum));

function add(num1, num2) {
    console.log(num1 + num2);
}

function subtract(num1, num2) {
    console.log(num1 - num2);
}

function multiply(num1, num2) {
    console.log(num1 * num2);
}

function divide(num1, num2) {
    console.log(num1 / num2);
}

function operate(funcName, num1, num2) {
    funcName(num1, num2);
}

function getNum(e) {
    displayValue.push(e.target.textContent);
    display.textContent += e.target.textContent;
}