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
const operators = document.querySelectorAll('button[operator-label]');
const allClear = document.querySelector('.allClear');
const currentInput = document.querySelector(".currentInput");
const equals = document.querySelector('#equals');


// let valueCurrentInput = parseInt(currentInputText);
// console.log(typeof valueCurrentInput);
// console.log(valueCurrentInput)
// console.log(currentInput)

// Add a click event listener to every button with a data-label
buttons.forEach(button => {
    button.addEventListener('click', function() {
        let buttonString = this.getAttribute('data-label');
        let currentInputText = currentInput.innerText;
// read innertext of Input. Change value of innertext to button just pressed. Grab output of innertext
// and set the input to that value
        if(currentInputText === "Current Input"){
            currentInput.innerText = buttonString;
            num1 = currentInput.innerText;
        }else if(num1 !== null && operator !== null){
            if(num2 === null){
                num2 = buttonString;
            }else{
                num2 = num2 + buttonString;
            }
            currentInput.innerText = num1 + operator + num2;
        // }else if(buttonString === "."){
        //     currentInput.innerText = "0.";
        }else{    
            num1 = num1 + buttonString;
            currentInput.innerText = num1;
        }
    });
});

operators.forEach(button => {
    button.addEventListener('click', function() {
        console.log(this.getAttribute('operator-label'));
        if(operator === null){
            operator = this.getAttribute('operator-label');
            let currentInputText = currentInput.innerText;  
            if(currentInputText === "Current Input"){
                num1 = 0;
                currentInput.innerText = "0" + operator;
            }else{
                num1 = currentInput.innerText;
                currentInput.innerText = num1 + operator;
            }
        }
    });
});




allClear.addEventListener('click', function() {
    currentInput.innerText = 'Current Input';
    num1 = null;
    num2 = null;
    operator = null;
    subtotal = null;
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


// 
