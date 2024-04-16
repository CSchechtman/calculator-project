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


// let valueCurrentInput = parseInt(currentInputText);

// Add a click event listener for 0-9 and .
buttons.forEach(button => {
    button.addEventListener('click', () => {
        concatEntry(button.innerText);
        display();
        //     let buttonString = this.getAttribute('data-label');
        //     let currentInputText = currentInput.innerText;
        //     // read innertext of Input. Change value of innertext to button just pressed. Grab output of innertext
        //     // and set the input to that value
        //     if (currentInputText === "Current Input") {
        //         num1 = this.innerText;
        //         display();
        //     } else if (num1 !== null && operator !== null) {
        //         if (num2 === null) {
        //             num2 = buttonString;
        //         } else {
        //             num2 = num2 + buttonString;
        //         }
        //         currentInput.innerText = num1 + operator + num2;
        //     } else {
        //         concatEntry(this.innerText);
        //         console.log("num1: " + num1)
        //         display();
        //     }

    });
});

operators.forEach(button => {
    button.addEventListener('click', function () {
        if (subtotal === null) {
            console.log(this.getAttribute('operator-label'));
            if (operator === null) {
                operator = this.getAttribute('operator-label');
                let currentInputText = currentInput.innerText;
                if (currentInputText === "Current Input") {
                    num1 = 0;
                    currentInput.innerText = "0" + operator;
                } else {
                    num1 = currentInput.innerText;
                    currentInput.innerText = num1 + operator;
                }
            }
        }
    });
});

equals.addEventListener('click', function () {
    if (subtotal === null) {
        if (num1 !== null && operator !== null && num2 !== null) {
            console.log("operator ", operator);
            console.log("num1 ", num1);
            console.log("num2 ", num2);

            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            console.log("num1 ", num1);
            console.log("num2 ", num2);
            switch (operator) {
                case "+":
                    subtotal = add(num1, num2);
                    break;
                case "-":
                    subtotal = subtract(num1, num2);
                    break;
                case "/":
                    if (num2 = 0) {
                        currentInput.innerText = err;
                        currentInput.style.color = "red";
                        break;
                    } else {
                        subtotal = divide(num1, num2);
                        break;
                    }
                case "X":
                    subtotal = multiply(num1, num2);
                    break;
                case "%":
                    subtotal = percentage(num1, num2);
                    break;
            }
            console.log("subtotal ", subtotal);
            currentInput.innerText = subtotal;
            currentInput.style.background = "#a65600";
        };
    };
});

allClear.addEventListener('click', function () {
    currentInput.innerText = 'Current Input';
    num1 = "";
    num2 = "";
    operator = null;
    subtotal = null;
    currentInput.style.color = "black";
    currentInput.style.background = "#409cbd";
});

del.addEventListener('click', function () {
    currentInput.innerText = currentInput.innerText.toString().slice(0, -1);
});

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
}

const concatEntry = (entry) => {
    if (entry === '.' && num1.includes('.')) return;
    num1 = num1.toString() + entry.toString();
}

const display = () => {
    currentInput.innerText = num1;
    subtotalDiv.innerText = num2 + ' ' + (operator || '');
}

const doMath = () => {
    const first = parseFloat(num1);
    const second = parseFloat(num2);
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
    }

}

// Things to add:
// Error for divide by zero
// Sq rt math.sqrt(innertext)
// Power Math.pow (last, next)

// Memory? Subtotal?
// Tip calculator
// Dark theme -- button in options, class for dark theme with toggle button, transition to dark theme, remove dark class transition back
// Hover button css animation
// options animation - mouse enter from eric