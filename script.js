let display = document.getElementById("display");

// Insert values into the display
function insert(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Delete the last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Perform calculations
function calculate() {
    try {
        let expression = display.value
            .replace('^', '**') // Handle exponents
            .replace('√', 'Math.sqrt'); // Handle square root

        // Evaluate scientific functions if present
        let result = Function('return ' + expression)();
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}