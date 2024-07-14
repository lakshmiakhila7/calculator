let currentNumber = '0';
let previousNumber = '';
let operation = null;

function appendNumber(number) {
    if (currentNumber === '0' && number !== '.') {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
    updateScreen();
}

function setOperation(op) {
    if (currentNumber === '' && op === '-') {
        // Allow negative number input
        currentNumber = op;
        updateScreen();
        return;
    }

    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculateResult();
    }
    operation = op;
    previousNumber = currentNumber + ' ' + operation;
    currentNumber = '';
    updateScreen();
}

function calculateResult() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    operation = null;
    previousNumber = '';
    updateScreen();
}

function updateScreen() {
    if (operation != null) {
        document.getElementById('calculator-screen').innerText = previousNumber + ' ' + currentNumber;
    } else {
        document.getElementById('calculator-screen').innerText = currentNumber;
    }
}

function clearAll() {
    currentNumber = '0';
    previousNumber = '';
    operation = null;
    updateScreen();
}

function deleteNumber() {
    currentNumber = currentNumber.slice(0, -1);
    if (currentNumber === '') {
        currentNumber = '0';
    }
    updateScreen();
}
