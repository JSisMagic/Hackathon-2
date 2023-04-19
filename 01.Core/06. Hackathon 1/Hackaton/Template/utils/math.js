// easy

/**
 * Gets an array and return the smallest number.
 * @param {Array} array every element of it.
 * @returns {Number} whether arr includes only element from this type.
 * @author Hristiyan Fachikov
 */
const min = (array) => {
  let minNumber = Number. MAX_VALUE;
  for (const el of array) {
    if (el < minNumber) {
      minNumber = el;
    }
  }
  return minNumber;
};

const sum = (array) => {
  let sum = 0;
  for (index of array){
      sum += index;
  }
  return sum;
};

// medium
/**
 * Function takes the total sum of elements present, then dividing it by the total number of values present in an array.
 * 
 * @param {array} array The initial array where the numbers are given as input. 
 * @param {sum} sum The variable where we store the summed numbers. 
 * @returns {average} The average from the sum. 
 * @author Nikolay Nikolov
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
