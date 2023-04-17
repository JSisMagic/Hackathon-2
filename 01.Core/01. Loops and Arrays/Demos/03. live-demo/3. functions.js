// var add = function(a, b) {...}


// function declaration
// function add(a, b) {
//   // arguments
//   console.log(Array.from(arguments));
// }

// add(1, 2, 3);


// function expression

// const log = function(x) {
//   console.log(Array.from(arguments));
// };

// log(5, 5, 5, 5);

// arrow function expression

// const sum = (...rest) => {
//   let sum = 0;
//   for (let number of rest) {
//     sum += number;
//   }

//   return sum;
// };

// const result = sum(1, 2, 3, 4);

// console.log(result);

// const change = (x) => {
//   x += 1;
  
//   return x;
// };

// let a = 1;

// const result = change(a);

// number
// string
// boolean
// null
// undefined
// symbol
// bigint

// console.log(a, result);

// const change2 = (arr) => {
//   arr.push(null);
// }

// const array = [1, 2, 3];

// array
// function
// object

// const person = {
//   name: 'Pesho',
//   address: 'Main str. 3',
//   age: 20,
// };

// change2(array);

// console.log(array);

const inc = (x) => x + 1;

const inc10 = (x) => x + 10;

const arr = [1, 2, 3, 4, 5];

const transform = (array, func) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = func(array[i]);
  }
};

arr.sort

transform(arr, (x) => x - 1);
// arr.map((x) => x - 1);

console.log(arr);


const one = (x) => x + 1;
const two = (x, multiplier) => x * multiplier;

const result2 = two(
  one(1),
  4
  );

console.log(result2);

