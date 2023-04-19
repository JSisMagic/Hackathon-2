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

/**
 * From a given string of separated numbers by a single space, 
 * sum the numbers and return the accumulated sum.
 * @param {String} string The string of numbers separated by a single space.
 * @returns {Number} The accumulated sum from the numbers.
 * @example
 * '2 4 5 4 10' => 25
 * @author Valentin P. Petkov
 */
const sumNumbersFromString = (string) => string.split(' ').map(Number).reduce(function(a, b) {
  return a + b;
});

export {
  isMinLength,
  isMaxLength,
  isIn,
  isArrayOfType,
  areValidNumbers,
  sumNumbersFromString,
};
