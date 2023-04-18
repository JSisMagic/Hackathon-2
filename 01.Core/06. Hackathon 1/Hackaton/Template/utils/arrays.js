// easy

/**
 * Reverse an array
 *
 * @param {array} array the array to be reversed
 * @returns {array} a new reversed copy of the array
 */
const reverse = (array) => {
  const reversed = [];

  for (let index = array.length - 1; index >= 0; index--) {
    reversed.push(array[index]);
  }

  return reversed;
};

/**
 * Fills elements of array with value from start up to, but not including, end
 *
 * @param {array} array the array to fill
 * @param {value} the value to fill array with
 * @param {start} the start position
 * @param {end} the end position
 * @returns {array} filled array
 */
const fill = (array, value, start = 0, end = array.length) => {
  const filledArray = [];

  for (let i = 0; i < array.length; i++) {
    filledArray.push(array[i]);
  }
  for (let i = start; i < end; i++) {
    filledArray[i] = value;
  }

  return filledArray;
};

// medium

const join = (array, separator = ',') => {
  // TODO
};

const indexOf = (array, element) => {
  // TODO
};

// hard

const filter = (array, predicate) => {
  // TODO
};

const zip = (...arrays) => {
  // TODO
};

export { reverse, fill, join, indexOf, filter, zip };
