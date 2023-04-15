const numbers = [1, 2, 3];

numbers[3] = 4;
numbers.push(5);

console.log(numbers);

const array = [1, 2, 3, 4, 5];
const letters = Array.from('Telerik'); // { length: 10 }
console.log(letters);

array.length = 2;
console.log(array);

const newArray = array.slice(1, 4);

console.log(newArray);

array.splice(1, 4);

console.log(array);

array[0] = 10;
console.log(array);

const copy = [0, ...array, 6]; // "...array" = "1, 2, 3, 4, 5"
console.log(copy);

const [first, ...copy] = [1, 2, 3];

console.log(copy);