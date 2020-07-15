// ES_6 concepts
//let & const
//Arrow Functions
//Default parameters
//Spread & Rest
//Destructuring of Arrays
//Destructuring of Objects
//Template literals

//----------LET & CONST-----------//

console.log("LET & CONST");
let variable = "ES-6";
console.log(variable);

variable = "vanilla js";
console.log(variable);

const result = 9.5;
console.log(result);
// result = 9.1; ----cannot change

//----------ARROW FUNCTIONS---------//

console.log("ARROW FUNCTIONS");
const addNumbers = function (num1, num2) {
  return num1 + num2;
};
console.log(addNumbers(15, 23));

const addNumbers2 = (num1, num2) => num1 + num2;
console.log(addNumbers2(15, 23));

const multiplyNumbers = (number1, number2) => number1 * number2;
console.log(multiplyNumbers(5, 9));

//----------DEFAULT PARAMETERS---------//

console.log("DEFAULT PARAMETERS");
const trial = (start = 8) => {
  console.log(start);
  while (start > 0) {
    start--;
    console.log("Done!", start);
  }
};
trial();

const multiplyNumbers1 = (number1 = 6, number2 = 8) => number1 * number2;
console.log(multiplyNumbers1());

//--------------REST & SPREAD-------------//

console.log("REST & SPREAD");
const numbers = [11, 53, 89, 32, 87];
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));

function makeArray(name, ...args) {
  return args;
}
console.log(makeArray("Umair", 1, 2, "Ansari"));

//--------------Destructuring Array-------------//

const myHobbies = ["Cricket", "Badminton", "Carrom"];

// const myHobby1 = myHobbies[0];
// const myHobby2 = myHobbies[1];

// console.log(myHobby1,myHobby2);

const [myHobby1, myHobby2, myHobby3] = myHobbies;
console.log(myHobby1, myHobby2, myHobby3);

//--------------Destructuring Objects-------------//

const userData = { username: "Umair", age: 23, qualification: "B.E" };
// const myName = userData.username;
// const myAge = userData.age;
// const qlf = userData.qualification;
// console.log(myName, myAge, qlf);

const { username: myName, age: myAge, qualification: myQlf } = userData;
console.log(myName, myAge, myQlf);

//--------------Template Literals-------------//

const myFriendName = "Ameen";
// const greeting = "Happy Journey " + myFriendName + ", Have a safe journey ahead.";
// console.log(greeting);

const greeting = `"Happy Journey" ${myFriendName}, "Have a safe journey ahead".`;
console.log(greeting);
