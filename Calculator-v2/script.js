let num1 = ''; // Reset state
let num2 = '';
let operator = null;
let subtotal = null;




const buttons = document.querySelectorAll('button[data-label]'); // Select all buttons with a data-label for DOM use
const operators = document.querySelectorAll('button[operator-label]'); // Select all buttons with an operator class for DOM use
const allClear = document.querySelector('.allClear'); // select the AC button for DOM use
const currentInput = document.querySelector(".currentInput"); // Select Current Input box for DOM use
const equals = document.querySelector('.equals'); // Select Equals button for DOM use
const del = document.getElementById("Del"); // Select the Delete key for DOM use
const subtotalDiv = document.querySelector('.subtotal'); //Selects the subtotal div for Dom use
const options = document.querySelector('.options');
const pi = document.getElementById("pi");

//Adds a digit to the end of a currently saved variable
const concatEntry = (entry) => {
    if (entry === '.' && num1.includes('.')) return;
    num1 = num1.toString() + entry.toString();
};

// Reset the screen state
const display = () => {
    currentInput.innerText = num1;
    subtotalDiv.innerText = num2 + ' ' + (operator || '') + ' ' + num1;
};

// Add a click event listener for 0-9 and . and process them on the display
buttons.forEach(button => {
    button.addEventListener('click', () => {
        concatEntry(button.innerText);
        display();
    });
});

// All math functions live here
const doMath = () => {
    const first = parseFloat(num2);
    const second = parseFloat(num1);
    switch (operator) {
        case "+":
            subtotal = add(first, second);
            break;
        case "-":
            subtotal = subtract(first, second);
            break;
        case "/":
            subtotal = divide(first, second);
            break;
        case "X":
            subtotal = multiply(first, second);
            break;
        case "%":
            subtotal = percentage(first, second);
            break;
        default:
            return;
    }

    operator = null;
    num1 = subtotal;
    num2 = '';
}

// Tells the calc what to do when each operator is pressed
const clickOperator = (clickedOperator) => {
    if (num1 === '') {
        num1 = 0;
    }
    if (num2 !== '') {
        doMath();
    }
    operator = clickedOperator;
    num2 = num1;
    num1 = '';
}

// Event listeners
operators.forEach(button => {
    button.addEventListener('click', () => {
        clickOperator(button.innerText);
        display();
    });
});

equals.addEventListener('click', () => {
    doMath();
    display();
    currentInput.style.backgroundColor = "var(--button-background-color)";
});

allClear.addEventListener('click', function () {
    currentInput.innerText = 'Current Input';
    currentInput.style.backgroundColor = "var(--currentInput-background-color)";
    num1 = "";
    num2 = "";
    operator = null;
    subtotal = null;
    subtotalDiv.innerText = "Subtotal";
});

pi.addEventListener('click', () => {
    num1 = Math.PI.toFixed(10);
    display();
});

del.addEventListener('click', () => {
    num1 = currentInput.innerText.toString().slice(0, -1);
    display();
});

// Math functions
const add = (first, second) => {
    return first + second;
};

const subtract = (first, second) => {
    return first - second;
};

const multiply = (first, second) => {
    return first * second;
};

const divide = (first, second) => {
    return first / second;
};

const percentage = (first, second) => {
    return (first / 100) * second;
};

// Detect current system theme or change theme when toggle button clicked
document.getElementById('theme-toggle').addEventListener('click', function () {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
});


// Things to add:
// Sq rt math.sqrt(innertext)
// Power Math.pow (last, next)
// parentheticals/ Memory?
// Tip calculator
// dice roll
