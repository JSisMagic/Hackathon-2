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
 * @param {value} value to fill array with
 * @param {start} start position
 * @param {end} end position
 * @returns {filledArray} filled array
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

/**
 * Converts all elements in array into a string separated by separator.
 *
 * @param {Array} array The array to convert.
 * @param {String} separator The element separator. Default is ','.
 * @returns {String} Returns the joined string.
 * @example
 * join(['apple', 'banana', 'orange'],'+') ==> 'apple+banana+orange'
 *
 * @author Gergana Dragoeva Quievy
 */
const join = (array, separator = ',') => {
  let result = '';
  for (let index = 0; index < array.length; index++) {
    result += array[index];
    if (index < array.length - 1) {
      result += separator;
    }
  }

  return result;
};

/**
 * find the index of an given element in array
 *
 * @param {array}array The array to search in..
 * @param {element}element The element to search for.
 * @returns {number}The found index or -1.
 */
const indexOf = (array, element) => {
  // TODO
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
  return -1;
};

// hard

const filter = (array, predicate) => {
  const outputArray = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      outputArray.push(array[i]);
    }
  }
  return outputArray;
  // DONE
};

const zip = (...arrays) => {
  // TODO
};

export { reverse, fill, join, indexOf, filter, zip };
