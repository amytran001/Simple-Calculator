// Function to perform addition
function add(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 + num2;
    document.getElementById("result").innerHTML = 'Result: ' + result;
}
// function to perform Subtraction
function subtract(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 - num2;
    document.getElementById("result").innerHTML = 'Result: ' + result;
}
// Function to perform Multiplication
function multiply(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 * num2;
    document.getElementById("result").innerHTML = 'Result: ' + result;
}
// Function to perform Division
function add(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (num1 === 0) {
    document.getElementById("result").innerHTML = 'Result: Cannot divide by zero';
} else {
    let result = num1 / num2;
    document.getElementById('result').innerHTML = 'Result: ' + result;
  }
}
