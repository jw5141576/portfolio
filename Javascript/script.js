console.log("Hello World!");
console.log(4 + 6);
console.log(13 - 5);

// Variables
let name = "John";
let age = 30;
let course = "Javascript";

console.log(name);
console.log(age);
console.log(course);

let a = 10;
let b = 20;
let c = a + b;
console.log(c);

let x = 5;
let y = 10;
let z = x * y;
console.log(z);

let j = 27;
let k = 9;
let l = j / k;
console.log(l);

// Data Types
// Strings
let message = "Hello World!";
console.log(message);

let country = "Kenya";
console.log(country);

// Numbers
let ag = 25;
console.log(ag);

let height = 1.75;
console.log(height);

// Booleans
let isStudent = true;
console.log(isStudent);

let isEmployed = false;
console.log(isEmployed);

// Null
let favouriteColour = null;
console.log(favouriteColour);

// Operators
let C = 10;
let d = 5;
console.log(C + d);
console.log(C - d);
console.log(C * d);
console.log(C / d);
console.log(C % d);

// Assignment operators
let score = 10;
score += 5;
console.log(score);
score -= 3;
score *= 2;
score /= 4;
console.log(score);

// Comparison operators
console.log(age > 18); // true
console.log(age < 18); // false
console.log(age >= 18); // true
console.log(age <= 18); // false
console.log(age == 25); // false because age is 30
console.log(age != 25); // true

// Conditions: if, else if and else
let marks = 75;
if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 80) {
  console.log("Grade B");
} else if (marks >= 70) {
  console.log("Grade C");
} else if (marks >= 60) {
  console.log("Grade D");
} else {
  console.log("Grade F");
}

// Logical Operators
let hasID = true;
console.log(age >= 18 && hasID); // true
console.log(age >= 18 || hasID); // true
console.log(!(age < 18)); // true

// Functions: reusable blocks of code that perform a specific task
function greet() {
  console.log("Hello World!");
}

greet();
