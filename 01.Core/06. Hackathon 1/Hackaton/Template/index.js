import * as utils from './utils/index.js';

// Arrays

const reverse = () => {
  const array = [1, 2, 3];
  const reversed = utils.reverse(array);

  console.log(reversed);
  // => [3, 2, 1]

  console.log(array);
  // => [1, 2, 3]
};

const fill = () => {
  const array = [1, 2, 3];

  const filled = utils.fill(array, 'a');
  const filledNewArr = utils.fill(Array(3), 2);
  const filledInRange = utils.fill([4, 6, 8, 10], '*', 1, 3);

  console.log(filled);
  // => ['a', 'a', 'a']

  console.log(filledNewArr);
  // => [2, 2, 2]

  console.log(filledInRange);
  // => [4, '*', '*', 10]

  console.log(array);
  // => [1, 2, 3]
  // array is not changed!
};

const join = () => {
  const joined = utils.join(['a', 'b', 'c'], '~');

  console.log(joined);
  // => 'a~b~c'
};

const indexOf = () => {
  // TODO
};

const filter = () => {
  // TODO
};

const zip = () => {
  // TODO
};

const arrays = () => {
  const separators = ['-', '_', '~'];
  const array = [1, 2, 3, 4, 5, 6];

  const filled = utils.fill(array, 0, 2, 4); // [1, 2, 0, 0, 5, 6]
  const reversed = utils.reverse(filled); // [6, 5, 0, 0, 2, 1]
  const filtered = utils.filter(reversed, (x) => x % 2 === 0); // [6, 0, 0, 2]
  const index = utils.indexOf(filtered, 6); // 0
  const joined = utils.join(filtered, separators[index]); // 6-0-0-2
  const zipped = utils.zip(array, joined.split('')); // [[1, 6], [2, -], [3, 0], [4, -], [5, 0], [6, -]]

  console.log(zipped);
};

// Math

const min = () => {
  // TODO
};

const sum = () => {
  // TODO
};

const pow = () => {
  const result = utils.pow(2, 3);

  console.log(result);
// => 8
};

const average = () => {
  // TODO
};

const isPrime = () => {
  // TODO
};

const swapWholeAndRemainder = () => {
  const number = 222.56;
  const swapped = utils.swapWholeAndRemainder(number);

  console.log(swapped);
// => 56.222
};

const math = () => {
  const array = [2, 3, 4, 5, 6, 7];

  const min = utils.min(array); // 2
  const sum = utils.sum(array); // 27
  const pow = utils.pow(min, sum); // 134217728

  const powArray = pow.toString().split('').map(Number);
  const average = utils.average(powArray).toFixed(2); // 3.89
  const swapped = utils.swapWholeAndRemainder(average); // 89.3
  const isPrime = utils.isPrime(Math.floor(swapped)); // true

  console.log(isPrime);
};

// Objects

const existInObject = () => {
  // TODO
};

const removeProp = () => {
  // TODO
};

const copy = () => {
  // TODO
};

const typeOfProps = () => {
  // TODO
};

const flat = () => {
  const result1 = utils.flat({ a: 5, b: 6 });
  const result2 = utils.flat({ a: 5, b: { c: 6, d: 7 } });

  console.log(result1);
  // => { a: 5, b: 6 }

  console.log(result2);
// => { a: 5, 'b.c': 6, 'b.d': 7 }
};

const entries = () => {
  // TODO
};

const objects = () => {
  const object = {
    name: 'Pesho',
    age: 20,
    isAlive: true,
    address: { street: 'Al Malinov', number: 34 },
  };

  const flatten = utils.flat(object); // { name: 'Pesho', age: 20, isAlive: true, address.street: 'Al Malinov', address.number: 34 }
  const removedPropCopy = utils.removeProp(flatten, 'address.number'); // { name: 'Pesho', age: 20, isAlive: true, address.street: 'Al Malinov' }
  const exactCopy = utils.copy(removedPropCopy); // { name: 'Pesho', age: 20, isAlive: true, address.street: 'Al Malinov' }
  const propTypes = utils.typeOfProps(exactCopy); // ['string', 'number', 'boolean', 'string']
  const entries = utils.entries(propTypes); // [[0, 'string'], [1, 'number], [2, 'boolean'], [3, 'string']]
  const existInObject = utils.existInObject(entries, '3'); // true

  console.log(existInObject);
};

// Strings

const slice = () => {
  const result1 = utils.slice('hello');
  const result2 = utils.slice('hello', 2);
  const result3 = utils.slice('hello', 2, 4);

  console.log(result1);
  // => hello

  console.log(result2);
  // => llo

  console.log(result3);
// => ll
};

const repeat = () => {
  // TODO
};

const capitalize = () => {
  const capitalized = utils.capitalize('FRED');

  console.log(capitalized);
// => 'Fred'
};

const replace = () => {
  // TODO
};

const split = () => {
  // TODO
};

const trim = () => {
  // TODO
};

const strings = () => {
  const string = utils.repeat('  home', 2); //   home  home
  const trimmed = utils.trim(string); // home  home
  const sliced = utils.slice(trimmed, 1, 8); // ome  ho
  const replaced = utils.replace(sliced, 'o', 'ri'); // rime  hri
  const capitalized = utils.capitalize(replaced); // Rime  hri
  const splitted = utils.split(capitalized, ' '); // ['Rime', '', 'hri']

  console.log(splitted);
};

// Expressions

const isMinLength = () => {
  const result1 = utils.isMinLength('asd', 2);
  const result2 = utils.isMinLength('asd', 4);

  console.log(result1);
  // => true

  console.log(result2);
  // => false
};

const isMaxLength = () => {
  const result1 = utils.isMaxLength('asd', 2);
  const result2 = utils.isMaxLength('asd', 4);

  console.log(result1);
  // => false

  console.log(result2);
};

const isIn = () => {
  // TODO
};

const isArrayOfType = () => {
  // TODO
};

const areValidNumbers = () => {
  // TODO
};

const sumNumbersFromString = () => {
  // TODO
};

const expressions = () => {
  const string = '1 0 1 1 0 2';

  const isMinLen = utils.isMinLength(string, 3); // true
  const isMaxLen = utils.isMaxLength(string, 11); // true
  const sum = utils.sumNumbersFromString(string); // 5

  const splitted = string.split(' ');
  const areValidNumbers = utils.areValidNumbers(splitted); // true
  const isArrayOfType = utils.isArrayOfType(splitted, 'string'); // true
  const isIn = utils.isIn('2', splitted); // true

  const validations = [
    isMinLen,
    isMaxLen,
    areValidNumbers,
    isArrayOfType,
    isIn,
  ];

  const areAllCorrect =
    validations.every((validation) => validation === true) &&
    validations.length === sum;

  console.log(areAllCorrect);
};

// Arrays

// reverse();
// fill();
// join();
// indexOf();
// filter();
// zip();
arrays();

// Math

// min();
// sum();
// average();
// pow();
// isPrime();
// swapWholeAndRemainder();
math();

// Objects

// existInObject();
// removeProp();
// copy();
// typeOfProps();
// flat();
// entries();
objects();

// Strings

// slice();
// repeat();
// capitalize();
// replace();
// split();
trim();
// strings();

// Expressions

// isMinLength();
// isMaxLength();
// isIn();
// isArrayOfType();
// areValidNumbers();
// sumNumbersFromString();
expressions();
