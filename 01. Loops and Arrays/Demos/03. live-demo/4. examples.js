// JavaScript
// - high level
// - dynamically typed
// - multi-paradigm (functional + OOP)
// - single-threaded
// - interpreted and compiled

// - dynamically typed
// let a = 1;
// console.log(typeof a);
// a = '2';
// a = [];

// - coercion
// console.log(2 + '2'); // '22'
// console.log(4 - '2'); // 2
// console.log(4 - 'apple'); // NaN
// console.log(1 + null);
// console.log(NaN === NaN);
// console.log(Number.isNaN(NaN));
// console.log(1 / null);
// console.log(null / 1);
// console.log(null / null);

// console.log([] + [] === [] * 2);
// console.log([] + []); // ''
// console.log([] * 2); // 
// console.log([2] * [4]); // String([2]) * String([4]) // 8
// console.log({} + []);
// console.log([] + {});
console.log([2, 3] + [4, 1]);

// number literals
2;
3.14;
-5.34;
.3; // 0.3
1.; // 1.0 -> 1
1000000;
1e6;
1e-6;
1_000_000;
1_3; // 13;
1_3.1_3; // 13.13
1_3.1_3e1_3 // 13.13e13

// bigint
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(900719925474099124238492384723489n);
// console.log(Number(900719925474099124238492384723489n));
// Number(2n); // 2
// BigInt(2); // 2n

// console.log([2n] * [4n]); // typeof = 'number'
// console.log(2n * 4n); // typeof = 'bigint'

// console.log(.1 + .2);

// const e1 = 1 + 2;
// const e2 = 1 + 2 + 3;

// expression - piece of code that is calculated and evaluated to produce value
// array expression <-> array literal 
// - expression that has its value evaluated to an array
// - can have expressions for their elements
// const nums = [1,2,3];

// JS program = 
// declarations 
// + statements (a piece of code that express an action to be executed)

// const e1 = 1 + 2;
// const e2 = 1 + 2 + 3 * 5 + +'10';
// const numberType = typeof 2;
// const num = +'2';
// const num1 = Number('2');
// const result = Math.pow(2, 2); // 4

// if (true) {
//  console.log(2); 
// }

// block statement; can be block body of another statement
// {
//   let a = 1;
//   console.log(++a);
// }

// if (true) {
//   if (true) {
//   	console.log(true ? 2 : 1);
//   }
// }

// templates

// if (/* value or expression */) /* exactly 1 statement */
// expression: 1 + 2; 3 > 2; Math.min(1, 2); 2 ** 3; console.log(true);
// statement: block; if; if-else; for; for-in; declaration;
if (true) {};
if (2 > 3) for (let a = 1; a <2; a++) { console.log(a); }

// if (/* value or expression */) /* exactly 1 statement */
// else /* exactly 1 statement */

// while (/* value or expression */) /* optional statement */

while (false) {};
while (2 > 3) console.log(false);
// while ('3');

// for (/* optional expression statement */, /* optional expression statement */, /* optional expression statement */) /* optional statement */
// for(;;);

// for(2;2;2) {
//   console.log('infinite');
//   break;
// }

// for (let index = 0; index <= 10; index++) {
//   console.log(index);
// }

// do {
//   console.log('do-while');
// } while (false);

// for-in (enumerable), arbitrary order; objects
// const numbers = [4, 5, 6];
// numbers.name = 'Pesho';

// for (let index in numbers) {
//   console.log(numbers[index]);
// }
// console.log(numbers, numbers.length);

// for-of (iterable), keeps the order, use with arrays & strings

// for (let number of numbers) {
//   console.log(number);
// }

// for (let char of 'Pesho') {
//   console.log(char);
// }

// const nums = [1, 2, 3, 4];

// for (let x of nums) {
//   console.log(nums[x]); // nums[1]
// }

const numbers = [1, 1, 2, 3, 5, 8, 13];

// const nums = Array.of(1, 2, 3);
// console.log(nums);

// const nums2 = Array.from({ '0': 3, '1': 4, '2': 5, length: 3 });
// console.log(nums2);

// const chars = Array.from('123');
// console.log(chars);

const width = 3;
const height = 4;

// const matrix = Array.from({ length: height});

// for (let i = 0; i < matrix.length; i++) {
//   matrix[i] = Array.from({ length: width});
// }

const matrix = Array.from({ length: height }, () => Array.from({ length: width }));
console.table(matrix);

let count = 1;
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    matrix[i][j] = count;
    count++;
  }
}

console.table(matrix);

const filler = [1, 2, 3];
filler.fill(0);

const a = [1, 1, 2, 2, 3, 3];
const uniques = Array.from(new Set(a));

const [input1, input2] = [gets(), gets()];
