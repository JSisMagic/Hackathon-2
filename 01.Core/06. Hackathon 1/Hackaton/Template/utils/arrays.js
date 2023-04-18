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

const indexOf = (array, element) => {
  // TODO
};

// hard

const filter = (array, predicate) => {
  let outputArray = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i], i, array)) {
      outputArray.push(array[i]);
    }
  }
  return outputArray;
  //DONE
};

const zip = (...arrays) => {
  // TODO
};

export { reverse, fill, join, indexOf, filter, zip };
