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

const concatEntry = (entry) => {
    if (entry === '.' && num1.includes('.')) return;
    num1 = num1.toString() + entry.toString();
};

const display = () => {
    currentInput.innerText = num1;
    console.log(currentInput.innerText)
    subtotalDiv.innerText = num2 + ' ' + (operator || '') + num1;
};

// Add a click event listener for 0-9 and . and process them on the display
buttons.forEach(button => {
    button.addEventListener('click', () => {
        concatEntry(button.innerText);
        display();
    });
});

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
        default:
            return;
    }

    operator = null;
    num1 = subtotal;
    num2 = '';
    console.log("subtotal after math: " + subtotal)
}

const clickOperator = (clickedOperator) => {
    operator = clickedOperator;
    if (num1 === ''){
        num1 = 0;
    }
    if (num2 !== ''){
        doMath();
    }
    num2 = num1;
    num1 = '';
}

operators.forEach(button => {
    button.addEventListener('click', () => {
        clickOperator(button.innerText);
        display();
    });
});

equals.addEventListener('click', doMath);
// {
//     if (subtotal === null) {
//         if (num1 !== null && operator !== null && num2 !== null) {
//             num1 = parseFloat(num1);
//             num2 = parseFloat(num2);
            // switch (operator) {
            //     case "+":
            //         subtotal = add(num1, num2);
            //         break;
            //     case "-":
            //         subtotal = subtract(num1, num2);
            //         break;
            //     case "/":
            //         if (num2 = 0) {
            //             currentInput.innerText = err;
            //             currentInput.style.color = "red";
            //             break;
            //         } else {
            //             subtotal = divide(num1, num2);
            //             break;
            //         }
            //     case "X":
            //         subtotal = multiply(num1, num2);
            //         break;
            //     case "%":
            //         subtotal = percentage(num1, num2);
            //         break;
            // }
//             console.log("subtotal ", subtotal);
//             currentInput.innerText = subtotal;
//             currentInput.style.background = "#a65600";
//         };
//     };
// });

allClear.addEventListener('click', function () {
    currentInput.innerText = 'Current Input';
    num1 = "";
    num2 = "";
    operator = null;
    subtotal = null;
    currentInput.style.color = "black";
    currentInput.style.background = "#409cbd";
    subtotalDiv.innerText = "Subtotal";
});

del.addEventListener('click', () => {
    num1 = currentInput.innerText.toString().slice(0, -1);
    display();
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
};



// Things to add:
// Error for divide by zero
// Sq rt math.sqrt(innertext)
// Power Math.pow (last, next)

// Memory? Subtotal?
// Tip calculator
// Dark theme -- button in options, class for dark theme with toggle button, transition to dark theme, remove dark class transition back
// Hover button css animation
// options animation - mouse enter from eric