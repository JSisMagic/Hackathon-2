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
*Function Test
*/
/**
 * @author Mariela Ivanova  <mariela.ivanova.a49@learn.telerikacademy.com>
 */
const includesFuncTest = () => {
  const element = 2;
  const array = [1, 2, 3, 4];
  const elementExists = includes(element)(array);
  console.log(element); // 2
  console.log(array); // [1, 2, 3, 4]
  console.log(elementExists); // true
};

// includesFuncTest();

/*
*  Single function tests
*  Write tests for each function you have implemented
*/

/**
 *
 * @author Stefan Donev <stefan.donev.a49@learn.telerikacademy.com>
 */
const testKeys = () => {
  const arr = [5, 5, 5, 5, 5];
  const copy = keys(arr);
  console.log(arr); // [5, 5, 5, 5, 5];
  console.log(copy); // [ 0, 1, 2, 3, 4 ]
};

// testKeys();

/**
 *
 * @author Stefan Donev <stefan.donev.a49@learn.telerikacademy.com>
 */
const testIndexOf = () => {
  const arr = [1, 2, 3, 4, 5];
  const result = indexOf(5)(arr);
  console.log(result); // 4
};
// testIndexOf();

/**
 * @author Stefan Donev <stefan.donev.a49@learn.telerikacademy.com>
 */
const testReduceRight = () => {
  const arr = [1, 2, 3, 4];

  const diffFromRight = reduceRight((accumulator, currentValue) =>
    accumulator - currentValue, 0)(arr);
  console.log(diffFromRight); // Output: -10
};

// testReduceRight();

/**
 * Test function for slice
 *
 * This test demonstrates the usage of the slice function with an array of numbers.
 * It checks if the function returns a new array with elements extracted from the start to end index.
 * @author Nikolay Nikolov  <nikolay.nikolov.a49@learn.telerikacademy.com>
 */
const sliceTest = () => {
  const arr = [1, 2, 3, 4, 5];
  const slicedArr = slice(1, 4)(arr);
  console.log(slicedArr);
};

// sliceTest();

/**
 * Test function for pipe
 *
 * This test demonstrates the usage of the pipe function, which composes multiple functions together.
 * It checks if the result of applying the composed functions to an input value is correct.
 * Functions are executed from left to right, passing the result of each function to the next one.
 *
 * @author Nikolay Nikolov  <nikolay.nikolov.a49@learn.telerikacademy.com>
 *
 */
const pipeTest = () => {
  const addTen = (num) => num + 10;
  const multiplyByFive = (num) => num * 5;
  const divideByTwo = (num) => num / 2;
  const result = pipe(addTen, multiplyByFive, divideByTwo)(5);
  console.log(result); // 37.5
};

// pipeTest();

/**
 * Test function for map
 *
 * This test demonstrates the usage of the map function, which applies a given function to each element in an array.
 * It checks if the resulting array contains the expected transformed elements.
 * In this test, the mapperFn adds 10 to each element in the input array.
 *
 * @author Nikolay Nikolov <nikolay.nikolov.a49@learn.telerikacademy.com>
 *
 */
const mapTest = () => {
  const mapperFn = (num) => num + 10;
  const arr = [1, 2, 3, 4, 5];
  const mappedArr = map(mapperFn)(arr);
  console.log(mappedArr);
};

// mapTest();

/**
 * Test function for flatMap
 *
 * This test demonstrates the usage of the flatMap function, which applies a given function to each element
 * in an array and then flattens the result by one level.
 * In this test, we apply a transformation to an array of toys.
 *
 * @author Gergana Dragoeva Quievy  <gergana.dragoeva.a49@learn.telerikacademy.com>
 *
 */
const flatMapTest = () => {
  const mapperFn = (toy) => [
    { name: `${toy.name} Deluxe`, price: toy.price + 10 },
  ];
  const arr = [
    { name: 'Lego Simpsons', price: 15 },
    { name: 'Transformers', price: 20 },
    { name: 'Hot Wheels', price: 25 },
  ];
  const flatMappedArr = flatMap(mapperFn)(arr);
  console.log(flatMappedArr);
  // [
  //   { name: 'Lego Simpsons Deluxe', price: 25 },
  //   { name: 'Transformers Deluxe', price: 30 },
  //   { name: 'Hot Wheels Deluxe', price: 35 },
  // ]
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

/**
* @Victor Petrov <viktor.petrov.a49@learn.telerikacademy.com>
*/
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

/**
* @Victor Petrov <viktor.petrov.a49@learn.telerikacademy.com>
*/
const fillTest = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const copy = fill(2, 2, 5)(array);

  console.log(array); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  console.log(copy); // [ 1, 2, 2, 2, 2, 6, 7, 8, 9]
};

// fillTest()
/**
* @Victor Petrov <viktor.petrov.a49@learn.telerikacademy.com>
*/
const arrayFromTest = () => {
  const copy = (arrayFrom({ length: 6 }));
  console.log(copy); // undefined, undefined, undefined, undefined, undefined, undefined ]
};

// arrayFromTest()

/**
 * Test function for removeLast
 * This test demonstrates the usage of the removeLast function where an array of Lego toy objects.
 * The test checks if the last element is removed from the array without modifying the original array.
 *
 * @author Gergana Dragoeva Quievy  <gergana.dragoeva.a49@learn.telerikacademy.com>
 *
 * */
const removeLastTest = () => {
  const startValue = [
    { name: 'Lego City', price: 45 },
    { name: 'Lego Technic', price: 120 },
    { name: 'Lego Star Wars', price: 80 },
    { name: 'Lego Ninjago', price: 60 },
  ];

  const newArr = removeLast(startValue);

  console.log(startValue);
  // [
  // { name: 'Lego City', price: 45 },
  // { name: 'Lego Technic', price: 120 },
  // { name: 'Lego Star Wars', price: 80 },
  // { name: 'Lego Ninjago', price: 60 },
  // ]

  console.log(newArr);
  // [
  // { name: 'Lego City', price: 45 },
  // { name: 'Lego Technic', price: 120 },
  // { name: 'Lego Star Wars', price: 80 },
  // ]
};

// removeLastTest();

const addFirstTest = () => {
  const arr = [1, 2, 3];

  const copy = addFirst(5)(arr);

  console.log(arr); // 1, 2, 3
  console.log(copy); // 5, 1, 2, 3
};

/**
 * Test function for addLast
 *
 * This test function demonstrates the usage of the addLast function.
 * It starts with an initial array of fruit objects with names and prices.
 * The addLast function is used to add a new fruit object to the end of the array without modifying the original array.
 *
 * @author Gergana Dragoeva Quievy  <gergana.dragoeva.a49@learn.telerikacademy.com>
 */
const addLastTest = () => {
  const fruits = [
    { name: 'Pineapple', price: 8 },
    { name: 'Orange', price: 3 },
    { name: 'Banana', price: 5 },
    { name: 'Lemons', price: 10 },
  ];

  const newFruit = { name: 'Dragon fruit', price: 52 };

  const result = addLast(newFruit)(fruits);

  console.log(fruits);
  // [
  //   { name: 'Pineapple', price: 8 },
  //   { name: 'Orange', price: 3 },
  //   { name: 'Banana', price: 5 },
  //   { name: 'Lemons', price: 10 },
  // ]
  console.log(result);
  // [
  //   { name: 'Pineapple', price: 8 },
  //   { name: 'Orange', price: 3 },
  //   { name: 'Banana', price: 5 },
  //   { name: 'Lemons', price: 10 },
  //   { name: 'Dragon fruit', price: 52 },
  // ]
};

// addLastTest();

/**
 * Test function for forEach
 *
 * @author Gergana Dragoeva Quievy  <gergana.dragoeva.a49@learn.telerikacademy.com>
 */
const forEachTest = () => {
  const startValue = [
    { name: 'Wonder Woman', age: 39 },
    { name: 'Batman', age: 42 },
    { name: 'Spider-Man', age: 26 },
    { name: 'Captain Marvel', age: 21 },
  ];

  let output = '';

  // The function fn that will be executed for each element in the array
  const fn = (person) => {
    output += `${person.name}(${person.age}) `;
  };

  forEach(fn)(startValue);

  console.log(output); // "Wonder Woman(39) Batman(42) Spider-Man(26) Captain Marvel(21) "
};

// forEachTest();

/**
 * Test function for findIndex
 *
 * Locate the index of the first element in an array in the context of searching for a specific Pokémon.
 * In this case, the predicate function checks if a Pokémon has a specific name and power points value.
 *
 * @author Gergana Dragoeva Quievy  <gergana.dragoeva.a49@learn.telerikacademy.com>
 */
const findIndexTest = () => {
  const startValue = [
    { name: 'Pikachu', powerPoints: 55 },
    { name: 'Charmander', powerPoints: 32 },
    { name: 'Bulbasaur', powerPoints: 45 },
    { name: 'Squirtle', powerPoints: 40 },
  ];

  const predicate = (pokemon) => pokemon.name === 'Bulbasaur' && pokemon.powerPoints === 45;

  const index = findIndex(predicate)(startValue);

  console.log(startValue);
  // [
  //   { name: 'Pikachu', powerPoints: 55 },
  //   { name: 'Charmander', powerPoints: 32 },
  //   { name: 'Bulbasaur', powerPoints: 45 },
  //   { name: 'Squirtle', powerPoints: 40 },
  // ]
  console.log(index); // 2
};
// findIndexTest();

/*
*Function Test
*/
/**
 * @author Hristiyan Fachikov  <hristiyan.fachikov.a49@learn.telerikacademy.com>
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
// findFuncTest();

/*
*Function Test
*/
/**
 * @author Hristiyan Fachikov  <hristiyan.fachikov.a49@learn.telerikacademy.com>
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
// entriesFuncTest();

/*
*Function Test
*/
/**
 * @author Hristiyan Fachikov  <hristiyan.fachikov.a49@learn.telerikacademy.com>
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
// someFuncTest();

/*
*Function Test
*/
/**
 * @author Hristiyan Fachikov <hristiyan.fachikov.a49@learn.telerikacademy.com>
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
// flatFuncTest();

/*
*Function Test
*/
/**
 * @author Mariela Ivanova  <mariela.ivanova.a49@learn.telerikacademy.com>
 */
const reverseFuncTest = () => {
  /**
 * @param {arr} arr created as a sample test
 * @param {result} variable with which we call the function, set arguments and save the result
 */
  const arr = [5, 1, 8];
  const result = reverse(arr); // [8, 1, 5]
  console.log(result);
};
// reverseFuncTest();

/*
*Function Test
*/
/**
 * @author Mariela Ivanova  <mariela.ivanova.a49@learn.telerikacademy.com>
 */
const joinFuncTest = () => {
  /**
 * @param {arr} arr created as a sample test
 * @param {result} variable with which we call the function, set arguments and save the result
 */
  const arr = ['1,2,3,4,5,6,7,8,9,Hello,There'];
  const result = join(',')(arr);
  console.log(result);
};
// joinFuncTest();
/**
 * @author Valentin Petkov <valentin.petkov.a49@learn.telerikacademy.com>
 */
const concatTest = () => {
  const outerArr = [1, 2, 3];
  const innerArr = [7, 8, 9];

  const concatResult = outerArr.concat(innerArr);
  console.log(concatResult); // [1, 2, 3, 7, 8, 9]
};
// concatTest();

/**
 * @author Valentin Petkov  <valentin.petkov.a49@learn.telerikacademy.com>
 */
const filterTest = () => {
  const initArr = [1, 2, 1, 1, 2, 3, 2, 2, 4];
  const predicate = (el) => el === 2;
  const filteredArr = initArr.filter(predicate);
  console.log(filteredArr); // [2, 2, 2, 2]
};
// filterTest();

/**
 * @author Valentin Petkov <valentin.petkov.a49@learn.telerikacademy.com>
 */
const everyTest = () => {
  const arr1 = [1, 6, 4, 2, 5];
  const predicate1 = (el) => el >= 0;
  const result1 = arr1.every(predicate1);
  const predicate2 = (el) => el === 2;
  const result2 = arr1.every(predicate2);
  console.log(result1); // true
  console.log(result2); // false
};
// everyTest();

/**
 * Test function for groupBy
 *
 * This test demonstrates the usage of the groupBy function, which groups elements of an array based on a given key.
 * In this specific test, we have an array of people objects with 'age' and 'name' properties.
 * We use the groupBy function to group the people by their ages.
 *
 * @author Gergana Dragoeva Quievy  <gergana.dragoeva.a49@learn.telerikacademy.com>
 */
const groupByTest = () => {
  const people = [
    { age: 20, name: 'Pesho' },
    { age: 24, name: 'Gosho' },
    { age: 23, name: 'Dessy' },
    { age: 24, name: 'Gerry' },
  ];

  const result = groupBy((person) => person.age)(people);

  console.log(result);
  /*
  {
  '20': [
  {
  age: 20,
  name: 'Pesho'
  }
  ],
  '23': [
  {
  age: 23,
  name: 'Dessy'
  }
  ],
  '24': [
  {
  age: 24,
  name: 'Gosho'
  },
  {
  age: 24,
  name: 'Gerry'
  }
  ]
  }
  */
};

// groupByTest();

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
