// Initialize the runningTotal, buffer, and previousOperator variables
let runningTotal = 0;
let buffer = "0";
let previousOperator;

// Get a reference to the screen element
const screen = document.querySelector(".screen");

// Function to handle button clicks
function buttonClick(value) {
    // If the value is not a number, handle it as a symbol
    if (isNaN(value)) {
        handleSymbol(value);
    } else { // Otherwise, handle it as a number
        handleNumber(value);
    }
    // Update the screen with the current buffer value
    screen.innerText = buffer;
}

// Function to handle symbol button clicks
function handleSymbol(symbol) {
    switch (symbol) {
        case "C": // Clear the buffer and runningTotal
            buffer = "0";
            runningTotal = "0";
            break;
        case "=": // Evaluate the expression and update the buffer and runningTotal
            if (previousOperator === null) {
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case "←": // Remove the last character from the buffer
            if (buffer.length === 1) {
                buffer = "0";
            } else {
                buffer = buffer.substring(0, buffer.length - 1);
            }
            break;
        case "+":
        case "−":
        case "×":
        case "÷": // Handle the math operation
            handleMath(symbol);
            break;
    }
}

// Function to handle math operations
function handleMath(symbol) {
    if (buffer === "0") {
        return;
    }

    const intBuffer = parseInt(buffer);

    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }
    previousOperator = symbol;
    buffer = "0";
}

// Function to perform the math operation
function flushOperation(intBuffer) {
    if (previousOperator === "+") {
        runningTotal += intBuffer;
    } else if (previousOperator === "−") {
        runningTotal -= intBuffer;
    } else if (previousOperator === "×") {
        runningTotal *= intBuffer;
    } else if (previousOperator === "÷") {
        runningTotal /= intBuffer;
    }
}

// Function to handle number button clicks
function handleNumber(numberString) {
    if (buffer === "0") {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
}

// Function to initialize the calculator
function init() {
    // Add an event listener to the calc-buttons element to handle button clicks
    document
        .querySelector(".calc-buttons")
        .addEventListener("click", function (event) {
            buttonClick(event.target.innerText);
        });
}

// Call the init function to initialize the calculator
init();
