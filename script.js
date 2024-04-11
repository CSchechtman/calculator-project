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

// Select all buttons with a number class
const buttons = document.querySelectorAll('button[data-label]');

// Add a click event listener to each number button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        console.log(this.getAttribute('data-label'));
    });
});