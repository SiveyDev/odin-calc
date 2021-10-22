console.log("My favorite pie is 3.14");

operate(divide, 10, 5);

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