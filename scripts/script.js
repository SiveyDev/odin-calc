const display = document.querySelector('.calc-display');
const numbtns = document.querySelectorAll('.num-btn');
const opbtns = document.querySelectorAll('.op-btn');
const equal = document.querySelector('.equal');
let displayValue = [];
let opValue = "";
let num1 = 0;
let num2 = 0;
// numbtns.forEach(numbtn => addEventListener('click', getNum));
for (let i = 0; i < numbtns.length; i++) {
    numbtns[i].onclick = getNum;
}

for (let i = 0; i < opbtns.length; i++) {
    opbtns[i].onclick = getOp;
}

equal.onclick = operate;


function add(num1, num2) {
    // console.log(num1 + num2);
    let result = num1 + num2;
    display.textContent = result;
}

function subtract(num1, num2) {
    // console.log(num1 - num2);
    let result = num1 - num2;
    display.textContent = result;
}

function multiply(num1, num2) {
    // console.log(num1 * num2);
    let result = num1 * num2;
    display.textContent = result;
}

function divide(num1, num2) {
    // console.log(num1 / num2);
    let result = num1 / num2;
    display.textContent = result.toFixed(4);
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
    // funcName(num1, num2);
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