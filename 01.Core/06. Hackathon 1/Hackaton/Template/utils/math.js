// easy

const min = (array) => {
  // TODO
};

/**
 * Returns the sum of all numbers in the array.
 *
 * @param array (array): The string to split.
 * @returns Returns the sum of the numbers.
 * @example:
const sum = utils.sum([1, -2, 3]);
console.log(sum);
// => 2
 * @author Viktor Petrov
 */

const sum = (array) => {
  let sum = 0;
  for (const index of array) {
    sum += index;
  }
  return sum;
};

// medium

const average = (array) => {
  let average = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    average = sum / array.length;
  }
  return average;
  //DONE
};

const pow = (number, power) => {
  // TODO
};

// hard

const isPrime = (number) => {
  // TODO
};

const swapWholeAndRemainder = (number) => {
  // TODO
};

export { min, sum, average, pow, isPrime, swapWholeAndRemainder };
