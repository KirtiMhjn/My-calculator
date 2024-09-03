const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const equalsButton = document.getElementById('equals');
const clearButton = document.getElementById('clear');

let currentInput = '';
let operator = '';
let operand1 = '';
let operand2 = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (!isNaN(value) || value === '.') {
            currentInput += value;
            display.value = currentInput;
        } else if (value === '+' || value === '-' || value === '*' || value === '/') {
            operand1 = currentInput;
            operator = value;
            currentInput = '';
        }
    });
});

equalsButton.addEventListener('click', () => {
    operand2 = currentInput;

    if (operand1 !== '' && operand2 !== '' && operator !== '') {
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(operand1) + parseFloat(operand2);
                break;
            case '-':
                result = parseFloat(operand1) - parseFloat(operand2);
                break;
            case '*':
                result = parseFloat(operand1) * parseFloat(operand2);
                break;
            case '/':
                result = parseFloat(operand1) / parseFloat(operand2);
                break;
        }

        display.value = result;
        currentInput = result;
        operator = '';
        operand1 = '';
        operand2 = '';
    }
});

clearButton.addEventListener('click', () => {
    display.value = '';
    currentInput = '';
    operator = '';
    operand1 = '';
    operand2 = '';
});
