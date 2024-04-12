// Eric advice for starting code logic:
// let num1 = 100
// let num2 = 5
// let operator = "X"
// let total = 500
 // click 9 -> assign num1 -> 9
// click 2 -> assign num1 -> 92
 // + ->
 // click 5 -> because an operator exists -> assign num2 
// click = ->  do that operation with those numbers

let num1 = null
let num2 = null
let operator = null
let subtotal = null
// Select all buttons with a data-label
// Select all buttons with an operator class
// select the AC button
// Select Current Input box
const buttons = document.querySelectorAll('button[data-label]');
const operators = document.querySelectorAll('button.operator');
const allClear = document.querySelector('.allClear');
const currentInput = document.querySelector(".currentInput");


// let valueCurrentInput = parseInt(currentInputText);
// console.log(typeof valueCurrentInput);
// console.log(valueCurrentInput)
// console.log(currentInput)

// Add a click event listener to every button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        let buttonString = this.getAttribute('data-label');
        let currentInputText = currentInput.innerText;
// read innertext of Input. Change value of innertext to button just pressed. Grab output of innertext
// and set the input to that value
        if(currentInputText === "Current Input"){
            currentInput.innerText = buttonString;
            console.log(currentInput);
            console.log(currentInputText);
            console.log(currentInput.innerText);
            num1 = parseInt(currentInput.innerText);
            console.log(typeof(num1));
        }else{
            num1 = num1 + buttonString;
            currentInput.innerText = num1;
            console.log(typeof(num1));
        }
    });
});

operators.forEach(button => {
    button.addEventListener('click', function() {
        console.log(this.getAttribute('data-label'));
        let operator = this.getAttribute('data-label');
        let currentInputText = currentInput.innerText;
        console.log(currentInputText);
        if(currentInputText === "Current Input"){
            let num1 = 0;
            currentInputText = toString(num1) + operator;
        }else{
            const inputTextArray = currentInputText.split(operator);
            num2 = inputTextArray[1];
        }
        

    });currentInputText = num1 + operator + num2;
});

allClear.addEventListener('click', function() {
    currentInput.innerText = 'Current Input';
});

const add = (num1, num2) => {
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

// const operatorSplit = (string, operator) => {
//     for(let i = 0; i < )

// };
