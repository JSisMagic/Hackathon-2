// easy

const min = (array) => {
  // TODO
};

const sum = (array) => {
  let sum = 0;
  for (index of array) {
    sum += index;
  }
  return sum;
};

// medium
/**
 * 
 * @param {*} array 
 * @returns 
 */
const average = (array) => {
  let average = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    average = sum / array.length;
  }
  return average;
  // DONE
};

/**
 * Raises the number to the chosen power
 *
 * @param {number} number
 * @param {power} power by which the number should be raised
 * @returns {number} raised by the power
 * @author Mariela Ivanova
 */
const pow = (number, power) => {
  return number ** power;
};

// hard
/**
 * find if an given number is a prime
 *
 * @param {number} number the number to be checked if it's prime.
 * @returns {boolean}  Returns if the numbers is prime or not (true or false).
 * @example isPrime(12) ==> false
 * @example isPrime(2) ==> true
 * @author Stefan Donev
 */
const isPrime = (number) => {
  let isPrime = true;
  if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
  }
  return isPrime;
  // TODO
};

/**
 * Swaps the whole part and the reminder part of a given number.
 *
 * @param {number} number The number to swap.
 * @returns {number} The number with the applied swapping.
 * @example swapWholeAndRemainder(1.2) ==> 2.1
 *
 * @author Gergana Dragoeva Quievy
 */
const swapWholeAndRemainder = (number) => {
  let result = '';
  const wholePart = Math.floor(number);
  const remainderPart = number.toString().slice(number.toString().indexOf('.') + 1);
  result = remainderPart + '.' + wholePart;

  return +result;
};

export { min, sum, average, pow, isPrime, swapWholeAndRemainder };
