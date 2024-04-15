let num1 = null
let num2 = null
let operator = null
let subtotal = null
// Select all buttons with a data-label
// Select all buttons with an operator class
// select the AC button
// Select Current Input box
const buttons = document.querySelectorAll('button[data-label]');
const operators = document.querySelectorAll('button[operator-label]');
const allClear = document.querySelector('.allClear');
const currentInput = document.querySelector(".currentInput");
const equals = document.querySelector('.equals');


// let valueCurrentInput = parseInt(currentInputText);
// console.log(typeof valueCurrentInput);
// console.log(valueCurrentInput)
// console.log(currentInput)

// Add a click event listener to every button with a data-label
buttons.forEach(button => {
    button.addEventListener('click', function () {
        if (subtotal === null) {
            let buttonString = this.getAttribute('data-label');
            let currentInputText = currentInput.innerText;
            // read innertext of Input. Change value of innertext to button just pressed. Grab output of innertext
            // and set the input to that value
            if (currentInputText === "Current Input") {
                currentInput.innerText = buttonString;
                num1 = currentInput.innerText;
            } else if (num1 !== null && operator !== null) {
                if (num2 === null) {
                    num2 = buttonString;
                } else {
                    num2 = num2 + buttonString;
                }
                currentInput.innerText = num1 + operator + num2;
            } else {
                num1 = num1 + buttonString;
                currentInput.innerText = num1;
            }
        }
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
                    subtotal = divide(num1, num2);
                    break;
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
    num1 = null;
    num2 = null;
    operator = null;
    subtotal = null;
    currentInput.style.color = "black";
    currentInput.style.background = "#409cbd";
});

const add = (num1, num2) => {
    console.log(typeof num1);
    return num1 + num2;
};

const subtract = (num1, num2) => {
    return num1 - num2;
};

const multiply = (num1, num2) => {
    return num1 * num2;
};

const divide = (num1, num2) => {
    return num1 / num2;
};

const percentage = (num1, num2) => {
    return (num1 / 100) * num2;
}



// const operatorSplit = (string, operator) => {
//     for(let i = 0; i < )

// };


// Things to add:
// Delete the last digit entered
// Error for divide by zero
// Sq rt math.sqrt(innertext)
// Power Math.pow (last, next) 

// Memory? Subtotal?
// Tip calculator
// Dark theme -- button in options, class for dark theme with toggle button, transition to dark theme, remove dark class transition back
// Hover button css animation
// options animation - mouse enter from eric
// box shadow on the calc and buttons