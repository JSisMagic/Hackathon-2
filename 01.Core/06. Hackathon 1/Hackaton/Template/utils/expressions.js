// easy

/**
 * Check if a string has a minimum length.
 *
 * @param {string} str The string to check.
 * @param {number} minLength The minimum length of the string.
 * @returns {boolean} Whether the string has the minimum length.
 *
 * @example1 isMinLength('asd', 2) ==> true
 * @example2 isMinLength('asd', 4) ==> false
 *
 * @author Gergana Dragoeva Quievy
 */
const isMinLength = (str, minLength) => str.length >= minLength;

const isMaxLength = (str, maxLength) => null; // TODO

// medium

const isIn = (value, possibleValues) => null; // TODO

const isArrayOfType = (arr, type) => null; // TODO

// hard

const areValidNumbers = (stringNumbers) => null; // TODO

const sumNumbersFromString = (string) => {
  sum = 0;
  const inputAr = string.split(' ');
  for (index of inputAr) {
    sum += +index;
  }
  return sum;
};

export {
  isMinLength,
  isMaxLength,
  isIn,
  isArrayOfType,
  areValidNumbers,
  sumNumbersFromString,
};
