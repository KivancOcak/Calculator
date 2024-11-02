let display = document.getElementById("display");


function insert(value) {
    display.value += value;
}


function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}


function calculate() {
    try {
        let expression = display.value
            .replace('^', '**')
            .replace(/√\(([^)]+)\)/g, 'Math.sqrt($1)') 
            .replace(/√([^ \d])/g, 'Math.sqrt($1)') 
            .replace(/√([\d.]+)/g, 'Math.sqrt($1)') 
            .replace(/sin\(([^)]+)\)/g, 'Math.sin($1 * Math.PI / 180)')
            .replace(/cos\(([^)]+)\)/g, 'Math.cos($1 * Math.PI / 180)') 
            .replace(/tan\(([^)]+)\)/g, 'Math.tan($1 * Math.PI / 180)') 
            .replace(/log\(([^)]+)\)/g, 'Math.log10($1)') 
            .replace(/ln\(([^)]+)\)/g, 'Math.log($1)');

      
        let result = eval(expression);
        display.value = result; 
    } catch (error) {
        display.value = "Error"; 
    }
}
