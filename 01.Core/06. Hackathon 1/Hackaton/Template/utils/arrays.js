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


const fill = (array, value, start = 0, end = array.length) => {
  // TODO
};

// medium

const join = (array, separator = ',') => {
  // TODO
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
  // TODO
};

const zip = (...arrays) => {
  // TODO
};

export { reverse, fill, join, indexOf, filter, zip };
