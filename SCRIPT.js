let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operator) {
    if (currentInput === '' && operator !== '-') return;
    currentInput += operator;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
    }
}

// Funciones científicas

function sqrt() {
    currentInput = 'Math.sqrt(' + currentInput + ')';
    display.value = currentInput;
}

function log() {
    currentInput = 'Math.log10(' + currentInput + ')';
    display.value = currentInput;
}

function ln() {
    currentInput = 'Math.log(' + currentInput + ')';
    display.value = currentInput;
}

function sin() {
    currentInput = 'Math.sin(' + toRadians(currentInput) + ')';
    display.value = currentInput;
}

function cos() {
    currentInput = 'Math.cos(' + toRadians(currentInput) + ')';
    display.value = currentInput;
}

function tan() {
    currentInput = 'Math.tan(' + toRadians(currentInput) + ')';
    display.value = currentInput;
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Funciones avanzadas

// Función de potencia: x^y
function power() {
    currentInput = '(' + currentInput + ')**';
    display.value = currentInput;
}

// Función factorial: n!
function factorial() {
    currentInput = 'factorial(' + currentInput + ')';
    display.value = currentInput;
}

// Función Modulo
function mod() {
    currentInput = '(' + currentInput + ')%';
    display.value = currentInput;
}

// Función para calcular el factorial
function factorialCalculation(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorialCalculation(n - 1);
}

// Reemplazar la función factorial en eval
function factorialEval(expression) {
    return expression.replace(/factorial\((\d+)\)/, (match, num) => factorialCalculation(parseInt(num, 10)));
}

// Evaluar el resultado considerando las funciones personalizadas
function evaluateExpression(expression) {
    try {
        // Reemplazar factorial antes de evaluar
        expression = factorialEval(expression);
        return eval(expression);
    } catch (error) {
        return 'Error';
    }
}

function calculateResult() {
    let result = evaluateExpression(currentInput);
    display.value = result;
    currentInput = result.toString(); // Guardar el resultado para continuar operaciones
}
