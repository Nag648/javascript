function myFunction(text) {
  console.log(text);
}

myFunction("Hello World!");

// Function declaration
function add(a, b) {
  console.log(a + b);
}

// Calling a function
add(2, 3);

// Function Expression
const nom = function (a1, b1) {
  console.log(a1 + b1);
};

// Calling function
nom(5, 8);

function myFunction(g1, g2) {
  return g1 / g2;
}
const value = myFunction(8, 2); // Calling the function
console.log(value);

function calcAddition(number1, number2) {
  return number1 + number2;
}
console.log(calcAddition(6, 9));

function callAdd(x, y) {
  let z = x + y;
  return z;
}
console.log("Addition : " + callAdd(7, 4));
