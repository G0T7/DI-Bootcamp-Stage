// Function to handle number button clicks
function number(num) {
    const display = document.getElementById('display');
    if (display.textContent === '0') {
        display.textContent = num.toString();
    } else {
        display.textContent += num.toString();
    }
}

// Function to handle operator button clicks
function operator(op) {
    const display = document.getElementById('display');
    display.textContent += op;
}

// Function to perform the calculation and display the result
function equal() {
    const display = document.getElementById('display');
    const result = eval(display.textContent); // Using eval to evaluate the expression
    display.textContent = result;
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.textContent = '0';
}

// Function to reset the calculator
function resetCalculator() {
    clearDisplay();
}

function addPercentage() {
    const currentDisplay = document.getElementById('display').innerText;
    const currentValue = parseFloat(currentDisplay);
    const percentageValue = currentValue / 100;
    updateDisplay(percentageValue);
}

// Other existing functions (number, operator, equal, clearDisplay, resetCalculator)...
