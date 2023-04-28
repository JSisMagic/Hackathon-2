// easy

/**
 * Add an element at front of the array
 *
 * @param {any} element the element to add
 * @return {addFirstFunc} inner function
 */
const addFirst = (element) => {
  /**
   * @function addFirstFunc
   * @param {array} array an array to add element into
   * @return {array} a copy of the array with the element added
   */
  return (array) => [element, ...array];
};

const removeFirst = (arr) => arr.slice(1); // it does not take additional parameters to be splitted

const addLast = (element) => {
  return (arr) => {
    // TODO
  };
};


/**
 * Removes the last element of the array
 *
 * @param {arr} arr the array to remove from
 * @return {newArr} a copy of the array with the removed element
 * @author Mariela Ivanova
 */
const removeLast = (arr) => {
  const newArr = [...arr];
  newArr.pop();
  return newArr;
};

const keys = (arr) => {
  // TODO
};

const entries = (arr) => {
  // TODO
};

const slice = (start, end) => {
  return (arr) => {
    // TODO
  };
};

const concat = (arr) => {
  return (innerArr) => {
    // TODO
  };
};

// medium
/**
 * Create a reversed copy of the array so that the first element becomes the last, the second element becomes the second to last, and so on
 *
 * @param {arr} arr The array to reverse
 * @return {any} The reversed array
 * @author Mariela Ivanova
 */
const reverse = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const [first, ...rest] = arr;
  const last = rest.pop();
  return [last, ...reverse(rest), first];
};
/**
 * Converts all elements in array into a string separated by separator
 *
 * @param {separator} separator The element separator
 * @return {any} Returns a closure that will join the elements of the array with the passed separator
 * @author Mariela Ivanova
 */
const join = (separator) => {
  /**
   * @function joinFunc
   * @param {arr} arr an array elements to join
   * @return {string} Returns a closure that will join the elements of the array with the passed separator
   */
  return (arr) => {
    if (arr.length === 0) {
      return '';
    }

    return arr.reduce((acc, curr) => acc + separator + curr);
  };
};


const find = (predicate) => {
  return (arr) => {
    // TODO
  };
};

const fill = (value, start, end) => {
  return (arr) => {
    // TODO
  };
};

const forEach = (fn) => {
  return (arr) => {
    // TODO
  };
};

const map = (mapperFn) => {
  return (arr) => {
    // TODO
  };
};

const filter = (predicate) => {
  return (arr) => {
    // TODO
  };
};

const reduce = (fn, initialValue) => {
  return (arr) => {
    // TODO
  };
};

const reduceRight = (fn, initialValue) => {
  return (arr) => {
    // TODO
  };
};

const some = (predicate) => {
  return (arr) => {
    // TODO
  };
};

const every = (predicate) => {
  return (arr) => {
    // TODO
  };
};
/**
 * Iterates over elements of a collection and returns true if the searched element is one of them. Otherwise return false
 *
 * @param {element} element The element to search for
 * @return {boolean}  Returns a closure that will iterate over the passed array in and will check if the searched element is there. If its there return true, otherwise return false
 * @author Mariela Ivanova
 */
const includes = (element) => {
  /**
   * @function arr
   * @param {arr} arr an array to search into
   * @return {boolean} returns true or false
   */
  return (arr) => {
    return arr.some((item) => item === element);
  };
};

const indexOf = (searchedElement) => {
  return (arr) => {
    // TODO
  };
};

const findIndex = (predicate) => {
  return (arr) => {
    // TODO
  };
};

// hard

const arrayFrom = ({ length }) => {
  // TODO
};

const pipe = (...fns) => {
  return (input) => {
    // TODO
  };
};

const compose = (...fns) => {
  return (input) => {
    // TODO
  };
};

const flat = (arr) => {
  // TODO
};

const flatMap = (mapperFn) => {
  return (arr) => {
    // TODO
  };
};

const groupBy = (groupingFn) => {
  return (arr) => {
    // TODO
  };
};

export {
  addFirst,
  removeFirst,
  addLast,
  removeLast,
  keys,
  entries,
  slice,
  concat,
  reverse,
  join,
  find,
  fill,
  forEach,
  map,
  filter,
  reduce,
  reduceRight,
  some,
  every,
  includes,
  indexOf,
  findIndex,
  arrayFrom,
  pipe,
  compose,
  flat,
  flatMap,
  groupBy,
};
