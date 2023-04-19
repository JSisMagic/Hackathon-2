// easy

const isMinLength = (str, minLength) => null; // TODO

const isMaxLength = (str, maxLength) => null; // TODO

// medium

const isIn = (value, possibleValues) => null; // TODO

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

const areValidNumbers = (stringNumbers) => null; // TODO

const sumNumbersFromString = (string) => {
  let sum = 0;
  const inputAr = string.split(' ');
  for (const index of inputAr) {
    sum += index;
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
