// LET & CONST

console.log("LET & CONST");
let variable = "ES-6";
console.log(variable);

variable = "vanilla js";
console.log(variable);

const result = 9.5;
console.log(result);
// result = 9.1; ----cannot change

console.log("ARROW FUNCTIONS");
const addNumbers = function (num1, num2) {
  return num1 + num2;
};
console.log(addNumbers(15, 23));

const addNumbers2 = (num1, num2) => num1 + num2;
console.log(addNumbers2(15, 23));

const multiplyNumbers = (number1 = 2, number2 = 2) => number1 * number2;
console.log(multiplyNumbers());
