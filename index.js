const operator = prompt("Enter Operator (+, -, *, /)");
const number1 = parseFloat(prompt("Enter First Number"));
const number2 = parseFloat(prompt("Enter Second Number"));

let results;

if (operator == "+") {
  results = number1 + number2;
}
if (operator == "-") {
  results = number1 - number2;
}
if (operator == "*") {
  results = number1 * number2;
}
if (operator == "/") {
  results = number1 / number2;
}

alert("Answer is: " + results);