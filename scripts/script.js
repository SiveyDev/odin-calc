const display = document.querySelector('.calc-display');
const numbtns = document.querySelectorAll('.num-btn');
const opbtns = document.querySelectorAll('.op-btn');
const equal = document.querySelector('.equal');
const clearbtn = document.querySelector('.clear-btn');
let displayValue = [];
let opValue = "";
let num1 = 0;
let num2 = 0;

for (let i = 0; i < numbtns.length; i++) {
    numbtns[i].onclick = getNum;
}

for (let i = 0; i < opbtns.length; i++) {
    opbtns[i].onclick = getOp;
}

equal.onclick = operate;
clearbtn.onclick = clear;


function add(num1, num2) {
    let result = num1 + num2;
    display.textContent = result;
    displayValue.push(result);
}

function subtract(num1, num2) {
    let result = num1 - num2;
    display.textContent = result;
    displayValue.push(result);
}

function multiply(num1, num2) {
    let result = num1 * num2;
    display.textContent = result;
    displayValue.push(result);
}

function divide(num1, num2) {
    if (num2 == 0) {
        display.textContent = 'Don\'t even try!';
    } else {
        let result = num1 / num2;
        display.textContent = result.toFixed(4);
        displayValue.push(result);
    }
}

function operate() {
    num2 = Number(displayValue.join(""));
    displayValue = [];
    switch (opValue) {
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
        default:
            console.log("Error");
    }
}

function getNum(e) {
    displayValue.push(e.target.textContent);
    display.textContent += e.target.textContent;
}

function getOp(e) {
    opValue = e.target.textContent;
    display.textContent += e.target.textContent;
    num1 = Number(displayValue.join(""));
    displayValue = [];
}

function clear(e) {
    displayValue = [];
    opValue = "";
    num1 = 0;
    num2 = 0;
    display.textContent = '';
}