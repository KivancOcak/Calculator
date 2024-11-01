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
            .replace(/√\(([^)]+)\)/g, 'Math.sqrt($1)') // Handle square root with parentheses
            .replace(/√([^ \d])/g, 'Math.sqrt($1)') // Handle square root without parentheses
            .replace(/√([\d.]+)/g, 'Math.sqrt($1)') // Handle square root of a number
            .replace(/sin\(([^)]+)\)/g, 'Math.sin($1 * Math.PI / 180)') // Handle sine in degrees
            .replace(/cos\(([^)]+)\)/g, 'Math.cos($1 * Math.PI / 180)') // Handle cosine in degrees
            .replace(/tan\(([^)]+)\)/g, 'Math.tan($1 * Math.PI / 180)') // Handle tangent in degrees
            .replace(/log\(([^)]+)\)/g, 'Math.log10($1)') // Handle logarithm base 10
            .replace(/ln\(([^)]+)\)/g, 'Math.log($1)'); // Handle natural logarithm (ln)

        // Evaluate the expression safely
        let result = eval(expression); // Use eval for evaluation
        display.value = result; // Display the result
    } catch (error) {
        display.value = "Error"; // Show error message if something goes wrong
    }
}
