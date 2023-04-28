import {
  addFirst,
  removeFirst,
  addLast,
  removeLast,
  keys,
  entries,
  slice,
  concat,
  reverse,
  join,
  find,
  fill,
  forEach,
  map,
  filter,
  reduce,
  reduceRight,
  some,
  every,
  includes,
  indexOf,
  findIndex,
  arrayFrom,
  pipe,
  compose,
  flat,
  flatMap,
  groupBy,
} from './array-utils.js';

/*
*  Single function tests
*  Write tests for each function you have implemented
*/

<<<<<<< HEAD
const sliceTest = () => {
  const arr = [1, 2, 3, 4, 5];
  const slicedArr = slice(1, 4)(arr);
  console.log(slicedArr);
};

// sliceTest();

const pipeTest = () => {
  const addTen = (num) => num + 10;
  const multiplyByFive = (num) => num * 5;
  const divideByTwo = (num) => num / 2;
  const result = pipe(addTen, multiplyByFive, divideByTwo)(5);
  console.log(result); // 37.5
};

// pipeTest();

const mapTest = () => {
  const mapperFn = (num) => num + 10;
  const arr = [1, 2, 3, 4, 5];
  const mappedArr = map(mapperFn)(arr);
  console.log(mappedArr);
};

// mapTest();

const flatMapTest = () => {
  const mapperFn = (num) => (num === 2 ? [2, 2] : 1);
  const arr = [1, 2, 2, 1];
  const mappedArr = flatMap(mapperFn)(arr);
  console.log(mappedArr);
};

// flatMapTest();

const composeTest = () => {
  const test1 = compose((el) => {
    return el + 2;
  }, (el) => {
    return el * 3;
  })(3); // 11
  const test2 = compose((str) => {
    return str.substring(1, 4);
  }, (str) => {
    return str.substring(1, 4);
  })('Pesho'); // def

  console.log(test1);
  console.log(test2);
};

// composeTest();

const reduceTest = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const testFunction = (acc, el) => {
    acc.push(el * 2);
    return acc;
  };

  const test = reduce(testFunction, [])(arr);

  console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  console.log(test); // [ 2, 4, 6, 8, 10, 12, 14, 16, 18]
};

// reduceTest();

const fillTest = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const copy = fill(2, 2, 5)(array);

  console.log(array); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  console.log(copy); // [ 1, 2, 2, 2, 2, 6, 7, 8, 9]
};

// fillTest()

const arrayFromTest = () => {
  const copy = (arrayFrom({ length: 6 }));
  console.log(copy); // undefined, undefined, undefined, undefined, undefined, undefined ]
};

// arrayFromTest()
=======
// Test function for removeLast
const removeLastTest = () => {
  const arr = ['LEGO City', 'LEGO Technic', 'LEGO Star Wars', 'LEGO Friends'];
  const newArr = removeLast(arr);

  console.log(arr); // ['LEGO City', 'LEGO Technic', 'LEGO Star Wars', 'LEGO Friends']
  console.log(newArr); // ['LEGO City', 'LEGO Technic', 'LEGO Star Wars']
};

// Execute the test
// removeLastTest();

>>>>>>> 10540cf (Adding test for removeLast & emails for doc)

const addFirstTest = () => {
  const arr = [1, 2, 3];

  const copy = addFirst(5)(arr);

  console.log(arr); // 1, 2, 3
  console.log(copy); // 5, 1, 2, 3
};

// addFirstTest();

const addLastTest = () => {
  const arr = [1, 2, 3];
  const result = addLast(8)(arr);
  console.log(arr); // 1,2,3
  console.log(result); // 1,2,3,8
};

// addLastTest();

// Test function for forEach
const forEachTest = () => {
  const arr = ['banana', 'pineapple', 'dragonfruit', 'orange'];
  let output = '';

  // The function fn that will be executed for each element in the array
  const fn = (fruit) => {
    output += `${fruit} `;
  };

  forEach(fn)(arr);

  console.log(output); // "banana pineapple dragonfruit orange "
};

// Execute the test
// forEachTest();


const findIndexTest = () => {
  const arr = ['banana', 'pineapple', 'dragonfruit', 'orange'];

  const predicate = (fruit) => fruit === 'dragonfruit';

  const index = findIndex(predicate)(arr);

  console.log(arr); // ['banana', 'pineapple', 'dragonfruit', 'orange']
  console.log(index); // 2
};

// findIndexTest();

/*
*Function Test
*/
/**
 * @author Hristiyan Fachikov
 */
const findFuncTest = () => {
  /**
 * @param {arr} arr created as a sample test
 * @param {result} variable with which we call the function, set arguments and save the result
 */
  const arr = ['Hello', 5, true, 'There', 5, 'There', 5];
  const result = find(5)(arr);
  // console.log(arr); // 1, 2, 3
  console.log(result); // 5, 1, 2, 3
};
findFuncTest();

/*
*Function Test
*/
/**
 * @author Hristiyan Fachikov
 */
const entriesFuncTest = () => {
  /**
 * @param {arr} arr created as a sample test
 * @param {result} variable with which we call the function, set arguments and save the result
 */
  const arr = ['Hello', 5, true, 'There'];
  const result = entries()(arr);
  // console.log(arr); // 1, 2, 3
  console.log(result); // 5, 1, 2, 3
};
entriesFuncTest();

/*
*Function Test
*/
/**
 * @author Hristiyan Fachikov
 */
const someFuncTest = () => {
  /**
 * @param {arr} arr created as a sample test
 * @param {result} variable with which we call the function, set arguments and save the result
 */
  const arr = ['Hello', 5, true, 'There'];
  const result = some('Hello')(arr);
  // console.log(arr); // 1, 2, 3
  console.log(result); // 5, 1, 2, 3
};
someFuncTest();

/*
*Function Test
*/
/**
 * @author Hristiyan Fachikov
 */
const flatFuncTest = () => {
  /**
 * @param {arr} arr created as a sample test
 * @param {result} variable with which we call the function, set arguments and save the result
 */
  const arr = [1, 2, [3, 4]];
  const result = flat(arr)();
  // console.log(arr); // 1, 2, 3
  console.log(result); // 5, 1, 2, 3
};
flatFuncTest();

/*
*  Composite functions tests
*/

const testOne = () => {
  const startValue = { length: 6 };
  const piped = pipe(
    arrayFrom,
    // [undefined, undefined, undefined, undefined, undefined, undefined]
    fill(1, 3, 6), // [undefined, undefined, undefined, 1, 1, 1]
    (arr) => [...arr, 8], // [undefined, undefined, undefined, 1, 1, 1, 8]
    (arr) => [...arr, 2, 3], // [undefined, undefined, undefined, 1, 1, 1, 8, 2, 3]
    slice(4, 7), // [1, 1, 8]
    removeFirst, // [1, 8]
    (arr) => [5, ...arr], // [5, 1, 8]
    reverse, // [8, 1, 5]
    map((x) => x ** 2), // [64, 1, 25]
    reduce((a, b) => a + b, 0), // 90
  );

  console.log(piped(startValue));
};

// testOne();

const testTwo = () => {
  const startValue = [
    { name: 'Ivan', age: 15 },
    { name: 'Pesho', age: 32 },
    { name: 'Pesho', age: 23 },
    { name: 'Maria', age: 19 },
  ];
  // its compose so it will run backwards
  const composed = compose(
    find((x) => x > 10), // 47
    (arr) => [...arr, 9], // [ 47, 9 ]
    (str) => [str.length], // [ 47 ]
    join('&'), // 1&false&odd&2&true&even&3&false&odd&4&true&even
    flat,
    // [1, false, 'odd', 2, true, 'even', 3, false, 'odd', 4, true, 'even']
    (arr) => arr.map((el, index) => [el, index % 2 === 1, index % 2 === 0 ? 'odd' : 'even']),
    /* [[1, false, 'odd'],
        [2, true, 'even'],
        [3, false, 'odd'],
        [4, true, 'even']
      ]*/
    (arr) => arr.map((_, index) => index + 1),
    fill(true, 0, 7), // [true, true, true, true]
    (arr) => [...arr, 8], // [[0, 'Ivan'], [1, 'Pesho'], [2, 'Pesho'], 8]
    entries, // [[0, 'Ivan'], [1, 'Pesho'], [2, 'Pesho']]
    removeLast, // ['Ivan', 'Pesho', 'Pesho']
    (arr) => arr.map((obj) => obj.name), // ['Ivan', 'Pesho', 'Pesho', 'Maria']
    flat,
    /* [{ name: 'Ivan', age: 15 },
        { name: 'Pesho', age: 32 },
        { name: 'Pesho', age: 23 },
        { name: 'Maria', age: 19 }
      ]*/
    Object.values,
    /* [[{ name: 'Ivan', age: 15 }],
        [{ name: 'Pesho', age: 32 }, { name: 'Pesho', age: 23 }],
        [{ name: 'Maria', age: 19 }]
      ]*/
    (arr) => groupBy((obj) => obj.name)(arr),
    /* {Ivan: [{ name: 'Ivan', age: 15 }],
        Pesho: [{ name: 'Pesho', age: 32 }, { name: 'Pesho', age: 23 }],
        Maria: [{ name: 'Maria', age: 19 }]} */
  );

  console.log(composed(startValue));
};

// testTwo();

const testThree = () => {
  const startValue = [
    { name: 'Ivan', grades: [2, 4, 5] },
    { name: 'Pesho', grades: [3, 2, 6] },
    { name: 'Pesho', grades: [2, 5, 2] },
  ];
  const piped = pipe(
    filter((x) => x.name === 'Pesho'),
    /* [{ name: 'Pesho', grades: [3, 2, 6] },
        { name: 'Pesho', grades: [2, 5, 2] }
      ];*/
    map((x) => x.grades), // [[3, 2, 6], [2, 5, 2]]
    flat, // [3, 2, 6, 2, 5, 2]
    filter((x) => x < 4), // [3, 2, 2, 2]
    groupBy((x) => x), // { 2: [2, 2, 2], 3: [3] }
    Object.values, // [[2, 2, 2], [3]],
    flat, // [2, 2, 2, 3]
    (arr) => [7, ...arr], // [7, 2, 2, 2, 3]
    join('-'), // 7-2-2-2-3
    (str) => str.split(''), // ['7', '-', '2', '-', '2', '-', '2', '-', '3'],
    (filter((_, index) => index < 5)),
    map((el, index) => [index + 1, el]), // [[1, '7'], [2, '-'], [3, '2'], [4, '-'], [5, '2']]
    keys, // [0, 1, 2, 3, 4]
    removeFirst, // [1, 2, 3, 4]
    reduce((a, b) => a * b, 1), // 24
  );

  console.log(piped(startValue));
};

// testThree();
