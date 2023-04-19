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

/**
 * Raises the number to the chosen power
 *
 * @param {number} the base number
 * @param {power} the power by which the number should be raised
 * @returns the number raised by the power
 */
const pow = (number, power) => {
  return number ** power;
};

// hard

const isPrime = (number) => {
  // TODO
};

const swapWholeAndRemainder = (number) => {
  // TODO
};

export { min, sum, average, pow, isPrime, swapWholeAndRemainder };
