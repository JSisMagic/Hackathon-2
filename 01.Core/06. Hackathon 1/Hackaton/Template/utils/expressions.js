// easy

const isMinLength = (str, minLength) => null; // TODO


/**
 * Checks if the string have the maximal given length.
 *
 * @param {string} the string to check
 * @param {length} the max lenght
 * @returns {boolean} Returns true if the validation passes and false if it doesn't
 */
const isMaxLength = (str, maxLength) => str.length <= maxLength ? true : false;


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
