//1. Sum of Natural Numbers:**
//Write a program to calculate the sum of natural numbers from 1 to `n` using a `for` loop.

//**Example:**
// ```javascript
// const n = 5;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(sum); // 15


const n = 10;
let sum = 0;
for (let i=1; i<=n; i++ ){
    sum += i;
}
console.log(sum);


// **2. Factorial of a Number:**
// Write a program to calculate the factorial of a given number `n` using a `for` loop.

// **Example:**
// ```javascript
const m= 5;
let factorial = 1;
for (let i = 1; i <= m; i++) {
  factorial *= i;
}
//1*2*3*4*5=120
//5*4*3*2*1=120
console.log(factorial); // 120


function fact(num1){
  if(num1==1)
  return 1;
else
   return num1 * fact(num1-1);
}

let value = fact(6)
console.log(value);



// **3. Fibonacci Sequence:**
// Generate and print the first `n` terms of the Fibonacci sequence using a `for` loop.

// **Example:**
// ```javascript
 const p = 7;
let first = 0, second = 1, next;
console.log(first); // 0
console.log(second); // 1
for (let i = 2; i < p; i++) {
  next = first + second;
  console.log(next);
  first = second;
  second = next;
}



// **4. Print Multiplication Table:**
// Write a program to print the multiplication table of a given number `n` using a `for` loop.

// **Example:**
// ```javascript
const num = 6;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}


