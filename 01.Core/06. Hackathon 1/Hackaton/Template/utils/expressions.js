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

/**
 * Check if a string has a maximum length.
 *
 * @param {string} str The string to check.
 * @param {number} maxLength The maximum length of the string.
 * @returns {boolean} Whether the string has the maximum length.
 * @author Mariela Ivanova
 */
const isMaxLength = (str, maxLength) => str.length <= maxLength ? true : false;

// medium
/**
 * Search for a given value inside an array.
 *
 * @param {value} value the value to search for
 * @param {possibleValues} possibleValues the array to search into.
 * @returns {boolean} returns true if the validation passes and false if it doesn't
 * @example isIn(5, [1, 2, 5]) ==> true
 * @example2 isIn(3, [1, 2, 5 ]) ==> false
 * @author Stefan Donev
 */
const isIn = (value, possibleValues) => (possibleValues.includes(value));

/**
 * Gets an array and a type and takes each element of the array and compares it.
 *
 * @param {Array} arr Тake every element of the array and check it
 * @param {typeof} type use it to check type of element of arr.
 * @returns {boolean} whether arr includes only type elements from this type.
 * @author Hristiyan Fachikov
 */
const isArrayOfType = (arr, type) => arr.every((el) => typeof el === type);

// hard
/**
 * From a given string of separated numbers by a single space,
 * sum the numbers and return the accumulated sum.
 * @param {array} stringNumbers The array of strings.
 * @returns {boolean} Returns true if the validation passes and false if it doesn't.
 * @example:
const result1 = utils.areValidNumbers(['1', '2', '3', '4']);
const result2 = utils.areValidNumbers(['1', '2', 'apple', '4']);

console.log(result1);
// => true

console.log(result2);
// => false
 * @author Valentin P. Petkov
 */

const areValidNumbers = (stringNumbers) => stringNumbers.every(
  (el) => !isNaN(el));

/**
 * From a given string of separated numbers by a single space,
 * sum the numbers and return the accumulated sum.
 * @param {String} string The string of numbers separated by a single space.
 * @returns {Number} The accumulated sum from the numbers.
 * @example
 * '2 4 5 4 10' => 25
 * @author Valentin P. Petkov
 */
const sumNumbersFromString = (string) => string.split(' ').map(Number).reduce(function (a, b) {
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
