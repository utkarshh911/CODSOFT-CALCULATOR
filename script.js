let displayValue = '0';
let operator = '';
let firstOperand = '';
let secondOperand = '';
let result = '';

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
}

function appendToDisplay(number) {
    if (displayValue === '0' && number !== '.') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    operator = '';
    firstOperand = '';
    secondOperand = '';
    result = '';
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        displayValue = '0';
    }
    updateDisplay();
}

function appendOperator(op) {
    operator = op;
    firstOperand = displayValue;
    displayValue = '0';
    updateDisplay();
}

function calculate() {
    secondOperand = displayValue;

    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            result = num2;
            break;
    }

    displayValue = result.toString();
    updateDisplay();
}
